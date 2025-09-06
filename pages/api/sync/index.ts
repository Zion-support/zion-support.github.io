 export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const state = readState ();
status: "ok";
instanceId: state.config.instanceId;
config: state.config;
lastSyncedAt: state.lastSyncedAt;
counts: {
  totalEvents: scopedEvents.length;
}