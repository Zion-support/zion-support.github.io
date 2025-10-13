import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Clock, 
  Users, 
  BarChart3, 
  Target, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  FileText,
  MessageSquare,
  Calendar
} from 'lucide-react';

const EmployeeTimeTrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Employee Time Tracker - Zion Tech Group</title>
        <meta name="description" content="Comprehensive employee time tracking solution for monitoring work hours, managing projects, and improving productivity. Track time efficiently and accurately." />
        <meta name="keywords" content="time tracking, employee monitoring, productivity tools, work hours, project tracking" />
        <meta property="og:title" content="Employee Time Tracker - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive employee time tracking solution for monitoring work hours, managing projects, and improving productivity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/employee-time-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Employee Time Tracker
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Track employee work hours, monitor productivity, and manage projects efficiently. 
                Get detailed insights into how time is spent across your organization.
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
              <h2 className="text-4xl font-bold mb-4">Comprehensive Time Tracking Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to track time, monitor productivity, and manage your workforce effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Time Tracking */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Time Tracking</h3>
                <p className="text-gray-300 mb-6">
                  Track work hours with automatic time capture and manual entry options.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automatic time capture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Manual time entry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Idle time detection</span>
                  </li>
                </ul>
              </div>

              {/* Project Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Project Management</h3>
                <p className="text-gray-300 mb-6">
                  Track time spent on specific projects and tasks for accurate billing and reporting.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Project time allocation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Task-based tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Client billing</span>
                  </li>
                </ul>
              </div>

              {/* Team Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Management</h3>
                <p className="text-gray-300 mb-6">
                  Monitor team productivity and manage employee schedules and assignments.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Team dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Schedule management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </div>

              {/* Reporting & Analytics */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reporting & Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Generate detailed reports and gain insights into productivity and time usage patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Productivity reports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Time analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Custom dashboards</span>
                  </li>
                </ul>
              </div>

              {/* Attendance Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Attendance Management</h3>
                <p className="text-gray-300 mb-6">
                  Track attendance, manage leave requests, and monitor employee schedules.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Clock in/out tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Leave management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Overtime tracking</span>
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Integration</h3>
                <p className="text-gray-300 mb-6">
                  Connect with your existing HR and project management systems for seamless workflow.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>HR systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Payroll software</span>
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Time Management?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of efficient time tracking and productivity management.
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

export default EmployeeTimeTrackerPage;