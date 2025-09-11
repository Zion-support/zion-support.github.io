
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======




type Experiment = {
  hypothesis?: string;
  metric?: string;
  effort?: number;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  hypothesis?: string;
  metric?: string;
  effort?: number;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
impact?: number ;
};
type Props = {;
  updatedAt: string | null;
items: Experiment[] };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function CurationPage(): any ({ updatedAt, items }: Props) {;
  return (type Experiment = {;
  title: string,;
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number;
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Props = {;
  updatedAt: string | null,;
  items: Experiment[];
};=======

export default function CurationPage(): any ({ updatedAt, items }: Props) {;
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>;
      <h1 className='text-2xl font-bold text-gray-900'>;
        AI Curated Growth Experiments;
      </h1>;
        <p className='mt-2 text-sm text-gray-600'>Last updated: {updatedAt}</p>;
      ) : (;
        <p className='mt-2 text-sm text-gray-600'>;
          No curated output yet. It will appear here automatically after the;
          next run.;
        </p>;
      )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  impact?: number;
}
;
type Props = {
  updated_at: string | null,
  items: Experiment[];
}
;
export default /**
 * CurationPage - Function description
 */
function CurationPage() {
  return (
    <main className='mx - auto max - w-4xl px - 4 py - 12'>;
      <h1 className='text - 2xl font - bold text - gray - 900'>;
        AI Curated Growth Experiments;
      </h1>;
        <p className='mt - 2 text - sm text - gray - 600'>Last updated: {updated_at}</p>) : (
        <p className='mt - 2 text - sm text - gray - 600'>;
          No curated output yet. It will appear here automatically after the;
          next run.;
        </p>)}
      <div className='mt - 6 space - y-4'>;
        {items.map ((exp, idx) => (
          <div;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            key={idx}
            className='rounded - xl border border - gray - 200 bg - white p - 5 shadow - sm';
          >;
            <div className='text - base font - semibold text - gray - 900'>;
              {exp.title}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='mt-6 space-y-4'>;
        {items && items.map((exp, idx) => (;
          <div
            key={idx}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>;
            <div className='text-base font-semibold text-gray-900'>;
              {exp && exp.title}
            </div>;
            {(exp && exp.hypothesis || exp && exp.metric) && (;
              <div className='mt-2 text-sm text-gray-700'>;
                {exp && exp.hypothesis && (;
                  <div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <span className='font-medium'>Hypothesis:</span>{' '}
                    {exp && exp.hypothesis}
                  </div>;
                )}
                {exp && exp.metric && (;
                  <div>;
                    <span className='font-medium'>Metric:</span> {exp && exp.metric}
                  </div>;
                )}
              </div>;
            )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {(exp && exp.effort || exp && exp.impact) && (;
              <div className='mt-2 text-xs text-gray-500'>;
                {exp && exp.effort ? `Effort: ${exp && exp.effort}/5` : null}
                {exp && exp.effort && exp && exp.impact ? ' · ' : null}                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}                {exp && exp.effort && exp && exp.impact ? " · " : null}
                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}
              </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            )}
          </div>;
        ))}
        {!items && items.length && (;
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
            Nothing to show yet.;
          </div>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
export default function CurationPage({ updatedAt, items }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">AI Curated Growth Experiments</h1>
      {updatedAt ? (
        <p className="mt-2 text-sm text-gray-600">Last updated: {updatedAt}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-600">No curated output yet. It will appear here automatically after the next run.</p>
      )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mt-6 space-y-4">
        {items.map((exp, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-base font-semibold text-gray-900">{exp.title}</div>
            {(exp.hypothesis || exp.metric) && (
              <div className="mt-2 text-sm text-gray-700">
                {exp.hypothesis && <div><span className="font-medium">Hypothesis:</span> {exp.hypothesis}</div>}
                {exp.metric && <div><span className="font-medium">Metric:</span> {exp.metric}</div>}
              </div>
            )}
            {(exp.effort || exp.impact) && (
              <div className="mt-2 text-xs text-gray-500">
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? " · " : null}
type Props = {
  updatedAt: string | null,
  items: Experiment[]
},

export default function CurationPage({ updatedAt, items }: Props) {
  return (
    <main className=&quot;mx-auto max-w-4xl px-4 py-12&quot;>
      <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>AI Curated Growth Experiments</h1>
type Experiment = {_title: string;
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number;};

type Props = {_updatedAt: string | null;
  items: Experiment[];};

export default function CurationPage(_{_updatedAt, _items}: Props) {_return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">AI Curated Growth Experiments</h1>

      {updatedAt ? (
        <p className=&quot;mt-2 text-sm text-gray-600&quot;>Last updated: {updatedAt}</p>
      ) : (
        <p className=&quot;mt-2 text-sm text-gray-600&quot;>No curated output yet. It will appear here automatically after the next run.</p>
      )}

      <div className=&quot;mt-6 space-y-4&quot;>
        {items.map((exp, idx) => (
          <div key={idx} className=&quot;rounded-xl border border-gray-200 bg-white p-5 shadow-sm&quot;>
            <div className=&quot;text-base font-semibold text-gray-900&quot;>{exp.title}</div>
            {(exp.hypothesis || exp.metric) && (
              <div className=&quot;mt-2 text-sm text-gray-700&quot;>
                {exp.hypothesis && <div><span className=&quot;font-medium&quot;>Hypothesis:</span> {exp.hypothesis}</div>}
                {exp.metric && <div><span className=&quot;font-medium&quot;>Metric:</span> {exp.metric}</div>}
              </div>
            )}
            {(exp.effort || exp.impact) && (
              <div className=&quot;mt-2 text-xs text-gray-500&quot;>
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? &quot; · &quot; : null}

=======
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
            {(exp.hypothesis || exp.metric) && (
              <div className='mt - 2 text - sm text - gray - 700'>;
                {exp.hypothesis && (
                  <div>;
                    <span className='font - medium'>Hypothesis:</span>{' '}
                    {exp.hypothesis}
                  </div>)}
                {exp.metric && (
                  <div>;
                    <span className='font - medium'>Metric:</span> {exp.metric}
                  </div>)}
              </div>)}
            {(exp.effort || exp.impact) && (
              <div className='mt - 2 text - xs text - gray - 500'>;
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? ' · ' : null}                {exp.impact ? `Impact: ${exp.impact}/5` : null}                {exp.effort && exp.impact ? " · " : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
              </div>)}
          </div>))}
        {!items.length && (
          <div className='rounded - xl border border - gray - 200 bg - white p - 6 text - center text - gray - 600'>            Nothing to show yet.          <div className="rounded - xl border border - gray - 200 bg - white p - 6 text - center text - gray - 600">;
            Nothing to show yet.;
          </div>)}
      </div>;
    </main>);
;
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  try {
    const file_path = path.join (
      process.cwd (),
      'data',
      'ai - curation',
      'growth - experiments.json');
    const raw = fs.readFileSync (file_path, 'utf8');    const parsed = JSON.parse (raw);
    return {
      props: {
        updated_at: parsed.updated_at || null,
        items: parsed.items || [],
      },
      revalidate: 300,


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export async function getStaticProps() {;
  try {;
    const filePath = path && path.join(;
      process && process.cwd(),;
      'data',;
      'ai-curation',;
      'growth-experiments && experiments.json';
    );
    const raw = fs && fs.readFileSync(filePath, 'utf8');    const parsed = JSON && JSON.parse(raw);
    return {;
      props: {;
        updatedAt: parsed && parsed.updatedAt || null,;
        items: parsed && parsed.items || [],;
      },;
      revalidate: 300,;
    };  } catch {;
    return {;
      props: {;
        updatedAt: null,}
export async function getStaticProps() {;
  try {;
    const filePath = path && path.join(process && process.cwd(), "data", "ai-curation", "growth-experiments && experiments.json");
    const raw = fs && fs.readFileSync(filePath, "utf8");
    return {;
      props: {;
        updatedAt: parsed && parsed.updatedAt || null,;
        items: parsed && parsed.items || [],;
      },;
      revalidate: 300,;
    };        items: parsed && parsed.items || []},;
      revalidate: 300}
  } catch {;
    return {;
      props: {;
        updatedAt: null,;
        items: [],;
      },;
      revalidate: 300,;
    };
  }        items: []},;

=======


=======
        updatedAt: null,
        items: []},      revalidate: 300}
}


=======
=======        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},

      revalidate: 300}
}
        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},
      revalidate: 300}
}
}
<<<<<<< HEAD
        updatedAt: null,
        updatedAt: null,
=======
}>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
