import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <Link href="/services" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-white/80 mb-4">Custom AI solutions and machine learning models for your business needs.</p>
              <span className="text-blue-300 text-sm font-medium">Learn More →</span>
            </Link>
            
            <Link href="/blockchain-solutions" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⛓️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Solutions</h3>
              <p className="text-white/80 mb-4">DeFi, NFT platforms, and smart contract development for the decentralized future.</p>
              <span className="text-green-300 text-sm font-medium">Explore Now →</span>
            </Link>
            
            <Link href="/iot-platforms" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">IoT Platforms</h3>
              <p className="text-white/80 mb-4">Smart device solutions and connected systems for modern businesses.</p>
              <span className="text-purple-300 text-sm font-medium">Discover More →</span>
            </Link>
            
            <Link href="/services" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p className="text-white/80 mb-4">Scalable cloud solutions and infrastructure design for modern applications.</p>
              <span className="text-orange-300 text-sm font-medium">Get Started →</span>
            </Link>
          </div>

          {/* New Content Showcase */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Explore Our Latest Solutions</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Discover our comprehensive technology offerings designed to transform your business and drive innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Complete Service Portfolio</h3>
                <p className="text-white/80 mb-6">From AI development to blockchain solutions, we offer end-to-end technology services.</p>
                <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  View All Services
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Meet Our Expert Team</h3>
                <p className="text-white/80 mb-6">Learn about our experienced professionals and their expertise in cutting-edge technologies.</p>
                <Link href="/about" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  About Our Team
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/80 mb-6">Contact us today to discuss your project and explore how we can help your business grow.</p>
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Technology Highlights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Technologies We Master</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "AI/ML", "Blockchain", "IoT", "Cloud", "Web3", "DeFi",
                "React", "Node.js", "Python", "TypeScript", "AWS", "Azure",
                "Smart Contracts", "NFT", "Microservices", "DevOps", "Security", "Analytics"
              ].map((tech, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors">
                  <span className="text-white font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;