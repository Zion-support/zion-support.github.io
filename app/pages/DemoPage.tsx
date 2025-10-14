import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PlayIcon, 
  PauseIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our advanced AI chatbot with natural language processing capabilities.',
      icon: CpuChipIcon,
      features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Real-time Responses']
    },
    {
      id: 'cloud-dashboard',
      title: 'Cloud Infrastructure Dashboard',
      description: 'Monitor and manage your cloud resources with our intuitive dashboard.',
      icon: CloudIcon,
      features: ['Real-time Monitoring', 'Resource Management', 'Cost Optimization', 'Security Alerts']
    },
    {
      id: 'security-scan',
      title: 'Cybersecurity Scanner',
      description: 'See how our security tools identify and protect against threats.',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Checking', 'Incident Response']
    }
  ];

  const handleDemoStart = (demoId: string) => {
    setActiveDemo(demoId);
    setIsPlaying(true);
    // Simulate demo loading
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive live demos." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Demos</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand with interactive demos. 
              See how our technologies can transform your business.
            </p>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div key={demo.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mr-4">
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleDemoStart(demo.id)}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    {activeDemo === demo.id && isPlaying ? (
                      <>
                        <PauseIcon className="w-5 h-5 mr-2" />
                        Loading Demo...
                      </>
                    ) : (
                      <>
                        <PlayIcon className="w-5 h-5 mr-2" />
                        Start Demo
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Area */}
        {activeDemo && (
          <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  {demos.find(d => d.id === activeDemo)?.title} - Live Demo
                </h2>
                
                <div className="bg-slate-800 rounded-lg p-8 mb-8 min-h-[400px] flex items-center justify-center">
                  {isPlaying ? (
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
                      <p className="text-gray-300">Loading demo environment...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircleIcon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Demo Ready!</h3>
                      <p className="text-gray-300 mb-6">
                        The demo environment is now loaded. You can interact with the interface below.
                      </p>
                      <div className="bg-slate-700 rounded-lg p-6 mb-6">
                        <p className="text-gray-300 text-sm">
                          This is where the actual interactive demo would be embedded. 
                          In a real implementation, this would contain the actual demo interface.
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveDemo(null)}
                        className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Close Demo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to See More?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                Schedule Personal Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
