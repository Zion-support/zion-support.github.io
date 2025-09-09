import Head from 'next/head';
import Link from 'next/link';
import { Award, Users, Globe, Zap, Shield, Target, Rocket, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '150+', label: 'Successful Projects', icon: <Award className="w-6 h-6" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { value: '25+', label: 'Industries Served', icon: <Globe className="w-6 h-6" /> },
    { value: '320%', label: 'Average ROI', icon: <Zap className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what's possible with cutting-edge AI, quantum computing, and emerging technologies.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We measure our performance by the results we deliver for our clients.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Trust',
      description: 'We maintain the highest standards of security and data protection, building trust through transparency.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of partnerships and work closely with clients, partners, and the global tech community.'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding operations to serve clients across North America, Europe, and Asia Pacific regions.'
    },
    {
      year: '2024',
      title: 'Quantum Breakthrough',
      description: 'Successfully deployed quantum computing solutions for Fortune 500 financial institutions.'
    },
    {
      year: '2023',
      title: 'AI Innovation Hub',
      description: 'Launched our AI Innovation Lab and established partnerships with leading research institutions.'
    },
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Zion Tech Group was founded with a vision to democratize advanced technology solutions.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Kleber Santos',
      title: 'Chief Executive Officer & Founder',
      bio: 'Former senior engineer at leading tech companies with 15+ years of experience in AI and cloud architecture.',
      image: '/images/leadership/kleber-santos.jpg'
    },
    {
      name: 'Sarah Chen',
      title: 'Chief Technology Officer',
      bio: 'Quantum computing expert with PhD from MIT and experience leading R&D teams at Google and IBM.',
      image: '/images/leadership/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Operating Officer',
      bio: 'Operations specialist with 20+ years managing large-scale technology deployments and client relationships.',
      image: '/images/leadership/michael-rodriguez.jpg'
    }
  ];

  const awards = [
    'Inc. 5000 Fastest Growing Companies 2024',
    'AI Innovation Award - TechCrunch Disrupt 2024',
    'Best Cloud Solutions Provider - Enterprise Awards 2024',
    'Quantum Computing Excellence - IEEE 2023',
    'Cybersecurity Provider of the Year 2023'
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading provider of AI, cloud, cybersecurity, and quantum computing solutions. Discover our mission, team, and commitment to innovation." />
        <meta name="keywords" content="about us, company, mission, vision, team, leadership, AI company, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading provider of AI, cloud, and quantum computing solutions" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Leading provider of AI, cloud, and quantum computing solutions" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of AI, cloud, cybersecurity, and quantum computing solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/zion-technologies/",
                "https://twitter.com/ziontechgroup"
              ]
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're pioneering the future of technology with AI, cloud computing, cybersecurity, and quantum solutions that transform businesses and industries.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center text-cyan-400 mb-2">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To democratize access to cutting-edge technology solutions, enabling organizations of all sizes 
                  to harness the power of artificial intelligence, quantum computing, and advanced cloud infrastructure.
                </p>
                <p className="text-gray-600">
                  We believe that technology should be an enabler, not a barrier. Our mission is to break down 
                  the complexity of emerging technologies and make them accessible, practical, and impactful for 
                  businesses worldwide.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To be the global leader in AI-powered technology solutions, driving the next wave of digital 
                  transformation and creating a future where technology amplifies human potential and solves 
                  the world's most complex challenges.
                </p>
                <p className="text-gray-600">
                  We envision a world where quantum computing, AI, and advanced cybersecurity work seamlessly 
                  together to create unprecedented opportunities for innovation, efficiency, and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our culture of innovation and excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a vision to revolutionize technology adoption, to becoming a trusted partner for 
                organizations worldwide.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-24">
                      <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                    </div>
                    <div className="flex-1 ml-8 relative">
                      <div className="absolute left-[-16px] top-4 w-3 h-3 bg-blue-600 rounded-full"></div>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the visionaries driving innovation and leading Zion Tech Group's mission to transform 
                the technology landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold">{leader.name}</h3>
                      <p className="text-sm opacity-90">{leader.title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Industry recognition for our innovative solutions and commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have transformed their business with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/case-studies"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
