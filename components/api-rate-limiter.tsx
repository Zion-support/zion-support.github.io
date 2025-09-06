import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Shield,
  Zap,
  BarChart3,
  Code,
  ArrowRight,
  Copy,
  RefreshCw,
  CheckCircle,
  AlertTriangle,;
} from 'lucide-react';
=======
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function APIRateLimiterPage() {
  const [endpoint, setEndpoint] = useState('');
  const [rateLimit, setRateLimit] = useState('100');
  const [timeWindow, setTimeWindow] = useState('1m');
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isTesting, setIsTesting] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const timeWindows = [
    { value: '1s', label: '1 Second', description: 'Per second rate limiting' },
    { value: '1m', label: '1 Minute', description: 'Per minute rate limiting' },
    { value: '1h', label: '1 Hour', description: 'Per hour rate limiting' },
<<<<<<< HEAD
<<<<<<< HEAD
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' },
=======
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const rateLimits = [
    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },
<<<<<<< HEAD
<<<<<<< HEAD
    { value: '10000', label: '10000 requests', description: 'Enterprise' },
  ];

  const generateApiKey = () => {
    const key =
      'zt_' +
      Math.random().toString(36).substr(2, 9) +
      '_' +
      Date.now().toString(36);
    setApiKey(key);
=======
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];

  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const testRateLimiting = async () => {
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    setIsTesting(true);
    setTestResults([]);
    
    const limit = parseInt(rateLimit);
    const results = [];
    
    // Simulate API calls to test rate limiting
    for (let i = 1, i <= limit + 5, i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;
      
      results.push({
        request: i,
        timestamp: new Date().toLocaleTimeString(),
        status;
        statusCode;
        responseTime: Math.random() * 100 + 50,
        headers: {
          'X-RateLimit-Limit': limit;
          'X-RateLimit-Remaining': Math.max(0, limit - i);
          'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()
        }
      });
      
      if (!isAllowed) break
    }
    
    setTestResults(results);
    setIsTesting(false)
  };

  const copyToClipboard = (text: string) => {
<<<<<<< HEAD
    navigator.clipboard.writeText(text);
=======
    
    setIsTesting(true);
    setTestResults([]);
    
    const limit = parseInt(rateLimit);
    const results = [];
    
    // Simulate API calls to test rate limiting
    for (let i = 1, i <= limit + 5, i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;
      
      results.push({
        request: i,
        timestamp: new Date().toLocaleTimeString(),
        status;
        statusCode;
        responseTime: Math.random() * 100 + 50,
        headers: {
          'X-RateLimit-Limit': limit;
          'X-RateLimit-Remaining': Math.max(0, limit - i);
          'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString()
        }
      });
      
      if (!isAllowed) break
    }
    
    setTestResults(results);
    setIsTesting(false)
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    navigator.clipboard.writeText(text)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
<<<<<<< HEAD
<<<<<<< HEAD
        return <CheckCircle className='w-5 h-5 text-green-400' />;
=======
        return <CheckCircle className="w-5 h-5 text-green-400" />;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
<<<<<<< HEAD
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;
=======
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400';
      default:
<<<<<<< HEAD
<<<<<<< HEAD
        return 'text-yellow-400';
=======
        return 'text-yellow-400'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return 'text-yellow-400'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
    <>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content='Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users.'
        />
        <meta
          property='og:title'
          content='API Rate Limiter - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Protect your APIs with intelligent rate limiting and prevent abuse.'
        />
=======
        <meta name="description" content="Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users." />
        <meta property="og:title" content="API Rate Limiter - Zion Tech Group" />
        <meta property="og:description" content="Protect your APIs with intelligent rate limiting and prevent abuse." />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>

      {/* Hero Section */}
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
<<<<<<< HEAD
          <p className='text-xl text-green-200 max-w-4xl mx-auto leading-relaxed'>
            Protect your APIs from abuse with intelligent rate limiting. Ensure
            fair usage, prevent DDoS attacks, and maintain optimal performance
            for all your users with our enterprise-grade rate limiting solution.
=======
        <meta name="description" content="Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users." />
        <meta property="og:title" content="API Rate Limiter - Zion Tech Group" />
        <meta property="og:description" content="Protect your APIs with intelligent rate limiting and prevent abuse." />
      </Head>

      {/* Hero Section */}
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
        </div>
      </section>

      {/* Rate Limiter Configuration */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Configure Your Rate Limiting
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
                {/* API Endpoint */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    API Endpoint
                  ">
                    API Endpoint
                  </label>
                  <input
                    type="text"
                    value={endpoint}
<<<<<<< HEAD
                    onChange={e => setEndpoint(e.target.value)}
                    placeholder='e.g., /api/users, /api/data, /api/analytics'
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Configure Your Rate Limiting
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
                {/* API Endpoint */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    API Endpoint
                  ">
                    API Endpoint
                  </label>
                  <input
                    type="text"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder="e.g., /api/users, /api/data, /api/analytics"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder="e.g., /api/users, /api/data, /api/analytics"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  />
                </div>

                {/* Rate Limit */}
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Rate Limit
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                    {rateLimits.map(limit => (
=======
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Rate Limit
                  ">
                    Rate Limit
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {rateLimits.map((limit) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Rate Limit
                  ">
                    Rate Limit
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {rateLimits.map((limit) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <button
                        key={limit.value}
                        onClick={() => setRateLimit(limit.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className='font-medium'>{limit.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {limit.description}
                        </div>
=======
                        <div className="font-medium">{limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{limit.description}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="font-medium">{limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{limit.description}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Window */}
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Time Window
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                    {timeWindows.map(window => (
=======
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Time Window
                  ">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeWindows.map((window) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-
                    Time Window
                  ">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeWindows.map((window) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <button
                        key={window.value}
                        onClick={() => setTimeWindow(window.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className='font-medium'>{window.label}</div>
                        <div className='text-xs text-gray-400 mt-1'>
                          {window.description}
                        </div>
=======
                        <div className="font-medium">{window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{window.description}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="font-medium">{window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{window.description}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </button>
                    ))}
                  </div>
                </div>

                {/* API Key Generation */}
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
=======
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    API Key
                  ">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    API Key
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      placeholder="Generate an API key to test rate limiting"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={generateApiKey}
<<<<<<< HEAD
                      className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white'
=======
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
                    />
                    <Button
                      onClick={generateApiKey}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
                      Generate
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={testRateLimiting}
<<<<<<< HEAD
<<<<<<< HEAD
                  disabled={
                    !endpoint.trim() || !rateLimit || !timeWindow || isTesting
                  }
                  className='w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className='w-5 h-5 mr-2 animate-spin' />
=======
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
<<<<<<< HEAD
<<<<<<< HEAD
                      <Zap className='w-5 h-5 mr-2' />
=======
                      <Zap className="w-5 h-5 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <Zap className="w-5 h-5 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Test Rate Limiting
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Test Results */}
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <BarChart3 className='w-6 h-6 mr-3 text-blue-400' />
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Test Results
                </h3>
                {testResults.length > 0 && (
                  <Button
                    onClick={() => setTestResults([])}
<<<<<<< HEAD
<<<<<<< HEAD
                    variant='outline'
                    size='sm'
                    className='border-gray-600 text-gray-300 hover:bg-gray-700'
=======
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    Clear Results
                  </Button>
                )}
              </div>

              {testResults.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='space-y-3 max-h-96 overflow-y-auto'>
=======
                <div className="space-y-3 max-h-96 overflow-y-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="space-y-3 max-h-96 overflow-y-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
<<<<<<< HEAD
<<<<<<< HEAD
                        result.status === 'success'
                          ? 'border-green-500/30 bg-green-500/10'
                          : 'border-red-500/30 bg-red-500/10'
=======
                        result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      }`}
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
<<<<<<< HEAD
                          <span className='text-gray-400'>Response Time:</span>
                          <span className='ml-2 text-white'>
                            {result.responseTime.toFixed(0)}ms
                          </span>
=======
                        result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10';
                      }`}
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <span className="text-gray-400">Response Time:</span>
                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </div>
                      </div>

                      {result.status === 'rate_limited' && (
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className='mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>
                          <strong>Rate Limited:</strong> Request exceeded the
                          limit of {rateLimit} requests per {timeWindow}
=======
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>
                  <div className='text-6xl mb-4'>📊</div>
                  <p className='text-gray-400'>
                    Test results will appear here. Configure your settings and
                    click "Test Rate Limiting" to see how it works.
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🌍</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Global Distribution
              </h3>
              <p className='text-gray-400'>
                Edge locations worldwide ensure consistent performance and low
                latency for all users.
=======
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

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Distribution</h3>
              <p className="text-gray-400">
                Edge locations worldwide ensure consistent performance and low latency for all users.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Quick Integration Examples
            </h2>
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
<<<<<<< HEAD
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'>
                <pre className='text-sm text-gray-300'>
                  {`const axios = require('axios');
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quick Integration Examples
            </h2>
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`const axios = require('axios');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
<<<<<<< HEAD
<<<<<<< HEAD
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
=======
    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
});

console.log('Response:', response.data);
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
<<<<<<< HEAD
<<<<<<< HEAD
});`}
                </pre>
              </div>
              <Button
                onClick={() =>
                  copyToClipboard(`const axios = require('axios');
=======
}),`}
                </pre>
              </div>
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}),`}
                </pre>
              </div>
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';

// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
<<<<<<< HEAD
<<<<<<< HEAD
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
=======
    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    'Authorization': \`Bearer \${apiKey}\`;
    'X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
});

console.log('Response:', response.data);
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
<<<<<<< HEAD
<<<<<<< HEAD
});`)
                }
                variant='outline'
                size='sm'
                className='mt-4 border-gray-600 text-gray-300 hover:bg-gray-700'
              >
                <Copy className='w-4 h-4 mr-2' />
=======
}),`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover: bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}),`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover: bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Copy Code
              </Button>
            </Card>

<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-6 bg-gray-800 border border-gray-700'>
              <h3 className='text-xl font-bold text-white mb-4 flex items-center'>
                <Code className='w-5 h-5 mr-2 text-blue-400' />
                Python Example
              </h3>
              <div className='bg-gray-900 p-4 rounded-lg overflow-x-auto'>
                <pre className='text-sm text-gray-300'>
                  {`import requests
=======
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import requests
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import requests
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
<<<<<<< HEAD
<<<<<<< HEAD
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'

response = requests.get(
    f'https://api.zion.tech{endpoint}',
=======
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{endpoint}';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{endpoint}';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    headers=headers
)

print('Response:', response.json())
print('Rate Limit Info:', {
<<<<<<< HEAD
<<<<<<< HEAD
    'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),
=======
    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    'reset': response.headers.get('x-ratelimit-reset')
})`}
                </pre>
              </div>
              <Button
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={() =>
                  copyToClipboard(`import requests
=======
                onClick={() => copyToClipboard(`import requests
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                onClick={() => copyToClipboard(`import requests
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'

# Make API request with rate limiting
headers = {
<<<<<<< HEAD
<<<<<<< HEAD
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'

response = requests.get(
    f'https://api.zion.tech{endpoint}',
=======
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{endpoint}';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    'Authorization': f'Bearer {api_key}X-RateLimit-Limit': '${rateLimit}X-RateLimit-Window': '${timeWindow}'
}

response = requests.get(
    f'https://api.zion.tech{endpoint}';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    headers=headers
)

print('Response:', response.json())
print('Rate Limit Info:', {
<<<<<<< HEAD
<<<<<<< HEAD
    'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),
=======
    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
<<<<<<< HEAD
                <Copy className='w-4 h-4 mr-2' />
=======
    'limit': response.headers.get('x-ratelimit-limit');
    'remaining': response.headers.get('x-ratelimit-remaining');
    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Copy className="w-4 h-4 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Copy Code
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-green-600 to-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600'
=======
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
=======
    </>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    </>
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
