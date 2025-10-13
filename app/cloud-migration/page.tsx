import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Award,
  Sparkles,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  Database,
  Server,
  Network,
  Lock,
  Download,
  Upload,
  Settings,
  Activity,
  TrendingUp,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Target,
  Heart,
  AlertTriangle,
  CheckSquare
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudMigrationPage = () => {
  const features = [
    {
      title: "Zero-Downtime Migration",
      description: "Migrate your applications and data without any service interruption using advanced migration strategies",
      icon: <Activity className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Design and implement hybrid and multi-cloud architectures for optimal performance and cost",
      icon: <Globe className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Security & Compliance",
      description: "Ensure your cloud infrastructure meets all security standards and regulatory requirements",
      icon: <Shield className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Cost Optimization",
      description: "Optimize cloud costs with automated scaling, reserved instances, and resource management",
      icon: <DollarSign className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Performance Monitoring",
      description: "24/7 monitoring and optimization of your cloud infrastructure performance",
      icon: <BarChart3 className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Disaster Recovery",
      description: "Implement comprehensive backup and disaster recovery solutions for business continuity",
      icon: <AlertTriangle className="w-6 h-6" />,
      price: "Included"
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses with basic cloud needs",
      features: [
        "Up to 10 servers",
        "Basic migration planning",
        "Standard security setup",
        "Email support",
        "30-day warranty",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "one-time",
      description: "Ideal for medium to large enterprises",
      features: [
        "Up to 100 servers",
        "Comprehensive migration strategy",
        "Advanced security & compliance",
        "Priority support",
        "90-day warranty",
        "Advanced monitoring",
        "Cost optimization",
        "Disaster recovery setup"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      price: "Contact Us",
      period: "",
      description: "Tailored solutions for complex enterprise needs",
      features: [
        "Unlimited servers",
        "Custom architecture design",
        "Full compliance audit",
        "24/7 dedicated support",
        "1-year warranty",
        "Custom monitoring",
        "White-glove service",
        "Ongoing optimization"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Financial Services Inc",
      role: "CTO",
      content: "Zion Tech Group's cloud migration service was exceptional. We achieved 99.9% uptime during migration and reduced our infrastructure costs by 40%.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Sarah Williams",
      company: "E-commerce Solutions",
      role: "IT Director",
      content: "The zero-downtime migration was exactly what we needed. Our customers didn't even notice we were migrating to the cloud.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Rodriguez",
      company: "Healthcare Systems",
      role: "VP of Technology",
      content: "The security and compliance implementation was flawless. We passed our audit with flying colors and improved our security posture significantly.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce infrastructure costs by up to 60% with cloud optimization",
      icon: <DollarSign className="w-8 h-8" />,
      improvement: "60% cost savings"
    },
    {
      title: "Improved Performance",
      description: "Enhance application performance with cloud-native architectures",
      icon: <TrendingUp className="w-8 h-8" />,
      improvement: "3x faster performance"
    },
    {
      title: "Enhanced Security",
      description: "Strengthen security posture with enterprise-grade cloud security",
      icon: <Shield className="w-8 h-8" />,
      improvement: "99.9% security uptime"
    },
    {
      title: "Scalability",
      description: "Scale resources automatically based on demand",
      icon: <Activity className="w-8 h-8" />,
      improvement: "Unlimited scaling"
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure and migration requirements",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design optimal cloud architecture tailored to your business needs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Execute migration with zero downtime and minimal risk",
      icon: <Upload className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous optimization and ongoing support for your cloud infrastructure",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      description: "Comprehensive cloud services with global reach",
      icon: <Cloud className="w-6 h-6" />,
      features: ["EC2", "S3", "RDS", "Lambda", "VPC"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud platform with hybrid capabilities",
      icon: <Server className="w-6 h-6" />,
      features: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "Virtual Network"]
    },
    {
      name: "Google Cloud Platform",
      description: "Advanced AI and machine learning cloud services",
      icon: <Database className="w-6 h-6" />,
      features: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "VPC"]
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategies for optimal performance",
      icon: <Globe className="w-6 h-6" />,
      features: ["Cross-cloud", "Hybrid", "Disaster Recovery", "Cost Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Cloud Migration Services - Expert Cloud Infrastructure Migration | Zion Tech Group"
        description="Professional cloud migration services with zero downtime. Migrate to AWS, Azure, GCP with expert planning and execution. Starting at $2,999. Free consultation available."
        keywords="cloud migration, AWS migration, Azure migration, GCP migration, cloud infrastructure, cloud consulting, cloud services, IT migration"
        canonical="https://ziontechgroup.com/cloud-migration"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert Cloud Migration</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cloud Migration Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Migrate your infrastructure to the cloud with zero downtime and maximum efficiency. 
            Our expert team ensures seamless transition to AWS, Azure, GCP, or multi-cloud environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Get Free Consultation
            </FuturisticButton>
            <FuturisticButton
              href="#contact"
              variant="outline"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
            >
              Contact Us
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Successful Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime During Migration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Cloud Migration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional cloud migration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-green-400 font-semibold">{benefit.improvement}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process for successful cloud migration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert migration services for all major cloud providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    {provider.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{provider.description}</p>
                <div className="space-y-2">
                  {provider.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for a successful cloud migration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-cyan-400 text-sm">{feature.price}</p>
                  </div>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cloud migration services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a free consultation and discover how cloud migration can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Get Free Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
            >
              Call +1 302 464 0950
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free consultation • ✓ No obligation • ✓ Expert guidance</p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CloudMigrationPage;