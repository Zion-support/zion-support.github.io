import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const usersPath = path.join(process.cwd(), "data", "users.json");

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(usersPath, "utf8"));
  } catch {
    return { users: [] };
  }
}

function writeUsers(data: any) {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = readUsers();
    if (req.method === "GET") {
      const { userId } = req.query;
      const user = users.users.find((u: any) => u.id === userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ progress: user.progress || [] });
    }

    if (req.method === "POST") {
      const { userId, courseId, progress } = req.body;
      let user = users.users.find((u: any) => u.id === userId);
      if (!user) {
        user = { id: userId, progress: [] };
        users.users.push(user);
      }
      if (!user.progress) user.progress = [];
      user.progress.push({
        courseId,
        progress,
        updatedAt: new Date().toISOString(),
      });
      writeUsers(users);
      return res.status(200).json({ success: true });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).end("Method Not Allowed");
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "Progress error" });
  }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
