import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  ChartBar, 
  Database, 
  Zap, 
  Shield, 
  TrendingUp,
  Users,
  Globe,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AIAnalytics = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms that uncover hidden patterns and predict future trends"
    },
    {
      icon: ChartBar,
      title: "Real-time Analytics",
      description: "Live dashboards and instant reporting for immediate decision-making"
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Handle massive datasets with lightning-fast processing and storage"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline operations with intelligent automation and process optimization"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with compliance and data protection standards"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast market trends and customer behavior with 95%+ accuracy"
    }
  ];

  const benefits = [
    "Increase operational efficiency by 40-60%",
    "Reduce costs by 25-35% through automation",
    "Improve decision-making speed by 3x",
    "Boost customer satisfaction by 45%",
    "Generate 2-3x more actionable insights",
    "Achieve 99.9% data accuracy and reliability"
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "Predictive diagnostics, patient outcome analysis, and resource optimization"
    },
    {
      industry: "Finance",
      description: "Fraud detection, risk assessment, and investment portfolio optimization"
    },
    {
      industry: "Retail",
      description: "Customer behavior analysis, inventory management, and demand forecasting"
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization"
    },
    {
      industry: "Marketing",
      description: "Campaign optimization, customer segmentation, and ROI analysis"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      content: "Zion Tech Group's AI Analytics transformed our data strategy. We now make decisions 3x faster with 95% accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Director, Global Retail",
      content: "The predictive analytics capabilities have revolutionized our inventory management and customer experience.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Lead, HealthTech Solutions",
      content: "Their AI-powered insights helped us identify critical patterns in patient data that were previously invisible.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>AI & Analytics Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI & Analytics services. Machine learning, predictive analytics, and data-driven insights." />
        <meta name="keywords" content="AI analytics, machine learning, predictive analytics, data science, business intelligence" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI & Analytics
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Revolution
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence and advanced analytics. 
                Unlock hidden insights, predict future trends, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 Call +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful AI & Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive suite of AI and analytics tools empowers businesses to harness the full potential of their data
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements across all aspects of your operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI & Analytics services are tailored for diverse industries and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real businesses using our AI & Analytics services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the AI revolution and unlock the full potential of your data. 
                Our team of experts is ready to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 +1 (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalytics;