import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AdvancedITInfrastructureServices: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Advanced IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure solutions for modern enterprises" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Advanced IT Infrastructure Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build, manage, and optimize your IT infrastructure with our comprehensive solutions designed for scalability and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
            <p className="text-gray-600 mb-4">
              Design and implement scalable cloud solutions that grow with your business needs.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• AWS, Azure, GCP expertise</li>
              <li>• Multi-cloud strategies</li>
              <li>• Cost optimization</li>
              <li>• Disaster recovery planning</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Network Security</h3>
            <p className="text-gray-600 mb-4">
              Protect your infrastructure with advanced security measures and monitoring systems.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Firewall configuration</li>
              <li>• Intrusion detection</li>
              <li>• VPN setup</li>
              <li>• Security audits</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Database Management</h3>
            <p className="text-gray-600 mb-4">
              Optimize database performance and ensure data integrity with expert management.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Performance tuning</li>
              <li>• Backup strategies</li>
              <li>• Data migration</li>
              <li>• High availability setup</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">DevOps & CI/CD</h3>
            <p className="text-gray-600 mb-4">
              Streamline development workflows with automated deployment and monitoring.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Pipeline automation</li>
              <li>• Container orchestration</li>
              <li>• Infrastructure as Code</li>
              <li>• Monitoring & alerting</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Server Management</h3>
            <p className="text-gray-600 mb-4">
              Maintain and optimize server infrastructure for maximum uptime and performance.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Server provisioning</li>
              <li>• Performance monitoring</li>
              <li>• Patch management</li>
              <li>• Load balancing</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Backup & Recovery</h3>
            <p className="text-gray-600 mb-4">
              Ensure business continuity with comprehensive backup and disaster recovery solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Automated backups</li>
              <li>• Disaster recovery planning</li>
              <li>• Data replication</li>
              <li>• Recovery testing</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Infrastructure That Scales</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our infrastructure solutions are designed to grow with your business, ensuring reliability and performance at every stage.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Consultation
            </a>
            <a href="/about" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              View Case Studies
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AdvancedITInfrastructureServices