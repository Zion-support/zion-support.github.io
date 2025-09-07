<<<<<<< HEAD:pages-disabled/docs/security.tsx
<>;
=======


<<<<<<< HEAD
}
import Head from 'next / head',
export default /**
 * SecurityDocRedirect - Function description
 */
function SecurityDocRedirect() {
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/docs/security.tsx
      <Head>;
        <meta http_equiv="refresh" content="0, url=/SECURITY.md" />;
      </Head>;
      <main style={{ padding: 24 }}>;
<<<<<<< HEAD:pages-disabled/docs/security.tsx

;
;
=======
        <p > Redirecting to Security documentation…</p>;
      </main>;
    </>);
}
<<<<<<< HEAD
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/SECURITY.md" />

      </Head>
      <main style={{ padding: 24}}>
import Head from 'next/head';
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
}
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
;

;
;
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/docs/security.tsx
