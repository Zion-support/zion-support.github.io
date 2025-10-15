'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  Zap,
  Lock,
  Settings,
  Network
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure solutions with AWS, Azure, and GCP expertise for scalable, secure, and cost-effective deployments.',
      icon: Cloud,
      features: [
        'Multi-cloud architecture',
        'Auto-scaling solutions',
        'Cost optimization',
        'Security compliance',
        'Disaster recovery',
        '24/7 monitoring'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic cloud setup', 'Email support', 'Standard monitoring'] },
        professional: { price: 799, period: 'month', features: ['Advanced architecture', 'Priority support', 'Custom monitoring', 'API access'] },
        enterprise: { price: 1499, period: 'month', features: ['Custom solutions', '24/7 support', 'Dedicated team', 'White-label options'] }
      },
      href: '/cloud-infrastructure',
      category: 'Cloud',
      rating: 4.9,
      users: '2,100+'
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity services including threat detection, vulnerability assessment, and compliance management.',
      icon: Shield,
      features: [
        'Threat detection',
        'Vulnerability assessment',
        'Compliance management',
        'Incident response',
        'Security training',
        'Penetration testing'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic security', 'Email support', 'Standard monitoring'] },
        professional: { price: 999, period: 'month', features: ['Advanced security', 'Priority support', 'Custom solutions', 'API access'] },
        enterprise: { price: 1999, period: 'month', features: ['Full security suite', '24/7 support', 'Dedicated team', 'Custom compliance'] }
      },
      href: '/cybersecurity-solutions',
      category: 'Security',
      rating: 4.8,
      users: '1,800+'
    },
    {
      id: 'database-management',
      name: 'Database Management Pro',
      description: 'Expert database administration, optimization, and management services for MySQL, PostgreSQL, MongoDB, and more.',
      icon: Database,
      features: [
        'Database optimization',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Migration services',
        'Monitoring & alerts'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['1 database', 'Basic optimization', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['5 databases', 'Advanced optimization', 'Priority support', 'API access'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited databases', 'Custom solutions', '24/7 support', 'Dedicated DBA'] }
      },
      href: '/database-management',
      category: 'Database',
      rating: 4.7,
      users: '1,500+'
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks and best practices.',
      icon: Smartphone,
      features: [
        'Native iOS/Android',
        'Cross-platform development',
        'UI/UX design',
        'App store deployment',
        'Performance optimization',
        'Maintenance & support'
      ],
      pricing: {
        starter: { price: 4999, period: 'project', features: ['Basic app', '2 platforms', '3 months support'] },
        professional: { price: 14999, period: 'project', features: ['Advanced app', 'All platforms', '6 months support', 'API integration'] },
        enterprise: { price: 49999, period: 'project', features: ['Custom app', 'White-label', '12 months support', 'Dedicated team'] }
      },
      href: '/mobile-development',
      category: 'Development',
      rating: 4.9,
      users: '800+'
    },
    {
      id: 'web-development',
      name: 'Web Application Development',
      description: 'Modern web application development with React, Node.js, Python, and other cutting-edge technologies.',
      icon: Globe,
      features: [
        'Modern frameworks',
        'Responsive design',
        'API development',
        'Performance optimization',
        'SEO optimization',
        'Security implementation'
      ],
      pricing: {
        starter: { price: 2999, period: 'project', features: ['Basic website', '3 pages', '1 month support'] },
        professional: { price: 9999, period: 'project', features: ['Advanced web app', 'Unlimited pages', '3 months support', 'API integration'] },
        enterprise: { price: 29999, period: 'project', features: ['Custom web app', 'White-label', '6 months support', 'Dedicated team'] }
      },
      href: '/web-development',
      category: 'Development',
      rating: 4.8,
      users: '2,500+'
    },
    {
      id: 'devops-solutions',
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployment.',
      icon: Settings,
      features: [
        'CI/CD pipelines',
        'Infrastructure as code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic CI/CD', 'Email support', 'Standard monitoring'] },
        professional: { price: 999, period: 'month', features: ['Advanced DevOps', 'Priority support', 'Custom pipelines', 'API access'] },
        enterprise: { price: 1999, period: 'month', features: ['Full DevOps suite', '24/7 support', 'Dedicated team', 'Custom solutions'] }
      },
      href: '/devops-solutions',
      category: 'DevOps',
      rating: 4.8,
      users: '1,200+'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implementation, and management of secure, scalable network infrastructure solutions.',
      icon: Network,
      features: [
        'Network design',
        'Security implementation',
        'Performance optimization',
        'Monitoring & management',
        'Disaster recovery',
        'Compliance support'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic network', 'Email support', 'Standard monitoring'] },
        professional: { price: 799, period: 'month', features: ['Advanced network', 'Priority support', 'Custom solutions', 'API access'] },
        enterprise: { price: 1499, period: 'month', features: ['Full network suite', '24/7 support', 'Dedicated team', 'Custom infrastructure'] }
      },
      href: '/network-infrastructure',
      category: 'Network',
      rating: 4.7,
      users: '1,000+'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting Services',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.',
      icon: Users,
      features: [
        'Technology strategy',
        'Architecture planning',
        'Cost optimization',
        'Risk assessment',
        'Vendor management',
        'Digital transformation'
      ],
      pricing: {
        starter: { price: 199, period: 'hour', features: ['Basic consulting', 'Email support', 'Standard reports'] },
        professional: { price: 299, period: 'hour', features: ['Advanced consulting', 'Priority support', 'Custom solutions', 'API access'] },
        enterprise: { price: 499, period: 'hour', features: ['Full consulting suite', '24/7 support', 'Dedicated team', 'Custom solutions'] }
      },
      href: '/it-consulting',
      category: 'Consulting',
      rating: 4.9,
      users: '1,400+'
    }
  ];

  const categories = ['All', 'Cloud', 'Security', 'Database', 'Development', 'DevOps', 'Network', 'Consulting'];

  return (
    <>
      <SEOHead 
        title="IT Solutions - Zion Tech Group"
        description="Comprehensive IT solutions and services to modernize your infrastructure. From cloud migration to cybersecurity, we have the expertise you need."
        keywords="IT solutions, cloud infrastructure, cybersecurity, database management, web development, mobile development, DevOps, IT consulting"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Server className="w-4 h-4" />
                <span>IT Solutions & Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  IT Solutions
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions and services to modernize your infrastructure, enhance security, 
                and drive digital transformation. From cloud migration to cybersecurity, we have the expertise you need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <NeonButton href="/contact" size="lg">
                  Get Started Today
                </NeonButton>
                <NeonButton href="/demo" variant="secondary" size="lg">
                  IT Assessment
                </NeonButton>
              </div>
              
              {/* IT Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Expert Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IT Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of IT solutions, each designed to address specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {itServices.map((service) => (
                <AnimatedCard key={service.id} href={service.href} glowColor="cyan">
                  <div className="space-y-4">
                    {/* Service Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    
                    {/* Service Info */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-400 font-medium">{service.category}</span>
                        <span className="text-gray-500">{service.users} users</span>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-white">${service.pricing.starter.price}</span>
                        <span className="text-gray-400 text-sm">/{service.pricing.starter.period}</span>
                        <span className="text-xs text-gray-500">starting</span>
                      </div>
                    </div>
                    
                    {/* Features Preview */}
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      <div className="text-sm text-blue-400 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* IT Capabilities Section */}
        <section className="relative z-10 py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions leverage cutting-edge technologies and best practices to deliver reliable, scalable, and secure infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard glowColor="blue">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cloud Infrastructure</h3>
                  <p className="text-gray-400">
                    Scalable cloud solutions with AWS, Azure, and GCP expertise for modern, secure, and cost-effective deployments.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard glowColor="green">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cybersecurity</h3>
                  <p className="text-gray-400">
                    Advanced security solutions including threat detection, vulnerability assessment, and compliance management.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard glowColor="purple">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">DevOps & Automation</h3>
                  <p className="text-gray-400">
                    Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployment.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12">
              Transform your IT infrastructure with our comprehensive solutions. Get started today and experience the power of modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="/contact" size="lg">
                Start IT Transformation
              </NeonButton>
              <NeonButton href="/demo" variant="secondary" size="lg">
                IT Consultation
              </NeonButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;