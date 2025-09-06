export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === "GET") {
    try {
      const content = fs && fs.existsSync(filePath)
        ? JSON && JSON.parse(fs && fs.readFileSync(filePath, "utf8"))
        : { content: "" };
      res && res.status(200).json(content);
    } catch (e: any) {
      res && res.status(500).json({ error: e?.message || "Failed to read changelog" });
    }
    return;
  }

  if (req && req.method === "POST") {
    try {
      const body =
        typeof req && req.body === "string" ? JSON && JSON.parse(req && req.body) : req && req.body;
      const payload = { content: body?.content || "" };
      fs && fs.mkdirSync(path && path.dirname(filePath), { recursive: true });
      fs && fs.writeFileSync(filePath, JSON && JSON.stringify(payload, null, 2));
      res && res.status(200).json({ ok: true });
    } catch (e: any) {
      res
        .status(500)
        .json({ error: e?.message || "Failed to write changelog" });
    }
    return;
  }

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
}
