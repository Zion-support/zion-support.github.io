import React, { useState } from 'react',
import Head from 'next/head'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react',

export default function APIRateLimiterPage() {
  const [endpoint, setEndpoint] = useState(''),
  const [rateLimit, setRateLimit] = useState('100'),
  const [timeWindow, setTimeWindow] = useState('1m'),
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false),
  const [apiKey, setApiKey] = useState(''),

  const timeWindows = [
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ],

  const rateLimits = [
    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ],

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36),
    setApiKey(key)
  },

  const testRateLimiting = async () => {
    if (!endpoint.trim() || !rateLimit || !timeWindow) return,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    
    setIsTesting(true),
    setTestResults([]),
    
    const limit = parseInt(rateLimit)
    const results = []
    
    // Simulate API calls to test rate limiting
    for (let i = 1, i <= limit + 5, i++) {
      await new Promise(resolve => setTimeout(resolve, 100)),
      
      const isAllowed = i <= limit
      const status = isAllowed ? 'success' : 'rate_limited'
      const statusCode = isAllowed ? 200 : 429
      
      results.push({
        request: i,
        timestamp: new Date().toLocaleTimeString(),
        status,
        statusCode,
        responseTime: Math.random() * 100 + 50,
        headers: {
          'X-RateLimit-Limit': limit,
          'X-RateLimit-Remaining': Math.max(0, limit - i),
          'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()
        }
      }),
      
      
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
      if (!isAllowed) break
    }
    
    setTestResults(results),
    setIsTesting(false)
  },

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  },

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />,
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />,
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    }
  },
    }
  },
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  const _getStatusColor = (_status: string) => {_switch (status) {
      case 'success':
        return 'text-green-400',
      case 'rate_limited':
        return 'text-red-400',
      default:
        return 'text-yellow-400'
    }
  },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  return (_<>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;API Rate Limiter - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Protect your APIs with intelligent rate limiting and prevent abuse.&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6&quot;>
              <Shield className=&quot;w-4 h-4 mr-2&quot; />
              API Protection & Security
            </div>
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            API Rate Limiter
          </h1>
          <p className=&quot;text-xl text-green-200 max-w-4xl mx-auto leading-relaxed&quot;>
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, 
            and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
          </p>
        </div>
      </section>

      {/* Rate Limiter Configuration */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
              Configure Your Rate Limiting
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Configuration Form */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-6 flex items-center&quot;>
                <Code className=&quot;w-6 h-6 mr-3 text-green-400&quot; />
                Rate Limiting Rules
              </h3>

              <div className=&quot;space-y-6&quot;>
                {/* API Endpoint */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    API Endpoint
                  </label>
                  <input
                    type=&quot;text&quot;
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder=&quot;e.g., /api/users, /api/data, /api/analytics&quot;
                    className=&quot;w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent&quot;
                  />
                </div>

                {_/* Rate Limit */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>
                    Rate Limit
                  </label>
                  <div className=&quot;grid grid-cols-2 gap-3&quot;>
                    {rateLimits.map((limit) => (
                      <button
                        key={limit.value}
                        onClick={_() => setRateLimit(limit.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
                        <div className=&quot;font-medium&quot;>{limit.label}</div>
                        <div className=&quot;text-xs text-gray-400 mt-1&quot;>{limit.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {_/* Time Window */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>
                    Time Window
                  </label>
                  <div className=&quot;grid grid-cols-2 gap-3&quot;>
                    {timeWindows.map((window) => (
                      <button
                        key={window.value}
                        onClick={_() => setTimeWindow(window.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
                        <div className=&quot;font-medium&quot;>{window.label}</div>
                        <div className=&quot;text-xs text-gray-400 mt-1&quot;>{window.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {_/* API Key Generation */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    API Key
                  </label>
                  <div className=&quot;flex space-x-2&quot;>
                    <input
                      type=&quot;text&quot;
                      value={apiKey}
                      readOnly
                      placeholder=&quot;Generate an API key to test rate limiting&quot;
                      className=&quot;flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400&quot;
                    />
                    <Button
                      onClick={generateApiKey}
                      className=&quot;px-6 py-3 bg-green-600 hover:bg-green-700 text-white&quot;
                    >
                      Generate
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={testRateLimiting}
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className=&quot;w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;
                >
                  {_isTesting ? (
                    <>
                      <RefreshCw className=&quot;w-5 h-5 mr-2 animate-spin&quot; />
                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
                      <Zap className=&quot;w-5 h-5 mr-2&quot; />
                      Test Rate Limiting
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Test Results */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>
                  <BarChart3 className=&quot;w-6 h-6 mr-3 text-blue-400&quot; />
                  Test Results
                </h3>
                {_testResults.length > 0 && (_<Button
                    onClick={() => setTestResults([])}
                    variant=&quot;outline&quot;
                    size=&quot;sm&quot;
                    className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
                  >
                    Clear Results
                  </Button>
                )}
              </div>

              {testResults.length > 0 ? (
                <div className=&quot;space-y-3 max-h-96 overflow-y-auto&quot;>
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={_`p-4 rounded-lg border ${
                        result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}`}
                    >
                      <div className=&quot;flex items-center justify-between mb-2&quot;>
                        <div className=&quot;flex items-center space-x-3&quot;>
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>{result.timestamp}</span>
                      </div>
                      
                      <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                        <div>
                          <span className=&quot;text-gray-400&quot;>Status:</span>
                          <span className={`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {result.statusCode} {result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>
                        </div>
                        <div>
                          <span className=&quot;text-gray-400&quot;>Response Time:</span>
                          <span className=&quot;ml-2 text-white&quot;>{result.responseTime.toFixed(0)}ms</span>
                        </div>
                      </div>

                      {result.status === 'rate_limited' && (
                        <div className=&quot;mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300&quot;>
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className=&quot;bg-gray-900 p-6 rounded-lg border border-gray-700 text-center&quot;>
                  <div className=&quot;text-6xl mb-4&quot;>📊</div>
                  <p className=&quot;text-gray-400&quot;>
                    Test results will appear here. Configure your settings and click &quot;Test Rate Limiting&quot; to see how it works.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className=&quot;py-20 bg-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
              Advanced Rate Limiting Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Enterprise-grade rate limiting with intelligent algorithms and comprehensive monitoring.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🛡️</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>DDoS Protection</h3>
              <p className=&quot;text-gray-400&quot;>
                Advanced algorithms detect and prevent distributed denial of service attacks in real-time.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>⚡</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>High Performance</h3>
              <p className=&quot;text-gray-400&quot;>
                Built on Redis and optimized for high-throughput applications with minimal latency.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🎯</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Flexible Rules</h3>
              <p className=&quot;text-gray-400&quot;>
                Configure different limits for different endpoints, users, or IP addresses.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📊</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Real-time Analytics</h3>
              <p className=&quot;text-gray-400&quot;>
                Monitor API usage, identify patterns, and optimize your rate limiting strategy.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔧</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Easy Integration</h3>
              <p className=&quot;text-gray-400&quot;>
                Simple REST API and SDKs for Node.js, Python, Go, and other popular languages.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🌍</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Global Distribution</h3>
              <p className=&quot;text-gray-400&quot;>
                Edge locations worldwide ensure consistent performance and low latency for all users.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
              Quick Integration Examples
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Get started with our rate limiting service in just a few lines of code.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            <Card className=&quot;p-6 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-xl font-bold text-white mb-4 flex items-center&quot;>
                <Code className=&quot;w-5 h-5 mr-2 text-green-400&quot; />
                Node.js Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
}),

console.log('Response:', response.data),
console.log('Rate Limit Info:', {
  }
}),

  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
}),`}
                </pre>
              </div>
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios')

const apiKey = '${apiKey || 'your_api_key_here'}'
const endpoint = '${endpoint || '/api/users'}'
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
  }
}),

console.log('Response:', response.data),
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
}),`)}
  }
}),

                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Copy className=&quot;w-4 h-4 mr-2&quot; />
                Copy Code
              </Button>
            </Card>

            <Card className=&quot;p-6 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-xl font-bold text-white mb-4 flex items-center&quot;>
                <Code className=&quot;w-5 h-5 mr-2 text-blue-400&quot; />
                Python Example
              </h3>
              <div className=&quot;bg-gray-900 p-4 rounded-lg overflow-x-auto&quot;>
                <pre className=&quot;text-sm text-gray-300&quot;>
{`import requests

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${_endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{_endpoint}',
    headers=headers
)

print('Response:', response.json())
print('Rate Limit Info:', {_'limit': response.headers.get('x-ratelimit-limit'), _'remaining': response.headers.get('x-ratelimit-remaining'), _'reset': response.headers.get('x-ratelimit-reset')})`}
                </pre>
              </div>
              <Button
                onClick={_() => copyToClipboard(`import requests

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${_endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{_endpoint}',
    headers=headers
)

print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),
    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant=&quot;outline&quot;
                size=&quot;sm&quot;
                className=&quot;mt-4 border-gray-600 text-gray-300 hover:bg-gray-700&quot;
              >
                <Copy className=&quot;w-4 h-4 mr-2&quot; />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            Ready to Protect Your APIs?
          </h2>
          <p className=&quot;text-xl text-green-100 mb-8&quot;>
            Join thousands of developers and companies who trust our rate limiting service to protect their APIs.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-green-600 hover:bg-gray-100&quot;
            >
              Get Started Today
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-green-600&quot;
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}