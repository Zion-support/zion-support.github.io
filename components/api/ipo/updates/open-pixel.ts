



      updates[idx].opens = (updates[idx].opens || 0) + 1;
      writeJsonFile ("updates.json", updates);
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const id = String(req.query.id |"");

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const id = String(req.query.id || "");

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const id = String(req.query.id || "");
  if (id) {
    const updates = readJsonFile("updates.json", [] as any[]);
    const idx = updates.findIndex((x: any) => x.id === id);
    if (idx >= 0) {
      updates[idx].opens = (updates[idx].opens |0) + 1;
      writeJsonFile("updates.json", updates);

    }
  }
const pixel = Buffer.from (
    "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",


  );
res.status (200).send (pixel);

}




