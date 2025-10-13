import { ArrowRight, Calendar, Users, BarChart3, CheckCircle, Star, Zap, Target, TrendingUp, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionProjectManagementPro() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-Powered Planning",
      description: "Intelligent project planning with automatic task breakdown, resource allocation, and timeline optimization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools with chat, file sharing, and seamless team communication"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive project insights with performance metrics, productivity tracking, and predictive analytics"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks, notifications, and approvals to streamline your project management"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that considers team availability, dependencies, and optimal work patterns"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Tracking",
      description: "Accurate time tracking with automatic categorization and detailed reporting for better insights"
    }
  ];

  const projectTypes = [
    "Software Development",
    "Marketing Campaigns",
    "Event Planning",
    "Product Launches",
    "Content Creation",
    "Client Projects",
    "Research & Development",
    "Construction Projects",
    "Design Projects",
    "Training Programs",
    "Process Improvement",
    "Quality Assurance"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$35",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 team members",
        "Unlimited projects",
        "Basic task management",
        "File sharing",
        "Mobile app",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$89",
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Up to 25 team members",
        "Advanced project templates",
        "Time tracking",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom fields",
        "Automation workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "White-label solution",
        "Advanced security",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced reporting",
        "Multi-tenant architecture",
        "Custom workflows"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Amanda Foster",
      company: "Digital Agency",
      role: "Project Manager",
      content: "Zion Project Management Pro has transformed how we manage projects. Our team productivity increased by 250%.",
      rating: 5
    },
    {
      name: "Carlos Mendez",
      company: "Software Company",
      role: "Engineering Manager",
      content: "The AI planning features are incredible. It automatically breaks down complex projects into manageable tasks.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Consulting Firm",
      role: "Operations Director",
      content: "Finally, a project management tool that actually helps us deliver on time and within budget. Game changer!",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Project Management Pro - AI-Powered Project Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your projects with Zion Project Management Pro - the ultimate AI-powered platform for planning, collaboration, and project success."
        />
        <meta
          name="keywords"
          content="project management, team collaboration, project planning, task management, time tracking, project analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Target className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">#1 Project Management Platform 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Zion Project Management Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your projects with AI-powered planning, intelligent collaboration, 
              and comprehensive analytics. Deliver projects on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">250%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
                <div className="text-gray-300">On-Time Delivery Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
                <div className="text-gray-300">Projects Managed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Project Management Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to plan, execute, and deliver successful projects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Project Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Any Project Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From software development to marketing campaigns, we have templates for every project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{type}</span>
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
                Flexible Pricing Plans
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
                      ? 'border-orange-400 bg-gradient-to-br from-orange-500/10 to-red-500/10'
                      : 'border-white/20 hover:border-orange-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
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
                Trusted by Project Managers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what project management professionals say about Zion Project Management Pro
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
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams using Zion Project Management Pro to deliver successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}