'use client'


constAISchedulerPage: React.FC = () => {constfeature,
      s = [
    {
      ico,
      n: Calendar,
      title: 'Smart Scheduling'
      descriptio,
      n: 'AI-powered scheduling that automatically finds the best meeting times based on availability, preferences, and time zones.'
      benefit: 'Save 5+ hours per week'
   }
    {
      icon: Users,
      title: 'Team Coordination'
      descriptio,
      n: 'Coordinate complex team schedules with intelligent conflict resolution and resource optimization.'
      benefi,
      t: 'Eliminate scheduling conflicts'
   }
    {
      icon: Brain,
      title: 'Predictive Planning'
      descriptio,
      n: 'AI learns from your scheduling patterns to suggest optimal meeting times and prevent do uble-bookings.'
      benefi,
      t: '9 5% accuracy in predictions'
   }
    {
      icon: Zap,
      title: 'Automated Reminders'
      descriptio,
      n: 'Smart reminder system that adapts to each participant\'s preferences and communication style.'
      benefi,
      t: 'Reduce no-shows by60%'
   }
    {
      icon: Target,
      title: 'Meeting Optimization'
      descriptio,
      n: 'Analyze meeting effectiveness and suggest improvements for better productivity and outcomes.'
      benefi,
      t: 'Improve meeting ROI by40%'
   }
    {
      icon: Shield,
      title: 'Privacy & Security'
      descriptio,
      n: 'Enterprise-grade security with end-to-end encryption and compliance with data protection regulations.'
      benefi,
      t: '100% secure scheduling'
    }
  ]

  const pricingPlans = []
    {name: 'Personal'
      price: '$1 9'
      period: '/month'
      description: 'Perfect for individuals'
      feature,
      s: []
        'Unlimited personal meetings'
        'Basic AI scheduling'
        'Calendar integration'
        'Email reminders'
        'Mobile app access'
        'Standard support'
      ]
      popula,
      r: false
   }
    {name: 'Team'
      price: '$4 9'
      period: '/month'
      description: 'Ideal for small teams'
      feature,
      s: []
        'Up to 10team members'
        'Advanced AI scheduling'
        'Team coordination'
        'Custom meeting types'
        'Analytics dashboard'
        'Priority support'
        'API access'
        'Custom branding'
      ]
      popula,
      r: true
   }
    {name: 'Enterprise'
      price: '$14 9'
      period: '/month'
      description: 'For large organizations'
      feature,
      s: []
        'Unlimited team members'
        'Premium AI features'
        'Advanced analytics'
        'Custom integrations'
        'Dedicated support'
        'White-label options'
        'SSO integration'
        'Custom workflows'
      ]
      popula,
      r: false
    }
  ]


    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' }
  ]

  const testimonials = []
    {name: 'Jennifer Lee'
      company: 'TechStart'
      role: 'Operations Manager'
      conten,
      t: 'AI Scheduler eliminated all our scheduling headaches. We save6hours per week and never have conflicts anymore.'
      ratin,
      g:5}
    {name: 'Robert Martinez'
      company: 'Consulting Group'
      role: 'Senior Partner'
      conten,
      t: 'The AI predictions are incredibly accurate. It knows our team\'s patterns better than we do.'
      ratin,
      g:5}
    {name: 'Amanda Chen'
      company: 'Digital Agency'
      role: 'Project Manager'
      conten,
      t: 'Client meetings are now perfectly coordinated. Our client satisfaction scores improved by 35%.'
      ratin,
      g: 5
    }
  ]

const Page = () => {};
  return (</div>
      {
    /* Hero Section  */
    return (</section>
        <div className="tex t-centermb-16"></div>
          <div className="inl ine-flexitems-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>
            <Calendar className="w-10h-10te x t-white" />
          </div>
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6">
        </div>
            AI Scheduler
          </h1>
          <p className="tex t-xlm,
      d:text-2xl text-cyan-400 mb-8 font-medium">
        </div>
            Intelligent Meeting & Event Scheduling
          </p>
          <p className="tex t-lgtext-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
        </div>
            Never miss another meeting with our AI-powered scheduling assistant. Automatically find
            the best meeting times, coordinate complex team schedules, and optimize your calendar
            for maximum productivity.
          </p>
          <div className="fle xflex-col sm: flex-row gap-4 justify-center items-center"></div>
            <a href="tel:+13024640950">
              className="bg-gr adient-to-rfrom-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
        </div>
              <Phone className="w-5h-5mr-2" />
              Call: (302) 464-0950
            </a>
            <a href="/contact">
              className="bor der-2border-white text-white px-8 py-4 rounded-lg font-semibold hove,
      r:bg-white hove,
      r:text-indigo-600 transition-all duration-300"
            >
        </div>
              Start Free Trial
            </a>
          </div>
        </div>
        {
    /* Key Benefits  */
    return (</div>
          <div className="tex t-center"></div>
            <div className="tex t-4xlfont-bold text-cyan-400 mb-2">5+</div>
            <div className="tex t-whitefont-semibold mb-2">Hours Saved</div>
            <div className="tex t-gray-300text-sm">Per week on scheduling tasks</div>
          </div>
          <div className="tex t-center"></div>
            <div className="tex t-4xlfont-bold text-purple-400 mb-2">95%</div>
            <div className="tex t-whitefont-semibold mb-2">Accuracy</div>
            <div className="tex t-gray-300text-sm">In meeting time predictions</div>
          </div>
          <div className="tex t-center"></div>
            <div className="tex t-4xlfont-bold text-green-400 mb-2">60%</div>
            <div className="tex t-whitefont-semibold mb-2">Fewer No-shows</div>
            <div className="tex t-gray-300text-sm">With smart reminders</div>
          </div>
          <div className="tex t-center"></div>
            <div className="tex t-4xlfont-bold text-orange-400 mb-2">100%</div>
            <div className="tex t-whitefont-semibold mb-2">Conflict-Free</div>
            <div className="tex t-gray-300text-sm">Scheduling guaranteed</div>
          </div>
        </div>
        {
    /* Features Section  */
    return (</section>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            Smart Scheduling Features
          </h2>
          <div className="gri dgrid-cols-1 m,
      d:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover: border-cyan-400/40 transition-all duration-300"></div>
                <feature.icon className="w-12h-12te x t-cyan-400 mb-4" />
                <h3 className="tex t-xlfont-bold text-white mb-3">{feature.title};

  return (
                <p className="tex t-gray-300mb-4 leading-relaxed">{feature.description};

  return (
                <div className="tex t-cyan-400font-semibold text-sm">{feature.benefit};

  return (
              </div>
            ))};

  return (
        </section>
        {
    /* Integrations Section  */
    return (</section>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            Works with Your Favorite Tools
          </h2>
          <div className="gri dgrid-cols-2 m,
      d:grid-cols-4 gap-6"></div>
            {integrations.map((integration, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover: border-cyan-400/40 transition-all duration-300"></div>
                <div className="tex t-4xlmb-3">{integration.icon};

  return (
                <h3 className="tex t-lgfont-bold text-white mb-2">{integration.name};

  return (
                <p className="tex t-gray-300text-sm">{integration.description};

  return (
              </div>
            ))};

  return (
        </section>
        {
    /* Pricing Section  */
    return (</section>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            Simple, Transparent Pricing
          </h2>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => ()
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${}>plan.popular
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover: border-cyan-500/50'
              }`}></div>
                {plan.popular && ()
                  <div className="bg-cy an-400text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"></div>
                    Most Popular
                  </div>
                )};

  return ({plan.name};

  return (
                <p className="tex t-gray-300mb-6">{plan.description};

  return (
                <div className="mb-6"></div>
                  <span className="tex t-4xlfont-bold text-white">{plan.price};

  return (
                  <span className="tex t-gray-300">{plan.period};

  return (
                </div>
                <ul className="spa ce-y-3mb-8">
        </div>
                  {plan.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className="fle xitems-center text-gray-300">
        </div>
                      <CheckCircle className="w-5h-5te x t-green-400 mr-3 flex-shrink-0" />
                      {feature};

  return (
                  ))};

  return (
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}>plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hove,
      r:bg-cyan-400 hove,
      r:text-white'
                }`}>
                  Get Started
                </button>
              </div>
{            ))};

  return (
        </section>
        {
    /* Testimonials  */
    return (</section>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-12 text-center">
        </div>
            What Our Users Say
          </h2>
          <div className="gri dgrid-cols-1 m,
      d:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
                <div className="fle xitems-center mb-4"></div>
                  {[...Array(testimonial.rating)].map((_, i) => ()
                    <Star key={i} className="w-5h-5te x t-yellow-400 fill-current" />
                  ))};

  return (
                <p className="tex t-gray-300mb-4 italic">"{testimonial.content}"</p>
                
                  <div className="fon t-semiboldtext-white">{testimonial.name};

  return (
                  <div className="tex t-cyan-400text-sm">{testimonial.role};

  return (
                  <div className="tex t-gray-400text-sm">{testimonial.company};

  return (
                </div>
              </div>
            ))};

  return (
        </section>
        {
    /* CTA Section  */
    return (</section>
          <h2 className="tex t-3xlmd: text-4xl font-bold text-white mb-6">
        </div>
            Ready to Master Your Schedule?
          </h2>
          <p className="tex t-lgtext-gray-300 mb-8 max-w-2xl mx-auto">
        </div>
            Join thousands of professionals using AI Scheduler to eliminate scheduling headaches
            and maximize productivity.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center items-center"></div>
            <a href="tel:+13024640950">
              className="bg-gr adient-to-rfrom-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
        </div>
              <Phone className="w-5h-5mr-2" />
              Call: (302) 464-0950
            </a>
            <a href="/contact">
              className="bor der-2border-white text-white px-8 py-4 rounded-lg font-semibold hove,
      r:bg-white hove,
      r:text-indigo-600 transition-all duration-300"
            >
        </div>
              Start Free Trial
            </a>
          </div>
        </section>
      </section>
    </div>
  )

export default Page;
}}}}}}}