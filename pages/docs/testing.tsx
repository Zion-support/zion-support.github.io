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
<<<<<<< HEAD
}
=======
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
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;