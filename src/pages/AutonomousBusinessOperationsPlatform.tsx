<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CogIcon, 
  ChartBarIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: CogIcon,
      title: "Intelligent Process Automation",
      description: "AI-powered automation that learns and optimizes business processes in real-time."
    },
    {
      icon: ChartBarIcon,
      title: "Predictive Analytics",
      description: "Advanced analytics that forecast business trends and identify optimization opportunities."
    },
    {
      icon: RocketLaunchIcon,
      title: "Scalable Operations",
      description: "Automatically scale business operations based on demand and performance metrics."
    },
    {
      icon: ShieldCheckIcon,
      title: "Risk Management",
      description: "Proactive risk identification and mitigation through continuous monitoring and AI analysis."
    },
    {
      icon: LightBulbIcon,
      title: "Continuous Optimization",
      description: "Self-improving systems that continuously optimize performance and efficiency."
    },
    {
      icon: UserGroupIcon,
      title: "Team Collaboration",
      description: "Seamless integration with human teams for optimal human-AI collaboration."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase efficiency by 60%",
    "24/7 autonomous operation",
    "Real-time decision making",
    "Predictive maintenance",
    "Scalable growth support"
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Finance",
    "Retail",
    "Logistics",
    "Energy",
    "Telecommunications",
    "Education"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Autonomous Business
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered autonomous operations. 
              Achieve unprecedented efficiency, scalability, and growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how autonomous operations can transform your business processes and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of autonomous operations on your business metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <ClockIcon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to work across diverse industries and business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <GlobeAltIcon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <span className="text-white font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and transform your operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Bot,
  Workflow,
  Settings,
  Monitor,
  TrendingUp,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns and adapts to your business processes',
      benefits: ['80% reduction in manual tasks', 'Adaptive learning algorithms', '24/7 operation']
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly coordinate complex business workflows across departments',
      benefits: ['End-to-end automation', 'Real-time monitoring', 'Exception handling']
    },
    {
      icon: BarChart3,
      title: 'Intelligent Analytics',
      description: 'Advanced analytics and insights to optimize business operations',
      benefits: ['Predictive insights', 'Performance optimization', 'Data-driven decisions']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance and audit trails',
      benefits: ['SOC2 compliance', 'End-to-end encryption', 'Audit logging']
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Optimization',
      description: 'Autonomous management of inventory, suppliers, and logistics',
      roi: '35% cost reduction',
      icon: Target
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-driven customer support with human escalation',
      roi: '60% faster resolution',
      icon: Users
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, payments, and financial reporting',
      roi: '50% time savings',
      icon: DollarSign
    },
    {
      title: 'HR Process Management',
      description: 'Streamlined hiring, onboarding, and employee management',
      roi: '40% efficiency gain',
      icon: Brain
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,499',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 50 automated processes',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '1 admin user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 200 automated processes',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations',
        '5 admin users',
        'AI optimization engine'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited automated processes',
        'Real-time analytics & AI insights',
        'Dedicated support team',
        'Custom development',
        'Unlimited users',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🤖 Autonomous Business Operations
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Autonomous Business
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Operations Platform
            </span>
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Transform your business with AI-powered autonomous operations that work 24/7, 
            learn continuously, and scale automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="mr-2 w-5 h-5" />
              Schedule Demo
            </Button>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: '85%', label: 'Cost Reduction' },
            { value: '24/7', label: 'Operation' },
            { value: '300%', label: 'ROI Average' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border-zion-cyan/30">
            <TabsTrigger value="overview" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="features" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Features
            </TabsTrigger>
            <TabsTrigger value="use-cases" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Use Cases
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The Future of Business Operations
                </h2>
                <p className="text-lg text-zion-cyan-light mb-6">
                  Our Autonomous Business Operations Platform leverages advanced AI to create 
                  self-managing business processes that adapt, learn, and optimize continuously.
                </p>
                <div className="space-y-4">
                  {[
                    'AI-powered process automation',
                    'Intelligent decision making',
                    'Continuous learning and optimization',
                    'Seamless integration with existing systems',
                    'Real-time monitoring and analytics'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                  <CardHeader>
                    <CardTitle className="text-white">Platform Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: TrendingUp, label: 'Increased Efficiency', value: '85%' },
                      { icon: DollarSign, label: 'Cost Savings', value: '$2.5M avg' },
                      { icon: Clock, label: 'Time Reduction', value: '70%' },
                      { icon: Award, label: 'Quality Improvement', value: '95%' }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <benefit.icon className="w-5 h-5 text-zion-cyan" />
                          <span className="text-zion-slate-light">{benefit.label}</span>
                        </div>
                        <span className="text-white font-semibold">{benefit.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <feature.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-slate-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <useCase.icon className="w-6 h-6 text-zion-cyan" />
                        <CardTitle className="text-white">{useCase.title}</CardTitle>
                      </div>
                      <Badge className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                        {useCase.roi}
                      </Badge>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/50 transition-colors relative ${plan.popular ? 'ring-2 ring-zion-cyan' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-zion-cyan text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-zion-cyan">
                      {plan.price}
                      <span className="text-sm font-normal text-zion-slate-light">{plan.period}</span>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-white">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border-zion-cyan/30">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-zion-cyan-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our platform to automate and optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Phone className="mr-2 w-5 h-5" />
                Contact Sales
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}