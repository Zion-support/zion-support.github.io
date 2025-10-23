<<<<<<< HEAD
'use client'
import React from 'react'
import { CheckCircle, Star, Phone, Calendar } from 'lucide-react'
=======
import { CheckCircle, Star, Phone, Calendar, Check } from 'lucide-react';
'use client';
import {CheckCircle, Phone, Star, Calendar} from 'lucide-react';
import React from 'react';
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4

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
<<<<<<< HEAD
      benefit: '100% secure scheduling'
    }
  ]
=======
      benefit: '10 0% secure scheduling'
   }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

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
      popular: false
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
      popular: true
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
<<<<<<< HEAD
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
=======
   }
  ];

  constintegrations= [
    {name: 'Google Calendar', icon: '📅', description: 'Seamless Google integration'},
    {name: 'Outlook', icon: '📧', description: 'Microsoft Office365'},
    {name: 'Zoom', icon: '🎥', description: 'Video conferencing'},
    {name: 'Slack', icon: '💬', description: 'Team communication'},
    {name: 'Teams', icon: '👥', description: 'Microsoft Teams'},
    {name: 'Calendly', icon: '⏰', description: 'Scheduling platform'},
    {name: 'Salesforce', icon: '💼', description: 'CRM integration'},
    {name: 'HubSpot', icon: '🎯', description: 'Marketing automation'}
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

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
<<<<<<< HEAD
      content: 'Client meetings are now perfectly coordinated. Our client satisfaction scores improved by 35%.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Scheduler
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Meeting & Event Scheduling
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Never miss another meeting with our AI-powered scheduling assistant. Automatically find
            the best meeting times, coordinate complex team schedules, and optimize your calendar
            for maximum productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-white font-semibold mb-2">Hours Saved</div>
            <div className="text-gray-300 text-sm">Per week on scheduling tasks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-white font-semibold mb-2">Accuracy</div>
            <div className="text-gray-300 text-sm">In meeting time predictions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
            <div className="text-white font-semibold mb-2">Fewer No-shows</div>
            <div className="text-gray-300 text-sm">With smart reminders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-2">Conflict-Free</div>
            <div className="text-gray-300 text-sm">Scheduling guaranteed</div>
          </div>
        </div>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Smart Scheduling Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Works with Your Favorite Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Your Schedule?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using AI Scheduler to eliminate scheduling headaches
            and maximize productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </section>
    </div>
  )
}
=======
      content: 'Client meetings are now perfectly coordinated. Our client satisfaction scores improved by35%.',
      rating:5}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">{/* HeroSection */}
    <sectionclassName="container mx-autopx-4py-16pt-24"><divclassName="text-centermb-16"><divclassName="inline-flex items-center justify-center w-20h-20bg-gradient-to-r from-cyan-40 0to-purple-500rounded-fullmb-6"><CalendarclassName="w-10h-10text-white" /></di><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">AI Scheduler
        </h><spanclassName="text-xlmd:text-2 xltext-cyan-400mb-8font-medium"></className="text-xlmd:text-2 xltext-cyan-400mb-8font-medium">Intelligent Meeting & Event Scheduling
        </p><spanclassName="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed"></className="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed">Never miss another meeting with our AI-powered scheduling assistant. Automatically find 
            the best meeting times, coordinate complex team schedules, and optimize your calendar 
            for maximum productivity.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></di>{/* KeyBenefits */}
      <divclassName="grid grid-cols-1 md:grid-cols-4 gap-8mb-16"><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">5+</di><divclassName="text-whitefont-semiboldmb-2">HoursSaved</di><divclassName="text-gray-300text-sm">Per week onschedulingtasks</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-400mb-2">95%</di><divclassName="text-whitefont-semiboldmb-2">Accuracy</di><divclassName="text-gray-300text-sm">In meetingtimepredictions</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-400mb-2">60%</di><divclassName="text-whitefont-semiboldmb-2">FewerNo-shows</di><divclassName="text-gray-300text-sm">Withsmartreminders</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-400mb-2">100%</di><divclassName="text-whitefont-semiboldmb-2">Conflict-Free</di><divclassName="text-gray-300text-sm">Schedulingguaranteed</di></di></di>{/* FeaturesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Smart Scheduling Features
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20 hover:border-cyan-40 0/40transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{feature.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{feature.benefit}</di></di>))}
        </di></sectio>{/* IntegrationsSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Works with Your Favorite Tools
        </h><divclassName="grid grid-cols-2md:grid-cols-4gap-6">{integrations.map((integrationindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20text-centerhover:border-cyan-40 0/40transition-allduration-300"><divclassName="text-4xlmb-3">{integration.icon}</di><h3className="text-lg font-boldtext-whitemb-2">{integration.name}</h><pclassName="text-gray-300text-sm">{integration.description}</p></di>))}
        </di></sectio>{/* PricingSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Simple, Transparent Pricing
        </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
           <divkey={index} className={`bg-slate-80 0/50backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300${
                plan.popular 
                  ? 'border-cyan-400scale-10 5' 
                   : 'border-slate-700 hover:border-cyan-50 0/5 0'
            }`}>{plan.popular && (
                <divclassName="bg-cyan-400text-slate-900px-4 py-2 rounded-full text-sm font-semiboldtext-centermb-4">Most Popular
                </di>)}
              <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-6">{plan.description}</p><divclassName="mb-6"><spanclassName="text-4 xlfont-boldtext-white">{plan.price}</spa><spanclassName="text-gray-300">{plan.period}</spa></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                  </l>))}
              </u>< className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-40 0 to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}></ className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}>Get Started
              </butto></di>))}
        </di></sectio>{/* Testimonials */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">What Our Users Say
        </h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><pclassName="text-gray-300mb-4italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.role}</di><divclassName="text-gray-400text-sm">{testimonial.company}</di></di></di>))}
        </di></sectio>{/* CTASection */}
      <sectionclassName="text-center bg-gradient-to-r from-cyan-50 0/10to-purple-50 0/10rounded-lg p-12border border-cyan-500/20"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Master Your Schedule?
        </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of professionals using AI Scheduler to eliminate scheduling headaches 
            and maximize productivity.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></sectio></sectio></di>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

export default AISchedulerPage