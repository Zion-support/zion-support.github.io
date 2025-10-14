import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, Database, Smartphone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "AI-Powered Business Intelligence Pro"
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy."
      icon: <Brain className="w-8 h-8"
      path: "/ai-business-intelligence"
      color: "from-blue-500 to-cyan-500"
      price: "Starting at $299/month"
      originalPrice: "$599/month"
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"
      category: "AI Analytics"
      popular: true;
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon'}'
} from '
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
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      features: ['Cloud Migration', 'DevOps', 'Containerization', 'Microservices']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: ['Web Applications', 'API Development', 'System Integration', 'Legacy Modernization']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    }
  ];

  return (
    <>
      <EnhancedSEO title="Our Services - Zion Tech Group | AI and IT Solutions"
        description="Comprehensive AI and IT services including machine learning, cybersecurity, cloud infrastructure, digital transformation, and 5G solutions."
        keywords="AI services, IT services, cybersecurity, cloud computing, digital transformation, 5G solutions, micro SaaS"
        canonicalUrl="/services"
        ogImage="/api/placeholder/1200/630"
      />
;
      { /* Hero Section */ }

      {/* Hero Section */}

              Our Services;
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed>"
              Comprehensive AI and IT Solutions for Modern Businesses;
            </p>"
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto>"
              From artificial intelligence and machine learning to cybersecurity and cloud infrastructure, 
              we provide end-to-end technology solutions that drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}

              Service Categories;
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>"
              Explore our comprehensive range of technology services designed to meet your business needs;
            </p>
          </div>
)
          {serviceCategories.map((category, categoryIndex) => {;
const Icon = category.icon;
            return (
"
              <div key={categoryIndex} className="mb-20></div>"
                <div className="flex items-center mb-12"
                  <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mr-6`
                    <Icon className={`w-8 h-8 ${category.color}`

                  </div>"
                  <h3 className="text-3xl font-bold text-white>{category.title}</h3>"
                </div>
"
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  { category.services.map((service, serviceIndex) => ( }"
                    <div key={serviceIndex} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105></div>"
                      <div className="flex justify-between items-start mb-4></div>"
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors"
                          { service.name }
                        </h4>"
                        <span className="text-purple-400 font-semibold text-lg"
                          { service.price }
                        </span>
                      </div>
                      "
                      <p className="text-gray-300 mb-6 leading-relaxed"
                        { service.description }
                      </p>
"
                      <ul className="space-y-2 mb-6"
                        { service.features.map((feature, featureIndex) => ( }"
                          <li key={featureIndex} className="flex items-center text-gray-300>"
                            <CheckIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 />"
                            <span className="text-sm"

                          </li>)
                        ))
                      </ul>

                      <Link ;
"
                        to="/contact"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"

                      >"
                        Learn More <ArrowRightIcon className="w-4 h-4 ml-2 />"
                      </Link>
                    </div>
                  ))
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

              >
                Get Free Consultation"
                <ArrowRightIcon className="w-5 h-5 />"
              </Link>
              <Link "
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"

              >
                Schedule Demo"
                <ArrowRightIcon className="w-5 h-5 />"
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
