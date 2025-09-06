 
}return (<EnhancedLayout> {
  !dispute ? (<div>Loading...</div>) : (</div> </div> <button key= {
  t 
}onClick= {
  () => setActiveTab (t) 
}className= {
  `py-2 border-b-2 -mb-px $ {
  activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500' 
}` 
}> {
  t 
}</button>) ) 
}</div> {
  activeTab === 'Overview' && (<div className="space-y-6" > <div className="p-4 border rounded" > <div className="font-medium mb-2" >Reason</div> <div className="text-sm" > {
  dispute.reason 
}{
  dispute.reasonDetails ? `— $ {
  dispute.reasonDetails 
}` : '' 
}</div> </div> <div className="p-4 border rounded" > <div className="font-medium mb-2" >Description</div> <div className="text-sm whitespace-pre-wrap" > {
  dispute.description 
}</div> </div> <div className="p-4 border rounded" > <div className="font-medium mb-3" >Timeline</div> <ol className="relative border-l ml-2" > <li className="mb-6 ml-4" > <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white" /> <time className="text-xs text-gray-500" >Created at {
  new Date (dispute.createdAt) .toLocaleString () 
}</time> <div className="text-sm" >Case opened</div> </li> {
  dispute.messages.map ( (m: any) => (<li key= {
  m.id 
}className="mb-6 ml-4" > <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white" /> <time className="text-xs text-gray-500" > {
  new Date (m.createdAt) .toLocaleString () 
}</time> <div className="text-sm" > {
  m.authorRole 
}messaged</div> </li>) ) 
}{
  dispute.resolvedAt && (<li className="mb-6 ml-4" > <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white" /> <time className="text-xs text-gray-500" > {
  new Date (dispute.resolvedAt) .toLocaleString () 
}</time> <div className="text-sm" >Case resolved</div> 
}</ol> </div> </div>) 
}</li>) ) 
}</ul>) 
}</div> </div>) 
}</div>) 
}</li>) ) 
}</ul>) 
}</div>) 
}{
  user.role !== 'admin' ? (<div className="text-sm text-gray-500" >Admin access required</div>) : (</div> </div>) 
}</div>) 
}</div>) 
}</EnhancedLayout>) 
}