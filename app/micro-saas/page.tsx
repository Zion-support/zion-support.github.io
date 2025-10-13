import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  Brain,
  Globe,
  Target,
  Settings,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Video Generator",
      path: "/zion-ai-video-generator",
      description: "Create professional videos with AI-powered automation",
      price: "Starting at $29/month",
      features: ["AI Script Generation", "Auto Voiceover", "Smart Editing", "Multiple Formats"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Invoice Generator",
      path: "/zion-ai-invoice-generator",
      description: "Automate invoice creation and management",
      price: "Starting at $19/month",
      features: ["Auto Generation", "Payment Tracking", "Tax Calculations", "Multi-Currency"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Customer Insights",
      path: "/zion-ai-customer-insights",
      description: "Deep customer analytics and behavior insights",
      price: "Starting at $49/month",
      features: ["Behavior Analysis", "Predictive Analytics", "Segmentation", "ROI Tracking"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "AI Email Analyzer",
      path: "/zion-ai-email-analyzer",
      description: "Smart email analysis and optimization",
      price: "Starting at $39/month",
      features: ["Sentiment Analysis", "Performance Metrics", "A/B Testing", "Auto Optimization"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Inventory Optimizer",
      path: "/zion-smart-inventory-optimizer",
      description: "AI-powered inventory management",
      price: "Starting at $59/month",
      features: ["Demand Forecasting", "Auto Reordering", "Cost Optimization", "Real-time Tracking"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI Customer Sentiment Tracker",
      path: "/zion-ai-customer-sentiment-tracker",
      description: "Monitor customer satisfaction in real-time",
      price: "Starting at $29/month",
      features: ["Real-time Monitoring", "Sentiment Analysis", "Alert System", "Trend Reports"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Smart Expense Categorizer",
      path: "/zion-smart-expense-categorizer",
      description: "Automated expense tracking and categorization",
      price: "Starting at $19/month",
      features: ["Auto Categorization", "Receipt Scanning", "Tax Preparation", "Budget Tracking"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Voice Assistant Pro",
      path: "/zion-ai-voice-assistant-pro",
      description: "Advanced voice automation for business",
      price: "Starting at $79/month",
      features: ["Voice Commands", "Task Automation", "Integration APIs", "Custom Training"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Reviewer",
      path: "/zion-ai-code-reviewer",
      description: "Automated code review and optimization",
      price: "Starting at $49/month",
      features: ["Code Analysis", "Security Scanning", "Performance Review", "Best Practices"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Social Media Manager",
      path: "/zion-ai-social-media-manager",
      description: "Intelligent social media management",
      price: "Starting at $39/month",
      features: ["Content Generation", "Scheduling", "Analytics", "Engagement Tracking"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Contract Analyzer",
      path: "/zion-ai-contract-analyzer",
      description: "Smart contract analysis and risk assessment",
      price: "Starting at $99/month",
      features: ["Risk Analysis", "Clause Detection", "Compliance Check", "Version Control"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Performance Optimizer",
      path: "/zion-ai-performance-optimizer",
      description: "Automated performance monitoring and optimization",
      price: "Starting at $69/month",
      features: ["Real-time Monitoring", "Auto Optimization", "Performance Reports", "Alert System"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Setup",
      description: "Get started in minutes with our plug-and-play solutions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Native",
      description: "Scalable cloud infrastructure with 99.9% uptime"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions. AI-powered tools for video generation, invoice management, customer insights, and more. Boost your business efficiency today." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, productivity, video generator, invoice generator, customer insights, email analyzer" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <EnhancedSEO 
        title="Micro SAAS Solutions - AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions. AI-powered tools for video generation, invoice management, customer insights, and more."
        keywords="micro saas, business tools, AI solutions, automation, productivity, video generator, invoice generator, customer insights"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FuturisticText 
              text="Micro SAAS Solutions"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful AI-driven micro SAAS tools designed to streamline your business operations 
              and boost productivity across all departments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Try Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                Contact Sales
              </FuturisticButton>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that demand efficiency, security, and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-8 text-center" variant="neon">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered business tools
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {microSaasServices.map((service, index) => (
              <FuturisticCard key={index} className="p-8" variant="animated">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2 text-center">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <FuturisticButton 
                  className="w-full py-3"
                  onClick={() => window.open(`https://ziontechgroup.com${service.path}`, '_blank')}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <FuturisticCard className="p-12 max-w-4xl mx-auto" variant="neon">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions 
              to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                Call +1 (302) 464-0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default MicroSaasPage;