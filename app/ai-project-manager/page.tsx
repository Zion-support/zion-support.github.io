import React from 'react'
import SEOHead from '../components/SEOHead'
import { CheckCircle, ArrowRight, Target, Calendar, Users, BarChart3, Clock, AlertCircle, Star, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIProjectManagerPage() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Smart Project Planning',
      description: 'AI-powered project breakdown and timeline estimation with risk assessment'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Management',
      description: 'Automated task assignment based on skills, workload, and availability'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Progress Tracking',
      description: 'Real-time project analytics and predictive completion forecasting'
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Risk Detection',
      description: 'AI identifies potential bottlenecks and suggests mitigation strategies'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Resource Optimization',
      description: 'Smart scheduling and resource allocation for maximum efficiency'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Insights',
      description: 'Detailed analytics on team productivity and project success metrics'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$25',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        'Up to 10 team members',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$65',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        'Unlimited projects',
        'Up to 50 team members',
        'Advanced AI features',
        'Priority support',
        'Custom workflows',
        'Advanced analytics',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$150',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom AI training',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Software Development Co.',
      content: 'The AI project manager has revolutionized how we plan and execute projects. The predictive analytics help us avoid delays before they happen.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      content: 'The smart task assignment feature is incredible. It automatically matches tasks to the right team members based on their skills and workload.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'James Wilson',
      company: 'Construction Firm',
      content: 'The risk detection feature has saved us thousands of dollars by identifying potential issues early. Highly recommended for any project-based business.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const stats = [
    { number: '40%', label: 'Faster Project Completion', icon: <Zap className="w-6 h-6" /> },
    { number: '60%', label: 'Reduced Project Delays', icon: <Clock className="w-6 h-6" /> },
    { number: '85%', label: 'User Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <CheckCircle className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOHead 
        title="AI Project Manager - Zion Tech Group"
        description="Streamline your project management with AI-powered planning, team coordination, and predictive analytics. Complete projects faster and more efficiently."
        keywords="AI project manager, project management, team coordination, project planning, productivity, business automation"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-300 text-sm font-medium">AI-Powered Project Intelligence</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Project Manager</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
            Streamline your project management with AI-powered planning, team coordination, and predictive analytics. 
            Complete projects faster, more efficiently, and with fewer delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas-services"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 group-hover:from-indigo-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Everything you need to manage projects like a pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose the plan that fits your team size and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:scale-105 ${
                plan.popular ? 'border-indigo-400/50 ring-2 ring-indigo-400/20' : 'border-white/20 hover:border-indigo-400/50'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105'
                      : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from teams that have transformed their project management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Start your free trial today and experience the future of efficient project management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/micro-saas-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View All Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}