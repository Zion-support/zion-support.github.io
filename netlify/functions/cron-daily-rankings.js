        content,
        message: 'chore (automation): daily rankings update',
        token,
      });
    }
    return {
    })),
    const top = entries.sort ((a, b) => b.points - a.points).slice (0, 100),
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    const content = JSON.stringify ({ updated_at: Date.now (), top }, null, 2),
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({ owner, repo, path: 'data / marketplace / rankings - daily.json', content, message: 'chore (automation): daily rankings update', token });
    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, top_count: top.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}
},
},
