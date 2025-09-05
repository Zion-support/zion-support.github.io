<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
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
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function APIRateLimiterPage() {_const [endpoint, _setEndpoint] = useState('');
  const [rateLimit, _setRateLimit] = useState('100');
  const [timeWindow, _setTimeWindow] = useState('1m');
  const [testResults, _setTestResults] = useState<any[]>([]);
  const [isTesting, _setIsTesting] = useState(false);
  const [apiKey, _setApiKey] = useState('');

  const _timeWindows = [
    { value: '1s', _label: '1 Second', _description: 'Per second rate limiting'},
    {_value: '1m', _label: '1 Minute', _description: 'Per minute rate limiting'},
    {_value: '1h', _label: '1 Hour', _description: 'Per hour rate limiting'},
    {_value: '1d', _label: '1 Day', _description: 'Per day rate limiting'}
  ];

  const _rateLimits = [
    {_value: '10', _label: '10 requests', _description: 'Very strict'},
    {_value: '100', _label: '100 requests', _description: 'Standard'},
    {_value: '1000', _label: '1000 requests', _description: 'High volume'},
    {_value: '10000', _label: '10000 requests', _description: 'Enterprise'}
  ];

  const _generateApiKey = () => {_const _key = 'zt_' + Math.random().toString(36).substr(2, _9) + '_' + Date.now().toString(36);
    setApiKey(key);};

  const _testRateLimiting = async () => {_if (!endpoint.trim() || !rateLimit || !timeWindow) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsTesting(true),
    setTestResults([]),
    
<<<<<<< HEAD
    const limit = parseInt(rateLimit),
    const results = [],
    
    // Simulate API calls to test rate limiting
    for (let i = 1, i <= limit + 5, i++) {
      await new Promise(resolve => setTimeout(resolve, 100)),
      
      const isAllowed = i <= limit,
      const status = isAllowed ? 'success' : 'rate_limited',
      const statusCode = isAllowed ? 200 : 429,
      
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
=======
    const _limit = parseInt(rateLimit);
    const _results = [];
    
    // Simulate API calls to test rate limiting
    for (let i = 1; i <= limit + 5; i++) {
      await new Promise(resolve => setTimeout(resolve, _100));
      
      const _isAllowed = i <= limit;
      const _status = isAllowed ? 'success' : 'rate_limited';
      const _statusCode = isAllowed ? 200 : 429;
      
      results.push({
        request: i, _timestamp: new Date().toLocaleTimeString(), _status, _statusCode, _responseTime: Math.random() * 100 + 50, _headers: {
          'X-RateLimit-Limit': limit, _'X-RateLimit-Remaining': Math.max(0, _limit - i), _'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (!isAllowed) break
    }
    
    setTestResults(results),
    setIsTesting(false)
  },

<<<<<<< HEAD
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  },
=======
  const _copyToClipboard = (_text: string) => {_navigator.clipboard.writeText(text);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'success':
<<<<<<< HEAD
        return <CheckCircle className="w-5 h-5 text-green-400" />,
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />,
      default:
<<<<<<< HEAD
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
=======
        return <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />;
      case 'rate_limited':
        return <AlertTriangle className=&quot;w-5 h-5 text-red-400&quot; />;
      default:
        return <AlertTriangle className=&quot;w-5 h-5 text-yellow-400&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusColor = (_status: string) => {_switch (status) {
      case 'success':
        return 'text-green-400',
      case 'rate_limited':
        return 'text-red-400',
      default:
<<<<<<< HEAD
        return 'text-yellow-400'
    }
  },
=======
        return 'text-yellow-400';}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
<<<<<<< HEAD
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
=======
        <meta name="description" content="Protect your APIs with intelligent rate limiting. Prevent abuse, _ensure fair usage, _and maintain optimal performance for all users." />
        <meta property="og:title" content="API Rate Limiter - Zion Tech Group" />
        <meta property="og:description" content="Protect your APIs with intelligent rate limiting and prevent abuse." />
      </Head>

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              API Protection & Security
            </div>
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            API Rate Limiter
          </h1>
<<<<<<< HEAD
          <p className=&quot;text-xl text-green-200 max-w-4xl mx-auto leading-relaxed&quot;>
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, 
            and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
=======
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, _prevent DDoS attacks, _and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* Rate Limiter Configuration */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* Rate Limiter Configuration */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Configure Your Rate Limiting
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Configuration Form */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <h3 className=&quot;text-2xl font-bold text-white mb-6 flex items-center&quot;>
                <Code className=&quot;w-6 h-6 mr-3 text-green-400&quot; />
                Rate Limiting Rules
              </h3>

              <div className=&quot;space-y-6&quot;>
                {/* API Endpoint */}
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_/* Configuration Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-green-400" />
                Rate Limiting Rules
              </h3>

              <div className="space-y-6">
                {_/* API Endpoint */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    API Endpoint
                  </label>
                  <input
<<<<<<< HEAD
                    type=&quot;text&quot;
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder=&quot;e.g., /api/users, /api/data, /api/analytics&quot;
                    className=&quot;w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent&quot;
=======
                    type="text"
                    value={_endpoint}
                    onChange={_(e) => setEndpoint(e.target.value)}
                    placeholder="e.g., /api/users, /api/data, /api/analytics"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>

                {_/* Rate Limit */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>
                    Rate Limit
                  </label>
<<<<<<< HEAD
                  <div className=&quot;grid grid-cols-2 gap-3&quot;>
                    {rateLimits.map((limit) => (
                      <button
=======
                  <div className="grid grid-cols-2 gap-3">
                    {_rateLimits.map(_(limit) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        key={limit.value}
                        onClick={_() => setRateLimit(limit.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
<<<<<<< HEAD
                        <div className=&quot;font-medium&quot;>{limit.label}</div>
                        <div className=&quot;text-xs text-gray-400 mt-1&quot;>{limit.description}</div>
=======
                        <div className="font-medium">{_limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{_limit.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </button>
                    ))}
                  </div>
                </div>

                {_/* Time Window */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-3&quot;>
                    Time Window
                  </label>
<<<<<<< HEAD
                  <div className=&quot;grid grid-cols-2 gap-3&quot;>
                    {timeWindows.map((window) => (
                      <button
=======
                  <div className="grid grid-cols-2 gap-3">
                    {_timeWindows.map(_(window) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        key={window.value}
                        onClick={_() => setTimeWindow(window.value)}
                        className={_`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'}`}
                      >
<<<<<<< HEAD
                        <div className=&quot;font-medium&quot;>{window.label}</div>
                        <div className=&quot;text-xs text-gray-400 mt-1&quot;>{window.description}</div>
=======
                        <div className="font-medium">{_window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{_window.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                      type=&quot;text&quot;
                      value={apiKey}
=======
                      type="text"
                      value={_apiKey}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      readOnly
                      placeholder=&quot;Generate an API key to test rate limiting&quot;
                      className=&quot;flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400&quot;
                    />
                    <Button
<<<<<<< HEAD
                      onClick={generateApiKey}
                      className=&quot;px-6 py-3 bg-green-600 hover:bg-green-700 text-white&quot;
=======
                      onClick={_generateApiKey}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Generate
                    </Button>
                  </div>
                </div>

                <Button
<<<<<<< HEAD
                  onClick={testRateLimiting}
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className=&quot;w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;
=======
                  onClick={_testRateLimiting}
                  disabled={_!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
            {/* Test Results */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>
                  <BarChart3 className=&quot;w-6 h-6 mr-3 text-blue-400&quot; />
=======
            {_/* Test Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
              {testResults.length > 0 ? (
                <div className=&quot;space-y-3 max-h-96 overflow-y-auto&quot;>
                  {testResults.map((result, index) => (
=======
              {_testResults.length > 0 ? (_<div className="space-y-3 max-h-96 overflow-y-auto">
                  {testResults.map((result, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <div
                      key={index}
                      className={_`p-4 rounded-lg border ${
                        result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}`}
                    >
<<<<<<< HEAD
                      <div className=&quot;flex items-center justify-between mb-2&quot;>
                        <div className=&quot;flex items-center space-x-3&quot;>
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                          </span>
                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>{result.timestamp}</span>
=======
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {_getStatusIcon(result.status)}
                          <span className={_`font-medium ${getStatusColor(result.status)}`}>
                            Request #{_result.request}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{_result.timestamp}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                      
                      <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                        <div>
<<<<<<< HEAD
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
=======
                          <span className="text-gray-400">Status:</span>
                          <span className={_`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {_result.statusCode} {_result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Response Time:</span>
                          <span className="ml-2 text-white">{_result.responseTime.toFixed(0)}ms</span>
                        </div>
                      </div>

                      {_result.status === 'rate_limited' && (
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {_timeWindow}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
      {/* Features */}
      <section className=&quot;py-20 bg-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
      {/* Code Examples */}
<<<<<<< HEAD
=======
      {_/* Code Examples */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
<<<<<<< HEAD
{`const axios = require('axios'),
=======
              <div className=&quot;bg-gray-900 p-4 rounded-lg overflow-x-auto&quot;>
                <pre className=&quot;text-sm text-gray-300&quot;>
{`const axios = require('axios');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const apiKey = '${apiKey || 'your_api_key_here'}',
const endpoint = '${endpoint || '/api/users'}',
=======
{_`const axios = require('axios');

const _apiKey = '${apiKey || 'your_api_key_here'}';
const _endpoint = '${_endpoint || '/api/users'}';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
<<<<<<< HEAD
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
=======
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),

<<<<<<< HEAD
<<<<<<< HEAD
// // // console.log('Response:', response.data),
// // // console.log('Rate Limit Info:', {
=======
// console.log('Response:', response.data);
// console.log('Rate Limit Info:', {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
}),`}
                </pre>
              </div>
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios'),

const apiKey = '${apiKey || 'your_api_key_here'}',
const endpoint = '${endpoint || '/api/users'}',
=======

`}
                </pre>
              </div>
              <Button
                onClick={_() => copyToClipboard(`const axios = require('axios');

const _apiKey = '${apiKey || 'your_api_key_here'}';
const _endpoint = '${_endpoint || '/api/users'}';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Make API request with rate limiting
const _response = await axios.get(\`https://api.zion.tech\${_endpoint}\`, {_headers: {
    'Authorization': \`Bearer \${apiKey}\`,
<<<<<<< HEAD
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
=======
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),

<<<<<<< HEAD
<<<<<<< HEAD
// // // console.log('Response:', response.data),
// // // console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
}),`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
=======
// console.log('Response:', response.data);
// console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
});`)}
                variant=&quot;outline&quot;
                size=&quot;sm&quot;
                className=&quot;mt-4 border-gray-600 text-gray-300 hover:bg-gray-700&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

`)}
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
<<<<<<< HEAD
              <div className=&quot;bg-gray-900 p-4 rounded-lg overflow-x-auto&quot;>
                <pre className=&quot;text-sm text-gray-300&quot;>
{`import requests
=======
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{_`import requests
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${_endpoint || '/api/users'}'

# Make API request with rate limiting
<<<<<<< HEAD
headers = {
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
=======
headers = {_'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
headers = {
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
=======
headers = {_'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${_rateLimit}',
    'X-RateLimit-Window': '${_timeWindow}'
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

response = requests.get(
    f'https://api.zion.tech{_endpoint}',
    headers=headers
)

print('Response:', response.json())
<<<<<<< HEAD
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),
    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant=&quot;outline&quot;
                size=&quot;sm&quot;
                className=&quot;mt-4 border-gray-600 text-gray-300 hover:bg-gray-700&quot;
=======
print('Rate Limit Info:', {_'limit': response.headers.get('x-ratelimit-limit'), _'remaining': response.headers.get('x-ratelimit-remaining'), _'reset': response.headers.get('x-ratelimit-reset')})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Copy className=&quot;w-4 h-4 mr-2&quot; />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
      {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
      <section className=&quot;py-20 bg-gradient-to-r from-green-600 to-blue-600&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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