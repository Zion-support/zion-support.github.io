import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Wifi, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Users,
  Award,
  Rocket,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  MessageSquare,
  Mail,
  FileText,
  Palette,
  Building,
  Leaf,
  Coins,
  UserCheck,
  Scale
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-cyan-500 to-blue-600',
      description: 'Revolutionary AI solutions for modern businesses',
      services: [
        { 
          name: 'AI Analytics Dashboard Pro', 
          href: '/ai-analytics-dashboard-pro', 
          price: 'From $299/month',
          features: ['Real-time insights', 'Predictive analytics', 'Custom dashboards', 'Data visualization'],
          description: 'Advanced AI-powered analytics platform with real-time data processing and predictive insights.'
        },
        { 
          name: 'AI Content Generation Pro', 
          href: '/ai-content-generation-pro', 
          price: 'From $199/month',
          features: ['Blog posts', 'Social media content', 'Marketing copy', 'SEO optimization'],
          description: 'Generate high-quality, SEO-optimized content for all your marketing needs.'
        },
        { 
          name: 'AI Social Media Manager', 
          href: '/ai-social-media-manager', 
          price: 'From $149/month',
          features: ['Auto-posting', 'Engagement tracking', 'Hashtag optimization', 'Analytics'],
          description: 'Automate your social media presence with AI-driven content and engagement strategies.'
        },
        { 
          name: 'AI Project Manager', 
          href: '/ai-project-manager', 
          price: 'From $99/month',
          features: ['Task automation', 'Resource allocation', 'Progress tracking', 'Risk assessment'],
          description: 'Intelligent project management with AI-powered insights and automation.'
        },
        { 
          name: 'AI Customer Support', 
          href: '/ai-customer-support', 
          price: 'From $149/month',
          features: ['24/7 chatbot', 'Ticket routing', 'Sentiment analysis', 'Multi-language support'],
          description: 'Provide exceptional customer service with AI-powered chatbots and support automation.'
        },
        { 
          name: 'AI Email Marketing', 
          href: '/ai-email-marketing', 
          price: 'From $99/month',
          features: ['Personalized campaigns', 'A/B testing', 'Automation', 'Analytics'],
          description: 'Create and optimize email marketing campaigns with AI-driven personalization.'
        },
        { 
          name: 'AI Code Assistant Pro', 
          href: '/ai-code-assistant-pro', 
          price: 'From $199/month',
          features: ['Code generation', 'Debugging assistance', 'Documentation', 'Refactoring'],
          description: 'Accelerate development with AI-powered code generation and assistance.'
        },
        { 
          name: 'AI Business Intelligence', 
          href: '/ai-business-intelligence-pro', 
          price: 'From $399/month',
          features: ['Data visualization', 'Forecasting', 'KPI tracking', 'Custom reports'],
          description: 'Transform your data into actionable business insights with AI analytics.'
        }
      ]
    },
    {
      title: 'IT Services',
      icon: <Cloud className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Comprehensive IT solutions and cloud services',
      services: [
        { 
          name: 'Cloud Migration Services', 
          href: '/cloud-migration-services', 
          price: 'From $2,999',
          features: ['AWS migration', 'Azure migration', 'GCP migration', 'Zero-downtime deployment'],
          description: 'Seamlessly migrate your infrastructure to the cloud with minimal disruption.'
        },
        { 
          name: 'Cybersecurity Consulting', 
          href: '/cybersecurity-consulting', 
          price: 'From $2,999',
          features: ['Security audits', 'Penetration testing', 'Compliance', 'Incident response'],
          description: 'Protect your business with comprehensive cybersecurity solutions and consulting.'
        },
        { 
          name: 'Database Solutions', 
          href: '/database-solutions', 
          price: 'From $1,999',
          features: ['Database design', 'Optimization', 'Backup & recovery', 'Performance tuning'],
          description: 'Optimize your database performance and ensure data integrity and security.'
        },
        { 
          name: 'DevOps Solutions', 
          href: '/devops-solutions', 
          price: 'From $1,499',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Automation'],
          description: 'Streamline your development and deployment processes with modern DevOps practices.'
        },
        { 
          name: 'Web Development', 
          href: '/web-development', 
          price: 'From $1,299',
          features: ['React development', 'Next.js', 'Node.js', 'Responsive design'],
          description: 'Build modern, scalable web applications with cutting-edge technologies.'
        },
        { 
          name: 'Mobile App Development', 
          href: '/mobile-development', 
          price: 'From $1,999',
          features: ['iOS development', 'Android development', 'React Native', 'Flutter'],
          description: 'Create powerful mobile applications for iOS and Android platforms.'
        },
        { 
          name: 'API Management', 
          href: '/ai-api-management', 
          price: 'From $999',
          features: ['API design', 'Documentation', 'Rate limiting', 'Analytics'],
          description: 'Design, develop, and manage robust APIs for your applications.'
        },
        { 
          name: 'Performance Monitoring', 
          href: '/performance-monitoring', 
          price: 'From $799',
          features: ['Real-time monitoring', 'Alerting', 'Performance optimization', 'Uptime tracking'],
          description: 'Monitor and optimize your application performance with advanced analytics.'
        }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-12 h-12" />,
      color: 'from-green-500 to-teal-600',
      description: 'Next-generation 5G infrastructure and applications',
      services: [
        { 
          name: '5G Implementation', 
          href: '/5g-implementation', 
          price: 'From $5,999',
          features: ['Network planning', 'Deployment', 'Optimization', 'Testing'],
          description: 'Complete 5G network implementation with end-to-end support and optimization.'
        },
        { 
          name: '5G Network Infrastructure', 
          href: '/5g-network-infrastructure', 
          price: 'From $4,999',
          features: ['Core network', 'RAN', 'Backhaul', 'Edge computing'],
          description: 'Build robust 5G network infrastructure for high-speed connectivity.'
        },
        { 
          name: '5G IoT Solutions', 
          href: '/5g-iot-solutions', 
          price: 'From $3,999',
          features: ['IoT device management', 'Data analytics', 'Connectivity', 'Security'],
          description: 'Connect and manage IoT devices with 5G-powered solutions.'
        },
        { 
          name: '5G Smart City Solutions', 
          href: '/5g-smart-city-solutions', 
          price: 'From $7,999',
          features: ['Traffic management', 'Public safety', 'Utilities monitoring', 'Citizen services'],
          description: 'Transform cities with 5G-powered smart city infrastructure and services.'
        },
        { 
          name: '5G Edge Computing', 
          href: '/5g-edge-computing', 
          price: 'From $2,999',
          features: ['Edge servers', 'Latency optimization', 'Distributed computing', 'Real-time processing'],
          description: 'Deploy edge computing solutions for ultra-low latency applications.'
        },
        { 
          name: '5G Private Networks', 
          href: '/5g-private-networks', 
          price: 'From $6,999',
          features: ['Dedicated networks', 'Enterprise connectivity', 'Security', 'Customization'],
          description: 'Build private 5G networks for enterprise and industrial applications.'
        },
        { 
          name: '5G Mobile Applications', 
          href: '/5g-mobile-applications', 
          price: 'From $2,499',
          features: ['AR/VR apps', 'Real-time streaming', 'Low-latency gaming', 'IoT integration'],
          description: 'Develop next-generation mobile applications leveraging 5G capabilities.'
        },
        { 
          name: '5G Data Analytics', 
          href: '/5g-data-analytics', 
          price: 'From $1,999',
          features: ['Network performance', 'User behavior', 'Predictive analytics', 'Real-time insights'],
          description: 'Analyze 5G network data for optimization and business insights.'
        }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-12 h-12" />,
      color: 'from-orange-500 to-red-600',
      description: 'Ready-to-use software solutions for immediate deployment',
      services: [
        { 
          name: 'AI Accounting Assistant', 
          href: '/ai-accounting-assistant', 
          price: 'From $49/month',
          features: ['Invoice processing', 'Expense tracking', 'Tax preparation', 'Financial reporting'],
          description: 'Automate your accounting processes with AI-powered financial management.'
        },
        { 
          name: 'AI Content Moderation Pro', 
          href: '/ai-content-moderation-pro', 
          price: 'From $79/month',
          features: ['Auto-moderation', 'Spam detection', 'Content filtering', 'Safety monitoring'],
          description: 'Keep your platform safe with AI-powered content moderation and filtering.'
        },
        { 
          name: 'AI Climate Solutions Pro', 
          href: '/ai-climate-solutions-pro', 
          price: 'From $129/month',
          features: ['Carbon tracking', 'Sustainability reporting', 'Green analytics', 'Environmental monitoring'],
          description: 'Monitor and reduce your environmental impact with AI climate solutions.'
        },
        { 
          name: 'AI Agricultural Intelligence Pro', 
          href: '/ai-agricultural-intelligence-pro', 
          price: 'From $199/month',
          features: ['Crop monitoring', 'Yield prediction', 'Weather analysis', 'Soil optimization'],
          description: 'Optimize agricultural operations with AI-powered farming intelligence.'
        },
        { 
          name: 'AI 3D Generation', 
          href: '/ai-3d-generation', 
          price: 'From $149/month',
          features: ['3D modeling', 'Text-to-3D', 'Asset generation', 'Animation'],
          description: 'Create stunning 3D content and models with AI-powered generation tools.'
        },
        { 
          name: 'AI Blockchain Solutions', 
          href: '/ai-blockchain-solutions', 
          price: 'From $299/month',
          features: ['Smart contracts', 'DeFi protocols', 'NFT platforms', 'Crypto analytics'],
          description: 'Build and deploy blockchain applications with AI-enhanced capabilities.'
        },
        { 
          name: 'AI HR Assistant', 
          href: '/ai-hr-assistant', 
          price: 'From $89/month',
          features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking'],
          description: 'Streamline HR processes with AI-powered recruitment and management tools.'
        },
        { 
          name: 'AI Legal Assistant', 
          href: '/ai-legal-assistant', 
          price: 'From $199/month',
          features: ['Contract analysis', 'Legal research', 'Compliance checking', 'Document review'],
          description: 'Accelerate legal processes with AI-powered document analysis and research.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and 5G solutions. From AI analytics to cloud migration, we provide cutting-edge technology services for modern businesses." />
        <meta name="keywords" content="AI services, IT solutions, 5G technology, micro SAAS, cloud migration, cybersecurity, web development" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="cyber-text neon-pulse">Our Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive AI, IT, and 5G solutions designed to transform your business 
                and drive innovation across all industries.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="cyber-card p-8">
                  <div className="text-center mb-12">
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 cyber-glow`}>
                      <div className="text-white neon-pulse">{category.icon}</div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4 cyber-text">{category.title}</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="cyber-card p-6 hover:transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-white cyber-text">{service.name}</h3>
                          <span className="text-cyan-400 font-semibold neon-text">{service.price}</span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 neon-pulse" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a
                          href={service.href}
                          className="w-full cyber-button py-2 px-4 text-center flex items-center justify-center group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="cyber-card p-12 text-center holographic">
              <h2 className="text-4xl font-bold text-white mb-6 cyber-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our solutions to drive growth and innovation. 
                Start your digital transformation journey today with cutting-edge AI, IT, and 5G technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold flex items-center justify-center group"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Free Consultation
                </a>
                <a
                  href="/pricing"
                  className="cyber-button-secondary px-8 py-4 text-lg font-semibold flex items-center justify-center group"
                >
                  <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;