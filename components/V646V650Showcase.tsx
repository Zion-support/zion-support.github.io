import React from 'react';
import { Shield, Filter, Eye, Clock, Star } from 'lucide-react';

const V646V650Showcase: React.FC = () => {
  const engines = [
    {
      id: 'v646',
      name: 'Email Attachment Virus Scanner',
      icon: <Shield className="w-12 h-12" />,
      description: 'Scan email attachments for viruses, malware, and suspicious content with real-time threat detection.',
      features: [
        'Multi-layer threat detection',
        'File hash verification',
        'Suspicious extension blocking',
        'Content signature scanning',
        'Automatic quarantine'
      ],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 'v647',
      name: 'Smart Email Filters',
      icon: <Filter className="w-12 h-12" />,
      description: 'Intelligently categorize and prioritize emails using ML-powered filtering and custom rules.',
      features: [
        '6 smart categories',
        'Priority scoring',
        'Custom filter rules',
        'Auto-tagging',
        'Archive recommendations'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'v648',
      name: 'Email Read Receipt Manager',
      icon: <Eye className="w-12 h-12" />,
      description: 'Track email opens, manage read receipts, and get engagement analytics.',
      features: [
        'Read receipt requests',
        'Open tracking',
        'Engagement analytics',
        'Response time metrics',
        'Recipient status'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'v649',
      name: 'Email Follow-up Automation',
      icon: <Clock className="w-12 h-12" />,
      description: 'Automatically schedule and send follow-up emails based on engagement patterns.',
      features: [
        '4 follow-up rules',
        'Smart scheduling',
        'Template system',
        'Analytics dashboard',
        'Cancel capability'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'v650',
      name: 'Email Priority Scoring',
      icon: <Star className="w-12 h-12" />,
      description: 'Calculate intelligent priority scores based on sender, content, and context.',
      features: [
        '4-factor scoring',
        '5 priority levels',
        'Smart notifications',
        'Context analysis',
        'Recommendation engine'
      ],
      gradient: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Email Intelligence Suite V646-V650
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced email management with virus scanning, smart filtering, read receipts, 
            follow-up automation, and intelligent priority scoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {engines.map((engine, index) => (
            <div
              key={engine.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${engine.gradient} flex items-center justify-center text-white mb-6`}>
                {engine.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 mb-6">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Platform Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                450
              </div>
              <div className="text-gray-300">Email Intelligence Engines</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                2,898+
              </div>
              <div className="text-gray-300">Total Services</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-2">
                100%
              </div>
              <div className="text-gray-300">Reply-All Enforcement</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default V646V650Showcase;
