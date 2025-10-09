'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CloudMigrationPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Cloud Migration Services - Zion Tech Group"
        description="Expert cloud migration services for AWS, Azure, and Google Cloud. Seamless migration with zero downtime. Starting at $2,500/month."
        keywords={['cloud migration', 'AWS migration', 'Azure migration', 'Google Cloud migration', 'cloud consulting', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/cloud-migration"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Cloud Migration Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Seamless Cloud Transformation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Migrate your infrastructure to the cloud with zero downtime. Our expert team ensures 
              a smooth transition to AWS, Azure, or Google Cloud with enhanced security and performance.
            </p>
          </section>

          {/* Cloud Providers */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Supported Cloud Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <div className="text-6xl mb-6">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Amazon Web Services</h3>
                <p className="text-gray-300 mb-6">
                  Complete AWS migration with EC2, S3, RDS, Lambda, and more. Optimized for cost and performance.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• EC2 instance migration</li>
                  <li>• Database migration (RDS)</li>
                  <li>• Storage migration (S3)</li>
                  <li>• Serverless architecture</li>
                  <li>• Security & compliance</li>
                </ul>
              </div>

              <div className="cyber-card p-8 text-center">
                <div className="text-6xl mb-6">🔵</div>
                <h3 className="text-2xl font-bold text-white mb-4">Microsoft Azure</h3>
                <p className="text-gray-300 mb-6">
                  Seamless Azure migration with VMs, SQL Database, Blob Storage, and Azure Functions.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Virtual machine migration</li>
                  <li>• SQL Database migration</li>
                  <li>• Blob storage migration</li>
                  <li>• Azure Active Directory</li>
                  <li>• Hybrid cloud solutions</li>
                </ul>
              </div>

              <div className="cyber-card p-8 text-center">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">Google Cloud Platform</h3>
                <p className="text-gray-300 mb-6">
                  Advanced GCP migration with Compute Engine, Cloud SQL, and BigQuery integration.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Compute Engine migration</li>
                  <li>• Cloud SQL migration</li>
                  <li>• BigQuery data migration</li>
                  <li>• Kubernetes migration</li>
                  <li>• AI/ML integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Migration Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Migration Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive analysis of your current infrastructure, applications, and dependencies.
                </p>
              </div>

              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-white mb-4">Planning</h3>
                <p className="text-gray-300 text-sm">
                  Detailed migration strategy with timeline, resource allocation, and risk mitigation.
                </p>
              </div>

              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-4">Migration</h3>
                <p className="text-gray-300 text-sm">
                  Seamless migration with zero downtime using advanced tools and techniques.
                </p>
              </div>

              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                <p className="text-gray-300 text-sm">
                  Post-migration optimization for performance, cost, and security improvements.
                </p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Migration Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🖥️</div>
                <h3 className="text-xl font-bold text-white mb-4">Server Migration</h3>
                <p className="text-gray-300 mb-4">
                  Migrate physical and virtual servers to cloud platforms with minimal downtime.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Physical to cloud migration</li>
                  <li>• VM to cloud migration</li>
                  <li>• OS compatibility checks</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🗄️</div>
                <h3 className="text-xl font-bold text-white mb-4">Database Migration</h3>
                <p className="text-gray-300 mb-4">
                  Secure database migration with data integrity and zero data loss guarantee.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• SQL Server migration</li>
                  <li>• MySQL/PostgreSQL migration</li>
                  <li>• Oracle database migration</li>
                  <li>• Data validation & testing</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📁</div>
                <h3 className="text-xl font-bold text-white mb-4">Storage Migration</h3>
                <p className="text-gray-300 mb-4">
                  Migrate file systems and storage to cloud storage solutions with enhanced security.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• File server migration</li>
                  <li>• NAS to cloud migration</li>
                  <li>• Backup migration</li>
                  <li>• Access control migration</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-white mb-4">Application Migration</h3>
                <p className="text-gray-300 mb-4">
                  Migrate custom applications and third-party software to cloud environments.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Custom app migration</li>
                  <li>• Third-party software</li>
                  <li>• API integration</li>
                  <li>• Performance tuning</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4">Security Migration</h3>
                <p className="text-gray-300 mb-4">
                  Migrate security policies, user accounts, and access controls to cloud platforms.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Identity migration</li>
                  <li>• Security policy migration</li>
                  <li>• Access control migration</li>
                  <li>• Compliance validation</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Monitoring Setup</h3>
                <p className="text-gray-300 mb-4">
                  Set up comprehensive monitoring and alerting for your cloud infrastructure.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Cloud monitoring setup</li>
                  <li>• Alert configuration</li>
                  <li>• Performance dashboards</li>
                  <li>• Cost monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
                <div className="text-4xl font-bold text-green-400 mb-6">$2,500<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Up to 10 servers</li>
                  <li>• Basic migration</li>
                  <li>• 30-day support</li>
                  <li>• Standard monitoring</li>
                  <li>• Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Quote
                </a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-green-400">
                <div className="text-sm text-green-400 mb-2 font-bold">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-400 mb-6">$5,000<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Up to 50 servers</li>
                  <li>• Advanced migration</li>
                  <li>• 90-day support</li>
                  <li>• Advanced monitoring</li>
                  <li>• Priority support</li>
                  <li>• Custom solutions</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Quote
                </a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Custom</h3>
                <div className="text-4xl font-bold text-green-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Unlimited servers</li>
                  <li>• Custom migration strategy</li>
                  <li>• 6-month support</li>
                  <li>• 24/7 monitoring</li>
                  <li>• Dedicated team</li>
                  <li>• On-premise support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have successfully migrated to the cloud with our expert team. 
              Average cost savings of 40% and 99.9% uptime guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Assessment
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CloudMigrationPage;