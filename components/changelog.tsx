<<<<<<< HEAD
import fs from 'fs',
import path from 'path',
type Props = {
  content: string | null,
  generatedAt: string | null
},

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    <main className=&quot;mx-auto max-w-4xl px-4 py-12&quot;>
      <h1 className=&quot;text-2xl font-bold text-gray-900&quot;>Changelog</h1>
=======
import fs from 'fs';
import path from 'path';

type Props = {_content: string | null;
  generatedAt: string | null;};

export default function ChangelogPage(_{_content, _generatedAt}: Props) {_return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Changelog</h1>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {generatedAt && (
        <p className=&quot;mt-2 text-sm text-gray-600&quot;>Generated: {generatedAt}</p>
      )}
<<<<<<< HEAD
      {content ? (
        <pre className=&quot;mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm&quot;>
=======
      {_content ? (
        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
{content}
        </pre>
      ) : (
        <div className=&quot;mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600&quot;>
          No changelog generated yet.
        </div>
      )}
    </main>
  )
}

<<<<<<< HEAD
export async function getStaticProps() {
  try {
    const file = path.join(process.cwd(), 'CHANGELOG.md'),
    const content = fs.readFileSync(file, 'utf8'),
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
=======
export async function getStaticProps() {_try {
    const _file = path.join(process.cwd(), _'CHANGELOG.md');
    const _content = fs.readFileSync(file, _'utf8');
    return { props: { content, _generatedAt: new Date().toISOString()}, revalidate: 300 };
  } catch {_return { props: { content: null, _generatedAt: null}, revalidate: 300 };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}