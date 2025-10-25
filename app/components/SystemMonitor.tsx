'use client';
<<<<<<< HEAD
import { { { Footer from 'Footer'
import { Navigation from '/Navigation'
import React from 'react'
import  Helmet  from 'react-helmet-async'
import  Brain  CheckCircle ArrowRight Phone Mail MapPin Zap Shield Brain Globe          } from 'lucide-react'
import { { ArrowRight       } from 'lucide-react'
  
  const benefits="'Increase" efficiency by up to 50'
    'Reduce costs by 30 with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '' }) => {</SystemMonitorProps>
  return (</SystemMonitorProps>
    <>
    
  </>
      <Helmet></Helmet>
        <title>SystemMonitor</title>
        <meta name="description" content="Advanced SystemMonitor solution for modern businesses." /></meta>
        <meta name="keywords" content="AI, artificial intelligence, SystemMonitor, AI solutions, intelligent automation" /></meta>
      </Helmet>
      <Navigation /></Navigation>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">;</div>
            {/* Hero Section */};</div>
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
            <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              SystemMonitor</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced SystemMonitor solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover bg-emerald-400 hovertext-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More</button>
            </div>
          </div>,
        </section>,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            </div>
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (</div>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}</CheckCircle>
                      </li>
                    ))}
                  </ul>
                </div>
              
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            </div>
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-3 gap-8"></div>
            {benefits.map((benefit, index) => (</div>
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
        <div key=index className="flex items-start space-x-4"> </div></div></><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /> </CheckCircle><p className="text-gray-300 text-lg">benefit</p></p>
                </div>
              
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using our AI solutions</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Start Free Trial</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Contact Sales</button>
              </button>
            </div>
=======

import React, { useState, useEffect } from 'react';
import { Cpu, HardDrive, Wifi, Battery } from 'lucide-react';

interface SystemMonitorProps {
  showDetails?: boolean;
  refreshInterval?: number;
  className?: string;
}

interface SystemStats {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  battery?: number;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  refreshInterval = 1000,
  className = '',
}) => {
  const [stats, setStats] = useState<SystemStats>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
  });

  useEffect(() => {
    const updateStats = () => {
      // Simulate system stats (in a real app, you'd get these from an API)
      setStats({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: Math.random() * 100,
        battery: Math.random() * 100,
      });
    };

    updateStats();
    const interval = setInterval(updateStats, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  const _getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-500';
    if (value < 80) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getStatusBgColor = (value: number) => {
    if (value < 50) return 'bg-green-500';
    if (value < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className={`p-4 bg-white rounded-lg shadow-lg ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* CPU */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Cpu className="w-5 h-5 text-blue-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">CPU</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.cpu.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.cpu)}`}
              style={{ width: `${stats.cpu}%` }}
            ></div>
>>>>>>> origin/main
          </div>
        </div>

        {/* Memory */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <HardDrive className="w-5 h-5 text-green-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Memory</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.memory.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.memory)}`}
              style={{ width: `${stats.memory}%` }}
            ></div>
          </div>
        </div>

        {/* Disk */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <HardDrive className="w-5 h-5 text-purple-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Disk</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.disk.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.disk)}`}
              style={{ width: `${stats.disk}%` }}
            ></div>
          </div>
        </div>

        {/* Network */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Wifi className="w-5 h-5 text-orange-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Network</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.network.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.network)}`}
              style={{ width: `${stats.network}%` }}
            ></div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <EnhancedFooter /></Footer>
</>
  )
}
 SystemMonitorPage
=======

      {/* Battery (if available) */}
      {stats.battery !== undefined && (
        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Battery className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Battery</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900 mr-2">
                {stats.battery.toFixed(0)}%
              </span>
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getStatusBgColor(stats.battery)}`}
                  style={{ width: `${stats.battery}%` }}
                ></div>
              </div>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default benefits;
=======
export default SystemMonitor;
>>>>>>> origin/main
