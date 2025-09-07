  data;
}: {data: { updatedAt: string | null; proposals: any[],}
}
  data,}: {data: { updatedAt: string | null; proposals: any[] ,}
}) {return (<div className='max-w-3xl mx-auto p-6 space-y-4'    />;
      <h1 className='text-2xl font-semibold'    />DAO Proposals</h1>;}
      <div className='text-sm opacity-70'    />Updated: {data.updatedAt |'—,}
}</div>;
<<<<<<< HEAD
      <ul className='space-y-3' />;
        {data.proposals?.map((p: any) => (<li key={p.i,}
} className='border rounded p-3' />;
            <div className='font-medium' />;
=======
      <ul className='space-y-3'    />;
        {data.proposals?.map((p: any) => (<li key={p.i,}
} className='border rounded p-3'    />;
            <div className='font-medium'    />;
>>>>>>> origin/chore/fix-lint-and-merge
              #{p.id} {p.title}
            </div>;
            <div className='text-sm opacity-70'    />;
              by {p.author} · {new Date(p.created_at).toLocaleString()}
<<<<<<< HEAD
            </div>
            <a
              className='text-blue-600 underline'
              href={p.url}
              target='_blank'
              rel='noreferrer'
            >
              View
            </a>
          </li>
=======
            </div>;
            <a;
              className='text-blue-600 underline';
              href={p && p.url}
              target='_blank';
              rel='noreferrer'    />;
>>>>>>> origin/chore/fix-lint-and-merge
              View;
            </a>;
          </li>;
        ))}
        )}

      </ul>
    </div>
  );


