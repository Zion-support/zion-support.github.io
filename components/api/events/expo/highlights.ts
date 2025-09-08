


    if (!apiKey) {
      return res && res.status(200).json({ summary: baseSummary, provider: 'local' });    }      return res && res.status(200).json({ summary: baseSummary, provider: 'local' })
    }
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });



    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
  };
}





    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e) {
    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
 }
}
}
origin/cursor/automate-test-improve-and-merge-code-2533





