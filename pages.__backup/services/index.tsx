import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  innovativeMicroSaasServices2031,
  innovativeITInfrastructureServices2031,
  innovativeAIServices2031,
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
} from 'lucide-react';

const Services: NextPage = () => {
  const scrollToContact = () => {
    document
      .getElementById('contact-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>
          Innovative Services 2031 - Zion Tech Group | Cutting-Edge Micro SAAS,
          IT & AI Solutions
        </title>
        <meta
          name="description"
          content="Discover Zion Tech Group's revolutionary 2031 services portfolio featuring quantum computing, AI-powered solutions, and next-generation IT infrastructure. Transform your business with our innovative micro SAAS, IT services, and AI solutions."
        />
        <meta
          name="keywords"
          content="innovative services 2031, quantum computing, AI services, IT infrastructure, micro SAAS, Zion Tech Group, cutting-edge technology, digital transformation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                Revolutionary Services 2031
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}
                Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience Zion Tech Group's cutting-edge portfolio of innovative
              micro SAAS, IT infrastructure, and AI services designed to
              revolutionize your business in 2031 and beyond.
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
                onClick={() =>
                  document
                    .getElementById('services-overview')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section
          id="services-overview"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Three Pillars of Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive service portfolio is built on three
                foundational pillars, each designed to deliver breakthrough
                results and competitive advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Micro SAAS Services */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Micro SAAS Solutions
                  </h3>
                  <p className="text-gray-300">
                    Revolutionary software-as-a-service platforms that transform
                    business operations
                  </p>
                </div>
                <div className="space-y-3">
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
              </div>

              {/* IT Infrastructure Services */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    IT Infrastructure
                  </h3>
                  <p className="text-gray-300">
                    Next-generation infrastructure services for modern digital
                    enterprises
                  </p>
                </div>
                <div className="space-y-3">
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
              </div>

              {/* AI Services */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    AI Services
                  </h3>
                  <p className="text-gray-300">
                    Cutting-edge artificial intelligence solutions for
                    intelligent automation
                  </p>
                </div>
                <div className="space-y-3">
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
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary software platforms that transform business
                operations with cutting-edge technology and intelligent
                automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeMicroSaasServices2031.map(service => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {service.name}
                    </h3>
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {service.pricing}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">
                        ${service.price.toLocaleString()}/month
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-gray-300">
                        {service.marketPrice}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Target className="w-4 h-4 mr-2" />
                      <span>ROI: {service.roi}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Setup: {service.setupTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Infrastructure Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation infrastructure solutions that provide the
                foundation for digital transformation and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeITInfrastructureServices2031.map(service => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {service.name}
                    </h3>
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {service.category.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Hourly Rate:</span>
                      <span className="text-white font-semibold">
                        ${service.hourlyRate}/hour
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Project Rate:</span>
                      <span className="text-gray-300">
                        ${service.projectRate.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>SLA: {service.sla}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Response: {service.responseTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Get Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions that enable
                intelligent automation and data-driven decision making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeAIServices2031.map(service => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {service.name}
                    </h3>
                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                      {service.category.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">
                        ${service.price.toLocaleString()}/month
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-gray-300">
                        {service.marketPrice}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      <span>AI Score: {service.aiScore}/100</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Eye className="w-4 h-4 mr-2" />
                      <span>Accuracy: {service.accuracy}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact-section"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Zion Tech Group today to discuss how our innovative
              services can revolutionize your operations and drive unprecedented
              growth.
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  Address
                </h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </p>
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
                href="/innovative-services-showcase-2031"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
