import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;

export default function Index() {
  return (
    <>;
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name=&apos;description&apos; content=&apos;Zion Tech Group delivers cutting-edge AI, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with our innovative technology solutions.&apos; />
        <meta name=&apos;keywords&apos; content=&apos;AI services, cybersecurity, cloud computing, digital transformation, technology consulting, Zion Tech Group&apos; />
        <meta property=&apos;og: title&apos; content=&apos;Zion Tech Group - Leading Technology Solutions Provider&apos; />
        <meta property=&apos;og:description&apos; content=&apos;Transform your business with our cutting-edge AI, cybersecurity, and cloud solutions. Expert technology consulting and implementation services.&apos; />
        <meta property=&apos;og: type&apos; content=&apos;website&apos; />
        <meta property=&apos;og:url&apos; content=&apos;https://ziontechgroup.com&apos; />
        <meta property=&apos;og:image&apos; content=&apos;https://ziontechgroup.com/og-image.jpg&apos; />
        <meta name=&apos;twitter:card&apos; content=&apos;summary_large_image&apos; />
        <meta name=&apos;twitter:title&apos; content=&apos;Zion Tech Group - Leading Technology Solutions Provider&apos; />
        <meta name=&apos;twitter:description&apos; content=&apos;Transform your business with our cutting-edge AI, cybersecurity, and cloud solutions.&apos; />
        <meta name=&apos;twitter: image&apos; content=&apos;https://ziontechgroup.com/og-image.jpg&apos; />
        <link rel=&apos;canonical&apos; href=&apos;https://ziontechgroup.com&apos; />
        <script
          type=&apos;application/ld+json&apos;
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              &apos;@context&apos;: &apos;https://schema.org&apos;, &apos;@type&apos;: &apos;Organization&apos;,
              &apos;name&apos;: &apos;Zion Tech Group&apos;, &apos;url&apos;: &apos;https://ziontechgroup.com&apos;,
              &apos;logo&apos;: &apos;https://ziontechgroup.com/logo.png&apos;, &apos;description&apos;: &apos;Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.&apos;, &apos;address&apos;: {
                &apos;@type&apos;: &apos;PostalAddress&apos;,
                &apos;addressCountry&apos;: &apos;US&apos;
              }, &apos;contactPoint&apos;: {
                &apos;@type&apos;: &apos;ContactPoint&apos;,
                &apos;contactType&apos;: &apos;customer service&apos;, &apos;url&apos;: &apos;https://ziontechgroup.com/contact&apos;
              },
              &apos;sameAs&apos;: [
                &apos;https://linkedin.com/company/zion-tech-group&apos;, &apos;https://twitter.com/ziontechgroup&apos;
              ]
            })
          }}
        />
      </Head>
      <div style={{
        padding: &apos;40px 20px&apos;, color: &apos;#fff&apos;,
        background: &apos;linear-gradient(135deg, #0b1220 0%, #1a2332 100%)&apos;, minHeight: &apos;100vh&apos;,
        display: &apos;flex&apos;, flexDirection: &apos;column&apos;,
        alignItems: &apos;center&apos;, justifyContent: &apos;center&apos;,
        textAlign: &apos;center&apos;
      }}>
        <h1 style={{
          fontSize: &apos;3rem&apos;, fontWeight: &apos;bold&apos;,
          marginBottom: &apos;1rem&apos;, background: &apos;linear-gradient(45deg, #00d4ff, #0099cc)&apos;, WebkitBackgroundClip: &apos;text&apos;,
          WebkitTextFillColor: &apos;transparent&apos;, backgroundClip: &apos;text&apos;
        }}>
          Zion Tech Group
        </h1>
        <p style={{
          fontSize: &apos;1.2rem&apos;,
          marginBottom: &apos;2rem&apos;, color: &apos;#a0aec0&apos;,
          maxWidth: &apos;600px&apos;
        }}>
          Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
        </p>
        <div style={{
          display: &apos;flex&apos;,
          gap: &apos;1rem&apos;, flexWrap: &apos;wrap&apos;,
          justifyContent: &apos;center&apos;
        }}>
          <a
            href=&apos;/services&apos;
            style={{
              padding: &apos;12px 24px&apos;, background: &apos;linear-gradient(45deg, #00d4ff, #0099cc)&apos;, color: &apos;white&apos;,
              textDecoration: &apos;none&apos;, borderRadius: &apos;8px&apos;,
              fontWeight: &apos;600&apos;, transition: &apos;transform 0.2s&apos;
            }}
            onMouseOver={(e) => e.target.style.transform = &apos;translateY(-2px)&apos;}
            onMouseOut={(e) => e.target.style.transform = &apos;translateY(0)&apos;}
          >
            Our Services
          </Link>
          <a
            href=&apos;/contact&apos;
            style={{
              padding: &apos;12px 24px&apos;, background: &apos;transparent&apos;,
              color: &apos;#00d4ff&apos;, textDecoration: &apos;none&apos;,
              borderRadius: &apos;8px&apos;, fontWeight: &apos;600&apos;,
              border: &apos;2px solid #00d4ff&apos;, transition: &apos;all 0.2s&apos;
            }}
            onMouseOver={(e) => {
              e.target.style.background = &apos;#00d4ff&apos;;
              e.target.style.color = &apos;#0b1220&apos;;
            }}
            onMouseOut={(e) => {
              e.target.style.background = &apos;transparent&apos;;
              e.target.style.color = &apos;#00d4ff&apos;;
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}