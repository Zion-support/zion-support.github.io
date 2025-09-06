import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

type Props = {
  content: string | null;
  generatedAt: string | null;
=======
type Props = {
  content: string | null,
  generatedAt: string | null
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
type Props = {
  content: string | null,
  generatedAt: string | null
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>
=======
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Changelog</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      {generatedAt && (
        <p className="mt-2 text-sm text-gray-600">Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (
<<<<<<< HEAD
        <div className='mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600'>
=======
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Changelog</h1>
      {generatedAt && (
        <p className="mt-2 text-sm text-gray-600">Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          No changelog generated yet.
        </div>
      )}
    </main>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export async function getStaticProps() {
  try {
    const file = path.join(process.cwd(), 'CHANGELOG.md');
    const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
    return {
      props: { content, generatedAt: new Date().toISOString() },
      revalidate: 300,
    };
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }
=======
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
