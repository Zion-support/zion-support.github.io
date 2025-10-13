import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Cloud, 
  Settings, 
  Globe, 
  Users, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Award,
  Clock
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ServicesPage = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud. Complete cloud migration, management, and optimization services.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Cloud migration', 'Infrastructure management', 'Cost optimization', 'Security compliance'],
      price: 'From $299/month',
      link: '/cloud-infrastructure'
    },
    {
      title: 'Blockchain Development',
      description: 'Custom blockchain solutions, smart contracts, and decentralized applications for secure and transparent business processes.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Smart contracts', 'DApp development', 'Blockchain consulting', 'Security auditing'],
      price: 'From $499/month',
      link: '/blockchain-development'
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things implementation with sensor networks, data collection, and real-time monitoring for smart business operations.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Sensor networks', 'Data collection', 'Real-time monitoring', 'Device management'],
      price: 'From $399/month',
      link: '/iot-solutions'
    },
    {
      title: 'AR/VR Development',
      description: 'Immersive experiences with augmented and virtual reality applications for training, marketing, and customer engagement.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['AR applications', 'VR experiences', '3D modeling', 'Interactive interfaces'],
      price: 'From $599/month',
      link: '/ar-vr-development'
    },
    {
      title: 'DevOps Solutions',
      description: 'Development operations optimization with CI/CD pipelines, infrastructure as code, and automated deployment processes.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated deployment', 'Monitoring & logging'],
      price: 'From $349/month',
      link: '/devops-solutions'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern development frameworks and best practices.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['iOS development', 'Android development', 'Cross-platform apps', 'App store optimization'],
      price: 'From $399/month',
      link: '/mobile-development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with responsive design, progressive web apps, and full-stack development solutions.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: ['Responsive design', 'Progressive web apps', 'Full-stack development', 'Performance optimization'],
      price: 'From $299/month',
      link: '/web-development'
    },
    {
      title: 'IT Support',
      description: 'Comprehensive technical support with 24/7 monitoring, help desk services, and proactive IT maintenance.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      features: ['24/7 support', 'Help desk services', 'Proactive monitoring', 'Issue resolution'],
      price: 'From $199/month',
      link: '/it-support'
    }
  ];

  const additionalServices = [
    { name: 'Network Infrastructure', link: '/network-infrastructure' },
    { name: 'IT Consulting', link: '/it-consulting' },
    { name: 'Cybersecurity Audit', link: '/cybersecurity-audit' },
    { name: 'Data Center Services', link: '/data-center-services' },
    { name: 'Asset Management', link: '/asset-management' }
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'IT Solutions', icon: <Settings className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Complete IT services including cloud infrastructure, blockchain development, IoT solutions, and more. Transform your business with our comprehensive technology solutions."
        keywords="IT services, cloud infrastructure, blockchain development, IoT solutions, web development, mobile development, DevOps, IT consulting"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Comprehensive IT Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              IT Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
            From cloud infrastructure to mobile development, we have everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get IT Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Target className="w-5 h-5" />}
            >
              View IT Demo
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

      {/* Featured IT Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to mobile development, we have everything you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <Link to={service.link} className="block">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {service.price}
                    </span>
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Additional IT Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete IT Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of IT services designed to meet every business need.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 text-center"
              >
                <div className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm font-medium">
                  {service.name}
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our IT solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get IT Consultation
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

export default ServicesPage;