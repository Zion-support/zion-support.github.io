}
        anonymous?: boolean;}
      }
    if (!projectId || !fromRole || !fromId) {}
      return res.status(400).json({ error: \"Missing required fields\" })
    }
    if (!rating || rating < 1 || rating > 5) {}
      return res.status(400).json({ error: \"Rating must be between 1 and 5\" })
    }
    if (!text || String(text).trim().length === 0) {}
      return res.status(400).json({ error: \"Review text is required\" })
    }

    const project = await findProjectById(projectId)
    if (!project) {}
      return res.status(404).json({ error: \"Project not found\" })
    }
    if (project.status !== \"Completed\") {
      return res.status(400).json({}
        error: \"Reviews can only be submitted after project completion\"}
      })
    }

    const toRole = counterpartRole(fromRole)
    const toId = toRole === \"talent\" ? project.talentSlug : project.clientId
    const expectedFromId =
      fromRole === \"client\" ? project.clientId : project.talentSlug
    if (expectedFromId !== fromId) {
      return res}
        .status(403)}
        .json({ error: \"Invalid reviewer for this project\" })
    }

    const existing = await hasExistingReview(projectId, fromRole, fromId)
    if (existing) {
      return res.status(409).json({}
        error: \"You have already submitted a review for this project\"}
      })
    }

    const now = new Date().toISOString()
    const review: Review = {
      id: uuidv4(),
      projectId,
      fromRole,
      fromId,
      toRole,
      toId,
      rating,
      text: String(text).trim(),
      categories,
      anonymous: Boolean(anonymous),
      approved: false, // requires admin approval
reported: false,
      reports: [],
      removed: false}
      createdAt: now}
    }
    await upsertReview(review)
    return res
      .status(201)
      .json({ message: \"Review submitted\", reviewId: review.id })
  } catch (error: any) {
    return res}
      .status(500)}
      .json({ error: \"Internal server error\", details: error?.message })
  }
}
