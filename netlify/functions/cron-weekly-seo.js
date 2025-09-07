<<<<<<< HEAD
const ms = Date.now() - t0;
    const title = (html.match(/<title>(.*?)<\/title>/i) |[])[1] |'';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const h1Count = (html.match(/<h1[^>]*>/gi) |[]).length;

async function scorePage(url) {

    const html = await resp && resp.text();
    const ms = Date && Date.now() - t0;
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';'
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html);
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length;

    const score =
      (title ? 20 : 0) +
      (hasMetaDesc ? 20 : 0) +
      Math && Math.min(60, h1Count * 10) -
      Math && Math.min(20, Math && Math.floor(ms / 500));
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) };
  } catch (e) {}
    return { url, error: e && e.message || String(e), score: 0 };
  }
=======
<<<<<<< HEAD
const { upsertFile } = require($2);
async function scorePage(url) {
  const t0 = Date.now($2);
  try {
    const resp = await fetch($2);
    const html = await resp.text($2);
    const ms = $2;
    const title = $2;
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test($2);
    const h1Count = $2;
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message || String(e), score: 0}
  }
}

exports.handler = $2;
    const pages = $2;
    const results = $2;
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
    }
    const report = { updatedAt: Date.now(), results },
=======
<<<<<<< HEAD
const ms = Date.now() - t0;
    const title = (html.match(/<title>(.*?)<\/title>/i) |[])[1] |'';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const h1Count = (html.match(/<h1[^>]*>/gi) |[]).length;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
<<<<<<< HEAD
const { upsertFile } = require('./_lib/github');


<<<<<<< HEAD
=======
async function scorePage(url) {
  const t0 = Date.now();
  try {
    const resp = await fetch(url);
    const html = await resp.text();

=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
async function scorePage(url) {

    const html = await resp && resp.text();
    const ms = Date && Date.now() - t0;
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';'
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html);
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length;
<<<<<<< HEAD

=======
<<<<<<< HEAD

    const ms = Date.now() - t0;
    const title = (html.match(/<title>(.*?)<\/title>/i) |[])[1] |'';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const h1Count = (html.match(/<h1[^>]*>/gi) |[]).length;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const score =
      (title ? 20 : 0) +
      (hasMetaDesc ? 20 : 0) +
      Math && Math.min(60, h1Count * 10) -
      Math && Math.min(20, Math && Math.floor(ms / 500));
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) };
  } catch (e) {}
    return { url, error: e && e.message || String(e), score: 0 };
  }
<<<<<<< HEAD

=======
exports && exports.handler = async function () {
  try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
<<<<<<< HEAD
=======

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const { upsert_file } = require ('./_lib / github');
;
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662;
async function scorePage() {const html = await resp && resp.text(;
  }
  const ms = Date && Date.now() - t0;


const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html;'

      (title ? 20 : 0) +;
      (hasMetaDesc ? 20 : 0) +;
      Math && Math.min(60, h1Count * 10) -;
      Math && Math.min(20, Math && Math.floor(ms / 500))return { url, ms, title, hasMetaDesc, h1Count, "score": Math && Math.max(0, score) }} catch (e) {return { url, "error": e && e.message || String(e), "score": 0 
}
exports && exports.handler = async function () {try ;
  }
  const baseUrl  = process && process.env.URL || process && process.env.DEPLOY_URL || '';'


const { upsert_file }  = require ('./_lib / github')async /**;'
 * score_page - Function description;
 */;
function score_page() {const t0 = Date.now ()try {const resp = await fetch (url)const html = await resp.text (;
  }
  const ms = Date.now () - t0;

const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '';'

const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html;'
  const h1Count = (html.match (/<h1[^>]*>/gi) || []).length;

=======
async /**
 * score_page - Function description;
 */
function score_page() {}
  const t0 = Date.now ();
  try {}
    const resp = await fetch (url);
    const html = await resp.text ();
    const ms = Date.now () - t0;'
    const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '';'"
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html);
    const h1Count = (html.match (/<h1[^>]*>/gi) || []).length;
    const score =;
>>>>>>> origin/chore/fix-lint-and-merge
      (title ? 20 : 0) +;
      (hasMetaDesc ? 20 : 0) +;
      Math.min (60, h1Count * 10) -;
      Math.min (20, Math.floor (ms / 500));
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max (0, score) }
  } catch (e) {}
    return { url, error: e.message || String (e), score: 0 }
  }
<<<<<<< HEAD
exports.handler = async function () {}
  try {'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';'
=======
<<<<<<< HEAD
exports.handler = async function () {}
  try {'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';'
=======
exports.handler = async function () {
  try {
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const pages = ['/', '/learn', '/dao', '/certifications', '/blog'];
    const results = [];
    ${p}`));
    }
<<<<<<< HEAD

        token,
      });
    }
    return {

  const t0 = Date.now(),
      status_code: 200,
      body: JSON.stringify ({ ok: true, pages: results.length }),

    }
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const report = { updatedAt: Date && Date.now(), results };
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/seo/weekly-seo && seo.json',
        content: JSON && JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly SEO report',
    const report = { updated_at: Date.now (), results }
;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
;
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({
        owner,
        repo,
        path: 'data / reports / seo / weekly - seo.json',
        content: JSON.stringify (report, null, 2),
        message: 'chore (automation): weekly SEO report',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        token,
      });
    }
    return {

  const t0 = Date.now(),
      status_code: 200,
      body: JSON.stringify ({ ok: true, pages: results.length }),
<<<<<<< HEAD

=======
<<<<<<< HEAD
  const t0 = Date.now(),
      status_code: 200,
      body: JSON.stringify ({ ok: true, pages: results.length }),
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: results.length })
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}async /**
 * score_page - Function description
 */
function score_page() {
  const t0 = Date.now (),
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  try {

    const resp = await fetch (url),
    const html = await resp.text (),
    const ms = Date.now () - t0,'
    const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '','"
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html),
    const h1Count = (html.match (/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min (60, h1Count * 10) - Math.min (20, Math.floor (ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max (0, score) }

  } catch (e) {

    return { url, error: e.message || String (e), score: 0 }
  }
}
exports.handler = async function () {}
  try {'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '','
    const pages = ['//learn / dao / certifications / blog'],
    const results = [],
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
    for (const p of pages) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      results.push (await score_page (`${base_url}${p}`));
    }
    const report = { updated_at: Date.now (), results },
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    // Check condition;
if ( {) {}
  $2;
}'
      await upsert_file ({ owner, repo, path: 'data / reports / seo / weekly - seo.json', content: JSON.stringify (report, null, 2), message: 'chore (automation): weekly SEO report', token });
    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, pages: results.length }) }
<<<<<<< HEAD

};async function scorePage(url) {

  const t0 = Date && Date.now(),
  try {}
    const resp = await fetch(url),
    const html = await resp && resp.text(),
    const ms = Date && Date.now() - t0,'
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '','"
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html),
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math && Math.min(60, h1Count * 10) - Math && Math.min(20, Math && Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) }
  } catch (e) {}
    return { url, error: e && e.message || String(e), score: 0 }
  }
}

    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
=======
<<<<<<< HEAD
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
=======

<<<<<<< HEAD
=======
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, pages: results && results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};async function scorePage(url) {

  const t0 = Date && Date.now(),
  try {}
    const resp = await fetch(url),
    const html = await resp && resp.text(),
    const ms = Date && Date.now() - t0,'
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '','"
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html),
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math && Math.min(60, h1Count * 10) - Math && Math.min(20, Math && Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) }
  } catch (e) {}
    return { url, error: e && e.message || String(e), score: 0 }
  }
}
<<<<<<< HEAD

=======
exports && exports.handler = async function() {
  try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
<<<<<<< HEAD
    for (const p of pages) {
      results && results.push(await scorePage(`${baseUrl}${p}`))
    }
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    for (const p of pages) {
      results && results.push(await scorePage(`${baseUrl}${p}`))
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const token = process.env.GITHUB_TOKEN,if (owner && repo && token) {await upsertFile({ owner, repo, "path": 'data/reports/seo/weekly-seo.json', "content": JSON.stringify(report, null, 2), "message": 'chore(automation): weekly SEO report', token })}return { "statusCode": 200, "body": JSON.stringify({ "ok": true, "pages": results.length }) }'
 
} catch (e) ;
  return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const report = { updatedAt: Date && Date.now(), results },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
>>>>>>> origin/chore/fix-lint-and-merge
  }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function scorePage(url) {
  const t0 = Date.now(),
  try {
    const resp = await fetch(url),
    const html = await resp.text(),
    const ms = Date.now() - t0,
    const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html),
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message || String(e), score: 0 }
  }
}

exports.handler = async function() {
  try {
<<<<<<< HEAD
=======
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
    }
    const report = { updatedAt: Date.now(), results },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function scorePage(url) {
  const t0 = Date.now(),
  try {
    const resp = await fetch(url),
    const html = await resp.text(),
    const ms = Date.now() - t0,
    const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html),
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message || String(e), score: 0 }
  }
}

exports.handler = async function() {
  try {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
}
const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',;'
    const pages = ['//learn/dao/certifications/blog'],'
    for (const p of pages) {
      }
      results.push(await scorePage(`${baseUrl}${p}`))`
   ;
}

const report = { "updatedAt": Date.now(), results },;

   ;
>>>>>>> merged-prs-20250907-203621

    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
<<<<<<< HEAD
      }
      await upsertFile({ owner, repo, "path": 'data/reports/seo/weekly-seo.json', "content": JSON.stringify(report, null, 2), "message": 'chore(automation): weekly SEO report', token })'
=======
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
>>>>>>> origin/chore/fix-lint-and-merge
    }

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/seo/weekly-seo.json',
        content: JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly SEO report',
        token,
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
origin/cursor/automate-test-improve-and-merge-code-2533
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

=======
<<<<<<< HEAD
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
origin/cursor/expand-services-advertise-and-build-project-c28b
},
<<<<<<< HEAD
=======
=======
      }
      await upsertFile({ owner, repo, "path": 'data/reports/seo/weekly-seo.json', "content": JSON.stringify(report, null, 2), "message": 'chore(automation): weekly SEO report', token })'
=======
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
>>>>>>> origin/chore/fix-lint-and-merge
    }

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/seo/weekly-seo.json',
        content: JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly SEO report',
        token,
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
origin/cursor/automate-test-improve-and-merge-code-2533
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
origin/cursor/expand-services-advertise-and-build-project-c28b
},
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

},

      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function scorePage(url) {
  const t0 = Date.now(),

  try {
    const resp = await fetch(url),
    const html = await resp.text(),
    const ms = Date.now() - t0,
    const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html),
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {
    return { url, error: e.message || String(e), score: 0 }
  }
}

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
    }
    const report = { updatedAt: Date.now(), results },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
  }
=======
  }
},

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
