 const resp = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are an impartial risk and trust analyst for a talent marketplace.' 
};
{
  role: 'user', content: prompt 
}];
temperature: 0.2;
max tokens: 200 
});
}