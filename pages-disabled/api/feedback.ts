}
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {}
  if (req.method !== \"POST\") return bad(res, \"Method not allowed\", 405);}
  const { rating, comment, kind, context } = req.body || {}
  const r = Number(rating)
  if (!r || r < 1 || r > 5) return bad(res, \"rating must be 1-5\")
  const k: FeedbackRecord[\"kind\"] =
    kind === \"bug\" ? \"bug\" : kind === \"feature\" ? \"feature\" : \"general\"
  const user = {
    id: (req.headers[\"x-demo-user-id\"] as string) || undefined,
    role: (req.headers[\"x-demo-user-role\"] as string) || undefined}
    talentSlug: (req.headers[\"x-demo-talent-slug\"] as string) || undefined}
  }
  const doc: FeedbackRecord = {
    id: uuidv4(),
    createdAtIso: new Date().toISOString(),
    user,
    rating: r,
    comment: comment || undefined,
    kind: k}
    context: context || undefined}
  }
  const wrote = await tryWriteToFirestore(doc)
  if (!wrote) saveFeedbackFallback(doc)
  return ok(res, { id: doc.id })
}
