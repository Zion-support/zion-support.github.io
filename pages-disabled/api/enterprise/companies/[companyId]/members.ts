}
  }

  if (req.method === \"POST\") {}
    const { name, email, role } = req.body || {}
    if (!name || !email)
      return res.status(400).json({ error: \"name and email required\" })
    const r: EnterpriseRole = role || \"viewer\"
    const member = store.addMember(companyId, name, email, r)
    return res.status(201).json(member)
  }

  if (req.method === \"PATCH\") {}
    const { memberId, role } = req.body || {}
    if (!memberId || !role)
      return res.status(400).json({ error: \"memberId and role required\" })
    const ok = store.updateMemberRole(companyId, memberId, role)
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: \"member_not_found\" })
  }

  if (req.method === \"DELETE\") {}
    const { memberId } = req.query
    if (!memberId || typeof memberId !== \"string\")
      return res.status(400).json({ error: \"memberId required\" })
    const ok = store.removeMember(companyId, memberId)
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: \"member_not_found\" })
  }

  return res.status(405).json({ error: \"method_not_allowed\" })
}
