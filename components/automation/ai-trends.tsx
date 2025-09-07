


import fs from 'fs';'
import path from 'path';'

</div> </div>) ) 

 </div> </div>) ) 
}</div> </div>) import fs from 'fs';
import path from 'path';
export type Trend = {;
  id: string,;
  date: string,;
  title: string,;
  highlights: string[],;
  summary: string,;
  tags: string[]
};
export async function getServerSideProps() {;
  const file = path && path.join(process && process.cwd(), 'dataai-trends && trends.json');
  let items: Trend[] = [];  try {;
    const raw = fs && fs.readFileSync(file, 'utf-8');
    items = JSON && JSON.parse(raw);
</div> </div>) ) 
}</div> </div>) 
}

