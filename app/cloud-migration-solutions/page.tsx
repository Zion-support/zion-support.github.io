import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  Target,
  FileText,
  Smartphone,
  Monitor,
  Activity,
  BarChart3,
  Settings,
  Bell,
  MessageSquare,
  Upload,
  Download,
  Search,
  Filter,
  Users,
  Key,
  Bug,
  Network,
  HardDrive,
  Eye,
  Lock,
  RefreshCw,
  Play,
  Pause,
  Square,
  CheckSquare,
  X,
  AlertTriangle,
  Info
} from 'lucide-react';

const CloudMigrationSolutionsPage: React.FC = () => {
  const features = [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration strategy development.',
      icon: <Search className="w-6 h-6" />,
      benefits: ['Infrastructure audit', 'Migration roadmap', 'Risk assessment', 'Cost optimization']
    },
    {
      title: 'Data Migration',
      description: 'Secure and efficient migration of your data to the cloud with zero downtime.',
      icon: <Database className="w-6 h-6" />,
      benefits: ['Zero-downtime migration', 'Data integrity', 'Backup & recovery', 'Validation testing']
    },
    {
      title: 'Application Migration',
      description: 'Seamless migration of applications with minimal disruption to business operations.',
      icon: <Server className="w-6 h-6" />,
      benefits: ['Lift & shift', 'Replatforming', 'Refactoring', 'Performance optimization']
    },
    {
      title: 'Security & Compliance',
      description: 'Ensure your cloud environment meets security standards and compliance requirements.',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['Security hardening', 'Compliance audit', 'Access controls', 'Monitoring setup']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Auto-scaling', 'Load balancing', 'Caching strategies', 'Resource optimization']
    },
    {
      title: 'Ongoing Support',
      description: '24/7 support and monitoring to ensure your cloud environment runs smoothly.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['24/7 monitoring', 'Proactive maintenance', 'Performance tuning', 'Cost management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$2,999',
      period: 'one-time',
      description: 'Perfect for small businesses with simple infrastructure',
      features: [
        'Up to 10 servers',
        'Basic assessment',
        'Standard migration',
        'Email support',
        '30-day warranty',
        'Basic documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$9,999',
      period: 'one-time',
      description: 'Comprehensive migration for growing businesses',
      features: [
        'Up to 50 servers',
        'Detailed assessment',
        'Advanced migration',
        'Priority support',
        '90-day warranty',
        'Comprehensive documentation',
        'Performance optimization',
        'Security hardening'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'quote',
      description: 'Complete cloud transformation for large organizations',
      features: [
        'Unlimited servers',
        'Full assessment',
        'Custom migration',
        'Dedicated support',
        '1-year warranty',
        'Full documentation',
        'Advanced optimization',
        'Compliance certification'
      ],
      popular: false
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">A</div>,
      features: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation']
    },
    {
      name: 'Microsoft Azure',
      icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">M</div>,
      features: ['Virtual Machines', 'Blob Storage', 'SQL Database', 'Functions', 'ARM Templates']
    },
    {
      name: 'Google Cloud',
      icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">G</div>,
      features: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'Deployment Manager']
    },
    {
      name: 'IBM Cloud',
      icon: <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">I</div>,
      features: ['Virtual Servers', 'Object Storage', 'Db2', 'Cloud Functions', 'Terraform']
    }
  ];

  const migrationTypes = [
    {
      title: 'Lift and Shift',
      description: 'Move applications to the cloud with minimal changes',
      icon: <Upload className="w-8 h-8" />,
      features: ['Quick migration', 'Minimal changes', 'Cost effective', 'Fast deployment']
    },
    {
      title: 'Replatforming',
      description: 'Optimize applications for cloud-native services',
      icon: <RefreshCw className="w-8 h-8" />,
      features: ['Cloud optimization', 'Better performance', 'Reduced costs', 'Enhanced security']
    },
    {
      title: 'Refactoring',
      description: 'Completely redesign applications for cloud architecture',
      icon: <Settings className="w-8 h-8" />,
      features: ['Cloud-native design', 'Microservices', 'Auto-scaling', 'Maximum efficiency']
    },
    {
      title: 'Hybrid Cloud',
      description: 'Combine on-premises and cloud infrastructure',
      icon: <Network className="w-8 h-8" />,
      features: ['Flexible deployment', 'Data sovereignty', 'Gradual migration', 'Risk mitigation']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Solutions - Expert Cloud Migration Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our expert cloud migration services. Secure, efficient, and cost-effective migration to AWS, Azure, Google Cloud, and more." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud transformation, cloud consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Expert Cloud Migration</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration <span className="text-blue-400">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our expert cloud migration services. 
              Secure, efficient, and cost-effective migration to AWS, Azure, Google Cloud, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25"
              >
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Successful Migrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                All Major Cloud Providers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud platforms to find the best solution for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cloudProviders.map((provider, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 group text-center"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {provider.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {provider.name}
                  </h3>
                  
                  <ul className="space-y-1">
                    {provider.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Migration Strategies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration approach that best fits your business needs and timeline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {migrationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful cloud migration with minimal disruption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Migration Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for cloud migration services. No hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get a free assessment and discover how cloud migration can transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25"
                >
                  <span>Get Free Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ Free assessment • ✓ No obligation • ✓ Expert consultation</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationSolutionsPage;