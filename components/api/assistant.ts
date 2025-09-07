
  }
  try {
    }
    const { messages } = req.body as {
      }
      messages?: Array<{

=======
      model: 'gpt-4o',
      temperature: 0.3,
      messages: preparedMessages});

    const message = completion.choices?.[0]?.message || {
      role: assistant,
      content: 'Sorry, I could not respond.'}
    return res.status(200).json({ message });
  } catch (error: any) {
    console.error(Assistant API error:, error?.message || error);}
    return res.status(500).json({ error: 'Assistant request failed'}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
});
  }