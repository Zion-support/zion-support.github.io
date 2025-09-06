

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const state = readState()
  if (req.method === "GET") {
    return res.status(200).json({



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




      route: "/multiverse/hub",
      instanceId: state.config.instanceId,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      peers: state.config.peers,
      scope: state.config.scope,
      opt_in: state.config.opt_in,
      paused: state.config.paused,




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


