import React from 'react';
import SEOHead from '../../components/SEOHead';
import {
  CheckCircleIcon,
  ClockIcon,
  UsersIcon,
  ChartBarIcon,
  CpuChipIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  CalendarDaysIcon,
  BellIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const TaskManagerProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Task Prioritization",
      description: "Our AI analyzes your tasks and automatically prioritizes them based on deadlines, importance, and your work patterns.",
      icon: CpuChipIcon
    },
    {
      title: "Smart Time Tracking",
      description: "Automatically track time spent on tasks with intelligent categorization and detailed reporting.",
      icon: ClockIcon
    },
    {
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team with real-time updates, comments, and file sharing.",
      icon: UsersIcon
    },
    {
      title: "Advanced Analytics",
      description: "Get insights into your productivity patterns with detailed analytics and performance metrics.",
      icon: ChartBarIcon
    },
    {
      title: "Automated Workflows",
      description: "Create custom workflows that automatically assign tasks, send reminders, and update project status.",
      icon: RocketLaunchIcon
    },
    {
      title: "Integration Hub",
      description: "Connect with 100+ popular tools including Slack, Google Workspace, Microsoft 365, and more.",
      icon: DocumentTextIcon
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$29",
      period: "/month",
      description: "Perfect for freelancers and individual professionals",
      features: [
        "Unlimited personal tasks",
        "AI task prioritization",
        "Time tracking",
        "Basic analytics",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$79",
      period: "/month",
      description: "Ideal for small teams and growing businesses",
      features: [
        "Up to 10 team members",
        "All Solo features",
        "Team collaboration tools",
        "Advanced analytics",
        "Custom workflows",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members",
        "All Team features",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "40% More Productive",
      description: "AI-powered prioritization helps you focus on what matters most"
    },
    {
      title: "50% Less Time on Admin",
      description: "Automated workflows eliminate manual task management overhead"
    },
    {
      title: "Real-time Visibility",
      description: "Always know what your team is working on and project status"
    },
    {
      title: "Data-Driven Insights",
      description: "Make better decisions with detailed productivity analytics"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Creative Agency",
      content: "Task Manager Pro has revolutionized how we manage projects. The AI prioritization is spot-on and saves us hours every week.",
      rating: 5,
      result: "40% increase in productivity"
    },
    {
      name: "Maria Garcia",
      company: "Tech Startup",
      content: "The team collaboration features are incredible. Everyone stays in sync and we never miss deadlines anymore.",
      rating: 5,
      result: "Zero missed deadlines"
    },
    {
      name: "David Kim",
      company: "Consulting Firm",
      content: "The analytics help us understand our team's productivity patterns. We've optimized our workflows based on the insights.",
      rating: 5,
      result: "25% faster project delivery"
    }
  ];

  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "Google Workspace", logo: "📧" },
    { name: "Microsoft 365", logo: "📊" },
    { name: "Trello", logo: "📋" },
    { name: "Asana", logo: "✅" },
    { name: "Jira", logo: "🎯" },
    { name: "GitHub", logo: "💻" },
    { name: "Notion", logo: "📝" }
  ];

  return (
    <>
      <SEOHead
        title="Task Manager Pro - AI-Powered Productivity Tool - Zion Tech Group"
        description="Boost productivity by 40% with Task Manager Pro. AI-powered task prioritization, team collaboration, and advanced analytics. Starting at $29/month."
        keywords="task management, productivity tool, AI task prioritization, team collaboration, project management software"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Task Manager
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The AI-powered task management tool that helps teams boost productivity by 40%. 
            Smart prioritization, seamless collaboration, and powerful analytics in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Task Manager Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your team's productivity with AI-powered task management that actually works.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage tasks efficiently and boost team productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrates with Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect Task Manager Pro with 100+ popular tools to streamline your workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-all duration-300">
                <div className="text-4xl mb-2">{integration.logo}</div>
                <div className="text-white font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and needs. All plans include our core features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-900 rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of teams already using Task Manager Pro to boost their productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  <div className="text-purple-400 text-sm font-medium mt-1">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Team's Productivity?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Start your free 14-day trial today. No credit card required. See how Task Manager Pro can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskManagerProPage;
