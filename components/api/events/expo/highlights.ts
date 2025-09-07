
      .status(500)
      .json({ error: e && e.message || Failed to generate highlights' });
  }    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai })
  } catch (e: any) {


      .json({ error: e.message || 'Failed to generate highlights}
})
    return res.status(200).json({ summary: content, provider: openai' })
  } catch (e) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}

=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

}