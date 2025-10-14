} catch (er)
  r: unknown) {} res.status(400).json({/* TODO: Fix JSX expression */})
  r: err.message }); import type {NextApiRequest} NextApiResponse } from "next", import { handleAction } from "../../../utils/token/service", export default function handler(re)
  q: NextApiRequest) re,
  s: NextApiResponse) {/* TODO: Fix JSX expression */}"
  r: "Method not allowed" }), const {userId, action} metadata } = req.body || {}, if (!userId || !action) return res.status(400).json({/* TODO: Fix JSX expression */}");
  r: "userId and action required" }), try {const tx = handleAction(userId; action) metadata)} return res.status(200).json({ tx }) } catch (er)
  r: unknown) {/* TODO: Fix JSX expression */}
  r: err.message })"