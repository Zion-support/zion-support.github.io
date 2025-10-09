'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions with 99.9% uptime, automated scaling, and enterprise security. Starting at $199/month." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, cloud hosting, cloud security" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Scalable, secure, and reliable cloud solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with enterprise-grade cloud infrastructure that scales automatically, ensures 99.9% uptime, and reduces costs by up to 50% while improving performance.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Cloud Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">☁️</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Cloud Migration</h3>
                <p className="text-gray-300 text-center">
                  Seamlessly migrate your applications and data to the cloud with zero downtime.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Auto Scaling</h3>
                <p className="text-gray-300 text-center">
                  Automatically scale resources up or down based on demand to optimize costs and performance.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>
                <p className="text-gray-300 text-center">
                  Bank-level security with encryption, access controls, and compliance certifications.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🌍</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Global CDN</h3>
                <p className="text-gray-300 text-center">
                  Worldwide content delivery network for lightning-fast performance across all regions.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Monitoring</h3>
                <p className="text-gray-300 text-center">
                  24/7 monitoring and alerting to ensure optimal performance and uptime.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔄</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Backup & Recovery</h3>
                <p className="text-gray-300 text-center">
                  Automated backups and disaster recovery solutions to protect your data.
                </p>
              </div>
            </div>
          </section>

          {/* Cloud Providers */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Supported Cloud Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <div className="text-6xl mb-6">🟠</div>
                <h3 className="text-2xl font-bold text-white mb-4">Amazon Web Services</h3>
                <p className="text-gray-300 mb-6">Comprehensive AWS solutions with cost optimization and best practices implementation.</p>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• EC2, S3, RDS, Lambda</li>
                  <li>• CloudFormation & Terraform</li>
                  <li>• Cost optimization</li>
                  <li>• Security best practices</li>
                </ul>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <div className="text-6xl mb-6">🔵</div>
                <h3 className="text-2xl font-bold text-white mb-4">Microsoft Azure</h3>
                <p className="text-gray-300 mb-6">Enterprise-grade Azure solutions with hybrid cloud capabilities and enterprise integration.</p>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Virtual Machines & App Service</li>
                  <li>• Azure SQL & Cosmos DB</li>
                  <li>• Active Directory integration</li>
                  <li>• Hybrid cloud solutions</li>
                </ul>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <div className="text-6xl mb-6">🟡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Google Cloud</h3>
                <p className="text-gray-300 mb-6">Advanced GCP solutions with AI/ML integration and data analytics capabilities.</p>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Compute Engine & App Engine</li>
                  <li>• BigQuery & Cloud Storage</li>
                  <li>• AI/ML services</li>
                  <li>• Kubernetes Engine</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 5 servers</li>
                  <li>Basic monitoring</li>
                  <li>Email support</li>
                  <li>Standard backup</li>
                  <li>99.9% uptime SLA</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$599<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 25 servers</li>
                  <li>Advanced monitoring</li>
                  <li>Priority support</li>
                  <li>Automated backup</li>
                  <li>99.95% uptime SLA</li>
                  <li>Auto scaling</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Unlimited servers</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated support</li>
                  <li>Disaster recovery</li>
                  <li>99.99% uptime SLA</li>
                  <li>Custom solutions</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Cloud Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-4">50%</div>
                <h3 className="text-xl font-bold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Average 50% reduction in infrastructure costs</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-4">99.9%</div>
                <h3 className="text-xl font-bold text-white mb-2">Uptime Guarantee</h3>
                <p className="text-gray-300">99.9% uptime SLA with monitoring</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-4">3x</div>
                <h3 className="text-xl font-bold text-white mb-2">Faster Deployment</h3>
                <p className="text-gray-300">3x faster application deployment</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-4">24/7</div>
                <h3 className="text-xl font-bold text-white mb-2">Support</h3>
                <p className="text-gray-300">Round-the-clock expert support</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 1,500+ companies using our cloud infrastructure solutions to scale their business and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Consultation
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}