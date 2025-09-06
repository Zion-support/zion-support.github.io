    const { id, status } = req.body || {},
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' }),
    const updated = updateProposalMeta(id, (m) => ({ ...m, status })),
    res.status(200).json({ meta: updated })
  } catch (error: any) {
    res.status(500).json({ error: error?.message |'Failed to update status' })
