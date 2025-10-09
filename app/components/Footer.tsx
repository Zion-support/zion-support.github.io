'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager' },
    { name: 'AI Real Estate Assistant', href: '/ai-real-estate-assistant' },
    { name: 'AI Legal Document Analyzer', href: '/ai-legal-analyzer' },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare-assistant' },
    { name: 'AI Trading Bot Pro', href: '/ai-trading-bot' },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
    { name: 'AI Energy Manager', href: '/ai-energy-manager' },
    { name: 'AI Event Planner Pro', href: '/ai-event-planner' },
    { name: 'AI Learning Management', href: '/ai-learning-management' },
    { name: 'AI Restaurant Manager', href: '/ai-restaurant-manager' },
    { name: 'AI Insurance Claims', href: '/ai-insurance-claims' },
    { name: 'AI Construction Manager', href: '/ai-construction-manager' },
    { name: 'AI Travel Planner', href: '/ai-travel-planner' },
    { name: 'AI Agriculture Assistant', href: '/ai-agriculture-assistant' },
    { name: 'AI Personal Finance', href: '/ai-personal-finance' },
    { name: 'AI Language Tutor', href: '/ai-language-tutor' },
    { name: 'AI Home Security', href: '/ai-home-security' },
    { name: 'AI Pet Care', href: '/ai-pet-care' },
    { name: 'AI Wedding Planner', href: '/ai-wedding-planner' },
    { name: 'AI Mental Health Coach', href: '/ai-mental-health-coach' },
    { name: 'AI Job Matching', href: '/ai-job-matching' },
    { name: 'AI Home Automation', href: '/ai-home-automation' },
    { name: 'AI Nutrition Coach', href: '/ai-nutrition-coach' },
    { name: 'AI Car Maintenance', href: '/ai-car-maintenance' },
    { name: 'AI Garden Assistant', href: '/ai-garden-assistant' },
    { name: 'AI Sleep Optimizer', href: '/ai-sleep-optimizer' },
    { name: 'AI Time Management', href: '/ai-time-management' },
    { name: 'AI Dating Assistant', href: '/ai-dating-assistant' },
    { name: 'AI Study Assistant', href: '/ai-study-assistant' },
    { name: 'AI Investment Manager', href: '/ai-investment-manager' },
    { name: 'AI Personal Stylist', href: '/ai-personal-stylist' },
    { name: 'AI Energy Auditor', href: '/ai-energy-auditor' },
    { name: 'AI Personal Chef', href: '/ai-personal-chef' },
    { name: 'AI Personal Trainer', href: '/ai-personal-trainer' },
    { name: 'AI Translator Pro', href: '/ai-translator-pro' },
    { name: 'AI Personal Assistant', href: '/ai-personal-assistant-pro' },
    { name: 'AI Weather Intelligence', href: '/ai-weather-intelligence' },
    { name: 'AI Personal Shopper', href: '/ai-personal-shopper' },
    { name: 'AI Home Maintenance', href: '/ai-home-maintenance' },
    { name: 'AI Personal Brand Manager', href: '/ai-personal-brand-manager' },
    { name: 'AI Pet Health Monitor', href: '/ai-pet-health-monitor' },
    { name: 'AI Finance Advisor', href: '/ai-finance-advisor' },
    { name: 'AI Personal Development', href: '/ai-personal-development' },
    { name: 'AI Personal Security', href: '/ai-personal-security' },
    { name: 'AI Memory Assistant', href: '/ai-memory-assistant' },
    { name: 'AI Relationship Coach', href: '/ai-relationship-coach' },
    { name: 'AI Creativity Assistant', href: '/ai-creativity-assistant' },
    { name: 'AI Productivity Suite', href: '/ai-productivity-suite' },
    { name: 'AI Wellness Coach', href: '/ai-wellness-coach' },
    { name: 'AI Learning Accelerator', href: '/ai-learning-accelerator' },
    { name: 'AI Success Coach', href: '/ai-success-coach' },
    { name: 'AI Innovation Lab', href: '/ai-innovation-lab' },
    { name: 'AI Legacy Builder', href: '/ai-legacy-builder' },
    { name: 'AI Transformation Engine', href: '/ai-transformation-engine' },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Quantum AI Computing', href: '/quantum-ai-computing' },
    { name: 'Autonomous Systems AI', href: '/autonomous-systems-ai' },
    { name: 'AI Drug Discovery', href: '/ai-drug-discovery' },
    { name: 'AI Climate Intelligence', href: '/ai-climate-intelligence' },
    { name: 'AI Space Technology', href: '/ai-space-technology' },
    { name: 'AI Brain-Computer Interface', href: '/ai-brain-computer-interface' },
    { name: 'AI Metaverse Platform', href: '/ai-metaverse-platform' },
    { name: 'AI Nanotechnology', href: '/ai-nanotechnology' },
    { name: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing' },
    { name: 'AI Blockchain Intelligence', href: '/ai-blockchain-intelligence' },
    { name: 'AI Augmented Reality', href: '/ai-augmented-reality' },
    { name: 'AI Virtual Reality', href: '/ai-virtual-reality' },
    { name: 'AI Robotics Control', href: '/ai-robotics-control' },
    { name: 'AI Swarm Intelligence', href: '/ai-swarm-intelligence' },
    { name: 'AI Cognitive Computing', href: '/ai-cognitive-computing' },
    { name: 'AI Explainable Intelligence', href: '/ai-explainable-intelligence' },
    { name: 'AI Federated Learning', href: '/ai-federated-learning' },
    { name: 'AI Transfer Learning', href: '/ai-transfer-learning' },
    { name: 'AI Reinforcement Learning', href: '/ai-reinforcement-learning' },
    { name: 'AI Generative Models', href: '/ai-generative-models' },
    { name: 'AI Multimodal Learning', href: '/ai-multimodal-learning' },
    { name: 'AI Self-Supervised Learning', href: '/ai-self-supervised-learning' },
    { name: 'AI Continual Learning', href: '/ai-continual-learning' },
    { name: 'AI Few-Shot Learning', href: '/ai-few-shot-learning' },
    { name: 'AI Adversarial Learning', href: '/ai-adversarial-learning' },
    { name: 'AI Neuromorphic Computing', href: '/ai-neuromorphic-computing' },
    { name: 'AI Causal Inference', href: '/ai-causal-inference' },
    { name: 'AI Graph Neural Networks', href: '/ai-graph-neural-networks' },
    { name: 'AI Attention Mechanisms', href: '/ai-attention-mechanisms' },
    { name: 'AI Memory Networks', href: '/ai-memory-networks' },
    { name: 'AI Capsule Networks', href: '/ai-capsule-networks' },
    { name: 'AI Transformer Networks', href: '/ai-transformer-networks' },
    { name: 'AI Diffusion Models', href: '/ai-diffusion-models' },
    { name: 'AI Large Language Models', href: '/ai-large-language-models' },
    { name: 'AI Vision Transformers', href: '/ai-vision-transformers' },
    { name: 'AI Audio Intelligence', href: '/ai-audio-intelligence' },
    { name: 'AI Video Intelligence', href: '/ai-video-intelligence' },
    { name: 'AI Sensor Fusion', href: '/ai-sensor-fusion' },
    { name: 'AI Edge Intelligence', href: '/ai-edge-intelligence' },
    { name: 'AI Cloud Intelligence', href: '/ai-cloud-intelligence' },
    { name: 'AI Hybrid Intelligence', href: '/ai-hybrid-intelligence' },
    { name: 'AI Responsible Intelligence', href: '/ai-responsible-intelligence' },
    { name: 'AI Sustainable Intelligence', href: '/ai-sustainable-intelligence' },
    { name: 'AI Quantum Intelligence', href: '/ai-quantum-intelligence' },
    { name: 'AI Autonomous Intelligence', href: '/ai-autonomous-intelligence' },
    { name: 'AI Superintelligence', href: '/ai-superintelligence' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Edge Computing', href: '/edge-computing' },
    { name: '5G Networks', href: '/5g-networks' },
    { name: 'Autonomous Infrastructure', href: '/autonomous-infrastructure' },
    { name: 'Smart Cities', href: '/smart-cities' },
    { name: 'Space Technology', href: '/space-technology' },
    { name: 'Biometric Security', href: '/biometric-security' },
    { name: 'Holographic Technology', href: '/holographic-technology' },
    { name: 'Neural Interfaces', href: '/neural-interfaces' },
    { name: 'Quantum Internet', href: '/quantum-internet' },
    { name: 'AR Infrastructure', href: '/ar-infrastructure' },
    { name: 'VR Infrastructure', href: '/vr-infrastructure' },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure' },
    { name: 'AI Hardware', href: '/ai-hardware' },
    { name: 'IoT Infrastructure', href: '/iot-infrastructure' },
    { name: 'Digital Twins', href: '/digital-twins' },
    { name: 'RPA Infrastructure', href: '/rpa-infrastructure' },
    { name: 'Microservices', href: '/microservices' },
    { name: 'Serverless Computing', href: '/serverless-computing' },
    { name: 'HPC Infrastructure', href: '/hpc-infrastructure' },
    { name: 'Data Lake', href: '/data-lake' },
    { name: 'Real-time Analytics', href: '/real-time-analytics' },
    { name: 'CDN Infrastructure', href: '/cdn-infrastructure' },
    { name: 'API Management', href: '/api-management' },
    { name: 'IAM Infrastructure', href: '/iam-infrastructure' },
    { name: 'Disaster Recovery', href: '/disaster-recovery' },
    { name: 'Compliance Infrastructure', href: '/compliance-infrastructure' },
    { name: 'Zero Trust Security', href: '/zero-trust-security' },
    { name: 'Hybrid Cloud', href: '/hybrid-cloud' },
    { name: 'Multi-Cloud', href: '/multi-cloud' },
    { name: 'Edge AI', href: '/edge-ai' },
    { name: 'Quantum Security', href: '/quantum-security' },
    { name: 'Autonomous Infrastructure', href: '/autonomous-infrastructure' },
    { name: 'Sustainable IT', href: '/sustainable-it' },
    { name: 'Next-Gen Data Centers', href: '/next-gen-data-centers' },
    { name: 'Space Computing', href: '/space-computing' },
    { name: 'Neuromorphic Computing', href: '/neuromorphic-computing' },
    { name: 'Optical Computing', href: '/optical-computing' },
    { name: 'DNA Storage', href: '/dna-storage' },
    { name: 'Holographic Storage', href: '/holographic-storage' },
    { name: 'Molecular Computing', href: '/molecular-computing' },
    { name: 'Biological Computing', href: '/biological-computing' },
    { name: 'Quantum Biological Computing', href: '/quantum-biological-computing' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <address className="text-gray-300 not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 neon-text">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Micro SAAS Solutions</h3>
            <ul className="space-y-2">
              {microSAASServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">AI & IT Services</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-green-300 mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 3).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Transforming businesses with cutting-edge AI and IT solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
