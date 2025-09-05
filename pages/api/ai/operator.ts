 const completion = await openai.chat.completions.create ({
  model: 'gpt-4o-mini', temperature: typeof temperature === 'number' ? temperature : 0.7, messages: [ {
  role: 'system', content: sys 
};
{
  role: 'user', content: prompt 
}] 
});
}
}