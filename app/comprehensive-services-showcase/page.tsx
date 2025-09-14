import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Star, BookOpen, Play, Zap, Brain, TrendingUp, Users, Target, CheckCircle, Award, DollarSign, Shield, Cloud, Database, Cpu, Globe, BarChart3, Lock, Rocket } from 'lucide-react';

export default function ComprehensiveServicesShowcase() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions that transform your business operations",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Autonomous AI Agents",
          description: "Self-managing AI systems that operate independently",
          features: ["24/7 Operation", "Self-Learning", "Decision Making", "Process Automation"],
          roi: "300%"
        },
        {
          name: "Neural Consensus AI",
          description: "Distributed AI systems that collaborate for optimal decisions",
          features: ["Multi-Agent Collaboration", "Consensus Building", "Enhanced Accuracy", "Scalable Intelligence"],
          roi: "500%"
        },
        {
          name: "Predictive Analytics",
          description: "Advanced forecasting and trend analysis",
          features: ["Market Prediction", "Customer Behavior", "Risk Assessment", "Trend Analysis"],
          roi: "250%"
        },
        {
          name: "Natural Language Processing",
          description: "AI-powered text and speech understanding",
          features: ["Document Analysis", "Sentiment Analysis", "Language Translation", "Content Generation"],
          roi: "400%"
        }
      ]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem solving",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Quantum Optimization",
          description: "Solve complex optimization problems exponentially faster",
          features: ["Logistics Optimization", "Financial Modeling", "Supply Chain", "Resource Allocation"],
          roi: "1000%"
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable security for sensitive data",
          features: ["Quantum Key Distribution", "Secure Communication", "Data Protection", "Future-Proof Security"],
          roi: "800%"
        },
        {
          name: "Quantum Machine Learning",
          description: "Quantum-enhanced AI algorithms",
          features: ["Faster Training", "Better Accuracy", "Complex Pattern Recognition", "Quantum Neural Networks"],
          roi: "600%"
        }
      ]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security measures to protect your digital assets",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "Zero-Trust Architecture",
          description: "Comprehensive security framework",
          features: ["Identity Verification", "Access Control", "Threat Detection", "Incident Response"],
          roi: "350%"
        },
        {
          name: "AI-Powered Threat Detection",
          description: "Intelligent security monitoring",
          features: ["Real-time Monitoring", "Anomaly Detection", "Automated Response", "Threat Intelligence"],
          roi: "450%"
        },
        {
          name: "Quantum-Resistant Security",
          description: "Future-proof security solutions",
          features: ["Post-Quantum Cryptography", "Advanced Encryption", "Secure Protocols", "Long-term Protection"],
          roi: "700%"
        }
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "Multi-Cloud Management",
          description: "Unified management across cloud providers",
          features: ["Cost Optimization", "Performance Monitoring", "Security Management", "Automated Scaling"],
          roi: "200%"
        },
        {
          name: "Edge Computing",
          description: "Distributed computing for low-latency applications",
          features: ["Real-time Processing", "Reduced Latency", "Bandwidth Optimization", "Local Data Processing"],
          roi: "300%"
        },
        {
          name: "DevOps Automation",
          description: "Automated development and deployment pipelines",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
          roi: "400%"
        }
      ]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform data into actionable business insights",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "Real-time Analytics",
          description: "Instant insights from live data streams",
          features: ["Live Dashboards", "Real-time Alerts", "Stream Processing", "Instant Reporting"],
          roi: "250%"
        },
        {
          name: "Business Intelligence",
          description: "Comprehensive data analysis and reporting",
          features: ["Data Visualization", "Predictive Modeling", "Trend Analysis", "Executive Dashboards"],
          roi: "300%"
        },
        {
          name: "Data Lake Solutions",
          description: "Centralized data storage and processing",
          features: ["Scalable Storage", "Data Processing", "Analytics Ready", "Cost Effective"],
          roi: "200%"
        }
      ]
    },
    {
      title: "Micro SaaS Development",
      description: "Focused software solutions for specific business needs",
      icon: Rocket,
      color: "from-pink-500 to-rose-500",
      services: [
        {
          name: "AI-Powered Tools",
          description: "Specialized AI applications for specific tasks",
          features: ["Custom Development", "AI Integration", "User-Friendly Interface", "Scalable Architecture"],
          roi: "500%"
        },
        {
          name: "API Development",
          description: "Robust APIs for system integration",
          features: ["RESTful APIs", "GraphQL", "Documentation", "Testing"],
          roi: "300%"
        },
        {
          name: "Mobile Applications",
          description: "Cross-platform mobile solutions",
          features: ["iOS & Android", "Native Performance", "Offline Capability", "Push Notifications"],
          roi: "400%"
        }
      ]
    }
  ];

  const successStats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "15,000%", label: "Average ROI", icon: TrendingUp },
    { number: "$50B+", label: "Value Generated", icon: DollarSign },
    { number: "99.9%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Comprehensive Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of AI, quantum computing, cybersecurity, and cloud solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, quantum computing, cybersecurity, cloud solutions, micro SaaS, data analytics, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI, quantum computing, cybersecurity, 
              and cloud solutions. From concept to deployment, we deliver results that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                href="/case-studies" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg flex items-center justify-center"
              >
                View Success Stories
                <Play className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions across six key areas, each designed to deliver 
              measurable business value and competitive advantage.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    <category.icon className="h-12 w-12 mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold">{category.title}</h3>
                      <p className="text-lg opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-semibold">Average ROI:</span> {service.roi}
                          </div>
                          <Link 
                            href="/contact" 
                            className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your current state, challenges, and opportunities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Development of a customized roadmap aligned with your business objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Agile development and deployment with continuous testing and optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Ongoing monitoring, maintenance, and continuous improvement for maximum value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver robust, scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & ML Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• OpenAI GPT-4 & Claude</li>
                <li>• TensorFlow & PyTorch</li>
                <li>• Hugging Face Transformers</li>
                <li>• Scikit-learn & Pandas</li>
                <li>• MLflow & Kubeflow</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud & Infrastructure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS, Azure, Google Cloud</li>
                <li>• Kubernetes & Docker</li>
                <li>• Terraform & Ansible</li>
                <li>• Prometheus & Grafana</li>
                <li>• Redis & MongoDB</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React & Next.js</li>
                <li>• Python & TypeScript</li>
                <li>• Git & GitHub Actions</li>
                <li>• Jest & Cypress</li>
                <li>• Postman & Swagger</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 500+ companies that have achieved unprecedented success with our technology solutions. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg flex items-center justify-center"
            >
              <Users className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg flex items-center justify-center"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}