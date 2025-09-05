 export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const state = readState ();
}if (req.method === "POST") {
  const {
  optIn, paused, scope, peers, instanceId 
}= req.body as Partial<InstanceConfig> & {
  peers?: Peer[];
scope?: SyncScope;
instanceId?: string 
};
writeState (state);
return res.status (200) .json ({
  config: state.config 
}) 
}
}