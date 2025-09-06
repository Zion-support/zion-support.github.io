import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import Button from '../components/ui/Button';

import {

  Shield,
  Zap,
  BarChart3,
  Code,
  ArrowRight,
  Copy,
  RefreshCw,

  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const timeWindows = [
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' }
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' }
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' }
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
  const rateLimits = [
    { value: '10', label: '10 requests', description: 'Very strict' }
    { value: '100', label: '100 requests', description: 'Standard' }
    { value: '1000', label: '1000 requests', description: 'High volume' }
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
  const generateApiKey = () => {
    const key =
      'zt_' +
      Math.random().toString(36).substr(2, 9) +
      '_' +
      Date.now().toString(36);
    setApiKey(key);  }
  const testRateLimiting = async () => {

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
  }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
} from 'lucide-react';import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export default function APIRateLimiterPage() {;
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]),
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const timeWindows = [
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' }
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' }
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' }
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
  const rateLimits = [
    { value: '10', label: '10 requests', description: 'Very strict' }
    { value: '100', label: '100 requests', description: 'Standard' }
    { value: '1000', label: '1000 requests', description: 'High volume' }
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
  const generateApiKey = () => {
    const key =
      'zt_' +
      Math.random().toString(36).substr(2, 9) +
      '_' +
      Date.now().toString(36);
    setApiKey(key);  }
  const testRateLimiting = async () => {
    if (!endpoint.trim() |!rateLimit |!timeWindow) return;
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
  }
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;


  const timeWindows = [;
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },;
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },;
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },;
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },  ];    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const testRateLimiting = async () => {
    if (!endpoint.trim() |!rateLimit |!timeWindow) return;

    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
    const results = [];

      await new Promise(resolve => setTimeout(resolve, 100));
      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;

      });
      if (!isAllowed) break;
    }
    setTestResults(results);
    setIsTesting(false);

      await new Promise(resolve => setTimeout(resolve, 100));

      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;

  };

  const getStatusColor = (status: string) => {

=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400'
      default:
        return 'text-yellow-400';    }        return 'text-yellow-400'
    }

  return (
    <>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;    }

    }

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              API Protection & Security
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            API Rate Limiter
          </h1>
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
          </p>
        </div>
      </section>
      {/* Rate Limiter Configuration */}

            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Configuration Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-green-400" />
                Rate Limiting Rules
              </h3>
              <div className="space-y-6">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  };

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400'
      default:

    }
  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                        key={limit.value}
                        on_click={() => setRateLimit (limit.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          rate_limit === limit.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
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

                  </div>;
                </div>;


                {/* Time Window */}


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                {/* Time Window */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                    {timeWindows.map(window => (                      <button                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Time Window
                  ">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeWindows.map((window) => (
                    {timeWindows.map(window => (                      <button

                      <button

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                        key={window.value}
                        on_click={() => setTimeWindow (window.value)}
                        className={`p - 3 rounded - lg border text - left transition - all ${
                          time_window === window.value;
                            ? 'border - green - 500 bg - green - 500 / 10 text - green - 300';
                            : 'border - gray - 600 hover:border - gray - 500 text - gray - 300 hover:text - white';
                        }`}

                  </div>;
                </div>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                {/* Time Window */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>

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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {/* API Key Generation */}


                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={generateApiKey}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white"

                    >
                      Generate
                    </Button>
                  </div>
                </div>

                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>

                      Test Rate Limiting
                    </>
                  )}
                </Button>
              </div>
            </Card>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            {/* Test Results */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />                  Test Results            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />

                  Test Results

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                </h3>
                {testResults.length > 0 && (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <Button
                    onClick={() => setTestResults([])}
                    variant='outline';
                    size='sm';
                    className='border-gray-600 text-gray-300 hover:bg-gray-700'                  >                    variant="outline";
                    size="sm";
                    className="border-gray-600 text-gray-300 hover:bg-gray-700";
                  >;
                    Clear Results;
                  </Button>;
                )}

              </div>;
              {testResults && testResults.length > 0 ? (;
                <div className='space-y-3 max-h-96 overflow-y-auto'>                  {testResults && testResults.map((result, index) => (;

                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        result && result.status === 'success'
                          ? 'border-green-500/30 bg-green-500/10'
                          : 'border-red-500/30 bg-red-500/10'                <div className="space-y-3 max-h-96 overflow-y-auto">;
                  {testResults && testResults.map((result, index) => (;
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${

                      >;
                        <div className='font - medium'>{window.label}</div>;
                        <div className='text - xs text - gray - 400 mt - 1'>;
                          {window.description}
                        </div>                      </button>                        <div className="font - medium">{window.label}</div>;
                        <div className="text - xs text - gray - 400 mt - 1">{window.description}</div>;
                      </button>))}
                  </div>;
                </div>;
                {/* API Key Generation */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                    API Key;
                  </label>;
                  <div className='flex space - x-2'>;
                    <input;
                      type='text';
                      value={api_key}
                      read_only;
                      placeholder='Generate an API key to test rate limiting';
                      className='flex - 1 px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400';
                    />;
                    <Button;
                      on_click={generateApiKey}
                      className='px - 6 py - 3 bg - green - 600 hover:bg - green - 700 text - white'                    >                    API Key;
                  </label>;
                  <div className="flex space - x-2">;
                    <input;
                      type="text";
                      value={api_key}
                      read_only;
                      placeholder="Generate an API key to test rate limiting";
                      className="flex - 1 px - 4 py - 3 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400";
                    />;
                    <Button;
                      on_click={generateApiKey}
                      className="px - 6 py - 3 bg - green - 600 hover:bg - green - 700 text - white";
                    >;
                      Generate;
                    </Button>;
                  </div>;
                </div>;
                <Button;
                  on_click={testRateLimiting}
                  disabled={
                    !endpoint.trim () || !rate_limit || !time_window || is_testing;
                  }
                  className='w - full bg - gradient - to - r from - green - 600 to - blue - 600 hover:from - green - 700 hover:to - blue - 700 text - white py - 4 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed';
                >;
                  {is_testing ? (
                    <>;
                      <RefreshCw className='w - 5 h - 5 mr - 2 animate - spin' />                      Testing Rate Limiting...;
                    </>) : (
                    <>;
                      <Zap className='w - 5 h - 5 mr - 2' />                      Test Rate Limiting                  disabled={!endpoint.trim () || !rate_limit || !time_window || is_testing}
                  className="w - full bg - gradient - to - r from - green - 600 to - blue - 600 hover:from - green - 700 hover:to - blue - 700 text - white py - 4 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed";
                >;
                  {is_testing ? (
                    <>;
                      <RefreshCw className="w - 5 h - 5 mr - 2 animate - spin" />;
                      Testing Rate Limiting...;
                    </>) : (
                    <>;
                      <Zap className='w - 5 h - 5 mr - 2' />                      <Zap className="w - 5 h - 5 mr - 2" />;
                      Test Rate Limiting;
                    </>)}
                </Button>;
              </div>;
            </Card>;

            {/* Test Results */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <div className='flex items - center justify - between mb - 6'>;
                <h3 className='text - 2xl font - bold text - white flex items - center'>;
                  <BarChart3 className='w - 6 h - 6 mr - 3 text - blue - 400' />                  Test Results            <Card className="p - 8 bg - gray - 800 border border - gray - 700">;
              <div className="flex items - center justify - between mb - 6">;
                <h3 className="text - 2xl font - bold text - white flex items - center">;
                  <BarChart3 className="w - 6 h - 6 mr - 3 text - blue - 400" />;
                </h3>;
                {test_results.length > 0 && (
                  <Button;
                    on_click={() => setTestResults ([])}
                    variant='outline';
                    size='sm';
                    className='border - gray - 600 text - gray - 300 hover:bg - gray - 700'                  >                    variant="outline";
                    size="sm";
                    className="border - gray - 600 text - gray - 300 hover:bg - gray - 700";
                  >;
                    Clear Results;
                  </Button>)}
              </div>;
              {test_results.length > 0 ? (
                <div className='space - y-3 max - h-96 overflow - y-auto'>                  {test_results.map ((result, index) => (
                    <div;
                      key={index}
                      className={`p - 4 rounded - lg border ${
                        result.status === 'success';
                          ? 'border - green - 500 / 30 bg - green - 500 / 10';
                          : 'border - red - 500 / 30 bg - red - 500 / 10'                <div className="space - y-3 max - h-96 overflow - y-auto">;
                  {test_results.map ((result, index) => (
                    <div;
                      key={index}
                      className={`p - 4 rounded - lg border ${
                        result.status === 'success';
                          ? 'border - green - 500 / 30 bg - green - 500 / 10';
                          : 'border - red - 500 / 30 bg - red - 500 / 10';
                      }`}
                    >;
                      <div className='flex items - center justify - between mb - 2'>;
                        <div className='flex items - center space - x-3'>;
                          {getStatusIcon (result.status)}
                          <span;
                            className={`font - medium ${getStatusColor (result.status)}`}
                          >;

                            Request #{result.request}
                          </span>;
                        </div>;
                        <span className='text - sm text - gray - 400'>;
                          {result.timestamp}

                            className={`font-medium ${getStatusColor(result && result.status)}`}>;
                            Request #{result && result.request}
                          </span>;
                        </div>;
                        <span className='text-sm text-gray-400'>;
                          {result && result.timestamp}
                        </span>;
                      </div>;
                      <div className='grid grid-cols-2 gap-4 text-sm'>;
                        <div>;
                          <span className='text-gray-400'>Status:</span>;

                          <span
                            className={`ml-2 font-medium ${getStatusColor(result && result.status)}`}>;
                            {result && result.statusCode}{' '}
                            {result && result.status === 'success';
                              ? 'OK';
                              : 'Too Many Requests'}


            {/* Test Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                </h3>
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

                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${

                      }`}

                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                          </span>
                        </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className={`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {result.statusCode} {result.status === 'success' ? 'OK' : 'Too Many Requests'}
                          </span>
                        </div>
                        <div>

                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>

                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                        </div>
                      </div>
                      {result.status === 'rate_limited' && (

                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                        </div>

                        </div>
                      </div>
                      {result.status === 'rate_limited' && (


                        </div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      )}
                    </div>;
                  ))}

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              )}
            </Card>
          </div>
        </div>
      </section>

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* Features */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>

              Advanced Rate Limiting Features
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

            </Card>
          </div>
        </div>
      </section>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started with our rate limiting service in just a few lines of code.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-green-400" />
                Node.js Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`const axios = require('axios');

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
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'  }

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import requests

=======

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}'
    'X-RateLimit-Limit': '${rateLimit}'
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    'X-RateLimit-Window': '${timeWindow}'
response = requests.get(
    f'https://api.zion.tech{endpoint}',    headers=headers    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(

response = requests.get(;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    f'https://api.zion.tech{endpoint}';

    headers=headers

)
print('Response:', response.json())
print('Rate Limit Info:', {

    'limit': response.headers.get('x-ratelimit-limit');

    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
