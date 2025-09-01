import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  innovativeMicroSaasServices2031, 
  innovativeITInfrastructureServices2031, 
  innovativeAIServices2031 
} from '../../src/data/innovativeServices2031';
import { 
  Brain, 
  Cloud, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowRight,
  Rocket,
  Target,
  Award,
  Clock,
  Shield,
  Zap,
  Database,
  Network,
  Cpu,
  Lock,
  BarChart3,
  Palette,
  MessageSquare,
  Eye,
  Star,
  DollarSign,
  Users as UsersIcon,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

const Products: NextPage = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const allProducts = [
    ...innovativeMicroSaasServices2031.map(service => ({ ...service, type: 'Micro SAAS', category: 'Software Platform' })),
    ...innovativeITInfrastructureServices2031.map(service => ({ ...service, type: 'IT Infrastructure', category: 'Infrastructure Service' })),
    ...innovativeAIServices2031.map(service => ({ ...service, type: 'AI Service', category: 'Artificial Intelligence' }))
  ];

  return (
    <>
      <Head>
        <title>Innovative Products 2031 - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary product portfolio featuring cutting-edge micro SAAS platforms, IT infrastructure services, and AI solutions designed for 2031 and beyond." />
        <meta name="keywords" content="innovative products 2031, technology solutions, micro SAAS, IT services, AI platforms, Zion Tech Group, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/products" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                Revolutionary Products 2031
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Revolutionary</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technology Products</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's comprehensive portfolio of 24+ innovative products designed to revolutionize your operations, enhance efficiency, and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View All Products
              </button>
            </div>
          </div>
        </section>

        {/* Product Statistics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">8</h3>
                <p className="text-gray-300">Micro SAAS Platforms</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">8</h3>
                <p className="text-gray-300">IT Infrastructure Services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">8</h3>
                <p className="text-gray-300">AI Solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">24+</h3>
                <p className="text-gray-300">Total Products</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products-grid" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Our Product Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of innovative products designed to address every aspect of modern business technology needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product, index) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-white text-sm rounded-full ${
                      product.type === 'Micro SAAS' ? 'bg-purple-600' :
                      product.type === 'IT Infrastructure' ? 'bg-blue-600' : 'bg-green-600'
                    }`}>
                      {product.type}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{product.description}</p>
                  
                  <div className="mb-4 space-y-2">
                    {product.type === 'Micro SAAS' ? (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-white font-semibold">${(product as any).price?.toLocaleString()}/month</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Market Price:</span>
                          <span className="text-gray-300">{(product as any).marketPrice}</span>
                        </div>
                      </>
                    ) : product.type === 'IT Infrastructure' ? (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Hourly Rate:</span>
                          <span className="text-white font-semibold">${(product as any).hourlyRate}/hour</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Project Rate:</span>
                          <span className="text-gray-300">${(product as any).projectRate?.toLocaleString()}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-white font-semibold">${(product as any).price?.toLocaleString()}/month</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">AI Score:</span>
                          <span className="text-gray-300">{(product as any).aiScore}/100</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="truncate">
                        {product.type === 'Micro SAAS' ? `ROI: ${(product as any).roi}` :
                         product.type === 'IT Infrastructure' ? `SLA: ${(product as any).sla}` :
                         `Accuracy: ${(product as any).accuracy}`}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="truncate">
                        {product.type === 'Micro SAAS' ? `Setup: ${(product as any).setupTime}` :
                         product.type === 'IT Infrastructure' ? `Response: ${(product as any).responseTime}` :
                         `Training: ${(product as any).trainingData?.split(',')[0] || 'Advanced'}`}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className={`px-2 py-1 text-xs rounded ${
                        product.type === 'Micro SAAS' ? 'bg-purple-600/20 text-purple-300' :
                        product.type === 'IT Infrastructure' ? 'bg-blue-600/20 text-blue-300' : 'bg-green-600/20 text-green-300'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={scrollToContact}
                    className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-all duration-300 ${
                      product.type === 'Micro SAAS' ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' :
                      product.type === 'IT Infrastructure' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' :
                      'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                    }`}
                  >
                    {product.type === 'Micro SAAS' ? 'Get Started' :
                     product.type === 'IT Infrastructure' ? 'Get Quote' : 'Learn More'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Product Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our products are organized into three main categories, each designed to address specific business needs and technology requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Micro SAAS Category */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Micro SAAS Platforms</h3>
                  <p className="text-gray-300">Revolutionary software-as-a-service solutions</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>8 Innovative Platforms</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>From $799/month</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Enterprise & Professional Tiers</span>
                  </div>
                </div>
                <Link 
                  href="/services"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  View SAAS Products
                </Link>
              </div>

              {/* IT Infrastructure Category */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">IT Infrastructure</h3>
                  <p className="text-gray-300">Next-generation infrastructure services</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>8 Specialized Services</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>From $120/hour</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
                <Link 
                  href="/services"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  View Infrastructure Services
                </Link>
              </div>

              {/* AI Services Category */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Solutions</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence platforms</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>8 AI Platforms</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>From $1,899/month</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>95%+ Accuracy Rates</span>
                  </div>
                </div>
                <Link 
                  href="/services"
                  className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  View AI Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Explore Our Products?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Zion Tech Group today to discuss how our innovative products can transform your business and drive unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Visit Our Website
                <Globe className="ml-2 w-5 h-5" />
              </a>
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;