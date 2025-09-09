import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  Cpu,
  Network,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
  Play,
  Download,
  BookOpen,
  MessageSquare,
  Workflow,
  Target,
  Database,
  Cloud,
  Brain,
  Lock,
  Eye,
  BarChart,
  PieChart,
  Activity,
  X
} from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedUseCase, setSelectedUseCase] = useState(null);

const AutonomousBusinessOperationsPlatform = () => {
    const features = [
                                            {
                                                icon: Bot,
                                                title: 'Intelligent Automation',
                                                description: 'AI - powered automation that learns from your business processes and continuously improves efficiency.'
                                            },
                                            {
                                                icon: Workflow,
                                                title: 'Process Orchestration',
                                                description: 'Seamlessly orchestrate complex business workflows across multiple systems and departments.'
                                            },
                                            {
                                                icon: Zap,
                                                title: 'Real - time Optimization',
                                                description: 'Dynamic optimization of business operations based on real - time data and market conditions.'
                                            },
                                            {
                                                icon: Shield,
                                                title: 'Secure Operations',
                                                description: 'Enterprise - grade security with role - based access control and audit trails for all operations.'
                                            }
                                        ];
                                        const useCases = [
                                            {
                                                title: 'Supply Chain Management',
                                                description: 'Automated inventory management, demand forecasting, and supplier coordination.',
                                                icon: Workflow
                                            },
                                            {
                                                title: 'Customer Service',
                                                description: 'Intelligent chatbots, ticket routing, and automated customer support workflows.',
                                                icon: Users
                                            },
                                            {
                                                title: 'Financial Operations',
                                                description: 'Automated invoicing, expense management, and financial reporting.',
                                                icon: BarChart3
                                            },
                                            {
                                                title: 'HR & Recruitment',
                                                description: 'Automated candidate screening, onboarding processes, and performance management.',
                                                icon: Users
                                            }
                                        ];
                                        const benefits = [
                                            'Reduce operational costs by up to 40%',
                                            'Improve process efficiency by 60%',
                                            'Eliminate manual errors and delays',
                                            '24 / 7 automated operations',
                                            'Scalable infrastructure for growth',
                                            'Real - time monitoring and analytics'
                                        ];
                                        const industries = [
                                            'Manufacturing',
                                            'Healthcare',
                                            'Finance',
                                            'Retail',
                                            'Logistics',
                                            'Technology',
                                            'Energy',
                                            'Education'
                                        ];
                                        return (<div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto text - center">
          <div className="mb - 8">
            <div className="inline - flex items - center px - 4 py - 2 bg - green - 600 / 20 text - green - 400 rounded - full text - sm font - medium mb - 6">
              <Bot className="w - 4 h - 4 mr - 2"      />
              Autonomous Operations
            </div>
            <h1 className="text - 4xl md:text - 6xl font - bold text - white mb - 6">
              Autonomous Business < span className="text - transparent bg - clip - text bg - gradient - to - r from - green - 400 to - emerald - 400">
                {' '}Operations Platform
              </span>
            </h1>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto mb - 8">
              Transform your business with intelligent automation that runs 24 / 7. 
              Our platform orchestrates your entire business operations autonomously, 
              driving efficiency and growth.
            </p>
            <div className="flex flex - col sm:flex - row gap - 4 justify - center mt - 8">
              <Link to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - green - 600 to - emerald - 600 text - white font - semibold rounded - lg hover:from - green - 700 hover:to - emerald - 700 transition - all duration - 300">
                Get Started < ArrowRight className="ml - 2 w - 5 h - 5"/>
              </Link>
              <button className="inline - flex items - center px - 8 py - 4 border border - white / 20 text - white font - semibold rounded - lg hover:bg - white / 10 transition - all duration - 300">
                <Play className="mr - 2 w - 5 h - 5"      />
                Watch Demo
              </button>
            </div>
          </div>
      <section className="py - 20 px - 4">
        <div className="container mx - auto max - w-6xl">
          <motion.div initial = {
  { opacity: 0,
  y: 20 

}} whileInView = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.8 }} className="text - center mb - 16">
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6">
              Platform Features
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              Our autonomous platform combines cutting - edge AI with business intelligence to create 
              a truly intelligent and self - optimizing business environment.
            </p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">
            {features.map ( (feature, index) => (<motion.div key={index} initial = {
  { opacity: 0,
  y: 20 

}} whileInView = {
  { opacity: 1,
  y: 0 

}}      />
                                                ,
                                                    <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              Our platform combines cutting - edge AI with business process automation to create 
              truly autonomous operations that work around the clock.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">
            {features.map ( (feature, index) => (<div key={index} className="bg - gray - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 700 hover:border - cyan - 500 transition - all duration - 300 hover:transform hover:scale - 105">
                <div className="w - 16 h - 16 bg - gradient - to - br from - cyan - 500 to - purple - 600 rounded - lg flex items - center justify - center mb - 4">
                  <feature.icon className="w - 8 h - 8 text - white"      />
                </div>
                <h3 className="text - xl font - semibold text - white mb - 3">{feature.title}</h3>
                <p className="text - gray - 300">{feature.description}</p>
              </div>) ) }
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="bg - gray - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 700 hover:border - green - 500 transition - all duration - 300 hover:transform hover:scale - 105"
              >
                <div className="w - 16 h - 16 bg - gradient - to - br from - green - 500 to - blue - 600 rounded - lg flex items - center justify - center mb - 4 mx - auto">
                  <feature.icon className="w - 8 h - 8 text - white"      />
                </div>
                <h3 className="text - xl font - semibold mb - 3">{feature.title}</h3>
                <p className="text - gray - 300">{feature.description}</p>
              </motion.div>) ) }
  return (<div className="min - h-screen bg - gradient - to - br from - zion - slate via - zion - blue to - zion - purple">
      {/* Hero Section */}
      <section className="relative py - 20 px - 4 overflow - hidden">
        <div className="absolute inset - 0 bg - black / 20"></div>
        <div className="relative container mx - auto text - center">
          <h1 className="text - 5xl md:text - 7xl font - bold text - white mb - 6">
            Autonomous Business Operations Platform
          </h1>
          <p className="text - xl md:text - 2xl text - zion - cyan mb - 8 max - w-4xl mx - auto">
            Transform your business with AI - powered autonomous operations that run 24 / 7 without human intervention
          </p>
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">
            <Link to="/contact" className="bg - gradient - to - r from - zion - cyan to - zion - purple hover:from - zion - cyan - light hover:to - zion - purple - light text - white px - 8 py - 4 rounded - lg font - semibold text - lg transition - all duration - 300 hover:shadow - 2xl hover:shadow - zion - cyan / 30">
              Get Started
            </Link>
            <Link to="/demo" className="border - 2 border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - white px - 8 py - 4 rounded - lg font - semibold text - lg transition - all duration - 300">
              Request Demo
            </Link>
      {/* Capabilities Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 800 / 30">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl font - bold text - white mb - 4">
              Advanced Capabilities
            </h2>
            <p className="text - xl text - gray - 300 max - w-2xl mx - auto">
              Discover the powerful capabilities that make our platform truly autonomous.
            </p>
          </div>
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">
            {capabilities.map ( (capability, index) => (<div key={index} className="bg - gray - 800 / 50 backdrop - blur - sm rounded - xl p - 8 border border - gray - 700">
                <h3 className="text - 2xl font - semibold text - white mb - 4">{capability.title}</h3>
                <p className="text - gray - 300 text - lg">{capability.description}</p>
              </div>) ) }
      {/* Benefits Section */}
      <section className="py - 16 px - 4 bg - gray - 800 / 20">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl font - bold mb - 4">Business Impact</h2>
            <p className="text - xl text - gray - 400 max - w-2xl mx - auto">
              See measurable improvements in your business operations and bottom line.
            </p>
          </div>
          
          <div className="grid md:grid - cols - 2 gap - 8">
            <div className="space - y-6">
              {benefits.map ( (benefit, index) => (<div key={index} className="flex items - start space - x-3">
                  <div className="w - 6 h - 6 bg - green - 500 rounded - full flex items - center justify - center mt - 1 flex - shrink - 0">
                    <div className="w - 2 h - 2 bg - white rounded - full"></div>
                  </div>
                  <p className="text - gray - 300">{benefit}</p>
                </div>) ) }
            </div>
            
            <div className="bg - gradient - to - br from - green - 500 / 10 to - blue - 600 / 10 rounded - xl p - 8 border border - green - 500 / 20">
              <h3 className="text - 2xl font - semibold mb - 4">Performance Metrics</h3>
              <div className="space - y-4">
                <div className="flex justify - between items - center">
                  <span className="text - gray - 400">Cost Reduction</span>
                  <span className="text - green - 400 font - semibold">40%</span>
                </div>
                <div className="flex justify - between items - center">
                  <span className="text - gray - 400">Efficiency Gain</span>
                  <span className="text - green - 400 font - semibold">60%</span>
                </div>
                <div className="flex justify - between items - center">
                  <span className="text - gray - 400">Uptime</span>
                  <span className="text - green - 400 font - semibold">99.9%</span>
                </div>
              </div>
            </div>
        </div>
      </></section>

      {/* Features Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">
              Intelligent Automation Features
            </h2>
            <p className="text - xl text - gray - 300 max - w-2xl mx - auto">
              Our platform combines AI, machine learning, and advanced workflow automation 
              to create a truly autonomous business environment.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">
            {features.map ( (feature, index) => {
                                                            const IconComponent = feature.icon;
                                                            return (<div key={index} className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 6 border border - white / 10 hover:border - green - 500 / 30 transition - all duration - 300">
                  <div className="w - 12 h - 12 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - lg flex items - center justify - center mb - 4">
                    <IconComponent className="w - 6 h - 6 text - white"      />
                  </div>
                  <h3 className="text - xl font - semibold text - white mb - 3">{feature.title}</h3>
                  <p className="text - gray - 300">{feature.description}</p>
                </div>) }) }
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - slate - 800 / 30">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">
              Transform Every Business Function
            </h2>
            <p className="text - xl text - gray - 300 max - w-2xl mx - auto">
              From front - office operations to back - office processes, our platform 
              automates and optimizes every aspect of your business.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">
            {useCases.map ( (useCase, index) => {
                                                            const IconComponent = useCase.icon;
                                                            return (<div key={index} className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 8 border border - white / 10">
                  <div className="w - 16 h - 16 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - xl flex items - center justify - center mb - 6">
                    <IconComponent className="w - 8 h - 8 text - white"      />
                  </div>
                  <h3 className="text - 2xl font - semibold text - white mb - 4">{useCase.title}</h3>
                  <p className="text - gray - 300 text - lg">{useCase.description}</p>
                </div>) }) }
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto">
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 16 items - center">
            <div>
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
                Why Choose Autonomous Operations?
              </h2>
              <p className="text - xl text - gray - 300 mb - 8">
                Experience unprecedented efficiency and productivity with our autonomous 
                business operations platform. Let AI handle the routine while you focus on strategy.
              </p>
              <div className="space - y-4">
                {benefits.map ( (benefit, index) => (<div key={index} className="flex items - center">
                    <CheckCircle className="w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0"      />
                    <span className="text - gray - 300">{benefit}</span>
                  </div>) ) }
              </div>
            </div>
            
            <div className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 8 border border - white / 10">
              <h3 className="text - 2xl font - semibold text - white mb - 6">Performance Metrics</h3>
              <div className="space - y-6">
                <div>
                  <div className="flex justify - between items - center mb - 2">
                    <span className="text - gray - 300">Cost Reduction</span>
                    <span className="text - green - 400 font - semibold">40%</span>
                  </div>
                  <div className="w - full bg - slate - 700 rounded - full h - 2">
                    <div className="bg - gradient - to - r from - green - 600 to - emerald - 600 h - 2 rounded - full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify - between items - center mb - 2">
                    <span className="text - gray - 300">Efficiency Gain</span>
                    <span className="text - green - 400 font - semibold">60%</span>
                  </div>
                  <div className="w - full bg - slate - 700 rounded - full h - 2">
                    <div className="bg - gradient - to - r from - green - 600 to - emerald - 600 h - 2 rounded - full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify - between items - center mb - 2">
                    <span className="text - gray - 300">Error Reduction</span>
                    <span className="text - green - 400 font - semibold">95%</span>
                  </div>
                  <div className="w - full bg - slate - 700 rounded - full h - 2">
                    <div className="bg - gradient - to - r from - green - 600 to - emerald - 600 h - 2 rounded - full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div > className="bg - gradient - to - r from - zion - cyan to - zion - purple hover:from - zion - cyan - light hover:to - zion - purple - light text - white px - 8 py - 4 rounded - lg font - semibold text - lg transition - all duration - 300 hover:shadow - 2xl hover:shadow - zion - cyan / 30 flex items - center justify - center gap - 2"
              >
                Get Started < ArrowRight className="w - 5 h - 5"/>
              </Link>
              <Link to="/services" className="border - 2 border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - white px - 8 py - 4 rounded - lg font - semibold text - lg transition - all duration - 300 flex items - center justify - center gap - 2">
                View All Services
              </Link>
            </div>
          </div>
        </></div>
      </></section>

      {/* Industries Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - slate - 800 / 30">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">
              Industry Solutions
            </h2>
            <p className="text - xl text - gray - 300 max - w-2xl mx - auto">
              Our platform is designed to work across industries, with specialized 
              automation solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6">
            {industries.map ( (industry, index) => (<div key={index} className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 6 border border - white / 10 hover:border - green - 500 / 30 transition - all duration - 300 text - center">
                <div className="w - 12 h - 12 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - lg flex items - center justify - center mx - auto mb - 4">
                  <Target className="w - 6 h - 6 text - white"      />
                </div>
                <h3 className="text - lg font - semibold text - white">{industry}</h3>
              </div>) ) }
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">
              Built on Cutting - Edge Technology
            </h2>
            <p className="text - xl text - gray - 300 max - w-2xl mx - auto">
              Our platform leverages the latest advancements in AI, machine learning, 
              and cloud computing to deliver enterprise - grade performance.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">
            <div className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 8 border border - white / 10">
              <div className="w - 16 h - 16 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - xl flex items - center justify - center mb - 6">
                <Cpu className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - semibold text - white mb - 4">AI & Machine Learning</h3>
              <p className="text - gray - 300 text - lg mb - 4">
                Advanced algorithms that learn from your business processes and continuously improve performance.
              </p>
              <ul className="space - y-2 text - gray - 300">
                <li>• Natural Language Processing</li>
                <li>• Predictive Analytics</li>
                <li>• Computer Vision</li>
                <li>• Deep Learning Models</li>
              </ul>
            </div>
            
            <div className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 8 border border - white / 10">
              <div className="w - 16 h - 16 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - xl flex items - center justify - center mb - 6">
                <Database className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - semibold text - white mb - 4">Cloud Infrastructure</h3>
              <p className="text - gray - 300 text - lg mb - 4">
                Scalable, secure, and reliable cloud infrastructure that grows with your business.
              </p>
              <ul className="space - y-2 text - gray - 300">
                <li>• Multi - cloud Support</li>
                <li>• Auto - scaling</li>
                <li>• High Availability</li>
                <li>• Disaster Recovery</li>
              </ul>
            </div>
            
            <div className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 8 border border - white / 10">
              <div className="w - 16 h - 16 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - xl flex items - center justify - center mb - 6">
                <Shield className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - semibold text - white mb - 4">Enterprise Security</h3>
              <p className="text - gray - 300 text - lg mb - 4">
                Bank - level security with comprehensive compliance and audit capabilities.
              </p>
              <ul className="space - y-2 text - gray - 300">
                <li>• SOC 2 Type II</li>
                <li>• GDPR Compliance</li>
                <li>• End - to - end Encryption</li>
                <li>• Role - based Access Control</li>
              </ul>
            </div>
      {/* Features Section */}
      <section className="py - 20 px - 4 bg - white / 5 backdrop - blur - sm">
        <div className="container mx - auto max - w-7xl">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl font - bold text - white mb - 4">
              Intelligent Automation Features
            </h2>
            <p className="text - xl text - zion - slate - light max - w-2xl mx - auto">
              Harness the power of AI to automate complex business processes
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">
            <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20 hover:border - zion - cyan / 50 transition - all duration - 300 hover:transform hover:scale - 105">
              <div className="w - 16 h - 16 bg - gradient - to - br from - zion - cyan to - zion - purple rounded - lg flex items - center justify - center mb - 6">
                <Bot className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4">AI - Powered Automation</h3>
              <p className="text - zion - slate - light leading - relaxed">
                Intelligent bots that learn from your business processes and continuously optimize operations.
              </p>
            </div>

            <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20 hover:border - zion - cyan / 50 transition - all duration - 300 hover:transform hover:scale - 105">
              <div className="w - 16 h - 16 bg - gradient - to - br from - zion - purple to - zion - cyan rounded - lg flex items - center justify - center mb - 6">
                <TrendingUp className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4">Performance Analytics</h3>
              <p className="text - zion - slate - light leading - relaxed">
                Real - time insights and predictive analytics to optimize business performance and decision - making.
              </p>
            </div>

            <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20 hover:border - zion - cyan / 50 transition - all duration - 300 hover:transform hover:scale - 105">
              <div className="w - 16 h - 16 bg - gradient - to - br from - zion - blue to - zion - cyan rounded - lg flex items - center justify - center mb - 6">
                <Users className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4">Team Collaboration</h3>
              <p className="text - zion - slate - light leading - relaxed">
                Seamless integration with your team workflows and enhanced collaboration tools.
              </p>
            </div>

            <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20 hover:border - zion - cyan / 50 transition - all duration - 300 hover:transform hover:scale - 105">
              <div className="w - 16 h - 16 bg - gradient - to - br from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center mb - 6">
                <Shield className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4">Enterprise Security</h3>
              <p className="text - zion - slate - light leading - relaxed">
                Bank - grade security with role - based access control and comprehensive audit trails.
              </p>
            </div>

            <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20 hover:border - zion - cyan / 50 transition - all duration - 300 hover:transform hover:scale - 105">
              <div className="w - 16 h - 16 bg - gradient - to - br from - zion - purple to - zion - blue rounded - lg flex items - center justify - center mb - 6">
                <Zap className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4">Lightning Fast</h3>
              <p className="text - zion - slate - light leading - relaxed">
                Process thousands of operations per second with our optimized AI algorithms.
              </p>
            </div>

            <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20 hover:border - zion - cyan / 50 transition - all duration - 300 hover:transform hover:scale - 105">
              <div className="w - 16 h - 16 bg - gradient - to - br from - zion - blue to - zion - purple rounded - lg flex items - center justify - center mb - 6">
                <Globe className="w - 8 h - 8 text - white"      />
              </div>
              <h3 className="text - 2xl font - bold text - white mb - 4">Global Scalability</h3>
              <p className="text - zion - slate - light leading - relaxed">
                Scale your operations globally with our distributed cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py - 20 px - 4">
        <div className="container mx - auto max - w-7xl">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl font - bold text - white mb - 4">
              Business Process Automation
            </h2>
            <p className="text - xl text - zion - slate - light max - w-2xl mx - auto">
              Automate critical business processes across all departments
            </p>
          </div>

          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12">
            <div className="space - y-8">
              <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20">
                <h3 className="text - 2xl font - bold text - white mb - 4">Finance & Accounting</h3>
                <p className="text - zion - slate - light leading - relaxed mb - 4">
                  Automate invoice processing, expense management, and financial reporting with AI - powered accuracy.
                </p>
                <ul className="space - y-2 text - zion - slate - light">
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Automated invoice processing
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Expense categorization
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Financial reporting automation
                  </li>
                </ul>
              </div>

              <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20">
                <h3 className="text - 2xl font - bold text - white mb - 4">Human Resources</h3>
                <p className="text - zion - slate - light leading - relaxed mb - 4">
                  Streamline recruitment, onboarding, and employee management with intelligent automation.
                </p>
                <ul className="space - y-2 text - zion - slate - light">
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Resume screening and matching
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Onboarding workflow automation
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Performance review scheduling
                  </li>
                </ul>
              </div>
            </div>

            <div className="space - y-8">
              <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20">
                <h3 className="text - 2xl font - bold text - white mb - 4">Customer Service</h3>
                <p className="text - zion - slate - light leading - relaxed mb - 4">
                  Enhance customer experience with AI - powered support and automated issue resolution.
                </p>
                <ul className="space - y-2 text - zion - slate - light">
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Intelligent ticket routing
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Automated response generation
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Customer sentiment analysis
                  </li>
                </ul>
              </div>

              <div className="bg - white / 10 backdrop - blur - md rounded - xl p - 8 border border - white / 20">
                <h3 className="text - 2xl font - bold text - white mb - 4">Supply Chain Management</h3>
                <p className="text - zion - slate - light leading - relaxed mb - 4">
                  Optimize inventory, predict demand, and streamline logistics with predictive AI.
                </p>
                <ul className="space - y-2 text - zion - slate - light">
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Demand forecasting
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Inventory optimization
                  </li>
                  <li className="flex items - center gap - 2">
                    <div className="w - 2 h - 2 bg - zion - cyan rounded - full"></div > Route optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py - 20 px - 4 bg - white / 5 backdrop - blur - sm">
        <div className="container mx - auto max - w-7xl">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl font - bold text - white mb - 4">
              Advanced Technology Stack
            </h2>
            <p className="text - xl text - zion - slate - light max - w-2xl mx - auto">
              Built with cutting - edge technologies for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">
            <div className="text - center">
              <div className="w - 20 h - 20 bg - gradient - to - br from - zion - cyan to - zion - purple rounded - full flex items - center justify - center mx - auto mb - 6">
                <Cpu className="w - 10 h - 10 text - white"      />
              </div>
              <h3 className="text - xl font - bold text - white mb - 2">Machine Learning</h3>
              <p className="text - zion - slate - light text - sm">
                Advanced ML algorithms for pattern recognition and predictive analytics
              </p>
            </div>

            <div className="text - center">
              <div className="w - 20 h - 20 bg - gradient - to - br from - zion - purple to - zion - cyan rounded - full flex items - center justify - center mx - auto mb - 6">
                <Network className="w - 10 h - 10 text - white"      />
              </div>
              <h3 className="text - xl font - bold text - white mb - 2">Cloud Native</h3>
              <p className="text - zion - slate - light text - sm">
                Built on scalable cloud infrastructure for global deployment
              </p>
            </div>

            <div className="text - center">
              <div className="w - 20 h - 20 bg - gradient - to - br from - zion - blue to - zion - cyan rounded - full flex items - center justify - center mx - auto mb - 6">
                <BarChart3 className="w - 10 h - 10 text - white"      />
              </div>
              <h3 className="text - xl font - bold text - white mb - 2">Real - time Analytics</h3>
              <p className="text - zion - slate - light text - sm">
                Live dashboards and instant insights for decision - making
              </p>
            </div>

            <div className="text - center">
              <div className="w - 20 h - 20 bg - gradient - to - br from - zion - cyan to - zion - blue rounded - full flex items - center justify - center mx - auto mb - 6">
                <Shield className="w - 10 h - 10 text - white"      />
              </div>
              <h3 className="text - xl font - bold text - white mb - 2">Enterprise Security</h3>
              <p className="text - zion - slate - light text - sm">
                SOC2 compliant with advanced encryption and access controls
              </p>
            </div>
      {/* Integration Section */}
      <section className="py - 16 bg - gray - 800 / 20">
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl font - bold mb - 4">Seamless Integration</h2>
            <p className="text - xl text - gray - 400">Works with your existing tools and systems</p>
          </div>
          <div className="grid grid - cols - 2 md:grid - cols - 4 lg:grid - cols - 6 gap - 6">
            {[
                                                            "Salesforce", "HubSpot", "Slack", "Microsoft 365", "Google Workspace", "Zapier",
                                                            "QuickBooks", "Shopify", "WooCommerce", "Magento", "AWS", "Azure"
                                                        ].map ( (tool, index) => (<div key={index} className="bg - gray - 800 / 50 rounded - lg p - 4 text - center border border - gray - 700 / 50 hover:border - green - 500 / 50 transition - colors duration - 200">
                <div className="text - gray - 300 font - medium">{tool}</div>
              </div>) ) }
      {/* Capabilities Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gradient - to - r from - gray - 900 / 50 to - green - 900 / 50">
        <div className="max - w-7xl mx - auto">
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 16 items - center">
            <div>
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
                Comprehensive Business Automation
              </h2>
              <p className="text - xl text - gray - 300 mb - 8 leading - relaxed">
                Our platform covers every aspect of business operations, from customer service 
                to financial management, all running autonomously with AI oversight.
              </p>
              
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">
                {capabilities.map ( (capability, index) => (<div key={index} className="flex items - center">
                    <CheckCircle className="w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0"      />
                    <span className="text - gray - 300 text - sm">{capability}</span>
                  </div>) ) }
              </div>
            </div>
            
            <div className="relative">
              <div className="bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 8">
                <div className="text - center mb - 6">
                  <Settings className="w - 12 h - 12 text - green - 400 mx - auto mb - 4"      />
                  <h3 className="text - 2xl font - bold text - white mb - 2">Platform Benefits</h3>
                  <p className="text - gray - 300">Transform your business operations today</p>
                </div>
                
                <div className="space - y-3">
                  {benefits.map ( (benefit, index) => (<div key={index} className="flex items - start">
                      <div className="w - 2 h - 2 bg - green - 400 rounded - full mt - 2 mr - 3 flex - shrink - 0"></div>
                      <span className="text - gray - 300 text - sm">{benefit}</span>
                    </div>) ) }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">
              Industry Solutions
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              Our autonomous operations platform is designed to work across all industries, 
              with specialized solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6">
            {industries.map ( (industry, index) => (<div key={index} className="bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - xl p - 6 text - center hover:border - green - 500 / 50 transition - all duration - 300 transform hover:scale - 105">
                <div className="w - 12 h - 12 bg - gradient - to - r from - green - 500 to - emerald - 600 rounded - lg flex items - center justify - center mx - auto mb - 4">
                  <Users className="w - 6 h - 6 text - white"      />
                </div>
                <h3 className="text - lg font - semibold text - white">{industry}</h3>
              </div>) ) }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - slate - 800 / 30">
        <div className="max - w-4xl mx - auto text - center">
          <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
            Ready to Automate Your Business?
          </h2>
          <p className="text - xl text - gray - 300 mb - 8">
            Join thousands of businesses that have transformed their operations with our 
            autonomous platform. Start your automation journey today.
          </p>
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">
            <Link to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - green - 600 to - emerald - 600 text - white font - semibold rounded - lg hover:from - green - 700 hover:to - emerald - 700 transition - all duration - 300">
              Schedule a Demo < ArrowRight className="ml - 2 w - 5 h - 5"/>
            </Link>
            <Link to="/pricing" className="inline - flex items - center px - 8 py - 4 border border - white / 20 text - white font - semibold rounded - lg hover:bg - white / 10 transition - all duration - 300">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 16">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">
              Learn More About Autonomous Operations
            </h2>
            <p className="text - xl text - gray - 300 max - w-2xl mx - auto">
              Explore our resources to understand how autonomous operations can transform your business.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">
            <div className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 6 border border - white / 10 hover:border - green - 500 / 30 transition - all duration - 300">
              <div className="w - 12 h - 12 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - lg flex items - center justify - center mb - 4">
                <BookOpen className="w - 6 h - 6 text - white"      />
              </div>
              <h3 className="text - xl font - semibold text - white mb - 3">Documentation</h3>
              <p className="text - gray - 300 mb - 4">Comprehensive guides and API documentation for developers.</p>
              <Link to="/docs" className="text - green - 400 hover:text - green - 300 transition - colors duration - 300">
                Read Docs →
              </Link>
            </div>
            
            <div className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 6 border border - white / 10 hover:border - green - 500 / 30 transition - all duration - 300">
              <div className="w - 12 h - 12 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - lg flex items - center justify - center mb - 4">
                <Download className="w - 6 h - 6 text - white"      />
              </div>
              <h3 className="text - xl font - semibold text - white mb - 3">SDK & Tools</h3>
              <p className="text - gray - 300 mb - 4">Download our SDK and development tools to get started.</p>
              <Link to="/downloads" className="text - green - 400 hover:text - green - 300 transition - colors duration - 300">
                Download →
              </Link>
            </div>
            
            <div className="bg - slate - 800 / 50 backdrop - blur - lg rounded - xl p - 6 border border - white / 10 hover:border - green - 500 / 30 transition - all duration - 300">
              <div className="w - 12 h - 12 bg - gradient - to - r from - green - 600 to - emerald - 600 rounded - lg flex items - center justify - center mb - 4">
                <MessageSquare className="w - 6 h - 6 text - white"      />
              </div>
              <h3 className="text - xl font - semibold text - white mb - 3">Support</h3>
              <p className="text - gray - 300 mb - 4">Get help from our automation experts and support team.</p>
              <Link to="/contact" className="text - green - 400 hover:text - green - 300 transition - colors duration - 300">
                Contact Support →
              </Link>
            </div>
      <section className="py - 16 px - 4">
        <div className="max - w-4xl mx - auto text - center">
          <h2 className="text - 4xl font - bold mb - 6">Ready to Automate Your Business?</h2>
          <p className="text - xl text - gray - 400 mb - 8">
            Join the autonomous operations revolution and transform your business efficiency today.
          </p>
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">
            <button className="px - 8 py - 4 bg - gradient - to - r from - green - 500 to - blue - 600 hover:from - green - 600 hover:to - blue - 700 rounded - lg font - semibold transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center">
              Get Started Now < ArrowRight className="w - 5 h - 5 ml - 2"/>
            </button>
            <button className="px - 8 py - 4 border border - green - 500 / 30 text - green - 400 hover:bg - green - 500 / 20 rounded - lg font - semibold transition - all duration - 300">
              Contact Sales
            </button>
          </div>
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6">
              Ready to Automate Your Business?
            </h2>
            <p className="text - xl text - gray - 300 mb - 8">
              Join the autonomous business revolution and transform your operations with AI - powered intelligence.
            </p>
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">
              <button className="bg - gradient - to - r from - green - 500 to - blue - 600 hover:from - green - 600 hover:to - blue - 700 text - white px - 8 py - 4 rounded - lg font - semibold text - lg transition - all duration - 300 hover:shadow - lg hover:shadow - green - 500 / 30">
                Contact Sales
              </button>
              <button className="border border - green - 500 text - green - 400 hover:bg - green - 500 hover:text - white px - 8 py - 4 rounded - lg font - semibold text - lg transition - all duration - 300">
                Download Case Study
              </button>
            </div>
          </motion.div>
            <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">
              Ready to Automate Your Business?
            </h2>
            <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">
              Join thousands of businesses already experiencing the future of autonomous operations
            </p>
            <div className="flex flex - wrap justify - center gap - 4">
              <button className="bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white px - 10 py - 4 rounded - lg font - semibold text - lg hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 transform hover:scale - 105">
                Start Free Trial
              </button>
              <button className="border - 2 border - blue - 400 text - blue - 400 px - 10 py - 4 rounded - lg font - semibold text - lg hover:bg - blue - 400 hover:text - white transition - all duration - 300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div > className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 rounded - lg text - white font - semibold hover:from - green - 600 hover:to - emerald - 700 transition - all duration - 200 transform hover:scale - 105"
              >
                <span > Schedule a Demo</span>
                <ArrowRight className="ml - 2 w - 5 h - 5"      />
              </Link>
              <Link to="/pricing" className="inline - flex items - center px - 8 py - 4 border border - green - 500 text - green - 400 rounded - lg font - semibold hover:bg - green - 500 hover:text - white transition - all duration - 200">
                View Pricing
              </Link>
            </></div>
          </div>
        </section>
      </div>
    </>
      </section>
    </div>
        {/* CTA Section */}
        <section className="py - 20 relative">
          <div className="max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">
            <div className="bg - gradient - to - r from - green - 500 / 10 to - emerald - 500 / 10 border border - green - 500 / 30 rounded - 3xl p - 12">
              <Lightbulb className="w - 20 h - 20 text - green - 400 mx - auto mb - 6"      />
              <h2 className="text - 4xl font - bold text - white mb - 6">
                Ready to Go Autonomous?
              </h2>
              <p className="text - xl text - gray - 300 mb - 8">
                Start your journey toward fully autonomous business operations today 
                and discover the unlimited potential of AI - powered business management.
              </p>
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">
                <button className="px - 8 py - 4 bg - gradient - to - r from - green - 600 to - emerald - 600 hover:from - green - 500 hover:to - emerald - 500 text - white font - semibold rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - green - 500 / 25">
                  Get Started Now < ArrowRight className="w - 5 h - 5 ml - 2 inline"/>
                </button>
                <button className="px - 8 py - 4 border - 2 border - green - 500 / 50 text - green - 400 hover:bg - green - 500 / 10 font - semibold rounded - xl transition - all duration - 300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    <>
      <SEOHead customData = {
  {
                                                            title: "Autonomous Business Operations Platform - Zion Tech Group",
                                                            description: "Revolutionary AI - powered platform that automates and optimizes your entire business operations. Streamline processes, reduce costs, and boost efficiency with intelligent automation.",
                                                            keywords["business automation", "AI operations", "process automation", "business intelligence", "autonomous systems", "enterprise automation", "workflow automation"],
                                                            type: "website",
  url: "https://ziontechgroup.com / autonomous - business - operations - platform"

}}      />
      
      <div className="min - h-screen bg - gradient - to - br from - black via - gray - 900 to - blue - 900">
        {/* Hero Section */}
        <section className="relative pt - 20 pb - 16 px - 4 sm:px - 6 lg:px - 8">
          <div className="max - w-7xl mx - auto text - center">
            <div className="mb - 8">
              <h1 className="text - 4xl md:text - 6xl font - bold text - white mb - 6">
                Autonomous Business Operations Platform
              </h1>
              <p className="text - xl md:text - 2xl text - cyan - 300 mb - 8 max - w-4xl mx - auto">
                Transform your business with AI - powered automation that works 24 / 7. Streamline operations, reduce costs, and boost efficiency across your entire organization.
              </p>
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">
                <Link to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105">
                  Get Started < ArrowRight className="ml - 2 h - 5 w - 5"/>
                </Link>
                <Link to="/services / ai - autonomous - systems" className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 300">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8 mt - 16">
              {stats.map ( (stat, index) => (<div key={index} className="text - center">
                  <div className="flex justify - center mb - 3">
                    <stat.icon className="h - 8 w - 8 text - cyan - 400"      />
                  </div>
                  <div className="text - 3xl font - bold text - white mb - 2">{stat.value}</div>
                  <div className="text - sm font - medium text - cyan - 300 mb - 1">{stat.label}</div>
                  <div className="text - xs text - gray - 400">{stat.description}</div>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">
          <div className="max - w-7xl mx - auto">
            <div className="text - center mb - 16">
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
                Revolutionary Features
              </h2>
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
                Our autonomous platform combines cutting - edge AI with business process automation to deliver unprecedented operational efficiency.
              </p>
            </div>
            
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">
              {features.map ( (feature, index) => (<div key={index} className="bg - gray - 800 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 700 hover:border - cyan - 500 transition - all duration - 300">
                  <div className="flex justify - center mb - 4">
                    <feature.icon className="h - 12 w - 12 text - cyan - 400"      />
                  </div>
                  <h3 className="text - xl font - semibold text - white mb - 3 text - center">{feature.title}</h3>
                  <p className="text - gray - 300 text - center mb - 4">{feature.description}</p>
                  <ul className="space - y-2">
                    {feature.benefits.map ( (benefit, idx) => (<li key={idx} className="flex items - center text - sm text - gray - 400">
                        <CheckCircle className="h - 4 w - 4 text - cyan - 400 mr - 2"      />
                        {benefit}
                      </li>) ) }
                  </ul>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py - 16 px - 4 sm:px - 6 lg:px - 8 bg - gray - 800 / 30">
          <div className="max - w-7xl mx - auto">
            <div className="text - center mb - 16">
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
                Transformative Use Cases
              </h2>
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
                Discover how our autonomous platform is revolutionizing business operations across industries.
              </p>
            </div>
            
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">
              {useCases.map ( (useCase, index) => (<div key={index} className="bg - gray - 800 / 50 backdrop - blur - sm rounded - xl p - 8 border border - gray - 700">
                  <div className="flex items - start mb - 6">
                    <div className="flex - shrink - 0">
                      <useCase.icon className="h - 12 w - 12 text - cyan - 400"      />
                    </div>
                    <div className="ml - 4">
                      <h3 className="text - 2xl font - semibold text - white mb - 2">{useCase.title}</h3>
                      <p className="text - gray - 300 mb - 4">{useCase.description}</p>
                      <div className="inline - block bg - cyan - 500 / 20 text - cyan - 400 px - 3 py - 1 rounded - full text - sm font - medium">
                        {useCase.impact}
                      </div>
                    </div>
                  </div>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">
          <div className="max - w-4xl mx - auto text - center">
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
              Ready to Automate Your Business?
            </h2>
            <p className="text - xl text - gray - 300 mb - 8">
              Join thousands of businesses that have transformed their operations with our autonomous platform.
            </p>
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105">
                Schedule a Demo < ArrowRight className="ml - 2 h - 5 w - 5"/>
              </Link>
              <Link to="/services / ai - autonomous - systems" className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 hover:text - white transition - all duration - 300">
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>) }
              className="px - 8 py - 4 bg - gradient - to - r from - green - 600 to - blue - 600 text - white rounded - lg font - semibold hover:from - green - 700 hover:to - blue - 700 transition - all duration - 200 transform hover:scale - 105"
            >
              Get Started Free
            </Link>
            <Link to="/pricing" className="px - 8 py - 4 border border - green - 500 text - green - 400 rounded - lg font - semibold hover:bg - green - 500 hover:text - white transition - all duration - 200"      />
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-4xl mx - auto text - center">
          <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6">
            Ready to Automate Your Business?
          </h2>
          <p className="text - xl text - gray - 300 mb - 8 leading - relaxed">
            Join thousands of businesses that have already transformed their operations 
            with our autonomous platform.
          </p>
          
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">
            <Link to="/contact" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - green - 600 to - emerald - 600 hover:from - green - 700 hover:to - emerald - 700 text - white font - semibold rounded - lg transition - all duration - 200 transform hover:scale - 105">
              Get Free Consultation < ArrowRight className="ml - 2 w - 5 h - 5"/>
            </Link>
            <Link to="/pricing" className="inline - flex items - center px - 8 py - 4 border border - green - 500 text - green - 400 hover:bg - green - 500 hover:text - white font - semibold rounded - lg transition - all duration - 200">
              View Pricing Plans
            </Link > const testimonials = [
    {name}: "Operations Director",
      role: "Chief Operations Officer",
      comp: "Global Manufacturing Co.",
      content: "The autonomous operations platform has transformed our business. We've achieved 60% efficiency gains and 24 / 7 operations.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly orchestrate complex business workflows across multiple systems and departments.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Dynamic optimization of business operations based on real-time data and market conditions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Secure Operations',
      description: 'Enterprise-grade security with role-based access control and audit trails for all operations.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI Decision Making',
      description: 'Advanced AI algorithms that make intelligent decisions and recommendations for business operations.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built on modern cloud infrastructure for scalability, reliability, and global accessibility.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (<div className="min - h-screen bg - gradient - to - br from - black via - gray - 900 to - blue - 900 text - white">
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 overflow - hidden">
        <div className="absolute inset - 0 cyber - grid opacity - 20"></div>
        <div className="absolute inset - 0 quantum - particles">
          <div className="quantum - particle"></div>
          <div className="quantum - particle"></div>
          <div className="quantum - particle"></div>
        </div>
        
        <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">
          <div className="max - w-4xl mx - auto">
            <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 20 border border - green - 400 / 50 text - green - 400 text - sm font - medium mb - 6">
              <Zap className="w - 4 h - 4 mr - 2"      />
              Autonomous Operations Platform
            </div>
            
            <h1 className="text - 5xl lg:text - 7xl font - bold mb - 6 bg - gradient - to - r from - green - 400 via - cyan - 400 to - blue - 400 bg - clip - text text - transparent">
              Autonomous Business Operations Platform
            </h1>
            
            <p className="text - xl lg:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx - auto">
              Transform your business operations with our revolutionary autonomous platform. 
              Let AI manage your business 24 / 7 with intelligent automation and decision - making.
            </p>
            
            <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 12">
              <button className="px - 8 py - 4 bg - gradient - to - r from - green - 500 to - cyan - 500 text - white font - semibold rounded - xl hover:from - green - 400 hover:to - cyan - 400 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - green - 500 / 30 flex items - center">
                <Play className="w - 5 h - 5 mr - 2"      />
                Watch Demo
              </button>
              <button className="px - 8 py - 4 border border - green - 400 / 50 text - green - 400 font - semibold rounded - xl hover:bg - green - 400 / 20 transition - all duration - 300 flex items - center">
                <ArrowRight className="w - 5 h - 5 mr - 2"      />
                Get Started
              </button>
            </div>
            
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8 text - center">
              <div>
                <div className="text - 3xl font - bold text - green - 400 mb - 2">60%</div>
                <div className="text - gray - 400">Efficiency Gain</div>
              </div>
              <div>
                <div className="text - 3xl font - bold text - green - 400 mb - 2">24 / 7</div>
                <div className="text - gray - 400">Operations</div>
              </div>
              <div>
                <div className="text - 3xl font - bold text - green - 400 mb - 2">100%</div>
                <div className="text - gray - 400">Automation</div>
              </div>
              <div>
                <div className="text - 3xl font - bold text - green - 400 mb - 2">∞</div>
                <div className="text - gray - 400">Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py - 20 relative">
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl lg:text - 5xl font - bold mb - 6 bg - gradient - to - r from - green - 400 to - cyan - 400 bg - clip - text text - transparent">
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              Our platform combines cutting - edge AI with intelligent automation to deliver 
              unprecedented business operations capabilities.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">
            {features.map ( (feature, index) => (<div key={index} className="p - 8 rounded - 2xl bg - gradient - to - br from - gray - 800 / 50 to - gray - 900 / 50 border border - green - 500 / 30 hover:border - green - 400 / 50 transition - all duration - 300 hover:transform hover:scale - 105">
                <div className="flex items - start space - x-4">
                  <div className="p - 3 rounded - xl bg - green - 500 / 20 border border - green - 400 / 50">
                    <feature.icon className="w - 8 h - 8 text - green - 400"      />
                  </div>
                  <div className="flex - 1">
                    <h3 className="text - 2xl font - bold text - white mb - 3">{feature.title}</h3>
                    <p className="text - gray - 300 mb - 4">{feature.description}</p>
                    <ul className="space - y-2">
                      {feature.benefits.map ( (benefit, idx) => (<li key={idx} className="flex items - center text - gray - 300">
                          <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0"      />
                          {benefit}
                        </li>) ) }
                    </ul>
                  </div>
                </div>
              </div>) ) }
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py - 20 relative bg - gradient - to - br from - gray - 900 / 50 to - black / 50">
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl lg:text - 5xl font - bold mb - 6 bg - gradient - to - r from - green - 400 to - cyan - 400 bg - clip - text text - transparent">
              Comprehensive Operations Management
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              From financial management to supply chain optimization, our platform handles every aspect of business operations.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">
            {capabilities.map ( (capability, index) => (<div key={index} className="p - 6 rounded - xl bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 border border - gray - 700 / 50 hover:border - green - 500 / 30 transition - all duration - 300">
                <h3 className="text - xl font - bold text - green - 400 mb - 4">{capability.category}</h3>
                <ul className="space - y-3">
                  {capability.items.map ( (item, idx) => (<li key={idx} className="flex items - start text - gray - 300">
                      <Target className="w - 4 h - 4 text - green - 400 mr - 2 mt - 1 flex - shrink - 0"      />
                      {item}
                    </li>) ) }
                </ul>
              </div>) ) }
          </div>
        </div>
      </section>

  const metrics = [
    { label: "Cost Reduction", value: "40%", icon: TrendingUp, color: "text-green-500" },
    { label: "Efficiency Gain", value: "60%", icon: Zap, color: "text-blue-500" },
    { label: "Error Reduction", value: "95%", icon: CheckCircle, color: "text-purple-500" },
    { label: "Uptime", value: "99.9%", icon: Clock, color: "text-yellow-500" }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Features Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3 text-center">{feature.title}</h3>
                    <p className="text-zion-slate-light text-sm text-center">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Performance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`${metric.color} mb-2 flex justify-center`}>
                      <metric.icon className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-zion-slate-light text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'use-cases':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases & Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedUseCase(useCase)}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">{useCase.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{useCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text - gray - 300">{plan.description}</p>
                </div>
                
                <ul className="space - y-4 mb - 8">
                  {plan.features.map ( (feature, idx) => (<li key={idx} className="flex items - center text - gray - 300">
                      <CheckCircle className="w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0"      />
                      {feature}
                    </li>) ) }
                </ul>
                
                <button className={`w - full py - 3 px - 6 rounded - xl font - semibold transition - all duration - 300 ${plan.popular
                                                                ? 'bg - gradient - to - r from - green - 500 to - cyan - 500 text - white hover:from - green - 400 hover:to - cyan - 400'
                                                                : 'border border - green - 400 / 50 text - green - 400 hover:bg - green - 400 / 20'}`}>
                  Get Started
                </button>
              </div>) ) }
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py - 20 relative bg - gradient - to - br from - gray - 900 / 50 to - black / 50">
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
          <div className="text - center mb - 16">
            <h2 className="text - 4xl lg:text - 5xl font - bold mb - 6 bg - gradient - to - r from - green - 400 to - cyan - 400 bg - clip - text text - transparent">
              Trusted by Operations Leaders
            </h2>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              See how forward - thinking companies are transforming their operations with our autonomous platform.
            </p>
          </div>
          
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">
            {testimonials.map ( (testimonial, index) => (<div key={index} className="p - 8 rounded - 2xl bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 border border - gray - 700 / 50 hover:border - green - 500 / 30 transition - all duration - 300">
                <div className="flex items - center mb - 4">
                  <div className="text - 4xl mr - 4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text - lg font - semibold text - white">{testimonial.name}</h4>
                    <p className="text - green - 400">{testimonial.role}</p>
                    <p className="text - gray - 400 text - sm">{testimonial.comp}</p>
                  </div>
                </div>
                
                <div className="flex items - center mb - 4">
                  {[...Array (testimonial.rating) ].map ( (_, i) => (<Star key={i} className="w - 5 h - 5 text - yellow - 400 fill - current"      />) ) }
                </div>
                
                <p className="text - gray - 300 italic">"{testimonial.content}"</p>
              </div>) ) }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the future of business operations with our autonomous platform. Get in touch to learn how we can transform your business.
            </p>
            
            <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">
              <button className="px - 8 py - 4 bg - gradient - to - r from - green - 500 to - cyan - 500 text - white font - semibold rounded - xl hover:from - green - 400 hover:to - cyan - 400 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - green - 500 / 30 flex items - center">
                <Rocket className="w - 5 h - 5 mr - 2"      />
                Start Free Trial
              </button>
              <button className="px - 8 py - 4 border border - green - 400 / 50 text - green - 400 font - semibold rounded - xl hover:bg - green - 400 / 20 transition - all duration - 300 flex items - center">
                <ArrowRight className="w - 5 h - 5 mr - 2"      />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Case Modal */}
      {selectedUseCase && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-zinc-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedUseCase.title}</h3>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-zion-slate-light mb-6">{selectedUseCase.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedUseCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Link to="/contact" className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-lg text-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </Link>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="flex-1 border border-zinc-600 text-zion-slate-light py-3 px-6 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}