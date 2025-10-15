
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  ClockIcon,
  UsersIcon,
  CheckCircleIcon,
  
  StarIcon,
  ShieldCheckIcon,
  CloudIcon} from '@heroicons/react/24/outline';

export default function AiProjectManagementProPage() {
  return;
},
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Advanced forecasting to predict project timelines, resource needs, and potential bottlenecks.',
      benefits: ['98% accurate timeline predictions', 'Early risk detection', 'Resource optimization']
    },
    {
      icon: UsersIcon,
      title: 'Smart Team Management',
      description: 'AI-powered team matching, workload balancing, and performance optimization.',
      benefits: ['Optimal team composition', 'Balanced workload distribution', 'Performance insights']
    },
    {
      icon: ClockIcon,
      title: 'Real-time Monitoring',
      description: 'Continuous project monitoring with instant alerts and automated status updates.',
      benefits: ['24/7 project visibility', 'Instant issue detection', 'Automated reporting']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by machine learning.',
      benefits: ['Early risk detection', 'Automated mitigation plans', 'Reduced project failures']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Integration',
      description: 'Seamless integration with popular tools like Slack, Jira, GitHub, and Microsoft Teams.',
      benefits: ['Unified workflow', 'No data silos', 'Enhanced collaboration']
    }
  ];

const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: 'per month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 team members',
        'Basic AI task automation',
        'Project templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 team members',
        'Advanced AI features',
        'Predictive analytics',
        'Custom integrations',
        'Priority support',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: 'per month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security'
      ],
      popular: false
    }
  ];

const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Solutions',
      content: 'AI Project Management Pro has revolutionized how we handle complex projects. The predictive analytics helped us complete our last project 3 weeks ahead of schedule.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'The AI task automation is incredible. It reduced our planning time by 80% and improved our team productivity significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Dynamics',
      content: 'The risk management features have saved us from multiple potential project failures. The early warning system is invaluable.',
      rating: 5
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered project management solution with intelligent task automation, resource optimization, and predictive analytics. Starting at $199/month." />
        <meta name="keywords" content="AI project management, task automation, predictive analytics, team management, project planning, business software" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        {/* Cyber Grid Overlay */}
        
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        {/* Floating Elements */}
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          
        <div className="max-w-4xl mx-auto">
            
          <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text animate-hologram-flicker">
              AI Project Management Pro
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your project management with AI-powered automation, predictive analytics, 
              and intelligent resource optimization. Complete projects faster and more efficiently.
            </p>
            {/* Pricing Badge */}
            
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-8">
              <StarIcon className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Starting at $199/month</span>
            </div>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Powerful AI Features
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to streamline your project management workflow
            </p>
          </div>
          
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/70 transition-all duration-500 hover-lift relative overflow-hidden">
                
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
        <div className="relative z-10">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text group-hover:neon-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
          <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Choose Your Plan
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your team size and requirements
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border transition-all duration-500 hover-lift ${
                plan.popular 
                  ? 'border-cyan-500/70 shadow-lg shadow-cyan-500/25' 
                  : 'border-slate-600/50 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
        <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
          <p className="text-gray-400 mb-4">{plan.description}</p>
                  
        <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 bg-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              What Our Clients Say
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their project management
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover-lift">
                
        <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (



export default function AiProjectManagementProPage() {
  return (
    <>
      <Helmet>
        <title>Ai Project Management Pro Page - Zion Tech Group</title>
        <meta name="description" content="Advanced ai project management pro page solutions powered by AI technology." />
      </Helmet>
      
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered project management solution with intelligent task automation, resource optimization, and predictive analytics. Starting at $199/month." />
        <meta name="keywords" content="AI project management, task automation, predictive analytics, team management, project planning, business software" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        {/* Cyber Grid Overlay */}
        
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        {/* Floating Elements */}
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          
        <div className="max-w-4xl mx-auto">
            
          <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text animate-hologram-flicker">
              AI Project Management Pro
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your project management with AI-powered automation, predictive analytics, 
              and intelligent resource optimization. Complete projects faster and more efficiently.
            </p>
            {/* Pricing Badge */}
            
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-8">
              <StarIcon className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Starting at $199/month</span>
            </div>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Powerful AI Features
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to streamline your project management workflow
            </p>
          </div>
          
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/70 transition-all duration-500 hover-lift relative overflow-hidden">
                
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
        <div className="relative z-10">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text group-hover:neon-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
          <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Choose Your Plan
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your team size and requirements
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border transition-all duration-500 hover-lift ${
                plan.popular 
                  ? 'border-cyan-500/70 shadow-lg shadow-cyan-500/25' 
                  : 'border-slate-600/50 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
        <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
          <p className="text-gray-400 mb-4">{plan.description}</p>
                  
        <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 bg-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              What Our Clients Say
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their project management
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover-lift">
                
        <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (



export default function AiProjectManagementProPage() {
  return (
    <>
      <Helmet>
        <title>Ai Project Management Pro Page - Zion Tech Group</title>
        <meta name="description" content="Advanced ai project management pro page solutions powered by AI technology." />
      </Helmet>
      
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered project management solution with intelligent task automation, resource optimization, and predictive analytics. Starting at $199/month." />
        <meta name="keywords" content="AI project management, task automation, predictive analytics, team management, project planning, business software" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        {/* Cyber Grid Overlay */}
        
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        {/* Floating Elements */}
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          
        <div className="max-w-4xl mx-auto">
            
          <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text animate-hologram-flicker">
              AI Project Management Pro
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your project management with AI-powered automation, predictive analytics, 
              and intelligent resource optimization. Complete projects faster and more efficiently.
            </p>
            {/* Pricing Badge */}
            
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-8">
              <StarIcon className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Starting at $199/month</span>
            </div>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Powerful AI Features
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to streamline your project management workflow
            </p>
          </div>
          
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/70 transition-all duration-500 hover-lift relative overflow-hidden">
                
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
        <div className="relative z-10">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text group-hover:neon-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
          <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Choose Your Plan
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your team size and requirements
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border transition-all duration-500 hover-lift ${
                plan.popular 
                  ? 'border-cyan-500/70 shadow-lg shadow-cyan-500/25' 
                  : 'border-slate-600/50 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
        <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
          <p className="text-gray-400 mb-4">{plan.description}</p>
                  
        <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 bg-slate-900">
        
        <div className="container mx-auto px-4">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              What Our Clients Say
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their project management
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover-lift">
                
        <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
          <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
        <div className="flex items-center">
                  
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    
        <div className="text-white font-semibold">{testimonial.name}</div>
                    
        <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven project management.
          </p>
          
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}