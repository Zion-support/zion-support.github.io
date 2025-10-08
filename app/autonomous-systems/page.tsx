import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Bot, Cpu, Shield, Zap, Target, BarChart, Brain, Settings, RefreshCw, Eye } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      title: 'Self-Healing Infrastructure',
      description: 'AI-powered infrastructure that automatically detects, diagnoses, and repairs system issues without human intervention.',
      icon: '🔄',
      price: 'Starting at $3,500/month',
      features: ['Automatic issue detection', 'Self-repair capabilities', 'Predictive maintenance', 'Performance optimization', 'Zero-downtime updates'],
      benefits: ['Reduce downtime by 90%', 'Lower maintenance costs by 60%', 'Improve system reliability'],
      marketPrice: '$5,000-12,000/month',
      category: 'Infrastructure Automation',
      technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'AI/ML Models']
    },
    {
      title: 'Autonomous Business Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities and exception handling.',
      icon: '⚙️',
      price: 'Starting at $4,500/month',
      features: ['Process discovery', 'Workflow automation', 'Decision automation', 'Exception handling', 'Continuous optimization'],
      benefits: ['Reduce process time by 70%', 'Eliminate human errors', 'Improve compliance'],
      marketPrice: '$7,000-18,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Custom AI', 'RPA Tools']
    },
    {
      title: 'Intelligent Monitoring & Alerting',
      description: 'AI-powered monitoring systems that learn from patterns and provide intelligent alerts and recommendations.',
      icon: '👁️',
      price: 'Starting at $2,800/month',
      features: ['Anomaly detection', 'Predictive alerting', 'Root cause analysis', 'Performance optimization', 'Custom dashboards'],
      benefits: ['Prevent issues before they occur', 'Reduce false alerts by 80%', 'Improve system performance'],
      marketPrice: '$4,500-10,000/month',
      category: 'Monitoring',
      technologies: ['ELK Stack', 'Splunk', 'Datadog', 'New Relic', 'Custom ML Models']
    },
    {
      title: 'Autonomous Data Management',
      description: 'Self-managing data systems that automatically optimize, clean, and secure data without human intervention.',
      icon: '🗄️',
      price: 'Starting at $3,200/month',
      features: ['Data quality automation', 'Automatic data cleaning', 'Schema evolution', 'Data lineage tracking', 'Privacy compliance'],
      benefits: ['Improve data quality by 95%', 'Reduce data management costs', 'Ensure compliance'],
      marketPrice: '$5,000-12,000/month',
      category: 'Data Management',
      technologies: ['Apache Airflow', 'dbt', 'Great Expectations', 'Apache Kafka', 'Data Catalogs']
    },
    {
      title: 'Self-Optimizing Cloud Resources',
      description: 'Autonomous cloud resource management that continuously optimizes costs, performance, and scalability.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: ['Auto-scaling', 'Cost optimization', 'Performance tuning', 'Resource allocation', 'Capacity planning'],
      benefits: ['Reduce cloud costs by 40%', 'Improve performance by 50%', 'Eliminate manual optimization'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Automation',
      technologies: ['AWS Auto Scaling', 'Kubernetes HPA', 'Terraform', 'CloudFormation', 'Cost Optimization Tools']
    },
    {
      title: 'Autonomous Security Operations',
      description: 'AI-driven security systems that automatically detect, analyze, and respond to security threats.',
      icon: '🛡️',
      price: 'Starting at $4,000/month',
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

  return (
    <>
      <Helmet>
        <title>Autonomous Systems Services - Zion Tech Group</title>
        <meta name="description" content="Advanced autonomous systems and self-managing technology solutions for enterprise automation and optimization." />
        <meta name="keywords" content="autonomous systems, self-healing infrastructure, process automation, AI automation, intelligent systems" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Autonomous Systems Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Self-managing, self-optimizing systems that operate independently and continuously improve
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge autonomous technology that reduces costs, improves efficiency, and eliminates manual work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Autonomous</h3>
                <p className="text-gray-600">Systems that operate independently without human intervention</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Learning</h3>
                <p className="text-gray-600">AI systems that continuously improve and adapt to new challenges</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">Reduce operational costs by up to 70% through automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Autonomous Systems Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive autonomous solutions for every aspect of your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {autonomousServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500 ml-2">({service.marketPrice} market rate)</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with Autonomous Systems?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join hundreds of companies already benefiting from our autonomous technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousSystemsPage;