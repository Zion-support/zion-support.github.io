 return (<> <Head> <title>Verify Identity - Zion</title> <meta name="description" content="Complete KYC/AML verification to secure marketplace trust" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> </Head> <main className="max-w-3xl mx-auto px-4 py-8" > <h1 className="text-2xl font-bold mb-4" >Identity Verification</h1> <p className="text-sm text-gray-600 mb-6" >Guided step-by-step KYC/AML verification with progress tracking.</p> <VerifiedBadge labels= {
  labels 
}/> </div>) 
}<div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {
  role === 'enterprise' && (<> <div> </div> </>) 
}</div> </div> </div> <section> {
  requiredDocs.map ( (k) => {
  const hasIt = (profile.documents || []) .some ( (d) => d.kind === k);
return (<div key= {
  k 
}className="flex items-center justify-between border rounded p-3" > <div> <div className="text-sm font-medium" > {
  k 
}</div> <div className="text-xs text-gray-500" > {
  hasIt ? 'Uploaded' : 'Missing' 
}</div> </div> <button disabled= {
  busy 
}onClick= {
  () => upload (k) 
}className="text-sm px-3 py-1 rounded bg-gray-900 text-white disabled:opacity-50" > {
  hasIt ? 'Replace' : 'Upload' 
}</button> 
}) 
}</div> </section> <h2 className="font-semibold mb-2">Optional documents</h2> <div className="grid grid-cols-1 md: grid-cols-2 gap-2"> optionalDocs.map ( (k) => {
  </div>) 
}) 
}</div> </section>) 
}<div> </div>) 
}</main> </>) 
}