import fs from 'fs';
import path from 'path';
=======
type Props = {
  content: string | null,
  generatedAt: string | null
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (

      {generatedAt && (
        <p className="mt-2 text-sm text-gray-600">Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (

=======
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          No changelog generated yet.
        </div>
      )}
    </main>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export async function getStaticProps() {
  try {
    const file = path.join(process.cwd(), 'CHANGELOG.md'),
    const content = fs.readFileSync(file, 'utf8'),

=======
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
  },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
