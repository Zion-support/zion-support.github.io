import React from 'react';
import fs from 'fs';
import path from 'path';

type Experiment = {
  title: string;
hypothesis?: string;
metric?: string;
effort?: number;
impact?: number 
};
type Props = {
  updatedAt: string | null;
items: Experiment[] };

export default function CurationPage({ updatedAt, items }: Props) {
  return (

};

export default function CurationPage({ updatedAt, items }: Props) {
  return (

                {exp.impact ? `Impact: ${exp.impact}/5` : null}

              </div>
            )}
          </div>
        ))}
        {!items.length && (
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
      process.cwd(),
      'data',
      'ai-curation',
      'growth-experiments.json'
    );
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

    const parsed = JSON.parse(raw);
    return {
      props: {
        updatedAt: parsed.updatedAt || null,

  } catch {
    return {
      props: {
        updatedAt: null,