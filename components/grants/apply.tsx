const save = async (submit: boolean) => {
  try {
  <option value="">Select sector</option> {
  categories.map ( (c) => <option key= {
  c 
}value= {
  c 
}> {
  c 
}</option>) 
}</select> </label> </div> <label className="text-sm">Project Name <input className="mt-1 w-full border rounded p-2" value= {
  projectName 
}onChange= {
  (e) => setProjectName (e.target.value) 
}/> </label> <label className="text-sm">Team Info <textarea className="mt-1 w-full border rounded p-2" rows= {
  3 
}value= {
  teamInfo 
}onChange= {
  (e) => setTeamInfo (e.target.value) 
}/> </label> <label className="text-sm">Proposal Summary <textarea className="mt-1 w-full border rounded p-2" rows= {
  6 
}value= {
  proposalSummary 
}onChange= {
  (e) => setProposalSummary (e.target.value) 
}/> </label> <label className="text-sm">Timeline <input className="mt-1 w-full border rounded p-2" value= {
  timeline 
}onChange= {
  (e) => setTimeline (e.target.value) 
}/> </label> <div className="grid md:grid-cols-3 gap-3"> </label> </div> <label className="text-sm">Supporting Links (one per line) <textarea className="mt-1 w-full border rounded p-2" rows= {
  3 
}value= {
  supportingLinks 
}onChange= {
  (e) => setSupportingLinks (e.target.value) 
}/> </label> <label className="text-sm">Pitch Deck window.URL <input className="mt-1 w-full border rounded p-2" value= {
  pitchDeckUrl 
}onChange= {
  (e) => setPitchDeckUrl (e.target.value) 
}/> </label> {
  error && <div className="text-sm text-red-600"> {
  error 
}</div> 
}<div className="flex gap-3"> </div> </div> </EnhancedLayout>) 
}