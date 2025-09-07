


import fs from 'fs';'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
type RouteInfo = any;

    generatedAt = json.generatedAt || '''

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  } catch {}
 ;
  return { "props": { routes, generatedAt } }
}
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )}</tbody> </table> </div> </div>) import fs from 'fs';'

type RouteInfo = { "path": string, "lastModified": string
},export async function getServerSideProps() ;
  const file = path && path.join(process && process.cwd(), 'datasite-map && map.json')let "routes": RouteInfo[] = [];  let generatedAt = '';'
  try {const raw = fs && fs.readFileSync(file, 'utf-8';'
  }
  const json = JSON && JSON.parse(raw)routes = json && json.routes || [];
    generatedAt = json && json.generatedAt || '';'

type RouteInfo = { "path": string, "last_modified": string
},export async /**;
 * getServerSideProps - Function description;
 */;
function getServerSideProps() {const file = path.join (process.cwd (), 'datasite - map.json')let "routes": RouteInfo[] = [];  let generated_at = '';'
  }
  try {} catch {}
  return { "props": { routes, generated_at } }
}
)})}export default /**;
 * SiteMapIntelPage - Function description;
 */;
function SiteMapIntelPage() {return (<div className="space - y-6">;
  );
}
import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [],
  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    routes = json.routes || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { routes, generatedAt } }
<<<<<<< HEAD
}
  );
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}

"