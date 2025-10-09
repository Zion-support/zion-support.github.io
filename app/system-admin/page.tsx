import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const SystemAdminPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="System Administration Services - Zion Tech Group"
        description="Professional system administration services including server management, user administration, security monitoring, and infrastructure maintenance."
        keywords="system administration, server management, IT infrastructure, system monitoring, user management, security administration"
        url="https://ziontechgroup.com/system-admin"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              System Administration Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional system administration services to keep your infrastructure running smoothly, securely, and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold text-white mb-4">Server Management</h3>
              <p className="text-gray-300 mb-4">
                Complete server administration including installation, configuration, maintenance, and optimization.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Windows & Linux servers</li>
                <li>• Performance monitoring</li>
                <li>• Security hardening</li>
                <li>• Backup management</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-4">User Administration</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive user account management and access control across all systems.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Active Directory management</li>
                <li>• User provisioning</li>
                <li>• Permission management</li>
                <li>• Group policy administration</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Security Administration</h3>
              <p className="text-gray-300 mb-4">
                Advanced security management and threat monitoring for your entire infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Security policy enforcement</li>
                <li>• Vulnerability management</li>
                <li>• Incident response</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get System Admin Support
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SystemAdminPage;
