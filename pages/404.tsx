import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion App</title>
        <meta name="description" content="The page you are looking for doesn't exist." />
      </Head>
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#1f2937" }}>
          404
        </h1>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#374151" }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#6b7280" }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "600"
          }}
        >
          Go Home
        </Link>
      </div>
    </>
  );
}
