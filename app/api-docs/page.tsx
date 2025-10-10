'use client';
import React, { useState } from 'react';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Core AI functionality and machine learning services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/predict',
          description: 'Make predictions using trained AI models',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/ai/train',
          description: 'Train a new AI model with your data',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/train" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_name": "custom-classifier",
    "training_data": [...],
    "model_type": "classification"
  }'`
        }
      ]
    },
    {
      title: 'IT Services',
      description: 'Infrastructure and system management APIs',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/infrastructure/status',
          description: 'Get current infrastructure status',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/infrastructure/status" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/v1/infrastructure/deploy',
          description: 'Deploy infrastructure changes',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/infrastructure/deploy" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "environment": "production",
    "config": {...}
  }'`
        }
      ]
    },
    {
      title: 'Micro SAAS',
      description: 'Micro SAAS tools and utilities APIs',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/tools/list',
          description: 'List available micro SAAS tools',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/tools/list" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/v1/tools/execute',
          description: 'Execute a micro SAAS tool',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/tools/execute" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool_id": "data-processor",
    "parameters": {...}
  }'`
        }
      ]
    }
  ];

  const sdkExamples = [
    {
      language: 'Python',
      code: `import ziontech

# Initialize the client
client = ziontech.Client(api_key="YOUR_API_KEY")

# Make a prediction
result = client.ai.predict(
    model_id="sentiment-analysis-v1",
    input_data={"text": "I love this product!"}
)

print(result)`
    },
    {
      language: 'JavaScript',
      code: `const ziontech = require('ziontech-sdk');

// Initialize the client
const client = new ziontech.Client({
  apiKey: 'YOUR_API_KEY'
});

// Make a prediction
client.ai.predict({
  modelId: 'sentiment-analysis-v1',
  inputData: { text: 'I love this product!' }
}).then(result => {
  console.log(result);
});`
    },
    {
      language: 'cURL',
      code: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            API
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for all our services. Get started with our APIs and integrate our powerful AI and IT solutions into your applications.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-futuristic glass-dark p-6 text-center">
              <Key className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Get API Key</h3>
              <p className="text-gray-300 mb-4">Sign up and get your free API key to start using our services.</p>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Get API Key
              </button>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center">
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Choose SDK</h3>
              <p className="text-gray-300 mb-4">Download our SDK for your preferred programming language.</p>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Download SDK
              </button>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Make First Call</h3>
              <p className="text-gray-300 mb-4">Follow our examples to make your first API call.</p>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-futuristic glass-dark p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="border border-gray-600 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded text-sm font-semibold ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">Example Request:</span>
                          <button
                            onClick={() => copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>{endpoint.example}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Examples */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SDK Examples</h2>
          <div className="space-y-8">
            {sdkExamples.map((example, index) => (
              <div key={index} className="card-futuristic glass-dark p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{example.language}</h3>
                  <button
                    onClick={() => copyToClipboard(example.code, `sdk-${index}`)}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedCode === `sdk-${index}` ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Start building with our APIs today. Get your free API key and begin integrating our powerful services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Get API Key
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Full Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDocsPage;