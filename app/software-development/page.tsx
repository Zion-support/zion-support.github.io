import React from 'react';
import { 
  Code, 
  Clock, 
  Award, 
  Users, 
  Settings, 
  Cloud, 
  Database,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Software Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your ideas into powerful software solutions. Our expert development team 
            delivers custom applications that drive business growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Custom Web Applications</h3>
            <p className="text-gray-300">
              Modern, responsive web applications built with the latest technologies.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Smartphone className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Mobile Applications</h3>
            <p className="text-gray-300">
              Native and cross-platform mobile apps for iOS and Android.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Monitor className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Desktop Applications</h3>
            <p className="text-gray-300">
              Cross-platform desktop applications for Windows, macOS, and Linux.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Database className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Backend Development</h3>
            <p className="text-gray-300">
              Scalable APIs, microservices, and database design and optimization.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
            <p className="text-gray-300">
              Cloud-native applications with auto-scaling and high availability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Settings className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">System Integration</h3>
            <p className="text-gray-300">
              Seamless integration with existing systems and third-party services.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300">Requirements analysis and project planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300">UI/UX design and system architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300">Agile development with regular updates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>
              <p className="text-gray-300">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Development Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Agile methodology for faster time-to-market</p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-300">Rigorous testing and quality control processes</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Experienced developers with diverse skill sets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}