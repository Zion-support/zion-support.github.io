import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import FuturisticHero from '@/components/ui/FuturisticHero';
import InteractiveSearch from '@/components/ui/InteractiveSearch';
import InteractiveStats from '@/components/ui/InteractiveStats';
import { EnhancedCard } from '@/components/ui/EnhancedCard';
import EnhancedMarketplaceCard from '@/components/ui/EnhancedMarketplaceCard';

const Home: NextPage = () => {
  return (
<<<<<<< HEAD
    <div className="relative">
      <Head>
        <title>Zion — AI‑Powered Marketplace & Automation Platform</title>
        <meta
          name="description"
          content="Explore AI services, products, talent, automation dashboard, and expert resources. Build, scale, and automate with Zion."
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/ai-solutions" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 border border-purple-400/50 rounded-lg transition-all duration-200">
                🚀 AI Solutions
              </a>
              <a href="/cutting-edge-innovations-2027" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 border border-cyan-400/50 rounded-lg transition-all duration-200">
                🔬 2027 Cutting-Edge
              </a>
              <a href="/practical-micro-saas-2027" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 border border-green-400/50 rounded-lg transition-all duration-200">
                💼 2027 Micro SAAS
              </a>
              <a href="/all-services-2027" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 border border-orange-400/50 rounded-lg transition-all duration-200">
                🌟 All 2027 Services
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Case Studies
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>
        </main>

        <AnimatedBackground className="pointer-events-none" />

        <div className="space-y-20">
          {/* Hero */}
          <FuturisticHero
            title="Zion — The AI‑Powered Marketplace"
            subtitle="Discover services, products, and expert talent. Automate workflows. Accelerate delivery."
            className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-cyan-600 text-white py-20 shadow-xl"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/services" className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow hover:shadow-md transition">
                  Explore Services
                </Link>
                <Link href="/products" className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition">
                  Browse Products
                </Link>
                <Link href="/talent" className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition">
                  Hire Talent
                </Link>
                <Link href="/automation" className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition">
                  Automation Dashboard
                </Link>
              </div>
              <InteractiveSearch
                placeholder="Search services, products, and resources..."
                onSearch={(q) => {
                  if (!q) return;
                  // Simple client-side redirect to blog search or services for now
                  window.location.href = `/blog`; // placeholder: central content hub
                }}
                className="w-full max-w-2xl"
              />
            </div>
          </FuturisticHero>

          {/* Snapshot stats */}
          <section className="container mx-auto px-4">
            <InteractiveStats
              stats={[
                { label: 'Professional Services', value: '50+', description: 'AI, Cloud, Data, Security, DevOps, and more' },
                { label: 'Expert Resources', value: '100+ ', description: 'Guides, expert chats, and insights' },
                { label: 'Automation Ready', value: '24/7', description: 'Run workflows with the Automation Center' },
              ]}
            />
          </section>

          {/* Primary destinations */}
          <section className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Primary Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EnhancedMarketplaceCard
                title="Services Marketplace"
                description="Browse and book professional services across AI, cloud, security, and more."
                href="/services"
                icon="🚀"
                className="bg-gradient-to-br from-blue-500 to-purple-600"
              />
              <EnhancedMarketplaceCard
                title="Product Catalog"
                description="Discover tools, templates, and solutions to accelerate your development."
                href="/products"
                icon="🛠️"
                className="bg-gradient-to-br from-green-500 to-teal-600"
              />
              <EnhancedMarketplaceCard
                title="Expert Talent"
                description="Connect with verified professionals for your projects and consulting needs."
                href="/talent"
                icon="👥"
                className="bg-gradient-to-br from-orange-500 to-red-600"
              />
            </div>
          </section>

          {/* Automation Center */}
          <section className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Automation Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <EnhancedCard>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">OSV Dependency Audit</div>
                    <div className="text-gray-500">Security scan of npm deps</div>
                  </div>
                  <a href="/.netlify/functions/osv_dependency_audit" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
                </div>
              </EnhancedCard>
              <EnhancedCard>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">External Link Audit</div>
                    <div className="text-gray-500">Checks off-site links</div>
                  </div>
                  <a href="/.netlify/functions/external_link_audit" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
                </div>
              </EnhancedCard>
              <EnhancedCard>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Automation Summary</div>
                    <div className="text-gray-500">Aggregated automation status</div>
                  </div>
                  <a href="/.netlify/functions/automation_summary" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
                </div>
              </EnhancedCard>
              <EnhancedCard>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">README Badges</div>
                    <div className="text-gray-500">Updates status badges</div>
                  </div>
                  <a href="/.netlify/functions/readme_badges_updater" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
                </div>
              </EnhancedCard>
            </div>
          </section>

          {/* Latest insights */}
          <section className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Latest Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog/cybersecurity-trends-for-2024-and-beyond-chat">
                <EnhancedCard>
                  <h3 className="text-lg font-semibold mb-2">Cybersecurity Trends for 2024</h3>
                  <p className="text-gray-600">Key shifts in threat models and defense strategies for modern stacks.</p>
                </EnhancedCard>
              </Link>
              <Link href="/blog/cloud-native-architecture-best-practices-chat">
                <EnhancedCard>
                  <h3 className="text-lg font-semibold mb-2">Cloud‑Native Best Practices</h3>
                  <p className="text-gray-600">Patterns for resilient, scalable, and maintainable cloud systems.</p>
                </EnhancedCard>
              </Link>
              <Link href="/blog/machine-learning-applications-in-enterprise-software-chat">
                <EnhancedCard>
                  <h3 className="text-lg font-semibold mb-2">ML in Enterprise Software</h3>
                  <p className="text-gray-600">Practical applications and adoption strategies that deliver value.</p>
                </EnhancedCard>
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/blog" className="text-indigo-700 font-semibold hover:underline">
                Browse all insights →
              </Link>
            </div>
          </section>

          {/* Contact & CTA */}
          <section className="container mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to start?</h3>
                  <p className="text-gray-600">Tell us about your goals. We'll recommend services, products, or experts to help.</p>
                </div>
                <div className="flex gap-3">
                  <Link href="/contact" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">
                    Contact Us
                  </Link>
                  <Link href="/about" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold border border-gray-200 hover:bg-gray-200 transition">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Zion Tech Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p>Custom AI solutions and machine learning models for your business needs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p>Scalable cloud solutions and infrastructure design for modern applications.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p>End-to-end digital transformation services to modernize your business.</p>
            </div>
          </div>
        </div>
      </main>
>>>>>>> origin/cursor/website-audit-and-enhancement-145a
    </div>
  );
};

export default Home;