<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
=======
=======
import React from "react";
import fs from "fs";
import path from "path";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
type Experiment = {
  title: string;
hypothesis?: string;
metric?: string;
effort?: number;
impact?: number 
};
type Props = {
<<<<<<< HEAD
  updatedAt: string | null;
items: Experiment[] };

export default function CurationPage({ updatedAt, items }: Props) {
  return (
=======
<<<<<<< HEAD
  updatedAt: string | null;
items: Experiment[] 
=======
import React from "react";
import fs from "fs";
import path from "path";
type Experiment = {
  title: string,
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number
};

type Props = {
  updatedAt: string | null,
  items: Experiment[]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  updatedAt: string | null,
  items: Experiment[]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function CurationPage({ updatedAt, items }: Props) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>
        AI Curated Growth Experiments
      </h1>
<<<<<<< HEAD
=======
=======
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">AI Curated Growth Experiments</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {updatedAt ? (
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
            {(exp.hypothesis || exp.metric) && (
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
            {(exp.effort || exp.impact) && (
              <div className='mt-2 text-xs text-gray-500'>
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
<<<<<<< HEAD
                {exp.effort && exp.impact ? ' · ' : null}                {exp.impact ? `Impact: ${exp.impact}/5` : null}
=======
<<<<<<< HEAD
                {exp.effort && exp.impact ? ' · ' : null}
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                {exp.effort && exp.impact ? " · " : null}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            )}
          </div>
        ))}
        {!items.length && (
<<<<<<< HEAD
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>            Nothing to show yet.
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600'>
=======
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Nothing to show yet.
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        )}
      </div>
    </main>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export async function getStaticProps() {
  try {
    const filePath = path.join(
      process.cwd(),
      'data',
      'ai-curation',
      'growth-experiments.json'
    );
<<<<<<< HEAD
    const raw = fs.readFileSync(filePath, 'utf8');    const parsed = JSON.parse(raw);
    return {
      props: {
        updatedAt: parsed.updatedAt || null,
        items: parsed.items || [],
      },
      revalidate: 300,
    };  } catch {
    return {
      props: {
        updatedAt: null,
=======
    const raw = fs.readFileSync(filePath, 'utf8');
=======
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const parsed = JSON.parse(raw);
    return {
      props: {
        updatedAt: parsed.updatedAt || null,
<<<<<<< HEAD
<<<<<<< HEAD
        items: parsed.items || [],
      },
      revalidate: 300,
    };
=======
        items: parsed.items || []},
      revalidate: 300}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        items: parsed.items || []},
      revalidate: 300}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch {
    return {
      props: {
        updatedAt: null,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        items: [],
      },
      revalidate: 300,
    };
<<<<<<< HEAD
  }
=======
  }
=======
        items: []},
      revalidate: 300}
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        items: []},
      revalidate: 300}
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
