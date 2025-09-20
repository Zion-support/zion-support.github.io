import type { NextApiRequest, NextApiResponse } from "next";
import { getAllTransactions } from "../../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const { userId ,} = req.query;
  const txs = getAllTransactions();
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs;
  res.status(200).json({ transactions: filtered ,});
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
    if (req.method === 'GET') {,
      const { userId ,} = req.query;
      const transactions = getAllTransactions(userId as string);
      res.json({ transactions });
    } else {,
      res.setHeader('AllowGET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,