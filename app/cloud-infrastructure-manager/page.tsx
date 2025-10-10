'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Cloud,;
  Settings,;
  CheckCircle,;
  BarChart,;
  Clock,;
  Users,;
  Zap,;
  Phone,;
  Mail,;
  MapPin,;
  ArrowRight,;
  Brain,;
  Globe,;
  Lock,;
  Activity,;
  TrendingUp,;
  Target,;
  Eye,;
  Database,;
  Server,;
  Monitor
  }
} from 'lucide-react';
const CloudInfrastructureManagerPage: React.FC = () => {
    const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Manage and monitor your infrastructure across AWS, Azure, Google Cloud, and other platforms from a single dashboard.'
  },
    {
    icon: Settings,
      title: 'Automated Scaling',
      description: 'Intelligent auto-scaling based on demand to optimize costs and performance automatically.'
  },
    {
    icon: BarChart,
      title: 'Cost Optimization',
      description: 'Advanced analytics and recommendations to reduce cloud costs while maintaining performance.'
  },
    {
    icon: Zap,
      title: 'DevOps Integration',
      description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.'
  }
    }
  ];
const benefits = [
    'Centralized cloud infrastructure management',
    'Automated scaling and optimization',
    'Cost reduction and optimization',
    'Enhanced security and compliance',
    'Real-time monitoring and alerts',
    'Easy deployment and configuration',
    'Multi-cloud support',
    'Expert technical support';
  ];
return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Manager - Zion Tech Group | Cloud Management Platform</title>
        <meta />
        <meta />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>{/* Hero Section */}<//div>
        <section>
          <div>
            <div className="text-center mb-16"></div>
              <h1>Cloud Infrastructure Manager</h1>
              </h1>
              <p>Streamline your cloud operations with our comprehensive infrastructure management platform.</p>
                Monitor, optimize, and scale your cloud resources across multiple providers.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button>
                  <Cloud>Start Free Trial</Cloud>
                </button>
                <button>
                  <Phone>Call (302) 464-0950,</Phone>
                </button>
              </div>
        </section>{/* Features Section */}<//section>
        <section>
          <div>
            <div className="text-center mb-16"></div>
              <h2>Platform Features</h2>
              </h2>
              <p>Our cloud infrastructure manager provides everything you need to optimize your cloud operations.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>{
    features.map((feature, index) => (<//div>
  }<//div>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>))}<//div>
            </div>
        </section>{/* Benefits Section */}<//section>
        <section>
          <div>
            <div className="text-center mb-16"></div>
              <h2>Key Benefits</h2>
              </h2>
              <p>Optimize your cloud infrastructure with our comprehensive management platform.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>{
    benefits.map((benefit, index) => (<//div>
  }<//div>
                <div key={index} className="flex items-start space-x-3"></div>
                  <CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>))}<//div>
            </div>
        </section>{/* CTA Section */}<//section>
        <section>
          <div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
              <h2>Ready to Optimize Your Cloud?</h2>
              </h2>
              <p>Start your free trial today and experience the power of our cloud infrastructure manager.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button>
                  <Phone>Call (302) 464-0950</Phone>
                </button>
                <button>
                  <Mail>Email Us</Mail>
                </button>
              </div>
        </section>
      </div>
    </>),<//>
}<//>
export default CloudInfrastructureManagerPage<//>