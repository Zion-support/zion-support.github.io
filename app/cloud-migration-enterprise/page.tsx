import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  ArrowRight, 
  Shield, 
  Zap, 
  Database, 
  Server, 
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  BarChart3,
  Settings,
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudMigrationEnterprise = () => {
  const features = [
    {
      title: "Zero-Downtime Migration",
      description: "Seamless migration with zero business disruption using advanced orchestration and real-time synchronization",
      icon: <Zap className="w-8 h-8" />,
      stats: "99.9% uptime"
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Support for AWS, Azure, Google Cloud, and hybrid environments with optimal workload placement",
      icon: <Globe className="w-8 h-8" />,
      stats: "3+ cloud providers"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC2, ISO27001, and GDPR compliance throughout the migration process",
      icon: <Shield className="w-8 h-8" />,
      stats: "100% compliant"
    },
    {
      title: "Cost Optimization",
      description: "Intelligent resource allocation and cost analysis to reduce cloud expenses by up to 40%",
      icon: <TrendingUp className="w-8 h-8" />,
      stats: "40% cost savings"
    },
    {
      title: "Automated Migration",
      description: "AI-powered migration automation with intelligent workload analysis and optimal resource mapping",
      icon: <Settings className="w-8 h-8" />,
      stats: "90% automated"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert support with dedicated migration specialists and real-time monitoring",
      icon: <Users className="w-8 h-8" />,
      stats: "24/7 support"
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure, applications, and dependencies",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Strategy Design",
      description: "Custom migration strategy tailored to your business requirements and compliance needs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Security Setup",
      description: "Implement enterprise-grade security controls and compliance frameworks",
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Migration Execution",
      description: "Automated migration with real-time monitoring and rollback capabilities",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure all systems function correctly in the new environment",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: "06",
      title: "Optimization & Support",
      description: "Continuous optimization and ongoing support for peak performance",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const pricing = [
    {
      name: "Small Business",
      price: "$5,000",
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
      price: "$25,000",
      period: "one-time",
      description: "Comprehensive solution for mid to large enterprises",
      features: [
        "Up to 100 servers",
        "Advanced migration planning",
        "Enterprise security",
        "Priority support",
        "90-day warranty",
        "Advanced monitoring",
        "Cost optimization",
        "Training included"
      ],
      popular: true
    },
    {
      name: "Custom Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solution for complex enterprise environments",
      features: [
        "Unlimited servers",
        "Custom migration strategy",
        "Full compliance suite",
        "24/7 dedicated support",
        "1-year warranty",
        "Real-time monitoring",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduced Infrastructure Costs",
      description: "Save up to 40% on infrastructure costs with optimized cloud resources",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security with advanced threat protection and compliance",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Improved Scalability",
      description: "Auto-scaling capabilities to handle traffic spikes and business growth",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: "Better Performance",
      description: "Faster application performance with optimized cloud infrastructure",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <EnhancedSEO
        title="Cloud Migration Enterprise - Professional Cloud Migration Services"
        description="Expert cloud migration services with zero downtime, multi-cloud support, and enterprise security. Reduce costs by 40% with our comprehensive migration solutions."
        keywords="cloud migration, AWS migration, Azure migration, Google Cloud migration, enterprise cloud, cloud consulting, infrastructure migration"
        canonical="https://ziontechgroup.com/cloud-migration-enterprise"
      />
      
      <ResponsiveContainer className="py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Cloud className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 Cloud Migration Provider</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Migration Enterprise
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional cloud migration services with zero downtime and enterprise-grade security. 
            Migrate to AWS, Azure, or Google Cloud with confidence and reduce costs by up to 40%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={Cloud}
              iconPosition="left"
            >
              Get Free Assessment
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={BarChart3}
              iconPosition="left"
            >
              View Case Studies
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm">Successful Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Enterprise-Grade Migration Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                glowColor={index % 2 === 0 ? 'blue' : 'cyan'}
                hoverEffect={true}
                className="h-full"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400">
                    {feature.stats}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Migration Process */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Proven Migration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Cloud Migration Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free cloud migration assessment and discover how much you can save 
            with our enterprise-grade migration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Get Free Assessment
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Cloud}
              iconPosition="left"
            >
              View Case Studies
            </FuturisticButton>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default CloudMigrationEnterprise;