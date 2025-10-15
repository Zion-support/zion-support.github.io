import React from 'react';
import SEOHead from '../components/SEOHead';

const AIImageRecognitionPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Image Recognition Pro - Zion Tech Group"
        description="Advanced computer vision and image recognition system with object detection, classification, and analysis capabilities. Perfect for content moderation, quality control, and automation."
        keywords="AI image recognition, computer vision, object detection, image classification, OCR, content moderation, quality control"
        canonicalUrl="https://ziontechgroup.com/ai-image-recognition"
      />
      
      <div className="min-h-screen animated-bg matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="responsive-heading font-bold gradient-text mb-6 hologram">
              AI Image Recognition Pro
            </h1>
            <p className="responsive-text text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced computer vision and image recognition system with object detection, classification, 
              and analysis capabilities. Perfect for content moderation, quality control, and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?service=ai-image-recognition" className="btn-futuristic energy">
                Get Started
              </a>
              <a href="tel:+13024640950" className="btn-futuristic glitch">
                Call +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-cyan text-center mb-12 cyber-scan">Key Features</h2>
            <div className="responsive-grid">
              <div className="card-futuristic hologram">
                <div className="text-4xl mb-4 neon-text-purple">👁️</div>
                <h3 className="text-xl font-semibold text-white mb-4">Object Detection</h3>
                <p className="text-gray-300">
                  Identify and locate objects within images with high accuracy using advanced computer vision algorithms.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl mb-4 neon-text-pink">🏷️</div>
                <h3 className="text-xl font-semibold text-white mb-4">Image Classification</h3>
                <p className="text-gray-300">
                  Automatically categorize images into predefined classes with machine learning-powered classification.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl mb-4 neon-text-green">📝</div>
                <h3 className="text-xl font-semibold text-white mb-4">OCR Text Extraction</h3>
                <p className="text-gray-300">
                  Extract text from images with optical character recognition technology for document processing.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.6s'}}>
                <div className="text-4xl mb-4 neon-text-cyan">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-4">Quality Analysis</h3>
                <p className="text-gray-300">
                  Analyze image quality, resolution, and composition to ensure optimal visual content.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.8s'}}>
                <div className="text-4xl mb-4 neon-text-orange">🛡️</div>
                <h3 className="text-xl font-semibold text-white mb-4">Content Moderation</h3>
                <p className="text-gray-300">
                  Automatically detect inappropriate content, violence, or NSFW material in images.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '1s'}}>
                <div className="text-4xl mb-4 neon-text-purple">🏥</div>
                <h3 className="text-xl font-semibold text-white mb-4">Medical Analysis</h3>
                <p className="text-gray-300">
                  Specialized medical image analysis for X-rays, MRIs, and other diagnostic imaging.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-pink text-center mb-12 cyber-scan">Use Cases</h2>
            <div className="responsive-grid">
              <div className="card-futuristic energy-pulse">
                <h3 className="text-xl font-semibold text-white mb-4">E-commerce</h3>
                <p className="text-gray-300">
                  Automatically categorize products, extract product information, and moderate user-generated content.
                </p>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
                <p className="text-gray-300">
                  Analyze medical images for diagnosis assistance, quality control, and automated reporting.
                </p>
              </div>
              <div className="card-futuristic hologram">
                <h3 className="text-xl font-semibold text-white mb-4">Security</h3>
                <p className="text-gray-300">
                  Monitor surveillance footage, detect suspicious activities, and identify individuals.
                </p>
              </div>
              <div className="card-futuristic hologram">
                <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
                <p className="text-gray-300">
                  Quality control, defect detection, and automated inspection of products and components.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-green text-center mb-12 cyber-scan">Pricing Plans</h2>
            <div className="responsive-grid">
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text-cyan mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Up to 10,000 images/month</li>
                  <li>✓ Basic object detection</li>
                  <li>✓ Image classification</li>
                  <li>✓ OCR text extraction</li>
                  <li>✓ API access</li>
                </ul>
                <a href="/contact?service=ai-image-recognition&plan=basic" className="btn-futuristic w-full text-center">
                  Get Started
                </a>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold neon-text-purple mb-4">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Up to 100,000 images/month</li>
                  <li>✓ Advanced object detection</li>
                  <li>✓ Custom model training</li>
                  <li>✓ Content moderation</li>
                  <li>✓ Quality analysis</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="/contact?service=ai-image-recognition&plan=pro" className="btn-futuristic w-full text-center">
                  Get Started
                </a>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text-pink mb-4">$1,999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Unlimited images</li>
                  <li>✓ Custom models</li>
                  <li>✓ Medical imaging</li>
                  <li>✓ Real-time processing</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <a href="/contact?service=ai-image-recognition&plan=enterprise" className="btn-futuristic w-full text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text-orange mb-8">Ready to See What AI Can Do?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our computer vision experts to discuss your image recognition needs and see how our AI can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-futuristic energy">
                Get Free Demo
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-futuristic glitch">
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-300">
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;