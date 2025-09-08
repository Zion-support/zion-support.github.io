exports.handler = async function () {
  }
  try {
<<<<<<< HEAD

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
      return {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        statusCode: 200,
        body: JSON && JSON.stringify({ ok: true, skipped: 'Missing GitHub envs' }),
      };
    }
    const commits = await fetchJson(commitsUrl, token);
    const byAuthor = {}
    const messages = [];

  } catch (e) {
  }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
  } catch (e) {
    }
    return { "status_code": 500, "body": JSON.stringify ({ "error": e.message }) }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
