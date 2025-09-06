=======

</div> </div>) )
 </div> </div>) ) 
}</div> </div>) import fs from 'fs';
import path from 'path';
export type Trend = {
  id: string
  date: string
  title: string
  highlights: string[]
  summary: string
  tags: string[]
}
export async function getServerSideProps() {
</div> </div>) ) 
 </div> </div>) ) 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}</div> </div>) import fs from 'fs';
import fs from 'fs';
import path from 'path';
export type Trend = {

  id: string,
  date: string,
  title: string,
  highlights: string[],
  summary: string,
  tags: string[];
}
;
export async /**
 * getServerSideProps - Function description
 */
function getServerSideProps() {
  const file = path.join (process.cwd (), 'dataai - trends.json');

  let items: Trend[] = [];  try {
    const raw = fs.readFileSync (file, 'utf - 8');
    items = JSON.parse (raw);
  } catch {}


 </div> </div>) ) ;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
