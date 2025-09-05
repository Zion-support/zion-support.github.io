 
}catch {
  
}
}, [role]);
return (<div> <Head> <title>Project Milestones</title> <meta name="description" content="Track project deliverables and milestone payments" /> </Head> </div> <MilestoneForm onSubmit= {
  handleCreate 
}/> </div>) 
}{
  milestones.length === 0 && (<div className="text-gray-600" >No milestones yet. {
  role !== 'talent' ? 'Create the first one.' : '' 
}</div>) 
}{
  milestones.map ( (m) => (<MilestoneCard key= {
  m.id 
}milestone= {
  m 
}projectId= {
  String (projectId) 
}role= {
  role 
}onAction= {
  handleAction 
}/>) ) 
}</div>) 
}</div> </div> </div>) 
}