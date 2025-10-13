import React from 'react';
import { Helmet } from 'react-helmet-async';

const DevOpsServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services including CI/CD, infrastructure automation, and cloud deployment solutions." />
        <meta name="keywords" content="DevOps, CI/CD, infrastructure automation, cloud deployment, containerization, Kubernetes" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              DevOps Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accelerate your development lifecycle with our comprehensive DevOps solutions. 
              From CI/CD pipelines to cloud infrastructure automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">CI/CD Pipelines</h3>
              <p className="text-gray-300 mb-6">
                Automated build, test, and deployment pipelines that ensure code quality and faster releases.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Jenkins, GitLab CI, GitHub Actions</li>
                <li>• Automated testing integration</li>
                <li>• Multi-environment deployments</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Infrastructure as Code</h3>
              <p className="text-gray-300 mb-6">
                Manage and provision infrastructure through code for consistency and scalability.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Terraform, CloudFormation</li>
                <li>• Ansible, Puppet, Chef</li>
                <li>• Version-controlled infrastructure</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Containerization</h3>
              <p className="text-gray-300 mb-6">
                Docker and Kubernetes solutions for scalable, portable application deployment.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Docker containerization</li>
                <li>• Kubernetes orchestration</li>
                <li>• Microservices architecture</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-6">
                Seamless migration to cloud platforms with minimal downtime and maximum efficiency.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• AWS, Azure, GCP migration</li>
                <li>• Lift and shift strategies</li>
                <li>• Cloud-native optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Monitoring & Logging</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive monitoring solutions for application performance and system health.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Prometheus, Grafana</li>
                <li>• ELK Stack (Elasticsearch, Logstash, Kibana)</li>
                <li>• Real-time alerting</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Security & Compliance</h3>
              <p className="text-gray-300 mb-6">
                DevSecOps practices to integrate security throughout the development lifecycle.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Security scanning automation</li>
                <li>• Compliance monitoring</li>
                <li>• Vulnerability management</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your DevOps?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our DevOps experts help you build a robust, scalable, and efficient development pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsServicesPage;
