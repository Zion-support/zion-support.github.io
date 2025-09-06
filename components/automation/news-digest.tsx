<<<<<<< HEAD
<<<<<<< HEAD

</div> </div>) )
=======
 </div> </div>) ) 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}</div> </div>) import fs from 'fs';
import path from 'path';
type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] }
export async function getServerSideProps() {
=======
</div> </div>) ) 
=======
 </div> </div>) ) 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}</div> </div>) import fs from 'fs';
import path from 'path';
type NewsItem = { source: string, title: string, url: string, summary: string, tags: string[] },
export async function getServerSideProps() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const file = path.join(process.cwd(), 'datanews-digest.json');
  let items: NewsItem[] = [];  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
<<<<<<< HEAD
    items = json.items |[];
    generatedAt = json.generatedAt |''

  } catch {}
  return { props: { items, generatedAt } }
}
=======
    items = json.items || [];
    generatedAt = json.generatedAt || ''
  } catch {}
  return { props: { items, generatedAt } }
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
=======
    </div>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
