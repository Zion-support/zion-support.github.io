import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIImageRecognitionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Image Recognition Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI image recognition with object detection, classification, and analysis using deep learning technology." />
        <meta name="keywords" content="AI image recognition, computer vision, object detection, image classification, OCR, facial recognition" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">👁️</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Image Recognition <span className="text-purple-600">Pro</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Advanced computer vision and image analysis using deep learning for object detection, 
              classification, and intelligent image processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Object Detection</h3>
              <p className="text-gray-600">Identify and locate objects in images with high accuracy using state-of-the-art deep learning models.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🏷️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Image Classification</h3>
              <p className="text-gray-600">Automatically categorize images into predefined classes with 99%+ accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">👤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Facial Recognition</h3>
              <p className="text-gray-600">Advanced facial recognition with emotion detection and identity verification capabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">OCR Text Extraction</h3>
              <p className="text-gray-600">Extract text from images and documents with high accuracy using optical character recognition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assessment</h3>
              <p className="text-gray-600">Automatically assess image quality, blur detection, and content appropriateness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">Process images in real-time with optimized models for fast inference.</p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Up to 1,000 images/month</li>
                  <li>✓ Basic object detection</li>
                  <li>✓ Image classification</li>
                  <li>✓ Email support</li>
                </ul>
                <Link to="/contact" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border-2 border-purple-500 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$399<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Up to 10,000 images/month</li>
                  <li>✓ Advanced object detection</li>
                  <li>✓ Facial recognition</li>
                  <li>✓ OCR text extraction</li>
                  <li>✓ API access</li>
                </ul>
                <Link to="/contact" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$999<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Unlimited images</li>
                  <li>✓ Custom model training</li>
                  <li>✓ Real-time processing</li>
                  <li>✓ White-label solution</li>
                  <li>✓ 24/7 support</li>
                </ul>
                <Link to="/contact" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-commerce Product Recognition</h3>
                <p className="text-gray-600">Automatically categorize and tag products in online stores using image recognition technology.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Surveillance</h3>
                <p className="text-gray-600">Monitor security cameras with intelligent object detection and facial recognition capabilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Imaging</h3>
                <p className="text-gray-600">Assist in medical diagnosis with AI-powered image analysis and pattern recognition.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Moderation</h3>
                <p className="text-gray-600">Automatically detect inappropriate content in images and videos for social media platforms.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Implement Image Recognition?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start using our AI Image Recognition Pro platform to analyze and understand images like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;