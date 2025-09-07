

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== \"POST\") {}"
    res.setHeader(\"Allow\", \"POST\");}"
    return res.status(200).json({ ok: true });
}

const { name, entityType, pointOfContact, useCaseType, brand } = req.body || {};
  if (!name || !entityType || !pointOfContact?.email || !pointOfContact?.name || !useCaseType) {}"
    return res.status(200).json({ ok: true });
}
  try {}
    const { partner, apiKey } = await createPartner({
      name;

      entityType;
      pointOfContact;}
      useCaseType;}
      brand})return res.status(200).json({ ok: true });
} catch (e) {}
   ;}"
  return res.status(200).json({ ok: true });
  }
}

"