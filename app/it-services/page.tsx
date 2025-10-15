import React from 'react';
import SEOHead from './components/SEOHead';
import {
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon,
  CogIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  LockClosedIcon,
  KeyIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  TargetIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      category: 'Cloud Infrastructure & DevOps',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CloudIcon,
      services: [
        {
          name: 'Cloud Migration Services',
          price: '$3,500/month',
          description: 'Complete cloud migration strategy and implementation for AWS, Azure, and Google Cloud',
          features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization', 'Security Implementation'],
          benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
        },
        {
          name: 'DevOps & CI/CD Implementation',
          price: '$2,800/month',
          description: 'Automated deployment pipelines and continuous integration/continuous deployment setup',
          features: ['CI/CD Pipeline Setup', 'Automated Testing', 'Deployment Automation', 'Monitoring & Alerting', 'Version Control'],
          benefits: ['Faster Deployments', 'Reduced Errors', 'Improved Quality', 'Team Productivity']
        },
        {
          name: 'Cloud Architecture Design',
          price: '$2,500/month',
          description: 'Scalable and secure cloud infrastructure design and implementation',
          features: ['Architecture Planning', 'Security Design', 'Cost Optimization', 'Disaster Recovery', 'Monitoring Setup'],
          benefits: ['Optimized Performance', 'Cost Efficiency', 'High Availability', 'Future-Proof Design']
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      services: [
        {
          name: 'Security Assessment & Penetration Testing',
          price: '$2,200/month',
          description: 'Comprehensive security evaluation and vulnerability assessment services',
          features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audit', 'Risk Assessment', 'Compliance Check'],
          benefits: ['Enhanced Security', 'Risk Mitigation', 'Compliance Assurance', 'Peace of Mind']
        },
        {
          name: 'Managed Security Services',
          price: '$3,000/month',
          description: '24/7 security monitoring, incident response, and threat management',
          features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates', 'Compliance Reporting'],
          benefits: ['Proactive Protection', 'Rapid Response', 'Expert Support', 'Cost Savings']
        },
        {
          name: 'Identity & Access Management',
          price: '$1,800/month',
          description: 'Secure user authentication and authorization systems implementation',
          features: ['Single Sign-On', 'Multi-Factor Authentication', 'User Provisioning', 'Access Control', 'Audit Logging'],
          benefits: ['Enhanced Security', 'User Convenience', 'Compliance', 'Centralized Management']
        }
      ]
    },
    {
      category: 'Web & Mobile Development',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: CodeBracketIcon,
      services: [
        {
          name: 'Custom Web Application Development',
          price: '$4,000/month',
          description: 'Full-stack web applications built with modern technologies and best practices',
          features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration', 'Testing & QA'],
          benefits: ['Custom Solutions', 'Modern Technology', 'Scalable Architecture', 'Ongoing Support']
        },
        {
          name: 'Mobile App Development',
          price: '$3,500/month',
          description: 'Native and cross-platform mobile applications for iOS and Android',
          features: ['iOS Development', 'Android Development', 'Cross-Platform', 'UI/UX Design', 'App Store Deployment'],
          benefits: ['Mobile Presence', 'User Engagement', 'Business Growth', 'Competitive Advantage']
        },
        {
          name: 'E-commerce Solutions',
          price: '$2,800/month',
          description: 'Complete e-commerce platforms with payment integration and inventory management',
          features: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics'],
          benefits: ['Online Sales', 'Automated Operations', 'Customer Management', 'Revenue Growth']
        }
      ]
    },
    {
      category: 'Database & Data Management',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: CircleStackIcon,
      services: [
        {
          name: 'Database Design & Optimization',
          price: '$2,200/month',
          description: 'Database architecture design, optimization, and performance tuning',
          features: ['Database Design', 'Performance Tuning', 'Query Optimization', 'Backup Strategy', 'Monitoring'],
          benefits: ['Improved Performance', 'Data Integrity', 'Cost Optimization', 'Reliability']
        },
        {
          name: 'Data Migration & Integration',
          price: '$2,500/month',
          description: 'Seamless data migration and integration between different systems',
          features: ['Data Mapping', 'Migration Planning', 'Data Validation', 'System Integration', 'Testing'],
          benefits: ['Smooth Transitions', 'Data Accuracy', 'Minimal Downtime', 'Risk Reduction']
        },
        {
          name: 'Business Intelligence & Analytics',
          price: '$3,200/month',
          description: 'Data analytics and business intelligence solutions for informed decision making',
          features: ['Data Visualization', 'Dashboard Development', 'Report Generation', 'Predictive Analytics', 'KPI Tracking'],
          benefits: ['Data-Driven Decisions', 'Business Insights', 'Competitive Advantage', 'Performance Monitoring']
        }
      ]
    },
    {
      category: 'Network & Infrastructure',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: SignalIcon,
      services: [
        {
          name: 'Network Design & Implementation',
          price: '$2,800/month',
          description: 'Complete network infrastructure design and implementation services',
          features: ['Network Planning', 'Hardware Installation', 'Configuration', 'Security Setup', 'Monitoring'],
          benefits: ['Reliable Connectivity', 'Enhanced Security', 'Scalable Infrastructure', 'Cost Efficiency']
        },
        {
          name: '5G Network Solutions',
          price: '$4,500/month',
          description: '5G network planning, implementation, and optimization services',
          features: ['5G Planning', 'Infrastructure Setup', 'Performance Optimization', 'IoT Integration', 'Edge Computing'],
          benefits: ['Ultra-Fast Connectivity', 'Low Latency', 'IoT Enablement', 'Future-Ready Technology']
        },
        {
          name: 'IT Infrastructure Management',
          price: '$2,000/month',
          description: 'Comprehensive IT infrastructure management and maintenance services',
          features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Tuning', 'Security Updates', 'Support'],
          benefits: ['Reduced Downtime', 'Optimal Performance', 'Cost Savings', 'Expert Management']
        }
      ]
    },
    {
      category: 'IT Support & Maintenance',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      icon: WrenchScrewdriverIcon,
      services: [
        {
          name: 'Managed IT Services',
          price: '$1,500/month',
          description: 'Comprehensive IT support and management for small to medium businesses',
          features: ['Help Desk Support', 'System Maintenance', 'Software Updates', 'Security Monitoring', 'Backup Management'],
          benefits: ['Reduced IT Costs', 'Expert Support', 'Proactive Maintenance', 'Business Focus']
        },
        {
          name: 'IT Consulting & Strategy',
          price: '$2,200/month',
          description: 'Strategic IT consulting and technology roadmap development',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance', 'Training'],
          benefits: ['Strategic Alignment', 'Technology Optimization', 'Cost Reduction', 'Competitive Advantage']
        },
        {
          name: 'Disaster Recovery & Backup',
          price: '$1,800/month',
          description: 'Comprehensive disaster recovery and data backup solutions',
          features: ['Backup Strategy', 'Disaster Recovery Planning', 'Data Replication', 'Testing & Validation', 'Recovery Services'],
          benefits: ['Business Continuity', 'Data Protection', 'Risk Mitigation', 'Peace of Mind']
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="IT Services - Zion Tech Group"
        description="Professional IT services including cloud infrastructure, cybersecurity, web development, database management, and network solutions for modern businesses."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                <ServerIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Explore IT Services
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get IT Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* IT Services Grid */}
        <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {itServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.bgColor} rounded-full mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className={`text-3xl font-bold ${category.color} mb-4`}>
                  {category.category}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Professional {category.category.toLowerCase()} solutions to optimize your IT infrastructure
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-center text-yellow-500">
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center text-2xl font-bold text-gray-900 mb-2">
                        <CurrencyDollarIcon className="w-6 h-6 text-green-600 mr-1" />
                        {service.price}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        Monthly subscription
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Business Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <SparklesIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        Get Started
                      </a>
                      <a
                        href="/pricing"
                        className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        View Pricing
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We use cutting-edge technologies and industry-standard tools to deliver exceptional IT solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
                'React', 'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB',
                'Cisco', 'Fortinet', 'Palo Alto', 'VMware', 'Red Hat', 'Ubuntu'
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-800 rounded-lg p-4 mb-2">
                    <CogIcon className="w-8 h-8 text-blue-400 mx-auto" />
                  </div>
                  <div className="text-sm font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our IT experts today to discuss your requirements and get a customized IT solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-blue-200 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-blue-200 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-blue-200 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start IT Project
                </a>
                <a
                  href="/pricing"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View IT Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;
