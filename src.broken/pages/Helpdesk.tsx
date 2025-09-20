<<<<<<< HEAD
import React from 'react',
import { Link } from 'react-router-dom',

export default function Helpdesk() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Helpdesk
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our helpdesk page
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
=======
import React, { useState } from 'react',
import { Link } from 'react-router-dom',
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  BookOpen,
  FileText,
  Video,
  Users,
  Zap,
  Shield,
  Settings,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Globe,
  Target,
  TrendingUp,
  Ticket,
  Headphones,
  Monitor,
  Smartphone,
  Server,
  Database,
  Network,
  Cpu,
  Atom,
  Leaf,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code,
  DollarSign
} from 'lucide-react',

export default function Helpdesk() {
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [expandedTicket, setExpandedTicket] = useState<any>(null),

  const supportCategories = [
    {
      id: 'all',
      name: 'All Issues',
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'technical',
      name: 'Technical Issues',
      icon: Monitor,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'account',
      name: 'Account & Billing',
      icon: Settings,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'product',
      name: 'Product Support',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'integration',
      name: 'Integration Help',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'security',
      name: 'Security Issues',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ],

  const commonIssues = [
    {
      id: 'login-issue',
      title: 'Unable to log in to my account',
      category: 'account',
      priority: 'high',
      description:
        "I'm getting an error when trying to log in to my account. The system says my credentials are invalid.",
      solution:
        'Please try resetting your password using the "Forgot Password" link. If the issue persists, contact our support team.',
      tags: ['loginauthentication', 'password']
    },
    {
      id: 'api-error',
      title: 'API integration errors',
      category: 'integration',
      priority: 'medium',
      description:
        'Our system is experiencing issues when calling the Zion Tech Group API endpoints.',
      solution:
        'Check your API key and ensure you have the correct permissions. Verify the endpoint URLs and request format.',
      tags: ['apiintegration', 'endpoints']
    },
    {
      id: 'performance-issue',
      title: 'Slow response times',
      category: 'technical',
      priority: 'medium',
      description:
        'The application is running very slowly and taking a long time to respond to user actions.',
      solution:
        'Clear your browser cache and cookies. If the issue continues, try accessing from a different device or network.',
      tags: ['performancespeed', 'response-time']
    },
    {
      id: 'billing-question',
      title: 'Billing and subscription questions',
      category: 'account',
      priority: 'low',
      description:
        'I have questions about my current subscription plan and billing cycle.',
      solution:
        'You can view your billing information in your account settings. For detailed billing questions, contact our billing team.',
      tags: ['billingsubscription', 'account']
    }
  ],

  const supportTickets = [
    {
      id: 'TICKET-001',
      title: 'Login authentication failed',
      category: 'account',
      priority: 'high',
      status: 'open',
      createdAt: '2025-01-27T10:30:00Z',
      lastUpdated: '2025-01-27T14:45:00Z',
      description: 'Unable to authenticate with existing credentials'
    },
    {
      id: 'TICKET-002',
      title: 'API rate limiting issues',
      category: 'integration',
      priority: 'medium',
      status: 'in-progress',
      createdAt: '2025-01-26T15:20:00Z',
      lastUpdated: '2025-01-27T09:15:00Z',
      description: 'Experiencing unexpected rate limiting on API calls'
    },
    {
      id: 'TICKET-003',
      title: 'Dashboard loading slowly',
      category: 'technical',
      priority: 'low',
      status: 'resolved',
      createdAt: '2025-01-25T11:00:00Z',
      lastUpdated: '2025-01-26T16:30:00Z',
      description: 'Dashboard takes more than 10 seconds to load'
    }
  ],

  const filteredIssues = commonIssues.filter(
    (issue) => selectedCategory === 'all' || issue.category === selectedCategory
  ),

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400 bg-red-400/10 border-red-400/20',
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      case 'low':
        return 'text-green-400 bg-green-400/10 border-green-400/20',
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  },

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-red-400 bg-red-400/10 border-red-400/20',
      case 'in-progress':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      case 'resolved':
        return 'text-green-400 bg-green-400/10 border-green-400/20',
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  },

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Helpdesk
            </span>
            <br />
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get help with your Zion Tech Group services. Find solutions to common issues, 
            submit support tickets, and connect with our expert support team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, solutions, or contact support..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/contact"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                Contact Support
              </h3>
              <p className="text-gray-300 text-sm">
                Get direct help from our support team via chat, email, or phone
              </p>
            </Link>

            <Link
              to="/training"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                Training Resources
              </h3>
              <p className="text-gray-300 text-sm">
                Access tutorials, documentation, and training materials
              </p>
            </Link>

            <Link
              to="/status"
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                System Status
              </h3>
              <p className="text-gray-300 text-sm">
                Check real-time system status and service availability
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Support Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  selectedCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-gray-700 bg-gray-800 hover:border-cyan-500/50'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Common Issues */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Common Issues & Solutions</h2>
          <div className="space-y-6">
            {filteredIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold">{issue.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(issue.priority)}`}>
                        {issue.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{issue.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {issue.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-cyan-400 mb-2">Solution:</h4>
                  <p className="text-gray-300">{issue.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Tickets */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Your Support Tickets</h2>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
            >
              <Ticket className="w-4 h-4 mr-2" />
              New Ticket
            </Link>
          </div>
          
          <div className="space-y-4">
            {supportTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold">{ticket.title}</h3>
                    <span className="text-sm text-gray-400">#{ticket.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                      {ticket.status.replace('- ').toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => setExpandedTicket(expandedTicket === ticket.id ? null : ticket.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {expandedTicket === ticket.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400 mb-4">
                  <div>
                    <span className="font-medium text-gray-300">Category:</span> {ticket.category}
                  </div>
                  <div>
                    <span className="font-medium text-gray-300">Priority:</span> {ticket.priority}
                  </div>
                  <div>
                    <span className="font-medium text-gray-300">Created:</span> {new Date(ticket.createdAt).toLocaleDateString()}
                  </div>
                </div>
                
                {expandedTicket === ticket.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 mb-4">{ticket.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        Last updated: {new Date(ticket.lastUpdated).toLocaleDateString()}
                      </span>
                      <Link
                        to={`/contact?ticket=${ticket.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Update Ticket
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues. 
            Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
        </div>
      </div>
    </div>
  )
}
