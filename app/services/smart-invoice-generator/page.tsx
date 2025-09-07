import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Invoice Generator - AI-Powered Invoice Automation | Zion Tech Group',
  description: 'AI-powered invoice automation with smart templates, payment tracking, and financial analytics. Reduce billing time by 80% and get paid 30% faster.',
  keywords: 'smart invoice generator, invoice automation, billing software, payment tracking, financial analytics, AI invoicing',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Smart Invoice Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered invoice automation with smart templates, payment tracking, and financial analytics. 
            Reduce billing time by 80% and get paid 30% faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Generation</h3>
            <p className="text-gray-300 mb-4">Automatically generate professional invoices using AI-powered templates and smart data extraction.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Smart template selection</li>
              <li>• Auto-populate client data</li>
              <li>• Intelligent pricing suggestions</li>
              <li>• Brand customization</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">Payment Tracking</h3>
            <p className="text-gray-300 mb-4">Track invoice status, payment history, and outstanding balances with real-time updates.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Real-time payment status</li>
              <li>• Automated reminders</li>
              <li>• Payment analytics</li>
              <li>• Overdue tracking</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-white mb-3">Financial Analytics</h3>
            <p className="text-gray-300 mb-4">Comprehensive financial insights and reporting to help you make better business decisions.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Revenue analytics</li>
              <li>• Cash flow tracking</li>
              <li>• Client profitability</li>
              <li>• Tax reporting</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold text-white mb-3">Payment Processing</h3>
            <p className="text-gray-300 mb-4">Accept payments directly through invoices with integrated payment gateways.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Multiple payment methods</li>
              <li>• Secure transactions</li>
              <li>• Instant notifications</li>
              <li>• Recurring payments</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold text-white mb-3">Integrations</h3>
            <p className="text-gray-300 mb-4">Seamlessly integrate with your existing business tools and accounting software.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• QuickBooks integration</li>
              <li>• Xero compatibility</li>
              <li>• CRM connections</li>
              <li>• API access</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-white mb-3">Mobile Access</h3>
            <p className="text-gray-300 mb-4">Manage invoices on the go with our mobile-responsive platform and mobile app.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Mobile-responsive design</li>
              <li>• iOS & Android apps</li>
              <li>• Offline capabilities</li>
              <li>• Push notifications</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <p className="text-gray-300">Time Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">30%</div>
              <p className="text-gray-300">Faster Payments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <p className="text-gray-300">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Automation</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$29<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 50 invoices/month</li>
                <li>Basic templates</li>
                <li>Payment tracking</li>
                <li>Email support</li>
                <li>Mobile access</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$79<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 500 invoices/month</li>
                <li>AI-powered generation</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>Custom branding</li>
                <li>API access</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$199<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Unlimited invoices</li>
                <li>Custom AI models</li>
                <li>Advanced integrations</li>
                <li>24/7 dedicated support</li>
                <li>White-label solution</li>
                <li>Custom development</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Streamline Your Invoicing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust our Smart Invoice Generator to automate their billing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}