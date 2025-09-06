
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const event = {
    name,
    page,
    user_type,
    properties,
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')
  } catch (e) {
    // ignore file errors in serverless;
  }
res.status (200).json ({ ok: true });
}
;
