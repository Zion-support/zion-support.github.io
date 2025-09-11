

=======
==============
  const { role = "guest", talent } = req.query as {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
