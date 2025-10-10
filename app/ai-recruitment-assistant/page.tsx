'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Search, 
  Calendar, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Star,
  BarChart3,
  Target,
  FileText
} from 'lucide-react';

const AIRecruitmentAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'AI Resume Screening',
      description: 'Automatically screen and rank resumes with 95% accuracy, saving 80% of screening time',
      benefits: ['95% accuracy rate', '80% time savings', 'Bias-free screening', 'Custom criteria matching']
    },
    {
      icon: Brain,
      title: 'Intelligent Matching',
      description: 'AI-powered candidate matching that finds the best fit based on skills, experience, and culture',
      benefits: ['Smart matching algorithm', 'Culture fit analysis', 'Skills gap identification', 'Compatibility scoring']
    },
    {
      icon: Calendar,
      title: 'Automated Scheduling',
      description: 'Seamlessly schedule interviews with candidates and hiring managers using AI coordination',
      benefits: ['Auto-scheduling', 'Calendar integration', 'Time zone handling', 'Reminder automation']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive recruitment analytics to track performance and optimize hiring processes',
      benefits: ['Real-time metrics', 'Hiring funnel analysis', 'Time-to-hire tracking', 'ROI measurement']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure GDPR compliance and data security with enterprise-grade protection',
      benefits: ['GDPR compliant', 'Data encryption', 'Access controls', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks like sending emails, updating statuses, and generating reports',
      benefits: ['Email automation', 'Status updates', 'Report generation', 'Process optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses hiring 1-10 people per month',
      features: [
        'Up to 50 job postings/month',
        'AI resume screening',
        'Basic candidate matching',
        'Email automation',
        'Email support',
        'Standard reporting',
        '99% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies with active recruitment needs',
      features: [
        'Up to 200 job postings/month',
        'Advanced AI screening',
        'Intelligent candidate matching',
        'Interview scheduling',
        'Priority support',
        'Advanced analytics',
        '99.5% uptime SLA',
        'API integration',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Complete recruitment solution for large organizations',
      features: [
        'Unlimited job postings',
        'AI-powered recruitment',
        'Advanced matching algorithms',
        'Full automation suite',
        '24/7 dedicated support',
        'Enterprise analytics',
        '99.9% uptime SLA',
        'Custom AI training',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Tech Companies',
      description: 'Find and hire top tech talent with AI-powered skill assessment and cultural fit analysis',
      metrics: 'Reduce time-to-hire by 60%',
      icon: Brain
    },
    {
      title: 'Healthcare',
      description: 'Streamline healthcare recruitment with specialized screening for medical professionals',
      metrics: 'Improve candidate quality by 45%',
      icon: Users
    },
    {
      title: 'Retail & Hospitality',
      description: 'Handle high-volume seasonal hiring with automated screening and scheduling',
      metrics: 'Process 10x more applications',
      icon: Target
    },
    {
      title: 'Finance & Banking',
      description: 'Ensure compliance and security in financial services recruitment',
      metrics: '100% compliance rate',
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: 'Reduce Time-to-Hire',
      description: 'Cut hiring time by up to 60% with automated screening and scheduling',
      value: '60% faster hiring'
    },
    {
      title: 'Improve Candidate Quality',
      description: 'AI matching ensures better candidate-job fit and higher retention rates',
      value: '45% better matches'
    },
    {
      title: 'Eliminate Bias',
      description: 'Objective AI screening removes unconscious bias from the hiring process',
      value: '100% bias-free'
    },
    {
      title: 'Save Costs',
      description: 'Reduce recruitment costs through automation and improved efficiency',
      value: '40% cost reduction'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc',
      role: 'Head of People',
      content: 'The AI recruitment assistant has revolutionized our hiring process. We\'ve reduced time-to-hire by 65% and found much better candidates.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Healthcare Plus',
      role: 'HR Director',
      content: 'The bias-free screening is incredible. We\'ve seen a 40% improvement in diversity hires and much better cultural fit.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Retail Solutions',
      role: 'Talent Acquisition Manager',
      content: 'Handling seasonal hiring used to be a nightmare. Now we process 5x more applications with half the effort.',
      rating: 5,
      avatar: '👩‍💼'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Recruitment Assistant - Zion Tech Group | Streamline Hiring with AI</title>
        <meta name="description" content="Streamline your recruitment process with AI-powered resume screening, candidate matching, and interview scheduling. Reduce time-to-hire by 60% and improve candidate quality by 45%." />
        <meta name="keywords" content="AI recruitment, recruitment automation, resume screening, candidate matching, hiring AI, talent acquisition" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-recruitment-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
                AI Recruitment Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your hiring process with AI-powered recruitment. Screen resumes, match candidates, 
                and schedule interviews automatically. Reduce time-to-hire by 60% and improve candidate quality by 45%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Start Free Trial
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Faster Hiring</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Screening Accuracy</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">45%</div>
                <div className="text-gray-300">Better Matches</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Intelligent Recruitment Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered tools that transform every aspect of your recruitment process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Proven Recruitment Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your hiring process with measurable improvements and better outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored recruitment solutions for different industries and hiring needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <useCase.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-cyan-400 font-semibold">{useCase.metrics}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Simple Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your recruitment needs. Start with a free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are transforming their recruitment with AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Recruitment?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how AI can revolutionize your hiring process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Start Free Trial
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRecruitmentAssistantPage;