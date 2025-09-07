import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Automation - Streamline Your Development Process | Zion Tech Group',
  description: 'Professional DevOps automation services to streamline your development process, improve deployment efficiency, and enhance team productivity.',
  keywords: 'DevOps automation, CI/CD, deployment automation, infrastructure as code, containerization, cloud deployment',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            DevOps Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional DevOps automation services to streamline your development process, 
            improve deployment efficiency, and enhance team productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipelines</h3>
            <p className="text-gray-300 mb-4">Automated continuous integration and deployment pipelines for faster, more reliable releases.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Automated testing</li>
              <li>• Code quality checks</li>
              <li>• Automated deployments</li>
              <li>• Rollback capabilities</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as Code</h3>
            <p className="text-gray-300 mb-4">Manage and provision infrastructure through code for consistency and scalability.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Terraform configurations</li>
              <li>• CloudFormation templates</li>
              <li>• Ansible playbooks</li>
              <li>• Infrastructure monitoring</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🐳</div>
            <h3 className="text-xl font-semibold text-white mb-3">Containerization</h3>
            <p className="text-gray-300 mb-4">Containerize applications for consistent deployment across environments.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Docker containerization</li>
              <li>• Kubernetes orchestration</li>
              <li>• Container security</li>
              <li>• Microservices architecture</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Logging</h3>
            <p className="text-gray-300 mb-4">Comprehensive monitoring and logging solutions for better observability.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Application monitoring</li>
              <li>• Infrastructure monitoring</li>
              <li>• Log aggregation</li>
              <li>• Alerting systems</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-3">Security Automation</h3>
            <p className="text-gray-300 mb-4">Automated security scanning and compliance checks in your CI/CD pipeline.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Vulnerability scanning</li>
              <li>• Security testing</li>
              <li>• Compliance checks</li>
              <li>• Secret management</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
            <p className="text-gray-300 mb-4">Optimize application performance through automated testing and tuning.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Load testing</li>
              <li>• Performance monitoring</li>
              <li>• Auto-scaling</li>
              <li>• Resource optimization</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$3,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Basic CI/CD setup</li>
                <li>Docker containerization</li>
                <li>Basic monitoring</li>
                <li>Email support</li>
                <li>Up to 3 environments</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$6,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Advanced CI/CD</li>
                <li>Kubernetes orchestration</li>
                <li>Infrastructure as Code</li>
                <li>Priority support</li>
                <li>Up to 10 environments</li>
                <li>Security automation</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$12,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Full DevOps suite</li>
                <li>Custom automation</li>
                <li>Advanced monitoring</li>
                <li>24/7 dedicated support</li>
                <li>Unlimited environments</li>
                <li>White-label solution</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Automate Your DevOps?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our DevOps experts help you streamline your development process and improve team productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}