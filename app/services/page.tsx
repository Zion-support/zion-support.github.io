import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Services - Comprehensive Technology Solutions | Zion Tech Group',
  description: 'Comprehensive technology services including AI development, micro SaaS solutions, financial technology, healthcare technology, and educational technology. Transform your business with cutting-edge solutions.',
  keywords: 'AI services, micro SaaS, FinTech, HealthTech, EdTech, technology solutions, software development, digital transformation',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology services including AI development, micro SaaS solutions, 
            financial technology, healthcare technology, and educational technology. 
            Transform your business with cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Services</h3>
            <p className="text-gray-300 mb-4">Cutting-edge AI solutions including chatbots, analytics, content generation, and custom AI development.</p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• AI Chatbot Solutions</li>
              <li>• AI Analytics Dashboard</li>
              <li>• AI Content Generation</li>
              <li>• Custom AI Development</li>
            </ul>
            <Link href="/services/ai-services" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-white mb-3">Micro SaaS Development</h3>
            <p className="text-gray-300 mb-4">Build and launch revenue-generating micro SaaS products with our comprehensive development services.</p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• AI-Powered Tools</li>
              <li>• Analytics & BI Tools</li>
              <li>• Productivity Apps</li>
              <li>• Financial Tools</li>
            </ul>
            <Link href="/services/micro-saas" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🖥️</div>
            <h3 className="text-xl font-semibold text-white mb-3">IT Services</h3>
            <p className="text-gray-300 mb-4">Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and managed IT services.</p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• Cloud Migration</li>
              <li>• Cybersecurity</li>
              <li>• DevOps & Automation</li>
              <li>• Managed IT Services</li>
            </ul>
            <Link href="/services/it-services" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-white mb-3">FinTech Solutions</h3>
            <p className="text-gray-300 mb-4">Innovative financial technology solutions including payment processing, blockchain, and financial analytics.</p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• Payment Processing</li>
              <li>• Blockchain Solutions</li>
              <li>• Financial Analytics</li>
              <li>• Digital Banking</li>
            </ul>
            <Link href="/services/blockchain" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold text-white mb-3">HealthTech Solutions</h3>
            <p className="text-gray-300 mb-4">Healthcare technology solutions including telemedicine, health analytics, and patient management systems.</p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• Telemedicine Platforms</li>
              <li>• Health Analytics</li>
              <li>• Patient Management</li>
              <li>• Medical AI</li>
            </ul>
            <Link href="/services/ai-services" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-white mb-3">EdTech Solutions</h3>
            <p className="text-gray-300 mb-4">Educational technology solutions including learning management systems, online courses, and educational analytics.</p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• Learning Management Systems</li>
              <li>• Online Course Platforms</li>
              <li>• Educational Analytics</li>
              <li>• Student Management</li>
            </ul>
            <Link href="/services/ai-services" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you implement the right technology solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Get Started
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