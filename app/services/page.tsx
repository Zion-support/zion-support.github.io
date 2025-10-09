'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { 
          name: 'AI Consulting & Strategy', 
          price: '$2,500/month', 
          marketPrice: '$5,000-10,000/month',
          description: 'Comprehensive AI strategy development and implementation planning with proven ROI of 300%+', 
          features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Executive Training', 'Change Management'],
          benefits: ['Accelerate AI adoption by 300%', 'Reduce implementation risks by 60%', 'Achieve 400% ROI within 12 months', 'Future-proof your technology stack'],
          technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing']
        },
        { 
          name: 'Machine Learning Solutions', 
          price: '$1,500/month', 
          marketPrice: '$3,000-6,000/month',
          description: 'Custom ML models for predictive analytics and decision-making with 99.9% accuracy', 
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Real-time Inference'],
          benefits: ['Improve accuracy by 40-80%', 'Reduce manual work by 70%', 'Enable real-time predictions', 'Scale with your business growth'],
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
        },
        { 
          name: 'Natural Language Processing', 
          price: '$1,200/month', 
          marketPrice: '$2,500-5,000/month',
          description: 'Advanced NLP solutions for text analysis and language understanding with 50+ language support', 
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Named Entity Recognition', 'Text Summarization'],
          benefits: ['Process 10,000+ documents/hour', 'Improve customer satisfaction by 50%', 'Reduce response time by 80%', 'Enable multilingual operations'],
          technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face']
        },
        { 
          name: 'Computer Vision', 
          price: '$1,800/month', 
          marketPrice: '$3,500-7,000/month',
          description: 'Image and video analysis solutions for object detection and recognition with 99.5% accuracy', 
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Real-time Processing'],
          benefits: ['Reduce inspection time by 90%', 'Improve accuracy to 99.5%', 'Enable 24/7 monitoring', 'Reduce human error by 95%'],
          technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'CUDA']
        },
        { 
          name: 'AI Automation', 
          price: '$1,400/month', 
          marketPrice: '$2,500-5,000/month',
          description: 'Intelligent process automation with decision-making capabilities and 99.9% accuracy', 
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Implementation', 'Performance Monitoring'],
          benefits: ['Automate 80% of repetitive tasks', 'Reduce processing time by 70%', 'Improve accuracy to 99.9%', 'Free up staff for strategic work'],
          technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines']
        },
        { 
          name: 'AI Chatbots', 
          price: '$800/month', 
          marketPrice: '$1,500-3,000/month',
          description: 'Intelligent conversational AI for customer service and support with 24/7 availability', 
          features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Intent Recognition', 'Human Handoff'],
          benefits: ['Handle 80% of customer queries', 'Reduce response time to seconds', 'Available 24/7/365', 'Improve customer satisfaction'],
          technologies: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'OpenAI GPT', 'Webhooks', 'APIs']
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { 
          name: 'IT Infrastructure', 
          price: '$999/month', 
          marketPrice: '$2,000-4,000/month',
          description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 monitoring', 
          features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions', 'Disaster Recovery', 'Performance Monitoring'],
          benefits: ['99.9% uptime guarantee', 'Reduce IT costs by 40%', 'Improve system performance', 'Ensure business continuity'],
          technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Cisco', 'Fortinet']
        },
        { 
          name: 'Cloud Services', 
          price: '$1,299/month', 
          marketPrice: '$2,500-5,000/month',
          description: 'Cloud migration, setup, and optimization services with 50% cost reduction guarantee', 
          features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Multi-cloud Strategy'],
          benefits: ['Reduce cloud costs by 50%', 'Improve scalability', 'Enhance security posture', 'Enable remote work'],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
        },
        { 
          name: 'Cybersecurity', 
          price: '$1,599/month', 
          marketPrice: '$3,000-6,000/month',
          description: 'Advanced security solutions with threat detection and prevention, 99.9% threat detection rate', 
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Security Training'],
          benefits: ['Detect 99.9% of threats', 'Reduce security incidents by 90%', 'Ensure compliance', 'Protect sensitive data'],
          technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'MFA', 'Zero Trust']
        },
        { 
          name: 'DevOps & CI/CD', 
          price: '$1,199/month', 
          marketPrice: '$2,000-4,000/month',
          description: 'Streamlined development workflows with automated testing and deployment, 80% faster releases', 
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps'],
          benefits: ['Deploy 80% faster', 'Reduce deployment errors by 95%', 'Improve code quality', 'Enable continuous delivery'],
          technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Ansible']
        },
        { 
          name: 'Database Services', 
          price: '$899/month', 
          marketPrice: '$1,500-3,000/month',
          description: 'Database design, optimization, and management with AI-powered tuning and 99.9% availability', 
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Monitoring'],
          benefits: ['Improve performance by 60%', 'Ensure 99.9% availability', 'Reduce maintenance costs', 'Secure sensitive data'],
          technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server']
        },
        { 
          name: 'Network Services', 
          price: '$1,099/month', 
          marketPrice: '$2,000-4,000/month',
          description: 'Network design, implementation, and monitoring solutions with 99.9% uptime', 
          features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security', 'Performance Optimization'],
          benefits: ['Ensure 99.9% uptime', 'Improve network performance', 'Reduce downtime', 'Enhance security'],
          technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'SD-WAN', 'WiFi 6']
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { 
          name: 'AI Voice Cloning', 
          price: '$99/month', 
          marketPrice: '$200-400/month',
          description: 'Create natural-sounding voice clones with 99.9% accuracy for content creation and accessibility', 
          features: ['Voice Synthesis', 'Custom Training', 'Real-time Conversion', 'Multi-format Export', 'Emotion Control', 'Multi-language Support'],
          benefits: ['Create personalized voice assistants', 'Improve accessibility', 'Enhance user experience', 'Reduce voice production costs'],
          technologies: ['Tacotron', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning', 'Custom Neural Networks']
        },
        { 
          name: 'AI 3D Generation', 
          price: '$199/month', 
          marketPrice: '$400-800/month',
          description: 'Generate high-quality 3D models from text, images, or sketches for gaming and visualization', 
          features: ['3D Model Generation', 'Automatic Texturing', 'Model Optimization', 'Multi-format Export', 'Procedural Content', 'VR/AR Integration'],
          benefits: ['Accelerate 3D content creation', 'Reduce production costs', 'Improve visual quality', 'Enable rapid prototyping'],
          technologies: ['NeRF', '3D GANs', 'Blender API', 'Unity Integration', 'Custom 3D Models']
        },
        { 
          name: 'AI Music Composition', 
          price: '$149/month', 
          marketPrice: '$300-600/month',
          description: 'Create original music compositions in any genre with AI-powered arrangement and mastering', 
          features: ['Music Generation', 'Intelligent Arrangement', 'Mastering & Mixing', 'Custom Training', 'Multi-genre Support', 'Royalty-free Output'],
          benefits: ['Create content 5x faster', 'Reduce music production costs', 'Explore new musical styles', 'Generate unlimited content'],
          technologies: ['MuseNet', 'Jukebox', 'Magenta', 'MIDI Processing', 'Custom Music Models']
        },
        { 
          name: 'AI Video Generation', 
          price: '$299/month', 
          marketPrice: '$600-1,200/month',
          description: 'Generate professional videos from text, images, or audio with advanced scene synthesis', 
          features: ['Video Generation', 'Scene Synthesis', 'Motion Transfer', 'Style Transfer', 'Multi-resolution', 'Real-time Processing'],
          benefits: ['Create professional videos', 'Reduce production time', 'Lower video production costs', 'Enable rapid content creation'],
          technologies: ['DALL-E Video', 'Runway ML', 'Stable Video Diffusion', 'OpenCV', 'Custom Video Models']
        },
        { 
          name: 'AI Code Generation', 
          price: '$99/month', 
          marketPrice: '$200-400/month',
          description: 'Generate high-quality code from natural language with automatic documentation and bug fixing', 
          features: ['Code Generation', 'Documentation Generation', 'Code Optimization', 'Bug Detection & Fixing', 'Multi-language Support', 'Git Integration'],
          benefits: ['Generate code 10x faster', 'Reduce coding errors', 'Improve code quality', 'Accelerate development'],
          technologies: ['GitHub Copilot', 'CodeT5', 'CodeBERT', 'Custom Code Models', 'IDE Integration']
        },
        { 
          name: 'AI Game Development', 
          price: '$199/month', 
          marketPrice: '$400-800/month',
          description: 'Create games with AI-generated assets, intelligent NPCs, and procedural content', 
          features: ['Asset Generation', 'Intelligent NPCs', 'Procedural Content', 'Game Balancing', 'Multi-platform Support', 'Engine Integration'],
          benefits: ['Accelerate game development', 'Create unique content', 'Improve player experience', 'Reduce development costs'],
          technologies: ['Unity ML-Agents', 'Unreal Engine AI', 'Procedural Generation', 'Custom Game AI', 'Reinforcement Learning']
        },
        { 
          name: 'AI Fashion Design', 
          price: '$299/month', 
          marketPrice: '$600-1,200/month',
          description: 'Generate unique fashion designs, predict trends, and enable virtual try-on experiences', 
          features: ['Fashion Design', 'Trend Prediction', 'Virtual Try-On', 'Color Matching', 'Style Transfer', 'Market Analysis'],
          benefits: ['Create designs 10x faster', 'Predict trends with 95% accuracy', 'Reduce design costs', 'Enable virtual shopping'],
          technologies: ['FashionGAN', 'Virtual Try-On', 'Trend Analysis', 'Computer Vision', 'Custom Fashion Models']
        },
        { 
          name: 'AI SEO Optimizer', 
          price: '$299/month', 
          marketPrice: '$500-1,000/month',
          description: 'AI-powered SEO analysis and optimization with 150% traffic increase guarantee', 
          features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking', 'Performance Monitoring'],
          benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 25+ hours/week', 'Beat competitors'],
          technologies: ['Google Search Console API', 'Ahrefs API', 'OpenAI GPT', 'React', 'Node.js']
        },
        { 
          name: 'AI Analytics Dashboard', 
          price: '$399/month', 
          marketPrice: '$800-1,500/month',
          description: 'Business intelligence and analytics with AI insights and predictive analytics', 
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Integration', 'Mobile Access'],
          benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends early', 'Improve forecasting'],
          technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL']
        },
        { 
          name: 'AI Marketing Automation', 
          price: '$249/month', 
          marketPrice: '$500-1,000/month',
          description: 'Marketing automation and campaign optimization with 50% conversion increase', 
          features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing', 'Personalization', 'Analytics'],
          benefits: ['Increase conversion by 50%', 'Save 20 hours/week', 'Improve targeting', 'Optimize campaigns'],
          technologies: ['SendGrid', 'Mailchimp API', 'Machine Learning', 'React', 'Node.js']
        },
        { 
          name: 'AI Document Processing', 
          price: '$179/month', 
          marketPrice: '$300-600/month',
          description: 'Intelligent document analysis and data extraction with 95% accuracy', 
          features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Form Processing', 'Compliance'],
          benefits: ['Process documents 10x faster', 'Improve accuracy to 95%', 'Reduce manual work', 'Ensure compliance'],
          technologies: ['OCR', 'Machine Learning', 'NLP', 'Computer Vision', 'Workflow Engines']
        },
        { 
          name: 'AI Customer Support Bot', 
          price: '$149/month', 
          marketPrice: '$300-600/month',
          description: 'Automated customer support and ticket management with 80% query resolution', 
          features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management', 'Multi-channel', 'Analytics'],
          benefits: ['Handle 80% of queries', 'Reduce response time', 'Available 24/7', 'Improve satisfaction'],
          technologies: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'OpenAI GPT', 'Webhooks']
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { 
          name: 'Quantum Computing', 
          price: 'Custom', 
          marketPrice: '$10,000-50,000/month',
          description: 'Next-generation quantum algorithms and quantum security implementations with breakthrough performance', 
          features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Quantum Cryptography'],
          benefits: ['Solve complex problems exponentially faster', 'Enable unbreakable encryption', 'Revolutionize drug discovery', 'Transform financial modeling'],
          technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Rigetti Forest', 'Custom Quantum Hardware']
        },
        { 
          name: 'Autonomous Systems', 
          price: 'Custom', 
          marketPrice: '$5,000-25,000/month',
          description: 'Self-managing and self-optimizing systems for enterprise operations with 99.9% reliability', 
          features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Fault Tolerance'],
          benefits: ['Reduce downtime by 90%', 'Optimize resource usage', 'Enable autonomous operations', 'Improve system reliability'],
          technologies: ['Machine Learning', 'IoT Sensors', 'Edge Computing', 'Predictive Analytics', 'Custom AI Models']
        },
        { 
          name: 'Blockchain & Web3', 
          price: '$1,999/month', 
          marketPrice: '$4,000-8,000/month',
          description: 'Decentralized solutions, smart contracts, and Web3 applications with enterprise-grade security', 
          features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Governance'],
          benefits: ['Enable decentralized applications', 'Reduce transaction costs', 'Increase transparency', 'Create new business models'],
          technologies: ['Ethereum', 'Polygon', 'Solana', 'Web3.js', 'Solidity', 'IPFS']
        },
        { 
          name: 'IoT & Edge Computing', 
          price: '$1,499/month', 
          marketPrice: '$3,000-6,000/month',
          description: 'Connected devices and edge computing solutions with real-time processing and analytics', 
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Streaming', 'Predictive Maintenance'],
          benefits: ['Enable real-time insights', 'Reduce latency by 90%', 'Improve operational efficiency', 'Enable autonomous systems'],
          technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Kubernetes', 'MQTT', 'Edge AI']
        },
        { 
          name: 'Business Intelligence', 
          price: '$1,799/month', 
          marketPrice: '$3,500-7,000/month',
          description: 'Data-driven insights and predictive analytics for decision-making with 40% faster decisions', 
          features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
          benefits: ['Increase decision speed by 40%', 'Improve forecasting accuracy', 'Enable data-driven culture', 'Reduce manual reporting'],
          technologies: ['Tableau', 'Power BI', 'Apache Spark', 'Python', 'R', 'SQL']
        },
        { 
          name: 'Robotics Solutions', 
          price: 'Custom', 
          marketPrice: '$5,000-20,000/month',
          description: 'Intelligent robotic solutions for manufacturing and service industries with 95% efficiency improvement', 
          features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Automation'],
          benefits: ['Improve efficiency by 95%', 'Reduce human error', 'Enable 24/7 operations', 'Enhance product quality'],
          technologies: ['ROS', 'OpenCV', 'TensorFlow', 'Industrial Robots', 'Computer Vision', 'Machine Learning']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, automation, cloud infrastructure, and specialized solutions. Starting at $99/month." />
        <meta name="keywords" content="ai services, it services, machine learning, automation, cloud services, cybersecurity, micro saas, specialized solutions" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations and drive innovation.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$99</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Service Categories
          </h2>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">Comprehensive solutions for your business needs</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      
                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          {service.marketPrice && (
                            <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                          )}
                        </div>
                        {service.marketPrice && (
                          <div className="text-xs text-green-400 font-medium">
                            Save up to 50% vs market rate
                          </div>
                        )}
                      </div>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-xs text-gray-400">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Benefits */}
                      {service.benefits && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                                <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                            {service.benefits.length > 2 && (
                              <li className="text-xs text-gray-400">
                                +{service.benefits.length - 2} more benefits
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {service.technologies && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-1">
                            {service.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                            {service.technologies.length > 3 && (
                              <span className="text-xs text-gray-400">
                                +{service.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        >
                          Get Started
                        </a>
                        <a
                          href={`tel:+13024640950`}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our services today and see the difference AI and IT solutions can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
