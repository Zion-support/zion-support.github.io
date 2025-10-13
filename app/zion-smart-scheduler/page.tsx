import { ArrowRight, Calendar, Clock, Users, Zap, Brain, CheckCircle, Star, Smartphone, Mail, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSmartScheduler() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Scheduling",
      description: "Intelligent scheduling that learns preferences and optimizes meeting times automatically"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Coordination",
      description: "Seamlessly coordinate schedules across teams with smart conflict resolution"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Rescheduling",
      description: "Automatically reschedule meetings when conflicts arise with smart alternatives"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Zone Intelligence",
      description: "Handle multiple time zones with automatic conversion and availability detection"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Calendar Integration",
      description: "Sync with Google Calendar, Outlook, Apple Calendar, and 50+ other platforms"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Availability",
      description: "Find optimal meeting times across different time zones and work schedules"
    }
  ];

  const capabilities = [
    "AI Meeting Optimization",
    "Smart Conflict Resolution",
    "Automatic Time Zone Handling",
    "Recurring Meeting Management",
    "Resource Booking & Management",
    "Meeting Room Scheduling",
    "Buffer Time Management",
    "Travel Time Calculation",
    "Meeting Analytics & Insights",
    "Custom Availability Rules",
    "Integration with 100+ Apps",
    "Mobile & Desktop Apps"
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$12",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Up to 5 calendars",
        "Basic AI scheduling",
        "Email notifications",
        "Mobile app access",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$29",
      period: "/month",
      description: "Most popular for teams",
      features: [
        "Up to 25 team members",
        "Advanced AI scheduling",
        "Team coordination tools",
        "Priority support",
        "Meeting analytics",
        "Custom availability rules",
        "API access",
        "Advanced integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$79",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Full AI optimization",
        "Custom workflows",
        "24/7 phone support",
        "Advanced analytics",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      company: "Marketing Agency",
      role: "Operations Manager",
      content: "Zion Smart Scheduler has eliminated all our scheduling headaches. The AI finds perfect meeting times across our global team effortlessly.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      company: "Consulting Firm",
      role: "Senior Partner",
      content: "The time zone intelligence is incredible. We can schedule meetings with clients worldwide without any confusion or errors.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      company: "Tech Startup",
      role: "CEO",
      content: "Our team productivity has increased by 40% since using Zion Smart Scheduler. No more back-and-forth emails about meeting times.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Smart Scheduler - AI-Powered Meeting Scheduling Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your scheduling with Zion Smart Scheduler - the ultimate AI-powered meeting scheduling platform. Smart conflict resolution, time zone handling, and team coordination."
        />
        <meta
          name="keywords"
          content="meeting scheduler, AI scheduling, calendar management, team coordination, time zone scheduling, meeting optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Calendar className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Scheduling</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Zion Smart Scheduler
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Never waste time on scheduling again. Our AI-powered scheduler finds the perfect meeting times, 
              handles time zones automatically, and eliminates scheduling conflicts across your entire team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-gray-300">Calendar Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15,000+</div>
                <div className="text-gray-300">Meetings Scheduled Daily</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Scheduling Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let AI handle the complexity of scheduling while you focus on what matters most.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Scheduling Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage meetings and schedules efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what teams say about Zion Smart Scheduler
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
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
              Ready to Simplify Your Scheduling?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams using Zion Smart Scheduler to eliminate scheduling headaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}