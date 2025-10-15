import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable and secure cloud infrastructure solutions for modern businesses. AWS, Azure, and Google Cloud expertise." />
        <meta name="keywords" content="cloud infrastructure, AWS, Azure, Google Cloud, cloud migration, cloud management, scalability" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Cloud Infrastructure</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable, secure, and cost-effective cloud solutions that grow with your business
            </p>
          </div>
          
          {/* Services Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly migrate your existing infrastructure to the cloud with minimal downtime and zero data loss.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Assessment and planning</li>
                <li>• Data migration strategies</li>
                <li>• Application modernization</li>
                <li>• Post-migration optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Management</h3>
              <p className="text-gray-600 mb-4">
                Optimize and manage your cloud resources for maximum efficiency, security, and cost savings.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resource optimization</li>
                <li>• Cost monitoring and control</li>
                <li>• Performance tuning</li>
                <li>• 24/7 monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Security</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions to protect your cloud infrastructure and data.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Identity and access management</li>
                <li>• Data encryption</li>
                <li>• Security monitoring</li>
                <li>• Compliance management</li>
              </ul>
            </div>
          </div>

          {/* Cloud Providers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cloud Providers We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg text-center">
                <div className="text-6xl mb-4">🟠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Amazon Web Services</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack AWS solutions including EC2, S3, Lambda, RDS, and more.
                </p>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Key Services:</div>
                  <div>• Compute & Storage</div>
                  <div>• Database Services</div>
                  <div>• AI & Machine Learning</div>
                  <div>• Security & Compliance</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <div className="text-6xl mb-4">🔷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Microsoft Azure</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade Azure solutions for hybrid and multi-cloud environments.
                </p>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Key Services:</div>
                  <div>• Virtual Machines</div>
                  <div>• Azure SQL Database</div>
                  <div>• Azure AI Services</div>
                  <div>• Active Directory</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Cloud Platform</h3>
                <p className="text-gray-600 mb-4">
                  Advanced GCP solutions with focus on data analytics and AI.
                </p>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Key Services:</div>
                  <div>• Compute Engine</div>
                  <div>• BigQuery</div>
                  <div>• AI Platform</div>
                  <div>• Kubernetes Engine</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Cloud Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Scale up or down based on demand with auto-scaling capabilities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                <p className="text-gray-600">Reduce infrastructure costs with pay-as-you-go pricing models</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Enterprise-grade security with encryption and compliance</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">High availability and performance with global infrastructure</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let us help you design and implement the perfect cloud infrastructure for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;