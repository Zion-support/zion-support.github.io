import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  CloudIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      features: [
        "Custom algorithm development",
        "Real-time model training",
        "A/B testing framework",
        "Model performance monitoring",
        "Automated retraining",
        "Edge deployment"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,500/month",
      benefits: ["95% accuracy", "Real-time processing", "Custom algorithms"],
      useCases: ["Predictive analytics", "Recommendation engines", "Fraud detection"],
      href: "/ai-machine-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Sentiment analysis",
        "Text classification",
        "Language translation",
        "Named entity recognition",
        "Text summarization",
        "Conversational AI"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "Real-time analysis", "High accuracy"],
      useCases: ["Customer support", "Content analysis", "Language translation"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for quality control, security, and enhanced user experiences.",
      icon: EyeIcon,
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "OCR (Optical Character Recognition)",
        "Video analysis",
        "Real-time processing"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["99.5% accuracy", "Real-time processing", "Multi-format support"],
      useCases: ["Quality control", "Security monitoring", "Medical imaging"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven predictions and forecasting using advanced machine learning algorithms and statistical models.",
      icon: ChartBarIcon,
      features: [
        "Time series forecasting",
        "Demand prediction",
        "Risk assessment",
        "Trend analysis",
        "Anomaly detection",
        "Performance optimization"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $3,000/month",
      benefits: ["Accurate forecasts", "Real-time insights", "Custom models"],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline business processes and reduce manual work.",
      icon: CogIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Document processing",
        "Data extraction",
        "Task scheduling",
        "Error handling"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["80% time savings", "Error reduction", "Scalable solutions"],
      useCases: ["Document processing", "Customer service", "Data entry"],
      href: "/ai-automation"
    },
    {
      title: "AI Security Solutions",
      description: "Advanced AI-powered security solutions for threat detection, fraud prevention, and data protection.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Fraud prevention",
        "Anomaly detection",
        "Behavioral analysis",
        "Real-time monitoring",
        "Automated response"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $4,500/month",
      benefits: ["99.9% detection rate", "Real-time alerts", "Automated response"],
      useCases: ["Cybersecurity", "Fraud detection", "Compliance monitoring"],
      href: "/ai-security"
    },
    {
      title: "Cloud AI Services",
      description: "Scalable AI solutions hosted on cloud infrastructure for maximum performance and reliability.",
      icon: CloudIcon,
      features: [
        "Scalable infrastructure",
        "Auto-scaling",
        "Global deployment",
        "High availability",
        "Cost optimization",
        "Performance monitoring"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,800/month",
      benefits: ["99.9% uptime", "Global scale", "Cost effective"],
      useCases: ["Global applications", "High-volume processing", "Multi-region deployment"],
      href: "/ai-cloud-services"
    },
    {
      title: "AI Consulting",
      description: "Expert AI consulting services to help you identify opportunities and implement AI solutions.",
      icon: LightBulbIcon,
      features: [
        "AI strategy development",
        "Technology assessment",
        "Implementation planning",
        "Team training",
        "Best practices",
        "Ongoing support"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $200/hour",
      benefits: ["Expert guidance", "Custom strategies", "Proven methodologies"],
      useCases: ["AI strategy", "Digital transformation", "Team upskilling"],
      href: "/ai-consulting"
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "500+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Processing Speed", value: "10x Faster" },
    { label: "Cost Reduction", value: "40%" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group's AI solutions transformed our data processing capabilities. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, DataFlow Inc",
      content: "The machine learning models they developed for us have improved our accuracy by 95%. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, InnovateLab",
      content: "Their AI automation solutions saved us 60% of our manual processing time. Incredible results!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, NLP, computer vision, and automation services." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, AI automation, predictive analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/portfolio"
                className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve complex business challenges 
              and drive innovation across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-300 mb-4">
                    {service.benefits.join(" • ")}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span
                        key={useCaseIndex}
                        className="px-3 py-1 bg-white/20 text-white text-xs rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-300 hover:text-white font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SparklesIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how our AI solutions can help you achieve your business goals. 
            Get a free consultation with our AI experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/ai-solutions"
              className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;
