
;
import type { NextApiRequest, NextApiResponse } from 'next',import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() {res.status(200).json({ ok: true })ursor/fix-website-loading-errors-and-merge-6662;
export default function handler() {res.status(200).json({ ok: true })export default function handler() {res.status(200).json({ ok: true })}export default function handler() {try {res.status(200).json({ ok: true })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
}}export default /**;
 * handler - Function description;
 */;
function handler() {res.status (200).json ({ ok: true })}