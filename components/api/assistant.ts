

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });






    const message = completion && completion.choices?.[0]?.message || {
      role: 'assistant',
      content: 'Sorry, I could not respond.',

    };
    return res.status(200).json({ message });
  } catch (error: any) {

    console && console.error('Assistant API error:', error?.message || error);
    return res && res.status(500).json({ error: 'Assistant request failed' });
  }    return res && res.status(500).json({ error: 'Assistant request failed' })



