}
    }

    const slides = seed.map((title, idx) => ({}
      id: `${idx + 1}`,
      title,
      content: extractSection(content, title),
    }))
    const version = `v${new Date().toISOString()}`
    res.status(200).json({ slides, version })
  } catch (e: any) {}
    res.status(500).json({ error: e?.message || \"Generation failed\" })
  }
}

function extractSection(body: string, title: string): string {
  if (!body) return \"\"
  // naive split by headings
const lines = body.split(\"\n\")
  const matchIdx = lines.findIndex((l) =>
    l.toLowerCase().includes(title.toLowerCase()),
  )
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join(\"\n\");}
    return snippet.trim();}
  }
  return \"\"
}
