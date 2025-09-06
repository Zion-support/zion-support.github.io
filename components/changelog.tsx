import fs from 'fs';
import path from 'path';

    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>

          No changelog generated yet.

        </div>
      )}

    </main>

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
}
    return { props: { content: null, generatedAt: null }, revalidate: 300 }
}


=======
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  try {
    const file = path.join (process.cwd (), 'CHANGELOG.md');
    const content = fs.readFileSync (file, 'utf8');
    return {
      props: { content, generated_at: new Date ().toISOString () },
      revalidate: 300,
    }
  } catch {
    return { props: { content: null, generated_at: null }, revalidate: 300 }
  }    return { props: { content, generated_at: new Date ().toISOString () }, revalidate: 300 }
  } catch {
    return { props: { content: null, generated_at: null }, revalidate: 300 }
}
      {generatedAt && (
        <p className=&quot;mt-2 text-sm text-gray-600&quot;>Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className=&quot;mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm&quot;>
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  } catch {

    return { props: { content: null, generatedAt: null }, revalidate: 300 };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
