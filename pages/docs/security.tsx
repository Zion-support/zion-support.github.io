import Head from 'next/head',;
export default function SecurityDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/SECURITY.md" />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Security documentation…</p>
      </main>
    </>
  )
import Head from 'next/head';
export default function SecurityDocRedirect(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <meta httpEquiv="refresh" content="0, url=/SECURITY.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
        <p>Redirecting to Security documentation…</p>;
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