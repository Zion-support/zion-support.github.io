<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
=======
import Link from 'next/link';
<<<<<<< HEAD
=======
import SEOHead from '../components/SEOHead';
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology solutions provider specializing in AI development, cloud architecture, and digital transformation for modern businesses.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://ziontechgroup.com"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Development",
        "description": "Custom AI solutions, machine learning models, and intelligent automation systems."
      },
      {
        "@type": "Service", 
        "name": "Cloud Services",
        "description": "AWS, Azure, and GCP architecture, migration, and optimization services."
      },
      {
        "@type": "Service",
        "name": "Micro SaaS",
        "description": "Scalable software-as-a-service solutions and digital product development."
      }
    ]
  };

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered IT Solutions & Innovation</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, and Micro SaaS platforms. Transform your business with cutting-edge technology and expert consulting." />
        <meta name="keywords" content="AI services, IT consulting, Micro SaaS, cloud solutions, cybersecurity, DevOps, machine learning" />
        <meta property="og:title" content="Zion Tech Group - AI-Powered IT Solutions" />
        <meta property="og:description" content="Transform your business with our AI services, IT solutions, and Micro SaaS platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI-Powered IT Solutions" />
        <meta name="twitter:description" content="Transform your business with our AI services, IT solutions, and Micro SaaS platforms." />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> AI-Powered Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Leading provider of AI services, IT solutions, and Micro SaaS platforms. 
                We help businesses leverage cutting-edge technology for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Services
                </Link>
                <Link href="/contact" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
              <p className="text-lg text-gray-600">Comprehensive solutions to drive your digital transformation</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3>
                <p className="text-gray-600 mb-4">Machine learning, automation, and intelligent solutions to optimize your operations.</p>
                <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</Link>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h3>
                <p className="text-gray-600 mb-4">Cloud migration, DevOps, cybersecurity, and infrastructure management.</p>
                <Link href="/services" className="text-green-600 font-semibold hover:text-green-700">Learn More →</Link>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS</h3>
                <p className="text-gray-600 mb-4">Custom software solutions, APIs, and scalable platforms for rapid growth.</p>
                <Link href="/services" className="text-purple-600 font-semibold hover:text-purple-700">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">Let&apos;s discuss how our solutions can drive your success.</p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Your Free Consultation
            </Link>
          </div>
        </section>
      </main>
=======
<<<<<<< HEAD
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)' }}>
      {/* Hero Section */}
      <section style={{ 
=======
    <>
      <SEOHead
        title="Zion Tech Group - Leading Technology Solutions Provider"
        description="Leading technology solutions provider specializing in AI development, cloud architecture, and digital transformation for modern businesses."
        structuredData={structuredData}
      />
    <main>
      {/* Hero Section */}
      <section style={{
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
<<<<<<< HEAD
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 24, lineHeight: 1.2 }}>
            Transform Your Business with 
            <span style={{ color: '#22d3ee' }}> Advanced Technology</span>
          </h1>
          <p style={{ fontSize: 20, opacity: 0.9, marginBottom: 32, lineHeight: 1.6 }}>
            We deliver cutting-edge AI solutions, micro SaaS products, and comprehensive IT services 
            to help your business scale and thrive in the digital age.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: '#22d3ee',
              color: '#0b1220',
              padding: '14px 28px',
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 16
            }}>
              Get Started Today
            </Link>
            <Link href="/services" style={{
              background: 'transparent',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 16,
              border: '2px solid white'
            }}>
              View Our Services
=======
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Zion Tech Group
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Leading technology solutions provider specializing in AI development, cloud architecture, 
            and digital transformation for modern businesses.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" style={{
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Explore Services
            </Link>
            <Link href="/contact" style={{
              background: 'transparent',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              border: '2px solid #22d3ee'
            }}>
              Get Started
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Overview */}
      <section style={{ padding: '80px 20px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            Our Core Services
          </h2>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 32 }}>
          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: 64, 
              height: 64, 
              background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
              borderRadius: 16,
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24
            }}>🤖</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
              AI Services
            </h3>
            <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.6 }}>
              Leverage artificial intelligence to automate processes, gain insights, and enhance customer experiences.
            </p>
            <Link href="/ai-services" style={{
              color: '#22d3ee',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Learn More →
            </Link>
          </div>

          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: 64, 
              height: 64, 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              borderRadius: 16,
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24
            }}>⚡</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
              Micro SaaS
            </h3>
            <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.6 }}>
              Specialized software solutions that solve specific business problems with minimal overhead.
            </p>
            <Link href="/micro-saas" style={{
              color: '#8b5cf6',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Learn More →
            </Link>
          </div>

          <div style={{
            background: 'white',
            borderRadius: 16,
            padding: 32,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: 64, 
              height: 64, 
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              borderRadius: 16,
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24
            }}>🛠️</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
              IT Services
            </h3>
            <p style={{ color: '#64748b', marginBottom: 24, lineHeight: 1.6 }}>
              Complete IT infrastructure management, cloud solutions, and cybersecurity services.
            </p>
            <Link href="/it-services" style={{
              color: '#059669',
              fontWeight: 600,
              textDecoration: 'none'
            }}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ 
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        padding: '80px 20px'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            Why Choose Zion Tech Group?
          </h2>
          <p style={{ fontSize: 18, color: '#64748b', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>Expert Team</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Certified professionals with deep expertise in AI, cloud technologies, and software development.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>Proven Results</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Successfully delivered projects for businesses across various industries and scales.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>24/7 Support</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Round-the-clock support and monitoring to ensure your systems run smoothly.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: '#0b1220' }}>Scalable Solutions</h3>
              <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                Solutions designed to grow with your business and adapt to changing needs.
              </p>
=======
      {/* Services Preview */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: '#0b1220'
          }}>
            Our Core Services
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#0b1220' }}>
                AI Development
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Custom AI solutions, machine learning models, and intelligent automation systems.
              </p>
              <Link href="/services" style={{ 
                color: '#22d3ee', 
                fontWeight: 600, 
                textDecoration: 'none' 
              }}>
                Learn More →
              </Link>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#0b1220' }}>
                Cloud Services
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                AWS, Azure, and GCP architecture, migration, and optimization services.
              </p>
              <Link href="/services" style={{ 
                color: '#22d3ee', 
                fontWeight: 600, 
                textDecoration: 'none' 
              }}>
                Learn More →
              </Link>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#0b1220' }}>
                Micro SaaS
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Scalable software-as-a-service solutions and digital product development.
              </p>
              <Link href="/services" style={{ 
                color: '#22d3ee', 
                fontWeight: 600, 
                textDecoration: 'none' 
              }}>
                Learn More →
              </Link>
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#0b1220' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: 18, color: '#64748b', marginBottom: 32, lineHeight: 1.6 }}>
            Let&apos;s discuss how our technology solutions can help you achieve your business goals.
          </p>
          <Link href="/contact" style={{
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            color: '#0b1220',
            padding: '16px 32px',
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: 18,
            display: 'inline-block'
          }}>
            Get Your Free Consultation
=======
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0b1220 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Let&apos;s discuss how our technology solutions can drive your digital transformation.
          </p>
          <Link href="/contact" style={{
            background: '#22d3ee',
            color: '#0b1220',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1.125rem'
          }}>
            Start Your Project
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
          </Link>
        </div>
      </section>
    </main>
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
    </>
  );
}
