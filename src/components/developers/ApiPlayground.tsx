 interface Param {
  name: string;
type: string;
required?: boolean 
}interface ApiPlaygroundProps {
  method: string;
path: string;
params?: Param[] 
}export function ApiPlayground ({
  method, path, params = [] 
}: ApiPlaygroundProps) {
  const [response, setResponse] = useState<string | null> (null);
const [loading, setLoading] = useState (false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 params.forEach ( (p) => {
  const val = paramValues[p.name];
if (val) searchParams.append (p.name, val) 
});
const query = searchParams.toString ();
if (query) url += `?$ {
  query 
}` 
}const options: RequestInit = {
  method, headers: {
  Authorization: `Bearer $ {
  apiKey 
}`;
"Content-Type" : "application/json" 
};
//Add timeout to prevent hanging signal: AbortSignal.timeout (15000) 
};
}setLoading (true);
setResponse (null);
let responseText: string;
if (contentType?.includes ('application/json') ) {
  try {
  /> {
  params.map ( (p) => (<Input key= {
  p.name 
}</div>) 
}export default ApiPlayground;
