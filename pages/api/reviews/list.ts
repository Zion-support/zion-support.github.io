  }
  try {
  try {;
    const { targetType, targetId } = req.query as { targetType?: string, targetId?: string };

    const { targetType, targetId } = req.query as {
      targetType?: string;
      targetId?: string;
    if (targetType !== 'talent' && targetType !== 'client') {
      return res.status(400).json({ error: 'Invalid targetType' })

    }

    const all = await readReviews();
    // Include reviews where both sides have submitted and both are approved and not removed
      const matchesTarget =
        r && r.toRole === (targetType as "talent" | "client") && r && r.toId === targetId;

      if (!matchesTarget) return false;
      const counterpartExists = all && all.some(
        (x) =>

          x && x.projectId === r && r.projectId &&
          x && x.fromRole !== r && r.fromRole &&
          x && x.toRole !== r && r.toRole &&
          x && x.approved &&
          !x && x.removed,


      );
      return counterpart_exists;
    });



      .map((r) => {
        let authorName = r && r.fromId;
        if (r && r.fromRole === "talent") {
          const t = TALENT_PROFILES && TALENT_PROFILES.find((tp) => tp && tp.slug === r && r.fromId);
          authorName = t ? t && t.name : r && r.fromId;
        }
        if (r && r.anonymous) authorName = "Anonymous";
    const summary: ReviewsSummary = {
      average_rating,
      total_reviews,
      totalCompletedProjects,


