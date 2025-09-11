>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';

  CheckCircle,;
  AlertTriangle,;
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======
import {
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function APIRateLimiterPage() {;



import {
  Shield
  Zap
  BarChart3
  Code
  ArrowRight
  Copy
  RefreshCw
  CheckCircle
  AlertTriangle;
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

export default function APIRateLimiterPage() {
  Shield,
  Zap,
  BarChart3,
  Code,
  ArrowRight,
  Copy,
  RefreshCw,
  CheckCircle,;
  AlertTriangle,;
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
export default function APIRateLimiterPage() {;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
  }
=======

  ];
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },

    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
=======
=======

    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
  }
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const timeWindows = [;
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },;
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },;
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },;
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
  };

  const testRateLimiting = async () => {;
    if (!endpoint && endpoint.trim() || !rateLimit || !timeWindow) return;

=======

  };
  const testRateLimiting = async () => {
    if (!endpoint.trim() |!rateLimit |!timeWindow) return;
    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
    const results = [];

    // Simulate API calls to test rate limiting;
    for (let i = 1; i <= limit + 5; i++) {;

      results && results.push({;
        request: i,;
        timestamp: new Date().toLocaleTimeString(),;
        status,;
        statusCode,;
        responseTime: Math && Math.random() * 100 + 50,;
        headers: {;
          'X-RateLimit-Limit': limit,;
          'X-RateLimit-Remaining': Math && Math.max(0, limit - i),;
          'X-RateLimit-Reset': new Date(Date && Date.now() + 60000).toISOString(),;
        },;

  };
  const testRateLimiting = async () => {
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
;
  const rate_limits = [;
    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },
    { value: '10000', label: '10000 requests', description: 'Enterprise' },
  ];
;
  const generateApiKey = () =>: any {
    const key =;
      'zt_' +;
      Math.random ().to_string (36).substr (2, 9) +;
      '_' +;
      Date.now ().to_string (36);
    setApiKey (key);  }
;
  const testRateLimiting = async () => {
    if (|| !rate_limit || !time_window) return) {
  $2
}
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
;
  const generateApiKey = () =>: any {
    const key = 'zt_' + Math.random ().to_string (36).substr (2, 9) + '_' + Date.now ().to_string (36);
    setApiKey (key);
  }
;
  const testRateLimiting = async () => {
    if (|| !rate_limit || !time_window) return) {
  $2
}
    setIsTesting (true);
    setTestResults ([]);
;
    const limit = parse_int (rate_limit);
    const results = [];
;
    // Simulate API calls to test rate limiting;
    for (let index = 1; i <= limit + 5; i++) {
      await new Promise (resolve => set_timeout (resolve, 100));
;
      const is_allowed = i <= limit;
      const status = is_allowed ? 'success' : 'rate_limited';
      const status_code = is_allowed ? 200 : 429;
;
      results.push ({
        request: i,
        timestamp: new Date ().toLocaleTimeString (),
        status,
        status_code,
        response_time: Math.random () * 100 + 50,
        headers: {
          'X - RateLimit - Limit': limit,
          'X - RateLimit - Remaining': Math.max (0, limit - i),
          'X - RateLimit - Reset': new Date (Date.now () + 60000).toISOString (),
        },
      });
;
      // Check condition
if (break) {
  $2
}
    }
    setTestResults (results);
    setIsTesting (false);
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);  }    setIsTesting (true);
    setTestResults ([]);
;
    const limit = parse_int (rate_limit);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const results = [];
;
    // Simulate API calls to test rate limiting;
    for (let index = 1, i <= limit + 5, i++) {
      await new Promise (resolve => set_timeout (resolve, 100));
;
      const is_allowed = i <= limit;
      const status = is_allowed ? 'success' : 'rate_limited';
      const status_code = is_allowed ? 200 : 429;
;
      results.push ({
        request: i,
        timestamp: new Date ().toLocaleTimeString (),
        status;
        status_code;
        response_time: Math.random () * 100 + 50,
        headers: {
          'X - RateLimit - Limit': limit;
          'X - RateLimit - Remaining': Math.max (0, limit - i);
          'X - RateLimit - Reset': new Date (Date.now () + 60000).toISOString ();
        }
      });
;
      // Check condition
if (break) {
  $2
}
    }
    setTestResults (results);
    setIsTesting (false);
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);
  }
;
  const getStatusIcon = (status: string) =>: any {
    switch (status) {
      default:


=======
    }




  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400'
      default:

                {/* API Key Generation */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    API Key
                  ">
                    API Key
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />;
                    <Button
                      onClick={generateApiKey}
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
    
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

  const _getStatusColor = (_status: string) => {_switch (status) {
      case 'success':
        return 'text-green-400',
      case 'rate_limited':
        return 'text-red-400',
      default:
        return 'text-yellow-400'
    }
  },

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
                      <button

                        key={limit.value}
                        onClick={() => setRateLimit(limit.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className='font-medium'>{limit.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {limit.description}
                        </div>                      </button>                        <div className="font-medium">{limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{limit.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
=======
=======
                {/* Time Window */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                      <button

                        key={window.value}
                        onClick={() => setTimeWindow(window.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className='font-medium'>{window.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {window.description}
                        </div>                      </button>                        <div className="font-medium">{window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{window.description}</div>
                      </button>
                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={generateApiKey}
                <Button
                  onClick={testRateLimiting}
                  disabled={
                    !endpoint.trim() |!rateLimit |!timeWindow |isTesting
                  }
                  className='w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className='w-5 h-5 mr-2 animate-spin' />                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
                      <Zap className='w-5 h-5 mr-2' />                      Test Rate Limiting                  disabled={!endpoint.trim() |!rateLimit |!timeWindow |isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
                      <Zap className='w-5 h-5 mr-2' />                      <Zap className="w-5 h-5 mr-2" />
                      Test Rate Limiting
                    </>
                  )}
                </Button>
              </div>
            </Card>
=======


            {/* Test Results */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <div className='flex items-center justify-between mb-6'>;
                <h3 className='text-2xl font-bold text-white flex items-center'>;
                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />                  Test Results            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <div className="flex items-center justify-between mb-6">;
                <h3 className="text-2xl font-bold text-white flex items-center">;
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />;
                </h3>;
                {testResults && testResults.length > 0 && (;
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



            {/* Test Results */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />                  Test Results            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />


                </h3>
                {testResults.length > 0 && (
            {/* Test Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />

                  Test Results

=======
=======                </h3>
                {testResults.length > 0 && (
                  <Button
                    onClick={() => setTestResults([])}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Clear Results
                  </Button>
                )}
              </div>
              {testResults.length > 0 ? (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{result.timestamp}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className={`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {result.statusCode} {result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Response Time:</span>
                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>



==============                        </div>
                      </div>
                      {result.status === 'rate_limited' && (

                        </div>


                      )}
                    </div>;
                  ))}

                </div>
              ) : (
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>;
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>
                          <strong>Rate Limited:</strong> Request exceeded the
                          limit of {rateLimit} requests per {timeWindow}                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>

                        </div>

                      )}
                    </div>;
                  ))}
                </div>
              ) : (
                </div>
              )}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Rate Limiting Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade rate limiting with intelligent algorithms and comprehensive monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">DDoS Protection</h3>
              <p className="text-gray-400">
                Advanced algorithms detect and prevent distributed denial of service attacks in real-time.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-400">
                Built on Redis and optimized for high-throughput applications with minimal latency.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Rules</h3>
              <p className="text-gray-400">
                Configure different limits for different endpoints, users, or IP addresses.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-400">
                Monitor API usage, identify patterns, and optimize your rate limiting strategy.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-400">
                Simple REST API and SDKs for Node.js, Python, Go, and other popular languages.
              </p>
            </Card>
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
                <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>
                  <div className='text-6xl mb-4'>📊</div>
                  <p className='text-gray-400'>
                    Test results will appear here. Configure your settings and
                    click "Test Rate Limiting" to see how it works.                  </p>                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>

=======
=======                          </span>;
                        </div>;
                        <div>;
                          <span className='text-gray-400'>Response Time:</span>;
                          <span className='ml-2 text-white'>;
                            {result && result.responseTime.toFixed(0)}ms;
                          </span>                        </div>;
                      </div>;
                      {result && result.status === 'rate_limited' && (;
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>;
                          <strong>Rate Limited:</strong> Request exceeded the;
                          limit of {rateLimit} requests per {timeWindow}                        </div>                      }`}
                    >;
                      <div className="flex items-center justify-between mb-2">;
                        <div className="flex items-center space-x-3">;
                          {getStatusIcon(result && result.status)}
                          <span className={`font-medium ${getStatusColor(result && result.status)}`}>;
                            Request #{result && result.request}
                          </span>;
                        </div>;
                        <span className="text-sm text-gray-400">{result && result.timestamp}</span>;
                      </div>;
                      <div className="grid grid-cols-2 gap-4 text-sm">;
                        <div>;
                          <span className="text-gray-400">Status:</span>;
                          <span className={`ml-2 font-medium ${getStatusColor(result && result.status)}`}>;
                            {result && result.statusCode} {result && result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>;
                        </div>;
                        <div>;
                          <span className="text-gray-400">Response Time:</span>;
                          <span className="ml-2 text-white">{result && result.responseTime.toFixed(0)}ms</span>;
                        </div>;
                      </div>;
                      {result && result.status === 'rate_limited' && (;
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>;
                          <strong>Rate Limited:</strong> Request exceeded the;
                          limit of {rateLimit} requests per {timeWindow}                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">;

                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>;

=======
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>


                        </div>
                      </div>
                      {result.status === 'rate_limited' && (


                        </div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                        </div>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      )}
                    </div>;
                  ))}

=======
                </div>
              ) : (
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.
                  </p>
                </div>







              Advanced Rate Limiting Features


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Enterprise-grade rate limiting with intelligent algorithms and
              comprehensive monitoring.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🛡️</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                DDoS Protection
              </h3>
              <p className='text-gray-400'>
                Advanced algorithms detect and prevent distributed denial of
                service attacks in real-time.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                High Performance
              </h3>
              <p className='text-gray-400'>
                Built on Redis and optimized for high-throughput applications
                with minimal latency.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🎯</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Flexible Rules
              </h3>
              <p className='text-gray-400'>
                Configure different limits for different endpoints, users, or IP
                addresses.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📊</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Real-time Analytics
              </h3>
              <p className='text-gray-400'>
                Monitor API usage, identify patterns, and optimize your rate
                limiting strategy.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔧</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Easy Integration
              </h3>
              <p className='text-gray-400'>
                Simple REST API and SDKs for Node.js, Python, Go, and other
                popular languages.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🌍</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Global Distribution
              </h3>
              <p className='text-gray-400'>
                Edge locations worldwide ensure consistent performance and low
                latency for all users.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Distribution</h3>
              <p className="text-gray-400">
                Edge locations worldwide ensure consistent performance and low latency for all users.
              </p>
=======

              </p>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quick Integration Examples

=======
});`}
                </pre>;
              </div>;
              <Button
                onClick={() =>;
                  copyToClipboard(`const axios = require('axios');}),`}
                </pre>;
              </div>;
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios');
const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {


    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }


    'X-RateLimit-Window': '${timeWindow}'  }



  }
});


console && console.log('Response:', response && response.data);
console && console.log('Rate Limit Info:', {;
  limit: response && response.headers['x-ratelimit-limit'],;
  remaining: response && response.headers['x-ratelimit-remaining'],;
  reset: response && response.headers['x-ratelimit-reset'];
});`);

                }
                variant='outline';
                size='sm';
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700';
              >;
                <Copy className='w-4 h-4 mr-2' />                Copy Code;
              </Button>;
            </Card>;
}),`)}

    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';

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

=======

    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
=======}),`}
                </pre>
              </div>
              <Button
const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {


    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }


=======
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',

=======
=======
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'    'X-RateLimit-Window': '${timeWindow}'  }


  }
});


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                }
                variant='outline';
                size='sm';
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700';
              >;
                <Copy className='w-4 h-4 mr-2' />                Copy Code;
              </Button>;
            </Card>;
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
    'X-RateLimit-Window': '${timeWindow}'  }

  }
});
console.log('Response:', response.data);
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit']
  remaining: response.headers['x-ratelimit-remaining']
  reset: response.headers['x-ratelimit-reset']
});`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />                Copy Code
              </Button>
            </Card>
}),`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover: bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
              </Button>
            </Card>
            <Card className='p-6 bg-gray-800 border border-gray-700'>
              <h3 className='text-xl font-bold text-white mb-4 flex items-center'>
                <Code className='w-5 h-5 mr-2 text-blue-400' />
                Python Example
              </h3>
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'>
                <pre className='text-sm text-gray-300'>
                  {`import requests
=======
==============
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
}),`)}

                Copy Code
              </Button>
            </Card>



api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',

=======
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}


response = requests.get(;

    headers=headers

)
print('Response:', response.json())
print('Rate Limit Info:', {

    'limit': response.headers.get('x-ratelimit-limit');

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${_endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(
    f'https://api.zion.tech{endpoint}';
    headers=headers
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit');
=======    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
=======
    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
=======                variant="outline";
                size="sm";
                className="mt-4 border-gray-600 text-gray-300 hover: bg-gray-700";
              >;
                <Copy className="w-4 h-4 mr-2" />;
              </Button>;
            </Card>;
            <Card className='p-6 bg-gray-800 border border-gray-700'>;
              <h3 className='text-xl font-bold text-white mb-4 flex items-center'>;
                <Code className='w-5 h-5 mr-2 text-blue-400' />;
                Python Example;
              </h3>;
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'>;
                <pre className='text-sm text-gray-300'>;
                  {`import requests;
            <Card className="p-6 bg-gray-800 border border-gray-700">;
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">;
                <Code className="w-5 h-5 mr-2 text-blue-400" />;
                Python Example;
              </h3>;
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">;
                <pre className="text-sm text-gray-300">;
{`import requests;
api_key = '${apiKey || 'your_api_key_here'}';
endpoint = '${endpoint || '/api/users'}';
# Make API request with rate limiting;
headers = {;
    'Authorization': f'Bearer {api_key}',;
    'X-RateLimit-Limit': '${rateLimit}',;
    'X-RateLimit-Window': '${timeWindow}';
response = requests && requests.get(;
    f'https://api && api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}';
}
response = requests && requests.get(;
    f'https://api && api.zion.tech{endpoint}';
);
print('Response:', response && response.json());
print('Rate Limit Info:', {;
    'limit': response && response.headers.get('x-ratelimit-limit'),;
    'remaining': response && response.headers.get('x-ratelimit-remaining'),    'reset': response && response.headers.get('x-ratelimit-reset')    'limit': response && response.headers.get('x-ratelimit-limit');
    'remaining': response && response.headers.get('x-ratelimit-remaining');
    'reset': response && response.headers.get('x-ratelimit-reset');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
})`}
                </pre>;
              </div>;
              <Button


})`}
                </pre>
              </div>
              <Button
                onClick={() =>
                  copyToClipboard(`import requests                onClick={() => copyToClipboard(`import requests
api_key = '${apiKey |'your_api_key_here'}'
endpoint = '${endpoint |'/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(

    f'https://api.zion.tech{endpoint}';

    headers=headers

)
print('Response:', response.json())
print('Rate Limit Info:', {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                variant="outline";
                size="sm";
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700";
              >;
                <Copy className="w-4 h-4 mr-2" />;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            <Card className='p - 6 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - xl font - bold text - white mb - 4 flex items - center'>;
                <Code className='w - 5 h - 5 mr - 2 text - green - 400' />;
                Node.js Example;
              </h3>;
              <div className='bg - gray - 900 p - 4 rounded - lg overflow - x-auto'>;
                <pre className='text - sm text - gray - 300'>;
                  {`const axios = require ('axios');              Quick Integration Examples;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              Get started with our rate limiting service in just a few lines of code.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
            <Card className="p - 6 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - xl font - bold text - white mb - 4 flex items - center">;
                <Code className="w - 5 h - 5 mr - 2 text - green - 400" />;
                Node.js Example;
              </h3>;
              <div className="bg - gray - 900 p - 4 rounded - lg overflow - x-auto">;
                <pre className="text - sm text - gray - 300">;
{`const axios = require ('axios');
;
const api_key = '${api_key || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api / users'}';
;
// Make API request with rate limiting;
const response = await axios.get (\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${api_key}\`,
    'X - RateLimit - Limit': '${rate_limit}',
    'X - RateLimit - Window': '${time_window}'  }    'Authorization': \`Bearer \${api_key}\`;
    'X - RateLimit - Limit': '${rate_limit}X - RateLimit - Window': '${time_window}';
  }
});
;
console.log ('Response:', response.data);
console.log ('Rate Limit Info:', {
  limit: response.headers['x - ratelimit - limit'],
  remaining: response.headers['x - ratelimit - remaining'],
  reset: response.headers['x - ratelimit - reset'];
});`}
                </pre>;
              </div>;
              <Button;
                on_click={() =>;
                  copyToClipboard (`const axios = require ('axios');}), `}
                </pre>;
              </div>;
              <Button;
                on_click={() => copyToClipboard (`const axios = require ('axios');
const api_key = '${api_key || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api / users'}';
;
// Make API request with rate limiting;
const response = await axios.get (\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${api_key}\`,
    'X - RateLimit - Limit': '${rate_limit}',
    'X - RateLimit - Window': '${time_window}'  }    'Authorization': \`Bearer \${api_key}\`;
    'X - RateLimit - Limit': '${rate_limit}X - RateLimit - Window': '${time_window}';
  }
});
;
console.log ('Response:', response.data);
console.log ('Rate Limit Info:', {
  limit: response.headers['x - ratelimit - limit'],
  remaining: response.headers['x - ratelimit - remaining'],
  reset: response.headers['x - ratelimit - reset'];
});`);
                }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Copy Code;
              </Button>;
            </Card>;
          </div>;
        </div>;
      </section>;
  );    </>;
  );
}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Protect Your APIs?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of developers and companies who trust our rate limiting service to protect their APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
api_key = '${apiKey |'your_api_key_here'}'
endpoint = '${endpoint |'/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(

response = requests.get(;
    f'https://api.zion.tech{endpoint}';
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit')
    'remaining': response.headers.get('x-ratelimit-remaining'),    'reset': response.headers.get('x-ratelimit-reset')    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
})`}
                </pre>
              </div>
              <Button
                onClick={() =>
                  copyToClipboard(`import requests                onClick={() => copyToClipboard(`import requests
api_key = '${apiKey |'your_api_key_here'}'
endpoint = '${endpoint |'/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(

response = requests.get(;
    f'https://api.zion.tech{endpoint}';
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit')
    'remaining': response.headers.get('x-ratelimit-remaining')

    'reset': response.headers.get('x-ratelimit-reset')
})`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />                Copy Code    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-green-600 to-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
          </h2>
          <p className='text-xl text-green-100 mb-8'>
            Join thousands of developers and companies who trust our rate
            limiting service to protect their APIs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>;
  );    </>
  )
}
  );
=======
=======
  );    </>;
  );

}
  );>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
