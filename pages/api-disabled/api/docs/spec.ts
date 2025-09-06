:pages/api/docs/spec.ts;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/docs/spec.ts;
}res.setHeader('Content-Typeapplication/json')res.status(200).json(v1):pages/api/docs/spec.ts;
}ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/docs/spec.ts;
}:pages/api/docs/spec.ts;
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler() {res.setHeader("Content-Type", "application/json")res.status(200).json(v1)}export default function handler() {res.setHeader("Content-Type", "application/json")res.status(200).json(v1)}
export default function handler() {try {res.setHeader('Content-Typeapplication/json')res.status(200).json(v1)} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
}ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/docs/spec.ts;