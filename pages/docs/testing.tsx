

<<<<<<< HEAD
=======
}
import Head from 'next / head',
export default /**
 * TestingDocRedirect - Function description
 */
function TestingDocRedirect() {
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <>;
      <Head>;
        <meta http_equiv="refresh" content="0, url=/TESTING.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
        <p > Redirecting to Testing documentation…</p>;
      </main>;
    </>);
}
<<<<<<< HEAD



=======
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/TESTING.md" />

      </Head>
      <main style={{ padding: 24}}>
import Head from 'next/head';
export default function TestingDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/TESTING.md" />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Testing documentation…</p>
      </main>
    </>
  )
}
import Head from 'next/head';
export default function TestingDocRedirect(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <meta httpEquiv="refresh" content="0, url=/TESTING.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
        <p>Redirecting to Testing documentation…</p>;
      </main>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
