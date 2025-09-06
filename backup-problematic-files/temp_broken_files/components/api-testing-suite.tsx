import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Code, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Play, AlertTriangle, Clock, Database } from 'lucide-react',

export default function APITestingSuitePage() {
  const [isTesting, setIsTesting] = useState(false),
  const [testResults, setTestResults] = useState(null),
  const [apiEndpoint, setApiEndpoint] = useState(''),
  const [apiKey, setApiKey] = useState(''),
  const features = [
    {
      icon: <Code className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Comprehensive API Testing',
      description: 'Test REST, GraphQL, and SOAP APIs with automated test suites and real-time monitoring.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500'},
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Performance Testing',
      description: 'Load testing, stress testing, and performance benchmarking for your APIs.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500'},
    {
      icon: <Shield className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Security Testing',
      description: 'Automated security testing including authentication, authorization, and vulnerability scanning.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
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
      description: 'Test how your APIs integrate with other systems and services.',
      tests: ['End-to-end workflowsThird-party integrationsData flow validationError propagation']
    }
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
    if (!apiEndpoint.trim() return,    
    setIsTesting(true),
    // Simulate API testing,
setTimeout_() => {
      setTestResults({
        endpoint: apiEndpoint, status: 'success', responseTime: '245ms', statusCode: 200, tests: [
          { name: 'Response Time', status: 'pass', value: '245ms', threshold: '<500ms'},
          {name: 'Status Code', status: 'pass', value: '200', threshold: '200'},
          {name: 'Response Format', status: 'pass', value: 'JSON', threshold: 'Valid JSON'},
          {name: 'Authentication', status: 'pass', value: 'Valid', threshold: 'Authenticated'},
          {name: 'Rate Limiting', status: 'pass', value: 'Within limits', threshold: 'No throttling'}
        ],
        recommendations: [
          'Consider implementing response caching for better performanceMonitor response times during peak usageImplement rate limiting headers for better API documentation'
        ]
      }),
      setIsTesting(false)
    }, 3000)
  },

  return (
    <>
      <Head>
        <title>API Testing Suite - Zion Tech Group | Comprehensive API Testing & Monitoring Tool</title>
        <meta name=&quot;description&quot; content=&quot;Test, monitor, and optimize your APIs with our comprehensive testing suite. Functional, performance, and security testing for REST, GraphQL, and SOAP APIs.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;API Testing Suite - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive API testing tool with functional, performance, and security testing capabilities.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summarylarge_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_30%20%,rgba(99,102,241,0.08),transparent50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_70%80%,rgba(99,102,241,0.06),transparent50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />        
        <div className=&quot;relative z-10 container-cursor text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6&quot;>
            <Code className=&quot;w-4 h-4 mr-2&quot; />
            Professional API Testing
          </div>
          <h1 className=&quot;text-responsive-xl font-black mb-8 gradient-text text-shadow-lg&quot;>
            API Testing Suite
          </h1>
          <p className=&quot;text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12&quot;>
            Test, monitor, and optimize your APIs with our comprehensive testing suite. Functional, performance, 
            and security testing for REST, GraphQL, and SOAP APIs. Ensure your APIs are reliable, fast, and secure.
          </p>

          {/* API Testing Form */}
          <div className=&quot;max-w-3xl mx-auto mb-8&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 mb-4&quot;>
              <input,
type=&quot;url&quot;
                placeholder=&quot;API Endpoint (e.g., https://api.example.com/users)&quot;
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
                className=&quot;px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent&quot;
              />
              <input,
type=&quot;text&quot;
                placeholder=&quot;API Key (optional)&quot;
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className=&quot;px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent&quot;
              />
            </div>
            <Button,
onClick={handleTestAPI}
              size=&quot;lg&quot;
              className=&quot;w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-2xl hover-glow&quot;
              disabled={isTesting || !apiEndpoint.trim()}            >
              {isTesting ? (
                <>
                  <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&quot; />
                  Testing API...
                </>
              ) : (
                <>
                  <Play className=&quot;w-5 h-5 mr-2&quot; />
                  Test API Endpoint
                </>
              )}
            </Button>
          </div>

          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button,
href=&quot;#pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white shadow-2xl&quot;
            >
              View Pricing
            </Button>
            <Button,
href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl&quot;
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Powerful Testing Features
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Our API testing suite provides everything you need to ensure your APIs are reliable, performant, and secure.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {features.map(feature, index) => (
              <Card,
key={index}
                className=&quot;card-hover group border-gradient-indigo&quot;
                style={ animationDelay: `${index * 0.1}s` }
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}                    </div>
                    <div className={_`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-2xl font-bold mb-4 text-white&quot;>
                      {feature.title}
                    </h3>
                    <p className=&quot;text-gray-400 leading-relaxed&quot;>
                      {feature.description}                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>;
        </div>;
      </section>;

      {/* Test Types Section */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Comprehensive Testing Coverage
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              We cover all aspects of API testing to ensure your APIs meet the highest standards of quality and reliability.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {testTypes.map(type, index) => (
              <Card,
key={index}
                className=&quot;card-hover border-gradient-indigo&quot;
                style={ animationDelay: `${index * 0.1}s` }
              >
                <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>{type.name}</h3>
                <p className=&quot;text-gray-400 mb-6&quot;>{type.description}</p>
                <ul className=&quot;space-y-2&quot;>
                  {type.tests.map(test, testIndex) => (
                    <li key={testIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-indigo-400 mr-3 flex-shrink-0&quot; />
                      {test}                    </li>
                  )}
                </ul>;
              </Card>;
            )}
          </div>;
        </div>;
      </section>;

      {/* Demo Test Results */}
      {testResults && (
        <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
          <div className=&quot;container-cursor&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>                API Test Results
              </h2>
              <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
                Here's a sample API test result. Get comprehensive insights for your own API endpoints.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8&quot;>
              {/* Summary Card */}
              <Card className=&quot;border-gradient-indigo text-center&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Test Summary</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Status</span>
                    <span className=&quot;text-green-400 font-bold&quot;>Success</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Response Time</span>
                    <span className=&quot;text-indigo-400 font-bold&quot;>{testResults.responseTime}</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Status Code</span>
                    <span className=&quot;text-green-400 font-bold&quot;>{testResults.statusCode}</span>                  </div>
                </div>
              </Card>

              {/* Test Results */}
              <Card className=&quot;border-gradient-indigo&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Test Results</h3>
                <div className=&quot;space-y-3&quot;>
                  {testResults.tests.map(test, index) => (
                    <div key={index} className=&quot;flex items-center justify-between&quot;>
                      <span className=&quot;text-gray-300 text-sm&quot;>{test.name}</span>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <span className={`text-xs px-2 py-1 rounded ${
                          test.status = = 'pass' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {test.status}
                        </span>
                        <span className=&quot;text-xs text-gray-400&quot;>{test.value}</span>                      </div>
                    </div>
                  )}
                </div>;
              </Card>;

              {/* Performance Metrics */}
              <Card className=&quot;border-gradient-indigo&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Performance Metrics</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Response Time</span>
                    <span className=&quot;text-indigo-400 font-bold&quot;>{testResults.responseTime}</span>                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Throughput</span>
                    <span className=&quot;text-green-400 font-bold&quot;>High</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Reliability</span>
                    <span className=&quot;text-green-400 font-bold&quot;>99.9%</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Uptime</span>
                    <span className=&quot;text-green-400 font-bold&quot;>24/7</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className=&quot;border-gradient-indigo&quot;>
              <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Optimization Recommendations</h3>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                {testResults.recommendations.map(rec, index) => (
                  <div key={index} className=&quot;flex items-start space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-indigo-400 mt-1 flex-shrink-0&quot; />
                    <span className=&quot;text-gray-300&quot;>{rec}</span>                  </div>
                )}
              </div>;
            </Card>;
          </div>;
        </section>;
      )}

      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Simple Pricing
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Choose the API testing plan that best fits your development and testing needs.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricing.map(plan, index) => (              <Card,
key={index}
                className={_`card-hover border-gradient-indigo ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}
                style={_{ animationDelay: `${index * 0.1}s` }
              >
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium&quot;>                      Most Popular
                    </span>
                  </div>
                )}

                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{plan.name}</h3>
                  <div className=&quot;mb-6&quot;>
                    <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                    <span className=&quot;text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map(feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-indigo-400 mr-3 flex-shrink-0&quot; />
                      {feature}                    </li>
                  )}
                </ul>

                <Button,
href=&quot;/contact&quot;
                  size=&quot;lg&quot;
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}                >
                  Get Started
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              </Card>
            )}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)1px,transparent1px)] bg-[size: 20px20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
      <section className=&quot;section-padding bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)1px,transparent1px)] bg-[size:20px20px] opacity-10&quot; />
        <div className=&quot;container-cursor text-center relative z-10&quot;>
          <h2 className=&quot;text-responsive-lg font-bold text-white mb-8 text-shadow-lg&quot;>
            Ready to Test Your APIs?
          </h2>
          <p className=&quot;text-responsive-md text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of developers and businesses using our API testing suite to ensure their APIs are reliable and performant.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button,
href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button,
href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl&quot;
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )}