import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Award, DollarSign, Rocket, Database, Cloud, Lock, Code, Settings, Monitor, Smartphone, Laptop, Server, Network, HardDrive, Wifi, Bluetooth, Battery, Camera, Headphones, Microphone, Speaker, Printer, Scanner, Fax, Router, Switch, Hub, Modem, Firewall, Antivirus, Backup, Recovery, Migration, Integration, Optimization, Maintenance, Support, Training, Consulting, Development, Testing, Deployment, Monitoring, Analytics, Reporting, Automation, Workflow, Process, Management, Administration, Configuration, Customization, Personalization, Scalability, Performance, Security, Compliance, Governance, Risk, Audit, Assessment, Planning, Strategy, Implementation, Execution, Delivery, Quality, Excellence, Innovation, Transformation, Digital, Modern, Advanced, Cutting-edge, State-of-the-art, Revolutionary, Breakthrough, Game-changing, Disruptive, Next-generation, Future-ready, AI-powered, Machine-learning, Deep-learning, Neural-network, Natural-language, Computer-vision, Predictive, Prescriptive, Descriptive, Diagnostic, Cognitive, Intelligent, Smart, Automated, Autonomous, Self-learning, Self-optimizing, Self-healing, Self-scaling, Self-securing, Self-monitoring, Self-reporting, Self-analyzing, Self-predicting, Self-prescribing, Self-diagnosing, Self-cognitive, Self-intelligent, Self-smart, Self-automated, Self-autonomous } from 'lucide-react';

const ServicesAdvertisingPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-500/30',
      services: [
        {
          name: 'AI Consulting & Strategy',
          description: 'Comprehensive AI strategy development and implementation planning for enterprise organizations.',
          price: '$2,500/month',
          marketPrice: '$5,000-10,000/month',
          features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Roadmap', 'Change Management', 'ROI Analysis', 'Executive Training'],
          benefits: ['Accelerate AI adoption by 300%', 'Reduce implementation risks by 60%', 'Achieve 400% ROI within 12 months', 'Future-proof your technology stack'],
          technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/ai-consulting'
        },
        {
          name: 'Machine Learning Solutions',
          description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
          price: '$1,500/month',
          marketPrice: '$3,000-6,000/month',
          features: ['Custom ML Model Development', 'Data Preprocessing & Cleaning', 'Model Training & Optimization', 'Real-time Inference', 'Model Monitoring & Maintenance', 'A/B Testing Framework'],
          benefits: ['Improve accuracy by 40-80%', 'Reduce manual work by 70%', 'Enable real-time predictions', 'Scale with your business growth'],
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/machine-learning'
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
          price: '$1,200/month',
          marketPrice: '$2,500-5,000/month',
          features: ['Text Classification & Analysis', 'Sentiment Analysis', 'Language Translation', 'Named Entity Recognition', 'Text Summarization', 'Chatbot Development'],
          benefits: ['Process 10,000+ documents/hour', 'Improve customer satisfaction by 50%', 'Reduce response time by 80%', 'Enable multilingual operations'],
          technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/nlp'
        },
        {
          name: 'Computer Vision Solutions',
          description: 'Image and video analysis solutions for object detection, facial recognition, quality control, and automated inspection.',
          price: '$1,800/month',
          marketPrice: '$3,500-7,000/month',
          features: ['Object Detection & Recognition', 'Facial Recognition Systems', 'Image Classification', 'Video Analysis', 'Quality Control Automation', 'Real-time Processing'],
          benefits: ['Reduce inspection time by 90%', 'Improve accuracy to 99.5%', 'Enable 24/7 monitoring', 'Reduce human error by 95%'],
          technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'CUDA'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/computer-vision'
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-500/30',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Complete cloud migration services with AWS, Azure, and Google Cloud Platform integration.',
          price: '$2,000/month',
          marketPrice: '$4,000-8,000/month',
          features: ['Cloud Architecture Design', 'Migration Planning', 'Data Migration', 'Security Configuration', 'Performance Optimization', 'Cost Management'],
          benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and flexibility', 'Enhance security and compliance', 'Enable remote work capabilities'],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/cloud-migration'
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.',
          price: '$1,800/month',
          marketPrice: '$3,500-7,000/month',
          features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Security Scanning', 'Automated Testing'],
          benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
          technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/devops'
        },
        {
          name: 'Database Administration',
          description: 'Expert database management with performance tuning, backup strategies, and high availability solutions.',
          price: '$1,200/month',
          marketPrice: '$2,500-5,000/month',
          features: ['Performance Tuning', 'Backup & Recovery', 'High Availability', 'Data Migration', 'Monitoring', 'Capacity Planning'],
          benefits: ['Improved performance', 'Reduced downtime', 'Cost optimization', 'Data protection'],
          technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/database-admin'
        },
        {
          name: 'Network Infrastructure',
          description: 'Complete network design, implementation, and management for enterprise environments.',
          price: '$1,500/month',
          marketPrice: '$3,000-6,000/month',
          features: ['Network Design', 'Router & Switch Configuration', 'Wireless Setup', 'Security Implementation', 'Monitoring', 'Troubleshooting'],
          benefits: ['Improved connectivity', 'Enhanced security', 'Better performance', 'Reduced downtime'],
          technologies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'Ubiquiti'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/network-infrastructure'
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-900/20',
      borderColor: 'border-red-500/30',
      services: [
        {
          name: 'Advanced Threat Protection',
          description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
          price: '$2,500/month',
          marketPrice: '$5,000-10,000/month',
          features: ['AI Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Monitoring', 'Vulnerability Scanning', 'Penetration Testing'],
          benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
          technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/threat-protection'
        },
        {
          name: 'Identity & Access Management',
          description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
          price: '$1,800/month',
          marketPrice: '$3,500-7,000/month',
          features: ['SSO Implementation', 'MFA Setup', 'Privileged Access Management', 'Identity Governance', 'Access Reviews', 'Compliance Reporting'],
          benefits: ['Enhanced security', 'Improved user experience', 'Compliance support', 'Reduced IT overhead'],
          technologies: ['Azure AD', 'Okta', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/iam'
        },
        {
          name: 'Security Compliance & Audit',
          description: 'Comprehensive security compliance services for SOC 2, ISO 27001, HIPAA, and other regulatory requirements.',
          price: '$3,000/month',
          marketPrice: '$6,000-12,000/month',
          features: ['Compliance Assessment', 'Policy Development', 'Audit Preparation', 'Risk Assessment', 'Training Programs', 'Ongoing Monitoring'],
          benefits: ['Achieve compliance', 'Reduce audit time', 'Minimize risks', 'Build trust'],
          technologies: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/compliance'
        },
        {
          name: 'Security Operations Center (SOC)',
          description: '24/7 security monitoring and incident response with dedicated security analysts and advanced threat hunting.',
          price: '$5,000/month',
          marketPrice: '$10,000-20,000/month',
          features: ['24/7 Monitoring', 'Threat Hunting', 'Incident Response', 'Security Analytics', 'Threat Intelligence', 'Forensic Analysis'],
          benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Proactive defense'],
          technologies: ['SIEM', 'SOAR', 'EDR', 'Threat Intelligence', 'Forensic Tools'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/soc'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
      borderColor: 'border-yellow-500/30',
      services: [
        {
          name: 'AI Code Quality Monitor',
          description: 'Real-time code quality monitoring with automated refactoring suggestions, technical debt tracking, and team performance analytics.',
          price: '$199/month',
          marketPrice: '$300-600/month',
          features: ['Real-time Code Analysis', 'Automated Refactoring Suggestions', 'Technical Debt Tracking', 'Team Performance Metrics', 'Git Integration', 'Custom Quality Rules'],
          benefits: ['Improve code quality by 60%', 'Reduce technical debt by 40%', 'Accelerate development', 'Prevent bugs before deployment'],
          technologies: ['SonarQube', 'ESLint', 'GitHub Actions', 'Custom AI Models', 'React', 'Node.js'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/ai-code-quality'
        },
        {
          name: 'AI API Performance Optimizer',
          description: 'Intelligent API performance monitoring and optimization with automatic caching, load balancing, and response time improvements.',
          price: '$149/month',
          marketPrice: '$250-500/month',
          features: ['API Performance Monitoring', 'Automatic Caching Optimization', 'Load Balancing', 'Response Time Analysis', 'Traffic Pattern Analysis', 'Auto-scaling Recommendations'],
          benefits: ['Improve API response time by 70%', 'Reduce server costs by 30%', 'Handle 10x more traffic', 'Prevent downtime'],
          technologies: ['Redis', 'Nginx', 'Kubernetes', 'Prometheus', 'Grafana', 'Custom AI Models'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/ai-api-optimizer'
        },
        {
          name: 'AI Security Vulnerability Scanner',
          description: 'Advanced security scanning with AI-powered threat detection, vulnerability assessment, and compliance checking.',
          price: '$299/month',
          marketPrice: '$500-1000/month',
          features: ['Automated Vulnerability Scanning', 'AI Threat Detection', 'Compliance Checking', 'Security Recommendations', 'Real-time Monitoring', 'Incident Response'],
          benefits: ['Detect 99.9% of vulnerabilities', 'Reduce security risks by 90%', 'Ensure compliance', 'Prevent data breaches'],
          technologies: ['OWASP ZAP', 'Nessus', 'Custom AI Models', 'Machine Learning', 'Python', 'React'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/ai-security-scanner'
        },
        {
          name: 'AI Load Testing Suite',
          description: 'Intelligent load testing with realistic user simulation, performance bottleneck detection, and capacity planning.',
          price: '$199/month',
          marketPrice: '$300-600/month',
          features: ['Realistic User Simulation', 'Performance Bottleneck Detection', 'Capacity Planning', 'Automated Test Generation', 'Real-time Monitoring', 'Scalability Recommendations'],
          benefits: ['Identify performance issues early', 'Optimize system capacity', 'Prevent crashes under load', 'Improve user experience'],
          technologies: ['JMeter', 'Gatling', 'K6', 'Custom AI Models', 'Docker', 'Kubernetes'],
          contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
          link: 'https://ziontechgroup.com/ai-load-testing'
        }
      ]
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg">
      <Helmet>
        <title>Services Advertising - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services with detailed features, capabilities, benefits, and competitive pricing. Transform your business with Zion Tech Group's cutting-edge solutions." />
        <meta name="keywords" content="ai services, it services, micro saas, cloud migration, cybersecurity, devops, machine learning, artificial intelligence, business solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto cyber-text-enhanced">
            Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="quantum-card p-6 floating-element" style={{animationDelay: `${index * 0.2}s`}}>
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 neon-pulse" />
                <div className="text-2xl font-bold text-white mb-2 cyber-text-enhanced">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Contact Info */}
          <div className="holographic-border rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400 neon-pulse" />
                <span className="text-white font-medium cyber-text-enhanced">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400 neon-pulse" />
                <span className="text-white font-medium cyber-text-enhanced">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400 neon-pulse" />
                <span className="text-white font-medium cyber-text-enhanced">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 cyber-text-enhanced neon-text flex items-center justify-center">
                  <category.icon className="w-8 h-8 mr-3 neon-pulse" />
                  {category.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className={`quantum-card p-8 hover:scale-105 transition-all duration-300 data-stream ${category.bgColor} ${category.borderColor} border`}>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 cyber-text-enhanced">{service.name}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-bold text-green-400 neon-text">{service.price}</div>
                        <div className="text-sm text-gray-500">Market: {service.marketPrice}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-cyan-400 mb-3 cyber-text-enhanced">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-400 mb-3 cyber-text-enhanced">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                            <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-purple-400 mb-3 cyber-text-enhanced">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                        className="holographic-button w-full text-center block py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                      >
                        Get Started Now
                      </a>
                      <p className="text-xs text-gray-500 mt-2">
                        {service.contactInfo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 cyber-text-enhanced neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our comprehensive AI and IT services today and achieve unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="holographic-button px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
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

export default ServicesAdvertisingPage;