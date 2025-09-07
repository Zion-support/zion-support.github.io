 try {
  const res = await fetch ('/api/ai/operator', {
  method: 'POST', headers: {
  'Content-Type': 'application/json', ... (authorizationToken ? {
  Authorization: `Bearer $ {
  authorizationToken 
}` 
}: process.env.NEXT PUBLIC OPERATOR TOKEN ? {
  Authorization: `Bearer $ {
  process.env.NEXT PUBLIC OPERATOR TOKEN 
}` 
}: {
  
}) 
};

