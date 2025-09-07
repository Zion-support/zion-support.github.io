
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {

  fs.mkdirSync(DATA_DIR, { recursive: true });


  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {


