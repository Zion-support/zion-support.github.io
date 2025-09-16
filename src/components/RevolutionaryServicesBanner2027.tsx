import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryServicesBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our revolutionary AI analytics platform",
      icon: "🧠",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
      link: "/ai-business-intelligence"
    },
    {
      id: 2,
      title: "Quantum Security Solutions",
      description: "Next-generation security powered by quantum encryption and zero-trust architecture",
      icon: "🔐",
      features: ["Quantum Encryption", "Zero Trust", "Advanced Threat Detection"],
      link: "/quantum-security"
    },
    {
      id: 3,
      title: "Autonomous IT Operations",
      description: "Self-healing infrastructure that optimizes itself and prevents downtime automatically",
      icon: "⚡",
      features: ["Self-Healing Systems", "Predictive Maintenance", "Auto-Scaling"],
      link: "/autonomous-it"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50%", label: "Cost Reduction" },
    { number: "24/7", label: "AI Monitoring" },
    { number: "100+", label: "Happy Clients" }
  ];

  return (
    <div className={`revolutionary-services-banner-2027 ${isVisible ? 'visible' : ''}`}>
      <div className="banner-container">
        {/* Header Section */}
        <div className="banner-header">
          <div className="header-content">
            <span className="badge">🚀 NEW IN 2027</span>
            <h1 className="main-title">
              Revolutionary AI & Quantum Services
              <span className="highlight">Transforming Businesses</span>
            </h1>
            <p className="subtitle">
              Experience the future of technology with our cutting-edge AI, quantum computing, 
              and autonomous systems that deliver unprecedented results.
            </p>
            <div className="header-actions">
              <Link to="/services" className="cta-primary">
                Explore All Services
              </Link>
              <Link to="/demo" className="cta-secondary">
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="header-visual">
            <div className="tech-grid">
              <div className="tech-item ai">🤖 AI</div>
              <div className="tech-item quantum">⚛️ Quantum</div>
              <div className="tech-item neural">🧠 Neural</div>
              <div className="tech-item autonomous">⚡ Autonomous</div>
            </div>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="services-showcase">
          <div className="services-header">
            <h2>Featured Revolutionary Services</h2>
            <p>Leading-edge solutions that redefine what's possible</p>
          </div>
          
          <div className="services-carousel">
            <div className="service-cards">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`service-card ${index === currentService ? 'active' : ''}`}
                  onClick={() => setCurrentService(index)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Link to={service.link} className="service-link">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="carousel-controls">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`control-dot ${index === currentService ? 'active' : ''}`}
                  onClick={() => setCurrentService(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Revolutionize Your Business?</h2>
            <p>Join the future of technology with our groundbreaking AI and quantum solutions</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Start Your Transformation
              </Link>
              <Link to="/pricing" className="cta-button secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .revolutionary-services-banner-2027 {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .revolutionary-services-banner-2027.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .banner-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .banner-header {
          background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #dc2626 100%);
          color: white;
          padding: 80px 40px;
          border-radius: 30px;
          margin-bottom: 60px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .header-content {
          z-index: 2;
          position: relative;
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-block;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 2.8rem;
        }

        .subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .header-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-primary,
        .cta-secondary,
        .cta-button {
          padding: 18px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          display: inline-block;
        }

        .cta-primary {
          background: white;
          color: #1e3a8a;
        }

        .cta-primary:hover {
          background: #f8fafc;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .cta-secondary {
          background: transparent;
          color: white;
          border-color: white;
        }

        .cta-secondary:hover {
          background: white;
          color: #1e3a8a;
          transform: translateY(-3px);
        }

        .header-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          max-width: 400px;
        }

        .tech-item {
          background: rgba(255, 255, 255, 0.15);
          padding: 25px;
          border-radius: 20px;
          text-align: center;
          font-weight: 700;
          font-size: 1.2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: float 6s ease-in-out infinite;
        }

        .tech-item.ai { animation-delay: 0s; }
        .tech-item.quantum { animation-delay: 1.5s; }
        .tech-item.neural { animation-delay: 3s; }
        .tech-item.autonomous { animation-delay: 4.5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        .services-showcase {
          margin-bottom: 80px;
        }

        .services-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .services-header h2 {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #1e3a8a, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-header p {
          font-size: 1.3rem;
          color: #64748b;
        }

        .services-carousel {
          position: relative;
        }

        .service-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .service-card {
          background: white;
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          cursor: pointer;
          border: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #1e3a8a, #7c3aed, #dc2626);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover,
        .service-card.active {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          border-color: #1e3a8a;
        }

        .service-card:hover::before,
        .service-card.active::before {
          opacity: 1;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .service-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1e293b;
        }

        .service-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .service-features li {
          padding: 8px 0;
          color: #475569;
          font-weight: 600;
          font-size: 1rem;
        }

        .service-link {
          color: #1e3a8a;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #7c3aed;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .control-dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: none;
          background: #e2e8f0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-dot.active {
          background: #1e3a8a;
          transform: scale(1.3);
        }

        .stats-section {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          padding: 60px 40px;
          border-radius: 25px;
          margin-bottom: 60px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e3a8a, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.2rem;
          color: #64748b;
          font-weight: 600;
        }

        .cta-section {
          background: linear-gradient(135deg, #1e3a8a, #7c3aed);
          color: white;
          padding: 80px 40px;
          border-radius: 30px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
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

        @media (max-width: 1024px) {
          .banner-header {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }

          .main-title {
            font-size: 2.8rem;
          }

          .highlight {
            font-size: 2.2rem;
          }

          .tech-grid {
            max-width: 300px;
          }
        }

        @media (max-width: 768px) {
          .banner-header {
            padding: 60px 20px;
          }

          .main-title {
            font-size: 2.2rem;
          }

          .highlight {
            font-size: 1.8rem;
          }

          .header-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }

          .service-cards {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RevolutionaryServicesBanner2027;