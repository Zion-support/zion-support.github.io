import React from "react";
import SEOHead from "../components/SEOHead";

const AIImageRecognitionProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Image Recognition Pro - Advanced Computer Vision Solutions"
        description="Transform your business with our advanced AI image recognition platform. Object detection, facial recognition, and automated image analysis capabilities."
        keywords="AI image recognition, computer vision, object detection, facial recognition, OCR, image analysis, AI vision"
        canonicalUrl="https://ziontechgroup.com/ai-image-recognition-pro"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Zion AI Image Recognition Pro
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Advanced computer vision platform with object detection, facial
                recognition, and automated image analysis capabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#features"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a
                  href="/contact?service=ai-image-recognition-pro"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Computer Vision Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI image recognition platform combines cutting-edge computer
              vision with machine learning for accurate and fast image analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Object Detection
              </h3>
              <p className="text-gray-600">
                Identify and locate objects in images with high accuracy using
                state-of-the-art detection algorithms
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Facial Recognition
              </h3>
              <p className="text-gray-600">
                Advanced facial recognition with emotion detection, age
                estimation, and identity verification
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                OCR Text Extraction
              </h3>
              <p className="text-gray-600">
                Extract text from images, documents, and handwritten notes with
                high accuracy OCR technology
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Image Classification
              </h3>
              <p className="text-gray-600">
                Automatically categorize and tag images based on content, style,
                and context
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality Assessment
              </h3>
              <p className="text-gray-600">
                Analyze image quality, resolution, and composition to ensure
                optimal visual content
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-time Processing
              </h3>
              <p className="text-gray-600">
                Process images in real-time with ultra-low latency for live
                applications and video streams
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your image processing needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  $199<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Up to 10,000
                    images/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Basic object
                    detection
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> OCR text
                    extraction
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Email support
                  </li>
                </ul>
                <a
                  href="/contact?service=ai-image-recognition-pro&plan=basic"
                  className="w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-green-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">
                  $599<span className="text-lg opacity-75">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Up to 100,000
                    images/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Advanced
                    object detection
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Facial
                    recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Image
                    classification
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Quality
                    assessment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Priority
                    support
                  </li>
                </ul>
                <a
                  href="/contact?service=ai-image-recognition-pro&plan=pro"
                  className="w-full bg-white text-green-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  $1,499<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Unlimited
                    images
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> All features
                    included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Custom model
                    training
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Real-time
                    processing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Advanced
                    analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 24/7
                    dedicated support
                  </li>
                </ul>
                <a
                  href="/contact?service=ai-image-recognition-pro&plan=enterprise"
                  className="w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-gray-600">
                See how our AI image recognition can transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality Control
                </h3>
                <p className="text-gray-600">
                  Automatically inspect products for defects, measure
                  dimensions, and ensure quality standards in manufacturing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Security Monitoring
                </h3>
                <p className="text-gray-600">
                  Enhance security with facial recognition, object detection,
                  and automated threat identification in surveillance systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Content Moderation
                </h3>
                <p className="text-gray-600">
                  Automatically detect and filter inappropriate content,
                  ensuring safe and compliant user-generated content.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Medical Imaging
                </h3>
                <p className="text-gray-600">
                  Assist medical professionals with image analysis, diagnosis
                  support, and automated medical image processing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  E-commerce Automation
                </h3>
                <p className="text-gray-600">
                  Automatically categorize products, extract product
                  information, and optimize product listings with image
                  analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Document Processing
                </h3>
                <p className="text-gray-600">
                  Extract text and data from documents, forms, and handwritten
                  notes with high accuracy OCR technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI Vision?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already using our AI image
              recognition to automate processes and gain valuable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?service=ai-image-recognition-pro"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionProPage;
