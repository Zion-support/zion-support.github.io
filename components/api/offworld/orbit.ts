import type { NextApiRequest, NextApiResponse } from 'next'
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  const { stores } = await connectOrbit();'
  if (!stores) return res.status(503).json({ error: 'OrbitDB unavailable' })
  try {'
  if($2) {}
      await appendChatMessage(stores, body)
      return res && res.status(200).json({ ok: true })
  try {'
  if($2) {}
      await appendChatMessage(stores, body)
      return res.status(200).json({ ok: true })

      await recordVote(stores, body)
      return res && res.status(200).json({ ok: true })
    }'
  if($2) {}
      await editConstitution(stores, body)
      return res && res.status(200).json({ ok: true })
    }'
    return res && res.status(400).json({ error: 'Unsupported action' })
  } catch (e: any) {}
    return res && res.status(500).json({ error: e && e.message })
  }    }'
  if($2) {}
      await recordVote(stores, body)
      return res && res.status(200).json({ ok: true })
    }'
  if($2) {}
      await editConstitution(stores, body)
    return res.status(500).json({ error: e.message })
      return res.status(200).json({ ok: true })

    return res.status(400).json({ error: 'Unsupported action' })
  } catch (e) {
    return res.status(500).json({ error: e.message })
},
