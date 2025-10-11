'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {Code, Database, Zap, Shield, Globe, Cpu, BarChart, Users, Settings, ArrowRight, CheckCircle, Star, ExternalLink}}from 'lucide-react';

const ApiPage: React.FC = () => {,
              recommendations: ["Keep SSL certificates updated"],}}
              metrics: ["visitors", "conversions", "revenue"]},
            response: {,
      security: 'High',}];
    {tier: 'Free', requests: '1,000/month', burst: '10/minute' ,},
    {tier: 'Pro', requests: '50,000/month', burst: '100/minute' ,},
    {tier: 'Enterprise', requests: 'Unlimited', burst: '1,000/minute'}]

  return(<>)
      <Helmet />
        <title>API Reference - Zion Tech Group</title>
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text-enhanced">,</h1>
              API Reference;
              <a;
              <a;
              <a;
          {/* Quick Stats */} <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mb-16">,</div>
            <div className="cyber-card-enhanced p-6 text-center">
              <Code className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
          {/* Getting Started */} <section id="getting-started" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started</h2>
            <div className="cyber-card-enhanced p-8">
              <h3 className="text-xl font-semibold text-white mb-4">1. Get Your API Key</h3>
              <p className="text-gray-300 mb-6">Sign up for a free account and get your API key from the dashboard.</p>
                <pre className="text-green-400 text-sm overflow-x-auto">{`curl -X POST https: //api.ziontechgroup.com/v1/ai/chat \\,</p>
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
          {/* Authentication */} <section id="authentication" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Authentication</h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
              {authenticationMethods.map((method, index) => (
                <div key={index}className="cyber-card-enhanced p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{method.name}</h3>
                  <p className="text-gray-300 mb-4">{method.description</p>}</p>
                    <span className="text-sm text-gray-400">Security Level: </span>,
                    <span className={`text-sm font-semibold ${
                      method.security === 'Very High' ? 'text-green-400' : 'text-yellow-400'}`}>{method.security</span>} </span>
          {/* Rate Limits */} <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Rate Limits</h2>
                      <tr key={index}className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white font-semibold">{limit.tier}</td>
          {/* API Endpoints */} <section id="endpoints" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
            <div className="space-y-8">{apiEndpoints.map((category, categoryIndex) => (</div>
                <div key={categoryIndex}className="cyber-card-enhanced p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Database className="w-6 h-6 mr-3 text-cyan-400" />
                    {category.category} </h3>
                  <div className="space-y-6">{category.endpoints.map((endpoint, endpointIndex) => (</div>
                      <div key={endpointIndex}className="border border-gray-700 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
                          <div>
                            <h4 className="text-white font-semibold mb-2">Parameters</h4>
                            <ul className="space-y-1">
                              {endpoint.parameters.map((param, paramIndex) => (
                                <li key={paramIndex}className="text-gray-300 text-sm">
                                  <code className="text-cyan-400">{param}</code>
                              <div className="text-xs text-gray-400 mb-2">Request: </div>,
                              <pre className="text-green-400 text-xs overflow-x-auto">{JSON.stringify(endpoint.example.request, null, 2)</p>} </pre>
                              <div className="text-xs text-gray-400 mb-2 mt-3">Response: </div>,
                              <pre className="text-blue-400 text-xs overflow-x-auto">{JSON.stringify(endpoint.example.response, null, 2)</p>} </pre>
          {/* SDKs and Libraries */} <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,</div>
              <div className="cyber-card-enhanced p-6 text-center">
                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript/Node.js</h3>
                <p className="text-gray-300 mb-4">Official SDK for JavaScript and Node.js applications</p>
                <a href="#" className="text-cyan-400 hover: text-cyan-300 text-sm">,
                  View on GitHub <ExternalLink className="w-4 h-4 inline ml-1" />
                <a href="#" className="text-cyan-400 hover: text-cyan-300 text-sm">,
                  View on PyPI <ExternalLink className="w-4 h-4 inline ml-1" />
                <a href="#" className="text-cyan-400 hover: text-cyan-300 text-sm">,
                  View on Packagist <ExternalLink className="w-4 h-4 inline ml-1" />
          {/* Support */} <section className="mb-16">
            <div className="cyber-card-enhanced p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-6">Our developer support team is here to help you integrate our APIs successfully.</p>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a;
                <a;
                  href="/docs"
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
                >
                  View Documentation;
                </a>
                <a;
                  href="/community"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-slate-900 transition-all duration-300",
                >
                  Join Community;
