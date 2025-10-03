import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  FileText,
  Image,
  Video,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const metadata = {
  title: 'Press Room - Zion Tech Group | Media Resources & Press Kit',
  description: 'Access press releases, media resources, company information, and press kit materials for Zion Tech Group.',
  keywords: 'press room, media resources, press kit, Zion Tech Group press, company information',
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Press Room
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Media resources, press releases, and company information for journalists and media professionals covering AI and technology.
          </p>
        </div>
      </section>

      {/* Press Kit Downloads */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Press Kit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive press kit with logos, company information, and media resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Image className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Company Logos</h3>
              <p className="text-gray-600 mb-4">
                High-resolution logos and brand assets in various formats for print and digital use.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  PNG, SVG, EPS formats
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Multiple color variants
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Brand guidelines included
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download Logos
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Company Fact Sheet</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive company overview, key statistics, and executive biographies.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Company overview
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Key statistics
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Executive bios
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download Fact Sheet
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Product Videos</h3>
              <p className="text-gray-600 mb-4">
                High-quality product demonstration videos and company overview content.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Product demos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Company overview
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Executive interviews
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download Videos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press Releases */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Press Releases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest company announcements and major milestone achievements
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    January 15, 2026
                  </div>
                  <div className="flex items-center text-sm text-blue-600 mb-3">
                    <Tag className="w-4 h-4 mr-2" />
                    Major Milestone
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Zion Tech Group Achieves $500B ROI Breakthrough with Fortune 500 Client</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary quantum AI system delivers unprecedented 1000x performance gains, marking the largest AI transformation success in enterprise history. The breakthrough demonstrates the transformative power of quantum-enhanced AI in solving complex business challenges.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  15.2k views
                </div>
                <div className="flex space-x-3">
                  <Link to="/press/zion-tech-500b-roi-breakthrough" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read Full Release →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    January 10, 2026
                  </div>
                  <div className="flex items-center text-sm text-green-600 mb-3">
                    <Tag className="w-4 h-4 mr-2" />
                    Product Launch
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Zion Tech Group Launches Autonomous Enterprise Platform 2.0</h3>
              <p className="text-gray-600 mb-4">
                Next-generation platform achieves 95% automation across all business processes, setting new industry standards for AI-powered business operations. The platform includes advanced quantum computing capabilities and autonomous decision-making systems.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  8.7k views
                </div>
                <div className="flex space-x-3">
                  <Link to="/press/autonomous-enterprise-platform-2-0" className="text-green-600 font-semibold hover:text-green-700">
                    Read Full Release →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    January 5, 2026
                  </div>
                  <div className="flex items-center text-sm text-purple-600 mb-3">
                    <Tag className="w-4 h-4 mr-2" />
                    Partnership
                  </div>
                </div>
                <button className="text-purple-600 hover:text-purple-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Zion Tech Group Announces Strategic Partnership with Microsoft</h3>
              <p className="text-gray-600 mb-4">
                Strategic partnership will accelerate enterprise AI adoption across Fortune 500 companies, combining Zion Tech Group's quantum AI expertise with Microsoft's cloud infrastructure and enterprise reach.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  12.1k views
                </div>
                <div className="flex space-x-3">
                  <Link to="/press/microsoft-strategic-partnership" className="text-purple-600 font-semibold hover:text-purple-700">
                    Read Full Release →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    January 3, 2026
                  </div>
                  <div className="flex items-center text-sm text-orange-600 mb-3">
                    <Tag className="w-4 h-4 mr-2" />
                    Award
                  </div>
                </div>
                <button className="text-orange-600 hover:text-orange-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Zion Tech Group Recognized as "AI Innovation Leader of the Year"</h3>
              <p className="text-gray-600 mb-4">
                Global AI Summit honors Zion Tech Group for breakthrough enterprise solutions and pioneering work in quantum AI computing. The award recognizes the company's contribution to advancing AI technology and its practical applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  6.8k views
                </div>
                <div className="flex space-x-3">
                  <Link to="/press/ai-innovation-leader-award" className="text-orange-600 font-semibold hover:text-orange-700">
                    Read Full Release →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key facts and information about Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Company Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Founded:</span>
                  <span className="font-semibold">2020</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Headquarters:</span>
                  <span className="font-semibold">Middletown, DE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employees:</span>
                  <span className="font-semibold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Clients:</span>
                  <span className="font-semibold">Fortune 500</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Achieved:</span>
                  <span className="font-semibold">$500B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Performance Gains:</span>
                  <span className="font-semibold">1000x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Automation Rate:</span>
                  <span className="font-semibold">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-semibold">100%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Quantum AI Computing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Autonomous Enterprise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>AI Business Intelligence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>AI Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Media Contact
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            For media inquiries, interviews, and press requests, please contact our press team
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:press@ziontechgroup.com" className="text-blue-100 hover:text-white">
                press@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-100 hover:text-white">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-blue-100">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
            <p className="text-blue-100">
              We typically respond to media inquiries within 24 hours during business days. 
              For urgent requests, please call our media hotline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}