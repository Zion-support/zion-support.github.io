import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Bot, Cpu, Target, Globe, Brain, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Settings, Database, Smartphone, Lock, FileText, Search, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousSolutions = [
    {
      icon: Car,
      title: "Autonomous Vehicles",
      description: "Self-driving cars and transportation systems with advanced AI navigation and safety protocols.",
      features: ["Real-time Navigation", "Collision Avoidance", "Traffic Optimization", "Predictive Maintenance"],
      applications: ["Fleet Management", "Public Transportation", "Logistics", "Personal Vehicles"]
    },
    {
      icon: Factory,
      title: "Smart Manufacturing",
      description: "Intelligent manufacturing systems that adapt and optimize production processes autonomously.",
      features: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Energy Management"],
      applications: ["Production Lines", "Quality Assurance", "Inventory Management", "Equipment Monitoring"]
    },
    {
      icon: Home,
      title: "Smart Buildings",
      description: "Autonomous building management systems that optimize energy, security, and comfort.",
      features: ["Energy Optimization", "Climate Control", "Security Monitoring", "Occupancy Management"],
      applications: ["Office Buildings", "Residential Complexes", "Retail Spaces", "Industrial Facilities"]
    },
    {
      icon: Bot,
      title: "Service Robots",
      description: "Intelligent robots that perform tasks autonomously in various service environments.",
      features: ["Task Planning", "Human Interaction", "Environment Adaptation", "Learning Capabilities"],
      applications: ["Customer Service", "Healthcare Assistance", "Cleaning Services", "Delivery Systems"]
    },
    {
      icon: Globe,
      title: "Smart Cities",
      description: "City-wide autonomous systems that manage traffic, utilities, and public services.",
      features: ["Traffic Management", "Utility Optimization", "Emergency Response", "Resource Allocation"],
      applications: ["Traffic Control", "Waste Management", "Public Safety", "Environmental Monitoring"]
    },
    {
      icon: Stethoscope,
      title: "Autonomous Healthcare",
      description: "Self-managing healthcare systems that monitor, diagnose, and treat patients autonomously.",
      features: ["Patient Monitoring", "Diagnostic Assistance", "Treatment Planning", "Drug Administration"],
      applications: ["Hospitals", "Nursing Homes", "Home Care", "Emergency Response"]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced algorithms that enable systems to learn and improve from experience.",
      icon: Brain
    },
    {
      name: "Computer Vision",
      description: "AI-powered visual recognition and processing capabilities.",
      icon: Eye
    },
    {
      name: "Natural Language Processing",
      description: "Understanding and generating human language for seamless interaction.",
      icon: MessageSquare
    },
    {
      name: "Sensor Fusion",
      description: "Combining data from multiple sensors for comprehensive environmental awareness.",
      icon: Activity
    },
    {
      name: "Edge Computing",
      description: "Processing data locally for real-time decision making and reduced latency.",
      icon: Cpu
    },
    {
      name: "Blockchain",
      description: "Secure, decentralized systems for autonomous operations and data integrity.",
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Autonomous systems operate 24/7 with optimal performance and minimal human intervention."
    },
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Advanced safety protocols and real-time monitoring reduce risks and accidents."
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Automated operations reduce labor costs and improve resource utilization."
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "Consistent, accurate performance without human error or fatigue."
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "Systems that can adapt and scale based on changing requirements and demands."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy autonomous systems across multiple locations and time zones."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Develop self-managing systems and autonomous solutions with Zion Tech Group. From autonomous vehicles to smart manufacturing, we build intelligent systems that work independently." />
        <meta name="keywords" content="autonomous systems, self-managing systems, AI automation, autonomous vehicles, smart manufacturing, intelligent systems" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Autonomous Systems
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Build the future with self-managing systems that operate independently, 
                adapt to changing conditions, and deliver optimal performance without human intervention.
              </p>
            </div>
          </section>

          {/* Autonomous Solutions */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Autonomous Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive autonomous systems for every industry</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {autonomousSolutions.map((solution, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Applications</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Core Technologies</h2>
              <p className="text-xl text-gray-300">Advanced technologies powering our autonomous systems</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <tech.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Autonomous Systems?</h2>
              <p className="text-xl text-gray-300">The advantages of implementing autonomous solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Process */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>
              <p className="text-xl text-gray-300">How we build and deploy autonomous systems</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analysis & Planning</h3>
                <p className="text-gray-300">Assess your current systems and define autonomous requirements.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design & Development</h3>
                <p className="text-gray-300">Create custom autonomous systems tailored to your needs.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Testing & Validation</h3>
                <p className="text-gray-300">Rigorous testing to ensure safety and reliability.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment & Support</h3>
                <p className="text-gray-300">Deploy and provide ongoing support and maintenance.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Autonomous Systems?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how autonomous systems can transform your business operations 
                and create new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AutonomousSystemsPage;