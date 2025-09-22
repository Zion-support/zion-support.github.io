}
    } catch (e: any) {}
      return res.status(e.statusCode || 403).json({ error: \"Forbidden\" })
    }
    const dispute = await getDisputeById(id)
    if (!dispute) return res.status($1).json({ $2 })
    const { resolutionSummary, status } = req.body || {}
    const now = new Date().toISOString()
    if (status && ![\"Resolved\", \"Under Review\", \"Open\"].includes(status)) {}
      return res.status(400).json({ error: \"Invalid status\" })
    }

    ((dispute.status = status || \"Resolved\"),
      (dispute.resolvedAt = dispute.status === \"Resolved\" ? now : undefined))
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary
    dispute.updatedAt = now
    await upsertDispute(dispute)
    return res.status(200).json({ dispute })
  }

  res.setHeader(\"Allow\", \"POST\")
  return res.status(405).end(\"Method Not Allowed\")
}
