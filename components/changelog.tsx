<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
{
  generatedAt && (<p className="mt-2 text-sm text-gray-600" >Generated: {
  generatedAt 
}</p>) 
}{
  content 
}</pre>) : (<div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600" > No changelog generated yet. </div>) 
}</main>) 
}
}
}
<<<<<<< HEAD
=======
type Props = {
  content: string | null,
  generatedAt: string | null
};
=======
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
  content: string | null;
  content: string | null,
  generated_at: string | null;
}
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Changelog</h1>
      {generatedAt && (
        <p className='mt-2 text-sm text-gray-600'>"Generated": {generatedAt}</p>'
      
=======
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
type Props = any;
    return { props: { content, generatedAt: new Date().toISOString(),}
}, revalidate: 300 }
      <h1 className='text-2xl font-bold text-gray-900'    />Changelog</h1>
      {generatedAt && (}
        <p className='mt-2 text-sm text-gray-600'    />Generated: {generatedAt}</p>
      ,
>>>>>>> origin/chore/fix-lint-and-merge
}

    <main className='mx - auto max - w-4xl px - 4 py - 12'    />;
      <h1 className='text - 2xl font - bold text - gray - 900'    />Changelog</h1>;
      {generated_at && (}
        <p className='mt - 2 text - sm text - gray - 600'    />Generated: {generated_at}</p>,
}
      {content ? (}
        <pre className='mt - 6 whitespace - pre - wrap rounded - xl border border - gray - 200 bg - white p - 6 text - sm text - gray - 800 shadow - sm'    />;}
          {content}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <main className='mx - auto max - w-4xl px - 4 py - 12'>;
      <h1 className='text - 2xl font - bold text - gray - 900'>Changelog</h1>;
      {generated_at && (
        <p className='mt - 2 text - sm text - gray - 600'>Generated: {generated_at}</p>)}
      {content ? (
        <pre className='mt - 6 whitespace - pre - wrap rounded - xl border border - gray - 200 bg - white p - 6 text - sm text - gray - 800 shadow - sm'>;
          {content}
        </pre>) : (
        <div className='mt - 6 rounded - xl border border - gray - 200 bg - white p - 6 text - gray - 600'>          No changelog generated yet.      {generated_at && (
        <p className="mt - 2 text - sm text - gray - 600">Generated: {generated_at}</p>)}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {content ? (
        <pre className="mt - 6 whitespace - pre - wrap rounded - xl border border - gray - 200 bg - white p - 6 text - sm text - gray-800 shadow-sm>;
        <pre className=mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (

=======
        </pre>
      ) : (
        <div className='mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600'    />
          No changelog generated yet.
        </div>

      )}
    </main>;

export default function ChangelogPage(): any ({ content, generatedAt }: Props) {return (<main className='mx-auto max-w-4xl px-4 py-12'    />;
      <h1 className='text-2xl font-bold text-gray-900'    />Changelog</h1>;}
      {generatedAt && (<p className='mt-2 text-sm text-gray-600'    />Generated: {generatedA,}
}</p>;
      )}
      {content ? (<pre className='mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm'    />;}
          {content}
        </pre>;
      ) : (<div className='mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600'    />          No changelog generated yet.      {generatedAt && (<p className=\"mt-2 text-sm text-gray-600\"    />Generated: {generatedA,}
}</p>;
      )}
      {content ? (<pre className=\"mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm\"    />;}
{content}
        </pre>;
      ) : (<div className=\"mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          No changelog generated yet.;
        </div>;
      )}
    </main>;
<<<<<<< HEAD
  )}} catch {}    return { "props": { content, "generatedAt": new Date().toISOString()
}, "revalidate": 300 
} catch {export async function getStaticProps() {try {const file = path && path.join(process && process.cwd(), 'CHANGELOG && CHANGELOG.md';'
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {

=======


  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }

  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {
export async function getStaticProps() {;
  try {;
    const file = path && path.join(process && process.cwd(), 'CHANGELOG && CHANGELOG.md');
    const content = fs && fs.readFileSync(file, 'utf8');
    return {;
      props: { content, generatedAt: new Date().toISOString() },;
      revalidate: 300,;
    };
  } catch {;
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {;

<<<<<<< HEAD
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
}
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
=======
  )}} catch {}    return { props: { content, generatedAt: new Date().toISOString(),}
}, revalidate: 300 ,
} catch {export async function getStaticProps() {try {const file = path && path.join(process && process.cwd(), 'CHANGELOG && CHANGELOG.md';}
  const content = fs && fs.readFileSync(file, 'utf8')return {props: { content, generatedAt: new Date().toISOString(),}
},revalidate: 300,}} catch {return { props: { content: null, generatedAt: null,}
}, revalidate: 300 ,
}    return { props: { content, generatedAt: new Date().toISOString(),}
}, revalidate: 300 }
 ,
} catch ;
  return { props: { content: null, generatedAt: null,}
}, revalidate: 300}
>>>>>>> origin/chore/fix-lint-and-merge
}

export async /**;
 * getStaticProps - Function description;
 */;
function getStaticProps() {export async function getStaticProps() {try {const file = path.join(process.cwd(), 'CHANGELOG.md')const content = fs.readFileSync(file, 'utf8')return {props: { content, generatedAt: new Date().toISOString(),}
},revalidate: 300,}} catch {}    return { props: { content, generatedAt: new Date().toISOString(),}
}, revalidate: 300,
}return { props: { content: null, generatedAt: null,}
}, revalidate: 300 },
} catch ;
  return { props: { content: null, generatedAt: null,}
}, revalidate: 300}
}

<<<<<<< HEAD
export async function getStaticProps() {
  try {
<<<<<<< HEAD
=======
   ;
  const file = path.join(process.cwd(), 'CHANGELOG.md');
>>>>>>> origin/chore/fix-lint-and-merge

const content = fs.readFileSync(file, 'utf8');
    return {}
      props: { content, generatedAt: new Date().toISOString(),}
},
      revalidate: 300}
  } catch {
<<<<<<< HEAD
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
}}
  } catch {return { props: { content: null, generatedAt: null }, revalidate: 300 }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  try {
    const file = path.join (process.cwd (), 'CHANGELOG.md');
    const content = fs.readFileSync (file, 'utf8');
    return {
      props: { content, generated_at: new Date ().toISOString () },
      revalidate: 300,
    }
  } catch {
    return { props: { content: null, generated_at: null }, revalidate: 300 }
  }    return { props: { content, generated_at: new Date ().toISOString () }, revalidate: 300 }
  } catch {
    return { props: { content: null, generated_at: null }, revalidate: 300 }
}
      {generatedAt && (
        <p className=&quot;mt-2 text-sm text-gray-600&quot;>Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className=&quot;mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm&quot;>
{content}
        </pre>
      ) : (
        <div className=&quot;mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600&quot;>
          No changelog generated yet.
        </div>
      )}
    </main>
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  } catch {

    return { props: { content: null, generatedAt: null }, revalidate: 300 };

<<<<<<< HEAD

}}
  } catch {return { props: { content: null, generatedAt: null }, revalidate: 300 }
    return { props: { content: null, generatedAt: null}, revalidate: 300}
  }
}
=======
}
    return { props: { content: null, generatedAt: null,}
}, revalidate: 300}
  }
  } catch {}
    return { props: { content: null, generatedAt: null,}
}, revalidate: 300 }
},
}


>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

export async function getStaticProps() {
  try {
    const file = path.join(process.cwd(), 'CHANGELOG.md'),
    const content = fs.readFileSync(file, 'utf8'),
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
  }

}

type Props = {
  content: string | null;
  generatedAt: string | null;}
export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>type Props = {
  content: string | null
  generatedAt: string | null
}
export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
  content: string | null,
  generatedAt: string | null;
};

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>
      {generatedAt && (
        <p className='mt-2 text-sm text-gray-600'>Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className='mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm'>
          {content}
        </pre>
      ) : (
        <div className='mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600'>          No changelog generated yet.      {generatedAt && (
        <p className="mt-2 text-sm text-gray-600">Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
          No changelog generated yet.
        </div>
      )}

};

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    </main>;

          No changelog generated yet.

        </div>
      )}
    </main>
  );
}
export async function getStaticProps() {
  try {;
    const file = path.join(process.cwd(), 'CHANGELOG.md');
    const content = fs.readFileSync(file, 'utf8');
    return {
      props: { content, generatedAt: new Date().toISOString() }
      revalidate: 300
    }
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }

  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
}
}
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }

}
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
