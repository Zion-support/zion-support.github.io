
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) )
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string }
export async function getServerSideProps() {
<tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
 <tr> <th className="text-left p-2" >Route</th> <th className="text-left p-2" >Last Modified</th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table> </div> </div>) import fs from 'fs';
import path from 'path';
type RouteInfo = { path: string, lastModified: string },
export async function getServerSideProps() {;
  const file = path.join(process.cwd(), 'datasite-map.json');
  let routes: RouteInfo[] = [];  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    routes = json.routes |[];
    generatedAt = json.generatedAt |''




}





