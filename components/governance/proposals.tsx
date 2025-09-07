data;
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              #{p.id} {p.title}
            </div>
            <div className='text-sm opacity-70'>
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
              rel='noreferrer' />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              View;
            </a>;
          </li>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        ))}
        )}

      </ul>
    </div>
  );