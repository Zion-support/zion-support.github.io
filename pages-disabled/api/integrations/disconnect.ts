}
    state.logs.push({}
      id: `${now}-${providerId}-disconnect`,
      timestamp: now,
      providerId: providerId as any,
      level: \"info\",
      action: \"disconnect\",
    })
  })
  res.status(200).json({ ok: true })
}
