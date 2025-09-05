import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SAAS Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI services, IT solutions, and innovative micro SAAS platforms. Transform your business with our comprehensive technology services and solutions." />
        <meta name="keywords" content="AI development, cloud solutions, blockchain, IoT platforms, micro SAAS, IT services, technology solutions" />
        <meta property="og:title" content="Zion Tech Group - Leading Technology Solutions Provider" />
        <meta property="og:description" content="Transform your business with our AI, IT, and micro SAAS solutions. Expert technology services for modern enterprises." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-blue-400"> Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Leading provider of AI services, IT solutions, and innovative micro SAAS platforms. 
              We help businesses scale, automate, and innovate with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
              <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Products
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-200">Custom AI solutions, ML models, and intelligent automation for your business needs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
                <p className="text-gray-200">Scalable cloud solutions, DevOps, and infrastructure design for modern applications.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4">Micro SAAS Platforms</h3>
                <p className="text-gray-200">Innovative micro SAAS solutions and automation tools for business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Development</h3>
              <p className="text-gray-600 mb-4">Custom AI solutions, machine learning models, and intelligent automation systems.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
                <li>• Chatbots & Virtual Assistants</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $2,500/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">Scalable cloud infrastructure, migration services, and DevOps automation.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• AWS, Azure, GCP Migration</li>
                <li>• Container Orchestration</li>
                <li>• Serverless Architecture</li>
                <li>• Cloud Security & Compliance</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $1,800/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Blockchain Solutions</h3>
              <p className="text-gray-600 mb-4">Secure blockchain development, smart contracts, and DeFi applications.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Smart Contract Development</li>
                <li>• DeFi Applications</li>
                <li>• NFT Marketplaces</li>
                <li>• Cryptocurrency Integration</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $3,500/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IoT Platforms</h3>
              <p className="text-gray-600 mb-4">Connected device solutions, sensor networks, and real-time data processing.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Device Management</li>
                <li>• Real-time Analytics</li>
                <li>• Edge Computing</li>
                <li>• Industrial IoT Solutions</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $2,200/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Micro SAAS Solutions</h3>
              <p className="text-gray-600 mb-4">Custom micro SAAS platforms and automation tools for business efficiency.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Workflow Automation</li>
                <li>• Data Processing Tools</li>
                <li>• API Integration Services</li>
                <li>• Custom Dashboard Solutions</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $1,500/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Comprehensive security solutions and compliance services for your digital assets.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Security Audits</li>
                <li>• Penetration Testing</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $2,000/month</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful projects and satisfied clients</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our expert team and discover how our technology solutions can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;