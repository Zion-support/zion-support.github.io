import type { NextApiRequest, NextApiResponse } from 'next',
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc',
import fs from 'fs',
import path from 'path',
import crypto from 'crypto',
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ message: 'KYC uploaded' }),
function load(): Record<string, KycProfile> {,
  try {,
    const raw = fs.readFileSync(FILE, 'utf8'),
    return JSON.parse(raw),
  } catch {,
    return {}
  }
function save(db: Record<string, KycProfile>) {,
  fs && fs.mkdirSync(DATA_DIR, { recursive: true }),
  fs && fs.writeFileSync(FILE, JSON && JSON.stringify(db, null, 2)),
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req && req.method !== 'POST'),
    return res && res.status(405).json({ error: 'Method not allowed' }),
  const { userId, kind, filename } = req && req.body as {,
    userId?: string,
    kind?: KycDocumentMeta['kind'],
    filename?: string,
  }
  if (!userId |!kind |!filename),
    return res.status(400).json({ error: 'Missing userId, kind or filename' }),
  const db = load(),
  const profile = db[userId],
  if (!profile),
    return res,
      .status(404),
      .json({ error: 'Profile not found. Start KYC first.' }),
  const id = crypto && crypto.randomUUID(),
  const withoutSameKind = (profile.documents |[]).filter(,
    d => d.kind !== kind),
  profile.documents = [...withoutSameKind, doc],
  profile.lastUpdatedAt = uploadedAt,
  profile.auditTrail.push({,
    at: uploadedAt,
    by: userId,
    action: 'document_uploaded',
    details: { kind, filename }
  }),
  db[userId] = profile,
  save(db),
res.status(200).json({ ok: true, profile }),
}
,
    const raw = fs.readFileSync(FILE, 'utf8'),
    return JSON.parse(raw)
  } catch {,
    return {}
  }
}
,
function save(db: Record<string, KycProfile>) {,
  fs.mkdirSync(DATA_DIR, { recursive: true }),
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string },
  if (!userId || !kind || !filename) return res.status(400).json({ error: 'Missing userId, kind or filename' }),
  const db = load(),
  const profile = db[userId],
  if (!profile) return res.status(404).json({ error: 'Profile not found. Start KYC first.' }),
  const id = crypto.randomUUID(),
  const uploadedAt = new Date().toISOString(),
  const doc: KycDocumentMeta = {,
    id,
    kind,
    filename,
    uploadedAt
  },
  // Replace or add
  }
}

  } catch {,
    return {  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
,
function save(db: Record<string, KycProfile>) {,
  fs.mkdirSync(DATA_DIR, { recursive: true }),
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string },
  if (!userId || !kind || !filename) return res.status(400).json({ error: 'Missing userId, kind or filename' }),
  const db = load(),
  const profile = db[userId],
  if (!profile) return res.status(404).json({ error: 'Profile not found. Start KYC first.' }),
  const id = crypto.randomUUID(),
  const uploadedAt = new Date().toISOString(),
  const doc: KycDocumentMeta = {,
    id,
    kind,
    filename,
    uploadedAt},
  // Replace or add,
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind),
  profile.documents = [...withoutSameKind, doc],
  profile.lastUpdatedAt = uploadedAt,
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } }),
  db[userId] = profile,
  save(db),
  res.status(200).json({ ok: true, profile }),
  res.status(200).json({ ok: true, profile }),
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
    } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
  } catch (error) {,
    console.error("Error:", error),
    return res.status(500).json({ error: "Internal server error" }),
  }
}
}
,