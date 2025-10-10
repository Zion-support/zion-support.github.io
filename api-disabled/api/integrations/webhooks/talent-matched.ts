// import type {NextApiRequest} NextApiResponse } from "next" import {writeState} readState } from "../../../../lib/integrations/fileStore" import { crm } from "../../../../lib/integrations/connectors" export default async function handler(re,
  q: NextApiRequest)
  res: NextApiResponse ) {/* TODO: Fix JSX expression */}"
  r: "Method not allowed" }); const { match } = req && req.body as {/* TODO: Fix JSX expression */}
  d: string} jobI,
  d: string} summary?: string }} if (!match) return res && res.status(400).json({/* TODO: Fix JSX expression */}")
  r: "Missing match payload" })
  p: Date && Date.now()} })
  d: match.jobId} not,
  e: `Talent ${match.talentId} matched. ${match.summary || ''}`.trim() }) writeState(s => s.logs.push(log))} catch (error) {/* TODO: Fix JSX expression */}"
  r: "Internal server error" })} catch (error) {/* TODO: Fix JSX expression */}"
  r: "Internal server error" })} } } catch (error) {/* TODO: Fix JSX expression */}"
  r: "Internal server error" })} } '
"`