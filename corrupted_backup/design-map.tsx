import {
  {
  React, {
  useMemo, useState 
}from 'react' import Head from 'next/head' export default function DesignMapPage () {
  const designMap = useMemo ( () => getZionDesignMap (), []) const [screenName, setScreenName] = useState ('') const [role, setRole] = useState ('Talent') const [suggestion, setSuggestion] = useState<string | null> (null) const [isLoading, setIsLoading] = useState (false) async function requestWireframe () {
  if (!screenName) return setIsLoading (true) setSuggestion (null) try {
  const res = await fetch ('/api/figma/wireframe-suggest', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  screenName, role 
}) 
}) const json = await res.json () setSuggestion (json?.suggestion || 'No suggestion received') 
}catch (e: unknown) {
  setSuggestion (e?.message || 'Failed to fetch suggestion') 
}finally {
  setIsLoading (false) 
}
}return (<> <Head> <title>Zion OS Design Map</title> </Head> <section className="space-y-6" > <div className="flex items-center justify-between" > <h1 className="text-2xl font-semibold" >Zion OS Design Map</h1> <div className="flex gap-2" > <a href="/api/design-map" className="px-3 py-2 rounded bg-gray-900 text-white text-sm" >JSON</Link> <a href="/api/figma/export?kit=tailwind" className="px-3 py-2 rounded bg-neon-blue text-black text-sm" >Export Tailwind</Link> <a href="/api/figma/export?kit=chakra" className="px-3 py-2 rounded bg-neon-purple text-white text-sm" >Export Chakra</Link> <a href="/api/figma/export?kit=react" className="px-3 py-2 rounded bg-neon-green text-black text-sm" >Export React</Link> </div> </div> <option>Talent</option> <option>Client</option> <option>Admin</option> <option>DAO</option> <option>AI Tools</option> <option>Mobile</option> </select> </div>) 
}</div> </section> </>) 
}</span>) ) 
}</div> </div>) ) 
}</div> </div>) 
}