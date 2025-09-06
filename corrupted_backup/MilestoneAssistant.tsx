 return (<div className="milestone-assistant"> <div className="assistant-header" style= {
  {
  display: "flex", gap: 12, alignItems: "center" 
}
}> <button onClick= {
  generate 
}disabled= {
  loading || isDisabled 
}> {
  loading ? "Generating..." : "💡 Generate AI Milestones" 
}</button> <label style= {
  {
  display: "flex", gap: 6, alignItems: "center" 
}
}> <input type="checkbox" checked= {
  autoAdd 
}onChange= {
  (e) => setAutoAdd (e.target.checked) 
}/> Auto-add to Milestone Tracker </label> </div> {
  error && <div style= {
  {
  color: "#b00", marginTop: 8 
}
}> {
  error 
}</div> 
}<div style= {
  {
  marginTop: 12 
}
}> {
  items.length === 0 && !loading && (<div style= {
  {
  color: "#666" 
}
}>No suggestions yet. Click "Generate" above.</div>) 
}{
  items.map ( (item, idx) => (<div key= {
  idx 
}className="milestone-item" style= {
  {
  border: "1px solid #ddd", borderRadius: 8, marginBottom: 8 
}
}> <div className="milestone-summary" style= {
  {
  padding: 12, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" 
}
}onClick= {
  () => setExpandedIdx (expandedIdx === idx ? null : idx) 
}> <div style= {
  {
  display: "flex", gap: 8, alignItems: "center" 
}
}> <span style= {
  {
  fontWeight: 600 
}
}> {
  item.title || `Milestone $ {
  idx + 1 
}` 
}</span> <span style= {
  {
  background: "#eef7ff", color: "#1677ff", padding: "2px 6px", borderRadius: 4, fontSize: 12 
}
}> AI Suggested </span> </div> <div style= {
  {
  fontSize: 12, color: "#555" 
}
}> Due: {
  new Date (item.suggestedDueDateIso) .toLocaleDateString () 
}· ~ {
  item.estimatedEffortHours 
}h </div> </div> {
  expandedIdx === idx && (<div className="milestone-details" style= {
  {
  padding: 12, display: "grid", gap: 8 
}
}> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Title</label> <input value= {
  item.title 
}onChange= {
  (e) => updateItem (idx, {
  title: e.target.value 
}) 
}placeholder="Title" /> </div> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Description</label> <textarea value= {
  item.description 
}onChange= {
  (e) => updateItem (idx, {
  description: e.target.value 
}) 
}rows= {
  3 
}placeholder="Description" /> </div> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Suggested due date</label> <input type="date" value= {
  item.suggestedDueDateIso.slice (0, 10) 
}onChange= {
  (e) => updateItem (idx, {
  suggestedDueDateIso: new Date (e.target.value) .toISOString () 
}) 
}/> </div> <div style= {
  {
  display: "grid", gap: 6 
}
}> <label>Estimated effort (hours) </label> <input type="number" min= {
  1 
}value= {
  item.estimatedEffortHours 
}onChange= {
  (e) => updateItem (idx, {
  estimatedEffortHours: Math.max (1, parseInt (e.target.value || "0", 10) ) 
}) 
}/> </div> <div style= {
  {
  display: "flex", justifyContent: "space-between", marginTop: 8 
}
}> <button onClick= {
  () => removeItem (idx) 
}style= {
  {
  color: "#b00" 
}
}>Remove</button> <button onClick= {
  accept 
}>Accept</button> </div> </div>) 
}</div>) ) 
}</div> </div>) 
}export default MilestoneAssistant;
