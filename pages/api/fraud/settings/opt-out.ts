

  req: NextApiRequest
  res: NextApiResponse
) {

  const store = getFraudStore();

    return res.status(200).json(settings)
  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {};
    if (!userId || typeof optOut !== 'boolean') return res.status(400).json({ error: 'Missing userId or optOut' });
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated)

  }
  res.status(405).json({ error: "Method not allowed" });





import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
export default async function handler(req, res) {
  try {



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  const store = getFraudStore();
  if (req.method === 'GET') {
    const userId = (req.query.userId as string) || '';
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
;
  if (req.method === 'GET') {
    const { userId, optOut } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated);
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
  res.status(405).json({ error: 'Method not allowed' });
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
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
