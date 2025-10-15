import React from 'react';
import SEOHead from '../components/SEOHead';

const AIImageRecognitionPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Image Recognition - Zion Tech Group"
        description="Advanced AI image recognition and computer vision solutions. Object detection, facial recognition, content moderation, and visual analysis for your applications."
        keywords="AI image recognition, computer vision, object detection, facial recognition, image analysis, visual AI"
        canonicalUrl="https://ziontechgroup.com/ai-image-recognition"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Image Recognition Platform</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful computer vision and image recognition capabilities. Detect objects, analyze content, recognize faces, and extract insights from images with advanced AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognition Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Object Detection</h3>
                    <p className="text-gray-600">Identify and locate objects, people, and text in images with high accuracy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Facial Recognition</h3>
                    <p className="text-gray-600">Detect, analyze, and recognize faces with emotion and age estimation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Content Moderation</h3>
                    <p className="text-gray-600">Automatically detect inappropriate content, violence, and NSFW material</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Text Extraction (OCR)</h3>
                    <p className="text-gray-600">Extract text from images, documents, and handwritten content</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Custom Models</h3>
                    <p className="text-gray-600">Train custom recognition models for your specific use cases</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Starter</h4>
                  <p className="text-3xl font-bold text-indigo-600">$39<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 1,000 images/month</li>
                    <li>• Basic object detection</li>
                    <li>• Standard OCR</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-indigo-500 rounded-lg p-4 bg-indigo-50">
                  <h4 className="text-lg font-semibold text-gray-900">Professional</h4>
                  <p className="text-3xl font-bold text-indigo-600">$149<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 10,000 images/month</li>
                    <li>• Advanced recognition</li>
                    <li>• Facial analysis</li>
                    <li>• Content moderation</li>
                    <li>• API access</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise</h4>
                  <p className="text-3xl font-bold text-indigo-600">$399<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited images</li>
                    <li>• Custom model training</li>
                    <li>• Real-time processing</li>
                    <li>• White-label options</li>
                    <li>• 24/7 support</li>
                    <li>• On-premise deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Recognizing Images with AI</h2>
            <p className="text-gray-600 mb-6">Powerful computer vision capabilities for your applications.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Try Free Demo
              </a>
              <a href="tel:+13024640950" className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageRecognitionPage;