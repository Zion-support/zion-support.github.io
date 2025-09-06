 const user = [ `Operator Prompt: $ {
  operatorPrompt 
}`;
context ? `Context: $ {
  JSON.stringify (context) 
}` : undefined] .filter (Boolean) .join ('\n');
const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: system 
};

