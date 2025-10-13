import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Server, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Laptop,
  Settings,
  Activity,
  Target,
  Lock,
  BarChart3,
  RefreshCw
} from "lucide-react";

const CloudInfrastructureEnterprise = () => {
  const services = [
    {
      title: "Cloud Migration & Strategy",
      description: "Complete cloud migration services with strategic planning and execution for seamless transition",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Migration planning", "Risk assessment", "Cost optimization", "Performance tuning"]
    },
    {
      title: "Multi-Cloud Architecture",
      description: "Design and implement multi-cloud solutions across AWS, Azure, and Google Cloud platforms",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Cross-cloud integration", "Disaster recovery", "Load balancing", "Cost management"]
    },
    {
      title: "DevOps & Automation",
      description: "Implement CI/CD pipelines, infrastructure as code, and automated deployment processes",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["CI/CD pipelines", "Infrastructure as Code", "Automated testing", "Monitoring & alerting"]
    },
    {
      title: "Cloud Security & Compliance",
      description: "Comprehensive security solutions and compliance management for cloud environments",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Security hardening", "Compliance auditing", "Access management", "Threat monitoring"]
    }
  ];

  const platforms = [
    { name: "Amazon Web Services", icon: "☁️", description: "AWS certified solutions" },
    { name: "Microsoft Azure", icon: "🔷", description: "Azure cloud services" },
    { name: "Google Cloud", icon: "🔵", description: "GCP platform expertise" },
    { name: "Kubernetes", icon: "⚙️", description: "Container orchestration" },
    { name: "Docker", icon: "🐳", description: "Containerization services" },
    { name: "Terraform", icon: "🏗️", description: "Infrastructure as Code" }
  ];

  const pricingPlans = [
    {
      name: "Cloud Starter",
      price: "$4,999",
      period: "/month",
      description: "Basic cloud infrastructure for small businesses",
      features: [
        "Single cloud platform",
        "Basic monitoring",
        "Standard support",
        "Monthly reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Cloud Professional",
      price: "$12,999",
      period: "/month",
      description: "Advanced cloud solutions for growing companies",
      features: [
        "Multi-cloud architecture",
        "Advanced monitoring",
        "Priority support",
        "DevOps automation",
        "Security compliance",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Cloud Enterprise",
      price: "$29,999",
      period: "/month",
      description: "Comprehensive cloud solutions for large organizations",
      features: [
        "Custom cloud architecture",
        "Dedicated team",
        "24/7 support",
        "Full automation",
        "Compliance management",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CTO",
      company: "TechStart Inc.",
      content: "Zion's cloud migration service was exceptional. We reduced our infrastructure costs by 40% while improving performance and scalability.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "Global Enterprises",
      content: "The multi-cloud architecture they designed gives us the flexibility and redundancy we needed. Our uptime is now 99.99%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "DevOps Manager",
      company: "Software Solutions",
      content: "Their DevOps automation implementation reduced our deployment time from hours to minutes. The team is incredibly skilled.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enterprise Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive cloud infrastructure solutions including migration, multi-cloud architecture, DevOps automation, and cloud security for enterprise organizations."
        />
        <meta
          name="keywords"
          content="cloud infrastructure, cloud migration, multi-cloud, DevOps, cloud security, AWS, Azure, Google Cloud"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Enterprise Cloud Infrastructure</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Scale Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Cloud Infrastructure
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with enterprise-grade cloud infrastructure solutions. 
            From migration to automation, we provide comprehensive cloud services for modern organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Get Cloud Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Cloud Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cloud infrastructure solutions designed for enterprise scalability and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Platform Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certified expertise across all major cloud platforms and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs text-gray-400">{platform.description}</p>
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
              Flexible Cloud Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the cloud infrastructure package that fits your organization's needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Cloud Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cloud infrastructure solutions and services.
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
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
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
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a comprehensive cloud assessment and discover how we can optimize your infrastructure for better performance and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Get Cloud Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructureEnterprise;