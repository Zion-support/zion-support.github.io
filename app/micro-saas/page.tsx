import React from 'react';
import { BarChart3, Shield, Cloud, Users, Zap, Globe, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: 'From $299/month',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Export', 'API Integration'],
      link: '/zion-analytics-pro',
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection.',
      icon: <Shield className="w-8 h-8" />,
      price: 'From $499/month',
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', '24/7 Support'],
      link: '/zion-security-shield',
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage with end-to-end encryption and unlimited scalability.',
      icon: <Cloud className="w-8 h-8" />,
      price: 'From $99/month',
      features: ['Unlimited Storage', 'End-to-End Encryption', 'File Sharing', 'Version Control'],
      link: '/zion-cloud-vault',
      featured: true
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent automation.',
      icon: <Users className="w-8 h-8" />,
      price: 'From $199/month',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Pipeline Management', 'Analytics'],
      link: '/zion-ai-crm-pro',
      featured: true
    },
    {
      title: 'Zion Marketing Automation Pro',
      description: 'AI-powered marketing automation with multi-channel campaign management.',
      icon: <Zap className="w-8 h-8" />,
      price: 'From $149/month',
      features: ['Email Campaigns', 'Social Media', 'Lead Nurturing', 'A/B Testing'],
      link: '/zion-ai-marketing-automation-pro',
      featured: true
    },
    {
      title: 'Zion Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization.',
      icon: <Globe className="w-8 h-8" />,
      price: 'From $99/month',
      features: ['Task Management', 'Team Collaboration', 'Resource Planning', 'Progress Tracking'],
      link: '/zion-ai-project-manager-pro',
      featured: true
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Zion Analytics Pro transformed our data analysis. We now make decisions 3x faster.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      content: 'The security shield has been a game-changer. Zero breaches since implementation.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      content: 'Zion AI CRM Pro increased our conversion rates by 45% in just 2 months.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const benefits = [
    {
      title: 'Ready to Deploy',
      description: 'All our micro SAAS solutions are ready to use immediately after setup.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable Pricing',
      description: 'Start small and scale up as your business grows with flexible pricing plans.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Get round-the-clock support from our expert team whenever you need help.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Regular Updates',
      description: 'Continuous improvements and new features added regularly at no extra cost.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Discover our comprehensive suite of micro SAAS solutions including analytics, security, CRM, marketing automation, and project management tools."
        keywords="micro SAAS, software solutions, analytics dashboard, CRM, marketing automation, project management, cloud storage, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular solutions trusted by thousands of businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 p-6 relative">
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{product.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed for immediate deployment and maximum impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their businesses with our solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our range of micro SAAS solutions and start transforming your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
