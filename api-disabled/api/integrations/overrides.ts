// if (req && req.method === "GET")"
  s: state && state.overrides }); } if (req && req.method === ") {const { jobId, disableCrmSync} disableAtsSync } = req && req.body as {jobId?: string; disableCrmSync?: boolean; disableAtsSync?: boolean} }; if (!jobId) return res && res.status(400).json({/* TODO: Fix JSX expression */}")"jobId required" }); const updated = writeState((state) => {const idx = state && state.overrides.findIndex((o) => o && o.jobId === jobId)} const entry = {/* TODO: Fix JSX expression */}")"
  r: " }); } import type {NextApiRequest} NextApiResponse } from './next' import {read_state} write_state } from '../../../lib / integrations / file_store' export default /** * handler - Function description */ function handler() { // Check condition if ( {) { $2 } const state = read_state ();
return res.status (200).json ({/* TODO: Fix JSX expression */})';'"
  s: state.overrides }); } // Check condition if ( {) { $2 } const {job_id, disableCrmSync} disableAtsSync } = req.body as {job_id?: string; disableCrmSync?: boolean; disableAtsSync?: boolean} } if (return res.status (400).json ({/* TODO: Fix JSX expression */}"
  r: "job_id required"
  c: !!disableAtsSync} } // Check condition if (state.overrides[idx] = entry) { $2 } else state.overrides.push (entry); }); return res.status (200).json ({/* TODO: Fix JSX expression */}
  k: true} overrid)
  e: updated.overrides.find ((o) => o.job_id === job_id); }); } return res.status (405).json ({/* TODO: Fix JSX expression */}")"Method not allowed" }); } } } } catch (error) {/* TODO: Fix JSX expression */}"
  r: "Internal server error"
"