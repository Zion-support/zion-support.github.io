 
}
}const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are a compensation analyst. Be specific and concise. Use USD.' 
};
{
  role: 'user', content: prompt 
}];
temperature: 0.2;
return res.status (200) .json (response) 
}