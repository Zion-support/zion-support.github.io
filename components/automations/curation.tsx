
<<<<<<< HEAD
=======
import React from 'react';
import fs from 'fs';
import path from 'path';
=======
import React from 'react';
import fs from 'fs';
import path from 'path';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





type Experiment = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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
import React from 'react';
import fs from 'fs';
import path from 'path';
type Experiment = {;
  title: string;
hypothesis?: string;
metric?: string;
effort?: number;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
impact?: number;
}
type Props = {
  updated_at: string | null;
items: Experiment[] }
<<<<<<< HEAD
;
export default /**
 * CurationPage - Function description
 */
function CurationPage() {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (type Experiment = {
  title: string
=======
export default function CurationPage({ updatedAt, items }: Props) {
  return (type Experiment = {
  title: string
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import fs from "fs";
import path from "path";
type Experiment = {
  title: string,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  title: string,;

  hypothesis?: string;
  metric?: string;
  effort?: number;

<<<<<<< HEAD
  hypothesis?: string;
  metric?: string;
  effort?: number;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

  title: string,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function CurationPage(): any ({ updatedAt, items }: Props) {;
  return (type Experiment = {;
  title: string,;
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number;
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Props = {;
  updatedAt: string | null,;
  items: Experiment[];
};
<<<<<<< HEAD
export default function CurationPage(): any ({ updatedAt, items }: Props) {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export default function CurationPage(): any ({ updatedAt, items }: Props) {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            key={idx}
            className='rounded - xl border border - gray - 200 bg - white p - 5 shadow - sm';
          >;
            <div className='text - base font - semibold text - gray - 900'>;
              {exp.title}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {(exp && exp.effort || exp && exp.impact) && (;
              <div className='mt-2 text-xs text-gray-500'>;
                {exp && exp.effort ? `Effort: ${exp && exp.effort}/5` : null}
                {exp && exp.effort && exp && exp.impact ? ' · ' : null}                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}                {exp && exp.effort && exp && exp.impact ? " · " : null}
                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
          </div>;
        ))}
        {!items && items.length && (;
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
            Nothing to show yet.;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
<<<<<<< HEAD
type Experiment = {
  title: string,
  hypothesis?: string,
  metric?: string,
  effort?: number,
  impact?: number
},

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
<<<<<<< HEAD
=======
=======
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

};

export default function CurationPage({ updatedAt, items }: Props) {
  return (

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            )}
          </div>
        ))}
        {!items.length && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            Nothing to show yet.
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



              </div>
            )}
          </div>
        ))}
        {!items.length && (
<<<<<<< HEAD
      </div>;
    </main>;
  );
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            Nothing to show yet.
          </div>
        )}
      </div>
    </main>;
                {exp.impact ? `Impact: ${exp.impact}/5` : null}

<<<<<<< HEAD
=======
=======
                {exp.impact ? `Impact: ${exp.impact}/5` : null}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            )}
          </div>
        ))}
        {!items.length && (
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            Nothing to show yet.
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.

            Nothing to show yet.

          </div>
        )}
      </div>
    </main>
  );

export async function getStaticProps() {
  try {
<<<<<<< HEAD
    const filePath = path.join(
      process.cwd()
      'data'
      'ai-curation'
      'growth-experiments.json'
=======
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");

    const parsed = JSON.parse(raw);
    const filePath = path.join(
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      process.cwd(),
      'data',
      'ai-curation',
      'growth-experiments.json';
    );
    const raw = fs.readFileSync(filePath, 'utf8');    const parsed = JSON.parse(raw);
<<<<<<< HEAD
    return {
      props: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.

            Nothing to show yet.



          </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        )}
      </div>;
    </main>;
  );


<<<<<<< HEAD
        updatedAt: parsed.updatedAt |null
        items: parsed.items |[]
      }
      revalidate: 300
        updatedAt: parsed.updatedAt || null,
        items: parsed.items || [],
      },
      revalidate: 300,
    };  } catch {
    return {
      props: {
        updatedAt: null,}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export async function getStaticProps() {
  try {;
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");
<<<<<<< HEAD
    const parsed = JSON.parse(raw);
    return {
      props: {
            </div>;
</div>;
=======

    const parsed = JSON.parse(raw);
    return {
      props: {
<<<<<<< HEAD
        updatedAt: parsed.updatedAt || null,
        items: parsed.items || []},

=======
            </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    return {
      props: {
            </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    }  } catch {
=======
    };  } catch {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        updatedAt: parsed.updatedAt |null
        items: parsed.items |[]
      }
      revalidate: 300
    };        items: parsed.items |[]}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      revalidate: 300}
  } catch {
    return {
      props: {



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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
<<<<<<< HEAD
<<<<<<< HEAD
        updatedAt: null,
        items: []},
      revalidate: 300}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======


=======
        updatedAt: null,
        items: []},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      revalidate: 300}
}


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},

      revalidate: 300}
}
<<<<<<< HEAD

        updatedAt: null,

<<<<<<< HEAD
        updatedAt: null,
        items: []},
      revalidate: 300}
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        updated_at: null,
        items: [],
      },
      revalidate: 300,
    }
<<<<<<< HEAD
  }        items: []},
      revalidate: 300}
}
<<<<<<< HEAD
  }

}
        updatedAt: null
        items: []
      }
      revalidate: 300
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }        items: []}

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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
