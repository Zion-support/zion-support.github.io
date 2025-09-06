
  if (req.method !== "POST") return res.status($1).json({ $2 });
  const { code, amount } = req.body |{}
  if (!code) return res.status($1).json({ $2 });
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL |"").includes("placeholder") |
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |"placeholder-key") ===
      "placeholder-key";
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, status: "queued", mock: true });

    }
    const supabase = getServerSupabase();

    return res.status(500).json({ error: e?.message });

  }
}