import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Cpu, Eye, Brain, Shield, Zap, CheckCircle, ArrowRight, Settings, Target, Wrench, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoboticsPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Robotics",
      description: "AI-powered robots that can learn, adapt, and perform complex tasks autonomously",
      benefits: ["Machine learning integration", "Adaptive behavior", "Autonomous operation"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced visual perception for object recognition, navigation, and interaction",
      benefits: ["Object detection", "Spatial awareness", "Real-time processing"]
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Deep learning algorithms for decision-making and problem-solving",
      benefits: ["Neural networks", "Pattern recognition", "Predictive analytics"]
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Comprehensive safety protocols and fail-safe mechanisms for human-robot interaction",
      benefits: ["Collision avoidance", "Emergency stops", "Safety monitoring"]
    }
  ];

  const applications = [
    {
      title: "Industrial Automation",
      description: "Robotic systems for manufacturing, assembly, and quality control",
      icon: Settings,
      useCases: ["Assembly line automation", "Quality inspection", "Material handling"]
    },
    {
      title: "Service Robotics",
      description: "Robots for customer service, hospitality, and healthcare assistance",
      icon: Activity,
      useCases: ["Customer service", "Healthcare assistance", "Cleaning services"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Self-driving cars, drones, and autonomous mobile robots",
      icon: Target,
      useCases: ["Autonomous navigation", "Delivery systems", "Surveillance"]
    },
    {
      title: "Research & Development",
      description: "Advanced robotics for research, exploration, and innovation",
      icon: Wrench,
      useCases: ["Space exploration", "Underwater research", "Laboratory automation"]
    }
  ];

  const benefits = [
    "Increased productivity and efficiency",
    "Reduced human error and risk",
    "24/7 operation capability",
    "Consistent quality and precision",
    "Cost reduction over time",
    "Enhanced safety in hazardous environments"
  ];

  const technologies = [
    "ROS (Robot Operating System)",
    "OpenCV Computer Vision",
    "TensorFlow AI/ML",
    "Gazebo Simulation",
    "MoveIt Motion Planning",
    "PCL Point Cloud Library"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions powered by AI and machine learning. Industrial automation, service robots, and autonomous systems for modern businesses." />
        <meta name="keywords" content="robotics, AI robots, automation, industrial robots, service robots, autonomous systems" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Robotics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your operations with intelligent robotics powered by AI and machine learning. From industrial automation to service robots, we build the future of intelligent machines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our robotics solutions combine cutting-edge AI, computer vision, and mechanical engineering to deliver intelligent, autonomous systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our robotics solutions are designed for diverse industries and applications, from manufacturing to healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <app.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{app.description}</p>
                <ul className="space-y-1">
                  {app.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading robotics frameworks and AI platforms to deliver robust, intelligent solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center group">
                <div className="text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  <Bot className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-sm font-semibold text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Robotics solutions offer unprecedented opportunities for automation, efficiency, and innovation. Our systems are designed to maximize productivity while ensuring safety and reliability.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Bot className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate?</h3>
                <p className="text-gray-300 mb-6">
                  Let us help you implement robotics solutions that transform your operations and drive efficiency.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Implement Robotics Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our robotics experts to discuss how intelligent automation can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoboticsPage;