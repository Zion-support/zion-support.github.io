 try {
  const prompt = `You are a venture analyst generating a concise, investor-ready pitch. Operator Prompt: $ {
  operatorPrompt 
}Company Mission: $ {
  inputs?.mission 
}Funding Stage: $ {
  inputs?.fundingStage 
}Vision/Goals: $ {
  inputs?.vision 
}Round Type: $ {
  inputs?.roundType 
}Target Raise: $ {
  inputs?.targetRaise 
}Key Metrics: $ {
  JSON.stringify (metrics) 
}Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
}