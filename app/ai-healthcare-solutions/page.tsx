import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Heart, Brain, Stethoscope, Activity } from 'lucide-react';

const AIHealthcareSolutionsPage: React.FC = () => {
  const healthcareServices = [
    {
      title: 'AI Medical Imaging Analysis',
      description: 'Advanced AI-powered medical image analysis for radiology, pathology, and diagnostic imaging with 99.5% accuracy.',
      icon: '🩺',
      price: '$2,999/month',
      features: [
        'X-ray Analysis',
        'MRI/CT Scan Interpretation',
        'Pathology Image Analysis',
        'Tumor Detection',
        'Fracture Identification',
        'Disease Classification',
        'Radiologist Assistance',
        'Report Generation'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce reading time by 60%',
        'Detect early-stage diseases',
        'Reduce misdiagnosis by 40%',
        'Enable 24/7 analysis'
      ],
      marketPrice: '$8,000-25,000/month',
      category: 'Medical Imaging',
      technologies: ['Deep Learning', 'Computer Vision', 'DICOM Processing', 'Custom Neural Networks', 'Medical APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Drug Discovery Platform',
      description: 'Revolutionary AI platform for accelerating drug discovery, molecular design, and clinical trial optimization.',
      icon: '💊',
      price: '$4,999/month',
      features: [
        'Molecular Design',
        'Drug-Target Interaction',
        'Toxicity Prediction',
        'Clinical Trial Design',
        'Biomarker Discovery',
        'Drug Repurposing',
        'Patent Analysis',
        'Regulatory Compliance'
      ],
      benefits: [
        'Reduce drug discovery time by 50%',
        'Lower development costs by 40%',
        'Improve success rates by 35%',
        'Accelerate time to market',
        'Identify new drug candidates'
      ],
      marketPrice: '$15,000-50,000/month',
      category: 'Drug Discovery',
      technologies: ['Machine Learning', 'Molecular Modeling', 'Quantum Computing', 'Bioinformatics', 'Clinical Data'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Patient Monitoring System',
      description: 'Intelligent patient monitoring with real-time health tracking, early warning systems, and predictive analytics.',
      icon: '📊',
      price: '$1,599/month',
      features: [
        'Real-time Vital Monitoring',
        'Early Warning Systems',
        'Predictive Analytics',
        'Risk Stratification',
        'Medication Adherence',
        'Remote Patient Care',
        'Alert Management',
        'Health Trend Analysis'
      ],
      benefits: [
        'Reduce hospital readmissions by 25%',
        'Improve patient outcomes by 40%',
        'Enable proactive care',
        'Reduce monitoring costs by 30%',
        'Enhance patient safety'
      ],
      marketPrice: '$4,000-12,000/month',
      category: 'Patient Monitoring',
      technologies: ['IoT Sensors', 'Machine Learning', 'Real-time Analytics', 'Mobile Apps', 'Cloud Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Electronic Health Records',
      description: 'Intelligent EHR system with automated documentation, clinical decision support, and interoperability.',
      icon: '📋',
      price: '$1,299/month',
      features: [
        'Automated Documentation',
        'Clinical Decision Support',
        'Interoperability',
        'Voice-to-Text',
        'Smart Templates',
        'Quality Measures',
        'Population Health',
        'Analytics Dashboard'
      ],
      benefits: [
        'Reduce documentation time by 50%',
        'Improve care quality',
        'Enhance interoperability',
        'Reduce administrative burden',
        'Enable data-driven decisions'
      ],
      marketPrice: '$3,500-10,000/month',
      category: 'EHR Systems',
      technologies: ['NLP', 'Machine Learning', 'HL7 FHIR', 'Cloud Computing', 'API Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Telemedicine Platform',
      description: 'Advanced telemedicine solution with AI-powered diagnostics, virtual consultations, and remote care management.',
      icon: '💻',
      price: '$999/month',
      features: [
        'Virtual Consultations',
        'AI Symptom Checker',
        'Remote Diagnostics',
        'Prescription Management',
        'Appointment Scheduling',
        'Patient Education',
        'Follow-up Automation',
        'Integration APIs'
      ],
      benefits: [
        'Increase patient access by 300%',
        'Reduce healthcare costs by 40%',
        'Improve patient satisfaction',
        'Enable remote care',
        'Optimize provider efficiency'
      ],
      marketPrice: '$2,500-8,000/month',
      category: 'Telemedicine',
      technologies: ['Video Conferencing', 'AI Diagnostics', 'Mobile Apps', 'Cloud Computing', 'Security'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Mental Health Assistant',
      description: 'Intelligent mental health support with mood tracking, therapy recommendations, and crisis intervention.',
      icon: '🧠',
      price: '$799/month',
      features: [
        'Mood Tracking',
        'Therapy Recommendations',
        'Crisis Detection',
        'Meditation Guidance',
        'Progress Monitoring',
        'Provider Integration',
        'Privacy Protection',
        '24/7 Support'
      ],
      benefits: [
        'Improve mental health outcomes',
        'Provide 24/7 support',
        'Reduce healthcare costs',
        'Enable early intervention',
        'Enhance accessibility'
      ],
      marketPrice: '$2,000-6,000/month',
      category: 'Mental Health',
      technologies: ['NLP', 'Sentiment Analysis', 'Mobile Apps', 'Privacy-Preserving ML', 'Therapy APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Clinical Trial Optimization',
      description: 'Intelligent clinical trial management with patient recruitment, protocol optimization, and outcome prediction.',
      icon: '🔬',
      price: '$2,499/month',
      features: [
        'Patient Recruitment',
        'Protocol Optimization',
        'Outcome Prediction',
        'Site Selection',
        'Risk Management',
        'Regulatory Compliance',
        'Data Management',
        'Analytics Dashboard'
      ],
      benefits: [
        'Reduce trial duration by 30%',
        'Improve recruitment by 50%',
        'Lower trial costs by 25%',
        'Increase success rates',
        'Ensure compliance'
      ],
      marketPrice: '$7,500-20,000/month',
      category: 'Clinical Trials',
      technologies: ['Machine Learning', 'Predictive Analytics', 'Clinical Data', 'Regulatory APIs', 'Patient Databases'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Healthcare Analytics',
      description: 'Comprehensive healthcare analytics platform with population health insights, cost optimization, and quality metrics.',
      icon: '📈',
      price: '$1,899/month',
      features: [
        'Population Health Analytics',
        'Cost Optimization',
        'Quality Metrics',
        'Outcome Prediction',
        'Risk Stratification',
        'Resource Planning',
        'Benchmarking',
        'Custom Reports'
      ],
      benefits: [
        'Improve population health',
        'Reduce healthcare costs by 20%',
        'Optimize resource allocation',
        'Enable data-driven decisions',
        'Improve quality metrics'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Healthcare Analytics',
      technologies: ['Big Data Analytics', 'Machine Learning', 'Data Visualization', 'Cloud Computing', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI healthcare solutions including medical imaging, drug discovery, and patient monitoring. Starting at $799/month." />
        <meta name="keywords" content="ai healthcare, medical imaging, drug discovery, patient monitoring, telemedicine, mental health, clinical trials" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform healthcare delivery with AI-powered solutions that improve patient outcomes, reduce costs, and accelerate medical breakthroughs.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">Healthcare Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$799</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">HIPAA</div>
              <div className="text-gray-300">Compliant</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Healthcare AI Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
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
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
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
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI healthcare solutions today and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
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

export default AIHealthcareSolutionsPage;