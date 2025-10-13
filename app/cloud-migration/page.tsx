import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock,
  Shield,
  Zap,
  BarChart3,
  Smartphone,
  Globe,
  Database,
  Server
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudMigrationPage = () => {
  const features = [
    {
      title: "Zero-Downtime Migration",
      description: "Migrate your applications and data to the cloud with zero downtime using advanced migration strategies",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Design and implement multi-cloud architectures for optimal performance, cost, and redundancy",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security-First Approach",
      description: "Ensure enterprise-grade security with encryption, compliance, and advanced threat protection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs by up to 40% with intelligent resource allocation and automated scaling",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring and optimization of your cloud infrastructure with real-time alerts",
      icon: <Clock className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Legacy System Integration",
      description: "Seamlessly integrate legacy systems with modern cloud infrastructure for hybrid environments",
      icon: <Database className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure, applications, and data to create a migration roadmap",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Strategy Design",
      description: "Design optimal cloud architecture and migration strategy tailored to your business requirements",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Execute the migration with minimal downtime using proven methodologies and best practices",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure all systems work correctly in the new cloud environment",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Fine-tune performance, security, and costs for optimal cloud operations",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "24/7 monitoring, maintenance, and support to ensure continued optimal performance",
      icon: <Clock className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "Starting at $2,999",
      description: "Perfect for small businesses with basic cloud needs",
      features: [
        "Up to 10 servers migration",
        "Basic cloud architecture",
        "Standard security measures",
        "Email support",
        "30-day post-migration support",
        "Migration documentation",
        "Basic monitoring setup"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "Starting at $9,999",
      description: "Ideal for medium to large enterprises",
      features: [
        "Up to 100 servers migration",
        "Advanced cloud architecture",
        "Enterprise security & compliance",
        "Priority support",
        "90-day post-migration support",
        "Comprehensive documentation",
        "Advanced monitoring & alerting",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      price: "Contact Us",
      description: "Tailored solutions for complex requirements",
      features: [
        "Unlimited servers migration",
        "Custom cloud architecture",
        "Full compliance & security",
        "Dedicated project manager",
        "24/7 phone support",
        "Custom integrations",
        "White-label solutions",
        "Ongoing managed services"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Costs",
      description: "Lower infrastructure costs by up to 40% with cloud optimization",
      icon: <BarChart3 className="w-6 h-6" />,
      value: "40%"
    },
    {
      title: "Improve Performance",
      description: "Boost application performance by 60% with cloud infrastructure",
      icon: <Zap className="w-6 h-6" />,
      value: "60%"
    },
    {
      title: "Enhance Security",
      description: "Strengthen security posture with enterprise-grade cloud protection",
      icon: <Shield className="w-6 h-6" />,
      value: "99.9%"
    },
    {
      title: "Increase Scalability",
      description: "Scale resources instantly based on demand and usage patterns",
      icon: <Globe className="w-6 h-6" />,
      value: "∞"
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "Financial Services Inc.",
      role: "CTO",
      content: "The cloud migration was flawless. We reduced our infrastructure costs by 45% and improved performance significantly. Highly recommended!",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Maria Rodriguez",
      company: "E-commerce Solutions",
      role: "IT Director",
      content: "Zion Tech Group made our complex migration seamless. The zero-downtime approach was exactly what we needed for our business continuity.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Wilson",
      company: "Healthcare Systems",
      role: "VP of Technology",
      content: "The security-first approach and compliance focus gave us confidence throughout the migration. Our data is now more secure than ever.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Cloud Migration Services - Expert Cloud Migration | Zion Tech Group"
        description="Expert cloud migration services with zero downtime. Reduce costs by 40%, improve performance by 60%, and enhance security with our proven migration strategies."
        keywords="cloud migration, cloud services, AWS migration, Azure migration, Google Cloud, infrastructure migration, cloud consulting"
        canonical="https://ziontechgroup.com/cloud-migration"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert Cloud Migration Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cloud Migration Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Migrate to the cloud with confidence. Our expert team provides zero-downtime migrations, 
            reduces costs by 40%, improves performance by 60%, and ensures enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free Assessment
            </FuturisticButton>
            <FuturisticButton
              href="#process"
              variant="outline"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              View Process
            </FuturisticButton>
          </div>
          
          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{benefit.title}</div>
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
              Comprehensive Migration Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our cloud migration services cover every aspect of your journey to the cloud, from planning to ongoing optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
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

      {/* Migration Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 6-step process that ensures successful cloud migration with minimal risk and maximum benefit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{step.step}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that best fits your organization's size and requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-white">{plan.price}</div>
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
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cloud migration services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a free cloud migration assessment and discover how we can help you achieve your cloud goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free Assessment
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CloudMigrationPage;