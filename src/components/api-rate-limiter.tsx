<<<<<<< HEAD
import React from 'react';

const api-rate-limiter: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">api-rate-limiter</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Shield, Zap, BarChart3, Code, ArrowRight, Copy, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

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
    { value: '1d', label: '1 Day', description: 'Per day rate limiting' }
  ];
  const rateLimits = [
    { value: '10', label: '10 requests', description: 'Very strict' },
    { value: '100', label: '100 requests', description: 'Standard' },
    { value: '1000', label: '1000 requests', description: 'High volume' },
    { value: '10000', label: '10000 requests', description: 'Enterprise' }
  ];
  const generateApiKey = () => {
    const key = 'zt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    setApiKey(key);
  };
  const testRateLimiting = async () => {
    if (!endpoint.trim() || !rateLimit || !timeWindow) return;
    setIsTesting(true);
    setTestResults([]);
    const limit = parseInt(rateLimit);
    const results = [];
    // Simulate API calls to test rate limiting
    for (let i = 1; i <= limit + 5; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      const isAllowed = i <= limit;
      const status = isAllowed ? 'success' : 'rate_limited';
      const statusCode = isAllowed ? 200 : 429;
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
      });
      if (!isAllowed) break;
    }
    setTestResults(results);
    setIsTesting(false);
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'rate_limited':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'rate_limited':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };
  return (
    <>
      <Head>
        <title>API Rate Limiter - Zion Tech Group</title>
        <meta name="description" content="Protect your APIs with intelligent rate limiting. Prevent abuse, ensure fair usage, and maintain optimal performance for all users." />
        <meta property="og:title" content="API Rate Limiter - Zion Tech Group" />
        <meta property="og:description" content="Protect your APIs with intelligent rate limiting and prevent abuse." />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              API Protection & Security
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            API Rate Limiter
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Protect your APIs from abuse with intelligent rate limiting. Ensure fair usage, prevent DDoS attacks, 
            and maintain optimal performance for all your users with our enterprise-grade rate limiting solution.
      {/* Rate Limiter Configuration */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Configure Your Rate Limiting
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Set up intelligent rate limiting rules to protect your APIs and ensure fair usage across all users.
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Configuration Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-green-400" />
                Rate Limiting Rules
              <div className="space-y-6">
                {/* API Endpoint */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    API Endpoint
                  <input
                    type="text"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder="e.g., /api/users, /api/data, /api/analytics"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                {/* Rate Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Rate Limit
                  <div className="grid grid-cols-2 gap-3">
                    {rateLimits.map((limit) => (
                      <button
                        key={limit.value}
                        onClick={() => setRateLimit(limit.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          rateLimit === limit.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className="font-medium">{limit.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{limit.description}</div>
                    ))}
                {/* Time Window */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Time Window
                  <div className="grid grid-cols-2 gap-3">
                    {timeWindows.map((window) => (
                      <button
                        key={window.value}
                        onClick={() => setTimeWindow(window.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          timeWindow === window.value
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className="font-medium">{window.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{window.description}</div>
                    ))}
                {/* API Key Generation */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    API Key
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
                    >
                      Generate
                <Button
                  onClick={testRateLimiting}
                  disabled={!endpoint.trim() || !rateLimit || !timeWindow || isTesting}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Testing Rate Limiting...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Test Rate Limiting
                    </>
                  )}
            {/* Test Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
                  Test Results
                {testResults.length > 0 && (
                  <Button
                    onClick={() => setTestResults([])}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Clear Results
                )}
              {testResults.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        result.status === 'success' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            Request #{result.request}
                        <span className="text-sm text-gray-400">{result.timestamp}</span>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Status:</span>
                          <span className={`ml-2 font-medium ${getStatusColor(result.status)}`}>
                            {result.statusCode} {result.status === 'success' ? 'OK' : 'Too Many Requests'}
                        <div>
                          <span className="text-gray-400">Response Time:</span>
                          <span className="ml-2 text-white">{result.responseTime.toFixed(0)}ms</span>
                      {result.status === 'rate_limited' && (
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                          <strong>Rate Limited:</strong> Request exceeded the limit of {rateLimit} requests per {timeWindow}
                      )}
                  ))}
              ) : (
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">
                    Test results will appear here. Configure your settings and click "Test Rate Limiting" to see how it works.
              )}
      {/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Rate Limiting Features
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade rate limiting with intelligent algorithms and comprehensive monitoring.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">DDoS Protection</h3>
              <p className="text-gray-400">
                Advanced algorithms detect and prevent distributed denial of service attacks in real-time.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-400">
                Built on Redis and optimized for high-throughput applications with minimal latency.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Rules</h3>
              <p className="text-gray-400">
                Configure different limits for different endpoints, users, or IP addresses.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-400">
                Monitor API usage, identify patterns, and optimize your rate limiting strategy.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-400">
                Simple REST API and SDKs for Node.js, Python, Go, and other popular languages.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-4">Global Distribution</h3>
              <p className="text-gray-400">
                Edge locations worldwide ensure consistent performance and low latency for all users.
      {/* Code Examples */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Quick Integration Examples
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started with our rate limiting service in just a few lines of code.
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-green-400" />
                Node.js Example
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`const axios = require('axios');
const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';
// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
  }
});
console.log('Response:', response.data);
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
});`}
              <Button
                onClick={() => copyToClipboard(`const axios = require('axios');
const apiKey = '${apiKey || 'your_api_key_here'}';
const endpoint = '${endpoint || '/api/users'}';
// Make API request with rate limiting
const response = await axios.get(\`https://api.zion.tech\${endpoint}\`, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
  }
});
console.log('Response:', response.data);
console.log('Rate Limit Info:', {
  limit: response.headers['x-ratelimit-limit'],
  remaining: response.headers['x-ratelimit-remaining'],
  reset: response.headers['x-ratelimit-reset']
});`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
            <Card className="p-6 bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Python Example
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import requests
api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(
    f'https://api.zion.tech{endpoint}',
    headers=headers
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),
    'reset': response.headers.get('x-ratelimit-reset')
})`}
              <Button
                onClick={() => copyToClipboard(`import requests
api_key = '${apiKey || 'your_api_key_here'}'
endpoint = '${endpoint || '/api/users'}'
# Make API request with rate limiting
headers = {
    'Authorization': f'Bearer {api_key}',
    'X-RateLimit-Limit': '${rateLimit}',
    'X-RateLimit-Window': '${timeWindow}'
}
response = requests.get(
    f'https://api.zion.tech{endpoint}',
    headers=headers
)
print('Response:', response.json())
print('Rate Limit Info:', {
    'limit': response.headers.get('x-ratelimit-limit'),
    'remaining': response.headers.get('x-ratelimit-remaining'),
    'reset': response.headers.get('x-ratelimit-reset')
})`)}
                variant="outline"
                size="sm"
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Protect Your APIs?
          <p className="text-xl text-green-100 mb-8">
            Join thousands of developers and companies who trust our rate limiting service to protect their APIs.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              View Pricing
    </>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default api-rate-limiter;