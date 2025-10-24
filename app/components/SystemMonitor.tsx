<<<<<<< HEAD
'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
'use client',
    }
  ]
  const benefits = [
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
const SystemMonitor: React.FC<SystemMonitorProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>SystemMonitor</title>
        <meta name="description" content="Advanced SystemMonitor solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, SystemMonitor, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
            {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
            <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              SystemMonitor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced SystemMonitor solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default SystemMonitorPage
            </div>
        </div>
    </div>
  )
}
export default SystemMonitorPage
=======
<<<<<<< HEAD

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
  _showDetails = true,
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
            </div>
          </div>
        </div>
=======
"use client";
import React from 'react';

const SystemMonitor = () => {
  return (
    <div>
      <h1>SystemMonitor</h1>
      <p>This component is under construction.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
    </div>
  );
};

export default SystemMonitor;
>>>>>>> main
