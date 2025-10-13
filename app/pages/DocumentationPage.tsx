import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Book, Code, Download, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const documentationSections = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials to get you up and running',
      links: [
        { name: 'Installation Guide', href: '/docs/installation' },
        { name: 'Quick Start Tutorial', href: '/docs/quick-start' },
        { name: 'Configuration', href: '/docs/configuration' },
        { name: 'First Steps', href: '/docs/first-steps' }
      ]
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with examples and code snippets',
      links: [
        { name: 'REST API', href: '/docs/api/rest' },
        { name: 'GraphQL API', href: '/docs/api/graphql' },
        { name: 'Webhooks', href: '/docs/api/webhooks' },
        { name: 'SDKs', href: '/docs/api/sdks' }
      ]
    },
    {
      icon: Download,
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for popular programming languages',
      links: [
        { name: 'JavaScript SDK', href: '/docs/sdks/javascript' },
        { name: 'Python SDK', href: '/docs/sdks/python' },
        { name: 'Java SDK', href: '/docs/sdks/java' },
        { name: 'Go SDK', href: '/docs/sdks/go' }
      ]
    },
    {
      icon: ExternalLink,
      title: 'Integrations',
      description: 'Step-by-step guides for integrating with popular platforms',
      links: [
        { name: 'AWS Integration', href: '/docs/integrations/aws' },
        { name: 'Azure Integration', href: '/docs/integrations/azure' },
        { name: 'Google Cloud', href: '/docs/integrations/gcp' },
        { name: 'Docker Setup', href: '/docs/integrations/docker' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Authentication', href: '/docs/auth' },
    { name: 'Rate Limits', href: '/docs/rate-limits' },
    { name: 'Error Codes', href: '/docs/errors' },
    { name: 'Best Practices', href: '/docs/best-practices' },
    { name: 'Troubleshooting', href: '/docs/troubleshooting' },
    { name: 'Changelog', href: '/docs/changelog' }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. Get started with our APIs, SDKs, and integration guides." />
        <meta name="keywords" content="documentation, API reference, SDKs, integration guides, tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Everything you need to integrate and use our AI and IT solutions. 
                From quick start guides to advanced API references.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#getting-started" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </a>
                <a href="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Need Help?
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <p className="text-sm text-gray-300 hover:text-white">{link.name}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section id="getting-started" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentation Sections</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive documentation organized by topic
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {documentationSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{section.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{section.description}</p>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.href} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Code Examples</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get started quickly with our code examples and sample implementations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">JavaScript Example</h3>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
{`import { ZionAI } from '@ziontech/ai-sdk';

const client = new ZionAI({
  apiKey: 'your-api-key'
});

const response = await client.generate({
  prompt: 'Hello, world!',
  model: 'gpt-4'
});

console.log(response.text);`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Python Example</h3>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
{`from ziontech import AI

client = AI(api_key="your-api-key")

response = client.generate(
    prompt="Hello, world!",
    model="gpt-4"
)

print(response.text)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Additional Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block">
                Contact Support
              </a>
              <a href="/support" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-block">
                Support Center
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocumentationPage;