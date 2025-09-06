import Head from 'next/head'
export default function TestingDocRedirect() {
  return (
import Head from 'next/head';

export default function TestingDocRedirect() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/TESTING.md" />
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
      </Head>
      <main style={{ padding: 24}}>
        <p>Redirecting to Testing documentation…</p>
      </main>
    </>
  )
}

