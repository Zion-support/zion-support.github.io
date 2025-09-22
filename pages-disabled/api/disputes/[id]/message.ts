}
    if (!dispute) return res.status($1).json({ $2 })
    try {}
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);}
    } catch (e: any) {}
      return res.status(e.statusCode || 403).json({ error: \"Forbidden\" })
    }
    const { body } = req.body || {}
    if (!body || typeof body !== \"string\")
      return res.status(400).json({ error: \"Message body required\" })
    const now = new Date().toISOString()
    dispute.messages.push({}
      id: `${Date.now()}`,
      authorUserId: user.id,
      authorRole:
        user.role === \"admin\"
          ? \"admin\"
          : user.id === dispute.clientUserId
            ? \"client\"
            : \"talent\",
      body,
      createdAt: now,
    })
    dispute.updatedAt = now
    await upsertDispute(dispute)
    return res.status(201).json({ dispute })
  }

  res.setHeader(\"Allow\", \"POST\")
  return res.status(405).end(\"Method Not Allowed\")
}
