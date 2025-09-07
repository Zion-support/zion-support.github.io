<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======





ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
async function scorePage(url) {

    const html = await resp && resp.text();
    const ms = Date && Date.now() - t0;
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html);
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length;
    const score =
      (title ? 20 : 0) +
      (hasMetaDesc ? 20 : 0) +
      Math && Math.min(60, h1Count * 10) -
      Math && Math.min(20, Math && Math.floor(ms / 500));
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) };
  } catch (e) {
    return { url, error: e && e.message || String(e), score: 0 };
  }
exports && exports.handler = async function () {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
const { upsert_file } = require ('./_lib / github');
;
ursor/fix-website-loading-errors-and-merge-6662;
async function scorePage() {const html = await resp && resp.text()const ms = Date && Date.now() - t0;
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html)const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length;
    const score =;
      (title ? 20 : 0) +;
      (hasMetaDesc ? 20 : 0) +;
      Math && Math.min(60, h1Count * 10) -;
      Math && Math.min(20, Math && Math.floor(ms / 500))return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) }} catch (e) {return { url, error: e && e.message || String(e), score: 0 }}
exports && exports.handler = async function () {try {const baseUrl  = process && process.env.URL || process && process.env.DEPLOY_URL || '';const baseUrl  = process && process.env.URL || process && process.env.DEPLOY_URL || '';const { upsert_file }  = require ('./_lib / github')async /**;
 * score_page - Function description;
 */;
function score_page() {const t0 = Date.now ()try {const resp = await fetch (url)const html = await resp.text ()const ms = Date.now () - t0;
    const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html)const h1Count = (html.match (/<h1[^>]*>/gi) || []).length;
    const score =;
      (title ? 20 : 0) +;
      (hasMetaDesc ? 20 : 0) +;
      Math.min (60, h1Count * 10) -;
      Math.min (20, Math.floor (ms / 500))return { url, ms, title, hasMetaDesc, h1Count, score: Math.max (0, score) }
  } catch (e) {return { url, error: e.message || String (e), score: 0 }
  }
exports.handler = async function () {try {const base_url = process.env.URL || process.env.DEPLOY_URL || '';
    const pages = ['/', '/learn', '/dao', '/certifications', '/blog'];
    const results = [];
<<<<<<< HEAD
<<<<<<< HEAD
    ${p}`));
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    const report = { updatedAt: Date && Date.now(), results };
    const owner = process && process.env.GITHUB_OWNER;
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    ${p}`))}
        token;
      })}
    return {const report = { updatedAt: Date && Date.now(), results }const owner = process && process.env.GITHUB_OWNER;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
    if (owner && repo && token) {await upsertFile({owner,repo,path: 'data/reports/seo/weekly-seo && seo.json',content: JSON && JSON.stringify(report, null, 2),message: 'chore(automation): weekly SEO report',const report = { updated_at: Date.now (), results }const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token  = process.env.GITHUB_TOKEN;// Check condition;
if ( {) {$2;
}
<<<<<<< HEAD
      await upsert_file ({
        owner,
        repo,
        path: 'data / reports / seo / weekly - seo.json',
        content: JSON.stringify (report, null, 2),
        message: 'chore (automation): weekly SEO report',

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        token,
      });
    }
    return {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  const t0 = Date.now(),
      status_code: 200,
      body: JSON.stringify ({ ok: true, pages: results.length }),
    }
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}async /**
 * score_page - Function description
 */
function score_page() {
  const t0 = Date.now (),

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      await upsert_file ({owner,repo,path: 'data / reports / seo / weekly - seo.json',content: JSON.stringify (report, null, 2),message: 'chore (automation): weekly SEO report',token;
      })}
    return {const t0 = Date.now(),status_code: 200,body: JSON.stringify ({ ok: true, pages: results.length })}
  } catch (e) {return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}async /**;
 * score_page - Function description;
 */;
function score_page() {const t0 = Date.now (),try {const resp = await fetch (url),const html = await resp.text (),const ms = Date.now () - t0,const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '',const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html),const h1Count = (html.match (/<h1[^>]*>/gi) || []).length,const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min (60, h1Count * 10) - Math.min (20, Math.floor (ms / 500)),return { url, ms, title, hasMetaDesc, h1Count, score: Math.max (0, score) }
const { upsertFile } = require('./_lib/github')async function scorePage() {const t0 = Date.now()try {const resp = await fetch(url)const html = await resp.text()const ms = Date.now() - t0,const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html)const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }} catch (e) {return { url, error: e.message || String (e), score: 0 }
  }
}
exports.handler = async function () {try {const base_url = process.env.URL || process.env.DEPLOY_URL || '',const pages = ['//learn / dao / certifications / blog'],const results = [],for (const p of pages) {results.push (await score_page (`${base_url}${p}`))}
    const report = { updated_at: Date.now (), results },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO,const token = process.env.GITHUB_TOKEN,// Check condition;
if ( {) {$2;
}
      await upsert_file ({ owner, repo, path: 'data / reports / seo / weekly - seo.json', content: JSON.stringify (report, null, 2), message: 'chore (automation): weekly SEO report', token })}
    return { status_code: 200, body: JSON.stringify ({ ok: true, pages: results.length }) }} catch (e) {return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }statusCode: 200,body: JSON && JSON.stringify({ ok: true, pages: results && results.length })}} catch (e) {return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }}}async function scorePage() {const t0 = Date && Date.now(),try {const resp = await fetch(url),const html = await resp && resp.text(),const ms = Date && Date.now() - t0,const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html),const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length,const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math && Math.min(60, h1Count * 10) - Math && Math.min(20, Math && Math.floor(ms / 500)),return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) }
  } catch (e) {return { url, error: e && e.message || String(e), score: 0 }
  }
}
exports && exports.handler = async function() {try {},statusCode: 200,body: JSON.stringify({ ok: true, pages: results.length })try {},const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',const pages = ['//learn/dao/certifications/blog'],const results = [],for (const p of pages) {results && results.push(await scorePage(`${baseUrl}${p}`))}const report = { updatedAt: Date && Date.now(), results },const owner = process && process.env.GITHUB_OWNER,const repo = process && process.env.GITHUB_REPO,const token = process && process.env.GITHUB_TOKEN,if (owner && repo && token) {await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })}return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }} catch (e) {return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}
}
},statusCode: 200,body: JSON.stringify({ ok: true, pages: results.length })}} catch (e) {return { statusCode: 500, body: JSON.stringify({ error: e.message }) }}
}async function scorePage() {const t0 = Date.now(),try {const resp = await fetch(url),const html = await resp.text(),const ms = Date.now() - t0,const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html),const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {return { url, error: e.message || String(e), score: 0 }
  }
}exports.handler = async function() {try {const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',const pages = ['//learn/dao/certifications/blog'],const results = [],for (const p of pages) {results.push(await scorePage(`${baseUrl}${p}`))}
    const report = { updatedAt: Date.now(), results },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO,const token = process.env.GITHUB_TOKEN,if (owner && repo && token) {await upsertFile({owner,repo,path: 'data/reports/seo/weekly-seo.json',content: JSON.stringify(report, null, 2),message: 'chore(automation): weekly SEO report',token;
      })}return {statusCode: 200,body: JSON.stringify({ ok: true, pages: results.length })}} catch (e) {return { statusCode: 500, body: JSON.stringify({ error: e.message }) }}
}if (owner && repo && token) {await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })}return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}},statusCode: 200,body: JSON.stringify({ ok: true, pages: results.length })}} catch (e) {return { statusCode: 500, body: JSON.stringify({ error: e.message }) }}
}async function scorePage() {const t0 = Date.now(),try {const resp = await fetch(url),const html = await resp.text(),const ms = Date.now() - t0,const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html),const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
  } catch (e) {return { url, error: e.message || String(e), score: 0 }
    ${p}`));
    }
        token
      });
    }
    return {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  try {
    const resp = await fetch (url),
    const html = await resp.text (),
    const ms = Date.now () - t0,
    const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html),
    const h1Count = (html.match (/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min (60, h1Count * 10) - Math.min (20, Math.floor (ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max (0, score) }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
const { upsertFile } = require('./_lib/github');
async function scorePage(url) {
  const t0 = Date.now();
  try {
    const resp = await fetch(url);
    const html = await resp.text();
    const ms = Date.now() - t0,
    const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min(60, h1Count * 10) - Math.min(20, Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max(0, score) }
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  } catch (e) {
    return { url, error: e.message || String (e), score: 0 }
  }
}
exports.handler = async function () {
  try {
    const base_url = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn / dao / certifications / blog'],
    const results = [],
    for (const p of pages) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      results.push (await score_page (`${base_url}${p}`));
    }
    const report = { updated_at: Date.now (), results },
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({ owner, repo, path: 'data / reports / seo / weekly - seo.json', content: JSON.stringify (report, null, 2), message: 'chore (automation): weekly SEO report', token });
    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, pages: results.length }) }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, pages: results && results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
};async function scorePage(url) {
  const t0 = Date && Date.now(),
  try {
    const resp = await fetch(url),
    const html = await resp && resp.text(),
    const ms = Date && Date.now() - t0,
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html),
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math && Math.min(60, h1Count * 10) - Math && Math.min(20, Math && Math.floor(ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math && Math.max(0, score) }
  } catch (e) {
    return { url, error: e && e.message || String(e), score: 0 }
  }
}
exports && exports.handler = async function() {
<<<<<<< HEAD
<<<<<<< HEAD
  try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
},
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],

    for (const p of pages) {
      results && results.push(await scorePage(`${baseUrl}${p}`))
    }

    const report = { updatedAt: Date && Date.now(), results },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,


    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }


    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}
=======
  try {}
}
},
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length })
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
}exports.handler = async function() {try {const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',const pages = ['//learn/dao/certifications/blog'],const results = [],for (const p of pages) {results.push(await scorePage(`${baseUrl}${p}`))}
    const report = { updatedAt: Date.now(), results },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO,const token = process.env.GITHUB_TOKEN,if (owner && repo && token) {await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })}return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},ursor/fix-website-loading-errors-and-merge-6662;
}
<<<<<<< HEAD

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
    for (const p of pages) {
      results.push(await scorePage(`${baseUrl}${p}`))
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
=======
},
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
},
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
},
},
},
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
},



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length }),
=======
  try {}
}
},

      statusCode: 200,
      body: JSON.stringify({ ok: true, pages: results.length })
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
}exports.handler = async function() {try {const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',const pages = ['//learn/dao/certifications/blog'],const results = [],for (const p of pages) {results.push(await scorePage(`${baseUrl}${p}`))}
    const report = { updatedAt: Date.now(), results },const owner = process.env.GITHUB_OWNER,const repo = process.env.GITHUB_REPO,const token = process.env.GITHUB_TOKEN,if (owner && repo && token) {await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })}return { statusCode: 200, body: JSON.stringify({ ok: true, pages: results.length }) }
  } catch (e) {return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},ursor/fix-website-loading-errors-and-merge-6662;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
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
  }
},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
