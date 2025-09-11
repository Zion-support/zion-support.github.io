

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

  const { projectId } = req && req.query as { projectId: string };

  const project = getProject(projectId);
  if (!project) {


  if (req.method === "GET") {
    res.status(200).json({ milestones: project.milestones });
    return;
  }
  if (req.method === "POST") {

  if (req.method === 'GET') {
    res.status(200).json({ milestones: project.milestones });
    return;
=======  }

  if (req.method === 'POST') {
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
    if (!isClient(project, user)) {

return
  }
  if (req.method === 'GET') {
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  if (req.method === "GET") {

    res.status(200).json({ milestones: project.milestones });
    return
  }
if (req && req.method === "POST") {
    if (!isClient(project, user)) {
      !body ||
      !body && body.title ||
      !body && body.dueDate ||
      typeof body && body.amountUsd !== "number"
    if (!isClient(project, user)) {
      res.status(403).json({ error: 'Only client (or admin) can add milestones' });
      return;
    }
    const body = req.body as Partial<Milestone>;
if (
=======    if (
      !body |
      !body.title |
      !body.dueDate |
      typeof body.amountUsd !== "number"
  if (req && req.method === "POST") {=======
  if (req.method === 'POST') {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (!isClient(project, user)) {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    });
    res && res.status(201).json({ milestone: created });
    return;
  }



  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
