import { randomUUID } from 'crypto',;
type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number
}

  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

      .filter((n) => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt)
    return res.status(200).json({ notes })
  }

    return res.status(200).json({ ok: true, note })
  }
'
  return res.status(405).json({ error: 'Method not allowed' })
}