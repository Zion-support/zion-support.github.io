'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 1,
      name: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and automated decision-making. Built with TensorFlow, PyTorch, and scikit-learn.",
      price: "$2,500/month",
      features: ["Custom model development", "Data preprocessing", "Model training & optimization", "Real-time inference", "A/B testing framework"],
      icon: "🧠",
      category: "Core AI",
      useCases: ["Predictive maintenance", "Customer churn prediction", "Fraud detection", "Demand forecasting"],
      technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"]
    },
    {
      id: 2,
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI. Powered by GPT-4 and custom models.",
      price: "$1,800/month",
      features: ["Text classification", "Sentiment analysis", "Language translation", "Named entity recognition", "Text summarization"],
      icon: "💬",
      category: "Language AI",
      useCases: ["Customer support automation", "Content moderation", "Document analysis", "Multilingual support"],
      technologies: ["OpenAI GPT", "BERT", "spaCy", "NLTK", "Transformers", "Hugging Face"]
    },
    {
      id: 3,
      name: "Computer Vision",
      description: "Image and video analysis using deep learning. Object detection, facial recognition, medical imaging, and quality control automation.",
      price: "$3,200/month",
      features: ["Object detection", "Image classification", "Facial recognition", "Medical imaging", "Quality control"],
      icon: "👁️",
      category: "Visual AI",
      useCases: ["Quality control", "Security systems", "Medical diagnosis", "Autonomous vehicles"],
      technologies: ["OpenCV", "YOLO", "ResNet", "EfficientNet", "TensorFlow", "PyTorch"]
    },
    {
      id: 4,
      name: "Conversational AI & Chatbots",
      description: "Intelligent chatbots and virtual assistants with natural language understanding, context awareness, and multi-platform integration.",
      price: "$1,200/month",
      features: ["Natural conversations", "Context awareness", "Multi-platform support", "Voice integration", "Analytics dashboard"],
      icon: "🤖",
      category: "Conversational AI",
      useCases: ["Customer service", "Sales automation", "Internal helpdesk", "Lead qualification"],
      technologies: ["Dialogflow", "Rasa", "Microsoft Bot Framework", "OpenAI API", "WebRTC"]
    },
    {
      id: 5,
      name: "Predictive Analytics",
      description: "Advanced predictive modeling for business forecasting, risk assessment, and trend analysis. Real-time insights and automated reporting.",
      price: "$2,000/month",
      features: ["Time series forecasting", "Risk modeling", "Trend analysis", "Real-time predictions", "Automated reports"],
      icon: "📈",
      category: "Analytics",
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization", "Market analysis"],
      technologies: ["Python", "R", "Prophet", "ARIMA", "LSTM", "XGBoost"]
    },
    {
      id: 6,
      name: "AI-Powered Automation",
      description: "Intelligent process automation using RPA and AI. Automate complex workflows, document processing, and decision-making tasks.",
      price: "$1,500/month",
      features: ["Workflow automation", "Document processing", "Decision automation", "Exception handling", "Process optimization"],
      icon: "⚙️",
      category: "Automation",
      useCases: ["Invoice processing", "Customer onboarding", "Data entry", "Compliance monitoring"],
      technologies: ["UiPath", "Automation Anywhere", "Python", "Selenium", "Beautiful Soup"]
    },
    {
      id: 7,
      name: "Recommendation Systems",
      description: "Personalized recommendation engines for e-commerce, content platforms, and services. Increase engagement and conversion rates.",
      price: "$1,800/month",
      features: ["Collaborative filtering", "Content-based filtering", "Hybrid approaches", "Real-time recommendations", "A/B testing"],
      icon: "🎯",
      category: "Recommendation",
      useCases: ["E-commerce", "Content platforms", "Music streaming", "Job matching"],
      technologies: ["Apache Spark", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Redis"]
    },
    {
      id: 8,
      name: "AI Data Pipeline",
      description: "End-to-end data processing pipeline with ETL, data validation, feature engineering, and model deployment automation.",
      price: "$2,200/month",
      features: ["ETL pipelines", "Data validation", "Feature engineering", "Model deployment", "Monitoring"],
      icon: "🔄",
      category: "Data Engineering",
      useCases: ["Data preprocessing", "Feature store", "Model training", "Production deployment"],
      technologies: ["Apache Airflow", "Kubernetes", "Docker", "Apache Kafka", "MLflow", "DVC"]
    },
    {
      id: 9,
      name: "AI Security & Compliance",
      description: "AI-powered cybersecurity solutions with threat detection, anomaly detection, and automated incident response.",
      price: "$2,800/month",
      features: ["Threat detection", "Anomaly detection", "Incident response", "Compliance monitoring", "Security analytics"],
      icon: "🔒",
      category: "Security",
      useCases: ["Network security", "Fraud detection", "Compliance", "Risk assessment"],
      technologies: ["TensorFlow", "PyTorch", "ELK Stack", "Splunk", "Wazuh", "Suricata"]
    },
    {
      id: 10,
      name: "AI Consulting & Strategy",
      description: "Strategic AI consulting to identify opportunities, develop roadmaps, and implement AI solutions that drive business value.",
      price: "$300/hour",
      features: ["AI strategy development", "Technology assessment", "Implementation planning", "Team training", "Change management"],
      icon: "💡",
      category: "Consulting",
      useCases: ["Digital transformation", "AI adoption", "Technology selection", "Team building"],
      technologies: ["Strategic frameworks", "AI methodologies", "Best practices", "Industry standards"]
    }
  ];

  const categories = ["All", "Core AI", "Language AI", "Visual AI", "Conversational AI", "Analytics", "Automation", "Recommendation", "Data Engineering", "Security", "Consulting"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState(aiServices);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredServices(aiServices);
    } else {
      setFilteredServices(aiServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Cutting-Edge Artificial Intelligence for Your Business
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our comprehensive AI solutions. From machine learning to computer vision, 
            we deliver enterprise-grade AI services that drive real results and measurable ROI.
          </p>
          
          {/* Contact Info */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Email Us
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className={`quantum-card energy-pulse p-8 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${service.id * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl cyber-scan-line">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400 neon-text">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.category}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AI Capabilities Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Custom AI Models</h3>
              <p className="text-gray-300 text-sm">Tailored AI solutions built specifically for your business needs and data.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-time Processing</h3>
              <p className="text-gray-300 text-sm">Lightning-fast AI inference with sub-second response times for critical applications.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
              <p className="text-gray-300 text-sm">Seamless integration with your existing systems through APIs and SDKs.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Monitoring</h3>
              <p className="text-gray-300 text-sm">Comprehensive monitoring and analytics to ensure optimal AI performance.</p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Proven Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <p className="text-gray-300">Average ROI Increase</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <p className="text-gray-300">Process Automation</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
              <p className="text-gray-300">Annual Savings Generated</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime Guarantee</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI Service Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,500/month</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ 1 AI service</li>
                <li>✓ Basic model training</li>
                <li>✓ Email support</li>
                <li>✓ Standard SLA</li>
                <li>✓ Monthly reports</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="quantum-card energy-pulse p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$3,500/month</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ 3 AI services</li>
                <li>✓ Advanced model training</li>
                <li>✓ Priority support</li>
                <li>✓ 99.9% SLA</li>
                <li>✓ Real-time monitoring</li>
                <li>✓ Custom integrations</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ Unlimited AI services</li>
                <li>✓ Custom model development</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ 99.99% SLA</li>
                <li>✓ Advanced analytics</li>
                <li>✓ White-label solutions</li>
                <li>✓ On-premise deployment</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServicesPage;