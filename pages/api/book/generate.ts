    res.status(405).json({ error: 'Method not allowed' });
    return
  }

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] };
  const apiKey = null;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });
    const text = completion.choices?.[0]?.message?.content || '';
    drafted.push({ title: ch.title, content: text });
  }

  res.status(200).json({ chapters: drafted });
}
    drafted.push({ title: ch.title, content: text })
  }
  res.status(200).json({ chapters: drafted })
}
