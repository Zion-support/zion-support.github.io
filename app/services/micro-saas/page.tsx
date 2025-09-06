import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including AI-powered tools, productivity apps, business automation, and revenue-generating solutions. From MVP to enterprise scale.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, business automation, business intelligence'
};

export default function MicroSAASPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Build and scale profitable micro SaaS products with our comprehensive development services. 
            From MVP to enterprise scale, we help you create revenue-generating solutions.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in building focused, profitable micro SaaS products that solve specific business problems 
              and generate recurring revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Tools</h3>
              <p className="text-gray-600 mb-4">
                Build intelligent micro SaaS products that leverage AI to automate tasks and provide valuable insights.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Content generation tools</li>
                <li>• Data analysis platforms</li>
                <li>• Automation workflows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Productivity Apps</h3>
              <p className="text-gray-600 mb-4">
                Create focused productivity tools that help users accomplish specific tasks more efficiently.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Task management tools</li>
                <li>• Time tracking apps</li>
                <li>• Collaboration platforms</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Automation</h3>
              <p className="text-gray-600 mb-4">
                Develop automation solutions that streamline business processes and reduce manual work.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Workflow automation</li>
                <li>• Integration platforms</li>
                <li>• Process optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Tools</h3>
              <p className="text-gray-600 mb-4">
                Build marketing-focused micro SaaS products that help businesses grow and engage customers.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Email marketing tools</li>
                <li>• Social media management</li>
                <li>• Analytics dashboards</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Create data-driven micro SaaS products that provide valuable insights and reporting.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Business intelligence tools</li>
                <li>• Reporting platforms</li>
                <li>• Data visualization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">
                Develop custom micro SaaS products tailored to specific industry needs and use cases.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Industry-specific tools</li>
                <li>• Custom integrations</li>
                <li>• Specialized workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Micro SaaS Product?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your micro SaaS idea and how we can help you bring it to market. 
            Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}