<<<<<<< HEAD:pages_backup_1757220418/ai-iot-platform.tsx
import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Cpu } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function AIIoTPlatformPage() {
  const service = $2;
  if (!service) return null,

  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/ai-iot-platform" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Cpu />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-violet-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">IoT intelligence</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-violet-400 mt-0.5"><Check /><span>{feat}</span></li>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-violet-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Modernize IoT Ops<ArrowRight /></Link>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-violet-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
              </div>
              <a
                href='/contact'
                className='w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2'
              >
                Modernize IoT Ops
                <ArrowRight />
              </a>
              <div className='mt-6 space-y-3 text-sm text-slate-300'>
                <div className='flex items-center space-x-2 w-4 h-4 text-violet-400'>
                  <Phone />
                  <span>{service.contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-purple-400'>
                  <Mail />
                  <span>{service.contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-green-400 text-xs'>
                  <MapPin />
                  <span>{service.contactInfo.address}</span>
                </div>              </div>
            </div>
          </div>
        </div>
=======
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AIIoTPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI IoT Platform - Zion Tech Group</title>
        <meta name="description" content="AI-powered IoT platform for connected devices and smart systems" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI IoT Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect and manage IoT devices with our AI-powered platform for smart systems and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Device Management</h3>
            <p className="text-gray-600 mb-4">
              Manage and monitor IoT devices with AI-powered analytics and control systems.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Device registration</li>
              <li>• Remote monitoring</li>
              <li>• Firmware updates</li>
              <li>• Health diagnostics</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-600 mb-4">
              Analyze IoT data streams with AI to extract insights and enable smart decisions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Real-time analytics</li>
              <li>• Pattern recognition</li>
              <li>• Anomaly detection</li>
              <li>• Predictive maintenance</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate IoT systems with AI-powered decision making and control logic.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Smart automation</li>
              <li>• Rule-based control</li>
              <li>• Machine learning</li>
              <li>• Adaptive systems</li>
            </ul>
          </div>
        </div>

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75:pages/ai-iot-platform.tsx
        <div className="bg-violet-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect Your World</h2>
          <p className="text-lg text-gray-700 mb-6">
            Build smart, connected systems with our AI-powered IoT platform for seamless device management and automation.
          </p>
          <div className="flex justify-center gap-4">
<<<<<<< HEAD:pages_backup_1757220418/ai-iot-platform.tsx
            <a href="/contact" className="bg-violet-600 text-white px-6 py-3 rounded-lg hover: bg-violet-700">
=======
            <a href="/contact" className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700">
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75:pages/ai-iot-platform.tsx
              Get Started
            </a>
            <a href="/about" className="border border-violet-600 text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
<<<<<<< HEAD:pages_backup_1757220418/ai-iot-platform.tsx
}
=======
}
export default AIIoTPlatform
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75:pages/ai-iot-platform.tsx
