import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Database, 
  Lock, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Target,
  Rocket,
  Cpu,
  Network,
  Server
} from 'lucide-react';

const HomePage: React.FC = () => {
  const microSaasServices = [
    {
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation for blogs, social media, and marketing materials",
      price: "$29/month",
      features: ["Unlimited content generation", "Multi-language support", "SEO optimization", "Brand voice customization"],
      icon: Brain,
      link: "/ai-content-generator"
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time business intelligence and data visualization platform",
      price: "$49/month",
      features: ["Custom dashboards", "Real-time data", "Automated reports", "Team collaboration"],
      icon: BarChart3,
      link: "/ai-analytics-dashboard"
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing for customer service",
      price: "$39/month",
      features: ["24/7 availability", "Multi-channel support", "Sentiment analysis", "Easy integration"],
      icon: Users,
      link: "/ai-customer-support-bot"
    },
    {
      name: "Automated Testing Suite",
      description: "AI-powered software testing and quality assurance automation",
      price: "$59/month",
      features: ["Automated test generation", "Cross-browser testing", "Performance monitoring", "CI/CD integration"],
      icon: CheckCircle,
      link: "/ai-automated-testing"
    },
    {
      name: "Smart Invoice Manager",
      description: "AI-driven invoice processing and financial management system",
      price: "$25/month",
      features: ["OCR invoice scanning", "Automated categorization", "Payment tracking", "Tax compliance"],
      icon: Smartphone,
      link: "/ai-smart-invoice"
    },
    {
      name: "AI Project Manager",
      description: "Intelligent project management with predictive analytics and resource optimization",
      price: "$45/month",
      features: ["Task automation", "Resource planning", "Risk assessment", "Progress tracking"],
      icon: Target,
      link: "/ai-project-manager"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Solutions",
      description: "Scalable cloud architecture design and implementation",
      price: "Starting at $2,500/month",
      features: ["AWS/Azure/GCP expertise", "Auto-scaling", "Disaster recovery", "24/7 monitoring"],
      icon: Cloud,
      link: "/cloud-infrastructure"
    },
    {
      name: "Cybersecurity Suite",
      description: "Comprehensive security solutions for enterprise protection",
      price: "Starting at $1,800/month",
      features: ["Threat detection", "Vulnerability assessment", "Compliance management", "Incident response"],
      icon: Shield,
      link: "/cybersecurity"
    },
    {
      name: "Digital Transformation",
      description: "Complete business digitization and modernization services",
      price: "Starting at $5,000/month",
      features: ["Process automation", "Legacy system migration", "Change management", "Training programs"],
      icon: Zap,
      link: "/digital-transformation"
    },
    {
      name: "5G Network Solutions",
      description: "Next-generation network infrastructure and IoT connectivity",
      price: "Starting at $3,500/month",
      features: ["5G deployment", "IoT integration", "Edge computing", "Network optimization"],
      icon: Network,
      link: "/5g-solutions"
    }
  ];

  const aiServices = [
    {
      name: "Machine Learning Platform",
      description: "Custom ML model development and deployment services",
      price: "Starting at $3,000/month",
      features: ["Custom model training", "Data preprocessing", "Model deployment", "Performance monitoring"],
      icon: Cpu,
      link: "/ai-ml-platform"
    },
    {
      name: "Computer Vision Solutions",
      description: "Advanced image and video analysis for various industries",
      price: "Starting at $2,200/month",
      features: ["Object detection", "Facial recognition", "Quality inspection", "Real-time processing"],
      icon: Globe,
      link: "/ai-computer-vision"
    },
    {
      name: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding services",
      price: "Starting at $1,800/month",
      features: ["Text classification", "Sentiment analysis", "Language translation", "Chatbot development"],
      icon: Brain,
      link: "/ai-nlp"
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven insights and forecasting for business optimization",
      price: "Starting at $2,500/month",
      features: ["Demand forecasting", "Risk assessment", "Customer behavior analysis", "Market trends"],
      icon: TrendingUp,
      link: "/ai-predictive-analytics"
    }
  ];

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS Services"
        description="Leading provider of AI solutions, IT services, and micro SAAS applications. Transform your business with cutting-edge technology and innovative solutions."
        keywords="AI solutions, IT services, micro SAAS, cloud computing, cybersecurity, digital transformation, machine learning, business automation"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading provider of innovative micro SAAS services, AI solutions, and comprehensive IT services. 
              Accelerate your digital transformation with cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a 
              href="/demo" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              View Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Micro SAAS Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS applications designed to solve specific business challenges 
              and boost productivity across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-cyan-400 font-semibold">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure, enhance security, 
              and drive digital transformation across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 hover:from-slate-700 hover:to-slate-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-lg mr-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-purple-400 font-semibold text-lg">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link}
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions to automate processes, 
              gain insights, and unlock new possibilities for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-8 hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-lg mr-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link}
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Explore Solution <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with 10+ years of experience in AI and IT solutions.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Rapid development and deployment with agile methodologies and modern tools.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee and 24/7 monitoring.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">500+ successful projects with measurable ROI and client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get started with our AI and IT solutions today. Contact us for a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;