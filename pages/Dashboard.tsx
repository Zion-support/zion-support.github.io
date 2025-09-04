import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Manage your services and monitor your account
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Status */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Service Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Content Creation</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Email Automation</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Business Intelligence</span>
                  <span className="text-green-400">Active</span>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Usage This Month</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Content Generated</span>
                    <span>1,247 articles</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Emails Processed</span>
                    <span>3,891 emails</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Analytics Reports</span>
                    <span>156 reports</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="text-sm text-gray-300">
                  <div className="font-semibold">New content generated</div>
                  <div className="text-gray-400">2 hours ago</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="font-semibold">Email campaign completed</div>
                  <div className="text-gray-400">5 hours ago</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="font-semibold">Analytics report updated</div>
                  <div className="text-gray-400">1 day ago</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Generate Content
                </button>
                <button className="w-full bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  View Reports
                </button>
                <button className="w-full bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Settings
                </button>
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Billing</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Current Plan</span>
                  <span>Professional</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Next Billing</span>
                  <span>Feb 15, 2025</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Amount</span>
                  <span className="text-green-400">$1,297</span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Support</h3>
              <div className="space-y-3">
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Contact Support
                </button>
                <button className="w-full bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  View Documentation
                </button>
                <button className="w-full bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}