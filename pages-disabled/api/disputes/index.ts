}
    }
    return res.status(200).json({ disputes: filtered })
  }

  if (req.method === \"POST\") {
    const now = new Date().toISOString()
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails}
      description}
    } = req.body || {}
    if (
      !projectId ||
      !clientUserId ||
      !talentUserId ||
      !reason ||
      !description
    ) {}
      return res.status(400).json({ error: \"Missing required fields\" })
    }

    const id = generateCaseId()
    const dispute: DisputeCase = {
      id,
      projectId: String(projectId),
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
      updatedAt: now,
      status: \"Open\",
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: []}
      messages: []}
    }
    await createDispute(dispute)
    return res.status(201).json({ dispute })
  }

  res.setHeader(\"Allow\", \"GET,POST\")
  return res.status(405).end(\"Method Not Allowed\")
}
