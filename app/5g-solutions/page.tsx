import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  BarChart3, 
  Settings, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const FiveGSolutionsPage = () => {
  const fiveGSolutions = [
    {
      title: '5G Data Analytics',
      description: 'High-speed data analysis with 5G connectivity, real-time processing, and advanced analytics for massive datasets.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time processing', 'High-speed connectivity', 'Advanced analytics', 'Massive datasets'],
      price: 'From $399/month',
      link: '/5g-data-analytics'
    },
    {
      title: '5G Edge Computing',
      description: 'Edge computing solutions with 5G infrastructure, low-latency processing, and distributed computing capabilities.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Low-latency processing', 'Edge infrastructure', 'Distributed computing', 'Real-time analytics'],
      price: 'From $499/month',
      link: '/5g-edge-computing'
    },
    {
      title: '5G Implementation',
      description: 'Complete 5G network deployment with infrastructure setup, optimization, and comprehensive testing services.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Network deployment', 'Infrastructure setup', 'Optimization', 'Testing services'],
      price: 'From $999/month',
      link: '/5g-implementation'
    },
    {
      title: '5G Mobile Applications',
      description: '5G-enabled mobile applications with ultra-fast connectivity, real-time features, and enhanced user experiences.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['Ultra-fast connectivity', 'Real-time features', 'Enhanced UX', 'Mobile optimization'],
      price: 'From $299/month',
      link: '/5g-mobile-applications'
    },
    {
      title: '5G Network Infrastructure',
      description: 'Robust 5G network architecture with scalable infrastructure, security protocols, and performance optimization.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: ['Scalable infrastructure', 'Security protocols', 'Performance optimization', 'Network monitoring'],
      price: 'From $799/month',
      link: '/5g-network-infrastructure'
    },
    {
      title: '5G Private Networks',
      description: 'Dedicated 5G private networks with enhanced security, custom configurations, and enterprise-grade reliability.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      features: ['Enhanced security', 'Custom configurations', 'Enterprise reliability', 'Private connectivity'],
      price: 'From $599/month',
      link: '/5g-private-networks'
    },
    {
      title: '5G Smart City Solutions',
      description: 'Smart city infrastructure with 5G connectivity, IoT integration, and intelligent urban management systems.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['Smart infrastructure', 'IoT integration', 'Urban management', 'Intelligent systems'],
      price: 'From $1299/month',
      link: '/5g-smart-city-solutions'
    }
  ];

  const additionalSolutions = [
    { name: '5G IoT Solutions', link: '/5g-iot-solutions' },
    { name: '5G Edge Analytics', link: '/5g-edge-analytics' },
    { name: '5G Security Solutions', link: '/5g-security-solutions' },
    { name: '5G Performance Monitoring', link: '/5g-performance-monitoring' }
  ];

  const stats = [
    { number: '10x', label: 'Faster Speeds', icon: <Zap className="w-6 h-6" /> },
    { number: '1ms', label: 'Ultra-Low Latency', icon: <Clock className="w-6 h-6" /> },
    { number: '1000x', label: 'More Devices', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Reliability', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="5G Solutions - Zion Tech Group | Next-Generation Connectivity"
        description="Next-generation 5G connectivity solutions with ultra-fast speeds, low latency, and massive device connectivity. Transform your business with 5G technology."
        keywords="5G solutions, 5G connectivity, edge computing, 5G implementation, smart city, IoT, next-generation networks"
        canonical="https://ziontechgroup.com/5g-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Globe className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Connectivity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              5G Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations. 
            Experience ultra-fast speeds and ultra-low latency with our 5G solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get 5G Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Target className="w-5 h-5" />}
            >
              View 5G Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured 5G Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations. 
              Experience ultra-fast speeds and ultra-low latency with our 5G solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGSolutions.map((solution, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <Link to={solution.link} className="block">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {solution.price}
                    </span>
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Additional 5G Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete 5G Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of 5G solutions designed to meet every connectivity need.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 text-center"
              >
                <div className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm font-medium">
                  {solution.name}
                </div>
                <ArrowRight className="w-4 h-4 mx-auto mt-2 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Connectivity with 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our 5G solutions to drive growth and innovation. 
            Start your next-generation connectivity journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get 5G Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;