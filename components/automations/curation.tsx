

type Experiment = {
  title: string;
hypothesis?: string;
metric?: string;
effort?: number;
impact?: number
}
type Props = {
  updatedAt: string | null;
items: Experiment[] }
export default function CurationPage({ updatedAt, items }: Props) {

  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number
}
type Props = {
  updatedAt: string | null
  items: Experiment[]
}
export default function CurationPage({ updatedAt, items }: Props) {
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>
        AI Curated Growth Experiments
      </h1>
        <p className='mt-2 text-sm text-gray-600'>Last updated: {updatedAt}</p>
      ) : (
        <p className='mt-2 text-sm text-gray-600'>
          No curated output yet. It will appear here automatically after the
          next run.
        </p>
      )}

      <div className='mt-6 space-y-4'>
        {items.map((exp, idx) => (
          <div
            key={idx}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'
          >
            <div className='text-base font-semibold text-gray-900'>
              {exp.title}
            </div>
            {(exp.hypothesis |exp.metric) && (
              <div className='mt-2 text-sm text-gray-700'>
                {exp.hypothesis && (
                  <div>
                    <span className='font-medium'>Hypothesis:</span>{' '}
                    {exp.hypothesis}
                  </div>
                )}
                {exp.metric && (
                  <div>
                    <span className='font-medium'>Metric:</span> {exp.metric}
                  </div>
                )}
              </div>
            )}
            {(exp.effort |exp.impact) && (
              <div className='mt-2 text-xs text-gray-500'>
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? ' · ' : null}                {exp.impact ? `Impact: ${exp.impact}/5` : null}                {exp.effort && exp.impact ? " · " : null}

=======

  title: string,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  hypothesis?: string;
  metric?: string;
  effort?: number;

impact?: number ;
};
type Props = {;
  updatedAt: string | null;
items: Experiment[] };
export default function CurationPage(): any ({ updatedAt, items }: Props) {;
  return (type Experiment = {;
  title: string,;
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number;
};

type Props = {;
  updatedAt: string | null,;
  items: Experiment[];
};
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

            key={idx}
            className='rounded - xl border border - gray - 200 bg - white p - 5 shadow - sm';
          >;
            <div className='text - base font - semibold text - gray - 900'>;
              {exp.title}


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

            {(exp && exp.effort || exp && exp.impact) && (;
              <div className='mt-2 text-xs text-gray-500'>;
                {exp && exp.effort ? `Effort: ${exp && exp.effort}/5` : null}
                {exp && exp.effort && exp && exp.impact ? ' · ' : null}                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}                {exp && exp.effort && exp && exp.impact ? " · " : null}
                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}
              </div>;

            )}
          </div>;
        ))}
        {!items && items.length && (;
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
            Nothing to show yet.;
          </div>;

=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {exp.impact ? `Impact: ${exp.impact}/5` : null}

                {exp.impact ? `Impact: ${exp.impact}/5` : null}

              </div>
            )}
          </div>
        ))}
        {!items.length && (

          </div>
        )}
      </div>
    </main>

  );

export async function getStaticProps() {
  try {
    const filePath = path.join(

    );
    const raw = fs.readFileSync(filePath, 'utf8');    const parsed = JSON.parse(raw);
    return {
      props: {

    };  } catch {
    return {
      props: {
        updatedAt: null,}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
      </div>;
    </main>;
  );

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

export async function getStaticProps() {
  try {;
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");

    const parsed = JSON.parse(raw);
    return {
      props: {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      revalidate: 300}
  } catch {
    return {
      props: {

      revalidate: 300}
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      revalidate: 300}
}


=======
        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},

      revalidate: 300}
}

        updatedAt: null,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        updated_at: null,
        items: [],
      },
      revalidate: 300,
    }
  }        items: []},
      revalidate: 300}
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
