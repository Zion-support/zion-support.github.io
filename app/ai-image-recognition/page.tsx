import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIImageRecognitionPage() {
  return (
    <>
      <Helmet>
        <title>AI Image Recognition - Advanced Computer Vision Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered image recognition and computer vision solutions for object detection, facial recognition, and visual content analysis. Boost your business with intelligent image processing." />
        <meta name="keywords" content="AI image recognition, computer vision, object detection, facial recognition, image analysis, visual AI, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Image Recognition
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced computer vision solutions powered by AI for object detection, facial recognition, and visual content analysis. Transform your business with intelligent image processing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Advanced Image Recognition Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Object Detection & Classification</h3>
                    <p className="text-gray-600">Identify and classify objects in images with high accuracy using state-of-the-art deep learning models.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Facial Recognition</h3>
                    <p className="text-gray-600">Advanced facial recognition technology for identity verification, access control, and security applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Text Recognition (OCR)</h3>
                    <p className="text-gray-600">Extract text from images with optical character recognition, supporting multiple languages and fonts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Scene Understanding</h3>
                    <p className="text-gray-600">Analyze complex scenes to understand context, relationships, and activities happening in images.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$99/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 10,000 images/month</li>
                    <li>Basic object detection</li>
                    <li>Text recognition (OCR)</li>
                    <li>API access</li>
                    <li>Email support</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$299/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Up to 100,000 images/month</li>
                    <li>Advanced object detection</li>
                    <li>Facial recognition</li>
                    <li>Scene understanding</li>
                    <li>Priority support</li>
                    <li>Custom models</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$799/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Unlimited images</li>
                    <li>Custom AI models</li>
                    <li>Real-time processing</li>
                    <li>White-label options</li>
                    <li>24/7 support</li>
                    <li>On-premise deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Retail & E-commerce</h3>
                <p className="text-gray-600 mb-4">Automate product cataloging, visual search, and inventory management with AI image recognition.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Product identification</li>
                  <li>• Visual search</li>
                  <li>• Quality control</li>
                  <li>• Shelf monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare</h3>
                <p className="text-gray-600 mb-4">Medical image analysis, diagnostic assistance, and patient monitoring with advanced computer vision.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Medical imaging</li>
                  <li>• Diagnostic support</li>
                  <li>• Patient monitoring</li>
                  <li>• Drug identification</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Surveillance</h3>
                <p className="text-gray-600 mb-4">Enhance security systems with facial recognition, object detection, and behavioral analysis.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Access control</li>
                  <li>• Threat detection</li>
                  <li>• Crowd monitoring</li>
                  <li>• License plate recognition</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing</h3>
                <p className="text-gray-600 mb-4">Quality control, defect detection, and automated inspection in manufacturing processes.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Quality inspection</li>
                  <li>• Defect detection</li>
                  <li>• Assembly verification</li>
                  <li>• Safety monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automotive</h3>
                <p className="text-gray-600 mb-4">Autonomous vehicle systems, traffic monitoring, and driver assistance with computer vision.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Autonomous driving</li>
                  <li>• Traffic analysis</li>
                  <li>• Driver monitoring</li>
                  <li>• Parking assistance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Agriculture</h3>
                <p className="text-gray-600 mb-4">Crop monitoring, disease detection, and yield prediction using drone and satellite imagery.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Crop monitoring</li>
                  <li>• Disease detection</li>
                  <li>• Yield prediction</li>
                  <li>• Soil analysis</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Technical Specifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">95%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy Rate</h3>
                <p className="text-gray-600">Industry-leading accuracy in object detection and classification tasks.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">&lt;100ms</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">Ultra-fast image processing with sub-100ms response times.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">50+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Object Classes</h3>
                <p className="text-gray-600">Recognize over 50 different object categories and thousands of subcategories.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">24/7</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Availability</h3>
                <p className="text-gray-600">Round-the-clock service with 99.9% uptime guarantee.</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Our AI Image Recognition?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cut Processing Time by 90%</h3>
                <p className="text-gray-600">Automate image analysis tasks that would take hours manually, reducing processing time by up to 90%.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve Accuracy by 95%</h3>
                <p className="text-gray-600">Achieve consistent, high-accuracy results that surpass human-level performance in many tasks.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Costs by 70%</h3>
                <p className="text-gray-600">Eliminate manual image processing costs and reduce operational expenses significantly.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to See the Future?</h2>
            <p className="text-xl mb-8 opacity-90">Transform your business with advanced AI image recognition and computer vision solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Free Trial
              </a>
              <a href="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}