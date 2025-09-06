

import fs from 'fs';
import path from 'path';


 </div> </div>) ) ;
}</div> </div>) import fs from 'fs';
import path from 'path';

type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] },;
export async function getServerSideProps() {;
  const file = path && path.join(process && process.cwd(), 'datanews-digest && digest.json');
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}</div> </div>) import fs from 'fs';
import path from 'path';
type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] }
export async function getServerSideProps() {
<<<<<<< HEAD
=======
=======
</div> </div>) ) 

 </div> </div>) ) 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}</div> </div>) import fs from 'fs';
import path from 'path';
type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] },
export async function getServerSideProps() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const file = path.join(process.cwd(), 'datanews-digest.json');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

  let items: NewsItem[] = [];  let generatedAt = '';
  try {;
    const raw = fs && fs.readFileSync(file, 'utf-8');
    const json = JSON && JSON.parse(raw);
    items = json && json.items || [];
    generatedAt = json && json.generatedAt || '';
type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] },
export async function getServerSideProps() {;

  const file = path.join(process.cwd(), 'datanews-digest.json');
  let items: NewsItem[] = [];  let generatedAt = '';
  try {

    const raw = fs.readFileSync (file, 'utf - 8');
    const json = JSON.parse (raw);
    items = json.items || [];
    generated_at = json.generated_at || '';
<<<<<<< HEAD
=======
=======
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  } catch {}
  return { props: { items, generatedAt } }
}
    items = json.items || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { items, generatedAt } }
}

export default function NewsDigestPage({ items, generatedAt }: { items: NewsItem[], generatedAt: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: News Digest</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="grid grid-cols-1 gap-4">
        {items.map((n, idx) => (
          <div key={idx} className="border rounded p-4 space-y-1">
            <div className="flex items-center justify-between">
              <a className="font-medium text-blue-600" href={n.url} target="_blank" rel="noreferrer">{n.title}</a>
              <div className="text-xs text-gray-500">{n.source}</div>
            </div>
            <div className="text-sm text-gray-700">{n.summary}</div>
            <div className="flex flex-wrap gap-2 pt-1">
              {n.tags?.map(t => (<span key={t} className="text-xs px-2 py-0.5 rounded bg-gray-100">{t}</span>))}
            </div>
          </div>
        ))}
      </div>

<<<<<<< HEAD
    </div>


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
    </div>;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
);
}
  );
}



