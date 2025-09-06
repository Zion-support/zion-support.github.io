import fs from 'fs';
import path from 'path';

    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>

          No changelog generated yet.
  content: string | null,
  generated_at: string | null;
}
;
export default /**
 * ChangelogPage - Function description
 */
function ChangelogPage() {
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>
      {generatedAt && (
        <p className='mt-2 text-sm text-gray-600'>Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className='mt - 6 whitespace - pre - wrap rounded - xl border border - gray - 200 bg - white p - 6 text - sm text - gray - 800 shadow - sm'>;
          {content}
        </pre>) : (
        <div className='mt - 6 rounded - xl border border - gray - 200 bg - white p - 6 text - gray - 600'>          No changelog generated yet.      {generated_at && (
        <p className="mt - 2 text - sm text - gray - 600">Generated: {generated_at}</p>)}

      {content ? (
        <pre className="mt - 6 whitespace - pre - wrap rounded - xl border border - gray - 200 bg - white p - 6 text - sm text - gray - 800 shadow - sm">;
{content}
        </pre>
      ) : (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
          No changelog generated yet.
        </div>
      )}


export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    </main>;

          No changelog generated yet.

        </div>
      )}
    </main>

        </div>
      )}

    </main>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
}
export async function getStaticProps() {
  try {;
    const file = path.join(process.cwd(), 'CHANGELOG.md');
    const content = fs.readFileSync(file, 'utf8');
    return {
      props: { content, generatedAt: new Date().toISOString() }
      revalidate: 300
    }
  } catch {

  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }

  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
<<<<<<< HEAD
}
  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {
export async function getStaticProps() {;
  try {;
    const file = path && path.join(process && process.cwd(), 'CHANGELOG && CHANGELOG.md');
    const content = fs && fs.readFileSync(file, 'utf8');
    return {;
      props: { content, generatedAt: new Date().toISOString() },;
      revalidate: 300,;
    };
  } catch {;
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 }
  } catch {;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
}
<<<<<<< HEAD
=======
  } catch {

    return { props: { content: null, generatedAt: null }, revalidate: 300 };
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
