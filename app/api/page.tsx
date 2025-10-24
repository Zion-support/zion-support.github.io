'use client';
import React from 'react';

const ApiPage: React.FC = () => {
  const apiServices = [
    {
      title: 'AI Services',
      description: 'Artificial Intelligence and Machine Learning APIs',
      endpoints: [
        {
          method: 'POST',
          path: '/api/ai/chat',
          description: 'AI-powered chat completion',
          parameters: ['message', 'model', 'temperature'],
          example: {
            request: {
              message: "Hello, how can I help you?",
              model: "gpt-4",
              temperature: 0.7
            },
            response: {
              response: "Hello! I'm here to help you with any questions or tasks you might have.",
              confidence: 0.95,
              tokens_used: 25
            }
          }
        },
        {
          method: 'POST',
          path: '/api/ai/analyze',
          description: 'Data analysis and insights',
          parameters: ['data', 'analysis_type', 'options'],
          example: {
            request: {
              data: [1, 2, 3, 4, 5],
              analysis_type: "trend",
              options: { include_forecast: true }
            },
            response: {
              trend: "increasing",
              forecast: [6, 7, 8],
              confidence: 0.87
            }
          }
        },
        {
          method: 'POST',
          path: '/api/ai/generate-content',
          description: 'AI content generation',
          parameters: ['prompt', 'type', 'length', 'style'],
          example: {
            request: {
              prompt: "Write a blog post about AI",
              type: "blog_post",
              length: "medium",
              style: "professional"
            },
            response: {
              content: "Artificial Intelligence is transforming the way we work and live...",
              word_count: 500,
              readability_score: 8.2
            }
          }
        }
      ]
    },
    {
      title: 'Infrastructure Services',
      description: 'Cloud infrastructure and monitoring APIs',
      endpoints: [
        {
          method: 'GET',
          path: '/api/infrastructure/status',
          description: 'Infrastructure health check',
          parameters: ['service_id'],
          example: {
            request: { service_id: "web-server-01" },
            response: {
              status: "healthy",
              uptime: "99.9%",
              last_check: "2024-01-15T10:30:00Z"
            }
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <div className="containermx-autopx-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xlfont-boldtext-white mb-6">API Services</h1>
          <p className="text-xltext-gray-300max-w-3xl mx-auto">
            Comprehensive API services for AI, data processing, and infrastructure management.
            Integrate our powerful APIs into your applications.
          </p>
        </div>

        <div className="max-w-6xlmx-auto">
          {apiServices.map((service, serviceIndex) => (
            <div key={serviceIndex} className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xlfont-boldtext-white mb-2">{service.title}</h2>
                <p className="text-gray-400">{service.description}</p>
              </div>

              <div className="gridgrid-cols-1lg:grid-cols-2 gap-6">
                {service.endpoints.map((endpoint, endpointIndex) => (
                  <div key={endpointIndex} className="bg-slate-800/50backdrop-blur-smrounded-lg p-6 border border-slate-700">
                    <div className="flexitems-centerspace-x-3 mb-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400font-mono">{endpoint.path}</code>
                    </div>

                    <p className="text-gray-300mb-4">{endpoint.description}</p>

                    <div className="mb-4">
                      <h4 className="text-smfont-semiboldtext-gray-400 mb-2">Parameters:</h4>
                      <div className="flexflex-wrapgap-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <span key={paramIndex} className="px-2py-1bg-purple-600/20 text-purple-400 rounded text-xs">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-900/50rounded-lgp-4">
                      <h4 className="text-smfont-semiboldtext-gray-400 mb-2">Example:</h4>
                      <pre className="text-xstext-gray-300whitespace-pre-wrap">
                        {JSON.stringify(endpoint.example, null, 2)}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
