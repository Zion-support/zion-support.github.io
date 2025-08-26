import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
<<<<<<< HEAD
        <title>Zion Tech Group — AI-Powered Technology Solutions</title>
        <meta
          name="description"
          content="Discover cutting-edge AI services, quantum computing solutions, blockchain platforms, and innovative technology services from Zion Tech Group."
        />
=======
        <title>Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta property="og:title" content="Zion Tech Group — Leading-Edge Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI, quantum computing, cybersecurity, digital transformation, autonomous systems, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform","url":"https://ziontechgroup.com/","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script>
>>>>>>> origin/cursor/website-audit-and-enhancement-33a4
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
              About Us
            </a>
            <a href="/comprehensive-services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
              Our Services
            </a>
            <a href="/innovative-services-showcase-2026" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 border border-purple-400/50 rounded-lg transition-all duration-200">
              🚀 2026 Services
            </a>
            <a href="/comprehensive-pricing-2026" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
              Pricing
            </a>
            <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
              Contact
            </a>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Innovative Technology Solutions 2026
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Business Intelligence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Business Intelligence</h3>
              <p className="text-white/80 mb-4">
                Advanced AI-powered business intelligence with predictive analytics, automated insights, and real-time decision support.
              </p>
              <div className="text-2xl font-bold text-cyan-400 mb-2">From $899/month</div>
              <a href="/innovative-services-showcase-2026" className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                Learn More
              </a>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Quantum Computing</h3>
              <p className="text-white/80 mb-4">
                Enterprise-grade quantum computing platform for complex optimization problems including logistics and financial modeling.
              </p>
              <div className="text-2xl font-bold text-purple-400 mb-2">From $2,499/month</div>
              <a href="/innovative-services-showcase-2026" className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Learn More
              </a>
            </div>

            {/* Blockchain & Web3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Blockchain & Web3</h3>
              <p className="text-white/80 mb-4">
                Scalable enterprise blockchain solution with smart contract automation and decentralized identity management.
              </p>
              <div className="text-2xl font-bold text-green-400 mb-2">From $1,799/month</div>
              <a href="/innovative-services-showcase-2026" className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Learn More
              </a>
            </div>

            {/* IoT & Edge Computing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3 text-white">IoT & Edge Computing</h3>
              <p className="text-white/80 mb-4">
                Advanced IoT platform with edge computing capabilities, real-time data processing, and AI-powered analytics.
              </p>
              <div className="text-2xl font-bold text-orange-400 mb-2">From $699/month</div>
              <a href="/innovative-services-showcase-2026" className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Learn More
              </a>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Zero Trust Security</h3>
              <p className="text-white/80 mb-4">
                Comprehensive zero trust security solution with continuous authentication and AI-powered threat detection.
              </p>
              <div className="text-2xl font-bold text-red-400 mb-2">From $1,299/month</div>
              <a href="/innovative-services-showcase-2026" className="inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                Learn More
              </a>
            </div>

            {/* Healthcare AI */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Healthcare AI</h3>
              <p className="text-white/80 mb-4">
                Advanced healthcare analytics platform with AI-powered diagnosis assistance and patient outcome prediction.
              </p>
              <div className="text-2xl font-bold text-pink-400 mb-2">From $1,599/month</div>
              <a href="/innovative-services-showcase-2026" className="inline-block px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team of experts to discuss your specific needs and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Services consultation request"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
              >
                Get Free Consultation
              </a>
              <a
                href="/comprehensive-pricing-2026"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-950 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Zion Tech Group</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-semibold mb-2 text-white">Call Us</h4>
              <a href="tel:+13024640950" className="text-cyan-400 hover:underline">
                +1 302 464 0950
              </a>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">✉️</div>
              <h4 className="font-semibold mb-2 text-white">Email Us</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">🌍</div>
              <h4 className="font-semibold mb-2 text-white">Visit Us</h4>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;