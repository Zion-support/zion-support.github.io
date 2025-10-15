
;
import EnhancedSEO from '../components/EnhancedSEO;'';'
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon,;
  StarIcon;'}''''
} from '@heroicons/react/24/outline;'''
const Page = () => {
  const features = [
    {

    }
  ]
  return ()

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
            {services.map((service, index) => ()
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">""
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>""
                <p className="text-gray-300 mb-6">{service.description}</p>""
                <ul className="space-y-2 mb-6">""
                  {service.features.map((feature, idx) => ()
                    <li key={idx} className="text-sm text-gray-400 flex items-center">""
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>""
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"""
                ></Link>
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />""
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
        <div className="max-w-7xl mx-auto">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl font-bold text-white mb-4">""
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">""
              Explore our comprehensive range of technology services organized by category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">""
            {categories.map((category, index) => ()
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">""
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">""
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>""
                <p className="text-gray-300 mb-6">{category.description}</p>""
                <ul className="space-y-2">""
                  {category.services.map((service, idx) => ()
                    <li key={idx} className="text-sm text-gray-400">• {service}</li>""
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-4xl mx-auto text-center">""
          <h2 className="text-4xl font-bold text-white mb-6">""
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">""
            Contact our experts today to discuss your project requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">""
            <Link 
              to="/contact" ""
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"""
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />""
            </Link>
            <Link 
              to="/about" ""
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"""
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )};
const page = React.lazy(() => import('./page'));''';'
export default page;
;
import React from 'react';;';';'
import SEOHead from './components/SEOHead';''

const ServicesPage: React.FC = () => {"}""
        """
  const serviceCategories = [",""
        """
    {"}""
        """
      title: 'AI & Machine Learning',",'"'"
        """
      color: 'text-purple-600',",'"'"
        """
      bgColor: 'bg-purple-50',",'"'"
        """
      icon: ChipIcon,",""
        """
      services: [",""
        """
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },",'"'"
        """
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model ing'] },",'"'"
        """
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },",'"'"
        """
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },",'"'"
        """
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },",'"'"
        """
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] };''
      ]
    },",""
        """
    {"}""
        """
      title: 'Cybersecurity',",'"'"
        """
      color: 'text-red-600',",'"'"
        """
      bgColor: 'bg-red-50',",'"'"
        """
      icon: CheckIcon,",""
        """
      services: [",""
        """
        { name: 'Security Assessment', price: '$1,200/month', description: 'Comprehensive security evaluation and vulnerability assessment', features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check'] },",'"'"
        """
        { name: 'Managed Security Services', price: '$2,000/month', description: '24/7 security monitoring and incident response', features: ['24/7 ing', 'Incident Response', 'Threat Detection', 'Security Updates'] },",'"'"
        """
        { name: 'Identity & Access Management', price: '$1,500/month', description: 'Secure user authentication and authorization systems', features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Access Control'] },",'"'"
        """
        { name: 'Data Protection', price: '$1,800/month', description: 'Comprehensive data encryption and backup solutions', features: ['Data Encryption', 'Backup Solutions', 'Data Recovery', 'Privacy Compliance'] };''
      ]
    },",""
        """
    {"}""
        """
      title: 'Cloud Infrastructure',",'"'"
        """
      color: 'text-blue-600',",'"'"
        """
      bgColor: 'bg-blue-50',",'"'"
        """
      icon: CloudIcon,",""
        """
      services: [",""
        """
        { name: 'Cloud Migration', price: '$3,000/month', description: 'Seamless migration to cloud platforms with minimal downtime', features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization'] },",'"'"
        """
        { name: 'Cloud Architecture', price: '$2,500/month', description: 'Scalable and secure cloud infrastructure design', features: ['Architecture Design', 'Scalability Planning', 'Security Implementation', 'Cost Optimization'] },",'"'"
        """
        { name: 'DevOps & CI/CD', price: '$2,000/month', description: 'Automated deployment and continuous integration pipelines', features: ['CI/CD Setup', 'Automated Testing', 'Deployment Automation', 'ing Setup'] },",'"'"
        """
        { name: 'Cloud Management', price: '$1,500/month', description: 'Ongoing cloud infrastructure management and optimization', features: ['24/7 ing', 'Performance Tuning', 'Cost Management', 'Security Updates'] };''
      ]
    },",""
        """
    {"}""
        """
      title: 'Digital Transformation',",'"'"
        """
      color: 'text-green-600',",'"'"
        """
      bgColor: 'bg-green-50',",'"'"
        """
      icon: ChartBarIcon,",""
        """
      services: [",""
        """
        { name: 'Digital Strategy', price: '$2,500/month', description: 'Comprehensive digital transformation strategy and planning', features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Planning'] },",'"'"
        """
        { name: 'Process Automation', price: '$1,800/month', description: 'Business process automation and workflow optimization', features: ['Process Analysis', 'Automation Design', 'Workflow Implementation', 'Performance ing'] },",'"'"
        """
        { name: 'Data Analytics', price: '$2,200/month', description: 'Advanced analytics and business intelligence solutions', features: ['Data Visualization', 'Predictive Analytics', 'Dashboard Development', 'Insight Generation'] },",'"'"
        """
        { name: 'Mobile Solutions', price: '$1,600/month', description: 'Custom mobile applications and responsive web solutions', features: ['Mobile App Development', 'Responsive Design', 'Cross-Platform Solutions', 'Performance Optimization'] };''
      ]
    },",""
        """
    {"}""
        """
      title: 'Micro SaaS Solutions',",'"'"
        """
      color: 'text-pink-600',",'"'"
        """
      bgColor: 'bg-pink-50',",'"'"
        """
      icon: GlobeAltIcon,",""
        """
      services: [",""
        """
        { name: 'Custom SaaS Development', price: '$3,500/month', description: 'Tailored software-as-a-service solutions for specific business needs', features: ['Custom Development', 'API Integration', 'User Management', 'Subscription Billing'] },",'"'"
        """
        { name: 'SaaS Platform Management', price: '$2,000/month', description: 'Ongoing management and maintenance of SaaS platforms', features: ['Platform Maintenance', 'Feature Updates', 'Performance ing', 'User Support'] },",'"'"
        """
        { name: 'API Development', price: '$1,500/month', description: 'RESTful and GraphQL API development and management', features: ['API Design', 'Documentation', 'Rate Limiting', 'Analytics'] },",'"'"
        """
        { name: 'Integration Services', price: '$1,200/month', description: 'Third-party integrations and system connectivity', features: ['System Integration', 'Data Synchronization', 'API Connections', 'Error Handling'] };''
      ]
    },",""
        """
    {"}""
        """
      title: '5G Solutions',",'"'"
        """
      color: 'text-indigo-600',",'"'"
        """
      bgColor: 'bg-indigo-50',",'"'"
        """
      icon: GlobeAltIcon,",""
        """
      services: [",""
        """
        { name: '5G Network Planning', price: '$4,000/month', description: 'Comprehensive 5G network design and implementation planning', features: ['Network Design', 'Coverage Planning', 'Capacity Planning', 'Implementation Strategy'] },",'"'"
        """
        { name: 'IoT Solutions', price: '$2,500/month', description: 'Internet of Things solutions leveraging 5G connectivity', features: ['IoT Architecture', 'Device Management', 'Data Collection', 'Real-time Analytics'] },",'"'"
        """
        { name: 'Edge Computing', price: '$3,000/month', description: 'Edge computing solutions for ultra-low latency applications', features: ['Edge Infrastructure', 'Data Processing', 'Latency Optimization', 'Scalability'] },",'"'"
        """

        { name: '5G Applications', price: '$2,200/month', description: 'Custom applications designed for 5G networks', features: ['App Development', '5G Optimization', 'Performance Tuning', 'User Experience'] };''
      ]
    };
  ];
,
      const ServicesPage: React.FC = () => {ursor/analyze-improve-and-merge-code-4a9f"}""
        """
  return (",)""
        """
    <>{"}</>""
        """
      <SEOHead""></SEOHead>""
        title="services - Zion Tech Group",""
      description="Zion Tech Group services service page" />""""
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">""""
        <div className="text-center">""""
          <h1 className="text-4xl font-bold mb-4">services</h1>""""
          <p className="text-gray-300">Coming soon...</p>",""
        """
        </div>",""
        """
      </div>",""
        """
    </>",""
        """
  )
    },
    {}

,;
export default ServicesPage;
;"'"''"'"

const ServicesPage: React.FC = () => {
  return ()
    <>
      <SEOHead
        title="Services - Zion Tech Group"""
        description="Professional services solutions for modern businesses"""
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">""
        <div className="text-center">""
          <h1 className="text-4xl font-bold mb-4">Services</h1>""
          <p className="text-gray-300">Professional solutions coming soon...</p>""
        </div>
      </div>
    </>
  );
};



