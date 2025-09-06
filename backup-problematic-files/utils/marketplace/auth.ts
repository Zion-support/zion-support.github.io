import { NextApiRequest } from "next"
type DemoUser = { id: string, role: any
  const role = (req.headers["x-demo-user-role"] as string) || "client"
  const id = (req.headers["x-demo-user-id"] as string) || (role = = "client" ? "client-1" : any
  const talentSlug = (req.headers["x-demo-talent-slug"
  return { id, role: role = = "talent" ? "talent" : any
  if (u.role != "client"
    const err = new Error("Client role required"
  if (u.role = = "client"
  if (u.role = = "talent"
  const err = new Error("Not authorized for this offer"