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
}
return (<> <button > {
  buttonLabel 
}</button> </div> <div className="p-4 space-y-3" > <div> <label className="block text-xs font-medium mb-1" >Operator prompt</label> <textarea <button onClick= {
  () => {
  onAccept (output), onClose () 
}
}disabled= {
  !canAccept 
}className="ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm disabled:opacity-60" 
}</div> </div> </div> </div>) 
}</>) 
}