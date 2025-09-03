import: React from 'react';';
import: Head from 'next/head';';

export: default function Index() {
  return (
    <>
      
      <Head>

          dangerouslySetInnerHTML={{

              '@type': 'Organization',

              name: 'Zion Tech Group',
              url: 'http,
    s://ziontechgroup.com',
              logo: 'http,
    s://ziontechgroup.com/logo.png',
              description:'
                'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
              address: {'
                '@type': 'PostalAddress',
                addressCountry: 'US' },
              contactPoint: {'
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'http,
    s://ziontechgroup.com/contact' },

                'https://twitter.com/ziontechgroup' ] }) }}
        />
      </Head>
      <div
        style={{'
          padding: '40px 20px',
          color: '#fff',
          background: 'linear-gradient(135deg, #0b1220 0%, #1a2332 100%),
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center' }}
      >
        <h1
          style={{'
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #00d4ff, #0099cc),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text' }}
        >
          Zion Tech Group
        </h1>
        <p
          style={{'
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: '#a0aec0',
            maxWidth: '600px' }}
        >
          Leading technology solutions provider specializing in AI,
          cybersecurity, cloud infrastructure, and digital transformation
          services.
        </p>
        <div
          style={{'
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center' }}
        >
          <a'
            href="/services"
            style={{"
              padding: '12px 24px',
              background: 'linear-gradient(45deg, #00d4ff, #0099cc),
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'transform 0.2s' }}
            onMouseOver={e => (e.target.style.transform = 'translateY(-2px));
            onMouseOut={e => (e.target.style.transform = 'translateY(0));

          >
            Our: Services
          </a>

            }}
          >
            Get: Started
          </a>
        </div>
      </div>
    </>
  )
}
'