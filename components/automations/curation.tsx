
type Experiment = {
  title: string,
  hypothesis?: string,
  metric?: string;
  effort?: number;
  impact?: number
},

type Props = {

=======
  updatedAt: string | null,
  items: Experiment[]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

export default function CurationPage({ updatedAt, items }: Props) {
  return (

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
                {exp.hypothesis && <div><span className="font-medium">Hypothesis: </span> {exp.hypothesis}</div>}
                {exp.metric && <div><span className="font-medium">Metric:</span> {exp.metric}</div>}
              </div>
            )}
            {(exp.effort || exp.impact) && (
              <div className="mt-2 text-xs text-gray-500">
                {exp.effort ? `Effort: ${exp.effort}/5` : null}

=======
                {exp.effort && exp.impact ? " · " : null}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {exp.impact ? `Impact: ${exp.impact}/5` : null}
              </div>
            )}
          </div>
        ))}
        {!items.length && (

=======
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Nothing to show yet.
          </div>
        )}
      </div>
    </main>
  ),

=======
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), "data", "ai-curation", "growth-experiments.json"),
    const raw = fs.readFileSync(filePath, "utf8"),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const parsed = JSON.parse(raw),
    return {
      props: {
        updatedAt: parsed.updatedAt || null,

=======
        items: parsed.items || []},
      revalidate: 300}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch {
    return {
      props: {
        updatedAt: null,

=======
        items: []},
      revalidate: 300}
  },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
