import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContentShowcase.css';

const NewContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 1,
      title: "AI-Powered Business Transformation 2027",
      description: "Revolutionary AI solutions that transform your business operations with cutting-edge automation and intelligence.",
      image: "/api/placeholder/600/400",
      category: "AI Solutions",
      readTime: "8 min read",
      featured: true,
      link: "/ai-business-transformation-2027"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough Guide",
      description: "Explore the latest quantum computing innovations and their practical applications in modern enterprises.",
      image: "/api/placeholder/600/400",
      category: "Quantum Tech",
      readTime: "12 min read",
      featured: true,
      link: "/quantum-computing-breakthrough-2027"
    },
    {
      id: 3,
      title: "Autonomous Systems Revolution",
      description: "Discover how autonomous systems are reshaping industries with self-managing infrastructure and operations.",
      image: "/api/placeholder/600/400",
      category: "Automation",
      readTime: "10 min read",
      featured: true,
      link: "/autonomous-systems-revolution-2027"
    },
    {
      id: 4,
      title: "Neural Interface Technology 2027",
      description: "The future of human-computer interaction through advanced neural interface technologies and applications.",
      image: "/api/placeholder/600/400",
      category: "Neural Tech",
      readTime: "15 min read",
      featured: true,
      link: "/neural-interface-2027"
    }
  ];

  const newServices = [
    {
      id: 1,
      name: "AI-Powered Analytics Suite",
      description: "Advanced analytics powered by machine learning algorithms",
      price: "Starting at $299/month",
      features: ["Real-time insights", "Predictive analytics", "Custom dashboards"]
    },
    {
      id: 2,
      name: "Quantum Security Solutions",
      description: "Next-generation security using quantum encryption",
      price: "Starting at $599/month",
      features: ["Quantum encryption", "Zero-trust architecture", "Advanced threat detection"]
    },
    {
      id: 3,
      name: "Autonomous IT Operations",
      description: "Self-healing and self-optimizing IT infrastructure",
      price: "Starting at $799/month",
      features: ["Automated monitoring", "Self-healing systems", "Predictive maintenance"]
    }
  ];

  return (
    <div className={`new-content-showcase-2027 ${isVisible ? 'visible' : ''}`}>
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Revolutionary Content & Services</span>
            <span className="year-badge">2027</span>
          </h1>
          <p className="hero-description">
            Discover the latest innovations in AI, quantum computing, and autonomous systems. 
            Stay ahead with our cutting-edge content and revolutionary services.
          </p>
          <div className="hero-buttons">
            <Link to="/content-hub-2027" className="cta-button primary">
              Explore All Content
            </Link>
            <Link to="/services-2027" className="cta-button secondary">
              View Services
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element ai-icon">🤖</div>
            <div className="element quantum-icon">⚛️</div>
            <div className="element neural-icon">🧠</div>
          </div>
        </div>
      </div>

      {/* Featured Content Carousel */}
      <section className="featured-content-section">
        <div className="section-header">
          <h2>Featured Content</h2>
          <p>Latest insights and breakthroughs in technology</p>
        </div>
        
        <div className="content-carousel">
          <div className="carousel-container">
            {featuredContent.map((content, index) => (
              <div
                key={content.id}
                className={`content-card ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="card-image">
                  <img src={content.image} alt={content.title} />
                  <div className="category-badge">{content.category}</div>
                </div>
                <div className="card-content">
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                  <div className="card-meta">
                    <span className="read-time">{content.readTime}</span>
                    <Link to={content.link} className="read-more">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-indicators">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Services Showcase */}
      <section className="new-services-section">
        <div className="section-header">
          <h2>Revolutionary Services</h2>
          <p>Cutting-edge solutions for modern enterprises</p>
        </div>
        
        <div className="services-grid">
          {newServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <h3>{service.name}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button className="service-cta">Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join thousands of companies already using our revolutionary AI and quantum technologies</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary large">
              Start Your Transformation
            </Link>
            <Link to="/demo" className="cta-button secondary large">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .new-content-showcase-2027 {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .new-content-showcase-2027.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-banner {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .year-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-description {
          font-size: 1.3rem;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .cta-button.primary {
          background: #fff;
          color: #667eea;
        }

        .cta-button.primary:hover {
          background: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border-color: #fff;
        }

        .cta-button.secondary:hover {
          background: #fff;
          color: #667eea;
          transform: translateY(-2px);
        }

        .cta-button.large {
          padding: 20px 40px;
          font-size: 1.1rem;
        }

        .hero-visual {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .floating-elements {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .element {
          position: absolute;
          font-size: 3rem;
          animation: float 6s ease-in-out infinite;
        }

        .ai-icon {
          top: -100px;
          left: -150px;
          animation-delay: 0s;
        }

        .quantum-icon {
          top: -50px;
          right: -100px;
          animation-delay: 2s;
        }

        .neural-icon {
          bottom: -80px;
          left: -80px;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .featured-content-section,
        .new-services-section,
        .cta-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .content-carousel {
          position: relative;
        }

        .carousel-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 30px;
        }

        .content-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 3px solid transparent;
        }

        .content-card:hover,
        .content-card.active {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .content-card:hover .card-image img {
          transform: scale(1.1);
        }

        .category-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(102, 126, 234, 0.9);
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .card-content {
          padding: 25px;
        }

        .card-content h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1e293b;
        }

        .card-content p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .read-time {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .read-more {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .read-more:hover {
          color: #5a67d8;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #e2e8f0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #667eea;
          transform: scale(1.2);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .service-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .service-price {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .service-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .service-features li {
          padding: 8px 0;
          color: #475569;
          font-weight: 500;
        }

        .service-cta {
          width: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 15px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .cta-section {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 20px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 40px;
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

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
            flex-direction: column;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }

          .carousel-container {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default NewContentShowcase2027;