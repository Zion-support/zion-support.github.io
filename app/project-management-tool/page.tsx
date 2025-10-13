import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckSquare, 
  Users, 
  Calendar, 
  BarChart3, 
  Clock, 
  Target, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  FileText,
  MessageSquare
} from 'lucide-react';

const ProjectManagementToolPage = () => {
  return (
    <>
      <Helmet>
        <title>Project Management Tool - Zion Tech Group</title>
        <meta name="description" content="Powerful project management tool with task tracking, team collaboration, time management, and reporting features. Streamline your projects with our comprehensive solution." />
        <meta name="keywords" content="project management, task tracking, team collaboration, project planning, productivity tools" />
        <meta property="og:title" content="Project Management Tool - Zion Tech Group" />
        <meta property="og:description" content="Powerful project management tool with task tracking, team collaboration, time management, and reporting features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/project-management-tool" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Project Management Tool
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Streamline your projects with our comprehensive project management solution. 
                Track tasks, collaborate with teams, and deliver projects on time and within budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Project Management Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage projects effectively, from planning to delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Task Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <CheckSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Task Management</h3>
                <p className="text-gray-300 mb-6">
                  Create, assign, and track tasks with detailed descriptions, priorities, and deadlines.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Custom task statuses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Priority levels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Due date tracking</span>
                  </li>
                </ul>
              </div>

              {/* Team Collaboration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
                <p className="text-gray-300 mb-6">
                  Foster collaboration with real-time updates, comments, and team communication tools.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Real-time updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Team messaging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>File sharing</span>
                  </li>
                </ul>
              </div>

              {/* Time Tracking */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Time Tracking</h3>
                <p className="text-gray-300 mb-6">
                  Track time spent on tasks and projects for accurate billing and productivity analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automatic time tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Manual time entry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Time reports</span>
                  </li>
                </ul>
              </div>

              {/* Project Planning */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Project Planning</h3>
                <p className="text-gray-300 mb-6">
                  Plan projects with Gantt charts, milestones, and resource allocation tools.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Gantt charts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Milestone tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Resource management</span>
                  </li>
                </ul>
              </div>

              {/* Reporting & Analytics */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reporting & Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Generate detailed reports and insights to track project progress and team performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Custom dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Progress reports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Performance metrics</span>
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Integrations</h3>
                <p className="text-gray-300 mb-6">
                  Connect with your favorite tools and services for seamless workflow integration.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Slack integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Google Workspace</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>API access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and project needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Starter</h3>
                  <div className="text-4xl font-bold mb-2">$9<span className="text-lg text-gray-400">/user/month</span></div>
                  <p className="text-gray-400">Perfect for small teams</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Basic reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-400 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Professional</h3>
                  <div className="text-4xl font-bold mb-2">$19<span className="text-lg text-gray-400">/user/month</span></div>
                  <p className="text-gray-400">Best for growing teams</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Up to 25 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Advanced reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Time tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <p className="text-gray-400">For large organizations</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Advanced security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>On-premise deployment</span>
                  </li>
                </ul>
                <button className="w-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 py-3 rounded-lg font-semibold transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Projects?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of effective project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectManagementToolPage;