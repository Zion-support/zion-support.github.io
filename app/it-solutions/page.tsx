import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Play, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  BarChart3,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Zap,
  Database,
  Cloud,
  Lock,
  Cpu,
  Globe,
  Award,
  Sparkles,
  Eye,
  MessageSquare,
  FileText,
  Code,
  Image,
  Video,
  Mic,
  Search,
  Filter,
  Settings,
  Layers,
  Network,
  Bot,
  Lightbulb,
  PieChart,
  Activity,
  Wifi,
  HardDrive,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  Key,
  AlertTriangle,
  CheckSquare,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  Share,
  ExternalLink
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All IT Solutions', icon: <Server className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud Services', icon: <Cloud className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Network className="w-5 h-5" /> },
    { id: 'consulting', name: 'Consulting', icon: <Target className="w-5 h-5" /> }
  ];

  const itSolutions = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Solutions',
      category: 'cloud',
      description: 'Comprehensive cloud migration, management, and optimization services for modern businesses',
      features: [
        'AWS, Azure, GCP expertise',
        'Cloud migration planning',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery',
        'Auto-scaling setup',
        'Performance tuning'
      ],
      pricing: {
        starter: { price: '$2,999', period: '/month', features: ['Basic cloud setup', 'Standard monitoring', 'Email support'] },
        professional: { price: '$7,999', period: '/month', features: ['Advanced optimization', 'Priority support', 'Custom configurations'] },
        enterprise: { price: '$19,999', period: '/month', features: ['Full management', '24/7 support', 'White-label options'] }
      },
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      rating: 4.9,
      users: '450+',
      link: '/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-solutions',
      title: 'Advanced Cybersecurity Suite',
      category: 'security',
      description: 'Enterprise-grade security solutions to protect your business from evolving cyber threats',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Security audits',
        'Penetration testing',
        'Compliance management',
        'Incident response',
        'Security training',
        '24/7 SOC monitoring'
      ],
      pricing: {
        starter: { price: '$3,999', period: '/month', features: ['Basic security monitoring', 'Standard assessments', 'Email support'] },
        professional: { price: '$9,999', period: '/month', features: ['Advanced threat detection', 'Priority response', 'Custom policies'] },
        enterprise: { price: '$24,999', period: '/month', features: ['Full SOC services', '24/7 support', 'White-label options'] }
      },
      icon: <Shield className="w-8 h-8 text-red-400" />,
      rating: 4.8,
      users: '320+',
      link: '/cybersecurity-solutions'
    },
    {
      id: 'web-development',
      title: 'Full-Stack Web Development',
      category: 'development',
      description: 'Custom web applications built with modern technologies and best practices',
      features: [
        'React, Vue, Angular',
        'Node.js, Python, PHP',
        'Database design',
        'API development',
        'Mobile responsiveness',
        'SEO optimization',
        'Performance tuning',
        'Maintenance & support'
      ],
      pricing: {
        starter: { price: '$4,999', period: 'project', features: ['Basic website', 'Standard features', '3 months support'] },
        professional: { price: '$14,999', period: 'project', features: ['Advanced features', 'Custom design', '6 months support'] },
        enterprise: { price: '$49,999', period: 'project', features: ['Complex applications', 'Custom integrations', '12 months support'] }
      },
      icon: <Code className="w-8 h-8 text-green-400" />,
      rating: 4.9,
      users: '680+',
      link: '/web-development'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      category: 'development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'iOS & Android native',
        'React Native, Flutter',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'API integration',
        'Maintenance & updates'
      ],
      pricing: {
        starter: { price: '$7,999', period: 'project', features: ['Basic mobile app', 'Standard features', '3 months support'] },
        professional: { price: '$19,999', period: 'project', features: ['Advanced features', 'Custom design', '6 months support'] },
        enterprise: { price: '$69,999', period: 'project', features: ['Complex applications', 'Custom integrations', '12 months support'] }
      },
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      rating: 4.8,
      users: '520+',
      link: '/mobile-development'
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      category: 'infrastructure',
      description: 'Streamline your development and deployment processes with modern DevOps practices',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation',
        'Performance optimization',
        'Team training'
      ],
      pricing: {
        starter: { price: '$2,499', period: '/month', features: ['Basic automation', 'Standard monitoring', 'Email support'] },
        professional: { price: '$6,999', period: '/month', features: ['Advanced automation', 'Priority support', 'Custom workflows'] },
        enterprise: { price: '$17,999', period: '/month', features: ['Full automation suite', '24/7 support', 'White-label options'] }
      },
      icon: <RefreshCw className="w-8 h-8 text-purple-400" />,
      rating: 4.9,
      users: '380+',
      link: '/devops-automation'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      category: 'consulting',
      description: 'Comprehensive digital transformation strategy and implementation for modern businesses',
      features: [
        'Digital strategy planning',
        'Process optimization',
        'Technology assessment',
        'Change management',
        'Staff training',
        'System integration',
        'Performance monitoring',
        'Ongoing support'
      ],
      pricing: {
        starter: { price: '$9,999', period: 'project', features: ['Basic assessment', 'Standard planning', '3 months support'] },
        professional: { price: '$24,999', period: 'project', features: ['Comprehensive strategy', 'Full implementation', '6 months support'] },
        enterprise: { price: '$99,999', period: 'project', features: ['Complete transformation', 'Custom solutions', '12 months support'] }
      },
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      rating: 4.8,
      users: '250+',
      link: '/digital-transformation'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      category: 'consulting',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence',
      features: [
        'Data warehouse design',
        'ETL/ELT processes',
        'Dashboard development',
        'Predictive analytics',
        'Machine learning integration',
        'Real-time reporting',
        'Data visualization',
        'Performance optimization'
      ],
      pricing: {
        starter: { price: '$3,999', period: '/month', features: ['Basic analytics', 'Standard dashboards', 'Email support'] },
        professional: { price: '$9,999', period: '/month', features: ['Advanced analytics', 'Custom dashboards', 'Priority support'] },
        enterprise: { price: '$24,999', period: '/month', features: ['Full BI suite', 'Custom ML models', '24/7 support'] }
      },
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      rating: 4.9,
      users: '420+',
      link: '/data-analytics'
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      category: 'infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance',
      features: [
        'Network design & planning',
        'Hardware installation',
        'Security configuration',
        'Performance monitoring',
        'Troubleshooting',
        'Upgrade planning',
        'Disaster recovery',
        '24/7 support'
      ],
      pricing: {
        starter: { price: '$1,999', period: '/month', features: ['Basic network setup', 'Standard monitoring', 'Email support'] },
        professional: { price: '$4,999', period: '/month', features: ['Advanced configuration', 'Priority support', 'Custom solutions'] },
        enterprise: { price: '$12,999', period: '/month', features: ['Full network management', '24/7 support', 'White-label options'] }
      },
      icon: <Network className="w-8 h-8 text-orange-400" />,
      rating: 4.8,
      users: '340+',
      link: '/network-infrastructure'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting Services',
      category: 'consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT investments',
      features: [
        'Technology assessment',
        'Strategic planning',
        'Vendor evaluation',
        'Cost optimization',
        'Risk analysis',
        'Compliance review',
        'Implementation guidance',
        'Ongoing advisory'
      ],
      pricing: {
        starter: { price: '$199', period: '/hour', features: ['Basic consultation', 'Standard reports', 'Email follow-up'] },
        professional: { price: '$299', period: '/hour', features: ['Advanced analysis', 'Priority response', 'Custom recommendations'] },
        enterprise: { price: '$499', period: '/hour', features: ['Comprehensive consulting', '24/7 availability', 'White-label options'] }
      },
      icon: <Target className="w-8 h-8 text-pink-400" />,
      rating: 4.9,
      users: '180+',
      link: '/it-consulting'
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? itSolutions 
    : itSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud services, cybersecurity, web development, mobile apps, DevOps, and digital transformation. Transform your business with our expert IT services." />
        <meta name="keywords" content="IT solutions, cloud services, cybersecurity, web development, mobile development, DevOps, digital transformation, network infrastructure, IT consulting" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Server className="w-4 h-4 mr-2" />
                IT Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your business with our comprehensive IT solutions. From cloud infrastructure to cybersecurity, 
                we provide the technology expertise you need to succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="group inline-flex items-center justify-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get IT Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* IT Capabilities Overview */}
        <section className="relative z-10 py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions cover the full spectrum of technology services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Cloud className="w-12 h-12 text-cyan-400" />,
                  title: 'Cloud Services',
                  description: 'Cloud migration, management, and optimization for scalable infrastructure'
                },
                {
                  icon: <Shield className="w-12 h-12 text-red-400" />,
                  title: 'Cybersecurity',
                  description: 'Enterprise-grade security solutions to protect your business'
                },
                {
                  icon: <Code className="w-12 h-12 text-green-400" />,
                  title: 'Development',
                  description: 'Custom web and mobile applications built with modern technologies'
                },
                {
                  icon: <Network className="w-12 h-12 text-blue-400" />,
                  title: 'Infrastructure',
                  description: 'Network design, implementation, and maintenance services'
                }
              ].map((capability, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="relative z-10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div key={solution.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {solution.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(solution.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{solution.rating}</span>
                            <span className="text-sm text-gray-400">•</span>
                            <span className="text-sm text-gray-400">{solution.users} clients</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {solution.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                      {solution.features.length > 4 && (
                        <div className="text-sm text-cyan-400">
                          +{solution.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-white mb-2">
                        From {solution.pricing.starter.price}
                        <span className="text-lg text-gray-400">{solution.pricing.starter.period}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {solution.pricing.starter.features[0]}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <Link
                        to={solution.link}
                        className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                      >
                        View Details
                      </Link>
                      <a
                        href="tel:+13024640950"
                        className="block w-full text-center py-3 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your IT?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let our expert IT team help you build a robust, secure, and scalable technology infrastructure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+13024640950"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call +1 302 464 0950
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="group inline-flex items-center justify-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                  </div>
                  <div className="mt-8 text-sm text-gray-400">
                    <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                    <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;