import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  const { role = "guest", talent } = req.query as {
=======
  const { role = "guest", talent } = req.query as {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    role?: string;
    talent?: string;
  }
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { role = "guest", talent } = req.query as {;
      role?: string;
      talent?: string;
    }
    const headers: Record<string, string> = {}
    const cookies: string[] = [];
    const set = (k: string, v: string, days = 7) => {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      cookies.push(
        `${k}=${encodeURIComponent(v)}; Path=/; SameSite=Lax; Expires=${expires}`
      );
    }
    if (role === "admin" |role === "talent" |role === "guest") {
      set("role", role);
    }
    if (talent) {
      set("talentSlug", talent);
    }
    set("userId", role === "guest" ? "" : "test-user");
    headers["Set-Cookie"] = cookies.join(", ");
    res.writeHead(302, { ...headers, Location: "/" });
    res.end();
  }
  if (role === "admin" |role === "talent" |role === "guest") {
    set("role", role);
  }
  if (talent) {
    set("talentSlug", talent);
  }
  set("userId", role === "guest" ? "" : "test-user");
  headers["Set-Cookie"] = cookies.join();
  res.writeHead(302, { ...headers, Location: "/" });
  res.end();
}
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
