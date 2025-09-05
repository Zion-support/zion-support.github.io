) ) 
}</nav> {
  tab === 'members' && (<MembersTab members= {
  members 
}setMembers= {
  setMembers 
}/>) 
}{
  tab === 'usage' && usage && (<UsageTab usage= {
  usage 
}setUsage= {
  setUsage 
}seatsUsed= {
  seatsUsed 
}/>) 
}{
  tab === 'activity' && (<ActivityTab events= {
  activity 
}/>) 
}{
  tab === 'billing' && (<BillingTab invoices= {
  invoices 
}/>) 
}</main>) 
}return (<section> <h2>Team members</h2> </select> <button onClick= {
  add 
}style= {
  {
  padding: '0.5rem 0.75rem' 
}
}>Add</button> </div> <table style= {
  {
  width: '100%', borderCollapse: 'collapse' 
}
}> <thead> <tr> <th style= {
  {
  textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Name</th> <th style= {
  {
  textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Email</th> <th style= {
  {
  textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Role</th> <th style= {
  {
  textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Actions</th> </tr> </thead> <tbody> {
  members.map (m => (<tr key= {
  m.id 
}> </select> </td> <td style= {
  {
  padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' 
}
}> <button onClick= {
  () => remove (m.id) 
}style= {
  {
  color: '#b91c1c' 
}
}>Remove</button> </td> </tr>) ) 
}</tbody> </table> </section>) 
}return (<section> <h2>Usage limits</h2> <div style= {
  {
  display: 'grid', gridTemplateColumns: 'repeat (2, minmax (0, 1fr) ) ', gap: 12, maxWidth: 600 
}
}> <label> <div>Monthly job posts</div> </label> </div> <div style= {
  {
  marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 
}
}> <button onClick= {
  save 
}style= {
  {
  padding: '0.5rem 0.75rem' 
}
}>Save limits</button> <span>Seats used: {
  seatsUsed 
}</span> </div> </section>) 
}function ActivityTab ({
  events 
}: {
  events: unknown[] 
}) {
  return (<section> <h2>Team activity</h2> <ul> {
  events.map ( (e) => (<li key= {
  e.id 
}> <span style= {
  {
  color: '#6b7280' 
}
}> {
  new Date (e.timestampIso) .toLocaleString () 
}— </span> <strong> {
  e.actorEmail 
}</strong> {
  e.action 
}</li>) ) 
}</ul> </section>) 
}function BillingTab ({
  invoices 
}: {
  invoices: Invoice[] 
}) {
  return (<section> <h2>Billing & invoices</h2> <table style= {
  {
  width: '100%', borderCollapse: 'collapse' 
}
}> <thead> <tr> <th style= {
  {
  textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Invoice #</th> <th style= {
  {
  textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Period</th> <th style= {
  {
  textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Amount</th> <th style= {
  {
  textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Status</th> <th style= {
  {
  textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' 
}
}>Actions</th> </tr> </thead> <tbody> {
  invoices.map (inv => (<tr key= {
  inv.id 
}> </td> </tr>) ) 
}</tbody> </table> </section>) 
}