  if (idx >= 0) {
    requests[idx].status = 'resolved'
    requests[idx].resolvedAt = Date.now()
    writeJson('support/requests.json', requests)
  }
  return res.status(200).json({ ok: true })

