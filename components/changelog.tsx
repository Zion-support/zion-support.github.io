import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Props = any;
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
type Props = {
  content: string | null;
  generatedAt: string | null;}
export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>type Props = {
<<<<<<< HEAD
  content: string | null
  generatedAt: string | null
}
=======

type Props = {
  content: string | null;
  generatedAt: string | null;
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
=======
  content: string | null,
  generatedAt: string | null;
};

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>
<<<<<<< HEAD
      {generatedAt && (
        <p className='mt-2 text-sm text-gray-600'>Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className='mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm'>
          {content}
        </pre>
      ) : (
<<<<<<< HEAD
        <div className='mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600'>          No changelog generated yet.      {generatedAt && (
        <p className="mt-2 text-sm text-gray-600">Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
=======
        <div className='mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          No changelog generated yet.
        </div>
      )}
<<<<<<< HEAD
=======

};

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
=======
    </main>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

          No changelog generated yet.

        </div>
      )}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </main>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );
<<<<<<< HEAD
}
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export async function getStaticProps() {
  try {;
    const file = path.join(process.cwd(), 'CHANGELOG.md');
    const content = fs.readFileSync(file, 'utf8');
    return {
<<<<<<< HEAD
      props: { content, generatedAt: new Date().toISOString() }
      revalidate: 300
    }
  } catch {
<<<<<<< HEAD
<<<<<<< HEAD
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
=======
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }

  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
}
<<<<<<< HEAD
}
=======
      props: { content, generatedAt: new Date().toISOString() },
      revalidate: 300,
    };
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
