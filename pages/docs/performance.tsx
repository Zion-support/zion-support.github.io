

<<<<<<< HEAD
=======
}
import Head from 'next / head',
export default /**
 * PerformanceDocRedirect - Function description
 */
function PerformanceDocRedirect() {
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <>;
      <Head>;
        <meta http_equiv="refresh" content="0, url=/PERFORMANCE.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
        <p > Redirecting to Performance documentation…</p>;
      </main>;
    </>);
}
<<<<<<< HEAD



=======
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/PERFORMANCE.md" />

      </Head>
      <main style={{ padding: 24}}>
import Head from 'next/head';
export default function PerformanceDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/PERFORMANCE.md" />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Performance documentation…</p>
      </main>
    </>
  )
}
import Head from 'next/head';
export default function PerformanceDocRedirect(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <meta httpEquiv="refresh" content="0, url=/PERFORMANCE.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
        <p>Redirecting to Performance documentation…</p>;
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
