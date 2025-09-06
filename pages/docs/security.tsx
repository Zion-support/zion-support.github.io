import Head from 'next/head'
export default function SecurityDocRedirect() {
  return (
import Head from 'next/head';

export default function SecurityDocRedirect() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/SECURITY.md" />
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
      </Head>
      <main style={{ padding: 24}}>
        <p>Redirecting to Security documentation…</p>
      </main>
    </>
  )
}

