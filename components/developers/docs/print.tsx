 export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
<<<<<<< HEAD
    props: {
      docs: content as DocsContent,
    },
  };
};

export default function PrintDocs({ docs }: PageProps) {
  useEffect(() => {
    const id = setTimeout(() => window.print(), 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>{docs.title}</h1>
      <div className='space-y-8'>
        {docs.sections.map(s => (
          <section key={s.id}>
            <h2 className='text-2xl font-semibold mb-2'>{s.title}</h2>
            {s.html && <div dangerouslySetInnerHTML={{ __html: s.html }} />}
            {s.code &&
              s.code.map((c, i) => (
                <pre
                  key={i}
                  className='mt-4 p-4 bg-gray-100 text-xs whitespace-pre-wrap'
                >
                  {c.content}
                </pre>
              ))}
          </section>
        ))}
      </div>
    </div>
  );
}
=======
  props: {
  docs: content as DocsContent 
}
}
};
) ) 
}</section>) ) 
}</div> </div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
