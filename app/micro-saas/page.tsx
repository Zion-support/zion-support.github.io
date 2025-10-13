import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/zion-analytics-pro',
      price: 'From $299/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration']
    },
    {
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      link: '/zion-security-shield',
      price: 'From $499/month',
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring']
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/zion-cloud-vault',
      price: 'From $99/month',
      features: ['End-to-end Encryption', 'Unlimited Storage', 'File Sharing', 'Version Control']
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring and automation.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      link: '/zion-ai-crm-pro',
      price: 'From $199/month',
      features: ['Lead Scoring', 'Automation', 'Pipeline Management', 'Analytics']
    },
    {
      title: 'Zion AI Marketing Automation Pro',
      description: 'AI-powered marketing automation with predictive content generation and multi-channel orchestration.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      link: '/zion-ai-marketing-automation-pro',
      price: 'From $149/month',
      features: ['Content Generation', 'Multi-channel', 'A/B Testing', 'Analytics']
    },
    {
      title: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization and resource allocation.',
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-project-manager-pro',
      price: 'From $99/month',
      features: ['Task Management', 'Resource Planning', 'Time Tracking', 'Reporting']
    }
  ];

  const benefits = [
    'Ready-to-use solutions',
    'No complex setup required',
    'Scalable with your business',
    '24/7 support included',
    'Regular updates and improvements',
    'Easy integration with existing tools'
  ];

  const stats = [
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Cloud className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Micro SAAS - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Comprehensive collection of micro SAAS solutions for immediate deployment. Analytics, security, productivity, and business tools designed for modern businesses."
        keywords="micro SAAS, software solutions, business tools, analytics, security, productivity, ready-to-use"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* Micro SAAS Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <Link to={product.link} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-cyan-400 font-medium mb-4">{product.price}</div>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our micro SAAS solutions are designed to deliver immediate value with minimal setup and maximum impact.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your business with our micro SAAS solutions? Contact our experts for a personalized consultation.
              </p>
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Contact Us
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Contact Us Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;