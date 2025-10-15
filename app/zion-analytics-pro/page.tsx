'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target
} from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics with live, interactive dashboards that update in real-time.',
      benefits: ['Live data updates', 'Customizable widgets', 'Mobile responsive', 'Export capabilities']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage AI-powered forecasting to predict trends and make data-driven decisions.',
      benefits: ['AI forecasting', 'Trend analysis', 'Anomaly detection', 'Confidence intervals']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including CRMs, ERPs, and cloud platforms.',
      benefits: ['100+ integrations', 'Real-time sync', 'Data transformation', 'Error handling']
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate and distribute reports automatically with customizable schedules.',
      benefits: ['Scheduled reports', 'Email delivery', 'PDF/Excel export', 'Custom templates']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance features.',
      benefits: ['End-to-end encryption', 'Role-based access', 'Audit logs', 'GDPR compliance']
    },
    {
      icon: Globe,
      title: 'Multi-tenant Architecture',
      description: 'Scale across multiple teams and departments with isolated data environments.',
      benefits: ['Team isolation', 'Custom branding', 'Scalable infrastructure', 'API access']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        '5 dashboards',
        '1GB data storage',
        'Basic integrations',
        'Email support',
        'Standard reports',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Unlimited dashboards',
        '10GB data storage',
        'Advanced integrations',
        'Priority support',
        'Custom reports',
        'API access',
        'White-label options',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Custom dashboards',
        'Unlimited storage',
        'All integrations',
        '24/7 support',
        'Custom development',
        'Dedicated account manager',
        'On-premise deployment',
        'Custom AI models'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Analytics Pro transformed how we track our business metrics. The real-time dashboards and predictive analytics have been game-changers.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'Data Analyst',
      content: 'The automated reporting feature saves us hours every week. The AI-powered insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'We can now track our marketing campaigns in real-time and predict outcomes with incredible accuracy. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Analytics Pro - Advanced Business Intelligence Platform"
        description="Transform your business with Zion Analytics Pro - the most advanced business intelligence platform. Real-time dashboards, predictive analytics, and automated reporting."
        keywords="business intelligence, analytics platform, data visualization, predictive analytics, real-time dashboards, business metrics"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                <span>Business Intelligence Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Analytics Pro
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                The most advanced business intelligence platform with real-time dashboards, 
                AI-powered predictive analytics, and automated reporting. Transform your data into actionable insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <NeonButton href="/contact" size="lg">
                  Start Free Trial
                </NeonButton>
                <NeonButton href="/demo" variant="secondary" size="lg">
                  Watch Demo
                </NeonButton>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2,500+</div>
                  <div className="text-gray-300 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">4.9/5</div>
                  <div className="text-gray-300 text-sm">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable business insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedCard key={index} glowColor="cyan">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative z-10 py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <AnimatedCard 
                  key={plan.name} 
                  glowColor={plan.popular ? 'purple' : 'cyan'} 
                  className={plan.popular ? 'ring-2 ring-purple-400' : ''}
                >
                  <div className="space-y-6">
                    {plan.popular && (
                      <div className="text-center">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <NeonButton 
                      href="/contact" 
                      variant={plan.popular ? 'accent' : 'primary'} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Started
                    </NeonButton>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Customers Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} glowColor="cyan">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="border-t border-slate-700 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12">
              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="/contact" size="lg">
                Start Free Trial
              </NeonButton>
              <NeonButton href="/demo" variant="secondary" size="lg">
                Schedule Demo
              </NeonButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsProPage;