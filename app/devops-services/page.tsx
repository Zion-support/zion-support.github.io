import React from 'react';
import { 
  Server, 
  Clock, 
  Award, 
  Shield, 
  Users, 
  Settings, 
  Cloud, 
  Database,
  BarChart3,
  } from 'lucide-react';

export default function DevOpsServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            DevOps Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate your development lifecycle with our comprehensive DevOps solutions. 
            From CI/CD pipelines to infrastructure automation, we help you deliver faster and more reliably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Server className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipelines</h3>
            <p className="text-gray-300">
              Automated build, test, and deployment pipelines for faster, more reliable releases.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-300">
              Scalable cloud solutions with AWS, Azure, and Google Cloud Platform.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Shield className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
            <p className="text-gray-300">
              Comprehensive security practices and compliance automation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Database className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Database Management</h3>
            <p className="text-gray-300">
              Automated database migrations, backups, and performance optimization.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <BarChart3 className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Analytics</h3>
            <p className="text-gray-300">
              Real-time monitoring, logging, and performance analytics.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Settings className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as Code</h3>
            <p className="text-gray-300">
              Manage infrastructure through code with Terraform and Ansible.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our DevOps Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Faster Deployments</h3>
              <p className="text-gray-300">Reduce deployment time by up to 80%</p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">99.9% Uptime</h3>
              <p className="text-gray-300">Reliable infrastructure with high availability</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified DevOps engineers with years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}