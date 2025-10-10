'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    {}
      title: "Voice Control",
      description: "Control your home with natural voice commands using AI",
      icon: Microphone,
      price: "Included"},
    {}
      title: "Predictive Maintenance",
      description: "AI predicts when devices need maintenance or replacement",
      icon: Brain,
      price: "Included"},
    {}
      title: "Energy Optimization",
      description: "Automatically optimize energy usage to reduce costs",
      icon: Zap,
      price: "Included"},
    {}
      title: "Security Integration",
      description: "Comprehensive security monitoring and alerts",
      icon: Shield,
      price: "Included"},
    {}
      title: "Custom Scenes",
      description: "Create and manage custom automation scenes",
      icon: Settings,
      price: "Included"},
    {}
      title: "Mobile App",
      description: "Control your home from anywhere with our mobile app",
      icon: Smartphone,
      price: "Included"}
  ];

  const pricingPlans = [
    {
      name: "Starter"
    {}
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small apartments and single rooms",
      features: [,
        "Up to 10 devices",
        "Basic voice control",
        "Mobile app access",
        "Email support",
        "Basic automation"
      ],
      popular: false,
    },
    {
      name: "Home"
    {}
      name: "Home",
      price: "$79",
      period: "/month",
      description: "Ideal for medium-sized homes and families",
      features: [,
        "Up to 50 devices",
        "Advanced voice control",
        "Predictive maintenance",
        "Energy optimization",
        "Priority support",
        "Custom scenes",
        "Security monitoring"
      ],
      popular: true,
    },
    {
      name: "Mansion"
    {}
      name: "Mansion",
      price: "$199",
      period: "/month",
      description: "For large homes and estates with complex needs",
      features: [,
        "Unlimited devices",
        "Premium voice control",
        "Full predictive maintenance")
        "Advanced energy optimization")
        "24/7 support")
        "Custom integrations")
        "Professional installation")
        "SLA guarantee"
      ])
      popular: false,
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  const adjustBrightness = (deviceId: number, brightness: number) => {,
    setDevices(devices.map(device =>)
      device.id === deviceId;),
  const adjustBrightness = (deviceId: number, brightness: number) => {}
    setDevices(devices.map(device =>)
      device.id === deviceId
        ? { ...device, brightness }
        : device;
    ));
  };

  const adjustTemperature = (deviceId: number, temperature: number) => {,
    setDevices(devices.map(device =>)
      device.id === deviceId;),
  const adjustTemperature = (deviceId: number, temperature: number) => {}
    setDevices(devices.map(device =>)
      device.id === deviceId
        ? { ...device, temperature }
        : device;
    ));
  };

  const activateScene = (sceneId: number) => {,
    setScenes(scenes.map(scene =>)
      scene.id === sceneId;),
  const activateScene = (sceneId: number) => {}
    setScenes(scenes.map(scene =>)
      scene.id === sceneId
        ? { ...scene, active: !scene.active }
        : scene;
    ));
  };

  return(<div className={`min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 ${className}`}>
  return (</div>
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 ${className}`}></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
      <div className="relative py-20 overflow-hidden"></div>
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-green-500/10 border border-green-400/20 rounded-full px-6 py-3 mb-8"></div>
              <Home className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">AI Smart Home Controller Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Intelligent Home Automation;</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" /></div>
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400">Device Types</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-gray-400">Energy Savings</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>,
          </div>,
        </div>,
      </div>,
,
      {/* Smart Home Dashboard */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Dashboard;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Control and monitor all your smart devices from one place;
            </p>
          </div>
,
          <div className="max-w-7xl mx-auto">,</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">,
              {/* Devices Control */}</div>
              <div className="lg: col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">

          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
              {/* Devices Control */}</div>
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Home className="w-8 h-8 text-green-400 mr-3" />
                  Smart Devices;
                </h3>
,
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">,
                  {devices.map((device) => (,</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {devices.map((device) => (}</div>
                    <div key={device.id} className="bg-white/5 rounded-lg p-4 border border-white/10"></div>
                      <div className="flex items-center justify-between mb-3">
</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                  {devices.map((device) => (</div>
                    <div key={device.id} className="bg-white/5 rounded-lg p-4 border border-white/10"></div>
                      <div className="flex items-center justify-between mb-3"></div>
                        <h4 className="text-white font-semibold">{device.name}</h4>
                        <button;
                          onClick={() => toggleDevice(device.id)}
                          className={`w-12 h-6 rounded-full transition-colors ${}
                            device.status === 'on' ? 'bg-green-500' : 'bg-gray-600'}
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full transition-transform ${}
                            device.status === 'on' ? 'translate-x-6' : 'translate-x-0.5'}
                            device.status === 'on' ? 'bg-green-500' : 'bg-gray-600'
                          }`}
                        ></div>
                          <div className={`w-5 h-5 bg-white rounded-full transition-transform ${}
                            device.status === 'on' ? 'translate-x-6' : 'translate-x-0.5'
                          }`} /></div>
                        </button>
                      </div>

                      <p className="text-gray-400 text-sm mb-3">{device.room}</p>

                      {device.type === 'light' && (
                        <div className="space-y-2"></div>
                      {device.type === 'light' && (}
                        <div className="space-y-2"></div>
                          <label className="text-gray-300 text-sm">Brightness: {device.brightness}%</label>
                          <input;
                            type="range"
                            min="0"
                            max="100"
                            value={device.brightness}
                            onChange={(e) => adjustBrightness(device.id, parseInt(e.target.value))}</input></<<<input>className</input></input>="w-full"
                          />
                        </div>
                      )}

                      {device.type === 'thermostat' && (
                        <div className="space-y-2"></div>
                      {device.type === 'thermostat' && (}
                        <div className="space-y-2"></div>
                          <label className="text-gray-300 text-sm">Temperature: {device.temperature}°F</label>
                          <input;
                            type="range"
                            min="60"
                            max="80"
                            value={device.temperature}
                            onChange={(e) => adjustTemperature(device.id, parseInt(e.target.value))}</input></<<<input>className</input></input>="w-full"
                          />
                        </div>
                      )}

                      {device.type === 'speaker' && (
                        <div className="space-y-2"></div>
                      {device.type === 'speaker' && (}
                        <div className="space-y-2"></div>
                          <label className="text-gray-300 text-sm">Volume: {device.volume}%</label>
                          <input;
                            type="range"
                            min="0"
                            max="100"
                            value={device.volume}
                            onChange={(e) => setDevices(devices.map(d =>})
                              d.id === device.id ? { ...d, volume: parseInt(e.target.value) } : d;
                            onChange={(e) => setDevices(devices.map(d =>)}
                              d.id === device.id ? { ...d, volume: parseInt(e.target.value) } : d
                            ))}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenes and Energy */}
              <div className="space-y-8"></div>
                {/* Scenes */}</div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center"></h3>
                    <Settings className="w-6 h-6 text-green-400 mr-2" />
                    Scenes;
                  </h3>
                  <div className="space-y-3">
                    {scenes.map((scene) => (</div>
                      <button;
                    {scenes.map((scene) => (</div>
                    {scenes.map((scene) => (}
                      <button
                        key={scene.id}
                        onClick={() => activateScene(scene.id)}
                        className={`w-full p-3 rounded-lg border transition-all ${
                          scene.active;
                            ? 'border-green-400 bg-green-400/10'}
                            : 'border-white/20 hover:border-green-400/50'}
                        className={`w-full p-3 rounded-lg border transition-all ${}
                          scene.active
                            ? 'border-green-400 bg-green-400/10'
                            : 'border-white/20 hover:border-green-400/50'
                        }`}
                      >
                        <div className="flex items-center"></div>
                          <scene.icon className="w-5 h-5 text-green-400 mr-3" />
                          <span className="text-white font-medium">{scene.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Energy Usage */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center"></h3>
                    <Zap className="w-6 h-6 text-green-400 mr-2" />
                    Energy Usage;
                  </h3>
                  <div className="space-y-4"></div>
                    <div className="flex justify-between"></div>
                      <span className="text-gray-300">Today</span>
                      <span className="text-white font-semibold">{energyUsage.today} kWh</span>
                    </div>
                    <div className="flex justify-between"></div>
                      <span className="text-gray-300">This Week</span>
                      <span className="text-white font-semibold">{energyUsage.thisWeek} kWh</span>
                    </div>
                    <div className="flex justify-between"></div>
                      <span className="text-gray-300">This Month</span>
                      <span className="text-white font-semibold">{energyUsage.thisMonth} kWh</span>
                    </div>
                    <div className="flex justify-between"></div>
                      <span className="text-green-400">Savings</span>
                      <span className="text-green-400 font-semibold">{energyUsage.savings}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Features;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between"></div>
                  <span className="text-green-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Plans;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingPlans.map((plan, index) => (</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-green-400/50 ring-2 ring-green-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-green-400/50 ring-2 ring-green-400/30' : 'border-white/10'}`}>
                {plan.popular && (}</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-green-400 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover: from-green-600 hover:to-blue-700 transform hover:scale-105'}
                    : 'bg-white/10 text-white hover:bg-white/20'}
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Transform Your Home Today;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Transform Your Home Today
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-green-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-green-400 transition-colors">
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-green-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1" />,
                    <div className="text-gray-300">,</div>
                      <div>364 E Main St STE 1008</div>,
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1" />
                    <div className="text-gray-300"></div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free consultation</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Professional installation</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">30-day money back guarantee</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
