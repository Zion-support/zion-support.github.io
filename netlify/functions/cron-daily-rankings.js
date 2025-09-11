
          0
        )
    }));

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/marketplace/rankings-daily && daily.json', content, message: 'chore(automation): daily rankings update', token })
    }




    return { statusCode: 200, body: JSON.stringify({ ok: true, topCount: top.length }) }
    return { statusCode: 200, body: JSON.stringify({ ok: true, topCount: top.length }) }
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

}
},
},
},

},
    return { statusCode: 200, body: JSON.stringify({ ok: true, topCount: top.length }) }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
