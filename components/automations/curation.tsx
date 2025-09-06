<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';
import fs from 'fs';
import path from 'path';
import React from 'react';
import fs from 'fs';
import path from 'path';

=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
type Experiment = {
=======
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

type Experiment = {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
import React from "react",
import fs from "fs";
import path from "path";
type Experiment = any;
origin/cursor/automate-test-improve-and-merge-code-2533
import React from 'react';
import fs from 'fs';
import path from 'path';

type Experiment = {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title: string;
hypothesis?: string;
metric?: string;
effort?: number;
impact?: number
}
type Props = {
<<<<<<< HEAD
<<<<<<< HEAD
  updatedAt: string | null;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<<<<<<< HEAD
  updated_at: string | null;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
items: Experiment[] }
<<<<<<< HEAD
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
  return (type Experiment = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title: string
  title: string
import React from "react";
import fs from "fs";
import path from "path";
type Experiment = {
  title: string,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  title: string,;
=======

  title: string,;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  hypothesis?: string;
  metric?: string;
  effort?: number;

impact?: number 
};
type Props = {;
  updatedAt: string | null;
items: Experiment[] };
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function CurationPage(): any ({ updatedAt, items }: Props) {;
  return (type Experiment = {;
  title: string,;
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number
};

type Props = {;
  updatedAt: string | null,;
  items: Experiment[]
};
<<<<<<< HEAD
export default function CurationPage(): any ({ updatedAt, items }: Props) {;

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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
  updatedAt: string | null;
items: Experiment[]
};

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
origin/cursor/automate-test-improve-and-merge-code-2533
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
                {exp.effort && exp.impact ? ' · ' : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
  return (
<<<<<<< HEAD
=======
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
            key={idx}
            className='rounded - xl border border - gray - 200 bg - white p - 5 shadow - sm';
          >;
            <div className='text - base font - semibold text - gray - 900'>;
              {exp.title}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>;
            <div className='text-base font-semibold text-gray-900'>;
              {exp && exp.title}
            </div>;
            {(exp && exp.hypothesis || exp && exp.metric) && (;
              <div className='mt-2 text-sm text-gray-700'>;
                {exp && exp.hypothesis && (;
                  <div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
            )}
          </div>;
        ))}
        {!items && items.length && (;
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
            Nothing to show yet.;
          </div>;
<<<<<<< HEAD

=======
export default function CurationPage({ updatedAt, items }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">AI Curated Growth Experiments</h1>
      {updatedAt ? (
        <p className="mt-2 text-sm text-gray-600">Last updated: {updatedAt}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-600">No curated output yet. It will appear here automatically after the next run.</p>
      )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {exp.impact ? `Impact: ${exp.impact}/5` : null}

                {exp.impact ? `Impact: ${exp.impact}/5` : null}

                {exp.impact ? `Impact: ${exp.impact}/5` : null}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>
            )}
          </div>
        ))}
        {!items.length && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>
origin/cursor/automate-test-improve-and-merge-code-2533
            Nothing to show yet.
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        )}
      </div>
    </main>

  );
export async function getStaticProps() {
<<<<<<< HEAD
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
      </div>
    </main>
  );

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
  try {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");

    const parsed = JSON.parse(raw);
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    );
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return {
      props: {
<<<<<<< HEAD
<<<<<<< HEAD
            </div>;
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
          <div className='rounded - xl border border - gray - 200 bg - white p - 6 text - center text - gray - 600'>            Nothing to show yet.          <div className="rounded - xl border border - gray - 200 bg - white p - 6 text - center text-gray-600">;
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
    return {
      props: {
        updated_at: null, }
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  try {
    const file_path = path.join (process.cwd (), "data", "ai - curation", "growth - experiments.json");
    const raw = fs.readFileSync (file_path, "utf8");
    return {
      props: {
        updated_at: parsed.updated_at || null,
        items: parsed.items || [],
      },
      revalidate: 300,
    }        items: parsed.items || []},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      revalidate: 300}
  } catch {
    return {
      props: {
<<<<<<< HEAD
      revalidate: 300}
}

=======

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
      revalidate: 300,
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
      revalidate: 300,
};        items: parsed && parsed.items || []},;
      revalidate: 300}
  } catch {;
    return {;
      props: {;
        updatedAt: null,;
        items: [],;
      },;
      revalidate: 300,
};
  }        items: []},;
        updatedAt: null
        items: []
      }
      revalidate: 300
    }
  }        items: []}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},
<<<<<<< HEAD

      revalidate: 300}
}

        updatedAt: null,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        updated_at: null,
        items: [],
      },
      revalidate: 300,
    }
  }        items: []}

        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
        updatedAt: parsed.updatedAt || null,
items: parsed.items || [],
      },
      revalidate: 300,
    };
  } catch {
    return {
      props: {
        updatedAt: null,
items: [],
      },
      revalidate: 300,
    };
  }
origin/cursor/automate-test-improve-and-merge-code-2533
      revalidate: 300}
}
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
