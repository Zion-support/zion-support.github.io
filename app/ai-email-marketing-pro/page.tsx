'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  EnvelopeIcon, 
  PlusIcon, 
  PencilIcon,
  TrashIcon,
  PlayIcon,
  PauseIcon,
  ChartBarIcon,
  UserGroupIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'paused';
  recipients: number;
  sent: number;
  opened: number;
  clicked: number;
  unsubscribed: number;
  createdAt: string;
  scheduledFor?: string;
  template: string;
  aiOptimized: boolean;
}

interface Contact {
  id: string;
  email: string;
  name: string;
  tags: string[];
  status: 'active' | 'unsubscribed' | 'bounced';
  lastActivity: string;
  source: string;
}

const AIEmailMarketingPro: React.FC = () => {
  const [campaigns, setCampaigns] = useState<EmailCampaign[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<EmailCampaign | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [filter, setFilter] = useState<'all' | 'draft' | 'scheduled' | 'sending' | 'sent' | 'paused'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    subject: '',
    content: '',
    template: 'basic',
    scheduledFor: '',
    aiOptimized: true
  });

  // Load data from localStorage
  useEffect(() => {
    const savedCampaigns = localStorage.getItem('emailCampaigns');
    const savedContacts = localStorage.getItem('emailContacts');
    
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns));
    } else {
      // Initialize with sample data
      const sampleCampaigns: EmailCampaign[] = [
        {
          id: '1',
          name: 'Welcome Series - New Users',
          subject: 'Welcome to Zion Tech Group!',
          content: 'Thank you for joining us. We\'re excited to help you transform your business with AI-powered solutions.',
          status: 'sent',
          recipients: 1250,
          sent: 1250,
          opened: 987,
          clicked: 234,
          unsubscribed: 12,
          createdAt: '2024-01-10T10:00:00Z',
          template: 'welcome',
          aiOptimized: true
        },
        {
          id: '2',
          name: 'Product Launch - AI Analytics',
          subject: 'Introducing Our New AI Analytics Dashboard',
          content: 'Discover the power of AI-driven insights with our new analytics platform. Get 30% off your first month!',
          status: 'scheduled',
          recipients: 2500,
          sent: 0,
          opened: 0,
          clicked: 0,
          unsubscribed: 0,
          createdAt: '2024-01-15T14:30:00Z',
          scheduledFor: '2024-01-20T09:00:00Z',
          template: 'product-launch',
          aiOptimized: true
        },
        {
          id: '3',
          name: 'Monthly Newsletter',
          subject: 'January 2024 - Industry Insights & Updates',
          content: 'Stay updated with the latest trends in AI and technology. This month we cover 5G solutions and blockchain innovations.',
          status: 'draft',
          recipients: 0,
          sent: 0,
          opened: 0,
          clicked: 0,
          unsubscribed: 0,
          createdAt: '2024-01-18T16:45:00Z',
          template: 'newsletter',
          aiOptimized: false
        }
      ];
      setCampaigns(sampleCampaigns);
    }

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      // Initialize with sample contacts
      const sampleContacts: Contact[] = [
        { id: '1', email: 'john@example.com', name: 'John Smith', tags: ['enterprise', 'ai-interested'], status: 'active', lastActivity: '2024-01-15T10:30:00Z', source: 'website' },
        { id: '2', email: 'sarah@company.com', name: 'Sarah Johnson', tags: ['startup', 'tech'], status: 'active', lastActivity: '2024-01-14T15:20:00Z', source: 'referral' },
        { id: '3', email: 'mike@business.org', name: 'Mike Wilson', tags: ['enterprise', 'analytics'], status: 'active', lastActivity: '2024-01-13T09:15:00Z', source: 'event' },
        { id: '4', email: 'emily@startup.io', name: 'Emily Davis', tags: ['startup', 'ai-interested'], status: 'unsubscribed', lastActivity: '2024-01-10T14:45:00Z', source: 'website' },
        { id: '5', email: 'alex@tech.com', name: 'Alex Brown', tags: ['enterprise', 'blockchain'], status: 'active', lastActivity: '2024-01-16T11:30:00Z', source: 'social' }
      ];
      setContacts(sampleContacts);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('emailCampaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  useEffect(() => {
    localStorage.setItem('emailContacts', JSON.stringify(contacts));
  }, [contacts]);

  const createCampaign = () => {
    if (newCampaign.name.trim() && newCampaign.subject.trim()) {
      const campaign: EmailCampaign = {
        id: Date.now().toString(),
        ...newCampaign,
        status: newCampaign.scheduledFor ? 'scheduled' : 'draft',
        recipients: contacts.filter(c => c.status === 'active').length,
        sent: 0,
        opened: 0,
        clicked: 0,
        unsubscribed: 0,
        createdAt: new Date().toISOString()
      };
      setCampaigns([...campaigns, campaign]);
      setNewCampaign({
        name: '',
        subject: '',
        content: '',
        template: 'basic',
        scheduledFor: '',
        aiOptimized: true
      });
      setShowCreateForm(false);
    }
  };

  const updateCampaignStatus = (id: string, status: EmailCampaign['status']) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === id ? { ...campaign, status } : campaign
    ));
  };

  const deleteCampaign = (id: string) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== id));
  };

  const getStatusColor = (status: EmailCampaign['status']) => {
    switch (status) {
      case 'draft': return 'text-gray-400 bg-gray-900/20 border-gray-500';
      case 'scheduled': return 'text-blue-400 bg-blue-900/20 border-blue-500';
      case 'sending': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
      case 'sent': return 'text-green-400 bg-green-900/20 border-green-500';
      case 'paused': return 'text-orange-400 bg-orange-900/20 border-orange-500';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500';
    }
  };

  const getStatusIcon = (status: EmailCampaign['status']) => {
    switch (status) {
      case 'draft': return <PencilIcon className="w-4 h-4" />;
      case 'scheduled': return <ClockIcon className="w-4 h-4" />;
      case 'sending': return <PlayIcon className="w-4 h-4" />;
      case 'sent': return <CheckCircleIcon className="w-4 h-4" />;
      case 'paused': return <PauseIcon className="w-4 h-4" />;
      default: return <EnvelopeIcon className="w-4 h-4" />;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesFilter = filter === 'all' || campaign.status === filter;
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    totalCampaigns: campaigns.length,
    totalContacts: contacts.filter(c => c.status === 'active').length,
    totalSent: campaigns.reduce((sum, campaign) => sum + campaign.sent, 0),
    avgOpenRate: campaigns.length > 0 ? 
      campaigns.reduce((sum, campaign) => sum + (campaign.opened / Math.max(campaign.sent, 1) * 100), 0) / campaigns.length : 0,
    avgClickRate: campaigns.length > 0 ? 
      campaigns.reduce((sum, campaign) => sum + (campaign.clicked / Math.max(campaign.sent, 1) * 100), 0) / campaigns.length : 0
  };

  return (
    <>
      <SEOHead 
        title="AI Email Marketing Pro - Intelligent Email Campaign Management | Zion Tech Group"
        description="Advanced AI-powered email marketing platform with intelligent content optimization, automated campaigns, and comprehensive analytics. Boost your email marketing ROI."
        keywords="email marketing, AI email, email campaigns, marketing automation, email analytics, AI content optimization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Header */}
        <section className="bg-slate-800/50 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    AI Email Marketing Pro
                  </span>
                </h1>
                <p className="text-gray-300">Intelligent email marketing with AI-powered optimization</p>
              </div>
              <div className="flex items-center gap-4 mt-4 lg:mt-0">
                <button
                  onClick={() => setShowContacts(true)}
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 flex items-center gap-2"
                >
                  <UserGroupIcon className="w-5 h-5" />
                  Contacts
                </button>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  Create Campaign
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Dashboard */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.totalCampaigns}</div>
                <div className="text-gray-300">Total Campaigns</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stats.totalContacts.toLocaleString()}</div>
                <div className="text-gray-300">Active Contacts</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-green-400 mb-2">{stats.totalSent.toLocaleString()}</div>
                <div className="text-gray-300">Emails Sent</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.avgOpenRate.toFixed(1)}%</div>
                <div className="text-gray-300">Avg Open Rate</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stats.avgClickRate.toFixed(1)}%</div>
                <div className="text-gray-300">Avg Click Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaigns List */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Campaigns</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="sending">Sending</option>
                  <option value="sent">Sent</option>
                  <option value="paused">Paused</option>
                </select>
              </div>
            </div>

            {/* Campaigns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{campaign.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{campaign.subject}</p>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(campaign.status)}`}>
                      {getStatusIcon(campaign.status)}
                      <span className="ml-1">{campaign.status}</span>
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Recipients:</span>
                      <span className="text-white">{campaign.recipients.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sent:</span>
                      <span className="text-white">{campaign.sent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Open Rate:</span>
                      <span className="text-white">
                        {campaign.sent > 0 ? ((campaign.opened / campaign.sent) * 100).toFixed(1) : 0}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Click Rate:</span>
                      <span className="text-white">
                        {campaign.sent > 0 ? ((campaign.clicked / campaign.sent) * 100).toFixed(1) : 0}%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {campaign.aiOptimized && (
                        <span className="text-xs bg-purple-900/20 text-purple-400 px-2 py-1 rounded">
                          AI Optimized
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedCampaign(campaign)}
                        className="p-2 text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                        title="View details"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteCampaign(campaign.id)}
                        className="p-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-300"
                        title="Delete campaign"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Create Campaign Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Create New Campaign</h3>
              </div>
              <div className="p-6 space-y-4">
                <input
                  type="text"
                  placeholder="Campaign Name"
                  value={newCampaign.name}
                  onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Email Subject"
                  value={newCampaign.subject}
                  onChange={(e) => setNewCampaign({...newCampaign, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  placeholder="Email Content"
                  value={newCampaign.content}
                  onChange={(e) => setNewCampaign({...newCampaign, content: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={newCampaign.template}
                    onChange={(e) => setNewCampaign({...newCampaign, template: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="basic">Basic Template</option>
                    <option value="welcome">Welcome Template</option>
                    <option value="newsletter">Newsletter Template</option>
                    <option value="product-launch">Product Launch Template</option>
                    <option value="promotional">Promotional Template</option>
                  </select>
                  <input
                    type="datetime-local"
                    value={newCampaign.scheduledFor}
                    onChange={(e) => setNewCampaign({...newCampaign, scheduledFor: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="aiOptimized"
                    checked={newCampaign.aiOptimized}
                    onChange={(e) => setNewCampaign({...newCampaign, aiOptimized: e.target.checked})}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="aiOptimized" className="text-sm text-gray-300">
                    Enable AI optimization for subject and content
                  </label>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={createCampaign}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Create Campaign
                  </button>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contacts Modal */}
        {showContacts && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Email Contacts</h3>
                  <button
                    onClick={() => setShowContacts(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Tags</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {contacts.map((contact) => (
                        <tr key={contact.id} className="hover:bg-slate-700/30 transition-colors">
                          <td className="px-6 py-4 text-sm text-white">{contact.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{contact.email}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              contact.status === 'active' ? 'bg-green-900/20 text-green-400' :
                              contact.status === 'unsubscribed' ? 'bg-red-900/20 text-red-400' :
                              'bg-yellow-900/20 text-yellow-400'
                            }`}>
                              {contact.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {contact.tags.map(tag => (
                              <span key={tag} className="inline-block bg-slate-700 text-xs px-2 py-1 rounded mr-1 mb-1">
                                {tag}
                              </span>
                            ))}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">{contact.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                AI-Powered <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Email Marketing</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <CursorArrowRaysIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Content Optimization</h3>
                <p className="text-gray-300">Automatically optimize subject lines and content for maximum engagement and deliverability.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-gray-300">Comprehensive analytics and insights to track performance and optimize your campaigns.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
                <p className="text-gray-300">AI-powered send time optimization to reach your audience when they're most likely to engage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Email Marketing <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your email marketing needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$99<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5,000 contacts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited campaigns
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI optimization
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
                <div className="text-4xl font-bold text-purple-400 mb-6">$299<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 25,000 contacts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    A/B testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
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
                <div className="text-4xl font-bold text-purple-400 mb-6">$799<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited contacts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Full AI suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
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
              Transform Your Email Marketing with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven email marketing.
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

export default AIEmailMarketingPro;