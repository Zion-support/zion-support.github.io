<<<<<<< HEAD
import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Smartphone as Phone, Laptop, Headphones } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "AI-Powered Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics",
      popular: true
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon'}'
} from '@heroicons/react/24/outline";
import React from 'react'
const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {''
      title: 'AI & Machine Learning',''
      color: 'text-purple-600',''
      bgColor: 'bg-purple-50','
      icon: CpuChipIcon,
      services: ['}'
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },''
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },''
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },''
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },''
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },''
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] }'
      ]
>>>>>>> origin/main
    },
    {''
      title: 'Cybersecurity',''
      color: 'text-red-600',''
      bgColor: 'bg-red-50','
      icon: ShieldCheckIcon,
      services: ['}'
        { name: 'Security Assessment', price: '$1,200/month', description: 'Comprehensive security evaluation and vulnerability assessment', features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check'] },''
        { name: 'Managed Security Services', price: '$2,000/month', description: '24/7 security monitoring and incident response', features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates'] },''
        { name: 'Identity & Access Management', price: '$1,500/month', description: 'Secure user authentication and authorization systems', features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Access Control'] },''
        { name: 'Data Protection', price: '$1,800/month', description: 'Comprehensive data encryption and backup solutions', features: ['Data Encryption', 'Backup Solutions', 'Data Recovery', 'Privacy Compliance'] }'
      ]
    },
    {''
      title: 'Cloud Infrastructure',''
      color: 'text-blue-600',''
      bgColor: 'bg-blue-50','
      icon: CloudIcon,
      services: ['}'
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with minimal downtime', features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'] },''
        { name: 'Cloud Architecture', price: '$2,500/month', description: 'Scalable and secure cloud infrastructure design', features: ['Architecture Design', 'Scalability Planning', 'Security Implementation', 'Cost Optimization'] },''
        { name: 'DevOps & CI/CD', price: '$2,000/month', description: 'Automated deployment and continuous integration pipelines', features: ['CI/CD Setup', 'Automated Testing', 'Deployment Automation', 'Monitoring Setup'] },''
        { name: 'Cloud Management', price: '$1,500/month', description: 'Ongoing cloud infrastructure management and optimization', features: ['24/7 Monitoring', 'Performance Tuning', 'Cost Management', 'Security Updates'] }'
      ]
    },
    {''
      title: 'Digital Transformation',''
      color: 'text-green-600',''
      bgColor: 'bg-green-50','
      icon: ChartBarIcon,
      services: ['}'
        { name: 'Digital Strategy', price: '$2,500/month', description: 'Comprehensive digital transformation strategy and planning', features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Planning'] },''
        { name: 'Process Automation', price: '$1,800/month', description: 'Business process automation and workflow optimization', features: ['Process Analysis', 'Automation Design', 'Workflow Implementation', 'Performance Monitoring'] },''
        { name: 'Data Analytics', price: '$2,200/month', description: 'Advanced analytics and business intelligence solutions', features: ['Data Visualization', 'Predictive Analytics', 'Dashboard Development', 'Insight Generation'] },''
        { name: 'Mobile Solutions', price: '$1,600/month', description: 'Custom mobile applications and responsive web solutions', features: ['Mobile App Development', 'Responsive Design', 'Cross-Platform Solutions', 'Performance Optimization'] }'
      ]
    },
    {''
      title: 'Micro SaaS Solutions',''
      color: 'text-pink-600',''
      bgColor: 'bg-pink-50','
      icon: GlobeAltIcon,
      services: ['}'
        { name: 'Custom SaaS Development', price: '$3,500/month', description: 'Tailored software-as-a-service solutions for specific business needs', features: ['Custom Development', 'API Integration', 'User Management', 'Subscription Billing'] },''
        { name: 'SaaS Platform Management', price: '$2,000/month', description: 'Ongoing management and maintenance of SaaS platforms', features: ['Platform Maintenance', 'Feature Updates', 'Performance Monitoring', 'User Support'] },''
        { name: 'API Development', price: '$1,500/month', description: 'RESTful and GraphQL API development and management', features: ['API Design', 'Documentation', 'Rate Limiting', 'Analytics'] },''
        { name: 'Integration Services', price: '$1,200/month', description: 'Third-party integrations and system connectivity', features: ['System Integration', 'Data Synchronization', 'API Connections', 'Error Handling'] }'
      ]
    },
    {''
      title: '5G Solutions',''
      color: 'text-indigo-600',''
      bgColor: 'bg-indigo-50','
      icon: GlobeAltIcon,
      services: ['}'
        { name: '5G Network Planning', price: '$4,000/month', description: 'Comprehensive 5G network design and implementation planning', features: ['Network Design', 'Coverage Planning', 'Capacity Planning', 'Implementation Strategy'] },''
        { name: 'IoT Solutions', price: '$2,500/month', description: 'Internet of Things solutions leveraging 5G connectivity', features: ['IoT Architecture', 'Device Management', 'Data Collection', 'Real-time Analytics'] },''
        { name: 'Edge Computing', price: '$3,000/month', description: 'Edge computing solutions for ultra-low latency applications', features: ['Edge Infrastructure', 'Data Processing', 'Latency Optimization', 'Scalability'] },''
        { name: '5G Applications', price: '$2,200/month', description: 'Custom applications designed for 5G networks', features: ['App Development', '5G Optimization', 'Performance Tuning', 'User Experience'] }'
      ]
    }
  ]
  return (
    <>
      <EnhancedSEO
        title="Our Services - Zion Tech Group | AI and IT Solutions""
        description="Comprehensive AI and IT services including machine learning, cybersecurity, cloud infrastructure, digital transformation, and 5G solutions.""
        keywords="AI services, IT services, cybersecurity, cloud computing, digital transformation, 5G solutions, micro SaaS""
        canonicalUrl="/services""
        ogImage="/api/placeholder/1200/630""
      />
<<<<<<< HEAD
      { /* Hero Section */ }

      {/* Hero Section */}

              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">"
              Comprehensive AI and IT Solutions for Modern Businesses
            </p>"
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">"
              From artificial intelligence and machine learning to cybersecurity and cloud infrastructure, 
              we provide end-to-end technology solutions that drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}

              Service Categories
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
)
          {serviceCategories.map((category, categoryIndex) => {;
const Icon = category.icon
            return (
"
              <div key={categoryIndex} className="mb-20"></div>"
                <div className="flex items-center mb-12"></div>
                  <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mr-6`}></div>
                    <Icon className={`w-8 h-8 ${category.color}`} />

                  </div>"
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>"
                </div>
"
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>)
                  { category.services.map((service, serviceIndex) => ( }"
                    <div key={serviceIndex} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"></div>"
                      <div className="flex justify-between items-start mb-4"></div>"
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          { service.name }
                        </h4>"
                        <span className="text-purple-400 font-semibold text-lg">
                          { service.price }
                        </span>
                      </div>
                      "
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        { service.description }
                      </p>
"
                      <ul className="space-y-2 mb-6">)
                        { service.features.map((feature, featureIndex) => ( }"
                          <li key={featureIndex} className="flex items-center text-gray-300">"
                            <CheckIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />"
                            <span className="text-sm">{feature}</span>

                          </li>)
                        ))
                      </ul>

                      <Link 
"
                        to="/contact""
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"

                      >"
                        Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />"
                      </Link>
                    </div>
                  ))
                </div>
              </div>
            )}
        </div>
      </section>

      {/* CTA Section */}

              >
                Get Free Consultation"
                <ArrowRightIcon className="w-5 h-5" />"
              </Link>
              <Link 
"
                to="/demo""
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"

              >
                Schedule Demo"
                <ArrowRightIcon className="w-5 h-5" />"
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
export default FiveGSolutionsPage;
"
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
