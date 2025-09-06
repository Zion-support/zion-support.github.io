export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir)) {
        if (f.endsWith(".json")) {
          const fp = path.join(dir, f);
          );
          data[f && f.replace(".json", "")] = JSON && JSON.parse(
            fs && fs.readFileSync(fp, "utf8"),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          );
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        }
      }
    }
  } catch (e) {
    // ignore;
  }
}
=======
  res && res.status(200).json({ ok: true, data });
  res && res.status(200).json({ ok: true, data });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  res.status(200).json({ ok: true, data })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  res.status (200).json ({ ok: true, data });
  res.status (200).json ({ ok: true, data });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
