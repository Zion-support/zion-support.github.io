const { upsertFile } = require($2);
exports.handler = $2;
    const pages = $2;
    const xml = $2;
    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},