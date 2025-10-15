import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIImageRecognitionPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Image Recognition Pro",
    "description": "Advanced computer vision solution that can identify, classify, and analyze images with high accuracy for quality control and automation.",
    "url": "https://ziontechgroup.com/ai-image-recognition",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, API, Mobile",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Image Recognition Pro - Advanced Computer Vision | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Image Recognition Pro. Advanced computer vision for quality control, content moderation, and automation. Starting from $149/month." />
        <meta name="keywords" content="AI image recognition, computer vision, image analysis, quality control, content moderation, OCR, object detection" />
        <meta property="og:title" content="Zion AI Image Recognition Pro - Advanced Computer Vision" />
        <meta property="og:description" content="Advanced computer vision solution with high accuracy for image identification, classification, and analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-image-recognition" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-6">👁️</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Zion AI Image Recognition Pro
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Advanced computer vision solution that can identify, classify, and analyze images with high accuracy. 
                Perfect for quality control, content moderation, and automated image processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/contact?service=ai-image-recognition" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Try Image Analysis
                </a>
                <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="text-center text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Computer Vision Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive image analysis and recognition capabilities powered by state-of-the-art AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Object Detection</h3>
              <p className="text-gray-600">Identify and locate multiple objects within images with precise bounding box coordinates.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Image Classification</h3>
              <p className="text-gray-600">Automatically categorize images into predefined classes with high accuracy and confidence scores.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Face Recognition</h3>
              <p className="text-gray-600">Advanced facial recognition capabilities for identity verification and user authentication.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">OCR Technology</h3>
              <p className="text-gray-600">Extract text from images with optical character recognition for document processing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Moderation</h3>
              <p className="text-gray-600">Automatically detect and filter inappropriate content to maintain platform safety.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Analysis</h3>
              <p className="text-gray-600">Process images in real-time with fast response times for live applications.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Image Analysis Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your image processing needs. All plans include our core computer vision features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 images/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic object detection</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Image classification</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <a href="/contact?service=ai-image-recognition&plan=basic" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-green-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">$399<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Up to 10,000 images/month</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Advanced object detection</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Face recognition</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> OCR capabilities</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Priority support</li>
                </ul>
                <a href="/contact?service=ai-image-recognition&plan=pro" className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$999<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited images</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom model training</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full API access</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Content moderation</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</li>
                </ul>
                <a href="/contact?service=ai-image-recognition&plan=enterprise" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Transform Your Business with AI Vision</h2>
            <p className="text-xl mb-8">
              Automate image processing, improve quality control, and enhance customer experience with our advanced computer vision technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?service=ai-image-recognition" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;