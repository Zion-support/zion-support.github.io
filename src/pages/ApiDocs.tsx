import React from 'react';
<<<<<<< HEAD
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { BookOpen, Code, Webhook, AlertTriangle, Play, Key, BarChart3 } from "lucide-react";

export default function ApiDocs() {
  const apiSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of integrating with Zion's API",
      icon: Play,
      link: "/developers/docs/getting-started",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "API Reference",
      description: "Complete API endpoint documentation and parameters",
      icon: BookOpen,
      link: "/developers/docs/reference",
      color: "from-zion-purple to-zion-purple-light"
    },
    {
      title: "Webhooks",
      description: "Set up real-time notifications and integrations",
      icon: Webhook,
      link: "/developers/docs/webhooks",
      color: "from-zion-green to-zion-cyan"
    },
    {
      title: "Sample Code",
      description: "Ready-to-use code examples in multiple languages",
      icon: Code,
      link: "/developers/docs/samples",
      color: "from-zion-orange to-zion-yellow"
    },
    {
      title: "Error Codes",
      description: "Understand API errors and rate limits",
      icon: AlertTriangle,
      link: "/developers/docs/errors",
      color: "from-zion-red to-zion-orange"
    },
    {
      title: "Developer Portal",
      description: "Manage API keys, webhooks, and monitor usage",
      icon: Key,
      link: "/developers/portal",
      color: "from-zion-purple-light to-zion-purple"
=======
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Copy, ExternalLink, BookOpen, Zap, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ApiDocs() {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/talent',
      description: 'Retrieve a list of talent profiles',
      auth: 'Optional',
      params: ['page', 'limit', 'skills', 'location']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/talent',
      description: 'Create a new talent profile',
      auth: 'Required',
      params: ['name', 'email', 'skills', 'bio']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/services',
      description: 'Get available services',
      auth: 'Optional',
      params: ['category', 'price_range', 'availability']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/services',
      description: 'Create a new service listing',
      auth: 'Required',
      params: ['title', 'description', 'price', 'category']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/ai-match',
      description: 'Get AI-powered recommendations',
      auth: 'Required',
      params: ['requirements', 'budget', 'timeline']
    }
  ];

  const codeExamples = {
    authentication: `// Get your API key from the dashboard
const API_KEY = 'your_api_key_here';

// Include in headers
const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};`,
    
    getTalent: `// Fetch talent profiles
const response = await fetch('/api/v1/talent?skills=react&location=remote', {
  headers: headers
});

const talent = await response.json();
console.log(talent);`,
    
    createService: `// Create a new service
const serviceData = {
  title: 'Web Development',
  description: 'Full-stack web development services',
  price: 75,
  category: 'development'
};

const response = await fetch('/api/v1/services', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(serviceData)
});`
  };

  const sdkExamples = [
    {
      name: 'JavaScript/Node.js',
      description: 'Official SDK for JavaScript and Node.js applications',
      icon: '🔷',
      href: '/api-docs/javascript'
    },
    {
      name: 'Python',
      description: 'Python SDK for building AI-powered applications',
      icon: '🐍',
      href: '/api-docs/python'
    },
    {
      name: 'React',
      description: 'React hooks and components for Zion integration',
      icon: '⚛️',
      href: '/api-docs/react'
    },
    {
      name: 'Mobile SDKs',
      description: 'iOS and Android SDKs for mobile applications',
      icon: '📱',
      href: '/api-docs/mobile'
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="API Documentation - Zion AI Marketplace"
        description="Comprehensive API documentation for integrating with Zion's AI marketplace platform. Get started with our REST API, webhooks, and developer tools."
        keywords="API documentation, REST API, webhooks, developer tools, Zion marketplace API"
        canonical="https://ziontechgroup.com/api-docs"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>API Documentation</GradientHeading>
            <p className="text-zion-slate-light text-xl mt-6 max-w-3xl mx-auto">
              Build powerful integrations with Zion's AI marketplace platform. Access our comprehensive 
              REST API, webhooks, and developer tools to create seamless experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/developers/portal"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                <Key className="w-5 h-5 mr-2" />
                Get API Keys
              </Link>
              <a
                href="#quick-start"
                className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple rounded-lg hover:bg-zion-purple/10 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Quick Start
              </a>
            </div>
          </div>

          {/* API Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {apiSections.map((section) => (
              <Link
                key={section.title}
                to={section.link}
                className="group block p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all hover:shadow-lg hover:shadow-zion-purple/10"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} mb-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {section.title}
                </h3>
                <p className="text-zion-slate-light group-hover:text-zion-slate transition-colors">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Quick Start Section */}
          <div id="quick-start" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Quick Start</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-4">1. Get Your API Key</h3>
                <p className="text-zion-slate-light mb-4">
                  Sign up for a developer account and generate your API key in the Developer Portal.
                </p>
                <Link
                  to="/developers/portal"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Go to Developer Portal →
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-4">2. Make Your First Request</h3>
                <div className="bg-zion-blue border border-zion-blue-light rounded p-4">
                  <code className="text-zion-slate-light text-sm">
                    curl -X GET "https://api.ziontechgroup.com/v1/jobs" \<br/>
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-4">
                <BarChart3 className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>
              <p className="text-zion-slate-light">
                Access live marketplace data including jobs, talent, and services with real-time updates.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-full mb-4">
                <Webhook className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Webhook Support</h3>
              <p className="text-zion-slate-light">
                Receive instant notifications when new opportunities or updates are available.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-green/20 rounded-full mb-4">
                <Code className="w-8 h-8 text-zion-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multiple Languages</h3>
              <p className="text-zion-slate-light">
                SDKs and examples available in JavaScript, Python, PHP, and more.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of developers building innovative solutions with Zion's API. 
              Get started today with our comprehensive documentation and developer tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/developers/portal"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                <Key className="w-5 h-5 mr-2" />
                Get API Keys
              </Link>
              <Link
                to="/developers/docs/getting-started"
                className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple rounded-lg hover:bg-zion-purple/10 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Documentation
              </Link>
=======
    <>
      <SEO
        title="API Documentation | Zion Tech Group"
        description="Comprehensive API documentation for integrating with the Zion Tech Group platform. Get started with our developer tools and SDKs."
        canonical="https://ziontechgroup.com/api-docs"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>API Documentation</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Integrate with our platform using our comprehensive APIs and developer tools
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                <Link to="/dashboard/api-keys">Get API Key</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/ziontechgroup/api-examples" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Examples
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">99.9%</div>
                <p className="text-zion-slate-light">Uptime</p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-zion-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">256-bit</div>
                <p className="text-zion-slate-light">Encryption</p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="p-6 text-center">
                <Database className="w-8 h-8 text-zion-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">&lt;100ms</div>
                <p className="text-zion-slate-light">Response Time</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Navigation */}
            <div className="lg:col-span-1">
              <Card className="bg-zion-blue-dark border-zion-purple/20 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="#authentication" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                    Authentication
                  </a>
                  <a href="#endpoints" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    API Endpoints
                  </a>
                  <a href="#sdks" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    SDKs & Libraries
                  </a>
                  <a href="#examples" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Code Examples
                  </a>
                  <a href="#webhooks" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Webhooks
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Authentication */}
              <section id="authentication">
                <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="p-6">
                    <p className="text-zion-slate-light mb-4">
                      All API requests require authentication using API keys. You can generate API keys from your dashboard.
                    </p>
                    <div className="bg-zion-blue-darker p-4 rounded-lg">
                      <pre className="text-zion-cyan text-sm overflow-x-auto">
                        <code>{codeExamples.authentication}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* API Endpoints */}
              <section id="endpoints">
                <h2 className="text-2xl font-bold text-white mb-4">API Endpoints</h2>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'}>
                              {endpoint.method}
                            </Badge>
                            <code className="text-zion-cyan font-mono">{endpoint.endpoint}</code>
                          </div>
                          <Badge variant="outline">{endpoint.auth}</Badge>
                        </div>
                        <p className="text-zion-slate-light mb-3">{endpoint.description}</p>
                        {endpoint.params.length > 0 && (
                          <div>
                            <span className="text-zion-slate-light text-sm">Parameters: </span>
                            <span className="text-zion-cyan text-sm">{endpoint.params.join(', ')}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* SDKs */}
              <section id="sdks">
                <h2 className="text-2xl font-bold text-white mb-4">SDKs & Libraries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sdkExamples.map((sdk) => (
                    <Card key={sdk.name} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl">{sdk.icon}</span>
                          <h3 className="font-semibold text-white">{sdk.name}</h3>
                        </div>
                        <p className="text-zion-slate-light text-sm mb-4">{sdk.description}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link to={sdk.href}>View Docs</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Code Examples */}
              <section id="examples">
                <h2 className="text-2xl font-bold text-white mb-4">Code Examples</h2>
                <Tabs defaultValue="get-talent" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark border-zion-purple/20">
                    <TabsTrigger value="get-talent">Get Talent</TabsTrigger>
                    <TabsTrigger value="create-service">Create Service</TabsTrigger>
                    <TabsTrigger value="ai-match">AI Match</TabsTrigger>
                  </TabsList>
                  <TabsContent value="get-talent" className="mt-4">
                    <Card className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <div className="bg-zion-blue-darker p-4 rounded-lg">
                          <pre className="text-zion-cyan text-sm overflow-x-auto">
                            <code>{codeExamples.getTalent}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="create-service" className="mt-4">
                    <Card className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <div className="bg-zion-blue-darker p-4 rounded-lg">
                          <pre className="text-zion-cyan text-sm overflow-x-auto">
                            <code>{codeExamples.createService}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="ai-match" className="mt-4">
                    <Card className="bg-zion-blue-dark border-zion-purple/20">
                      <CardContent className="p-6">
                        <p className="text-zion-slate-light">AI matching examples coming soon...</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Getting Started */}
              <section>
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardContent className="p-8 text-center">
                    <BookOpen className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Ready to Get Started?</h3>
                    <p className="text-zion-slate-light mb-6">
                      Start building with our APIs today. Get your API key and explore our comprehensive documentation.
                    </p>
                    <div className="space-x-4">
                      <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                        <Link to="/dashboard/api-keys">Get API Key</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/help">Need Help?</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
            </div>
          </div>
        </div>
      </main>
<<<<<<< HEAD
      <Footer />
    </div>
=======
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
  );
}