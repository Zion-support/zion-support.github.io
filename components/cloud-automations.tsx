

      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))



