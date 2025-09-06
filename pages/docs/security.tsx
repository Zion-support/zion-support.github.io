<<<<<<< HEAD
}
import Head from 'next / head',
export default /**
 * SecurityDocRedirect - Function description
 */
function SecurityDocRedirect() {
  return (
    <>;
      <Head>;
        <meta http_equiv="refresh" content="0, url=/SECURITY.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
        <p > Redirecting to Security documentation…</p>;
      </main>;
    </>);
}
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/SECURITY.md" />

      </Head>
      <main style={{ padding: 24}}>
=======
import Head from 'next/head';
export default function SecurityDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/SECURITY.md" />
      </Head>
      <main style={{ padding: 24 }}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <p>Redirecting to Security documentation…</p>
      </main>
    </>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
=======
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
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
