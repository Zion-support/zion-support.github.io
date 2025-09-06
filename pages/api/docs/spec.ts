
;
}res.setHeader('Content-Typeapplication/json')res.status(200).json(v1)}}}ursor/fix-website-loading-errors-and-merge-6662;
}import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler() {res.setHeader("Content-Type", "application/json")res.status(200).json(v1)}export default function handler() {res.setHeader("Content-Type", "application/json")res.status(200).json(v1)}
export default function handler() {try {res.setHeader('Content-Typeapplication/json')res.status(200).json(v1)} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
}}res.setHeader('Content-Typeapplication/json')res.status(200).json(v1)}