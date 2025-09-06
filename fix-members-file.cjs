#!/usr/bin/env node

const fs = require('fs');

class MembersFileFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixMembersFile() {
    this.log('🔧 Fixing pages/api/enterprise/companies/[companyId]/members.ts...');
    
    const membersContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || Array.isArray(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  if (req.method === 'GET') {
    const company = store.getCompany(companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    // Get company members (placeholder)
    const members = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
        joinedAt: new Date().toISOString()
      }
    ];

    return res.status(200).json(members);
  }

  if (req.method === 'POST') {
    const { email, role } = req.body;
    
    if (!email || !role) {
      return res.status(400).json({ error: 'Email and role are required' });
    }

    // Add member logic (placeholder)
    const member = {
      id: Date.now().toString(),
      email,
      role,
      joinedAt: new Date().toISOString()
    };

    return res.status(201).json(member);
  }

  if (req.method === 'PUT') {
    const { memberId } = req.query;
    const { role } = req.body;

    if (!memberId || Array.isArray(memberId)) {
      return res.status(400).json({ error: 'Invalid member ID' });
    }

    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }

    // Update member role (placeholder)
    return res.status(200).json({ 
      success: true, 
      memberId, 
      role 
    });
  }

  if (req.method === 'DELETE') {
    const { memberId } = req.query;

    if (!memberId || Array.isArray(memberId)) {
      return res.status(400).json({ error: 'Invalid member ID' });
    }

    // Remove member logic (placeholder)
    return res.status(200).json({ 
      success: true, 
      memberId 
    });
  }

  res.setHeader('Allow', 'GET, POST, PUT, DELETE');
  return res.status(405).json({ error: 'method_not_allowed' });
}`;

    try {
      fs.writeFileSync('pages/api/enterprise/companies/[companyId]/members.ts', membersContent);
      this.fixedFiles.push('pages/api/enterprise/companies/[companyId]/members.ts');
      this.log('✅ Fixed pages/api/enterprise/companies/[companyId]/members.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/enterprise/companies/[companyId]/members.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/enterprise/companies/[companyId]/members.ts: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting Members File Fix...');
    this.log('='.repeat(60));

    this.fixMembersFile();

    // Generate report
    this.log('\n📊 MEMBERS FILE FIX REPORT');
    this.log('='.repeat(60));
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Successfully fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ Errors encountered:');
      this.errors.forEach(error => this.log(`  - ${error}`));
    }

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      totalFixed: this.fixedFiles.length,
      totalErrors: this.errors.length
    };

    fs.writeFileSync('members-file-fix-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Report saved to members-file-fix-report.json');

    return report;
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new MembersFileFixer();
  fixer.run().catch(console.error);
}

module.exports = MembersFileFixer;