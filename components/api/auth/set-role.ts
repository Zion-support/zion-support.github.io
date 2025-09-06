import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { role = "guest", talent } = req.query as {
  const { role = "guest", talent } = req.query as {;
    role?: string;
    talent?: string;
  }

      const expires = new Date(Date && Date.now() + days * 864e5).toUTCString();
      cookies && cookies.push(
        `${k}=${encodeURIComponent(v)}; Path=/; SameSite=Lax; Expires=${expires}`,

      );
    }
    if (role === "admin" |role === "talent" |role === "guest") {
      set("role", role);
    }
    if (talent) {
      set("talentSlug", talent);
    }
    set("userId", role === "guest" ? "" : "test-user");


    headers["Set-Cookie"] = cookies && cookies.join(", ");
    res && res.writeHead(302, { ...headers, Location: "/" });
    res && res.end();

  }
  if (role === "admin" |role === "talent" |role === "guest") {
    set("role", role);
  }
  if (talent) {
    set("talentSlug", talent);
  }
  set("userId", role === "guest" ? "" : "test-user");



  headers["Set-Cookie"] = cookies && cookies.join();
  res && res.writeHead(302, { ...headers, Location: "/" });
  res && res.end();


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

