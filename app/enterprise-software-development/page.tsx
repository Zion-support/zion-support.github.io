import { ArrowRight, Code, Database, Shield, CheckCircle, Star, Zap, Users, TrendingUp, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function EnterpriseSoftwareDevelopment() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "Bespoke enterprise applications built with modern technologies and best practices"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design & Optimization",
      description: "Scalable database architectures with performance tuning and data migration services"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-First Development",
      description: "Enterprise-grade security with OWASP compliance, encryption, and vulnerability testing"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "API Development & Integration",
      description: "RESTful APIs, microservices architecture, and seamless third-party integrations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Augmentation",
      description: "Dedicated development teams with senior engineers and project managers"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines, cloud deployment, monitoring, and maintenance services"
    }
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "Java & Spring Boot",
    "C# & .NET Core",
    "PostgreSQL & MongoDB",
    "AWS & Azure",
    "Docker & Kubernetes",
    "Redis & Elasticsearch",
    "GraphQL & REST APIs",
    "Microservices Architecture",
    "Serverless Computing"
  ];

  const pricingPlans = [
    {
      name: "Project-Based",
      price: "Custom",
      period: "Quote",
      description: "Perfect for specific projects",
      features: [
        "Fixed-price projects",
        "Detailed project planning",
        "Regular progress updates",
        "Quality assurance testing",
        "Documentation & training",
        "3-month warranty"
      ],
      popular: false
    },
    {
      name: "Dedicated Team",
      price: "$15,000",
      period: "/month",
      description: "Most popular for ongoing development",
      features: [
        "Dedicated development team",
        "Full-time project manager",
        "Unlimited revisions",
        "Priority support",
        "Monthly reporting",
        "Flexible scaling",
        "Code ownership",
        "Long-term partnership"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Quote",
      description: "For large-scale initiatives",
      features: [
        "Multi-team coordination",
        "Enterprise architecture",
        "24/7 support",
        "SLA guarantees",
        "Custom integrations",
        "White-label solutions",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Financial Services Corp",
      role: "CTO",
      content: "Zion Tech Group delivered our enterprise platform 30% faster than expected. The quality and security standards exceeded our requirements.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Healthcare Solutions",
      role: "VP of Engineering",
      content: "Their dedicated team approach has been game-changing. We've scaled from 2 to 50 developers seamlessly with their support.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      company: "E-commerce Platform",
      role: "Product Director",
      content: "The microservices architecture they designed handles 10x our original traffic. Outstanding technical expertise and delivery.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Software Development - Custom Business Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with custom enterprise software development. Scalable applications, microservices architecture, and dedicated development teams."
        />
        <meta
          name="keywords"
          content="enterprise software development, custom software, business applications, microservices, API development, dedicated teams"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-6">
              <Code className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-400 text-sm font-medium">#1 Enterprise Development 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Enterprise Software Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with custom enterprise software solutions. 
              Scalable applications, microservices architecture, and dedicated development teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end software development solutions for modern enterprises.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Modern Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies to build scalable, secure, and maintainable solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{tech}</span>
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
                Flexible Engagement Models
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the engagement model that best fits your project needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-teal-400 bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-teal-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
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
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what CTOs and engineering leaders say about our development services
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
              Ready to Build Your Enterprise Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create a custom development plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}