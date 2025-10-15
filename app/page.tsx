import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Create matrix rain effect
    const createMatrixRain = () => {
      const matrixBg = document.getElementById('matrix-bg');
      if (!matrixBg) return;

      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columns = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-rain';
        column.style.left = `${i * 20}px`;
        column.style.animationDelay = `${Math.random() * 10}s`;
        column.style.animationDuration = `${10 + Math.random() * 10}s`;
        
        let text = '';
        for (let j = 0; j < 50; j++) {
          text += characters[Math.floor(Math.random() * characters.length)] + '\n';
        }
        column.textContent = text;
        
        matrixBg.appendChild(column);
      }
    };

    createMatrixRain();

    // Create floating particles
    const createParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'particles';
      document.body.appendChild(particleContainer);

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${8 + Math.random() * 4}s`;
        particleContainer.appendChild(particle);
      }
    };

    createParticles();

    // Cleanup function
    return () => {
      const matrixBg = document.getElementById('matrix-bg');
      const particles = document.querySelector('.particles');
      if (matrixBg) matrixBg.innerHTML = '';
      if (particles) particles.remove();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-primary relative overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="cyber-grid"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-neon-cyan opacity-20 floating" 
               style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-purple opacity-20 floating" 
               style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 border border-neon-pink opacity-20 floating" 
               style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-60 left-1/2 w-12 h-12 border border-neon-green opacity-20 floating" 
               style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 fade-in-up">
              Welcome to <span className="gradient-text">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-futuristic hover-glow">
                Get Started
              </Link>
              <Link to="/about" className="glass-effect px-8 py-3 rounded-lg hover-lift text-center">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12 fade-in-up">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect p-6 rounded-lg hover-glow hover-lift slide-in-left">
                <h3 className="text-xl font-semibold text-primary mb-4">AI Services</h3>
                <p className="text-secondary mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-neon-cyan hover:text-neon-purple font-medium transition-colors">Learn More →</Link>
              </div>
              <div className="glass-effect p-6 rounded-lg hover-glow hover-lift slide-in-left" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold text-primary mb-4">Cloud Infrastructure</h3>
                <p className="text-secondary mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-neon-cyan hover:text-neon-purple font-medium transition-colors">Learn More →</Link>
              </div>
              <div className="glass-effect p-6 rounded-lg hover-glow hover-lift slide-in-left" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold text-primary mb-4">Digital Transformation</h3>
                <p className="text-secondary mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-neon-cyan hover:text-neon-purple font-medium transition-colors">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold neon-text-pink text-center mb-12 fade-in-up">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-effect p-4 rounded-lg hover-glow hover-lift slide-in-right">
                <h3 className="text-lg font-semibold text-primary mb-2">Content Moderator</h3>
                <p className="text-secondary text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-neon-cyan hover:text-neon-purple text-sm font-medium transition-colors">Try Now →</Link>
              </div>
              <div className="glass-effect p-4 rounded-lg hover-glow hover-lift slide-in-right" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-semibold text-primary mb-2">Sales Predictor</h3>
                <p className="text-secondary text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-neon-cyan hover:text-neon-purple text-sm font-medium transition-colors">Try Now →</Link>
              </div>
              <div className="glass-effect p-4 rounded-lg hover-glow hover-lift slide-in-right" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-semibold text-primary mb-2">Workflow Automator</h3>
                <p className="text-secondary text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-neon-cyan hover:text-neon-purple text-sm font-medium transition-colors">Try Now →</Link>
              </div>
              <div className="glass-effect p-4 rounded-lg hover-glow hover-lift slide-in-right" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg font-semibold text-primary mb-2">Financial Forecaster</h3>
                <p className="text-secondary text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-neon-cyan hover:text-neon-purple text-sm font-medium transition-colors">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="text-neon-cyan hover:text-neon-purple font-medium transition-colors">View All Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;