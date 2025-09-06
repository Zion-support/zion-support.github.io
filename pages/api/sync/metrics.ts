  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const state = null;
    }
  }
  const topContributors = Object.entries(contributionsBySubject)
    .map(([subjectId, score]) => ({ subjectId, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
  return res.status(200).json({
treasuryTotals: totalsByToken,
    topContributors,
    totalVoteCount: globalVotes,
    lastSyncedAt: state.lastSyncedAt,
  });
    lastSyncedAt: state.lastSyncedAt})
}
