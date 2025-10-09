import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Cpu, Eye, Brain, Shield, Zap, Target, BarChart, Settings, CheckCircle, ArrowRight, Star, Users, Award, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, FileText, Search, Code, Cloud, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const RoboticsPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Robotics",
      description: "Advanced robotic systems with AI-powered decision making and autonomous operation capabilities.",
      benefits: ["Autonomous Operation", "AI Decision Making", "Adaptive Learning", "Human-Robot Collaboration"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced vision systems that enable robots to see, recognize, and interact with their environment.",
      benefits: ["Object Recognition", "Spatial Awareness", "Quality Inspection", "Navigation"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Self-learning robotic systems that improve performance through experience and data analysis.",
      benefits: ["Pattern Recognition", "Predictive Maintenance", "Optimization", "Continuous Learning"]
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Comprehensive safety protocols and systems to ensure safe human-robot interaction.",
      benefits: ["Collision Avoidance", "Emergency Stops", "Safety Sensors", "Risk Assessment"]
    }
  ];

  const solutions = [
    {
      title: "Industrial Automation",
      description: "Robotic systems for manufacturing, assembly, and production line automation with precision and efficiency.",
      icon: Settings,
      benefits: ["Precision Assembly", "Quality Control", "Production Optimization", "24/7 Operation"],
      useCases: ["Assembly Lines", "Welding", "Painting", "Packaging", "Material Handling"]
    },
    {
      title: "Service Robotics",
      description: "Intelligent service robots for customer interaction, hospitality, and support operations.",
      icon: Users,
      benefits: ["Customer Service", "Hospitality", "Cleaning", "Security", "Reception"],
      useCases: ["Reception Robots", "Cleaning Robots", "Security Patrols", "Delivery Systems"]
    },
    {
      title: "Healthcare Robotics",
      description: "Medical robots for surgery, rehabilitation, patient care, and medical assistance.",
      icon: Shield,
      benefits: ["Surgical Precision", "Rehabilitation", "Patient Care", "Medical Assistance"],
      useCases: ["Surgical Robots", "Rehabilitation", "Patient Monitoring", "Medical Transport"]
    },
    {
      title: "Agricultural Robotics",
      description: "Smart farming robots for planting, harvesting, monitoring, and agricultural automation.",
      icon: Target,
      benefits: ["Precision Farming", "Crop Monitoring", "Automated Harvesting", "Soil Analysis"],
      useCases: ["Planting Robots", "Harvesting", "Crop Monitoring", "Weed Control"]
    }
  ];

  const technologies = [
    {
      name: "AI & Machine Learning",
      description: "Intelligent algorithms for decision making and learning",
      features: ["Neural Networks", "Deep Learning", "Reinforcement Learning", "Computer Vision"]
    },
    {
      name: "Sensors & Actuators",
      description: "Advanced sensors and actuators for precise control and feedback",
      features: ["Vision Systems", "Force Sensors", "Position Sensors", "Environmental Sensors"]
    },
    {
      name: "Control Systems",
      description: "Real-time control systems for precise robot movement and operation",
      features: ["Real-time Control", "Motion Planning", "Trajectory Control", "Feedback Systems"]
    },
    {
      name: "Human-Robot Interaction",
      description: "Natural interaction interfaces between humans and robots",
      features: ["Voice Recognition", "Gesture Control", "Touch Interfaces", "Collaborative Workspaces"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Robotic automation significantly increases productivity and operational efficiency.",
      metric: "300%"
    },
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Robots handle dangerous tasks, reducing workplace injuries and improving safety.",
      metric: "90%"
    },
    {
      icon: Target,
      title: "Precision & Quality",
      description: "Consistent precision and quality in manufacturing and service operations.",
      metric: "99.9%"
    },
    {
      icon: Zap,
      title: "24/7 Operation",
      description: "Continuous operation without breaks, maximizing production and service availability.",
      metric: "24/7"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: Settings,
      applications: ["Assembly Lines", "Quality Control", "Material Handling", "Welding"]
    },
    {
      name: "Healthcare",
      icon: Shield,
      applications: ["Surgical Robots", "Rehabilitation", "Patient Care", "Medical Transport"]
    },
    {
      name: "Agriculture",
      icon: Target,
      applications: ["Planting", "Harvesting", "Crop Monitoring", "Weed Control"]
    },
    {
      name: "Logistics",
      icon: Globe,
      applications: ["Warehouse Automation", "Sorting", "Picking", "Delivery"]
    },
    {
      name: "Hospitality",
      icon: Users,
      applications: ["Customer Service", "Cleaning", "Security", "Reception"]
    },
    {
      name: "Construction",
      icon: Wrench,
      applications: ["Heavy Lifting", "Precision Work", "Safety Tasks", "Inspection"]
    }
  ];

  const roboticCapabilities = [
    {
      title: "Autonomous Navigation",
      description: "Self-navigating robots that can move independently in complex environments",
      icon: Globe,
      benefits: ["Path Planning", "Obstacle Avoidance", "Dynamic Mapping", "Multi-floor Navigation"]
    },
    {
      title: "Object Manipulation",
      description: "Precise handling and manipulation of objects with various shapes and sizes",
      icon: Target,
      benefits: ["Grasping", "Lifting", "Sorting", "Assembly"]
    },
    {
      title: "Quality Inspection",
      description: "Automated quality control and inspection using advanced vision systems",
      icon: Eye,
      benefits: ["Defect Detection", "Measurement", "Classification", "Documentation"]
    },
    {
      title: "Collaborative Operation",
      description: "Safe human-robot collaboration in shared workspaces",
      icon: Users,
      benefits: ["Safety Sensors", "Adaptive Behavior", "Task Sharing", "Human Guidance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions with AI-powered automation, intelligent systems, and human-robot collaboration. Transform your operations with cutting-edge robotic technology." />
        <meta name="keywords" content="robotics, AI robots, automation, intelligent systems, human-robot collaboration, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionary robotic systems powered by AI and machine learning. Intelligent automation that transforms operations, enhances productivity, and enables human-robot collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/consultation"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced robotic capabilities that enable intelligent automation and seamless human-robot collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Robotic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive robotic solutions tailored to your industry and operational requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <solution.icon className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-cyan-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robotic Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Robotic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced robotic capabilities that enable complex tasks and intelligent automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roboticCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <capability.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering our robotic solutions for maximum performance and intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Robotic solutions across various industries transforming operations and creating new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <industry.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your operations with robotic solutions that deliver measurable results and competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <benefit.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotic</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your operations with intelligent robotic solutions that automate tasks, enhance productivity, and enable human-robot collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoboticsPage;