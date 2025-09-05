 interface ApiResponse {
  nodes: TreeNode[];
status: {
  gitConnected: boolean, gitBranch?: string 
}
}export default function DevTreePage () {
  const fetchTree = async (token?: string) => {
  try {
  if (!resp.ok) {
  const j = await resp.json () .catch ( () => ({
  
}) );
throw new Error (j.error || `HTTP $ {
  resp.status 
}`) 
}const data: ApiResponse = await resp.json ();
setNodes (data.nodes);
setGit (data.status) 
}catch (e: any) {
  
}
};
useEffect ( () => {
  setAdminToken (stored);
fetchTree (stored);
}, []);
if (!resp.ok) {
  const j = await resp.json () .catch ( () => ({
  
}) );
throw new Error (j.error || `HTTP $ {
  resp.status 
}`) 
}await fetchTree (adminToken) 
}catch (e: any) {
  
}
};
return (<div className="p-6 max-w-5xl mx-auto" > <div className="flex items-center gap-4 mb-4" > <h1 className="text-xl font-semibold" >Zion OS Source Tree</h1> {
  git && (<div className="text-sm text-gray-600" > Git: {
  git.gitConnected ? `connected ($ {
  git.gitBranch 
}) ` : "not connected" 
}
}<div className="ml-auto flex items-center gap-2" > <input Save Token </button> </div> </div> </div>) : (<div>Loading...</div>) 
}</div>) 
}