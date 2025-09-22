import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';

// Make this a client-side component
const ClientPortalContent = dynamic(() => Promise.resolve(ClientPortalMain), {
  ssr: false,
  loading: () => <LoadingSpinner size="xl" text="Loading Client Portal..." />
});

function ClientPortalMain() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projectStats = {
    activeProjects: 12,
    completedProjects: 48,
    totalHours: 2840,
    clientSatisfaction: 98.5
  };

  const recentProjects = [
    {
      id: 1,
      name: "AI-Powered Analytics Platform",
      status: "In Progress",
      progress: 75,
      deadline: "2025-02-15",
      priority: "High"
    },
    {
      id: 2,
      name: "Cloud Infrastructure Migration",
      status: "Completed",
      progress: 100,
      deadline: "2025-01-10",
      priority: "Medium"
    },
    {
      id: 3,
      name: "Cybersecurity Implementation",
      status: "Review",
      progress: 90,
      deadline: "2025-01-20",
      priority: "High"
    },
    {
      id: 4,
      name: "Micro SaaS Development",
      status: "Planning",
      progress: 25,
      deadline: "2025-03-01",
      priority: "Medium"
    }
  ];

  const upcomingMilestones = [
    {
      title: "AI Platform Beta Release",
      date: "2025-02-01",
      type: "milestone"
    },
    {
      title: "Security Audit Review",
      date: "2025-01-25",
      type: "review"
    },
    {
      title: "Cloud Migration Completion",
      date: "2025-02-10",
      type: "completion"
    }
  ];

  const supportTickets = [
    {
      id: "TKT-001",
      subject: "API Integration Issue",
      status: "Open",
      priority: "Medium",
      created: "2025-01-14",
      assigned: "John Smith"
    },
    {
      id: "TKT-002",
      subject: "Performance Optimization Request",
      status: "In Progress",
      priority: "Low",
      created: "2025-01-12",
      assigned: "Sarah Johnson"
    },
    {
      id: "TKT-003",
      subject: "Feature Enhancement",
      status: "Resolved",
      priority: "High",
      created: "2025-01-10",
      assigned: "Mike Chen"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner size="xl" text="Loading Client Portal..." />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Head>
          <title>Client Portal - Zion Tech Group | Project Management & Support</title>
          <meta name="description" content="Access your projects, track progress, manage support tickets, and collaborate with the Zion Tech Group team." />
        </Head>

        <SEO 
          title="Client Portal - Zion Tech Group | Project Management & Support"
          description="Access your projects, track progress, manage support tickets, and collaborate with the Zion Tech Group team."
          keywords="client portal, project management, support tickets, collaboration, Zion Tech Group"
        />

        {/* Navigation */}
        <nav className="bg-black/50 backdrop-blur-lg fixed w-full z-50 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/client-portal" className="text-white font-semibold">Client Portal</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-32">
          {/* Header */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Welcome Back, <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Client</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Manage your projects, track progress, and access support
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                      <div className="text-gray-300">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{projectStats.activeProjects}</div>
                  <div className="text-gray-300">Active Projects</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{projectStats.completedProjects}</div>
                  <div className="text-gray-300">Completed</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{projectStats.totalHours}</div>
                  <div className="text-gray-300">Total Hours</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{projectStats.clientSatisfaction}%</div>
                  <div className="text-gray-300">Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'support', label: 'Support' },
                  { id: 'documents', label: 'Documents' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Tab Content */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Projects */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Projects</h3>
                    <div className="space-y-4">
                      {recentProjects.slice(0, 3).map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                          <div>
                            <div className="font-semibold text-white">{project.name}</div>
                            <div className="text-sm text-gray-400">{project.status}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">{project.progress}%</div>
                            <div className="w-16 h-2 bg-gray-700 rounded-full mt-1">
                              <div 
                                className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-4 text-cyan-400 hover:text-cyan-300 font-semibold">
                      View All Projects →
                    </button>
                  </div>

                  {/* Upcoming Milestones */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">Upcoming Milestones</h3>
                    <div className="space-y-4">
                      {upcomingMilestones.map((milestone, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                          <div>
                            <div className="font-semibold text-white">{milestone.title}</div>
                            <div className="text-sm text-gray-400">{milestone.type}</div>
                          </div>
                          <div className="text-cyan-400 font-semibold">
                            {new Date(milestone.date).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">All Projects</h3>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      New Project
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-gray-300">Project Name</th>
                          <th className="text-left py-3 px-4 text-gray-300">Status</th>
                          <th className="text-left py-3 px-4 text-gray-300">Progress</th>
                          <th className="text-left py-3 px-4 text-gray-300">Deadline</th>
                          <th className="text-left py-3 px-4 text-gray-300">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentProjects.map((project) => (
                          <tr key={project.id} className="border-b border-white/5">
                            <td className="py-3 px-4 text-white font-semibold">{project.name}</td>
                            <td className="py-3 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                                project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                                project.status === 'Review' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                                {project.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="w-20 h-2 bg-gray-700 rounded-full mr-2">
                                  <div 
                                    className="h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-gray-300 text-sm">{project.progress}%</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-300">{new Date(project.deadline).toLocaleDateString()}</td>
                            <td className="py-3 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                project.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                                project.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>
                                {project.priority}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Support Tickets</h3>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      New Ticket
                    </button>
                  </div>
                  <div className="space-y-4">
                    {supportTickets.map((ticket) => (
                      <div key={ticket.id} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-white">{ticket.subject}</div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            ticket.status === 'Open' ? 'bg-red-500/20 text-red-400' :
                            ticket.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {ticket.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div>
                            <span className="mr-4">ID: {ticket.id}</span>
                            <span className="mr-4">Priority: {ticket.priority}</span>
                            <span>Assigned: {ticket.assigned}</span>
                          </div>
                          <div>{new Date(ticket.created).toLocaleDateString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Documents & Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Project Documentation", type: "PDF", size: "2.4 MB" },
                      { name: "API Documentation", type: "HTML", size: "1.8 MB" },
                      { name: "User Guide", type: "PDF", size: "3.2 MB" },
                      { name: "Security Report", type: "PDF", size: "1.5 MB" },
                      { name: "Performance Metrics", type: "Excel", size: "892 KB" },
                      { name: "Deployment Guide", type: "PDF", size: "2.1 MB" }
                    ].map((doc, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">{doc.type}</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white">{doc.name}</div>
                            <div className="text-sm text-gray-400">{doc.size}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default function ClientPortal() {
  return (
    <ErrorBoundary>
      <ClientPortalContent />
    </ErrorBoundary>
  );
}