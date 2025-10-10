import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  Lightbulb, 
  Thermometer, 
  Shield, 
  Camera, 
  Volume2, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Globe, 
  Lock, 
  ArrowRight,
  Play,
  Pause,
  Power,
  Settings,
  Wifi,
  Battery,
  Sun,
  Moon,
  Wind,
  Droplets,
  Eye,
  Mic,
  Smartphone,
  Tablet,
  Monitor,
  Speaker,
  Tv,
  Refrigerator,
  WashingMachine,
  Coffee,
  Fan,
  LockIcon,
  Unlock,
  AlertTriangle,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

const AISmartHomeControllerPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState('living-room');
  const [isConnected, setIsConnected] = useState(true);
  const [energyUsage, setEnergyUsage] = useState(245);

  const rooms = [
    { id: 'living-room', name: 'Living Room', icon: Home, devices: 8 },
    { id: 'bedroom', name: 'Bedroom', icon: Moon, devices: 6 },
    { id: 'kitchen', name: 'Kitchen', icon: Coffee, devices: 5 },
    { id: 'bathroom', name: 'Bathroom', icon: Droplets, devices: 3 },
    { id: 'garage', name: 'Garage', icon: Car, devices: 2 }
  ];

  const devices = [
    { id: 'living-lights', name: 'Living Room Lights', type: 'light', status: 'on', brightness: 80, icon: Lightbulb, room: 'living-room' },
    { id: 'living-tv', name: 'Smart TV', type: 'entertainment', status: 'on', icon: Tv, room: 'living-room' },
    { id: 'living-speaker', name: 'Smart Speaker', type: 'audio', status: 'on', volume: 45, icon: Speaker, room: 'living-room' },
    { id: 'living-camera', name: 'Security Camera', type: 'security', status: 'on', icon: Camera, room: 'living-room' },
    { id: 'living-thermostat', name: 'Thermostat', type: 'climate', status: 'on', temperature: 72, icon: Thermometer, room: 'living-room' },
    { id: 'bedroom-lights', name: 'Bedroom Lights', type: 'light', status: 'off', brightness: 0, icon: Lightbulb, room: 'bedroom' },
    { id: 'bedroom-fan', name: 'Ceiling Fan', type: 'climate', status: 'on', speed: 2, icon: Fan, room: 'bedroom' },
    { id: 'kitchen-fridge', name: 'Smart Refrigerator', type: 'appliance', status: 'on', icon: Refrigerator, room: 'kitchen' },
    { id: 'kitchen-lights', name: 'Kitchen Lights', type: 'light', status: 'on', brightness: 100, icon: Lightbulb, room: 'kitchen' },
    { id: 'garage-door', name: 'Garage Door', type: 'security', status: 'closed', icon: LockIcon, room: 'garage' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns your habits and preferences to optimize your home environment'
    },
    {
      icon: Mic,
      title: 'Voice Control',
      description: 'Control your entire smart home with natural voice commands in multiple languages'
    },
    {
      icon: Eye,
      title: 'Predictive Maintenance',
      description: 'AI monitors device health and predicts maintenance needs before problems occur'
    },
    {
      icon: Zap,
      title: 'Energy Optimization',
      description: 'Automatically optimize energy usage to reduce costs while maintaining comfort'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security monitoring with AI-powered threat detection and alerts'
    },
    {
      icon: Globe,
      title: 'Remote Access',
      description: 'Control and monitor your home from anywhere in the world with secure cloud connectivity'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small apartments and basic smart home needs',
      features: [
        'Up to 20 devices',
        'Basic automation',
        'Voice control',
        'Mobile app',
        'Email support',
        'Basic security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for medium-sized homes with comprehensive automation',
      features: [
        'Up to 100 devices',
        'Advanced automation',
        'AI learning',
        'Predictive maintenance',
        'Energy optimization',
        'Priority support',
        'Advanced security',
        'Custom scenes'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large homes and commercial properties',
      features: [
        'Unlimited devices',
        'Full AI suite',
        'Custom integrations',
        '24/7 monitoring',
        'Dedicated support',
        'API access',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const toggleDevice = (deviceId: string) => {
    // Simulate device toggle
    console.log(`Toggling device: ${deviceId}`);
  };

  const currentRoomDevices = devices.filter(device => device.room === selectedRoom);

  return (
    <>
      <Helmet>
        <title>AI Smart Home Controller Pro - Zion Tech Group</title>
        <meta name="description" content="Intelligent home automation with AI-powered control, voice commands, predictive maintenance, and energy optimization. Control your entire smart home ecosystem." />
        <meta name="keywords" content="smart home, home automation, AI home control, voice control, IoT, smart devices, energy optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-home-controller" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Home className="w-4 h-4 mr-2" />
                Smart Home & IoT
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text">
                AI Smart Home Controller Pro
              </h1>
              
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your home into an intelligent ecosystem. Control every device with AI-powered automation, 
                voice commands, and predictive maintenance for the ultimate smart home experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Control Your Smart Home</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Room Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Select Room
                  </label>
                  <div className="space-y-2">
                    {rooms.map((room) => (
                      <button
                        key={room.id}
                        onClick={() => setSelectedRoom(room.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                          selectedRoom === room.id
                            ? 'bg-green-500/20 border-green-400/50 ring-2 ring-green-400/30'
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center">
                          <room.icon className="w-5 h-5 text-green-400 mr-3" />
                          <span className="text-white font-medium">{room.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{room.devices} devices</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Energy Usage */}
                  <div className="mt-6 p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Energy Usage</span>
                      <span className="text-sm text-green-400">{energyUsage} kWh</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(energyUsage / 500) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Device Control */}
                <div className="lg:col-span-3">
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Devices in {rooms.find(r => r.id === selectedRoom)?.name}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentRoomDevices.map((device) => (
                      <div key={device.id} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <device.icon className="w-6 h-6 text-green-400 mr-3" />
                            <span className="text-white font-medium">{device.name}</span>
                          </div>
                          <button
                            onClick={() => toggleDevice(device.id)}
                            className={`w-12 h-6 rounded-full transition-all duration-300 ${
                              device.status === 'on' || device.status === 'open'
                                ? 'bg-green-500' 
                                : 'bg-gray-600'
                            }`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                              device.status === 'on' || device.status === 'open'
                                ? 'translate-x-6' 
                                : 'translate-x-0.5'
                            }`}></div>
                          </button>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Status</span>
                            <span className={`font-medium ${
                              device.status === 'on' || device.status === 'open' 
                                ? 'text-green-400' 
                                : 'text-gray-400'
                            }`}>
                              {device.status}
                            </span>
                          </div>
                          
                          {device.brightness !== undefined && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Brightness</span>
                              <span className="text-white">{device.brightness}%</span>
                            </div>
                          )}
                          
                          {device.temperature !== undefined && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Temperature</span>
                              <span className="text-white">{device.temperature}°F</span>
                            </div>
                          )}
                          
                          {device.volume !== undefined && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Volume</span>
                              <span className="text-white">{device.volume}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text">
                Intelligent Home Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered smart home controller learns your preferences and automates your home 
                for maximum comfort, security, and energy efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text">
                Smart Home Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your smart home needs. All plans include 
                mobile app access and basic automation features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-green-400/50 ring-2 ring-green-400/30' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-400 to-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-cyan-600 text-white hover:from-green-600 hover:to-cyan-700 transform hover:scale-105'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-12 border border-green-400/20">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Transform Your Home Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of homeowners who have already transformed their living spaces 
                with AI-powered smart home automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-green-400 mr-2" />
                    <span>30-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-green-400 mr-2" />
                    <span>Secure & private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISmartHomeControllerPage;