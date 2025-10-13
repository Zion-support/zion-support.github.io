import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cpu, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  TrendingUp,
  Settings,
  Database,
  Cloud,
  Code,
  Smartphone,
  Monitor,
  Server,
  Eye,
  MessageSquare,
  FileText,
  Users
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import LazyImage from '../components/LazyImage';

const AIMachineLearningPage = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom AI Model Development",
      description: "Build tailored machine learning models for your specific business needs and data"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision Solutions",
      description: "Image recognition, object detection, and visual analysis for various applications"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, chatbots, and language understanding systems"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast trends, predict outcomes, and make data-driven decisions with ML models"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Recommendation Systems",
      description: "Personalized recommendations for products, content, and services"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Automation",
      description: "Intelligent automation of business processes using AI and machine learning"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Medical imaging, drug discovery, patient diagnosis, and treatment optimization",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "Finance",
      description: "Fraud detection, algorithmic trading, risk assessment, and credit scoring",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      name: "E-commerce",
      description: "Product recommendations, price optimization, and customer behavior analysis",
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Settings className="w-8 h-8" />
    },
    {
      name: "Transportation",
      description: "Autonomous vehicles, route optimization, and traffic management",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      name: "Marketing",
      description: "Customer segmentation, campaign optimization, and content personalization",
      icon: <Target className="w-8 h-8" />
    }
  ];

  const technologies = [
    {
      name: "Deep Learning",
      description: "Neural networks, CNNs, RNNs, and transformer models",
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: "Machine Learning",
      description: "Supervised, unsupervised, and reinforcement learning algorithms",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "Computer Vision",
      description: "OpenCV, TensorFlow, PyTorch for image and video processing",
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: "NLP",
      description: "BERT, GPT, and other transformer-based language models",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      name: "Cloud AI",
      description: "AWS, Azure, GCP AI services and custom model deployment",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: "Edge AI",
      description: "On-device AI inference and mobile AI applications",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Assessment",
      description: "Analyze your data quality, volume, and structure to determine AI feasibility"
    },
    {
      step: "02",
      title: "Model Design",
      description: "Design and architect the optimal AI solution for your specific use case"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build, train, and validate the AI model using your data and requirements"
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description: "Deploy the model to production and implement continuous monitoring"
    }
  ];

  const pricingPlans = [
    {
      name: "AI Consultation",
      price: "$3,000",
      period: "per project",
      description: "AI feasibility and strategy assessment",
      features: [
        "Data analysis and assessment",
        "AI strategy recommendations",
        "Technology stack selection",
        "Implementation roadmap",
        "ROI projections",
        "30-day support"
      ],
      popular: false
    },
    {
      name: "Custom AI Development",
      price: "$25,000",
      period: "per project",
      description: "End-to-end AI solution development",
      features: [
        "Custom model development",
        "Data preprocessing and cleaning",
        "Model training and validation",
        "API development",
        "Testing and optimization",
        "3-month support",
        "Documentation and training"
      ],
      popular: true
    },
    {
      name: "Enterprise AI Platform",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive AI platform for large organizations",
      features: [
        "Multiple AI models and services",
        "Scalable cloud infrastructure",
        "Real-time data processing",
        "Advanced analytics dashboard",
        "24/7 monitoring and support",
        "Dedicated AI team",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI & Machine Learning Solutions - Custom AI Development & ML Services</title>
        <meta name="description" content="Transform your business with custom AI and machine learning solutions. Computer vision, NLP, predictive analytics, and intelligent automation for modern enterprises." />
        <meta name="keywords" content="AI development, machine learning, artificial intelligence, custom AI, ML solutions, computer vision, NLP, predictive analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-machine-learning" />
      </Helmet>

      <EnhancedSEO 
        title="AI & Machine Learning Solutions - Custom AI Development & ML Services"
        description="Transform your business with custom AI and machine learning solutions. Computer vision, NLP, predictive analytics, and intelligent automation for modern enterprises."
        keywords="AI development, machine learning, artificial intelligence, custom AI, ML solutions, computer vision, NLP, predictive analytics"
        canonical="https://ziontechgroup.com/ai-machine-learning"
      />

      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FuturisticText 
              text="AI & Machine Learning Solutions"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with custom AI and machine learning solutions 
              that drive innovation and competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/consultation', '_blank')}
              >
                Get AI Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                View AI Demo
              </FuturisticButton>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI and machine learning solutions tailored to your business needs
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the latest AI and machine learning technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI solutions across various industries and business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for delivering successful AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible AI Development Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the AI development package that best fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
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
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <FuturisticButton 
                  className="w-full py-3"
                  variant={plan.popular ? 'primary' : 'outline'}
                  onClick={() => window.open('https://ziontechgroup.com/consultation', '_blank')}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <FuturisticCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you build intelligent solutions that transform 
              your business and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/consultation', '_blank')}
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
              >
                Email kleber@ziontechgroup.com
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default AIMachineLearningPage;