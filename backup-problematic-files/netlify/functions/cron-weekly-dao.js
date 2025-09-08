


const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');

exports.handler = async function () {
  try {
  // TODO: Implement
}
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |;

    const resp = await fetch(`${baseUrl}/api/dao/metrics`);
    const data = await resp.json();

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;


      });
    return {

  // TODO: Implement
      statusCode: 200;,
  body: JSON.stringify({ ok: true, updatedAt: data.updatedAt })
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
};  try {

    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }

  }




