import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Copy, Play, ExternalLink, Shield, Zap, Database, Globe } from 'lucide-react';

const APIDocumentationPage: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/ai/predict',
      description: 'Make predictions using AI models',
      category: 'AI Services',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      parameters: [
        { name: 'model_id', type: 'string', required: true, description: 'ID of the AI model to use' },
        { name: 'input_data', type: 'object', required: true, description: 'Input data for prediction' },
        { name: 'options', type: 'object', required: false, description: 'Additional prediction options' }
      ],
      example: {
        request: `{
  "model_id": "sentiment-analysis-v1",
  "input_data": {
    "text": "I love this product!"
  },
  "options": {
    "confidence_threshold": 0.8
  }
}`,
        response: `{
  "success": true,
  "prediction": {
    "sentiment": "positive",
    "confidence": 0.95,
    "probabilities": {
      "positive": 0.95,
      "negative": 0.03,
      "neutral": 0.02
    }
  },
  "model_info": {
    "version": "1.2.0",
    "processing_time": "0.15s"
  }
}`
      }
    },
    {
      method: 'GET',
      endpoint: '/api/v1/ai/models',
      description: 'List available AI models',
      category: 'AI Services',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      parameters: [
        { name: 'category', type: 'string', required: false, description: 'Filter by model category' },
        { name: 'limit', type: 'integer', required: false, description: 'Number of models to return' },
        { name: 'offset', type: 'integer', required: false, description: 'Number of models to skip' }
      ],
      example: {
        request: `GET /api/v1/ai/models?category=nlp&limit=10`,
        response: `{
  "success": true,
  "models": [
    {
      "id": "sentiment-analysis-v1",
      "name": "Sentiment Analysis",
      "category": "nlp",
      "description": "Analyzes text sentiment",
      "version": "1.2.0",
      "status": "active"
    }
  ],
  "pagination": {
    "total": 25,
    "limit": 10,
    "offset": 0
  }
}`
      }
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/train',
      description: 'Train a new AI model',
      category: 'AI Services',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      parameters: [
        { name: 'model_type', type: 'string', required: true, description: 'Type of model to train' },
        { name: 'training_data', type: 'array', required: true, description: 'Training dataset' },
        { name: 'config', type: 'object', required: false, description: 'Training configuration' }
      ],
      example: {
        request: `{
  "model_type": "classification",
  "training_data": [
    {"text": "Great product", "label": "positive"},
    {"text": "Terrible service", "label": "negative"}
  ],
  "config": {
    "epochs": 100,
    "learning_rate": 0.001
  }
}`,
        response: `{
  "success": true,
  "model_id": "custom-model-123",
  "status": "training",
  "estimated_completion": "2024-12-20T15:30:00Z",
  "progress": 0.15
}`
      }
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics/insights',
      description: 'Get AI analytics insights',
      category: 'Analytics',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      parameters: [
        { name: 'timeframe', type: 'string', required: true, description: 'Time period for insights' },
        { name: 'metrics', type: 'array', required: false, description: 'Specific metrics to include' }
      ],
      example: {
        request: `GET /api/v1/analytics/insights?timeframe=30d&metrics=accuracy,usage`,
        response: `{
  "success": true,
  "insights": {
    "accuracy": 0.94,
    "usage": {
      "total_requests": 15000,
      "success_rate": 0.98
    },
    "trends": {
      "accuracy_trend": "increasing",
      "usage_trend": "stable"
    }
  }
}`
      }
    }
  ];

  const sdkExamples = [
    {
      language: 'Python',
      code: `import ziontech

# Initialize client
client = ziontech.Client(api_key="your-api-key")

# Make prediction
result = client.ai.predict(
    model_id="sentiment-analysis-v1",
    input_data={"text": "I love this product!"}
)

print(result.prediction.sentiment)  # "positive"`,
      description: 'Python SDK for easy integration'
    },
    {
      language: 'JavaScript',
      code: `import { ZionTech } from '@ziontech/sdk';

const client = new ZionTech({
  apiKey: 'your-api-key'
});

// Make prediction
const result = await client.ai.predict({
  modelId: 'sentiment-analysis-v1',
  inputData: { text: 'I love this product!' }
});

console.log(result.prediction.sentiment); // "positive"`,
      description: 'JavaScript/Node.js SDK'
    },
    {
      language: 'cURL',
      code: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {"text": "I love this product!"}
  }'`,
      description: 'Direct HTTP API calls'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's AI services with examples and SDKs." />
        <meta name="keywords" content="API documentation, REST API, GraphQL, SDK, developer tools, AI API" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete API reference with examples, SDKs, and interactive testing tools for our AI services.
          </p>
          
          {/* API Status */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">All Systems Operational</span>
            </div>
            <div className="text-gray-300">
              <span className="font-medium">Base URL:</span> https://api.ziontechgroup.com
            </div>
            <div className="text-gray-300">
              <span className="font-medium">Version:</span> v1.2.0
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 ${endpoint.bgColor} rounded-lg flex items-center justify-center`}>
                        <endpoint.icon className={`w-5 h-5 ${endpoint.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{endpoint.description}</h3>
                        <p className="text-gray-600">{endpoint.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                        {endpoint.endpoint}
                      </code>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Parameters */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h4>
                      <div className="space-y-3">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="border-l-4 border-blue-500 pl-4">
                            <div className="flex items-center space-x-2 mb-1">
                              <code className="text-sm font-medium text-gray-900">{param.name}</code>
                              <span className="text-xs text-gray-500">({param.type})</span>
                              {param.required && (
                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Required</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Example */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Example</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Request:</h5>
                          <div className="bg-gray-900 rounded-lg p-4 relative">
                            <pre className="text-green-400 text-sm overflow-x-auto">
                              <code>{endpoint.example.request}</code>
                            </pre>
                            <button className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white">
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Response:</h5>
                          <div className="bg-gray-900 rounded-lg p-4 relative">
                            <pre className="text-blue-400 text-sm overflow-x-auto">
                              <code>{endpoint.example.response}</code>
                            </pre>
                            <button className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white">
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Examples */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SDK Examples</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sdkExamples.map((sdk, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sdk.language}</h3>
                  <p className="text-gray-600">{sdk.description}</p>
                </div>
                <div className="p-6">
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                      <code>{sdk.code}</code>
                    </pre>
                    <button className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Authentication</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">API Key Authentication</h3>
            </div>
            <p className="text-gray-600 mb-6">
              All API requests require authentication using an API key. Include your API key in the Authorization header.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <pre className="text-green-400 text-sm">
                <code>Authorization: Bearer your-api-key-here</code>
              </pre>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get API Key
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDocumentationPage;