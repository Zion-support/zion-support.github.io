import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Bot, Zap, Shield, Cpu, Brain, Target, BarChart, Settings, RefreshCw } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      title: 'Self-Healing Infrastructure',
      description: 'Automated system monitoring, diagnosis, and repair for maximum uptime and reliability.',
      icon: '🔧',
      price: 'Starting at $3,500/month',
      features: ['Automated diagnostics', 'Self-repair capabilities', 'Predictive maintenance', 'Performance optimization', '24/7 monitoring'],
      benefits: ['Reduce downtime by 90%', 'Lower maintenance costs by 60%', 'Improve system reliability'],
      marketPrice: '$5,000-12,000/month',
      category: 'Infrastructure',
      technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Ansible']
    },
    {
      title: 'Autonomous Business Process Automation',
      description: 'AI-powered automation of complex business processes with decision-making capabilities.',
      icon: '🤖',
      price: 'Starting at $4,000/month',
      features: ['Process discovery', 'Workflow automation', 'Decision automation', 'Exception handling', 'Continuous optimization'],
      benefits: ['Reduce process time by 70%', 'Eliminate human errors', 'Improve compliance'],
      marketPrice: '$6,000-15,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Custom AI Models', 'RPA Tools']
    },
    {
      title: 'Intelligent Monitoring & Alerting',
      description: 'Advanced monitoring systems that learn patterns and predict issues before they occur.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Anomaly detection', 'Predictive alerts', 'Root cause analysis', 'Performance optimization', 'Custom dashboards'],
      benefits: ['Prevent issues before they occur', 'Reduce alert fatigue by 80%', 'Improve system performance'],
      marketPrice: '$4,000-8,000/month',
      category: 'Monitoring',
      technologies: ['ELK Stack', 'Splunk', 'DataDog', 'New Relic', 'Custom ML Models']
    },
    {
      title: 'Autonomous Data Management',
      description: 'Self-managing data pipelines with automatic optimization and quality assurance.',
      icon: '🗄️',
      price: 'Starting at $3,000/month',
      features: ['Data quality monitoring', 'Automatic data cleansing', 'Schema evolution', 'Performance tuning', 'Backup automation'],
      benefits: ['Ensure data quality', 'Reduce manual data management', 'Improve data accessibility'],
      marketPrice: '$4,500-10,000/month',
      category: 'Data Management',
      technologies: ['Apache Airflow', 'dbt', 'Great Expectations', 'Apache Kafka', 'Data Quality Tools']
    },
    {
      title: 'Self-Optimizing Cloud Resources',
      description: 'Automated cloud resource scaling and optimization based on real-time demand.',
      icon: '☁️',
      price: 'Starting at $2,800/month',
      features: ['Auto-scaling', 'Cost optimization', 'Performance tuning', 'Resource allocation', 'Capacity planning'],
      benefits: ['Reduce cloud costs by 40%', 'Improve performance', 'Eliminate over-provisioning'],
      marketPrice: '$4,000-9,000/month',
      category: 'Cloud Optimization',
      technologies: ['AWS Auto Scaling', 'Kubernetes HPA', 'Terraform', 'CloudFormation', 'Cost Optimization Tools']
    },
    {
      title: 'Autonomous Security Operations',
      description: 'AI-powered security monitoring, threat detection, and automated incident response.',
      icon: '🛡️',
      price: 'Starting at $4,500/month',
      features: ['Threat detection', 'Automated response', 'Vulnerability scanning', 'Compliance monitoring', 'Incident analysis'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 70%', 'Improve security posture'],
      marketPrice: '$7,000-18,000/month',
      category: 'Security',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Threat Intelligence']
    },
    {
      title: 'Self-Learning Customer Service',
      description: 'Autonomous customer service systems that learn and improve from every interaction.',
      icon: '💬',
      price: 'Starting at $2,200/month',
      features: ['Natural language processing', 'Sentiment analysis', 'Automated responses', 'Learning algorithms', 'Escalation management'],
      benefits: ['Improve customer satisfaction', 'Reduce response time by 80%', 'Lower support costs'],
      marketPrice: '$3,500-8,000/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Machine Learning', 'Chatbots', 'CRM Integration', 'Analytics']
    },
    {
      title: 'Autonomous Supply Chain Management',
      description: 'Self-managing supply chain with predictive analytics and automated decision making.',
      icon: '📦',
      price: 'Starting at $5,000/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier management', 'Risk assessment', 'Automated ordering'],
      benefits: ['Reduce inventory costs by 30%', 'Improve delivery times', 'Minimize supply chain risks'],
      marketPrice: '$8,000-20,000/month',
      category: 'Supply Chain',
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT Sensors', 'Blockchain', 'ERP Integration']
    },
    {
      title: 'Self-Adaptive Software Development',
      description: 'Autonomous software development with automated testing, deployment, and optimization.',
      icon: '💻',
      price: 'Starting at $3,800/month',
      features: ['Automated testing', 'Code optimization', 'Performance tuning', 'Bug detection', 'Deployment automation'],
      benefits: ['Reduce development time by 50%', 'Improve code quality', 'Faster time to market'],
      marketPrice: '$6,000-15,000/month',
      category: 'Software Development',
      technologies: ['CI/CD', 'Automated Testing', 'Code Analysis', 'Performance Monitoring', 'DevOps Tools']
    },
    {
      title: 'Autonomous Financial Operations',
      description: 'Self-managing financial systems with automated trading, risk management, and compliance.',
      icon: '💰',
      price: 'Starting at $6,000/month',
      features: ['Algorithmic trading', 'Risk assessment', 'Compliance monitoring', 'Fraud detection', 'Portfolio optimization'],
      benefits: ['Improve trading performance', 'Reduce financial risks', 'Ensure compliance'],
      marketPrice: '$10,000-25,000/month',
      category: 'Financial Services',
      technologies: ['Algorithmic Trading', 'Risk Management', 'Compliance Tools', 'Blockchain', 'AI/ML']
    },
    {
      title: 'Self-Optimizing Marketing Automation',
      description: 'Autonomous marketing systems that optimize campaigns and customer engagement in real-time.',
      icon: '📈',
      price: 'Starting at $2,500/month',
      features: ['Campaign optimization', 'Customer segmentation', 'Content personalization', 'A/B testing', 'Performance analytics'],
      benefits: ['Increase ROI by 60%', 'Improve customer engagement', 'Reduce marketing costs'],
      marketPrice: '$4,000-10,000/month',
      category: 'Marketing',
      technologies: ['Marketing Automation', 'AI/ML', 'Analytics', 'Personalization', 'A/B Testing']
    },
    {
      title: 'Autonomous Quality Assurance',
      description: 'Self-managing quality systems with automated testing, monitoring, and improvement.',
      icon: '🔍',
      price: 'Starting at $2,800/month',
      features: ['Automated testing', 'Quality monitoring', 'Defect prediction', 'Process optimization', 'Continuous improvement'],
      benefits: ['Improve product quality', 'Reduce defects by 80%', 'Lower quality costs'],
      marketPrice: '$4,500-12,000/month',
      category: 'Quality Assurance',
      technologies: ['Automated Testing', 'Quality Metrics', 'Process Mining', 'AI/ML', 'Analytics']
    }
  ];

  const categories = [...new Set(autonomousServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Autonomous Systems Services - Zion Tech Group</title>
        <meta name="description" content="Advanced autonomous systems services including self-healing infrastructure, process automation, and intelligent monitoring solutions." />
        <meta name="keywords" content="autonomous systems, self-healing infrastructure, process automation, intelligent monitoring, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Autonomous Systems Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Self-managing, self-optimizing systems that adapt and improve without human intervention
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Explore Autonomous Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge autonomous technology that reduces costs, improves efficiency, and eliminates human errors
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Managing</h3>
                <p className="text-gray-600">Systems that monitor, diagnose, and repair themselves automatically</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                <p className="text-gray-600">AI systems that improve performance with every interaction</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Downtime</h3>
                <p className="text-gray-600">Self-healing systems that prevent and resolve issues automatically</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 400% ROI within 12 months of implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Autonomous {category.toLowerCase()} systems that adapt and optimize continuously
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {autonomousServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-green-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 45% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Get Autonomous Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Autonomous Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Autonomous Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Advanced autonomous technologies that enable self-managing, self-optimizing systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Bot className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Healing Systems</h3>
                <p className="text-gray-600">Automated diagnosis, repair, and optimization of system issues</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning</h3>
                <p className="text-gray-600">Continuous learning and adaptation from system behavior</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <RefreshCw className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Automation</h3>
                <p className="text-gray-600">End-to-end automation of complex business processes</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <BarChart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Anticipate issues and optimize performance before problems occur</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Settings className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adaptive Configuration</h3>
                <p className="text-gray-600">Dynamic system configuration based on changing conditions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Cpu className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Monitoring</h3>
                <p className="text-gray-600">Advanced monitoring with anomaly detection and alerting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact our autonomous systems experts for a free consultation and custom automation strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-green-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousSystemsPage;