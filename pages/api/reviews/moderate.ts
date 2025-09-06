import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {readReviews, writeReviews} from '../../../utils/dataStore';
const ADMIN_KEY = process.env.ADMIN_KEY || 'dev-admin-key';
type Action = 'approve' | 'remove' | 'edit';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import {readReviews, writeReviews} from '../../../utils/dataStore';
const ADMIN_KEY = process.env.ADMIN_KEY |'dev-admin-key';
type Action = 'approve' | 'remove' | 'edit';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST') {;
    return res.status(405).json({ error: 'Method not allowed' });  }
  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });  }
  try {
    const { action, reviewId, updates } = req.body as {
      action: Action;
      reviewId: string;
      updates?: { rating?: number; text?: string }
    }
    const reviews = await readReviews();
    const idx = reviews.findIndex(r => r.id === reviewId);
    if (idx < 0) return res.status(404).json({ error: 'Review not found' });
    if (action === 'approve') {
      reviews[idx].approved = true;
    } else if (action === 'remove') {
      reviews[idx].removed = true;    } else if (action === 'edit') {
      if (!updates) return res.status(400).json({ error: 'Missing updates' });
      if (typeof updates.rating === 'number') {
        if (updates.rating < 1 |updates.rating > 5) {
          return res.status(400).json({ error: 'Rating must be 1-5' });
        }
        reviews[idx].rating = updates.rating;
      }
      if (typeof updates.text === 'string') {
        reviews[idx].text = updates.text.trim();
      }
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }
    await writeReviews(reviews);
    return res.status(200).json({ message: 'OK' });

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: 'Internal server error', details: error?.message });
  }
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
type Action = 'approve' | 'remove' | 'edit';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Review moderated' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, writeReviews } from '../../../utils/dataStore';
const ADMIN_KEY = process.env.ADMIN_KEY || 'dev-admin-key';
type Action = 'approve' | 'remove' | 'edit';
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const key = req.headers['x-admin-key'];
  if (key !== ADMIN_KEY) {;
    return res.status(401).json({ error: 'Unauthorized' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  try {
    const { action, reviewId, updates } = req.body as {;
      action: Action;
      reviewId: string;
      updates?: { rating?: number, text?: string   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    const reviews = await readReviews();
    const idx = reviews.findIndex((r) => r.id === reviewId);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        reviews[idx].rating = updates.rating;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      if (typeof updates.text === 'string') {;
        reviews[idx].text = updates.text.trim();
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } else {;
      return res.status(400).json({ error: 'Invalid action' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    await writeReviews(reviews);
    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error', details: error?.message });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
