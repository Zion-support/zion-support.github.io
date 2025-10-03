import Head from 'next/head';
import { Link } from 'react-router-dom';
import { Wrench, CheckCircle, ArrowRight, DollarSign, Target, Phone, Mail, MapPin, Award, TrendingUp } from 'lucide-react';
export default function AIPredictiveMaintenancePage() {
  const title = 'AI Predictive Maintenance Platform — Zion Tech Group';
  const description = 'Intelligent predictive maintenance platform using AI and IoT sensors to prevent equipment failures, reduce downtime, and optimize maintenance schedules. Save millions in unplanned downtime costs.';

  const maintenanceFeatures = [
    {
      name: 'IoT Sensor Integration',
      description: 'Connect any equipment with sensors for real-time monitoring',
      icon: Activity,
      features: [
        'Support for 50+ sensor types and protocols',
        'Real-time data streaming and processing',
        'Edge computing for low-latency analysis',
        'Wireless and wired sensor connectivity',
        'Sensor health monitoring and calibration',
        'Historical data storage and analysis',
        'Custom sensor integration APIs',
        'Multi-location sensor management'
      ],
      pricing: '$299 - $2,500/month',
      delivery: '1-2 weeks',
      category: 'IoT Integration',
      benefits: 'Real-time equipment monitoring with 99.9% data accuracy',
      marketPrice: '$500 - $5,000/month',
      useCases: ['Manufacturing', 'Energy', 'Transportation', 'Healthcare'],
      technologies: ['MQTT', 'Modbus', 'OPC-UA', 'Edge Computing', 'Time Series DB']
    },
    {
      name: 'AI Failure Prediction Engine',
      description: 'Machine learning algorithms that predict equipment failures before they happen',
      icon: Brain,
      features: [
        'Advanced anomaly detection algorithms',
        'Multi-variable failure prediction models',
        'Real-time risk scoring and alerts',
        'Failure mode classification and analysis',
        'Predictive maintenance recommendations',
        'Root cause analysis and insights',
        'Continuous model learning and improvement',
        'Custom model training for specific equipment'
      ],
      pricing: '$1,999 - $15,000/month',
      delivery: '2-4 weeks',
      category: 'AI Prediction',
      benefits: 'Predict failures with 95% accuracy, reduce unplanned downtime by 80%',
      marketPrice: '$3,000 - $25,000/month',
      useCases: ['Critical Infrastructure', 'Manufacturing Lines', 'HVAC Systems', 'Fleet Management'],
      technologies: ['Machine Learning', 'Time Series Analysis', 'Deep Learning', 'Ensemble Methods']
    },
    {
      name: 'Smart Maintenance Scheduling',
      description: 'Intelligent maintenance scheduling that optimizes resources and minimizes disruption',
      icon: Calendar,
      features: [
        'AI-powered maintenance window optimization',
        'Resource allocation and technician scheduling',
        'Parts inventory and procurement automation',
        'Maintenance workflow management',
        'Priority-based scheduling algorithms',
        'Integration with ERP and CMMS systems',
        'Mobile technician apps and notifications',
        'Performance tracking and analytics'
      ],
      pricing: '$899 - $7,500/month',
      delivery: '2-3 weeks',
      category: 'Scheduling',
      benefits: 'Optimize maintenance schedules, reduce costs by 30%',
      marketPrice: '$1,500 - $12,000/month',
      useCases: ['Facility Management', 'Manufacturing', 'Utilities', 'Transportation'],
      technologies: ['Optimization Algorithms', 'Mobile Apps', 'ERP Integration', 'Workflow Automation']
    },
    {
      name: 'Real-Time Equipment Monitoring',
      description: 'Live dashboard with real-time equipment status and performance metrics',
      icon: Monitor,
      features: [
        'Real-time equipment status dashboard',
        'Performance metrics and KPI tracking',
        'Alert management and notification system',
        'Historical trend analysis and reporting',
        'Customizable dashboards and widgets',
        'Mobile-responsive design',
        'Role-based access control',
        'Integration with existing systems'
      ],
      pricing: '$499 - $3,999/month',
      delivery: '1-2 weeks',
      category: 'Monitoring',
      benefits: '24/7 equipment visibility, instant alerts and notifications',
      marketPrice: '$800 - $6,000/month',
      useCases: ['Operations Centers', 'Maintenance Teams', 'Management', 'Remote Monitoring'],
      technologies: ['Real-time Dashboards', 'WebSockets', 'Data Visualization', 'Mobile Apps']
    },
    {
      name: 'Predictive Analytics Suite',
      description: 'Advanced analytics for equipment performance, maintenance costs, and optimization insights',
      icon: BarChart3,
      features: [
        'Equipment performance analytics and benchmarking',
        'Maintenance cost analysis and optimization',
        'Energy consumption monitoring and optimization',
        'Asset lifecycle management and planning',
        'Predictive modeling and forecasting',
        'Custom reports and data exports',
        'API access for third-party integrations',
        'Machine learning insights and recommendations'
      ],
      pricing: '$1,299 - $9,999/month',
      delivery: '2-4 weeks',
      category: 'Analytics',
      benefits: 'Data-driven maintenance decisions, optimize asset performance',
      marketPrice: '$2,000 - $15,000/month',
      useCases: ['Asset Management', 'Financial Planning', 'Performance Optimization', 'Strategic Planning'],
      technologies: ['Big Data Analytics', 'Machine Learning', 'Business Intelligence', 'Data Warehousing']
    },
    {
      name: 'Mobile Maintenance Management',
      description: 'Complete mobile solution for technicians with work orders, checklists, and reporting',
      icon: Smartphone,
      features: [
        'Mobile work order management',
        'Digital maintenance checklists and procedures',
        'Barcode and QR code scanning',
        'Photo and video documentation',
        'Offline capability for remote locations',
        'GPS tracking and location services',
        'Voice notes and audio recording',
        'Real-time synchronization and updates'
      ],
      pricing: '$199 - $1,599/month',
      delivery: '1-2 weeks',
      category: 'Mobile',
      benefits: 'Improve technician productivity by 40%, reduce paperwork by 90%',
      marketPrice: '$400 - $3,000/month',
      useCases: ['Field Technicians', 'Remote Maintenance', 'Inspection Teams', 'Emergency Response'],
      technologies: ['React Native', 'Offline Storage', 'Camera Integration', 'GPS Services']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Downtime Reduction', value: '80%', icon: TrendingUp },
    { label: 'Maintenance Cost Savings', value: '30%', icon: DollarSign },
    { label: 'Prediction Accuracy', value: '95%', icon: Target },
    { label: 'ROI Achieved', value: '400%', icon: Award }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Building, description: 'Production lines, machinery, quality control systems' },
    { name: 'Energy & Utilities', icon: Zap, description: 'Power plants, turbines, electrical infrastructure' },
    { name: 'Transportation', icon: Globe, description: 'Fleet vehicles, aircraft, railway systems' },
    { name: 'Healthcare', icon: Heart, description: 'Medical equipment, HVAC, critical systems' },
    { name: 'Data Centers', icon: Server, description: 'Servers, cooling systems, power infrastructure' },
    { name: 'Agriculture', icon: Wrench, description: 'Farm equipment, irrigation systems, processing machinery' }
  ];

  const benefits = [
    {
      title: 'Prevent Unplanned Downtime',
      description: 'Predict and prevent equipment failures before they occur',
      icon: Shield,
      details: ['95% prediction accuracy', '80% downtime reduction', 'Early warning alerts', 'Proactive maintenance']
    },
    {
      title: 'Optimize Maintenance Costs',
      description: 'Reduce maintenance costs while improving equipment reliability',
      icon: DollarSign,
      details: ['30% cost reduction', '400% ROI', 'Resource optimization', 'Predictive scheduling']
    },
    {
      title: 'Extend Equipment Life',
      description: 'Maximize equipment lifespan with intelligent maintenance',
      icon: Clock,
      details: ['Extended asset life', 'Optimal maintenance timing', 'Condition-based care', 'Performance optimization']
    },
    {
      title: 'Real-Time Visibility',
      description: 'Complete visibility into equipment health and performance',
      icon: Eye,
      details: ['24/7 monitoring', 'Real-time alerts', 'Performance dashboards', 'Mobile access']
    }
  ];

  const successStories = [
    {
      company: 'Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Unplanned downtime costing $2M annually',
      solution: 'AI predictive maintenance platform',
      results: '85% reduction in unplanned downtime, $1.7M annual savings',
      icon: Building
    },
    {
      company: 'Energy Utility',
      industry: 'Utilities',
      challenge: 'Critical turbine failures causing power outages',
      solution: 'IoT sensors + AI prediction engine',
      results: '90% reduction in turbine failures, 99.9% uptime achieved',
      icon: Zap
    },
    {
      company: 'Fleet Management',
      industry: 'Transportation',
      challenge: 'Vehicle breakdowns affecting delivery schedules',
      solution: 'Mobile maintenance management + predictive analytics',
      results: '75% reduction in breakdowns, 40% improvement in delivery times',
      icon: Globe
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services/micro-saas/ai-predictive-maintenance`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">AI Predictive Maintenance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prevent Failures Before They Happen
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI-powered predictive maintenance platform with all the tools you need to prevent equipment failures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maintenanceFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.name}</h3>
                      <span className="text-sm text-green-600 font-medium">{feature.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.features.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                    {feature.features.length > 4 && (
                      <div className="text-sm text-green-600 font-medium">
                        +{feature.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-green-600">{feature.pricing}</span>
                      <span className="text-sm text-gray-500">{feature.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {feature.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {feature.benefits}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/contact"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Get Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI predictive maintenance platform is trusted by leading companies across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how companies are saving millions with our AI predictive maintenance platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <story.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{story.company}</h3>
                      <p className="text-sm text-gray-600">{story.industry}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Challenge:</h4>
                      <p className="text-sm text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Solution:</h4>
                      <p className="text-sm text-gray-600">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-700">Results:</h4>
                      <p className="text-sm text-green-600 font-medium">{story.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven AI predictive maintenance platform with measurable results and fast implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <benefit.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Prevent Equipment Failures?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free predictive maintenance consultation and see how you can save millions in downtime costs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-green-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-green-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-green-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Free Predictive Maintenance Consultation Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Equipment assessment and analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom solution design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>ROI projections and cost savings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Implementation timeline</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}