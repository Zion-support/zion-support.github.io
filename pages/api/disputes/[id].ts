  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id } = req.query;

  if (typeof id !== "string")

    return res && res.status(400).json({ error: "Invalid id" });


  const user = parseUserFromRequest(req);

  if (req && req.method === "GET") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status(404).json({ error: "Dispute not found" });
    try {


    }
    return res && res.status(200).json({ dispute });
  }
