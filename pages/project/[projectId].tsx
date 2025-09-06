 export default function ProjectPage () {
  const router = useRouter ();
const {
  projectId 
}= router.query as {
  projectId?: string 
};
const [project, setProject] = useState<any | null> (null);
const [loading, setLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const [note, setNote] = useState ("");
  async function load () {
  if (!projectId) return;
}catch (e: any) {
  setError (e.message) 
}finally {
  setLoading (false) 

}load () 
}, [projectId]);
const [showFeedback, setShowFeedback] = useState (false);

}async function markCompleted () {
  const res = await fetch (`/api/marketplace/projects`, {
  if (json.ok) {
  setProject (json.project);
setShowFeedback (true) 

}return (<div className=" max-w-4xl mx-auto p-6 space-y-6"> {
  loading && <div>Loading…</div> 
}{
  error && <div className=" text-red-600"> {
  error 
}</div> 
}{
  project && (<div className=" space-y-6"> <div className=" flex items-center gap-3"> <h1 className=" text-2xl font-semibold">Project Kickoff</h1> <span className= {
  `px-2 py-0.5 rounded text-xs $ {
  project.status === " ACTIVE"? " bg-emerald-100 text-emerald-700": " bg-gray-200" 
}` 
}> {
  project.status 
}</span> </div> <section className=" rounded border p-4"> <h2 className=" font-medium mb-2">Project Summary</h2> <div className=" text-sm"> <div><b>Client</b>: {
  project.clientId 
}</div> <div><b>Talent</b>: {
  project.talentSlug 
}</div> <div><b>Start</b>: {
  new Date (project.startDateIso) .toLocaleDateString () 
}</div> <div className=" mt-2"> {
  project.summary 
}</div> </div> </section> <section className=" rounded border p-4"> <h2 className=" font-medium mb-2">Timeline</h2> <ul className=" list-disc pl-6 space-y-1 text-sm"> {
  project.timeline?.length ? (project.timeline.map ( (m: any) => (<li key= {
  m.id 
}> <span className=" font-medium"> {
  m.title 
}</span> {
  m.dueDateIso && <span> • due {
  new Date (m.dueDateIso) .toLocaleDateString () 
}</span> 
}{
  m.amountUsd && <span> • $ {
  m.amountUsd 
}</span> 
}{
  m.status && <span> • {
  m.status 
}</span> 

}</ul> </section>) : (<span> {
  d.name 
}</span>) 
}</li>) ) ) : (<li>No documents</li>) 
}</ul> </section> </div>) ) ) : (<div className=" text-sm text-gray-600" >No notes yet.</div>) 
}</div>) 
}</div> </div>) 
}<FeedbackModal isOpen= {
  showFeedback 
}onClose= {
  () => setShowFeedback (false) 
}defaultContext= {
  {
  actionType: 'chatbot use', metadata: {
  projectId 

}userHeaders= {
  headers 
}/> </div>) 
