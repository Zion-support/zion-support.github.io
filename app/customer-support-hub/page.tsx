'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon, 
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  BellIcon,
  StarIcon,
  PaperAirplaneIcon,
  TagIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  assignee: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
  messages: Array<{
    id: string;
    sender: string;
    message: string;
    timestamp: string;
    isInternal: boolean;
  }>;
}

const CustomerSupportHub: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [filter, setFilter] = useState<'all' | 'open' | 'in-progress' | 'resolved' | 'closed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);
  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    category: 'general',
    customerName: '',
    customerEmail: ''
  });

  // Load tickets from localStorage
  useEffect(() => {
    const savedTickets = localStorage.getItem('supportTickets');
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    } else {
      // Initialize with sample data
      const sampleTickets: Ticket[] = [
        {
          id: '1',
          title: 'Login issues with mobile app',
          description: 'Customer unable to login to mobile application',
          status: 'open',
          priority: 'high',
          category: 'technical',
          assignee: 'John Doe',
          customer: {
            name: 'Sarah Johnson',
            email: 'sarah.j@email.com',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
          },
          createdAt: '2024-01-15T10:30:00Z',
          updatedAt: '2024-01-15T10:30:00Z',
          messages: [
            {
              id: '1',
              sender: 'Sarah Johnson',
              message: 'I cannot login to the mobile app. It keeps showing an error message.',
              timestamp: '2024-01-15T10:30:00Z',
              isInternal: false
            }
          ]
        },
        {
          id: '2',
          title: 'Billing question about subscription',
          description: 'Customer has questions about their subscription billing',
          status: 'in-progress',
          priority: 'medium',
          category: 'billing',
          assignee: 'Jane Smith',
          customer: {
            name: 'Mike Wilson',
            email: 'mike.w@email.com',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
          },
          createdAt: '2024-01-14T14:20:00Z',
          updatedAt: '2024-01-15T09:15:00Z',
          messages: [
            {
              id: '1',
              sender: 'Mike Wilson',
              message: 'I was charged twice for my subscription this month. Can you help?',
              timestamp: '2024-01-14T14:20:00Z',
              isInternal: false
            },
            {
              id: '2',
              sender: 'Jane Smith',
              message: 'I\'m looking into your billing issue. Let me check your account.',
              timestamp: '2024-01-15T09:15:00Z',
              isInternal: true
            }
          ]
        },
        {
          id: '3',
          title: 'Feature request for dashboard',
          description: 'Customer requesting new dashboard features',
          status: 'resolved',
          priority: 'low',
          category: 'feature-request',
          assignee: 'Alex Brown',
          customer: {
            name: 'Emily Davis',
            email: 'emily.d@email.com',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
          },
          createdAt: '2024-01-10T16:45:00Z',
          updatedAt: '2024-01-12T11:30:00Z',
          messages: [
            {
              id: '1',
              sender: 'Emily Davis',
              message: 'It would be great to have dark mode in the dashboard.',
              timestamp: '2024-01-10T16:45:00Z',
              isInternal: false
            },
            {
              id: '2',
              sender: 'Alex Brown',
              message: 'Great suggestion! We\'ve added dark mode to our roadmap.',
              timestamp: '2024-01-12T11:30:00Z',
              isInternal: true
            }
          ]
        }
      ];
      setTickets(sampleTickets);
    }
  }, []);

  // Save tickets to localStorage
  useEffect(() => {
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = () => {
    if (newTicket.title.trim() && newTicket.customerName.trim()) {
      const ticket: Ticket = {
        id: Date.now().toString(),
        ...newTicket,
        status: 'open',
        assignee: 'Unassigned',
        customer: {
          name: newTicket.customerName,
          email: newTicket.customerEmail,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newTicket.customerName)}&background=6366f1&color=fff`
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        messages: [{
          id: '1',
          sender: newTicket.customerName,
          message: newTicket.description,
          timestamp: new Date().toISOString(),
          isInternal: false
        }]
      };
      setTickets([...tickets, ticket]);
      setNewTicket({
        title: '',
        description: '',
        priority: 'medium',
        category: 'general',
        customerName: '',
        customerEmail: ''
      });
      setShowNewTicketForm(false);
    }
  };

  const updateTicketStatus = (id: string, status: Ticket['status']) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, status, updatedAt: new Date().toISOString() } : ticket
    ));
  };

  const addMessage = (ticketId: string, message: string, isInternal: boolean = false) => {
    if (message.trim()) {
      const newMsg = {
        id: Date.now().toString(),
        sender: isInternal ? 'Support Agent' : 'Customer',
        message,
        timestamp: new Date().toISOString(),
        isInternal
      };
      
      setTickets(tickets.map(ticket => 
        ticket.id === ticketId 
          ? { 
              ...ticket, 
              messages: [...ticket.messages, newMsg],
              updatedAt: new Date().toISOString()
            } 
          : ticket
      ));
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesFilter = filter === 'all' || ticket.status === filter;
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: Ticket['status']) => {
    switch (status) {
      case 'open': return 'text-red-400 bg-red-900/20 border-red-500';
      case 'in-progress': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
      case 'resolved': return 'text-green-400 bg-green-900/20 border-green-500';
      case 'closed': return 'text-gray-400 bg-gray-900/20 border-gray-500';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500';
    }
  };

  const getPriorityColor = (priority: Ticket['priority']) => {
    switch (priority) {
      case 'urgent': return 'text-red-400 bg-red-900/20';
      case 'high': return 'text-orange-400 bg-orange-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'low': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in-progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length,
    closed: tickets.filter(t => t.status === 'closed').length,
    avgResponseTime: '2.5 hours'
  };

  return (
    <>
      <SEOHead 
        title="Customer Support Hub Pro - Advanced Help Desk & Ticket Management | Zion Tech Group"
        description="Professional customer support platform with AI-powered ticket routing, real-time chat, and comprehensive analytics. Streamline your customer service operations."
        keywords="customer support, help desk, ticket management, customer service, live chat, support analytics, AI routing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Header */}
        <section className="bg-slate-800/50 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Customer Support Hub Pro
                  </span>
                </h1>
                <p className="text-gray-300">Advanced help desk and ticket management system</p>
              </div>
              <div className="flex items-center gap-4 mt-4 lg:mt-0">
                <button
                  onClick={() => setShowNewTicketForm(true)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  New Ticket
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Dashboard */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.total}</div>
                <div className="text-gray-300">Total Tickets</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-red-400 mb-2">{stats.open}</div>
                <div className="text-gray-300">Open</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.inProgress}</div>
                <div className="text-gray-300">In Progress</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-green-400 mb-2">{stats.resolved}</div>
                <div className="text-gray-300">Resolved</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-gray-400 mb-2">{stats.closed}</div>
                <div className="text-gray-300">Closed</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stats.avgResponseTime}</div>
                <div className="text-gray-300">Avg Response</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tickets List */}
            <div className="lg:col-span-1">
              {/* Filters */}
              <div className="mb-6 space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Tickets</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              {/* Tickets */}
              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      selectedTicket?.id === ticket.id
                        ? 'border-purple-500 bg-slate-800/70'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white text-sm">{ticket.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                        {ticket.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={ticket.customer.avatar}
                        alt={ticket.customer.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-300">{ticket.customer.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(ticket.createdAt).toLocaleDateString()} • {ticket.assignee}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ticket Details */}
            <div className="lg:col-span-2">
              {selectedTicket ? (
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 h-full flex flex-col">
                  {/* Ticket Header */}
                  <div className="p-6 border-b border-slate-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-white mb-2">{selectedTicket.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>#{selectedTicket.id}</span>
                          <span>•</span>
                          <span>{selectedTicket.category}</span>
                          <span>•</span>
                          <span>{selectedTicket.assignee}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={selectedTicket.status}
                          onChange={(e) => updateTicketStatus(selectedTicket.id, e.target.value as any)}
                          className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="open">Open</option>
                          <option value="in-progress">In Progress</option>
                          <option value="resolved">Resolved</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={selectedTicket.customer.avatar}
                        alt={selectedTicket.customer.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-white">{selectedTicket.customer.name}</div>
                        <div className="text-sm text-gray-400">{selectedTicket.customer.email}</div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-6 overflow-y-auto">
                    <div className="space-y-4">
                      {selectedTicket.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isInternal ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                              message.isInternal
                                ? 'bg-purple-600 text-white'
                                : 'bg-slate-700 text-gray-300'
                            }`}
                          >
                            <div className="text-sm font-medium mb-1">{message.sender}</div>
                            <div className="text-sm">{message.message}</div>
                            <div className="text-xs opacity-70 mt-2">
                              {new Date(message.timestamp).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-6 border-t border-slate-700">
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addMessage(selectedTicket.id, newMessage, true);
                            setNewMessage('');
                          }
                        }}
                        className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        onClick={() => {
                          addMessage(selectedTicket.id, newMessage, true);
                          setNewMessage('');
                        }}
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                      >
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 h-full flex items-center justify-center">
                  <div className="text-center">
                    <ChatBubbleLeftRightIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <div className="text-gray-400">Select a ticket to view details</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* New Ticket Form Modal */}
        {showNewTicketForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Create New Ticket</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Customer Name"
                    value={newTicket.customerName}
                    onChange={(e) => setNewTicket({...newTicket, customerName: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="email"
                    placeholder="Customer Email"
                    value={newTicket.customerEmail}
                    onChange={(e) => setNewTicket({...newTicket, customerEmail: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Ticket Title"
                  value={newTicket.title}
                  onChange={(e) => setNewTicket({...newTicket, title: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={newTicket.priority}
                    onChange={(e) => setNewTicket({...newTicket, priority: e.target.value as any})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                  <select
                    value={newTicket.category}
                    onChange={(e) => setNewTicket({...newTicket, category: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="general">General</option>
                    <option value="technical">Technical</option>
                    <option value="billing">Billing</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="bug-report">Bug Report</option>
                  </select>
                </div>
                <textarea
                  placeholder="Ticket Description"
                  value={newTicket.description}
                  onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={addTicket}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Create Ticket
                  </button>
                  <button
                    onClick={() => setShowNewTicketForm(false)}
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Support Features</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Routing</h3>
                <p className="text-gray-300">Intelligent ticket routing based on content, priority, and agent expertise.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <BellIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Notifications</h3>
                <p className="text-gray-300">Instant notifications for new tickets, updates, and escalations.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
                <p className="text-gray-300">Comprehensive analytics to track performance and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Support <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your support team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$49<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 3 agents
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited tickets
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$149<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10 agents
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    AI routing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Live chat integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$399<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited agents
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    White-label options
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    24/7 support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transform Your Customer Support
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerSupportHub;