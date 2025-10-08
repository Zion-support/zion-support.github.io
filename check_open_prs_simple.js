#!/usr/bin/env node

import https from "https";

const makeGitHubRequest = (path) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.github.com",
      path: path,
      method: "GET",
      headers: {
        "User-Agent": "Zion-App-Automation",
        Accept: "application/vnd.github.v3+json",
      },
    };

    const req = https.request(options, (res) => {
      let _data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", (error) => reject(error));
    req.end();
  });
};

async function main() {
  const _prs = await makeGitHubRequest(
    "/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100",
  );

  if (prs.length === 0) {
  } else {
    console.log(`📋 Found ${prs.length} open PR(s):`);
    prs.forEach((pr) => {});
  }
}

main().catch(console.error);
