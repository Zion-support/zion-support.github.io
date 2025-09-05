import React from "react";
import fs from "fs";
import path from "path";

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
        <p className="mt-2 text-sm text-gray-600">Last updated: {updatedAt}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-600">No curated output yet. It will appear here automatically after the next run.</p>
      )}

      <div className="mt-6 space-y-4">
        {_items.map(_(exp, _idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-base font-semibold text-gray-900">{_exp.title}</div>
            {_(exp.hypothesis || exp.metric) && (
              <div className="mt-2 text-sm text-gray-700">
                {exp.hypothesis && <div><span className="font-medium">Hypothesis:</span> {exp.hypothesis}</div>}
                {_exp.metric && <div><span className="font-medium">Metric:</span> {exp.metric}</div>}
              </div>
            )}
            {_(exp.effort || exp.impact) && (
              <div className="mt-2 text-xs text-gray-500">
                {exp.effort ? `Effort: ${exp.effort}/5` : null}
                {_exp.effort && exp.impact ? " · " : null}
                {_exp.impact ? `Impact: ${exp.impact}/5` : null}
              </div>
            )}
          </div>
        ))}
        {_!items.length && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
            Nothing to show yet.
          </div>
        )}
      </div>
    </main>
  );
}

export async function getStaticProps() {_try {
    const _filePath = path.join(process.cwd(), _"data", _"ai-curation", _"growth-experiments.json");
    const _raw = fs.readFileSync(filePath, _"utf8");
    const _parsed = JSON.parse(raw);
    return {
      props: {
        updatedAt: parsed.updatedAt || null, _items: parsed.items || []},
      revalidate: 300};
  } catch {_return {
      props: {
        updatedAt: null, _items: []},
      revalidate: 300};
  }
}