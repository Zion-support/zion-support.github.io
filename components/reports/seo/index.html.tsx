import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
export default function Placeholder() {
  return (
    <main className='min-h-screen p-8'>
      <Head>
        <title>Reports • Seo • Index.html - Placeholder</title>
        <meta name='robots' content='noindex' />
      </Head>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-2xl font-semibold mb-2'>
          Reports • Seo • Index.html
        </h1>
        <p className='text-gray-600 mb-6'>
          Auto-generated placeholder for missing route:{' '}
          <code>/reports/seo/index.html</code>.
        </p>
        <Link href='/'>
          <a className='text-blue-600 hover:underline'>Back to Home</a>
        </Link>
      </div>
    </main>;
  );export default function Placeholder() {
  return (
=======

export default function Placeholder() {
  return (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    <main className="min-h-screen p-8">
      <Head>
        <title>Reports • Seo • Index.html - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">Reports • Seo • Index.html</h1>
        <p className="text-gray-600 mb-6">Auto-generated placeholder for missing route: <code>/reports/seo/index.html</code>.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back to Home</a></a>
      </div>
<<<<<<< HEAD
    </main>;
  );
}

}
=======
    </main>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
