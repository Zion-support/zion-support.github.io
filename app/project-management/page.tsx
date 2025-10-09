import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const ProjectManagementPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Project Management Tools - Zion Tech Group"
        description="Comprehensive project management solutions to streamline your workflow and improve team productivity."
        keywords="project management, workflow, team productivity, task management, project tracking"
        url="https://ziontechgroup.com/project-management"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Project Management Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive project management solutions to streamline your workflow and improve team productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-4">Task Management</h3>
              <p className="text-gray-300 mb-4">
                Organize and track tasks with advanced project management features.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Progress Tracking</h3>
              <p className="text-gray-300 mb-4">
                Monitor project progress with real-time dashboards and reports.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300 mb-4">
                Enhance team collaboration with shared workspaces and communication tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Project Management Tools
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectManagementPage;
