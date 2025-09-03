import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Code, BookOpen, Search, ArrowRight, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const DocsPage: NextPage = () => {
  const docCategories = [;
    {
      title: 'Getting Started',;
      description: 'Quick start guides and setup instructions',;
      icon: <BookOpen className="w-6 h-6" />,;
      docs: [;
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', type: 'Guide' },;
        { title: 'Quick Start Tutorial', description: 'Get up and running in 5 minutes', type: 'Tutorial' },;
        { title: 'Configuration', description: 'Basic configuration options', type: 'Reference' }
      ]},;
    {
      title: 'API Reference',;
      description: 'Complete API documentation and examples',;
      icon: <Code className="w-6 h-6" />,;
      docs: [;
        { title: 'REST API', description: 'Complete REST API documentation', type: 'API' },;
        { title: 'GraphQL API', description: 'GraphQL schema and queries', type: 'API' },;
        { title: 'Webhooks', description: 'Webhook configuration and events', type: 'Reference' }
      ]},;
    {
      title: 'SDKs & Libraries',;
      description: 'Client libraries and SDKs for various languages',;
      icon: <FileText className="w-6 h-6" />,;
      docs: [;
        { title: 'JavaScript SDK', description: 'Node.js and browser SDK', type: 'SDK' },;
        { title: 'Python SDK', description: 'Python client library', type: 'SDK' },;
        { title: 'React Components', description: 'Ready-to-use React components', type: 'Library' }
      ]},;
    {
      title: 'Guides & Tutorials',;
      description: 'In-depth guides and best practices',;
      icon: <BookOpen className="w-6 h-6" />,;
      docs: [;
        { title: 'Authentication', description: 'User authentication and authorization', type: 'Guide' },;
        { title: 'Data Management', description: 'Working with data and databases', type: 'Tutorial' },;
        { title: 'Deployment', description: 'Deployment strategies and best practices', type: 'Guide' }
      ]}
  ];

  const popularDocs = [;
    { title: 'API Authentication', views: '12.5k', updated: '2 days ago' },;
    { title: 'Getting Started Guide', views: '8.9k', updated: '1 week ago' },;
    { title: 'Error Handling', views: '6.7k', updated: '3 days ago' },;
    { title: 'Rate Limiting', views: '5.2k', updated: '1 week ago' }
  ];

  return (;
    <MainLayout>;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Comprehensive guides, API references, and resources to help you build with our platform;
          </p>;

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">;
            <div className="relative">;
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search documentation...";
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-zion-cyan";
              />;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Popular Documentation */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Popular Documentation</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Most viewed and recently updated documentation;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {popularDocs.map((doc, index) => (;
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">;
                <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>;
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">;
                  <span>{doc.views} views</span>;
                  <span>{doc.updated}</span>;
                </div>;
                <Link ;
                  href={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-zion-cyan font-medium hover:text-zion-cyan/80 transition-colors">;
                  Read More;
                  <ArrowRight className="w-4 h-4 ml-1" />;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Documentation Categories */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Find the documentation you need organized by topic;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 gap-8">;
            {docCategories.map((category, index) => (;
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">;
                <div className="flex items-center mb-6">;
                  <div className="text-zion-cyan mr-4">;
                    {category.icon}
                  </div>;
                  <div>;
                    <h3 className="text-2xl font-semibold">{category.title}</h3>;
                    <p className="text-gray-600">{category.description}</p>;
                  </div>;
                </div>;

                <div className="space-y-4">;
                  {category.docs.map((doc, docIndex) => (;
                    <div key={docIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">;
                      <div>;
                        <h4 className="font-semibold">{doc.title}</h4>;
                        <p className="text-sm text-gray-600">{doc.description}</p>;
                      </div>;
                      <div className="flex items-center gap-2">;
                        <span className="bg-zion-cyan/10 text-zion-cyan px-2 py-1 rounded text-xs font-medium">;
                          {doc.type}
                        </span>;
                        <Link ;
                          href={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">;
                          <ExternalLink className="w-4 h-4" />;
                        </Link>;
                      </div>;
                    </div>;
                  ))}
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Resources Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Additional Resources</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Tools and resources to help you succeed;
            </p>;
          </div>;

          <div className="grid md:grid-cols-3 gap-8">;
            <div className="text-center p-8 bg-gray-50 rounded-lg">;
              <Download className="w-12 h-12 text-zion-cyan mx-auto mb-4" />;
              <h3 className="text-xl font-semibold mb-3">Download SDKs</h3>;
              <p className="text-gray-600 mb-4">Get the latest SDKs and client libraries</p>;
              <Link href="/downloads" className="text-zion-cyan font-medium hover:text-zion-cyan/80 transition-colors">;
                Browse Downloads;
              </Link>;
            </div>;

            <div className="text-center p-8 bg-gray-50 rounded-lg">;
              <Code className="w-12 h-12 text-zion-cyan mx-auto mb-4" />;
              <h3 className="text-xl font-semibold mb-3">Code Examples</h3>;
              <p className="text-gray-600 mb-4">Real-world examples and code snippets</p>;
              <Link href="/examples" className="text-zion-cyan font-medium hover:text-zion-cyan/80 transition-colors">;
                View Examples;
              </Link>;
            </div>;

            <div className="text-center p-8 bg-gray-50 rounded-lg">;
              <FileText className="w-12 h-12 text-zion-cyan mx-auto mb-4" />;
              <h3 className="text-xl font-semibold mb-3">API Changelog</h3>;
              <p className="text-gray-600 mb-4">Track API changes and updates</p>;
              <Link href="/changelog" className="text-zion-cyan font-medium hover:text-zion-cyan/80 transition-colors">;
                View Changelog;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Need Help?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Can't find what you're looking for? Our support team is here to help.;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">;
              Contact Support;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
            <Link href="/help" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              Help Center;
            </Link>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}
export default DocsPage;