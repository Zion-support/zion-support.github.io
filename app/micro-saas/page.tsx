'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  CreditCard, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Lock, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Clock,
  Brain,
  Code,
  Target,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality blog posts, articles, and marketing content in seconds using advanced AI.',
      features: [
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Social media integration'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', '5 templates', 'Basic SEO'] },
        pro: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Advanced SEO', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'White-label', 'Priority support'] }
      },
      icon: FileText,
      color: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      id: 'ai-social-scheduler',
      name: 'AI Social Media Scheduler',
      description: 'Automate your social media presence with AI-powered content scheduling and optimization.',
      features: [
        'Multi-platform posting',
        'AI-optimized timing',
        'Content calendar',
        'Analytics dashboard',
        'Hashtag suggestions',
        'Engagement tracking'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['3 social accounts', '50 posts/month', 'Basic analytics'] },
        pro: { price: 49, period: 'month', features: ['10 social accounts', 'Unlimited posts', 'Advanced analytics', 'Team collaboration'] },
        enterprise: { price: 99, period: 'month', features: ['Unlimited accounts', 'Custom integrations', 'White-label', 'Dedicated support'] }
      },
      icon: Globe,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Create professional invoices automatically with AI-powered templates and payment tracking.',
      features: [
        'Smart templates',
        'Auto-calculation',
        'Payment tracking',
        'Tax compliance',
        'Multi-currency',
        'Client portal'
      ],
      pricing: {
        starter: { price: 15, period: 'month', features: ['10 invoices/month', 'Basic templates', 'Email delivery'] },
        pro: { price: 35, period: 'month', features: ['100 invoices/month', 'Custom templates', 'Payment tracking', 'Reports'] },
        enterprise: { price: 75, period: 'month', features: ['Unlimited invoices', 'API access', 'White-label', 'Priority support'] }
      },
      icon: CreditCard,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Track and categorize expenses automatically with AI-powered receipt scanning and analysis.',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Expense reports',
        'Tax preparation',
        'Multi-currency',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 12, period: 'month', features: ['50 receipts/month', 'Basic categories', 'PDF reports'] },
        pro: { price: 29, period: 'month', features: ['200 receipts/month', 'Advanced categories', 'Tax integration', 'Team features'] },
        enterprise: { price: 59, period: 'month', features: ['Unlimited receipts', 'Custom categories', 'API access', 'Dedicated support'] }
      },
      icon: BarChart,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'ai-password-manager',
      name: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'Password generation',
        'Security scoring',
        'Breach monitoring',
        'Multi-device sync',
        '2FA integration',
        'Family sharing'
      ],
      pricing: {
        starter: { price: 8, period: 'month', features: ['Unlimited passwords', '2 devices', 'Basic security'] },
        pro: { price: 18, period: 'month', features: ['Unlimited passwords', 'Unlimited devices', 'Advanced security', 'Family sharing'] },
        enterprise: { price: 35, period: 'month', features: ['Team management', 'SSO integration', 'Advanced reporting', 'Priority support'] }
      },
      icon: Lock,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      description: 'Boost email productivity with AI-powered writing, scheduling, and response suggestions.',
      features: [
        'Smart replies',
        'Email scheduling',
        'Tone adjustment',
        'Spell check',
        'Template library',
        'Analytics'
      ],
      pricing: {
        starter: { price: 14, period: 'month', features: ['100 emails/month', 'Basic templates', 'Gmail integration'] },
        pro: { price: 34, period: 'month', features: ['500 emails/month', 'Advanced templates', 'Multi-email provider', 'Team features'] },
        enterprise: { price: 69, period: 'month', features: ['Unlimited emails', 'Custom templates', 'API access', 'Dedicated support'] }
      },
      icon: Mail,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Streamline project management with AI-powered task prioritization and team collaboration.',
      features: [
        'Smart task prioritization',
        'Team collaboration',
        'Progress tracking',
        'Resource allocation',
        'Timeline optimization',
        'Risk assessment'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['5 projects', '5 team members', 'Basic templates'] },
        pro: { price: 59, period: 'month', features: ['25 projects', '25 team members', 'Advanced templates', 'Integrations'] },
        enterprise: { price: 119, period: 'month', features: ['Unlimited projects', 'Unlimited members', 'Custom workflows', 'Priority support'] }
      },
      icon: Target,
      color: 'from-cyan-500 to-teal-600'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Get actionable insights from your data with AI-powered analytics and automated reporting.',
      features: [
        'Data visualization',
        'Automated insights',
        'Custom dashboards',
        'Real-time monitoring',
        'Predictive analytics',
        'Export capabilities'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['5 data sources', 'Basic dashboards', 'Email reports'] },
        pro: { price: 89, period: 'month', features: ['20 data sources', 'Advanced dashboards', 'Custom reports', 'API access'] },
        enterprise: { price: 179, period: 'month', features: ['Unlimited sources', 'White-label', 'Custom integrations', 'Dedicated support'] }
      },
      icon: BarChart,
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'AI Content Generator Pro increased our content output by 300% while maintaining quality. ROI was achieved in just 2 weeks.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Digital Marketing Co.',
      content: 'The AI Social Scheduler saved us 15 hours per week. The AI-optimized posting times increased our engagement by 40%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Freelance Designer',
      content: 'AI Invoice Generator streamlined my billing process completely. Professional invoices in seconds, payments tracked automatically.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS solutions. From content generation to project management, boost your productivity with our innovative tools." />
        <meta name="keywords" content="micro saas, ai tools, productivity software, business automation, saas solutions" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SAAS solutions. Increase productivity, reduce costs, and scale efficiently." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text-enhanced">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              AI-Powered Tools for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Boost productivity, reduce costs, and scale efficiently with our comprehensive suite of micro SAAS solutions. 
              Each tool is designed to solve specific business challenges with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Mail className="inline-block mr-2" size={20} />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div 
                  key={service.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{plan}:</span>
                          <span className="text-white font-semibold">
                            ${details.price}/{details.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`https://ziontechgroup.com/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Learn More <ArrowRight className="inline-block ml-2" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using our micro SAAS solutions to increase productivity and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Mail className="inline-block mr-2" size={20} />
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
        .cyber-text-enhanced {
          background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .neon-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default MicroSaasPage;