<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, CheckCircle, ArrowRight, Globe, BarChart3, Settings, Clock, Award, Star, Activity, Lock } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Code } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Activity } from 'lucide-react';
import { Cloud } from 'lucide-react';

const CloudInfrastructure = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with zero downtime and minimal risk",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Zero-downtime migration", "Data integrity assurance", "Cost optimization", "Security compliance"],
      price: "From $2,999/month"
    },
    {
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning and management using modern IaC tools and best practices",
      icon: <Settings className="w-8 h-8" />,
      features: ["Terraform automation", "Version control", "Environment consistency", "Disaster recovery"],
      price: "From $1,999/month"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure from threats and vulnerabilities",
      icon: <Shield className="w-8 h-8" />,
      features: ["Identity management", "Network security", "Data encryption", "Compliance monitoring"],
      price: "From $1,499/month"
    },
    {
      title: "Auto Scaling",
      description: "Dynamic resource scaling based on demand to optimize costs and ensure optimal performance",
      icon: <Activity className="w-8 h-8" />,
      features: ["Automatic scaling", "Cost optimization", "Performance monitoring", "Load balancing"],
      price: "From $999/month"
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

=======

  return (
    <div></div><Helmet></Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions with 99.9% uptime, automated scaling, and enterprise security. Starting at $199/month." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, cloud hosting, cloud security" />
        <link rel="canonical" href="https: //ziontechgroup.com/cloud-infrastructure" />
      </Helmet>,
,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">,
        <Navigation />,
        <main className="container mx-auto px-4 py-16 pt-24">,
          {/* Hero Section */}
          <section className="text-center mb-16"></section>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text cyber-text"></h1>
              Cloud Infrastructure;
            </h1>,
            <p className="text-xl text-cyan-400 mb-8 font-medium">,
              Scalable, secure, and reliable cloud solutions;
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8"></p>
              Transform your business with enterprise-grade cloud infrastructure that scales automatically, ensures 99.9% uptime, and reduces costs by up to 50% while improving performance.
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">Cloud Infrastructure</h1><p className="text-xl text-cyan-400 mb-8 font-medium">Scalable, secure, and reliable cloud solutions</p><p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform your business with enterprise-grade cloud infrastructure that scales automatically, ensures 99.9% uptime, and reduces costs by up to 50% while improving performance.</p>
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Cloud Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></section>
              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">☁️</div><h3 className="text-xl font-bold text-white mb-4 text-center">Cloud Migration</h3><p className="text-gray-300 text-center">Seamlessly migrate your applications and data to the cloud with zero downtime.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">⚡</div><h3 className="text-xl font-bold text-white mb-4 text-center">Auto Scaling</h3><p className="text-gray-300 text-center">Automatically scale resources up or down based on demand to optimize costs and performance.</p>
                </p>
              </div>
,
              <div className="cyber-card p-6 energy-pulse">,
                <div className="text-4xl mb-4 text-center">🔒</div>,
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>,
                <p className="text-gray-300 text-center">,
                  Bank-level security with encryption, access controls, and compliance certifications.
              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🔒</div><h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3><p className="text-gray-300 text-center">Bank-level security with encryption, access controls, and compliance certifications.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🌍</div><h3 className="text-xl font-bold text-white mb-4 text-center">Global CDN</h3><p className="text-gray-300 text-center">Worldwide content delivery network for lightning-fast performance across all regions.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">📊</div><h3 className="text-xl font-bold text-white mb-4 text-center">Monitoring</h3><p className="text-gray-300 text-center">24/7 monitoring and alerting to ensure optimal performance and uptime.</p>
                </p>
              </div>

              <div className="cyber-card p-6 energy-pulse"></div>
                <div className="text-4xl mb-4 text-center">🔄</div><h3 className="text-xl font-bold text-white mb-4 text-center">Backup & Recovery</h3><p className="text-gray-300 text-center">Automated backups and disaster recovery solutions to protect your data.</p>
                </p>
              </div>
            </div>
          </section>

          {/* Cloud Providers */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Supported Cloud Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></section>
              <div className="cyber-card p-8 text-center"></div>
                <div className="text-6xl mb-6">🟠</div><h3 className="text-2xl font-bold text-white mb-4">Amazon Web Services</h3><p className="text-gray-300 mb-6">Comprehensive AWS solutions with cost optimization and best practices implementation.</p>
                <ul className="text-gray-300 space-y-2 text-left"></ul>
                  <li>• EC2, S3, RDS, Lambda<li>• CloudFormation & Terraform</li>
                  <li>• Cost optimization<li>• Security best practices</li>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8"></div>
              <div className="cyber-card p-8 text-center">,
                <div className="text-6xl mb-6">🟠</div>,
                <h3 className="text-2xl font-bold text-white mb-4">Amazon Web Services</h3>,
                <p className="text-gray-300 mb-6">Comprehensive AWS solutions with cost optimization and best practices implementation.</p>,
                <ul className="text-gray-300 space-y-2 text-left">,
                  <li>• EC2, S3, RDS, Lambda</li>
                  <li>• CloudFormation & Terraform</li>
                  <li>• Cost optimization</li>
                  <li>• Security best practices</li>
                </ul>
              </div>

              <div className="cyber-card p-8 text-center"></div>
                <div className="text-6xl mb-6">🔵</div><h3 className="text-2xl font-bold text-white mb-4">Microsoft Azure</h3><p className="text-gray-300 mb-6">Enterprise-grade Azure solutions with hybrid cloud capabilities and enterprise integration.</p>
                <ul className="text-gray-300 space-y-2 text-left"></ul>
                  <li>• Virtual Machines & App Service<li>• Azure SQL & Cosmos DB</li>
                  <li>• Active Directory integration<li>• Hybrid cloud solutions</li>
                </ul>
              </div>

              <div className="cyber-card p-8 text-center"></div>
                <div className="text-6xl mb-6">🟡</div><h3 className="text-2xl font-bold text-white mb-4">Google Cloud</h3><p className="text-gray-300 mb-6">Advanced GCP solutions with AI/ML integration and data analytics capabilities.</p>
                <ul className="text-gray-300 space-y-2 text-left"></ul>
                  <li>• Compute Engine & App Engine<li>• BigQuery & Cloud Storage</li>
                  <li>• AI/ML services<li>• Kubernetes Engine</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></section>
              <div className="cyber-card p-8 text-center"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199</div><span className="text-lg">/month</span>
                <ul className="text-gray-300 space-y-3 mb-8"></ul>
                  <li>Up to 5 servers<li>Basic monitoring</li>
                  <li>Email support<li>Standard backup<li>99.9% uptime SLA<a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-cyan-400"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$599</div><span className="text-lg">/month</span>
                <ul className="text-gray-300 space-y-3 mb-8"></ul>
                  <li>Up to 25 servers<li>Advanced monitoring</li>
                  <li>Priority support<li>Automated backup</li>
                  <li>99.95% uptime SLA<li>Auto scaling<a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3><div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8"></ul>
                  <li>Unlimited servers</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated support</li>
                  <li>Disaster recovery</li>
                  <li>99.99% uptime SLA</li>
                  <li>Custom solutions</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>,
              </div>,
            </div>,
          </section>,
,
          {/* Benefits Section */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Cloud Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></section>
              <div className="cyber-card p-6 text-center"></div>
                <div className="text-4xl font-bold text-cyan-400 mb-4">50%</div><h3 className="text-xl font-bold text-white mb-2">Cost Reduction</h3><p className="text-gray-300">Average 50% reduction in infrastructure costs</p>
              </div>

              <div className="cyber-card p-6 text-center"></div>
                <div className="text-4xl font-bold text-green-400 mb-4">99.9%</div><h3 className="text-xl font-bold text-white mb-2">Uptime Guarantee</h3><p className="text-gray-300">99.9% uptime SLA with monitoring</p>
              </div>

              <div className="cyber-card p-6 text-center"></div>
                <div className="text-4xl font-bold text-pink-400 mb-4">3x</div><h3 className="text-xl font-bold text-white mb-2">Faster Deployment</h3><p className="text-gray-300">3x faster application deployment</p>
              </div>

              <div className="cyber-card p-6 text-center"></div>
                <div className="text-4xl font-bold text-yellow-400 mb-4">24/7</div><h3 className="text-xl font-bold text-white mb-2">Support</h3><p className="text-gray-300">Round-the-clock expert support</p>
              </div>
            </div>
          </section>

                <div className="text-4xl font-bold text-yellow-400 mb-4">24/7</div>
                <h3 className="text-xl font-bold text-white mb-2">Support</h3>
                <p className="text-gray-300">Round-the-clock expert support</p>
              </div>)
            </div>)
          </section>)
),
          {/* CTA Section */}
          <section className="text-center"></section>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2><p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Join 1,500+ companies using our cloud infrastructure solutions to scale their business and reduce costs.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a href="tel:+13024640950" className="cyber-button">📞 Call: (302) 464-0950<a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">Get Free Consultation</a>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="tel:+13024640950" className="cyber-button"></a>
                📞 Call: (302) 464-0950;
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"></a>
                Get Free Consultation;
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>,
    </div>,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
      icon: Shield,
      title: 'Secure Cloud Infrastructure',
      description: 'Enterprise-grade cloud infrastructure with advanced security and compliance',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast cloud services with optimized performance and scalability',
    },
    {
      icon: Brain,
      title: 'AI-Powered Management',
      description: 'Intelligent cloud management powered by advanced AI technology',
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide cloud infrastructure deployment and support',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    }
  ];

  const stats = [
    {
      number: "99.99%",
      label: "Uptime Guarantee",
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      number: "40%",
      label: "Cost Reduction",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      number: "0",
      label: "Security Incidents",
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      number: "<1s",
      label: "Response Time",
      icon: <Activity className="w-6 h-6 text-purple-400" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our cloud infrastructure. We achieved 40% cost savings while improving performance.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Their cloud migration expertise saved us months of work. Zero downtime and seamless transition.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of IT, InnovateLab",
      content: "The security implementation was flawless. We now have enterprise-grade protection at a fraction of the cost.",
      avatar: "ER"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses starting their cloud journey",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Standard support",
        "Cloud migration assistance",
        "Security baseline",
        "Monthly reporting"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses with complex infrastructure needs",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Priority support",
        "Full cloud migration",
        "Advanced security",
        "Weekly reporting",
        "Auto-scaling setup",
        "Disaster recovery"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Comprehensive solution for large organizations with mission-critical infrastructure",
      features: [
        "Unlimited servers",
        "Real-time monitoring",
        "24/7 dedicated support",
        "Custom migration strategy",
        "Enterprise security",
        "Daily reporting",
        "Custom auto-scaling",
        "Multi-region setup",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];
import React from 'react';
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArrowRight, Activity, BarChart3, CheckCircle } from 'lucide-react';

<<<<<<< HEAD
export default function CloudInfrastructurePage() {

  const stats = [
    { label: "Uptime", value: "99.9%", icon: <Activity className="w-6 h-6" /> },
    { label: "Cost Savings", value: "40%", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Performance", value: "3x Faster", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const capabilities = [
    "Multi-cloud deployment and management",
    "Automated scaling and load balancing",
    "High availability and disaster recovery",
    "Security and compliance monitoring"
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "CTO", 
      company: "TechCorp", 
      content: "Zion's cloud infrastructure transformed our business operations." 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services for businesses" />
      </Helmet>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional cloud infrastructure services coming soon.
          </p>
=======
export default function CloudinfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Infrastructure</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud infrastructure services coming soon.</p>
          
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
          <Link
<<<<<<< HEAD
            to="/contact"
<<<<<<< HEAD
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
=======
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Settings, Users, Clock, Star, TrendingUp } from 'lucide-react'

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your existing infrastructure to the cloud with minimal downtime.',
      benefits: ['Zero-downtime migration', 'Data integrity assurance', 'Cost optimization', 'Performance monitoring']
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server management and monitoring for optimal performance.',
      benefits: ['24/7 monitoring', 'Automated scaling', 'Security updates', 'Performance optimization']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable and secure database solutions for your applications.',
      benefits: ['High availability', 'Automated backups', 'Performance tuning', 'Security hardening']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions for your cloud infrastructure.',
      benefits: ['Security audits', 'Compliance monitoring', 'Access controls', 'Incident response']
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes with modern DevOps practices.',
      benefits: ['Automated deployments', 'Version control', 'Testing automation', 'Rollback capabilities']
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Content delivery network for fast and reliable content distribution worldwide.',
      benefits: ['Global edge locations', 'Fast content delivery', 'DDoS protection', 'Traffic optimization']
    }
  ]

  const benefits = [
<<<<<<< HEAD
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  const stats = [
    { label: 'Infrastructure Deployed', value: '500+', icon: Server },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Cost Savings', value: '40%', icon: TrendingUp }
  ]
=======
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

  return (
    <>
<<<<<<< HEAD
      <Helmet>
<<<<<<< HEAD
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Scalable and secure cloud infrastructure solutions. Migration, management, and optimization services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, server management, database solutions, DevOps, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build, manage, and scale your cloud infrastructure with our comprehensive solutions. 
              From migration to optimization, we've got you covered.
=======
      <Helmet></Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions to support your business growth and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Scalable cloud infrastructure solutions to support your business growth and digital transformation.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Cloud Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide end-to-end cloud infrastructure solutions designed to meet your 
                specific business requirements and scale with your growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose Our Cloud Solutions?
                </h2>
                <p className="text-gray-300 mb-8">
                  Our experienced team combines deep cloud expertise with business acumen 
                  to deliver infrastructure solutions that drive real results.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Assessment</h4>
                      <p className="text-gray-300 text-sm">Analyze your current infrastructure and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Design</h4>
                      <p className="text-gray-300 text-sm">Create a tailored cloud architecture for your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
                      <p className="text-gray-300 text-sm">Deploy and configure your cloud infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Optimization</h4>
                      <p className="text-gray-300 text-sm">Monitor, optimize, and scale your infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build a scalable, secure, and cost-effective 
              cloud infrastructure that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default CloudInfrastructurePage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions for modern businesses." />
        <meta name="keywords" content="cloud infrastructure, AWS, Azure, Google Cloud" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scalable cloud infrastructure solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4"></p>
                Seamless migration to cloud platforms with minimal disruption to your business.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• AWS Migration</li>
                <li>• Azure Migration</li>
                <li>• GCP Migration</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Architecture</h3>
              <p className="text-gray-300 mb-4"></p>
                Design and implement scalable cloud architectures for optimal performance.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Microservices Architecture</li>
                <li>• Container Orchestration</li>
                <li>• Auto-scaling Solutions</li>
                <li>• Load Balancing</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Security</h3>
              <p className="text-gray-300 mb-4"></p>
                Comprehensive security solutions to protect your cloud infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Identity & Access Management</li>
                <li>• Data Encryption</li>
                <li>• Security Monitoring</li>
                <li>• Compliance Management</li>
              </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud infrastructure solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cloud infrastructure solutions deliver unmatched performance, security, and scalability.
          </p>
        </div></div></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div></div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Cloud Infrastructure Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div></div></div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your cloud infrastructure needs and get a customized solution.
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
          </div></div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      </div>
      <Footer />
    </>
  );
};

export default CloudInfrastructurePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======

const CloudInfrastructurePage: React.FC = () => {return (
    <>
      <title>CloudInfrastructure - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
