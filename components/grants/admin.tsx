 </div> </div> </div>) ) 
}</div> <div className="mt-2 flex items-center gap-2" > <button className="px-2 py-1 border rounded" onClick= {
  () => markComplete (m.id!) 
}disabled= {
  !m.id 
}>Mark Complete</button> </div> </div>) ) 
}<div className="flex gap-2 mt-2" > <button className="px-2 py-1 border rounded" onClick= {
  () => setMilestones ( (ms) => [... (ms.length ? ms : (selected.milestones || []) ), {
  id: `$ {
  Date.now () 
}-$ {
  Math.random () 
}`, title: '', trancheAmount: 0, trancheCurrency: 'USDC' 
}as any]) 
}>Add Milestone</button> <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick= {
  saveMilestones 
}>Save Milestones</button> text-sm text-gray-600" >Select a grant to plan milestones.</div>) 
}</div> </div> </div> </EnhancedLayout>) 
}