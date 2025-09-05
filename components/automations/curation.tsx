import React from &quot;react&quot;;
import fs from &quot;fs&quot;;
import path from &quot;path&quot;;

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

export default function CurationPage({ updatedAt, items }: Props) {
  return (
    <main className=&quot;mx-auto max-w-4xl px-4 py-12&quot;>
      <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>AI Curated Growth Experiments</h1>
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
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
              </div>
            )}
          </div>
        ))}
        {!items.length && (
          <div className=&quot;rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600&quot;>
            Nothing to show yet.
          </div>
        )}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), &quot;data&quot;, &quot;ai-curation&quot;, &quot;growth-experiments.json&quot;);
    const raw = fs.readFileSync(filePath, &quot;utf8&quot;);
    const parsed = JSON.parse(raw);
    return {
      props: {
        updatedAt: parsed.updatedAt || null,
        items: parsed.items || []},
      revalidate: 300};
  } catch {
    return {
      props: {
        updatedAt: null,
        items: []},
      revalidate: 300};
  }
}