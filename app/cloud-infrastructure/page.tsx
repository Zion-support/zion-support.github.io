import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Brain,
  Settings,
  Monitor,
  Activity,
  Target,
  Award,
  Clock,
  Smartphone,
  Users,
  FileText,
  Key,
  Lock,
  BarChart3,
  Cpu,
  HardDrive
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudInfrastructure = () => {
  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Scalable Cloud Architecture",
      description: "Design and implement cloud infrastructure that scales with your business needs using AWS, Azure, and Google Cloud",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Multi-layered security with encryption, access controls, and compliance with industry standards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Availability",
      description: "99.99% uptime with redundant systems, load balancing, and disaster recovery solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Optimization",
      description: "Intelligent resource management and cost optimization using machine learning algorithms",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to the cloud with zero downtime",
      price: "From $5,000"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Managed database services with automated backups, monitoring, and optimization",
      price: "From $299/month"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Implementation",
      description: "Comprehensive security setup including firewalls, VPN, and access controls",
      price: "From $1,500"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and maintenance of your cloud infrastructure",
      price: "From $499/month"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "DevOps Automation",
      description: "CI/CD pipelines, infrastructure as code, and automated deployment processes",
      price: "From $2,000"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Continuous optimization of your cloud resources for better performance and cost efficiency",
      price: "From $999/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Basic cloud infrastructure for small businesses",
      features: [
        "Up to 5 servers",
        "Basic monitoring",
        "Email support",
        "Standard security",
        "Monthly backups",
        "99.9% uptime SLA"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "per month",
      description: "Advanced cloud solutions for growing businesses",
      features: [
        "Up to 20 servers",
        "Advanced monitoring",
        "Priority support",
        "Enhanced security",
        "Daily backups",
        "99.99% uptime SLA",
        "Load balancing",
        "Auto-scaling"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "per month",
      description: "Complete cloud infrastructure for large organizations",
      features: [
        "Unlimited servers",
        "Real-time monitoring",
        "24/7 dedicated support",
        "Enterprise security",
        "Continuous backups",
        "99.99% uptime SLA",
        "Advanced load balancing",
        "Intelligent auto-scaling",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const technologies = [
    { name: "Amazon Web Services", icon: <Cloud className="w-6 h-6" />, status: "Expert" },
    { name: "Microsoft Azure", icon: <Server className="w-6 h-6" />, status: "Expert" },
    { name: "Google Cloud Platform", icon: <Globe className="w-6 h-6" />, status: "Expert" },
    { name: "Docker & Kubernetes", icon: <Settings className="w-6 h-6" />, status: "Expert" },
    { name: "Terraform", icon: <FileText className="w-6 h-6" />, status: "Expert" },
    { name: "Jenkins & GitLab CI", icon: <Zap className="w-6 h-6" />, status: "Expert" }
  ];

  const stats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Activity className="w-6 h-6" /> },
    { number: "50+", label: "Cloud Projects", icon: <Cloud className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "30%", label: "Average Cost Savings", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "FinTech Solutions",
      role: "CTO",
      content: "Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. The performance improvement is remarkable.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Platform",
      role: "VP of Engineering",
      content: "Their cloud optimization reduced our infrastructure costs by 40% while improving performance by 60%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "David Rodriguez",
      company: "Healthcare Tech",
      role: "IT Director",
      content: "The security implementation exceeded our expectations. We passed all compliance audits on the first try.",
      rating: 5,
      avatar: "DR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <EnhancedSEO
        title="Cloud Infrastructure Services - Enterprise Cloud Solutions | Zion Tech Group"
        description="Professional cloud infrastructure services including migration, management, security, and optimization. Scale your business with our cloud expertise."
        keywords="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, cloud management, cloud security, DevOps, cloud optimization"
        canonical="https://ziontechgroup.com/cloud-infrastructure"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Cloud className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Enterprise Cloud Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Cloud Infrastructure
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional cloud infrastructure services including migration, management, security, and optimization. 
            Scale your business with our cloud expertise and enterprise-grade solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Get Cloud Assessment
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Case Studies
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Cloud Infrastructure Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cloud solutions designed to meet your business requirements and scale with your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cloud infrastructure services tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-blue-400 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert knowledge across all major cloud platforms and modern DevOps tools.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{tech.name}</h3>
                <span className="text-green-400 text-xs font-medium">{tech.status}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Infrastructure Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your cloud infrastructure needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cloud infrastructure services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let us help you build a robust, scalable cloud infrastructure that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Cloud className="w-5 h-5" />}
              >
                Get Cloud Assessment
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                size="lg"
                icon={<Smartphone className="w-5 h-5" />}
              >
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CloudInfrastructure;