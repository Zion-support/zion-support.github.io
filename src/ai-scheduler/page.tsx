'use client'
import { Brain, Target } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, Phone, Calendar } from 'lucide-react'

constAISchedulerPage: React.FC= () =>{constfeatures= [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that automatically finds the best meeting times based on availability, preferences, and time zones.',
      benefit: 'Save 5+ hours per week'
   },
    {icon: Users,
      title: 'Team Coordination',
      description: 'Coordinate complex team schedules with intelligent conflict resolution and resource optimization.',
      benefit: 'Eliminate scheduling conflicts'
   },
    {icon: Brain,
      title: 'Predictive Planning',
      description: 'AI learns from your scheduling patterns to suggest optimal meeting times and prevent do uble-bookings.',
      benefit: '9 5% accuracy in predictions'
   },
    {icon: Zap,
      title: 'Automated Reminders',
      description: 'Smart reminder system that adapts to each participant\'s preferences and communication style.',
      benefit: 'Reduce no-shows by60%'
   },
    {icon: Target,
      title: 'Meeting Optimization',
      description: 'Analyze meeting effectiveness and suggest improvements for better productivity and outcomes.',
      benefit: 'Improve meeting ROI by40%'
   },
    {icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with data protection regulations.',
      benefit: '100% secure scheduling'
    }
  ]

  constpricingPlans= [
    {name: 'Personal',
      price: '$1 9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited personal meetings',
        'Basic AI scheduling',
        'Calendar integration',
        'Email reminders',
        'Mobile app access',
        'Standard support'
      ],
      popular: false;
   },
    {name: 'Team',
      price: '$4 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10team members',
        'Advanced AI scheduling',
        'Team coordination',
        'Custom meeting types',
        'Analytics dashboard',
        'Priority support',
        'API access',
        'Custom branding'
      ],
      popular: true;
   },
    {name: 'Enterprise',
      price: '$14 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Premium AI features',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'SSO integration',
        'Custom workflows'
      ],
      popular: false
    }
  ]

  const integrations = [
    { name: 'Google Calendar', icon: '📅', description: 'Seamless Google integration' },
    { name: 'Outlook', icon: '📧', description: 'Microsoft Office 365' },
    { name: 'Zoom', icon: '🎥', description: 'Video conferencing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Teams', icon: '👥', description: 'Microsoft Teams' },
    { name: 'Calendly', icon: '⏰', description: 'Scheduling platform' },
    { name: 'Salesforce', icon: '💼', description: 'CRM integration' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' }
  ]

  consttestimonials= [
    {name: 'Jennifer Lee',
      company: 'TechStart',
      role: 'Operations Manager',
      content: 'AI Scheduler eliminated all our scheduling headaches. We save6hours per week and never have conflicts anymore.',
      rating:5},
    {name: 'Robert Martinez',
      company: 'Consulting Group',
      role: 'Senior Partner',
      content: 'The AI predictions are incredibly accurate. It knows our team\'s patterns better than we do.',
      rating:5},
    {name: 'Amanda Chen',
      company: 'Digital Agency',
      role: 'Project Manager',
      content: 'Client meetings are now perfectly coordinated. Our client satisfaction scores improved by 35%.',
      rating: 5;
    }
  ]

const Page = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      {/* Hero Section */}
      <section className=&quot;container mx-auto px-4 py-16 pt-24&quot;></section>
        <div className=&quot;text-center mb-16&quot;></div>
          <div className=&quot;inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6&quot;></div>
            <Calendar className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            AI Scheduler
          </h1>
          <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8 font-medium&quot;>
            Intelligent Meeting & Event Scheduling
          </p>
          <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed&quot;>
            Never miss another meeting with our AI-powered scheduling assistant. Automatically find
            the best meeting times, coordinate complex team schedules, and optimize your calendar
            for maximum productivity.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a
              href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Start Free Trial</a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 mb-16&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>5+</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Hours Saved</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Per week on scheduling tasks</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>95%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Accuracy</div>
            <div className=&quot;text-gray-300 text-sm&quot;>In meeting time predictions</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-green-400 mb-2&quot;>60%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Fewer No-shows</div>
            <div className=&quot;text-gray-300 text-sm&quot;>With smart reminders</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-orange-400 mb-2&quot;>100%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Conflict-Free</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Scheduling guaranteed</div>
          </div>
        </div>
        {/* Features Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Smart Scheduling Features
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300&quot;></div>
                <feature.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{feature.description}</p>
                <div className=&quot;text-cyan-400 font-semibold text-sm&quot;>{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Integrations Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Works with Your Favorite Tools
          </h2>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;></div>
            {integrations.map((integration, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300&quot;></div>
                <div className=&quot;text-4xl mb-3&quot;>{integration.icon}</div>
                <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{integration.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{integration.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Simple, Transparent Pricing
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular;
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}></div>
                {plan.popular && (
                  <div className=&quot;bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4&quot;></div>
                    Most Popular
                  </div>
                )}
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>{plan.description}</p>
                <div className=&quot;mb-6&quot;></div>
                  <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                  <span className=&quot;text-gray-300&quot;>{plan.period}</span>
                </div>
                <ul className=&quot;space-y-3 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started</button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            What Our Users Say
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20&quot;></div>
                <div className=&quot;flex items-center mb-4&quot;></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <p className=&quot;text-gray-300 mb-4 italic&quot;>&quot;{testimonial.content}&quot;</p>
                <div></div>
                  <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                  <div className=&quot;text-cyan-400 text-sm&quot;>{testimonial.role}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
            Ready to Master Your Schedule?
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Join thousands of professionals using AI Scheduler to eliminate scheduling headaches
            and maximize productivity.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a
              href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Start Free Trial</a>
          </div>
        </section>
      </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}

export default Page;
