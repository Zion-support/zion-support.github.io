import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI, Micro SaaS & IT Solutions</title>
        <meta name="description" content="Leading provider of AI services, micro SaaS products, and IT solutions. Transform your business with cutting-edge technology and expert consulting." />
        <meta name="keywords" content="AI services, micro SaaS, IT consulting, cloud solutions, machine learning, automation" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI services, innovative micro SaaS products, and expert IT solutions. 
            We deliver measurable results with transparent pricing and proven expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors">
              Explore Our Services
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg transition-colors">
              Get Started Today
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-800/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div>
                <strong>Address:</strong><br />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Micro SaaS Products</h3>
              <p className="text-gray-300 mb-4">
                Ready-to-deploy SaaS solutions including Cloud Cost Guard, Smart Document Processor, 
                API Rate Limiter, and 12+ other innovative products.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Cloud Cost Guard (FinOps Assistant)</li>
                <li>• Smart Document Processor</li>
                <li>• Lead Scoring & Qualification Engine</li>
                <li>• API Rate Limiter & Analytics</li>
              </ul>
              <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold">View All Micro SaaS →</Link>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">AI Services</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI solutions including Computer Vision, Fraud Detection, Voice AI, 
                and 12+ other cutting-edge AI services.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Computer Vision & Image Recognition</li>
                <li>• AI-Powered Fraud Detection</li>
                <li>• Voice AI & Speech Recognition</li>
                <li>• RAG Platform-in-a-Box</li>
              </ul>
              <Link href="/services" className="text-purple-400 hover:text-purple-300 font-semibold">View All AI Services →</Link>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">IT & Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive IT solutions including Cloud Migration, Enterprise Architecture, 
                Blockchain Development, and 12+ other services.
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Cloud Landing Zone + Migration</li>
                <li>• Enterprise Architecture Consulting</li>
                <li>• Blockchain & Web3 Development</li>
                <li>• API Development & Integration</li>
              </ul>
              <Link href="/services" className="text-green-400 hover:text-green-300 font-semibold">View All IT Services →</Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Most projects delivered in 1-8 weeks with transparent timelines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-400">Clear, competitive pricing with no hidden fees or surprises</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-400">Measurable outcomes with ROI tracking and performance metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-400">24/7 support and ongoing maintenance for all solutions</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Contact us today for a free consultation and custom quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
