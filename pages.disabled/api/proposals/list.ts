


  }

  try {
    const proposals = await listProposals();

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Failed to list proposals" });

