import Head from 'next/head',;
export default function Pm2RedundancyRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/README_PM2_REDUNDANCY_COMPLETE.md" />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to PM2 Redundancy docs…</p>
      </main>
    </>
  )
import Head from 'next/head';
export default function Pm2RedundancyRedirect(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <meta httpEquiv="refresh" content="0, url=/README_PM2_REDUNDANCY_COMPLETE.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
        <p>Redirecting to PM2 Redundancy docs…</p>;
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