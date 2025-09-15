import NewContentShowcase from './src/components/NewContentShowcase';
import LatestBlogSection from './src/components/LatestBlogSection';
import FeaturedServicesBanner from './src/components/FeaturedServicesBanner';
import InnovationSpotlight from './src/components/InnovationSpotlight';
import { ArrowRight, Play } from 'lucide-react';

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ScrollToTop />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
                🚀 Welcome to the Future of Technology
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Next-Gen Solutions
                </span>
              </h1>
              
              <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Leading the digital revolution with cutting-edge AI, blockchain, and cloud technologies. 
                Join thousands of businesses already transforming their operations with our innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                  Start Your Transformation
                  <ArrowRight className="ml-3 w-6 h-6" />
                </button>
                <button className="inline-flex items-center px-10 py-5 border-2 border-white text-white rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-xl">
                  Watch Demo
                  <Play className="ml-3 w-6 h-6" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10,000+</div>
                  <div className="text-white/70">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-white/70">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-white/70">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/70">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Content Showcase */}
        <NewContentShowcase />

        {/* Featured Services Banner */}
        <FeaturedServicesBanner />

        {/* Innovation Spotlight */}
        <InnovationSpotlight />

        {/* Latest Blog Section */}
        <LatestBlogSection />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that drive real business value. Our team of experts is dedicated 
                to helping you succeed in the digital age.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Cutting-edge artificial intelligence solutions that automate processes, 
                  predict trends, and optimize your business operations for maximum efficiency.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Machine Learning Models</li>
                  <li>• Predictive Analytics</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">🔗</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Blockchain</h3>
                <p className="text-gray-600 mb-6">
                  Secure, decentralized solutions powered by blockchain technology that 
                  ensure transparency, security, and trust in all your digital transactions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Smart Contracts</li>
                  <li>• DeFi Solutions</li>
                  <li>• NFT Platforms</li>
                  <li>• Supply Chain Tracking</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Cloud Services</h3>
                <p className="text-gray-600 mb-6">
                  Scalable cloud infrastructure and deployment solutions that grow with 
                  your business and provide unmatched reliability and performance.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multi-Cloud Strategy</li>
                  <li>• Auto-Scaling</li>
                  <li>• Disaster Recovery</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}