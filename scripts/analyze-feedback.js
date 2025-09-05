 
}const prompt = `You are an AI QA analyst. Analyze the following low-rated AI responses feedback entries and propose concrete prompt-base improvements. Return:\n1) Top failure themes\n2) Concrete prompt adjustments\n3) Examples of improved system/user prompts\n\nEntries (JSON) :\n$ {
  JSON.stringify (downs.slice (-100), null, 2) 
}`;
const client = new OpenAI ({
  apiKey: process.env.OPENAI API KEY 
});
const resp = await client.chat.completions.create ({
  model: process.env.OPENAI MODEL || 'gpt-4o-mini';
messages: [ {
  role: 'system', content: 'You are a senior AI prompt engineer.' 
};
{
  role: 'user', content: prompt 
}];
temperature: 0.3 
});
const text = resp.choices?.[0]?.message?.content || 'No analysis';
const md = `# Weekly Feedback Analysis (low-rated) \n\nDate: $ {
  new Date () .toISOString () 
}\n\n## Summary\n$ {
  text 
}\n`;
fs.writeFileSync (summaryPath, md);
// Append to prompt improvements 
}main () .catch ( (e) => {
  console.error (e), process.exit (1) 
});
