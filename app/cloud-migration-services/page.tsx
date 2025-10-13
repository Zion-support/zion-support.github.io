import { ArrowRight, Cloud, Database, Shield, CheckCircle, Star, Zap, Users, TrendingUp, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudMigrationServices() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Strategy & Planning",
      description: "Comprehensive cloud migration strategy with cost optimization and security assessment"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Migration & Synchronization",
      description: "Seamless data migration with zero downtime and real-time synchronization capabilities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance frameworks (SOC 2, HIPAA, GDPR, ISO 27001)"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Application Modernization",
      description: "Legacy application modernization with microservices architecture and containerization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Training & Support",
      description: "Comprehensive training programs and 24/7 support for your cloud infrastructure"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Continuous cost monitoring and optimization to reduce cloud spending by up to 40%"
    }
  ];

  const cloudProviders = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform",
    "IBM Cloud",
    "Oracle Cloud",
    "Alibaba Cloud",
    "DigitalOcean",
    "Linode",
    "Vultr",
    "Hetzner",
    "Multi-Cloud Solutions",
    "Hybrid Cloud Architecture"
  ];

  const pricingPlans = [
    {
      name: "Assessment & Planning",
      price: "$5,000",
      period: "One-time",
      description: "Perfect for getting started",
      features: [
        "Cloud readiness assessment",
        "Migration strategy planning",
        "Cost analysis & optimization",
        "Security evaluation",
        "Timeline & roadmap",
        "Risk assessment"
      ],
      popular: false
    },
    {
      name: "Full Migration",
      price: "$25,000",
      period: "Project",
      description: "Most popular for complete migration",
      features: [
        "Complete application migration",
        "Data migration & sync",
        "Security implementation",
        "Performance optimization",
        "Team training",
        "3-month support",
        "Monitoring setup",
        "Documentation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Quote",
      description: "For large-scale migrations",
      features: [
        "Multi-cloud strategy",
        "Custom integrations",
        "Dedicated migration team",
        "24/7 support",
        "SLA guarantees",
        "White-label solutions",
        "Ongoing optimization",
        "Account management"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Financial Services",
      role: "IT Director",
      content: "Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. Cost savings of 45% in the first year alone.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Healthcare Solutions",
      role: "CTO",
      content: "The migration was seamless and our applications perform 3x better in the cloud. Outstanding security and compliance implementation.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "VP of Engineering",
      content: "From on-premise to multi-cloud in 6 months. The team's expertise and support throughout the process was exceptional.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Seamless Cloud Transformation | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your infrastructure with our cloud migration services. Seamless migration, cost optimization, and enterprise-grade security for all cloud providers."
        />
        <meta
          name="keywords"
          content="cloud migration, AWS migration, Azure migration, cloud transformation, data migration, cloud optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">#1 Cloud Migration Partner 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Cloud Migration Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your infrastructure with seamless cloud migration services. 
              Zero downtime, cost optimization, and enterprise-grade security across all cloud providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                View Migration Plan
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Successful Migrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
                <div className="text-gray-300">Average Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Zero Downtime Success</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud migration solutions for modern enterprises.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Cloud Providers Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Major Cloud Providers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're certified experts across all leading cloud platforms and hybrid solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cloudProviders.map((provider, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{provider}</span>
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
                Flexible Migration Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that best fits your infrastructure needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Cloud Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what IT directors and CTOs say about our cloud migration services
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
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's assess your current infrastructure and create a custom migration plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Migration Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}