
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

  title: string
=======
  title: string
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from "react";
import fs from "fs";
import path from "path";
type Experiment = {
  title: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  title: string,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  hypothesis?: string;
  metric?: string;
  effort?: number;

impact?: number ;
};
type Props = {;
  updatedAt: string | null;
items: Experiment[] };
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
  return (

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

                {exp.impact ? `Impact: ${exp.impact}/5` : null}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
      </div>
    </main>
  );

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");

    const parsed = JSON.parse(raw);
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    return {
      props: {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      revalidate: 300}
  } catch {
    return {
      props: {
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

        updatedAt: null,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
