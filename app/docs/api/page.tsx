import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'API Documentation - Zion Tech Group Developer Resources',
  description: 'Comprehensive API documentation for Zion Tech Group AI services. Learn how to integrate our APIs into your applications.',
  keywords: 'API documentation, developer resources, REST API, AI API, Zion Tech Group, integration guide',
  openGraph: {
    title: 'API Documentation - Zion Tech Group Developer Resources',
    description: 'Comprehensive API documentation for Zion Tech Group AI services.',
    type: 'website',
  },
};

export default function APIDocumentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive API documentation for integrating Zion Tech Group AI services into your applications.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-8 space-y-2">
                <h3 className="text-lg font-semibold text-white mb-4">API Reference</h3>
                <a href="#authentication" className="block text-gray-300 hover:text-purple-400 py-2">Authentication</a>
                <a href="#text-analysis" className="block text-gray-300 hover:text-purple-400 py-2">Text Analysis</a>
                <a href="#computer-vision" className="block text-gray-300 hover:text-purple-400 py-2">Computer Vision</a>
                <a href="#machine-learning" className="block text-gray-300 hover:text-purple-400 py-2">Machine Learning</a>
                <a href="#ai-automation" className="block text-gray-300 hover:text-purple-400 py-2">AI Automation</a>
                <a href="#error-handling" className="block text-gray-300 hover:text-purple-400 py-2">Error Handling</a>
                <a href="#rate-limits" className="block text-gray-300 hover:text-purple-400 py-2">Rate Limits</a>
                <a href="#webhooks" className="block text-gray-300 hover:text-purple-400 py-2">Webhooks</a>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <section id="authentication" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Authentication</h2>
                <p className="text-gray-300 mb-6">
                  All API requests require authentication using your API key. Include it in the Authorization header.
                </p>
                
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.ziontechgroup.com/v1/endpoint`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Getting Your API Key</h3>
                <p className="text-gray-300 mb-4">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Get API Key
                </Link>
              </section>

              <section id="text-analysis" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Text Analysis API</h2>
                <p className="text-gray-300 mb-6">
                  Analyze text for sentiment, language, entities, and more using our advanced NLP models.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Sentiment Analysis</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`POST /v1/text/sentiment
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "text": "I love using Zion Tech Group's AI services!",
  "language": "en"
}`}
                  </pre>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`{
  "sentiment": "positive",
  "confidence": 0.95,
  "scores": {
    "positive": 0.95,
    "negative": 0.03,
    "neutral": 0.02
  }
}`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Language Detection</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`POST /v1/text/language
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "text": "Hello, how are you today?"
}`}
                  </pre>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`{
  "language": "en",
  "confidence": 0.99,
  "alternatives": [
    {"language": "en", "confidence": 0.99},
    {"language": "es", "confidence": 0.01}
  ]
}`}
                  </pre>
                </div>
              </section>

              <section id="computer-vision" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Computer Vision API</h2>
                <p className="text-gray-300 mb-6">
                  Analyze images and videos for objects, faces, text, and other visual elements.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Object Detection</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`POST /v1/vision/objects
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  "confidence_threshold": 0.5
}`}
                  </pre>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`{
  "objects": [
    {
      "label": "person",
      "confidence": 0.95,
      "bbox": {
        "x": 100,
        "y": 150,
        "width": 200,
        "height": 300
      }
    }
  ],
  "image_width": 800,
  "image_height": 600
}`}
                  </pre>
                </div>
              </section>

              <section id="machine-learning" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Machine Learning API</h2>
                <p className="text-gray-300 mb-6">
                  Train custom models and make predictions using our machine learning infrastructure.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Model Training</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`POST /v1/ml/train
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "model_type": "classification",
  "training_data": [
    {"features": [1, 2, 3], "label": "A"},
    {"features": [4, 5, 6], "label": "B"}
  ],
  "parameters": {
    "algorithm": "random_forest",
    "max_depth": 10
  }
}`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Model Prediction</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`POST /v1/ml/predict/{model_id}
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "features": [1, 2, 3]
}`}
                  </pre>
                </div>
              </section>

              <section id="ai-automation" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">AI Automation API</h2>
                <p className="text-gray-300 mb-6">
                  Automate business processes and workflows using our AI automation services.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Workflow Execution</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`POST /v1/automation/execute
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "workflow_id": "wf_123",
  "inputs": {
    "document": "data:application/pdf;base64,JVBERi0xLjQK...",
    "rules": ["extract_text", "classify", "route"]
  }
}`}
                  </pre>
                </div>
              </section>

              <section id="error-handling" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Error Handling</h2>
                <p className="text-gray-300 mb-6">
                  Our API uses standard HTTP status codes and returns detailed error information.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">400 Bad Request</h4>
                    <pre className="text-red-400 text-sm">
{`{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request is missing required parameters",
    "details": {
      "missing_fields": ["text"]
    }
  }
}`}
                    </pre>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">401 Unauthorized</h4>
                    <pre className="text-red-400 text-sm">
{`{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}`}
                    </pre>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">429 Too Many Requests</h4>
                    <pre className="text-red-400 text-sm">
{`{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded",
    "retry_after": 60
  }
}`}
                    </pre>
                  </div>
                </div>
              </section>

              <section id="rate-limits" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Rate Limits</h2>
                <p className="text-gray-300 mb-6">
                  API rate limits are applied per API key to ensure fair usage and system stability.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left py-3 px-4">Plan</th>
                        <th className="text-left py-3 px-4">Requests/Minute</th>
                        <th className="text-left py-3 px-4">Requests/Day</th>
                        <th className="text-left py-3 px-4">Burst Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4">Free</td>
                        <td className="py-3 px-4">10</td>
                        <td className="py-3 px-4">1,000</td>
                        <td className="py-3 px-4">20</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4">Pro</td>
                        <td className="py-3 px-4">100</td>
                        <td className="py-3 px-4">50,000</td>
                        <td className="py-3 px-4">200</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4">Enterprise</td>
                        <td className="py-3 px-4">1,000</td>
                        <td className="py-3 px-4">500,000</td>
                        <td className="py-3 px-4">2,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="webhooks" className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Webhooks</h2>
                <p className="text-gray-300 mb-6">
                  Receive real-time notifications about your API usage and model training progress.
                </p>

                <h3 className="text-lg font-semibold text-white mb-4">Setting Up Webhooks</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm">
{`POST /v1/webhooks
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "url": "https://your-app.com/webhooks/zion",
  "events": ["model.trained", "prediction.completed"],
  "secret": "your-webhook-secret"
}`}
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Webhook Payload</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <pre className="text-green-400 text-sm">
{`{
  "event": "model.trained",
  "timestamp": "2025-01-09T12:00:00Z",
  "data": {
    "model_id": "model_123",
    "status": "completed",
    "accuracy": 0.95
  }
}`}
                  </pre>
                </div>
              </section>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Need Help with Integration?</h2>
                <p className="text-gray-200 mb-6">
                  Our developer support team is here to help you integrate our APIs successfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Developer Support
                  </Link>
                  <a 
                    href="tel:+13024640950" 
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}