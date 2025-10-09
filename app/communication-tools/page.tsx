import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const CommunicationToolsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Communication Tools - Zion Tech Group"
        description="Advanced communication tools to enhance team collaboration and productivity."
        keywords="communication tools, team collaboration, messaging, video conferencing, productivity"
        url="https://ziontechgroup.com/communication-tools"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Communication Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced communication tools to enhance team collaboration and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-4">Team Messaging</h3>
              <p className="text-gray-300 mb-4">
                Secure team messaging with file sharing and collaboration features.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold text-white mb-4">Video Conferencing</h3>
              <p className="text-gray-300 mb-4">
                High-quality video conferencing with screen sharing and recording.
              </p>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-4">Project Collaboration</h3>
              <p className="text-gray-300 mb-4">
                Tools for project management and team collaboration.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Communication Tools
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CommunicationToolsPage;
