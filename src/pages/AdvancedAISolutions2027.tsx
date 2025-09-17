import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevolutionaryServicesBanner2027 from '../components/RevolutionaryServicesBanner2027';
const AdvancedAISolutions2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const solutions = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our revolutionary AI analytics platform that learns and adapts to your business needs.",
      features: [
        "Real-time data processing and analysis",
        "Predictive modeling and forecasting",
        "Custom dashboard creation",
        "Natural language querying",
        "Automated report generation",
        "Integration with 100+ data sources"
      ],
      benefits: [
        "50% faster decision making",
        "30% increase in operational efficiency",
        "25% reduction in costs",
        "99.9% accuracy in predictions"
      ],
      useCases: [
        "Financial forecasting and risk analysis",
        "Customer behavior prediction",
        "Supply chain optimization",
        "Market trend analysis"
      ],
      pricing: "Starting at $299/month",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Quantum Security Solutions",
      description: "Next-generation security powered by quantum encryption and zero-trust architecture to protect your most sensitive data.",
      features: [
        "Quantum-resistant encryption algorithms",
        "Zero-trust network architecture",
        "Advanced threat detection and response",
        "Multi-factor quantum authentication",
        "Real-time security monitoring",
        "Compliance with international standards"
      ],
      benefits: [
        "99.99% security guarantee",
        "Zero downtime from attacks",
        "Instant threat detection",
        "Future-proof encryption"
      ],
      useCases: [
        "Financial services protection",
        "Healthcare data security",
        "Government communications",
        "Critical infrastructure defense"
      ],
      pricing: "Starting at $599/month",
      icon: "🔐"
    },
    {
      id: 3,
      title: "Autonomous IT Operations",
      description: "Self-healing infrastructure that optimizes itself, prevents downtime, and scales automatically based on demand.",
      features: [
        "Self-healing system architecture",
        "Predictive maintenance algorithms",
        "Auto-scaling based on demand",
        "Intelligent resource allocation",
        "Automated backup and recovery",
        "24/7 AI monitoring and alerting"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "60% reduction in manual tasks",
        "40% faster incident resolution",
        "30% cost savings on infrastructure"
      ],
      useCases: [
        "Cloud infrastructure management",
        "DevOps automation",
        "Database optimization",
        "Network performance tuning"
      ],
      pricing: "Starting at $799/month",
      icon: "⚡"
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Revolutionary human-computer interaction through advanced neural interfaces that understand and respond to human intent.",
      features: [
        "Brain-computer interface protocols",
        "Natural language understanding",
        "Emotion recognition and response",
        "Gesture and voice control",
        "Adaptive learning algorithms",
        "Privacy-first design"
      ],
      benefits: [
        "10x faster user interaction",
        "Hands-free operation",
        "Accessibility for all users",
        "Intuitive user experience"
      ],
      useCases: [
        "Accessibility applications",
        "Gaming and entertainment",
        "Medical rehabilitation",
        "Industrial control systems"
      ],
      pricing: "Starting at $1,299/month",
      icon: "🧠"
    }
  ];
  const tabs = [
    { id: 0, name: "Overview", icon: "📊" },
    { id: 1, name: "Features", icon: "⚡" },
    { id: 2, name: "Benefits", icon: "🎯" },
    { id: 3, name: "Use Cases", icon: "💼" }
  ];
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "Fortune 500",
      content: "The AI-powered business intelligence platform has revolutionized our decision-making process. We've seen a 50% improvement in operational efficiency.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Security Director",
      company: "GlobalBank",
      content: "Quantum security solutions provide unparalleled protection. We've had zero security incidents since implementation.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "IT Operations Manager",
      company: "MediTech Solutions",
      content: "Autonomous IT operations have eliminated 90% of our manual tasks. The system literally runs itself now.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    }
  ];
  return (
    <div className={`advanced-ai-solutions-2027 ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">🚀 2027 EDITION</span>
            <h1 className="hero-title">
              Advanced AI Solutions
              <span className="hero-subtitle">for the Future Enterprise</span>
            </h1>
            <p className="hero-description">
              Discover revolutionary AI technologies that transform your business operations, 
              enhance security, and drive unprecedented growth in the digital age.
            </p>
            <div className="hero-actions">
              <Link to="/demo" className="cta-button primary">
                Watch Demo
              </Link>
              <Link to="/pricing" className="cta-button secondary">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="ai-visualization">
              <div className="neural-network">
                <div className="node active">AI</div>
                <div className="node active">ML</div>
                <div className="node active">DL</div>
                <div className="node active">NLP</div>
                <div className="connection"></div>
                <div className="connection"></div>
                <div className="connection"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Grid */}
      <section className="solutions-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Revolutionary AI Solutions</h2>
            <p>Cutting-edge technologies that redefine what's possible in business automation</p>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card">
                <div className="solution-header">
                  <div className="solution-icon">{solution.icon}</div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                </div>
                <div className="solution-tabs">
                  <div className="tab-buttons">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <span className="tab-icon">{tab.icon}</span>
                        {tab.name}
                      </button>
                    ))}
                  </div>
                  <div className="tab-content">
                    {activeTab === 0 && (
                      <div className="tab-panel">
                        <div className="overview-content">
                          <h4>Solution Overview</h4>
                          <p>{solution.description}</p>
                          <div className="pricing-info">
                            <span className="price">{solution.pricing}</span>
                            <Link to="/contact" className="pricing-cta">
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 1 && (
                      <div className="tab-panel">
                        <div className="features-content">
                          <h4>Key Features</h4>
                          <ul className="features-list">
                            {solution.features.map((feature, index) => (
                              <li key={index}>✓ {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="tab-panel">
                        <div className="benefits-content">
                          <h4>Business Benefits</h4>
                          <ul className="benefits-list">
                            {solution.benefits.map((benefit, index) => (
                              <li key={index}>🎯 {benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeTab === 3 && (
                      <div className="tab-panel">
                        <div className="usecases-content">
                          <h4>Use Cases</h4>
                          <ul className="usecases-list">
                            {solution.useCases.map((useCase, index) => (
                              <li key={index}>💼 {useCase}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Real results from industry leaders</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Banner */}
      <RevolutionaryServicesBanner2027 />
      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join thousands of companies already using our revolutionary AI technologies</p>
            <div className="cta-actions">
              <Link to="/contact" className="cta-button primary large">
                Start Your AI Journey
              </Link>
              <Link to="/demo" className="cta-button secondary large">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .advanced-ai-solutions-2027 {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .advanced-ai-solutions-2027.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-section {
          background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #dc2626 100%);
          color: white;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }
        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hero-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 10px 25px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1rem;
          display: inline-block;
          margin-bottom: 25px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .hero-subtitle {
          font-size: 2.5rem;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-description {
          font-size: 1.4rem;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
        }
        .hero-actions {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }
        .cta-button {
          padding: 20px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          display: inline-block;
        }
        .cta-button.primary {
          background: white;
          color: #1e3a8a;
        }
        .cta-button.primary:hover {
          background: #f8fafc;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        .cta-button.secondary {
          background: transparent;
          color: white;
          border-color: white;
        }
        .cta-button.secondary:hover {
          background: white;
          color: #1e3a8a;
          transform: translateY(-3px);
        }
        .cta-button.large {
          padding: 25px 50px;
          font-size: 1.3rem;
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ai-visualization {
          position: relative;
          width: 400px;
          height: 400px;
        }
        .neural-network {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .node {
          position: absolute;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }
        .node:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
        .node:nth-child(2) { top: 20%; right: 20%; animation-delay: 0.5s; }
        .node:nth-child(3) { bottom: 20%; left: 20%; animation-delay: 1s; }
        .node:nth-child(4) { bottom: 20%; right: 20%; animation-delay: 1.5s; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .connection {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
          animation: flow 3s ease-in-out infinite;
        }
        .connection:nth-child(5) {
          top: 30%;
          left: 30%;
          width: 40%;
          transform: rotate(45deg);
          animation-delay: 0s;
        }
        .connection:nth-child(6) {
          top: 30%;
          right: 30%;
          width: 40%;
          transform: rotate(-45deg);
          animation-delay: 1s;
        }
        .connection:nth-child(7) {
          bottom: 30%;
          left: 50%;
          width: 60%;
          transform: translateX(-50%);
          animation-delay: 2s;
        }
        @keyframes flow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .solutions-section,
        .testimonials-section,
        .final-cta-section {
          padding: 100px 20px;
        }
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .section-header h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #1e3a8a, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-header p {
          font-size: 1.3rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
          gap: 40px;
        }
        .solution-card {
          background: white;
          border-radius: 25px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        .solution-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border-color: #1e3a8a;
        }
        .solution-header {
          margin-bottom: 30px;
        }
        .solution-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .solution-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1e293b;
        }
        .solution-description {
          color: #64748b;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        .solution-tabs {
          margin-top: 30px;
        }
        .tab-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        .tab-button {
          padding: 12px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #64748b;
        }
        .tab-button:hover {
          border-color: #1e3a8a;
          color: #1e3a8a;
        }
        .tab-button.active {
          background: #1e3a8a;
          color: white;
          border-color: #1e3a8a;
        }
        .tab-icon {
          font-size: 1.1rem;
        }
        .tab-content {
          min-height: 200px;
        }
        .tab-panel h4 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1e293b;
        }
        .overview-content .pricing-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 15px;
        }
        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e3a8a;
        }
        .pricing-cta {
          background: #1e3a8a;
          color: white;
          padding: 12px 25px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .pricing-cta:hover {
          background: #1e40af;
          transform: translateY(-2px);
        }
        .features-list,
        .benefits-list,
        .usecases-list {
          list-style: none;
          padding: 0;
        }
        .features-list li,
        .benefits-list li,
        .usecases-list li {
          padding: 12px 0;
          color: #475569;
          font-weight: 600;
          font-size: 1rem;
          border-bottom: 1px solid #f1f5f9;
        }
        .features-list li:last-child,
        .benefits-list li:last-child,
        .usecases-list li:last-child {
          border-bottom: none;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }
        .testimonial-card {
          background: white;
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border-color: #1e3a8a;
        }
        .rating {
          margin-bottom: 20px;
        }
        .star {
          font-size: 1.2rem;
          margin-right: 5px;
        }
        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 30px;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 5px;
        }
        .author-role,
        .author-company {
          color: #64748b;
          font-size: 1rem;
          margin: 2px 0;
        }
        .final-cta-section {
          background: linear-gradient(135deg, #1e3a8a, #7c3aed);
          color: white;
        }
        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .cta-content h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 25px;
        }
        .cta-content p {
          font-size: 1.4rem;
          margin-bottom: 50px;
          opacity: 0.9;
        }
        .cta-actions {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 2rem;
          }
          .solutions-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.8rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
          .tab-buttons {
            flex-direction: column;
          }
          .tab-button {
            justify-content: center;
          }
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
          .ai-visualization {
            width: 300px;
            height: 300px;
          }
          .node {
            width: 60px;
            height: 60px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};


export default AdvancedAISolutions2027;
