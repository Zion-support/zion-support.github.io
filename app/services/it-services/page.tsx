export const metadata = {
  title: 'Comprehensive IT Services | Zion Tech Group',
  description: 'Full-stack IT services including cloud migration, cybersecurity, DevOps, system administration, and 24/7 support. Trusted by 500+ businesses.',
  keywords: 'it-services, cloud-migration, cybersecurity, devops, system-administration, managed-services, it-support'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            End-to-end IT solutions that keep your business running smoothly and securely. 
            From cloud migration to cybersecurity, we provide the expertise and support you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free IT Assessment
            </a>
          </div>
        </div>
        
        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration & Management</h3>
            <p className="text-gray-300 mb-6">Seamless migration to AWS, Azure, or GCP with ongoing optimization and management.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• AWS/Azure/GCP migration</li>
              <li>• Cloud cost optimization</li>
              <li>• Multi-cloud strategies</li>
              <li>• Disaster recovery planning</li>
              <li>• Cloud security implementation</li>
            </ul>
            <div className="mt-6 text-blue-400 font-semibold">Starting at $2,500/month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Solutions</h3>
            <p className="text-gray-300 mb-6">Comprehensive security services to protect your business from evolving threats.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Security assessments & audits</li>
              <li>• Penetration testing</li>
              <li>• Compliance management (SOC2, HIPAA)</li>
              <li>• Incident response planning</li>
              <li>• Security awareness training</li>
            </ul>
            <div className="mt-6 text-blue-400 font-semibold">Starting at $1,800/month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">DevOps & Automation</h3>
            <p className="text-gray-300 mb-6">Streamline development and deployment with modern DevOps practices and automation.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• CI/CD pipeline setup</li>
              <li>• Infrastructure as Code</li>
              <li>• Container orchestration</li>
              <li>• Monitoring & alerting</li>
              <li>• Performance optimization</li>
            </ul>
            <div className="mt-6 text-blue-400 font-semibold">Starting at $3,200/month</div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Additional IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold text-white mb-3">System Administration</h3>
              <p className="text-gray-300 text-sm mb-4">24/7 monitoring and management of your IT infrastructure</p>
              <div className="text-blue-400 font-semibold">$1,200/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Network Management</h3>
              <p className="text-gray-300 text-sm mb-4">Design, implement, and maintain secure network infrastructure</p>
              <div className="text-blue-400 font-semibold">$1,500/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">💾</div>
              <h3 className="text-xl font-bold text-white mb-3">Data Backup & Recovery</h3>
              <p className="text-gray-300 text-sm mb-4">Automated backup solutions and disaster recovery planning</p>
              <div className="text-blue-400 font-semibold">$800/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-3">Help Desk Support</h3>
              <p className="text-gray-300 text-sm mb-4">24/7 technical support for your team and end users</p>
              <div className="text-blue-400 font-semibold">$2,000/month</div>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Managed IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$3,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• 24/7 system monitoring</li>
                <li>• Basic security management</li>
                <li>• Email support (8am-6pm EST)</li>
                <li>• Monthly security updates</li>
                <li>• Basic backup & recovery</li>
                <li>• Up to 25 users</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Essential IT Package"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-400">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$7,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Everything in Essential</li>
                <li>• Advanced security monitoring</li>
                <li>• Priority phone support</li>
                <li>• Weekly security reports</li>
                <li>• Cloud migration assistance</li>
                <li>• Up to 100 users</li>
                <li>• Monthly strategy calls</li>
                <li>• Disaster recovery planning</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Professional IT Package"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300"> pricing</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Everything in Professional</li>
                <li>• Dedicated account manager</li>
                <li>• 24/7 phone support</li>
                <li>• Custom security solutions</li>
                <li>• On-site support available</li>
                <li>• Unlimited users</li>
                <li>• SLA guarantees</li>
                <li>• Custom integrations</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise IT Package"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Businesses served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a free IT assessment and discover how we can improve your technology operations, 
            reduce costs, and enhance security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}
