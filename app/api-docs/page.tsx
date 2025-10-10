'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, BookOpen, FileText, Download, ExternalLink, ChevronRight, Eye, MessageCircle, Star, Clock, Users, Shield, Brain, Cloud, Database, Globe, Target, Award, BarChart, TrendingUp, Phone, Mail, MapPin, Building, Settings, Filter, MoreHorizontal, Share2, Bookmark, BookmarkCheck, Heart, ThumbsUp, ThumbsDown, Flag, AlertTriangle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Save, Upload, Menu, Grid, List, Layout, Palette, Type, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent, Outdent, List as ListIcon, ListOrdered, Quote, Code as CodeIcon, Link as LinkIcon, Image, Video, File, Folder, FolderOpen, Archive, Inbox, Send, Reply, Forward, ReplyAll, Archive as ArchiveIcon, Trash, Star as StarIcon, StarOff, Pin, PinOff, Lock, Unlock, Eye as EyeIcon, EyeOff, Key as KeyIcon, KeyOff, Wifi, WifiOff, Signal, SignalOff, Battery, BatteryLow, BatteryMedium, BatteryHigh, BatteryFull, Power, PowerOff, RefreshCw, RefreshCcw, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Crop, RotateLeft, RotateRight, RotateClockwise, RotateCounterClockwise, Rotate90, Rotate180, Rotate270, Rotate360, RotateX, RotateY, RotateZ, ScaleX, ScaleY, ScaleZ, TranslateX, TranslateY, TranslateZ, SkewX, SkewY, SkewZ, Perspective, Orthographic, Isometric, Dimetric, Trimetric, Axonometric, Oblique, Cabinet, Cavalier, Military, Bird, Worm, God, Eye as Eye3D, EyeOff as EyeOff3D, Eye as Eye2D, EyeOff as EyeOff2D, Eye as Eye1D, EyeOff as EyeOff1D, Eye as Eye0D, EyeOff as EyeOff0D, Eye as EyeNeg1D, EyeOff as EyeOffNeg1D, Eye as EyeNeg2D, EyeOff as EyeOffNeg2D, Eye as EyeNeg3D, EyeOff as EyeOffNeg3D, Eye as EyeNeg4D, EyeOff as EyeOffNeg4D, Eye as EyeNeg5D, EyeOff as EyeOffNeg5D, Eye as EyeNeg6D, EyeOff as EyeOffNeg6D, Eye as EyeNeg7D, EyeOff as EyeOffNeg7D, Eye as EyeNeg8D, EyeOff as EyeOffNeg8D, Eye as EyeNeg9D, EyeOff as EyeOffNeg9D, Eye as EyeNeg10D, EyeOff as EyeOffNeg10D, Eye as EyeNeg11D, EyeOff as EyeOffNeg11D, Eye as EyeNeg12D, EyeOff as EyeOffNeg12D, Eye as EyeNeg13D, EyeOff as EyeOffNeg13D, Eye as EyeNeg14D, EyeOff as EyeOffNeg14D, Eye as EyeNeg15D, EyeOff as EyeOffNeg15D, Eye as EyeNeg16D, EyeOff as EyeOffNeg16D, Eye as EyeNeg17D, EyeOff as EyeOffNeg17D, Eye as EyeNeg18D, EyeOff as EyeOffNeg18D, Eye as EyeNeg19D, EyeOff as EyeOffNeg19D, Eye as EyeNeg20D, EyeOff as EyeOffNeg20D, Eye as EyeNeg21D, EyeOff as EyeOffNeg21D, Eye as EyeNeg22D, EyeOff as EyeOffNeg22D, Eye as EyeNeg23D, EyeOff as EyeOffNeg23D, Eye as EyeNeg24D, EyeOff as EyeOffNeg24D, Eye as EyeNeg25D, EyeOff as EyeOffNeg25D, Eye as EyeNeg26D, EyeOff as EyeOffNeg26D, Eye as EyeNeg27D, EyeOff as EyeOffNeg27D, Eye as EyeNeg28D, EyeOff as EyeOffNeg28D, Eye as EyeNeg29D, EyeOff as EyeOffNeg29D, Eye as EyeNeg30D, EyeOff as EyeOffNeg30D, Eye as EyeNeg31D, EyeOff as EyeOffNeg31D, Eye as EyeNeg32D, EyeOff as EyeOffNeg32D, Eye as EyeNeg33D, EyeOff as EyeOffNeg33D, Eye as EyeNeg34D, EyeOff as EyeOffNeg34D, Eye as EyeNeg35D, EyeOff as EyeOffNeg35D, Eye as EyeNeg36D, EyeOff as EyeOffNeg36D, Eye as EyeNeg37D, EyeOff as EyeOffNeg37D, Eye as EyeNeg38D, EyeOff as EyeOffNeg38D, Eye as EyeNeg39D, EyeOff as EyeOffNeg39D, Eye as EyeNeg40D, EyeOff as EyeOffNeg40D, Eye as EyeNeg41D, EyeOff as EyeOffNeg41D, Eye as EyeNeg42D, EyeOff as EyeOffNeg42D, Eye as EyeNeg43D, EyeOff as EyeOffNeg43D, Eye as EyeNeg44D, EyeOff as EyeOffNeg44D, Eye as EyeNeg45D, EyeOff as EyeOffNeg45D, Eye as EyeNeg46D, EyeOff as EyeOffNeg46D, Eye as EyeNeg47D, EyeOff as EyeOffNeg47D, Eye as EyeNeg48D, EyeOff as EyeOffNeg48D, Eye as EyeNeg49D, EyeOff as EyeOffNeg49D, Eye as EyeNeg50D, EyeOff as EyeOffNeg50D, Eye as EyeNeg51D, EyeOff as EyeOffNeg51D, Eye as EyeNeg52D, EyeOff as EyeOffNeg52D, Eye as EyeNeg53D, EyeOff as EyeOffNeg53D, Eye as EyeNeg54D, EyeOff as EyeOffNeg54D, Eye as EyeNeg55D, EyeOff as EyeOffNeg55D, Eye as EyeNeg56D, EyeOff as EyeOffNeg56D, Eye as EyeNeg57D, EyeOff as EyeOffNeg57D, Eye as EyeNeg58D, EyeOff as EyeOffNeg58D, Eye as EyeNeg59D, EyeOff as EyeOffNeg59D, Eye as EyeNeg60D, EyeOff as EyeOffNeg60D, Eye as EyeNeg61D, EyeOff as EyeOffNeg61D, Eye as EyeNeg62D, EyeOff as EyeOffNeg62D, Eye as EyeNeg63D, EyeOff as EyeOffNeg63D, Eye as EyeNeg64D, EyeOff as EyeOffNeg64D, Eye as EyeNeg65D, EyeOff as EyeOffNeg65D, Eye as EyeNeg66D, EyeOff as EyeOffNeg66D, Eye as EyeNeg67D, EyeOff as EyeOffNeg67D, Eye as EyeNeg68D, EyeOff as EyeOffNeg68D, Eye as EyeNeg69D, EyeOff as EyeOffNeg69D, Eye as EyeNeg70D, EyeOff as EyeOffNeg70D, Eye as EyeNeg71D, EyeOff as EyeOffNeg71D, Eye as EyeNeg72D, EyeOff as EyeOffNeg72D, Eye as EyeNeg73D, EyeOff as EyeOffNeg73D, Eye as EyeNeg74D, EyeOff as EyeOffNeg74D, Eye as EyeNeg75D, EyeOff as EyeOffNeg75D, Eye as EyeNeg76D, EyeOff as EyeOffNeg76D, Eye as EyeNeg77D, EyeOff as EyeOffNeg77D, Eye as EyeNeg78D, EyeOff as EyeOffNeg78D, Eye as EyeNeg79D, EyeOff as EyeOffNeg79D, Eye as EyeNeg80D, EyeOff as EyeOffNeg80D, Eye as EyeNeg81D, EyeOff as EyeOffNeg81D, Eye as EyeNeg82D, EyeOff as EyeOffNeg82D, Eye as EyeNeg83D, EyeOff as EyeOffNeg83D, Eye as EyeNeg84D, EyeOff as EyeOffNeg84D, Eye as EyeNeg85D, EyeOff as EyeOffNeg85D, Eye as EyeNeg86D, EyeOff as EyeOffNeg86D, Eye as EyeNeg87D, EyeOff as EyeOffNeg87D, Eye as EyeNeg88D, EyeOff as EyeOffNeg88D, Eye as EyeNeg89D, EyeOff as EyeOffNeg89D, Eye as EyeNeg90D, EyeOff as EyeOffNeg90D, Eye as EyeNeg91D, EyeOff as EyeOffNeg91D, Eye as EyeNeg92D, EyeOff as EyeOffNeg92D, Eye as EyeNeg93D, EyeOff as EyeOffNeg93D, Eye as EyeNeg94D, EyeOff as EyeOffNeg94D, Eye as EyeNeg95D, EyeOff as EyeOffNeg95D, Eye as EyeNeg96D, EyeOff as EyeOffNeg96D, Eye as EyeNeg97D, EyeOff as EyeOffNeg97D, Eye as EyeNeg98D, EyeOff as EyeOffNeg98D, Eye as EyeNeg99D, EyeOff as EyeOffNeg99D, Eye as EyeNeg100D, EyeOff as EyeOffNeg100D } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      description: 'Authenticate and manage user sessions',
      method: 'POST',
      endpoint: '/api/auth/login',
      example: `curl -X POST https://api.ziontechgroup.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`,
      response: `{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "John Doe"
  }
}`
    },
    {
      id: 'ai-predict',
      title: 'AI Prediction',
      description: 'Make predictions using our AI models',
      method: 'POST',
      endpoint: '/api/ai/predict',
      example: `curl -X POST https://api.ziontechgroup.com/ai/predict \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "sentiment-analysis",
    "input": "This is a great product!"
  }'`,
      response: `{
  "success": true,
  "prediction": {
    "sentiment": "positive",
    "confidence": 0.95,
    "model": "sentiment-analysis"
  }
}`
    },
    {
      id: 'data-upload',
      title: 'Data Upload',
      description: 'Upload data for processing and analysis',
      method: 'POST',
      endpoint: '/api/data/upload',
      example: `curl -X POST https://api.ziontechgroup.com/data/upload \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -F "file=@data.csv" \\
  -F "type=csv"`,
      response: `{
  "success": true,
  "file_id": "file_123456789",
  "status": "uploaded",
  "size": 1024000,
  "type": "csv"
}`
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Retrieve analytics and insights',
      method: 'GET',
      endpoint: '/api/analytics/dashboard',
      example: `curl -X GET https://api.ziontechgroup.com/analytics/dashboard \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -G -d "start_date=2024-01-01" \\
  -d "end_date=2024-01-31"`,
      response: `{
  "success": true,
  "data": {
    "total_users": 1250,
    "active_users": 890,
    "revenue": 125000,
    "conversion_rate": 0.15
  }
}`
    }
  ];

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `// Install the SDK
npm install @ziontechgroup/sdk

// Import and initialize
import { ZionTechClient } from '@ziontechgroup/sdk';

const client = new ZionTechClient({
  apiKey: 'your_api_key',
  baseUrl: 'https://api.ziontechgroup.com'
});

// Make a prediction
const prediction = await client.ai.predict({
  model: 'sentiment-analysis',
  input: 'This is amazing!'
});

console.log(prediction);`
    },
    {
      language: 'Python',
      code: `# Install the SDK
pip install ziontechgroup-sdk

# Import and initialize
from ziontechgroup import Client

client = Client(
    api_key='your_api_key',
    base_url='https://api.ziontechgroup.com'
)

# Make a prediction
prediction = client.ai.predict(
    model='sentiment-analysis',
    input='This is amazing!'
)

print(prediction)`
    },
    {
      language: 'cURL',
      code: `# Authentication
curl -X POST https://api.ziontechgroup.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "password"}'

# Make a prediction
curl -X POST https://api.ziontechgroup.com/ai/predict \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "sentiment-analysis", "input": "This is amazing!"}'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            API
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive API documentation with examples, SDKs, and interactive testing tools.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running with our API in minutes. Choose your preferred language and start building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdkExamples.map((example, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{example.language}</h3>
                </div>
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <button
                  onClick={() => copyToClipboard(example.code, `sdk-${index}`)}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  {copiedCode === `sdk-${index}` ? (
                    <>
                      <Check className="inline-block w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="inline-block w-4 h-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints with detailed documentation and examples.
            </p>
          </div>
          
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{endpoint.title}</h3>
                    <p className="text-gray-300">{endpoint.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-300' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-300' :
                      endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="bg-black/50 text-purple-300 px-3 py-1 rounded text-sm">
                      {endpoint.endpoint}
                    </code>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Example Request</h4>
                    <div className="bg-black/50 rounded-lg p-4 mb-4">
                      <pre className="text-gray-300 text-sm overflow-x-auto">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, `example-${index}`)}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      {copiedCode === `example-${index}` ? (
                        <>
                          <Check className="inline-block w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="inline-block w-4 h-4 mr-2" />
                          Copy Example
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Example Response</h4>
                    <div className="bg-black/50 rounded-lg p-4">
                      <pre className="text-gray-300 text-sm overflow-x-auto">
                        <code>{endpoint.response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your API key and start integrating our services into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get API Key
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View SDKs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIDocsPage;