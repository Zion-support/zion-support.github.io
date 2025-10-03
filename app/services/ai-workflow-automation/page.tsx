import { Link } from 'react-router-dom';

export default function AIWorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Workflow Automation Suite
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Automate complex business processes with intelligent workflow design, smart triggers, 
              and performance monitoring. Reduce manual work by 80% with our AI-powered automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link to="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful automation capabilities designed for enterprise workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate repetitive tasks and complex business processes with intelligent decision-making capabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Document processing automation</li>
                <li>• Email and communication workflows</li>
                <li>• Data entry and validation</li>
                <li>• Approval and routing systems</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Smart Triggers</h3>
              <p className="text-gray-600 mb-4">
                Intelligent trigger system that responds to events, conditions, and user actions automatically.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Event-based triggers</li>
                <li>• Schedule-based automation</li>
                <li>• Conditional logic flows</li>
                <li>• Multi-channel integration</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Real-time monitoring and analytics to track automation performance and identify optimization opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time dashboards</li>
                <li>• Performance metrics</li>
                <li>• Error tracking and alerts</li>
                <li>• Optimization recommendations</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Custom Workflows</h3>
              <p className="text-gray-600 mb-4">
                Build custom workflows tailored to your specific business needs with our drag-and-drop designer.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Visual workflow designer</li>
                <li>• Pre-built templates</li>
                <li>• Custom logic implementation</li>
                <li>• Version control and testing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-3">API Integrations</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate with your existing systems and third-party applications through robust APIs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• REST API connections</li>
                <li>• Database integrations</li>
                <li>• Cloud service connectors</li>
                <li>• Legacy system bridges</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with role-based access control and compliance monitoring.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Role-based permissions</li>
                <li>• Audit trails</li>
                <li>• Data encryption</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your operations with measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-gray-600">Reduction in Manual Work</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
              <div className="text-gray-600">Faster Process Completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Automated Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how organizations are using AI workflow automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Customer Onboarding</h3>
              <p className="text-gray-600 mb-4">
                Automate the entire customer onboarding process from initial contact to account activation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Document collection and verification</li>
                <li>• Background checks and compliance</li>
                <li>• Account setup and configuration</li>
                <li>• Welcome communications</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Invoice Processing</h3>
              <p className="text-gray-600 mb-4">
                Streamline invoice processing with automated data extraction, validation, and approval workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated data extraction</li>
                <li>• Three-way matching</li>
                <li>• Approval routing</li>
                <li>• Payment processing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">HR Operations</h3>
              <p className="text-gray-600 mb-4">
                Automate HR processes including recruitment, onboarding, and employee lifecycle management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resume screening and ranking</li>
                <li>• Interview scheduling</li>
                <li>• Employee onboarding</li>
                <li>• Performance reviews</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Sales Operations</h3>
              <p className="text-gray-600 mb-4">
                Automate sales processes from lead qualification to deal closure and customer success.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lead scoring and routing</li>
                <li>• Follow-up automation</li>
                <li>• Proposal generation</li>
                <li>• Contract management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to fit your automation needs
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Workflow Automation Suite</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">$199/month</div>
              <p className="text-gray-600">Starting price for small to medium businesses</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-600">Up to 10 automated workflows</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-600">Smart triggers and conditions</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-600">Performance monitoring dashboard</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-600">API integrations</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-600">Email support</span>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations already using our AI workflow automation to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Automation Journey
            </Link>
            <Link to="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}