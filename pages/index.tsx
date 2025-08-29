import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with innovative micro SAAS, IT services, and AI solutions." />
        <meta name="keywords" content="Zion Tech Group, technology solutions, AI development, cloud architecture, micro SAAS, IT services, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
            <Link href="/products" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Products
            </Link>
            <Link href="/innovative-services-showcase-2031" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Innovative Services 2031
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Micro SAAS Solutions</h3>
              <p>Revolutionary software-as-a-service platforms that transform business operations with cutting-edge technology.</p>
              <Link href="/services" className="text-blue-300 hover:text-blue-200 mt-4 inline-block">Learn More →</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">IT Infrastructure Services</h3>
              <p>Next-generation infrastructure services for modern digital enterprises with 24/7 support and enterprise-grade reliability.</p>
              <Link href="/services" className="text-blue-300 hover:text-blue-200 mt-4 inline-block">Learn More →</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Solutions</h3>
              <p>Cutting-edge artificial intelligence solutions that enable intelligent automation and data-driven decision making.</p>
              <Link href="/services" className="text-blue-300 hover:text-blue-200 mt-4 inline-block">Learn More →</Link>
            </div>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">Innovation at the Core</h3>
                <p className="text-gray-300">We stay ahead of technology trends, offering solutions that are not just current but future-ready, including quantum computing, AI, and blockchain technologies.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-300">Our solutions deliver measurable ROI, with clients seeing up to 400% returns on investment within 24 months of implementation.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-300">Our team of certified professionals brings decades of combined experience in cutting-edge technologies and enterprise solutions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support ensures your business operations never stop, with guaranteed response times and comprehensive SLAs.</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8">Contact us today to discuss how our innovative solutions can revolutionize your operations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                ✉️ Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;