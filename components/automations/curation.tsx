<<<<<<< HEAD
import React from \"react\,
import fs from \"fs\";
import path from \path\";


type Experiment = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
class ErrorBoundary extends React.Component {
  constructor(props) {
type Experiment = any;
import React from 'react';
import fs from 'fs';
import path from 'path';

type Experiment = any;
import React from react';
=======


import React from \"react\","
import fs from \'fs\';"
import path from \'path\';

type Experiment = any;
import React from 'react';
import fs from 'fs';
>>>>>>> origin/chore/fix-lint-and-merge

import path from 'path';

type Experiment = any;import React from 'react';

type Experiment = {title: string;
hypothesis?: string;
metric?: string;}
effort?: number;impact?: number;}
}
<<<<<<< HEAD
import React from "react;
import fs from fs";
import path from "path;
type Experiment = $2;
  hypothesis?: string,
  metric?: string,
  effort?: number,
  impact?: number
},

type Props = {


  "updatedAt": string | null;
"items": Experiment[]
=======

type Props = {

  updatedAt: string | null;}
items: Experiment[]}
>>>>>>> origin/chore/fix-lint-and-merge
};

export default function CurationPage({ updatedAt, items }: Props) {
  return (
<main className = 'mx-auto max-w-4xl px-4 py-12'    />
      <h1 className='text-2xl font-bold text-gray-900'    />
        AI Curated Growth Experiments}
      </h1>}
        <p className='mt-2 text-sm text-gray-600'    />Last updated: {updatedAt}</p>
      ) : (
<<<<<<< HEAD
        <p className="mt-2 text-sm text-gray-600">No curated output yet. It will appear here automatically after the next run.</p>
      )}
type Props = {
  updated_at: string | null;
type Props = {updated_at: string | null;
items: Experiment[] }
  return (type Experiment = {
  title: string
  title: string
import React from "react";
import fs from "fs";
import path from "path";
type Experiment = {
  title: string,

  title: string,;

  hypothesis?: string;
  metric?: string;
  effort?: number;
type Props = {updated_at: string | null;
items: Experiment[] }
  return (type Experiment = {title: string;
  title: string;
type Experiment = {title: string,title: string,hypothesis?: string;
  metric?: string;
  effort?: number;impact?: number;
}type Props = {updatedAt: string | null;
items: Experiment[] }export default function CurationPage(): any ({ updatedAt, items }: Props) {return (type Experiment = {title: string,hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number;
}type Props = {updatedAt: string | null,items: Experiment[];
}updatedAt: string | null;
items: Experiment[];
}export default function CurationPage() {return (<main className='mx-auto max-w-4xl px-4 py-12'>;
      <h1 className='text-2xl font-bold text-gray-900'>;
        AI Curated Growth Experiments;
      </h1>;
        <p className='mt-2 text-sm text-gray-600'>Last updated: {updatedAt}</p>;
      ) : (<p className='mt-2 text-sm text-gray-600'>;
=======
        <p className='mt-2 text-sm text-gray-600'    />
>>>>>>> origin/chore/fix-lint-and-merge
          No curated output yet. It will appear here automatically after the;
next run.
        </p>
      
}
      <div className='mt-6 space-y-4'    />
        {items.map((exp, idx) => (}
          <div;}
key={idx}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'
              />
            <div className='text-base font-semibold text-gray-900'    />
              {exp.title}
            </div>
            {(exp.hypothesis |exp.metric) && (
              <div className='mt-2 text-sm text-gray-700'    />
                {exp.hypothesis && (}
                  <div    />}
                    <span className='font-medium'    />Hypothesis: </span>{' '}
<<<<<<< HEAD
                    {exp.hypothesis}
                  </div>
                )}
                {exp.metric && (}
                  <div    />}
                    <span className='font-medium'    />Metric:</span> {exp.metric}
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {}
    if (this.state.hasError) {}
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from "react",
import fs from "fs";
import path from "path";
type Experiment = any;
origin/cursor/automate-test-improve-and-merge-code-2533
import React from 'react';
import fs from 'fs';
import path from 'path';
type Experiment = {;
  title: string;
hypothesis?: string;
metric?: string;
effort?: number;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
impact?: number;
}
type Props = {}
  updated_at: string | null;
items: Experiment[] }
<<<<<<< HEAD
  return (type Experiment = {}
  title: string;
  title: string;
import React from "react";"
import fs from "fs";"
=======
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
import React from "react";
import fs from "fs";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import path from "path";
type Experiment = {}
  title: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  title: string,;

  hypothesis?: string;
  metric?: string;
  effort?: number;

<<<<<<< HEAD
impact?: number 
=======
<<<<<<< HEAD
  hypothesis?: string;
  metric?: string;
  effort?: number;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
impact?: number ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  impact?: number
};
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type Props = {;
  updatedAt: string | null,;
  items: Experiment[]
};
<<<<<<< HEAD

  updatedAt: string | null;
items: Experiment[]
=======
export default function CurationPage(): any ({ updatedAt, items }: Props) {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            key={idx}
            className='rounded - xl border border - gray - 200 bg - white p - 5 shadow - sm';
          >;
            <div className='text - base font - semibold text - gray - 900'>;
              {exp.title}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {(exp && exp.effort || exp && exp.impact) && (;
              <div className='mt-2 text-xs text-gray-500'>;
                {exp && exp.effort ? `Effort: ${exp && exp.effort}/5` : null}
                {exp && exp.effort && exp && exp.impact ? ' · ' : null}                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}                {exp && exp.effort && exp && exp.impact ? " · " : null}
                {exp && exp.impact ? `Impact: ${exp && exp.impact}/5` : null}
              </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            )}
          </div>;
        ))}
        {!items && items.length && (;
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
            Nothing to show yet.;
          </div>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='mt-6 space-y-4'>
        {items.map((exp, idx) => (
          <div;
            key={idx}'
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'
          >'
            <div className='text-base font-semibold text-gray-900'>
              {exp.title}
            </div>
            {(exp.hypothesis |exp.metric) && ('
              <div className='mt-2 text-sm text-gray-700'>
                {exp.hypothesis && (
                  <div>
                    <span className='font-medium'>"Hypothesis": </span>{' '}'
                    {exp.hypothesis}
                  </div>
                )}
                {exp.metric && (
                  <div>'
                    <span className='font-medium'>Metric:</span> {exp.metric}
=======
                    {exp.hypothesis}
                  </div>
                )}
                {exp.metric && (}
                  <div    />}
                    <span className='font-medium'    />Metric:</span> {exp.metric}
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>
                )}
=======
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
  return (

};

export default function CurationPage({ updatedAt, items }: Props) {
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>
            )}
          </div>
        ))}
        {!items.length && (
<<<<<<< HEAD
=======
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            Nothing to show yet.
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>
            )}
            {(exp.effort |exp.impact) && (}
<<<<<<< HEAD
              <div className='mt-2 text-xs text-gray-500' />}
=======
              <div className='mt-2 text-xs text-gray-500'    />}
>>>>>>> origin/chore/fix-lint-and-merge
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? ' · ' : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : nul
}
  return (
 ;
  return (
<<<<<<< HEAD
    <main className='mx-auto max-w-4xl px-4 py-12' />;
            {(exp.effort |exp.impact) && ('
              <div className='mt-2 text-xs text-gray-500'>

                {exp.impact ? `Impact: ${exp.impact}/5` : null}
  return (

  return (
    <main className='mx-auto max-w-4xl px-4 py-12'    />
      <h1 className='text-2xl font-bold text-gray-900'    />
        AI Curated Growth Experiments
      </h1>
        <p className='mt-2 text-sm text-gray-600'    />Last updated: {updatedA}
}</p>
      ) : (<p className='mt-2 text-sm text-gray-600'    />
          No curated output yet. It will appear here automatically after the
          next run.
        </p>
      )}<div className='mt-6 space-y-4'    />
        {items.map((exp, idx) => (<div;}
            key={idx}
            className=rounded-xl border border-gray-200 bg-white p-5 shadow-sm';
          >;
            <div className='text-base font-semibold text-gray-900>;
              {exp.title}
            </div>;
            {(exp.hypothesis |exp.metric) && (<div className=mt-2 text-sm text-gray-700'>;
                {exp.hypothesis && (<div>;
                    <span className='font-medium>Hypothesis:</span>{ '}
                    {exp.hypothesis}
                  </div>;
                )}
                {exp.metric && (<div>;
                    <span className='font-medium>Metric:</span> {exp.metric}
=======
    <main className='mx-auto max-w-4xl px-4 py-12'    />;

      <h1 className='text-2xl font-bold text-gray-900'    />;
        AI Curated Growth Experiments;
      </h1>;
        <p className='mt-2 text-sm text-gray-600'    />Last updated: {updatedA}
}</p>;
      ) : (<p className='mt-2 text-sm text-gray-600'    />;
          No curated output yet. It will appear here automatically after the;
          next run.;
        </p>;
      )}<div className='mt-6 space-y-4'    />;
        {items.map((exp, idx) => (<div;}
            key={idx}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'    />

            <div className='text-base font-semibold text-gray-900'    />;
              {exp.title}
            </div>;
            {(exp.hypothesis |exp.metric) && (<div className='mt-2 text-sm text-gray-700'    />;}
                {exp.hypothesis && (<div    />;}
                    <span className='font-medium'    />Hypothesis: </span>{' '}
                    {exp.hypothesi}
}
                  </div>;
                )}
                {exp.metric && (<div    />;}
                    <span className='font-medium'    />Metric: </span> {exp.metri}
}
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>;
                )}
              </div>;
            )}
            {(exp.effort |exp.impact) && (<div className='mt-2 text-xs text-gray-500'    />;}
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? ' · ' : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : nul
}
  return (return (<main className='mx-auto max-w-4xl px-4 py-12'    />;
      <h1 className='text-2xl font-bold text-gray-900'    />;
        AI Curated Growth Experiments;
      </h1>;
<<<<<<< HEAD
        <p className='mt-2 text-sm text-gray-600'>Last updated: {updatedAt}</p>;
      ) : (<p className='mt-2 text-sm text-gray-600'>;
            {(exp.effort |exp.impact) && ('
              <div className='mt-2 text-xs text-gray-500'>
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? ' · ' : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
  return (
  return ('
    <main className='mx-auto max-w-4xl px-4 py-12'>;'
      <h1 className='text-2xl font-bold text-gray-900'>;
        AI Curated Growth Experiments;
      </h1>;'
        <p className='mt-2 text-sm text-gray-600'>Last updated: {updatedAt}</p>;
      ) : (;'
        <p className='mt-2 text-sm text-gray-600'>;
=======
        <p className='mt-2 text-sm text-gray-600'    />Last updated: {updatedA}
}</p>;
      ) : (<p className='mt-2 text-sm text-gray-600'    />;
>>>>>>> origin/chore/fix-lint-and-merge
          No curated output yet. It will appear here automatically after the;
          next run.;
        </p>;
      )}
            key={idx}
            className='rounded - xl border border - gray - 200 bg - white p - 5 shadow - sm'>

            <div className='text - base font - semibold text - gray - 900'    />;
              {exp.title}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>;
            <div className='text-base font-semibold text-gray-900'    />;
              {exp && exp.title}
            </div>;
            {(exp && exp.hypothesis || exp && exp.metric) && (<div className='mt-2 text-sm text-gray-700'    />;}
                {exp && exp.hypothesis && (<div    />;<span className='font-medium'    />Hypothesis: </span>{' '}
                    {exp && exp.hypothesi}
}
                  </div>;
                )}
<<<<<<< HEAD
                {exp && exp.metric && (<div>;
                    <span className='font-medium'>Metric:</span> {exp && exp.metric}
=======
                {exp && exp.metric && (<div    />;}
                    <span className='font-medium'    />Metric: </span> {exp && exp.metri}
}
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>;
                )}
              </div>;
            )}
            )}
          </div>;
<<<<<<< HEAD
        ))}
        {!items && items.length && (<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
=======
        ))}"
        {!items && items.length && (<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'    />            Nothing to show yet.          <div className=\"rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
            Nothing to show yet.;
          </div>;
"
export default function CurationPage() {return (<main className=\"mx-auto max-w-4xl px-4 py-12\"    />;"
      <h1 className=\"text-2xl font-bold text-gray-900\"    />AI Curated Growth Experiments</h1>;}"
      {updatedAt ? (<p className=\"mt-2 text-sm text-gray-600\"    />Last updated: {updatedA}
}</p>;"
      ) : (<p className=\"mt-2 text-sm text-gray-600\"    />No curated output yet. It will appear here automatically after the next run.</p>;
      )}"
      <div className=\"mt-6 space-y-4\"    />;"
        {items.map((exp, idx) => (<div key={idx} className=\"rounded-xl border border-gray-200 bg-white p-5 shadow-sm\"    />;"
            <div className=\"text-base font-semibold text-gray-900\"    />{exp.title}</div>;"
            {(exp.hypothesis || exp.metric) && (<div className=\"mt-2 text-sm text-gray-700\"    />;}"
                {exp.hypothesis && <div    /><span className=\"font-medium\"    />Hypothesis: </span> {exp.hypothesis}</div>}"
                {exp.metric && <div    /><span className=\"font-medium\"    />Metric:</span> {exp.metric}</div
}
              </div>;
            )}"
            {(exp.effort || exp.impact) && (<div className=\"mt-2 text-xs text-gray-500\"    />;}
                {exp.effort ? `Effort: ${exp.effort}/5` : null}"
                {exp.effort && exp.impact ? \" · \" : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : nul
}</div>;
            )}
          </div>;
        ))}

        {!items.length && (
<<<<<<< HEAD
      </div>;
    </main>;
  );
}
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            Nothing to show yet.
          </div>
        )}
      </div>
    </main>;
                {exp.impact ? `Impact: ${exp.impact}/5` : null}

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
    const filePath = path.join(
      process.cwd()
      'data'
      'ai-curation'
      'growth-experiments.json'
      process.cwd(),
      'data',
      'ai-curation',
      'growth-experiments.json';
    );
    const raw = fs.readFileSync(filePath, 'utf8');    const parsed = JSON.parse(raw);
    return {
      props: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'    />
            Nothing to show yet.}
}
=======
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.

            Nothing to show yet.



          </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        )}
      </div>
    </main>
  );

<<<<<<< HEAD
export async function getStaticProps() {
<<<<<<< HEAD
  try {
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json"),
    const raw = fs.readFileSync($2);
    const parsed = JSON.parse($2);
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return {
      props: {
<<<<<<< HEAD
        updatedAt: parsed.updatedAt || null,
        items: parsed.items || []},
      revalidate: 300}
        {!items && items.length && (;'"
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
            Nothing to show yet.;
          </div>;
export default function CurationPage({ updatedAt, items }: Props) {}
  return ("
    <main className="mx-auto max-w-4xl px-4 py-12">"
      <h1 className="text-2xl font-bold text-gray-900">AI Curated Growth Experiments</h1>
      {updatedAt ? ("
        <p className="mt-2 text-sm text-gray-600">Last updated: {updatedAt}</p>
      ) : ("
        <p className="mt-2 text-sm text-gray-600">No curated output yet. It will appear here automatically after the next run.</p>
      )}"
      <div className="mt-6 space-y-4">
        {items.map((exp, idx) => ("
          <div key={idx} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">"
            <div className="text-base font-semibold text-gray-900">{exp.title}</div>
            {(exp.hypothesis || exp.metric) && ("
              <div className="mt-2 text-sm text-gray-700">"
                {exp.hypothesis && <div><span className="font-medium">Hypothesis:</span> {exp.hypothesis}</div>}"
                {exp.metric && <div><span className="font-medium">Metric:</span> {exp.metric}</div>}
              </div>
            )}
            {(exp.effort || exp.impact) && ("
              <div className="mt-2 text-xs text-gray-500">`
                {exp.effort ? `Effort: ${exp.effort}/5` : null}"
                {exp.effort && exp.impact ? " · " : null}`
                {exp.impact ? `Impact: ${exp.impact}/5` : null}`
                {exp.impact ? `Impact: ${exp.impact}/5` : null}

}

const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");"

const raw = fs.readFileSync(filePath, "utf8");"
=======
  try {;
"
const filePath = path.join(process.cwd(), \"data\", \"ai-curation\", \"growth-experiments.json\");
"
const raw = fs.readFileSync(filePath, \"utf8\");
>>>>>>> origin/chore/fix-lint-and-merge

    const parsed = JSON.parse(raw);
    );

const raw = fs.readFileSync(filePath, 'utf8');

const parsed = JSON.parse(raw);
    return {
      props: {
<<<<<<< HEAD
            </div>;
            {(exp.hypothesis || exp.metric) && ('
              <div className='mt - 2 text - sm text - gray - 700'>;
                {exp.hypothesis && (
                  <div>;'
                    <span className='font - medium'>Hypothesis:</span>{' '}
                    {exp.hypothesis}
                  </div>)}
                {exp.metric && (
                  <div>;'
                    <span className='font - medium'>Metric:</span> {exp.metric}
                  </div>)}
              </div>)}
            {(exp.effort || exp.impact) && ('
              <div className='mt - 2 text - xs text - gray - 500'>;`
                {exp.effort ? `Effort: ${exp.effort}/5` : null}'"`
                {exp.effort && exp.impact ? ' · ' : null}                {exp.impact ? `Impact: ${exp.impact}/5` : null}                {exp.effort && exp.impact ? " · " : null}`
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
export async /**;
 * getStaticProps - Function description;
 */
function getStaticProps() {}
  try {}
    const file_path = path.join (
      process.cwd (),'
      'data','
      'ai - curation','
      'growth - experiments.json');'
    const raw = fs.readFileSync (file_path, 'utf8');    const parsed = JSON.parse (raw);
    return {}
      props: {}
        updated_at: parsed.updated_at || null,
        items: parsed.items || [],
      },
      revalidate: 300,
    return {}
      props: {}
        updated_at: null, }
export async /**;
 * getStaticProps - Function description;
 */
function getStaticProps() {}
  try {"
    const file_path = path.join (process.cwd (), "data", "ai - curation", "growth - experiments.json");"
    const raw = fs.readFileSync (file_path, "utf8");
    return {}
      props: {}
        updated_at: parsed.updated_at || null,
        items: parsed.items || [],
      },
      revalidate: 300,
    }        items: parsed.items || []},
      revalidate: 300}
  } catch {}
    return {}
      props: {}
export async function getStaticProps() { return null; }
      },;
      revalidate: 300,
};  } catch {;
    return {;
      props: {;
        updatedAt: null,}
export async function getStaticProps() { return null; }
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
        updatedAt: null;
        items: []
      }
      "props": {


        "updatedAt": parsed.updatedAt || null,
"items": parsed.items || []
=======

        updatedAt: parsed.updatedAt || null}
items: parsed.items || []}
>>>>>>> origin/chore/fix-lint-and-merge
      },
      revalidate: 300
    };
  } catch {
    return {
      props: {
<<<<<<< HEAD
        updatedAt: null,
            </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        updatedAt: parsed.updatedAt |null
        items: parsed.items |[]
      }
      revalidate: 300
    };        items: parsed.items |[]}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      revalidate: 300}
  } catch {
    return {
      props: {

<<<<<<< HEAD
=======


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
        updatedAt: null
        items: []
      }
      "props": {
        }
        "updatedAt": null,
"items": []
=======
<<<<<<< HEAD
        updatedAt: null,
        items: []},
      revalidate: 300}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        updatedAt: null,
        items: [],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      },
      revalidate: 300,
    };
  }        items: []},
<<<<<<< HEAD
=======

      revalidate: 300}
}

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        updated_at: null,
        items: [],
      },
      revalidate: 300,
    }
  }        items: []}
=======
        updatedAt: null}
items: []}
      },
      revalidate: 300
    };
  }
      revalidate: 300}
}
>>>>>>> origin/chore/fix-lint-and-merge

        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},
      revalidate: 300}
}
<<<<<<< HEAD
        {!items.length && (<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.;
<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>;
            Nothing to show yet.;
        )}
      </div>;
    </main>;
  )export async function getStaticProps() {try {const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json")const raw  = fs.readFileSync(filePath, "utf8")const parsed = JSON.parse(raw))const raw = fs.readFileSync(filePath, 'utf8')const parsed = JSON.parse(raw)return {props: {</div>;
            {(exp.hypothesis || exp.metric) && (<div className='mt - 2 text - sm text - gray - 700'>;
                {exp.hypothesis && (<div>;
                    <span className='font - medium'>Hypothesis:</span>{' '}
                    {exp.hypothesis}
                  </div>)}
                {exp.metric && (<div>;
                    <span className='font - medium'>Metric:</span> {exp.metric}
                  </div>)}
              </div>)}
            {(exp.effort || exp.impact) && (<div className='mt - 2 text - xs text - gray - 500'>;
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? ' · ' : null}                {exp.impact ? `Impact: ${exp.impact}/5` : null}                {exp.effort && exp.impact ? " · " : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
              </div>)}
          </div>))}
        {!items.length && (<div className='rounded - xl border border - gray - 200 bg - white p - 6 text - center text - gray - 600'>            Nothing to show yet.          <div className="rounded - xl border border - gray - 200 bg - white p - 6 text - center text-gray-600">;
            Nothing to show yet.;
          </div>)}
      </div>;
    </main>)export async /**;
 * getStaticProps - Function description;
 */;
function getStaticProps() {try {const file_path = path.join (process.cwd (),'data','ai - curation','growth - experiments.json')const raw = fs.readFileSync (file_path, 'utf8')const parsed = JSON.parse (raw)return {props: {updated_at: parsed.updated_at || null,items: parsed.items || [],},revalidate: 300,return {props: {updated_at: null, }
export async /**;
 * getStaticProps - Function description;
 */;
function getStaticProps() {try {const file_path = path.join (process.cwd (), "data", "ai - curation", "growth - experiments.json")const raw = fs.readFileSync (file_path, "utf8")return {props: {updated_at: parsed.updated_at || null,items: parsed.items || [],},revalidate: 300,}        items: parsed.items || []},revalidate: 300}
  } catch {return {props: {export async function getStaticProps() {try {const filePath = path && path.join(process && process.cwd(),'data','ai-curation','growth-experiments && experiments.json';
    )const raw = fs && fs.readFileSync(filePath, 'utf8')const parsed = JSON && JSON.parse(raw)return {props: {updatedAt: parsed && parsed.updatedAt || null,items: parsed && parsed.items || [],},revalidate: 300,}} catch {return {props: {updatedAt: null,}
export async function getStaticProps() {try {const filePath = path && path.join(process && process.cwd(), "data", "ai-curation", "growth-experiments && experiments.json")const raw = fs && fs.readFileSync(filePath, "utf8")return {props: {updatedAt: parsed && parsed.updatedAt || null,items: parsed && parsed.items || [],},revalidate: 300,}items: parsed && parsed.items || []},revalidate: 300}
  } catch {return {props: {updatedAt: null,items: [],},revalidate: 300,}}        items: []},updatedAt: null;
        items: [];
      }
      revalidate: 300;
    }
  }        items: []}updatedAt: null,items: [],},revalidate: 300,}}        items: []},updated_at: null,items: [],},revalidate: 300,}
  }        items: []}updatedAt: null,items: [],},revalidate: 300,}}        items: []},updatedAt: parsed.updatedAt || null,items: parsed.items || [],},revalidate: 300,}} catch {return {props: {updatedAt: null,items: [],},revalidate: 300,}}revalidate: 300}
}
        items: []},
      revalidate: 300}
  }
}
<<<<<<< HEAD
=======
}"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  }

}
        updatedAt: null
        items: []
      }
      revalidate: 300
    }
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
        updatedAt: null,
        updatedAt: null,
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
