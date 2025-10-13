<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function devopsServices() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Devops Services - Zion Tech Group</title>
        <meta name="description" content="Devops Services solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Devops Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Server, Globe, BarChart3, Lock, Database, Clock, Award, Users, Settings, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Cloud, Shield, Monitor, Settings, Database, GitBranch } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Server, Globe, Shield, Monitor, Settings } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2

export default function DevopsservicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Devops Services</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { Settings, ArrowRight, CheckCircle, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

const DevOpsServicesPage = () => {
  const devOpsServices = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "CI/CD Pipeline",
      description: "Build and optimize continuous integration and deployment pipelines",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure using code and automation",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Monitoring & Logging",
      description: "Comprehensive monitoring, logging, and alerting solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with DevOps best practices",
      color: "from-orange-500 to-red-500"
    }
  ];

  const devOpsProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "Evaluate your current development and deployment processes"
    },
    {
      step: "2",
      title: "Strategy",
      description: "Develop a comprehensive DevOps strategy and roadmap"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Implement DevOps tools, processes, and best practices"
    },
    {
      step: "4",
      title: "Optimization",
      description: "Continuously optimize and improve your DevOps practices"
    }
  ];

  const devOpsBenefits = [
    "Faster and more reliable software delivery",
    "Improved collaboration between teams",
    "Reduced deployment risks and downtime",
    "Better scalability and performance",
    "Enhanced security and compliance",
    "Cost optimization and efficiency"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$299",
      period: "month",
      description: "Perfect for small teams",
      features: [
        "Basic CI/CD setup",
        "Standard monitoring",
        "Email support",
        "Basic automation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing teams",
      features: [
        "Advanced CI/CD pipelines",
        "Infrastructure as Code",
        "Priority support",
        "Advanced monitoring",
        "Cloud migration",
        "Security automation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Comprehensive DevOps suite",
        "Dedicated DevOps team",
        "White-label solution",
        "SLA guarantee",
        "Advanced analytics",
        "Custom solutions"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      content: "The DevOps services have transformed our development process. We're delivering faster and more reliably than ever.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Manager",
      company: "CloudScale",
      content: "Excellent DevOps implementation. The team is professional and the results are outstanding.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Engineering Manager",
      company: "StartupHub",
      content: "The CI/CD pipelines have revolutionized our deployment process. We can now deploy with confidence.",
      rating: 5,
      avatar: "EJ"
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Server, Globe, BarChart3, Lock, Database, Clock, Award, Users, Settings, CheckCircle } from 'lucide-react';

export default function DevOpsServicesPage() {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automate your development workflow with continuous integration and deployment pipelines for faster, more reliable releases.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Automated testing", "Code quality checks", "Deployment automation", "Rollback capabilities"]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with tools like Terraform, Ansible, and CloudFormation for consistency and scalability.",
      icon: <Server className="w-6 h-6" />,
      features: ["Terraform automation", "Configuration management", "Version control", "Environment consistency"]
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes, Docker Swarm, or other orchestration platforms.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Kubernetes deployment", "Container management", "Auto-scaling", "Service mesh"]
    },
    {
      title: "Security & Compliance",
      description: "Implement security best practices and ensure compliance with industry standards and regulations.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security scanning", "Compliance monitoring", "Access control", "Audit logging"]
    },
    {
      title: "Monitoring & Observability",
      description: "Set up comprehensive monitoring, logging, and alerting systems for better visibility into your applications.",
      icon: <Monitor className="w-6 h-6" />,
      features: ["Application monitoring", "Infrastructure monitoring", "Log aggregation", "Alert management"]
    },
    {
      title: "Cloud Migration",
      description: "Migrate your applications and infrastructure to the cloud with minimal downtime and maximum efficiency.",
      icon: <Settings className="w-6 h-6" />,
      features: ["Cloud strategy", "Migration planning", "Data migration", "Performance optimization"]
    }
  ];

  const benefits = [
<<<<<<< HEAD
    {
      title: "Faster Deployments",
      description: "Reduce deployment time from hours to minutes with automated pipelines",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Higher Quality",
      description: "Catch issues early with automated testing and quality gates",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Better Collaboration",
      description: "Improve team collaboration with shared tools and processes",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Cost Optimization",
      description: "Optimize infrastructure costs with automated scaling and resource management",
      icon: <Settings className="w-8 h-8" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="DevOps Services - Zion Tech Group | CI/CD, Infrastructure & Automation"
            description="Get comprehensive DevOps services from Zion Tech Group. CI/CD pipelines, infrastructure as code, monitoring, and cloud migration solutions."
            keywords="devops services, ci/cd pipeline, infrastructure as code, monitoring, cloud migration, devops automation"
            canonical="https://ziontechgroup.com/devops-services"
          />
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
=======
    "Faster deployment cycles",
    "Improved reliability and stability",
    "Reduced manual errors",
    "Better resource utilization",
    "Enhanced security posture",
    "Cost optimization"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services for modern software development and deployment." />
      </Helmet>
<<<<<<< HEAD
      
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevOps Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Accelerate your software delivery with our comprehensive DevOps solutions. 
              We help you build, deploy, and scale applications with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Your DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our DevOps Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From CI/CD pipelines to cloud migration, we provide end-to-end DevOps solutions 
              tailored to your business needs.
            </p>
          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
=======

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Settings className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">DevOps Services</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  DevOps Services
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Accelerate your software delivery with comprehensive DevOps services. 
                  From CI/CD to cloud migration, we've got you covered.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#contact"
                    variant="primary"
                    size="lg"
                    icon={Settings}
                    iconPosition="left">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#services"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Learn More
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

<<<<<<< HEAD
            {/* DevOps Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Our DevOps Services
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive DevOps services to accelerate your software delivery
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {devOpsServices.map((service, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {service.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

<<<<<<< HEAD
            {/* DevOps Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our DevOps Process
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A proven 4-step process to ensure successful DevOps implementation
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {devOpsProcess.map((step, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Our Services?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get the most out of your DevOps investment with our expert services
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {devOpsBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your DevOps needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    What Our Clients Say
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Hear from our satisfied clients about their DevOps experience
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Accelerate Your Delivery?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Let's implement comprehensive DevOps services to accelerate your software delivery 
                  and improve your development processes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="mailto:devops@ziontechgroup.com"
                    variant="outline"
                    size="lg"
                    icon={Mail}
                    iconPosition="right">
                    Email Us
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default DevOpsServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <p className="text-lg text-gray-600">
          This page is under development. Please check back later.
        </p>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

const DevOpsServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            DevOps Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your development and deployment processes with our comprehensive DevOps solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-300">
              Set up and manage cloud infrastructure with best practices for scalability and security.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Code className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipelines</h3>
            <p className="text-gray-300">
              Automate your build, test, and deployment processes for faster, more reliable releases.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Monitor className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Logging</h3>
            <p className="text-gray-300">
              Implement comprehensive monitoring and logging solutions for better observability.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Network className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Container Orchestration</h3>
            <p className="text-gray-300">
              Deploy and manage containerized applications with Kubernetes and Docker.
            </p>
=======
      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our DevOps Services?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the benefits of modern DevOps practices with our expert guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
          </div>
        </div>
      </div>
    </div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our DevOps services can help you achieve faster, more reliable software delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Start Your DevOps Journey
            </Link>
            <Link
              to="/consultation"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
export default DevOpsServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
export default DevOpsServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
=======
import React from "react";
import { Helmet } from 'react-helmet-async';

const DevopsServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>DevopsServices - Zion Tech Group</title>
        <meta name="description" content="Advanced devopsservices service coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">DevopsServices</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
};

export default DevopsServices;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
=======

export default function DevOpsServicesPage() {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
