import React from "react"
import { Link } from "react-router-dom"
import { ;
  Code,;
  Zap, ;
  Shield, ;
  Cloud, ;
  Rocket, ;
  Target, ;
  TrendingUp, ;
  Users, ;
  Globe, ;
  Cpu, ;
  Lock, ;
  Heart, ;
  Star,;
  ArrowRight,;
  CheckCircle,;
  BarChart3,;
  MessageCircle,;
  BookOpen,;
  ShoppingCart,;
  DollarSign,;
  Gauge,;
  HelpCircle,;
  Search,;
  PenTool,;
  GitFork,;
  Atom,;
  Truck,;
  Building,;
  Github,;
  Terminal,;
  Database,;
  Server,;
  Network,;
  Key,;
  Download,;
  Play,;
  ExternalLink;
} from "lucide-react"
import { SEO } from "../components/SEO"
export default function Developers() {;
  const apis = [;
    {;
      name: 'AI Analytics API',description: 'Access our AI-powered analytics and insights through RESTful APIs',category: 'Analytics',endpoints: ['/v1/analytics/v1/insights', '/v1/predictions'],;
      documentation: '/docs/api/analytics',status: 'Production'
    };
    {;
      name: 'AI Workflow API',description: 'Integrate AI workflow automation into your applications',category: 'Automation',endpoints: ['/v1/workflows/v1/tasks', '/v1/triggers'],;
      documentation: '/docs/api/workflows',status: 'Production'
    };
    {;
      name: 'AI Content API',description: 'Generate and manage AI-powered content programmatically',category: 'Content',endpoints: ['/v1/content/v1/generation', '/v1/optimization'],;
      documentation: '/docs/api/content',status: 'Beta'
    };
    {;
      name: 'AI Security API',description: 'Integrate AI-powered security and compliance features',category: 'Security',endpoints: ['/v1/security/v1/compliance', '/v1/threats'],;
      documentation: '/docs/api/security',status: 'Production'
    };
  ];
  const sdks = [;
    {;
      name: 'JavaScript/TypeScript',description: 'Official SDK for Node.js and browser environments',version: 'v2.1.0',downloads: '50K+',repository: 'https://github.com/ziontechgroup/js-sdk',documentation: '/docs/sdk/javascript'
    };
    {;
      name: 'Python',description: 'Python SDK for AI and analytics integration',version: 'v1.8.0',downloads: '25K+',repository: 'https://github.com/ziontechgroup/python-sdk',documentation: '/docs/sdk/python'
    };
    {;
      name: 'Java',description: 'Java SDK for enterprise applications',version: 'v1.5.0',downloads: '15K+',repository: 'https://github.com/ziontechgroup/java-sdk',documentation: '/docs/sdk/java'
    };
    {;
      name: 'Go',description: 'Go SDK for high-performance applications',version: 'v1.2.0',downloads: '8K+',repository: 'https://github.com/ziontechgroup/go-sdk',documentation: '/docs/sdk/go'
    };
  ];
  const tools = [;
    {;
      name: 'API Playground',description: 'Interactive API testing and exploration tool',icon: Play,href: '/api-playground',category: 'Testing'
    };
    {;
      name: 'SDK Generator',description: 'Generate custom SDKs for your preferred language',icon: Code,href: '/sdk-generator',category: 'Development'
    };
    {;
      name: 'API Documentation',description: 'Comprehensive API reference and guides',icon: BookOpen,href: '/docs',category: 'Reference'
    };
    {;
      name: 'Code Examples',description: 'Ready-to-use code samples and tutorials',icon: Terminal,href: '/examples',category: 'Learning'
    };
  ];
  const quickStartSteps = [;
    {;
      step: 1,title: 'Get API Keys',description: 'Sign up for a developer account and obtain your API keys',action: 'Sign Up',href: '/signup'
    };
    {;
      step: 2,title: 'Choose SDK',description: 'Select the SDK for your preferred programming language',action: 'View SDKs',href: '#sdks'
    };
    {;
      step: 3,title: 'Install & Configure',description: 'Install the SDK and configure with your API keys',action: 'Get Started',href: '/docs/quickstart'
    };
    {;
      step: 4,title: 'Make First Call',description: 'Test your integration with our sample endpoints',action: 'Try API',href: '/api-playground'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Developer Portal - Zion Tech Group"
        description="Access our APIs, SDKs, and developer resources. Build powerful applications with Zion Tech Group's AI and technology platforms."
      />;
      ;
      {/* Hero Section */};
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">;
        <div className="container mx-auto px-4">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="flex justify-center mb-6">;
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Developer;
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Portal</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">;
              Build powerful applications with our APIs, SDKs, and developer tools. ;
              Access cutting-edge AI and technology solutions through simple, well-documented interfaces.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/docs"
                className="[^"]*"
              >;
                View Documentation;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/api-playground"
                className="[^"]*"
              >;
                Try API Playground;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quick Start */};
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Get Started in Minutes;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Follow these simple steps to integrate Zion Tech Group's APIs into your applications.;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {quickStartSteps.map((step, index) => (;
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <div className="text-2xl font-bold text-cyan-400">{step.step}</[^>]*>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</[^>]*>
                <p className="text-slate-300 mb-4 text-sm">{step.description}</[^>]*>
                <Link;
                  to={step.href};
                  className="[^"]*"
                >;
                  {step.action};
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* APIs Section */};
      <section className="py-16 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Available APIs;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Powerful, RESTful APIs that give you access to our AI and technology platforms.;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 gap-8">;
            {apis.map((api, index) => (;
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">;
                <div className="flex items-start justify-between mb-4">;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{api.name}</[^>]*>
                    <p className="text-slate-300 text-sm mb-3">{api.description}</[^>]*>
                  </[^>]*>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${;
                    api.status === 'Production' ;
                      ? 'bg-green-400/20 text-green-400 border border-green-400/30' ;
                      : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                  }`}>;
                    {api.status};
                  </[^>]*>
                </[^>]*>
                ;
                <div className="mb-4">;
                  <h4 className="text-white font-semibold mb-2 text-sm">Category: {api.category}</[^>]*>
                  <div className="space-y-1">;
                    {api.endpoints.map((endpoint, endpointIndex) => (;
                      <div key={endpointIndex} className="flex items-center space-x-2">;
                        <[^>]*/>
                        <code className="text-slate-300 text-sm font-mono">{endpoint}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                <div className="flex items-center justify-between">;
                  <Link;
                    to={api.documentation};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    Documentation;
                  </[^>]*>
                  <Link;
                    to="/api-playground"
                    className="[^"]*"
                  >;
                    Try API;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* SDKs Section */};
      <section className="py-16" id="sdks">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Official SDKs;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Choose from our official SDKs to integrate our APIs into your applications quickly and easily.;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {sdks.map((sdk, index) => (;
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">;
                <div className="text-center mb-6">;
                  <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</[^>]*>
                  <p className="text-slate-300 text-sm mb-4">{sdk.description}</[^>]*>
                  <div className="flex items-center justify-center space-x-4 text-sm">;
                    <span className="text-cyan-400">v{sdk.version}</[^>]*>
                    <span className="text-slate-400">{sdk.downloads}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="space-y-3">;
                  <a;
                    href={sdk.repository};
                    target="_blank"
                    rel="noopener noreferrer"
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    View on GitHub;
                  </[^>]*>
                  <Link;
                    to={sdk.documentation};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    Documentation;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Developer Tools */};
      <section className="py-16 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Developer Tools;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Essential tools and resources to help you build and test your integrations.;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {tools.map((tool, index) => (;
              <Link;
                key={index};
                to={tool.href};
                className="[^"]*"
              >;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">;
                    {tool.name};
                  </[^>]*>
                  <p className="text-slate-300 text-sm mb-3">{tool.description}</[^>]*>
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">;
                    {tool.category};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-cyan-400/20">;
            <div className="text-center mb-8">;
              <h2 className="text-3xl font-bold text-white mb-4">;
                Ready to Start Building?;
              </[^>]*>
              <p className="text-xl text-slate-300">;
                Join thousands of developers who are already building amazing applications with our APIs.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/signup"
                className="[^"]*"
              >;
                Get API Keys;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/docs"
                className="[^"]*"
              >;
                View Documentation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Support Section */};
      <section className="py-16 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Need Help?;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Our developer support team is here to help you succeed.;
            </[^>]*>
          </[^>]*>

          <div className="grid md: grid-cols-3 gap-8">;
            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">;
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-3">Documentation</[^>]*>
              <p className="text-slate-300 mb-4">Comprehensive guides and API references</[^>]*>
              <Link;
                to="/docs"
                className="[^"]*"
              >;
                Browse Docs;
                <[^>]*/>
              </[^>]*>
            </[^>]*>

            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">;
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-3">Community</[^>]*>
              <p className="text-slate-300 mb-4">Connect with other developers</[^>]*>
              <a;
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                Join Community;
                <[^>]*/>
              </[^>]*>
            </[^>]*>

            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">;
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-3">Support</[^>]*>
              <p className="text-slate-300 mb-4">Get help from our technical team</[^>]*>
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Contact Support;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};