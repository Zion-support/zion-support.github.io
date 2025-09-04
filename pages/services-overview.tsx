import Link from 'next/link';
import Head from 'next/head';

export default function ServicesOverview() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of Zion Tech Group's 340+ innovative services including micro SaaS products, AI services, and IT solutions across multiple industries." />
        <meta name="keywords" content="services overview, micro SaaS, AI services, IT solutions, technology services, enterprise solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services-overview`} />
        <meta property="og:title" content="Services Overview - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive overview of Zion Tech Group's 340+ innovative services including micro SaaS products, AI services, and IT solutions across multiple industries." />
        <meta property="og:url" content={`${contact.site}/services-overview`} />
        <meta property="og:type" content="website" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" role="main">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Services Overview
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Explore our complete portfolio of 340+ innovative services designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Service Categories
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  150+ focused software solutions designed for specific business needs and workflows.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link 
                  href="/micro-saas" 
                  className="text-blue-400 hover:text-blue-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="View all Micro SaaS products"
                >
                  View All Micro SaaS →
                </Link>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  90+ advanced artificial intelligence solutions for automation and intelligent decision-making.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link 
                  href="/ai-services" 
                  className="text-purple-400 hover:text-purple-300 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="View all AI services"
                >
                  View All AI Services →
                </Link>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT Solutions</h3>
                <p className="text-slate-300 mb-6">
                  100+ comprehensive IT services for infrastructure, security, and digital transformation.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Cloud Infrastructure Management</li>
                  <li>• Cybersecurity Solutions</li>
                  <li>• DevOps & Automation</li>
                  <li>• Data Analytics & BI</li>
                  <li>• Enterprise Integration</li>
                </ul>
                <Link 
                  href="/it-services" 
                  className="text-green-400 hover:text-green-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="View all IT solutions"
                >
                  View All IT Solutions →
                </Link>
              </div>
            </div>

            {/* Industry Solutions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Industry Solutions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Healthcare', href: '/healthcare', color: 'text-red-400' },
                  { name: 'Financial Services', href: '/financial', color: 'text-green-400' },
                  { name: 'Manufacturing', href: '/manufacturing', color: 'text-blue-400' },
                  { name: 'Retail & E-commerce', href: '/retail', color: 'text-purple-400' },
                  { name: 'Government', href: '/government', color: 'text-yellow-400' },
                  { name: 'Education', href: '/education', color: 'text-indigo-400' },
                  { name: 'Startups', href: '/startup', color: 'text-pink-400' },
                  { name: 'Enterprise', href: '/enterprise', color: 'text-cyan-400' }
                ].map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className={`p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-white/20 transition-colors text-center ${industry.color} hover:text-white`}
                    aria-label={`View ${industry.name} solutions`}
                  >
                    <h3 className="font-semibold">{industry.name}</h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-slate-900/60 rounded-xl border border-white/10 p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let our experts help you choose the right solutions for your specific needs and industry requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Contact us for a consultation"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/services-catalog" 
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Browse our services catalog"
                >
                  Browse Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}