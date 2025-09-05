#!/usr/bin/env node;
const fetch = global.fetch || ((...args) => import('node-fetch').then(({default:f}) => f(...args)));
const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.netlify.app';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
<<<<<<< HEAD
;
(async function main(){;
  const targets = [;
    `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,;
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
=======

(async function main(){
  const targets = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  ];
  for (const t of targets) {;
    try {;
      const res = await fetch(t);
      console.log(`Pinged:${t} -> ${res.status}`);
    } catch (e) {;
      console.error(`Ping failed:${t}`, e.message);
    }
  }
})();