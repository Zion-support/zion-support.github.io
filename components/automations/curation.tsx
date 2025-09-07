<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import fs from "fs";
import path from "path";
type Experiment = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======


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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import React from 'react';
import fs from 'fs';
=======

;
type Experiment = {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}import React from "react",import fs from 'fs';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
import path from 'path';
type Experiment = any;import React from 'react';
type Experiment = {title: string;
hypothesis?: string;
metric?: string;
effort?: number;impact?: number;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Props = {
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
=======
type Props = {
  updated_at: string | null;
=======
type Props = {updated_at: string | null;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
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
<<<<<<< HEAD

impact?: number 
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

type Props = {;
  updatedAt: string | null,;
  items: Experiment[]
};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>;
=======
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  impact?: number;
}type Props = {updatedAt: string | null,items: Experiment[];
}updatedAt: string | null;
items: Experiment[];
}export default function CurationPage() {return (<main className='mx-auto max-w-4xl px-4 py-12'>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      <h1 className='text-2xl font-bold text-gray-900'>;
        AI Curated Growth Experiments;
      </h1>;
        <p className='mt-2 text-sm text-gray-600'>Last updated: {updatedAt}</p>;
      ) : (<p className='mt-2 text-sm text-gray-600'>;
          No curated output yet. It will appear here automatically after the;
          next run.;
        </p>;
      )}<div className='mt-6 space-y-4'>;
        {items.map((exp, idx) => (<div;
            key={idx}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm';
          >;
            <div className='text-base font-semibold text-gray-900'>;
              {exp.title}
            </div>;
            {(exp.hypothesis |exp.metric) && (<div className='mt-2 text-sm text-gray-700'>;
                {exp.hypothesis && (<div>;
                    <span className='font-medium'>Hypothesis:</span>{' '}
                    {exp.hypothesis}
                  </div>;
                )}
                {exp.metric && (<div>;
                    <span className='font-medium'>Metric:</span> {exp.metric}
                  </div>;
                )}
              </div>;
            )}
            {(exp.effort |exp.impact) && (<div className='mt-2 text-xs text-gray-500'>;
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? ' · ' : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
  return (return (<main className='mx-auto max-w-4xl px-4 py-12'>;
      <h1 className='text-2xl font-bold text-gray-900'>;
        AI Curated Growth Experiments;
      </h1>;
        <p className='mt-2 text-sm text-gray-600'>Last updated: {updatedAt}</p>;
      ) : (<p className='mt-2 text-sm text-gray-600'>;
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
            {(exp && exp.hypothesis || exp && exp.metric) && (<div className='mt-2 text-sm text-gray-700'>;
                {exp && exp.hypothesis && (<div>;<span className='font-medium'>Hypothesis:</span>{' '}
                    {exp && exp.hypothesis}
                  </div>;
                )}
                {exp && exp.metric && (<div>;
                    <span className='font-medium'>Metric:</span> {exp && exp.metric}
                  </div>;
                )}
              </div>;
            )}
            )}
          </div>;
        ))}
        {!items && items.length && (<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">;
            Nothing to show yet.;
          </div>;
export default function CurationPage() {return (<main className="mx-auto max-w-4xl px-4 py-12">;
      <h1 className="text-2xl font-bold text-gray-900">AI Curated Growth Experiments</h1>;
      {updatedAt ? (<p className="mt-2 text-sm text-gray-600">Last updated: {updatedAt}</p>;
      ) : (<p className="mt-2 text-sm text-gray-600">No curated output yet. It will appear here automatically after the next run.</p>;
      )}
      <div className="mt-6 space-y-4">;
        {items.map((exp, idx) => (<div key={idx} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">;
            <div className="text-base font-semibold text-gray-900">{exp.title}</div>;
            {(exp.hypothesis || exp.metric) && (<div className="mt-2 text-sm text-gray-700">;
                {exp.hypothesis && <div><span className="font-medium">Hypothesis:</span> {exp.hypothesis}</div>}
                {exp.metric && <div><span className="font-medium">Metric:</span> {exp.metric}</div>}
              </div>;
            )}
            {(exp.effort || exp.impact) && (<div className="mt-2 text-xs text-gray-500">;
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {exp.effort && exp.impact ? " · " : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
                {exp.impact ? `Impact: ${exp.impact}/5` : null}</div>;
            )}
          </div>;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {!items.length && (
<div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        {!items.length && (
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
            Nothing to show yet.

        )}
      </div>
    </main>
  );
export async function getStaticProps() {
  try {;
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");

    const parsed = JSON.parse(raw);
    );
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return {
      props: {
<<<<<<< HEAD
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
=======
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
      revalidate: 300}
  } catch {
    return {
      props: {

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

        updatedAt: null,
        items: [],
      },
      revalidate: 300,
    };
  }        items: []},
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      revalidate: 300}
}
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
}
}