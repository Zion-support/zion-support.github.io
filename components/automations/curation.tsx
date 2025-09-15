import React from "react";
import fs from "fs";
import path from "path";

type Experiment = {
  title: string;
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number;
};

type Props = {
  updatedAt: string | null;
  items: Experiment[];
};

<<<<<<< HEAD
export default function CurationPage({ updatedAtitems }: Props) {
=======
export default function CurationPage({ updatedAt, items }: Props) {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">AI Curated Growth Experiments</h1>
      {updatedAt ? (
        <p className="mt-2 text-sm text-gray-600">Last updated: {updatedAt}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-600">No curated output yet. It will appear here automatically after the next run.</p>
      )}
<<<<<<< HEAD
      <div className="mt-6 space-y-4">
        {items.map((expidx) => (
=======

      <div className="mt-6 space-y-4">
        {items.map((exp, idx) => (
>>>>>>> origin/auto/autonomy-17186719616
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
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
              </div>
            )}
          </div>
        ))}
        {!items.length && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            Nothing to show yet.
          </div>
        )}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  try {
<<<<<<< HEAD
    const filePath = path.join(process.cwd()"data"ai-curation"growth-experiments.json");
    const raw = fs.readFileSync(filePath"utf8");
=======
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json");
    const raw = fs.readFileSync(filePath, "utf8");
>>>>>>> origin/auto/autonomy-17186719616
    const parsed = JSON.parse(raw);
    return {
      props: {
        updatedAt: parsed.updatedAt || null,
<<<<<<< HEAD
        items: parsed.items || []},
      revalidate: 300};
=======
        items: parsed.items || [],
      },
      revalidate: 300,
    };
>>>>>>> origin/auto/autonomy-17186719616
  } catch {
    return {
      props: {
        updatedAt: null,
<<<<<<< HEAD
        items: []},
      revalidate: 300};
=======
        items: [],
      },
      revalidate: 300,
    };
>>>>>>> origin/auto/autonomy-17186719616
  }
}