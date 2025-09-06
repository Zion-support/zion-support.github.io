 const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'];
<option value="">All Sectors</option> {
  categories.map ( (c) => (<option key= {
  c 
}value= {
  c 
}> {
  c 
}</option>) ) 
}</select> </select> </div> <div className="grid gap-4"> {
  items.map ( (g) => (<div key= {
  g.id 
}className="border rounded p-4 bg-white/70 dark:bg-black/40"> <div className="flex items-center justify-between"> <div> </div> <div className="flex gap-2 items-center"> {
  g.program === 'incubator' && <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">Incubated by Zion</span> 
}{
  g.status === 'Approved' && <span className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">Grant Winner</span> 
}<span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800"> {
  g.status 
}</span> </div> </div> <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3"> {
  g.proposalSummary 
}</p> <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Budget: {
  g.budgetAmount 
}{
  g.budgetCurrency 
}</div> </div>) ) 
}{
  items.length === 0 && <div className="text-sm text-gray-600">No grants found.</div> 
}</div> </EnhancedLayout>) 
}