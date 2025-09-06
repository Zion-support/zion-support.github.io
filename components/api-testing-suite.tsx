import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
=======
import { Code, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Play, AlertTriangle, Clock, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Zap, Star } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function APITestingSuitePage() {
  const [isTesting, setIsTesting] = useState(false),
  const [testResults, setTestResults] = useState(null),
  const [apiEndpoint, setApiEndpoint] = useState(''),
  const [apiKey, setApiKey] = useState(''),

  const features = [
    {

      title: 'Comprehensive API Testing',
      description: 'Test REST, GraphQL, and SOAP APIs with automated test suites and real-time monitoring.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500'},
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Performance Testing',
      description: 'Load testing, stress testing, and performance benchmarking for your APIs.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500'},
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Security Testing',
      description: 'Automated security testing including authentication, authorization, and vulnerability scanning.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Real-Time Monitoring',
      description: '24/7 API monitoring with instant alerts for downtime, errors, and performance issues.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500'}],
  const testTypes = [
    {
      name: 'Functional Testing',
      description: 'Verify that your API endpoints work correctly and return expected responses.',
      tests: ['Request/response validationStatus code verificationData format checkingError handling']
    },
    {
      name: 'Performance Testing',
      description: 'Ensure your APIs can handle expected load and perform under pressure.',
      tests: ['Load testingStress testingResponse time analysisThroughput measurement']
    },
    {
      name: 'Security Testing',
      description: 'Identify security vulnerabilities and ensure proper authentication and authorization.',
      tests: ['Authentication testingAuthorization checksInput validationSQL injection testing']
    },
    {
      name: 'Integration Testing',

=======
      description: 'Test how your APIs integrate with other systems and services.',
      tests: ['End-to-end workflowsThird-party integrationsData flow validationError propagation']
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ],

  const pricing = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for developers and small teams',
      features: [

        '100 API tests/monthBasic test scenariosEmail notificationsBasic reporting5 API endpointsCommunity support'
      ],
      popular: false
    },

    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and development teams',
      features: [

        '500 API tests/monthAdvanced test scenariosSMS & email alertsAdvanced reporting25 API endpointsPerformance testingAPI accessPriority support'
      ],
      popular: true
    },

    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with complex API requirements',
      features: [

        'Unlimited API testsCustom test scenariosCustom alerting rules24/7 dedicated supportUnlimited endpointsAdvanced security testingWhite-label optionsCustom integrations'
      ],
      popular: false
    }

  ],

  const handleTestAPI = async () => {
    if (!apiEndpoint.trim()) return,

=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    setIsTesting(true),
    // Simulate API testing
    setTimeout(() => {
      setTestResults({
        endpoint: apiEndpoint,
        status: 'success',
        responseTime: '245ms',
        statusCode: 200,
        tests: [

        recommendations: [
          'Consider implementing response caching for better performanceMonitor response times during peak usageImplement rate limiting headers for better API documentation'
        ]
      }),

=======
      setIsTesting(false)
    }, 3000)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  return (
    <>
      <Head>

      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Professional API Testing
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            API Testing Suite
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Test, monitor, and optimize your APIs with our comprehensive testing suite. Functional, performance, and security testing for REST, GraphQL, and SOAP APIs. Ensure your APIs are reliable, fast, and secure.
          </p>
          
          {/* API Testing Form */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="url"
                placeholder="API Endpoint (e.g., https://api.example.com/users)"
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
                className="px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="API Key (optional)"
                value={apiKey}

=======
                onChange={(e) => setApiKey(e.target.value)}
                className="px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              />
            </div>
            <Button
              onClick={handleTestAPI}

=======
              size="lg"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-2xl hover-glow"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              disabled={isTesting || !apiEndpoint.trim()}
            >
              {isTesting ? (
                <>

=======
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Testing API...
                </>
              ) : (
                <>

=======
                  <Play className="w-5 h-5 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Test API Endpoint
                </>
              )}
            </Button>
          </div>


              href="#pricing"
              variant="outline"
              size="lg"
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white shadow-2xl"

            >
              View Pricing
            </Button>
            <Button

              href="/contact"
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl"

            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}

              Powerful Testing Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our API testing suite provides everything you need to ensure your APIs are reliable, performant, and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-indigo"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>

=======
                    <p className="text-gray-400 leading-relaxed">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Types Section */}

              Comprehensive Testing Coverage
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We cover all aspects of API testing to ensure your APIs meet the highest standards of quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testTypes.map((type, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-indigo"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">{type.name}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.tests.map((test, testIndex) => (

=======
                    <li key={testIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {test}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Test Results */}
      {testResults && (

                API Test Results
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample API test result. Get comprehensive insights for your own API endpoints.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Summary Card */}
              <Card className="border-gradient-indigo text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Test Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400 font-bold">Success</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-indigo-400 font-bold">{testResults.responseTime}</span>
                  </div>

=======
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status Code</span>
                    <span className="text-green-400 font-bold">{testResults.statusCode}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>
              </Card>

              {/* Test Results */}

                  {testResults.tests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{test.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          test.status === 'pass' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {test.status}
                        </span>

=======
                        <span className="text-xs text-gray-400">{test.value}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Performance Metrics */}

                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Throughput</span>
                    <span className="text-green-400 font-bold">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Reliability</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </div>

=======
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-green-400 font-bold">24/7</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>
              </Card>
            </div>

            {/* Recommendations */}

=======
            <Card className="border-gradient-indigo">
              <h3 className="text-2xl font-bold mb-6 text-white">Optimization Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testResults.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{rec}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Pricing Section */}

              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the API testing plan that best fits your development and testing needs.
            </p>
          </div>


=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`card-hover border-gradient-indigo ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (

=======
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Most Popular
                    </span>
                  </div>
                )}

                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (

=======
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button

=======
                  href="/contact"
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover: from-indigo-600 hover:to-purple-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

            Ready to Test Your APIs?
          </h2>
          <p className="text-responsive-md text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of developers and businesses using our API testing suite to ensure their APIs are reliable and performant.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button

              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl"

            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
