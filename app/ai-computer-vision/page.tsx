import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const AIComputerVisionPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Computer Vision Solutions - Zion Tech Group"
        description="Advanced computer vision and image processing solutions using deep learning and neural networks. Transform visual data into actionable insights."
        keywords="computer vision, image processing, object detection, facial recognition, OCR, video analytics, AI vision"
        canonicalUrl="https://ziontechgroup.com/ai-computer-vision"
      />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="futuristic-heading gradient-text mb-6">
              AI Computer Vision Solutions
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Transform visual data into actionable insights with our advanced computer vision 
              solutions powered by deep learning and neural networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="futuristic-btn">
                Get Started
              </Link>
              <Link to="/pricing" className="futuristic-btn glass-morphism border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Key Features</h2>
            <div className="futuristic-grid">
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Object Detection & Recognition</h3>
                <p className="futuristic-text">
                  Identify and classify objects in images and videos with high accuracy using state-of-the-art algorithms.
                </p>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Facial Recognition</h3>
                <p className="futuristic-text">
                  Advanced facial recognition systems for security, authentication, and user identification.
                </p>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Image Classification</h3>
                <p className="futuristic-text">
                  Automatically categorize and tag images based on content, style, and context.
                </p>
              </div>
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-green mb-4">OCR Technology</h3>
                <p className="futuristic-text">
                  Extract text from images and documents with high accuracy, supporting multiple languages.
                </p>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-cyan mb-4">Video Analytics</h3>
                <p className="futuristic-text">
                  Real-time video processing and analysis for surveillance, monitoring, and insights.
                </p>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-orange mb-4">Edge Computing</h3>
                <p className="futuristic-text">
                  Deploy computer vision models on edge devices for real-time processing and reduced latency.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Use Cases</h2>
            <div className="futuristic-grid-2">
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Manufacturing Quality Control</h3>
                <p className="futuristic-text">
                  Automated defect detection and quality assurance in production lines.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Security Surveillance</h3>
                <p className="futuristic-text">
                  Intelligent monitoring systems with real-time threat detection and alerting.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Medical Image Analysis</h3>
                <p className="futuristic-text">
                  AI-powered analysis of medical images for diagnosis and treatment planning.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-green mb-4">Retail Analytics</h3>
                <p className="futuristic-text">
                  Customer behavior analysis, inventory management, and loss prevention.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Pricing</h2>
            <div className="futuristic-grid-3">
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Basic</h3>
                <div className="text-3xl font-bold text-white mb-4">$10,000</div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• Basic object detection</li>
                  <li>• Image classification</li>
                  <li>• Standard OCR</li>
                  <li>• API integration</li>
                  <li>• Email support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Pro</h3>
                <div className="text-3xl font-bold text-white mb-4">$30,000</div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• Advanced object detection</li>
                  <li>• Facial recognition</li>
                  <li>• Video analytics</li>
                  <li>• Custom model training</li>
                  <li>• Priority support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-white mb-4">$100,000</div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• Full customization</li>
                  <li>• Real-time processing</li>
                  <li>• Edge deployment</li>
                  <li>• On-premise setup</li>
                  <li>• 24/7 support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="futuristic-heading mb-8">Ready to Implement Computer Vision?</h2>
            <p className="futuristic-text text-xl mb-8">
              Contact us today to discuss your computer vision requirements and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="futuristic-btn">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="futuristic-btn glass-morphism border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIComputerVisionPage;