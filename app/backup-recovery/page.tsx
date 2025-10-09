import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const BackupRecoveryPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Backup & Recovery Services - Zion Tech Group"
        description="Comprehensive backup and disaster recovery solutions to protect your critical data and ensure business continuity."
        keywords="backup recovery, disaster recovery, data protection, business continuity, data backup, cloud backup"
        url="https://ziontechgroup.com/backup-recovery"
        type="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Backup & Recovery Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive backup and disaster recovery solutions to protect your critical data and ensure business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Backups</h3>
              <p className="text-gray-300 mb-4">
                Automated backup solutions that protect your data 24/7 with minimal manual intervention.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Incremental backups</li>
                <li>• Full system backups</li>
                <li>• Cloud storage integration</li>
                <li>• Encryption at rest</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Disaster Recovery</h3>
              <p className="text-gray-300 mb-4">
                Complete disaster recovery planning and implementation to minimize downtime.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Recovery time objectives</li>
                <li>• Recovery point objectives</li>
                <li>• Failover procedures</li>
                <li>• Testing & validation</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Backup</h3>
              <p className="text-gray-300 mb-4">
                Secure cloud-based backup solutions with global redundancy and scalability.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Multi-region storage</li>
                <li>• Version control</li>
                <li>• Cross-platform support</li>
                <li>• Cost optimization</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Backup Solutions
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BackupRecoveryPage;
