}
    if (!dispute) return res.status(404).json({ error: \"Dispute not found\" })
    try {}
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);}
    } catch (e: any) {}
      return res.status(e.statusCode || 403).json({ error: \"Forbidden\" })
    }
    return res.status(200).json({ dispute })
  }

  res.setHeader(\"Allow\", \"GET\")
  return res.status(405).end(\"Method Not Allowed\")
}
