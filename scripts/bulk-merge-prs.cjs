#!/usr/bin/env node
const https = require('https');
const fs = require('fs');
const path = require('path');

class BulkPRMerger {
  constructor() {
    this.owner = 'Zion-Holdings';
    this.repo = 'zion.app';
    this.token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
    if (!this.token) {
      throw new Error(
        'GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.'
      );
    }
    this.results = {
      timestamp: new Date().toISOString(),
      prs: [],
      summary: { total: 0, merged: 0, failed: 0, skipped: 0 },
    };
  }

  makeRequest(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.github.com',
        path: url,
        method,
        headers: {
          Authorization: `token ${this.token}`,
          'User-Agent': 'Bulk-PR-Merger',
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
      };
      const req = https.request(options, res => {
        let responseData = '';
        res.on('data', chunk => {
          responseData += chunk;
        });
        res.on('end', () => {
          try {
            const json = responseData ? JSON.parse(responseData) : {};
            resolve({ statusCode: res.statusCode, data: json });
          } catch (_) {
            resolve({ statusCode: res.statusCode, data: responseData });
          }
        });
      });
      req.on('error', reject);
      if (data) req.write(JSON.stringify(data));
      req.end();
    });
  }

  async getOpenPRs() {
    const resp = await this.makeRequest(
      `/repos/${this.owner}/${this.repo}/pulls?state=open&per_page=100`
    );
    return Array.isArray(resp.data) ? resp.data : [];
  }

  async getPRDetail(number) {
    return this.makeRequest(
      `/repos/${this.owner}/${this.repo}/pulls/${number}`
    );
  }

  async waitForMergeable(number, retries = 5) {
    for (let i = 0; i < retries; i++) {
      const { data } = await this.getPRDetail(number);
      if (typeof data.mergeable === 'boolean') return data.mergeable;
      await new Promise(r => setTimeout(r, 1000));
    }
    return null;
  }

  async mergePR(pr) {
    const mergeable = await this.waitForMergeable(pr.number);
    if (mergeable === false)
      return { status: 'skipped', message: 'Has conflicts' };
    if (mergeable === null)
      return { status: 'skipped', message: 'Mergeability unknown' };

    const mergeData = {
      commit_title: `Merge PR #${pr.number}: ${pr.title}`,
      commit_message: `Automated merge of PR #${pr.number}\n\n${pr.body || ''}`,
      merge_method: 'merge',
    };
    const resp = await this.makeRequest(
      `/repos/${this.owner}/${this.repo}/pulls/${pr.number}/merge`,
      'PUT',
      mergeData
    );
    if (resp.statusCode >= 200 && resp.statusCode < 300) {
      return { status: 'merged', message: 'PR merged successfully' };
    }
    return { status: 'failed', message: `Merge failed: ${resp.statusCode}` };
  }

  async run() {
    console.log('Starting Bulk PR Merger');
    const open = await this.getOpenPRs();
    if (!open.length) {
      console.log('No open PRs to merge');
      const reportPath = path.join(process.cwd(), 'bulk-pr-merge-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
      console.log(`Report saved: ${reportPath}`);
      return;
    }
    for (const pr of open) {
      const result = await this.mergePR(pr);
      this.results.prs.push({
        number: pr.number,
        title: pr.title,
        branch: pr.head && pr.head.ref,
        author: pr.user && pr.user.login,
        status: result.status,
        message: result.message,
        timestamp: new Date().toISOString(),
      });
      this.results.summary.total++;
      if (result.status === 'merged') this.results.summary.merged++;
      else if (result.status === 'skipped') this.results.summary.skipped++;
      else this.results.summary.failed++;
      await new Promise(r => setTimeout(r, 500));
    }
    const reportPath = path.join(process.cwd(), 'bulk-pr-merge-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`Report saved: ${reportPath}`);
  }
}

if (require.main === module) {
  new BulkPRMerger().run().catch(err => {
    console.error('Bulk PR merger failed:', err);
    process.exit(1);
  });
}

module.exports = BulkPRMerger;
