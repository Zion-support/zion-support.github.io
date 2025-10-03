import { Link } from 'react-router-dom';


export default function RemoteWorkProductivitySuite() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Remote Work Productivity Suite</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empower your distributed teams with intelligent productivity tools designed for remote work success. 
          Optimize meetings, streamline onboarding, and boost collaboration.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Remote Work Experience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
            <p className="text-gray-600">Reduction in meeting time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
            <p className="text-gray-600">Faster onboarding process</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
            <p className="text-gray-600">Team satisfaction score</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">MeetingTimer Pro</h3>
          <p className="text-gray-600 mb-4">
            Track speaking time, generate meeting summaries, and integrate with calendar systems to reduce meeting overload.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Real-time speaking time tracking</li>
            <li>• Automated meeting summaries</li>
            <li>• Calendar integration</li>
            <li>• Meeting effectiveness analytics</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $19/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">RemoteOnboarding</h3>
          <p className="text-gray-600 mb-4">
            Streamline the process of integrating new hires into distributed teams with automated workflows and progress tracking.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Automated onboarding workflows</li>
            <li>• Progress tracking and milestones</li>
            <li>• Mentor assignment system</li>
            <li>• Integration with HR systems</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $39/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">TeamAnalytics Pro</h3>
          <p className="text-gray-600 mb-4">
            Monitor team productivity, collaboration patterns, and engagement levels with AI-powered analytics and insights.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Productivity metrics tracking</li>
            <li>• Collaboration pattern analysis</li>
            <li>• Engagement level monitoring</li>
            <li>• Custom dashboard creation</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $49/month</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Powered Meeting Assistant</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Automatic transcription and summarization</li>
              <li>• Action item extraction and assignment</li>
              <li>• Follow-up reminder system</li>
              <li>• Integration with project management tools</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Virtual Team Building</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Automated team building activities</li>
              <li>• Virtual coffee chat scheduling</li>
              <li>• Team bonding event management</li>
              <li>• Culture building initiatives</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Integration</h3>
            <p className="text-gray-600">Seamless integration with your existing tools and workflows</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
            <p className="text-gray-600">24/7 dedicated support team for enterprise clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Security</h3>
            <p className="text-gray-600">Enterprise-grade security and compliance features</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Remote Work?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of companies that have improved their remote work productivity with our comprehensive suite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            href="https://ziontechgroup.com/services/remote-work-productivity-suite" 
            className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Schedule Demo
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
        <div className="text-gray-600 space-y-1">
          <p><strong>Mobile:</strong> +1 302 464 0950</p>
          <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
}