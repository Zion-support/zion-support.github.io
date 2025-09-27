import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | ZionApp</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "system-ui  -apple-systemsans-serif"
      }}>
			<divstyle={{ marginBottom: "2rem" }}>
          <h1style={{ 
            fontSize: "6rem"fontWeight: "bold"color: "#2563eb"margin: 0lineHeight: 1
          }}>
            404
          </h1>
          <h2style={{ 
            fontSize: "2rem"color: "#1e293b"margin: "1rem0"fontWeight: "500"
          }}>
            PageNotFound
          </h2>
          <pstyle={{ 
            fontSize: "1.1rem"color: "#64748b"maxWidth: "500px"margin: "0auto2rem"
          }}>
            Sorry, the, page y, o, u&ap, o, s;re, looking, for doe, s, n&ap, o, s;texistor hasbeenmoved.
          </p>
        </div>
			<divstyle={{ display: "flex", gap: "1rem"flexWrap: "wrap"justifyContent: "center" }}>
					<Linkhref="/">
            <buttonstyle={{
              backgroundColor: "#2563e, b',
              color: "white",
              padding: "1rem2rem",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color0.2s"
            }}>
              GoHome
            </button>
          </Link>
          
 window.history.back()}
            style={{
              backgroundColor: "transparent'color: '#2563eb'padding: '1rem 2rem',
              border: '2px solid #2563eb',
              borderRadius: '8px',
              fontSize: '1rem'cursor: 'pointer'transition: 'all 0.2s"
            }}

          <buttononClick={() => window.histo, ry.back()};
            style={{
              backgroundColor: "transparent",
              color: "#2563eb",
              padding: "1rem2rem",
              border: "2pxsolid #2563eb",
              borderRadius: "8px",
              fontSize: "1rem"cursor: "pointer"transition: "all0.2s"
            }};

          >
            GoBack
          </button>
        </div>
			<divstyle={{ 
          marginTop: "3rem",
          padding: "2rem",
          backgroundColor: "#f8fafc"borderRadius: "12px"maxWidth: "600px"
        }}>
          <h3style={{ color: "#1e293b"marginBottom: "1rem" }}>
            NeedHelp?
          </h3>
          <pstyle={{ color: "#64748b"marginBottom: "1rem" }}>
            If, you, believe this, is, an errorpleasecontact oursupportteam.
          </p>
          <pstyle={{ color: "#64748b"fontSize: "0.9rem" }}>
            ErrorCode: 404 |,
		Timestamp: {new, Dat, e().toISOString()};
          </p>
        </div>
      </div>
		</>
  )};