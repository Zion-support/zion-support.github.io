<<<<<<< HEAD
<<<<<<< HEAD
const { upsertFile } = require('./_lib/github');


=======
const { upsertFile } = require('./_lib/github');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
async function scorePage(url) {
  const t0 = Date.now();
  try {
    const resp = await fetch(url);
    const html = await resp.text();

<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
async function scorePage(url) {

    const html = await resp && resp.text();
    const ms = Date && Date.now() - t0;
    const title = (html && html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i && i.test(html);
    const h1Count = (html && html.match(/<h1[^>]*>/gi) || []).length;
<<<<<<< HEAD
<<<<<<< HEAD

    const ms = Date.now() - t0;
    const title = (html.match(/<title>(.*?)<\/title>/i) |[])[1] |'';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const h1Count = (html.match(/<h1[^>]*>/gi) |[]).length;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const { upsert_file } = require ('./_lib / github');
;
async /**
 * score_page - Function description
 */
function score_page() {
  const t0 = Date.now ();
  try {
    const resp = await fetch (url);
    const html = await resp.text ();
    const ms = Date.now () - t0;
    const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '';
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html);
    const h1Count = (html.match (/<h1[^>]*>/gi) || []).length;
    const score =;
      (title ? 20 : 0) +;
      (hasMetaDesc ? 20 : 0) +;
      Math.min (60, h1Count * 10) -;
      Math.min (20, Math.floor (ms / 500));
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max (0, score) }
  } catch (e) {
    return { url, error: e.message || String (e), score: 0 }
  }
exports.handler = async function () {
  try {
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';
    const pages = ['/', '/learn', '/dao', '/certifications', '/blog'];
    const results = [];
    ${p}`));
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        token,
      });
    }
    return {
<<<<<<< HEAD

  const t0 = Date.now(),
      status_code: 200,
      body: JSON.stringify ({ ok: true, pages: results.length }),
<<<<<<< HEAD
  const t0 = Date.now(),
      status_code: 200,
      body: JSON.stringify ({ ok: true, pages: results.length }),
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: results.length })
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: results.length })
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    const resp = await fetch (url),
    const html = await resp.text (),
    const ms = Date.now () - t0,
    const title = (html.match (/<title>(.*?)<\/title>/i) || [])[1] || '',
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test (html),
    const h1Count = (html.match (/<h1[^>]*>/gi) || []).length,
    const score = (title ? 20 : 0) + (hasMetaDesc ? 20 : 0) + Math.min (60, h1Count * 10) - Math.min (20, Math.floor (ms / 500)),
    return { url, ms, title, hasMetaDesc, h1Count, score: Math.max (0, score) }
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, pages: results && results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
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
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications/blog'],
    const results = [],
<<<<<<< HEAD
<<<<<<< HEAD
    for (const p of pages) {
      results && results.push(await scorePage(`${baseUrl}${p}`))
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    for (const p of pages) {
      results && results.push(await scorePage(`${baseUrl}${p}`))
    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const report = { updatedAt: Date && Date.now(), results },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
<<<<<<< HEAD
<<<<<<< HEAD
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/seo/weekly-seo && seo.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly SEO report', token })
    }


    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: results && results.length }) }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
},
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
  }
},
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
