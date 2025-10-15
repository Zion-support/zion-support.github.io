import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIImageRecognitionPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Image Recognition Suite",
    "description": "Comprehensive image recognition and analysis platform with object detection, facial recognition, and content moderation",
    "brand": "Zion Tech Group",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Image Recognition Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive image recognition and analysis platform with object detection, facial recognition, and content moderation." />
        <meta name="keywords" content="AI image recognition, object detection, facial recognition, content moderation, OCR, image analysis" />
        <meta property="og:title" content="AI Image Recognition Suite - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive image recognition and analysis platform with object detection, facial recognition, and content moderation." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-image-recognition" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Image Recognition Suite</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Advanced image recognition and analysis platform with object detection, facial recognition, and content moderation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Get Started
                </a>
                <a href="#demo" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-medium">
                  Try Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Image Recognition Features</h2>
              <p className="text-lg text-gray-600">Advanced AI technology to understand and analyze images</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Object Detection</h3>
                <p className="text-gray-600">Identify and locate objects in images with high accuracy using state-of-the-art computer vision models.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Facial Recognition</h3>
                <p className="text-gray-600">Detect and recognize faces with advanced biometric analysis and emotion detection capabilities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Moderation</h3>
                <p className="text-gray-600">Automatically detect and filter inappropriate content, ensuring safe and compliant image processing.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">OCR Text Extraction</h3>
                <p className="text-gray-600">Extract text from images with high accuracy, supporting multiple languages and handwriting recognition.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏷️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Image Classification</h3>
                <p className="text-gray-600">Automatically categorize and tag images based on content, style, and context with custom models.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assessment</h3>
                <p className="text-gray-600">Analyze image quality, resolution, and composition to ensure optimal results for your applications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your image processing needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$149</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10,000 images/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic object detection
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    OCR text extraction
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-green-600 text-white rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$599</span>
                  <span className="text-green-200">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-300 mr-2">✓</span>
                    Up to 100,000 images/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-2">✓</span>
                    All recognition features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-2">✓</span>
                    Facial recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-2">✓</span>
                    Content moderation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-2">✓</span>
                    API access
                  </li>
                </ul>
                <button className="w-full bg-white text-green-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$1,499</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited images
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom models
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    On-premise deployment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom integrations
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
              <p className="text-lg text-gray-600">Transform your business with intelligent image recognition</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">E-commerce & Retail</h3>
                <p className="text-gray-600">Automatically tag products, detect defects, and enhance search capabilities with visual recognition.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Surveillance</h3>
                <p className="text-gray-600">Monitor security cameras, detect intruders, and identify individuals with facial recognition technology.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600">Analyze medical images, detect anomalies, and assist in diagnosis with AI-powered image analysis.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-600">Moderate content, detect inappropriate images, and enhance user experience with automated tagging.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-gray-600">Quality control, defect detection, and automated inspection using computer vision technology.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automotive</h3>
                <p className="text-gray-600">Autonomous vehicle vision, traffic sign recognition, and driver monitoring systems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-16 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to See the Future?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our AI Image Recognition Suite and how it can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-medium">
                Email Us
              </a>
            </div>
            <div className="mt-8 text-green-200">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="hover:text-white underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;