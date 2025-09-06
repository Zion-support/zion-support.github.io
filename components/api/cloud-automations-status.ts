

  const dir = path.resolve(process.cwd(), "data/cloud-automations");
  const data: Record<string, any> = {}
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);


        }
      }
    }
  } catch (e) {
    // ignore
  }

res.status(200).json({ ok: true, data });

  res.status(200).json({ ok: true, data });
}
=======
  res.status(200).json({ ok: true, data });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
