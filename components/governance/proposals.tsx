  data;
<<<<<<< HEAD
}: {}
  data: { updatedAt: string | null; proposals: any[] }
  data,
}: {;
  data: { updatedAt: string | null; proposals: any[] };
}) {}
  return (
    <div className='max-w-3xl mx-auto p-6 space-y-4'>'
      <h1 className='text-2xl font-semibold'>DAO Proposals</h1>'
      <div className='text-sm opacity-70'>Updated: {data.updatedAt |'—'}</div>'
      <ul className='space-y-3'>
        {data.proposals?.map((p: any) => ('
          <li key={p.id} className='border rounded p-3'>'
            <div className='font-medium'>
              #{p.id} {p.title}
            </div>'
            <div className='text-sm opacity-70'>
              by {p.author} · {new Date(p.created_at).toLocaleString()}
            </div>

            <a'
              className='text-blue-600 underline'
              href={p && p.url}'
              target='_blank''
              rel='noreferrer'>;
=======
}: {data: { updatedAt: string | null; proposals: any[],}
}
  data,}: {data: { updatedAt: string | null; proposals: any[] ,}
}) {return (<div className='max-w-3xl mx-auto p-6 space-y-4' />;
      <h1 className='text-2xl font-semibold' />DAO Proposals</h1>;}
      <div className='text-sm opacity-70' />Updated: {data.updatedAt |'—,}
}</div>;
      <ul className='space-y-3' />;
        {data.proposals?.map((p: any) => (<li key={p.i,}
} className='border rounded p-3' />;
            <div className='font-medium' />;
              #{p.id} {p.title}
            </div>;
            <div className='text-sm opacity-70' />;
              by {p.author} · {new Date(p.created_at).toLocaleString()}
            </div>;
            <a;
              className='text-blue-600 underline';
              href={p && p.url}
              target='_blank';
              rel='noreferrer' />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              View;
            </a>;
          </li>;
        ))}
        )}

      </ul>
    </div>
  );
<<<<<<< HEAD
export async function getStaticProps() { return null; }
=======
export async function getStaticProps() {;
  try{;
    const p = path && path.join(process && process.cwd(),'datagovernanceproposals && datagovernanceproposals.json');
    const raw = fs && fs.readFileSync(p,'utf8');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return { props: { data: JSON && JSON.parse(raw) } }
  }catch{;
  try{}
    </div>;
  );
}

}
    return { props: { data: { updated_at: null, proposals: [] } } }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
