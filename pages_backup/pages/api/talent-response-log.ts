
,
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { talentId, action } = req.body |{}
  if (!talentId |!['AcceptDeclineNegotiate'].includes(action)) {,
    return res.status(400).json({ error: 'Invalid payload' })
  }
  // Placeholder for persistence, echo the response for now,
  const payload = { talentId, action, at: new Date().toISOString() }
,
  return res.status(200).json({ ok: true, data: payload })
}
,