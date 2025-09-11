import React from 'react';
import { ClipboardList, Search, Settings, CheckCircle, Users, Headphones, FileText, Star, Clock } from 'lucide-react';

export const ServiceProcessSteps = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your current IT infrastructure, business needs, and objectives.',
      icon: Search,
      color: 'blue',
      details: [
        'Infrastructure audit and documentation review',
        'Business requirements gathering',
        'Current pain points identification',
        'Compliance and security assessment',
        'Budget and timeline discussion'
      ],
      duration: '1-2 days',
      team: 'Project Manager + Senior Engineer'
    },
    {
      step: 2,
      title: 'Planning & Design',
      description: 'Our team creates a comprehensive solution design tailored to your specific needs.',
      icon: ClipboardList,
      color: 'green',
      details: [
        'Solution architecture design',
        'Technology stack selection',
        'Implementation timeline planning',
        'Resource allocation',
        'Risk assessment and mitigation'
      ],
      duration: '3-5 days',
      team: 'Solution Architect + Technical Lead'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Expert engineers execute the planned solution with precision and attention to detail.',
      icon: Settings,
      color: 'purple',
      details: [
        'Infrastructure setup and configuration',
        'Security implementation',
        'Integration and testing',
        'Documentation creation',
        'Quality assurance checks'
      ],
      duration: '1-4 weeks',
      team: 'Implementation Engineers + Security Specialist'
    },
    {
      step: 4,
      title: 'Testing & Validation',
      description: 'Rigorous testing ensures everything works perfectly before going live.',
      icon: CheckCircle,
      color: 'orange',
      details: [
        'Functional testing and validation',
        'Performance and load testing',
        'Security penetration testing',
        'User acceptance testing',
        'Compliance verification'
      ],
      duration: '2-5 days',
      team: 'QA Engineers + Security Team'
    },
    {
      step: 5,
      title: 'Deployment & Go-Live',
      description: 'Carefully managed deployment ensures smooth transition to the new system.',
      icon: Users,
      color: 'red',
      details: [
        'Production deployment',
        'Data migration and verification',
        'User training and onboarding',
        'Go-live support',
        'Performance monitoring'
      ],
      duration: '1-2 days',
      team: 'Deployment Team + Support Engineers'
    },
    {
      step: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance ensure your system continues to perform optimally.',
      icon: Headphones,
      color: 'indigo',
      details: [
        '24/7 technical support',
        'Regular maintenance and updates',
        'Performance optimization',
        'Security monitoring',
        'Continuous improvement'
      ],
      duration: 'Ongoing',
      team: 'Support Team + Maintenance Engineers'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  const getGradientClasses = (color) => {
    const gradientMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return gradientMap[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Service Delivery Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven, systematic approach to ensure successful project delivery. 
            Each step is carefully planned and executed to meet your business objectives.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-purple-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Number */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl font-bold ${getColorClasses(step.color)}`}>
                    {step.step}
                  </div>
                </div>

                <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}>
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                      {/* Step Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(step.color)}`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>

                      {/* Step Details */}
                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Step Info */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                            <Clock className="w-4 h-4" />
                            <span>Duration</span>
                          </div>
                          <p className="font-semibold text-gray-900">{step.duration}</p>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                            <Users className="w-4 h-4" />
                            <span>Team</span>
                          </div>
                          <p className="font-semibold text-gray-900">{step.team}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:col-start-1'}`}>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-24 h-24 bg-gradient-to-r ${getGradientClasses(step.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <step.icon className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Step {step.step}</h4>
                        <p className="text-gray-600 text-sm">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Our Process Works
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Documented Process</h4>
                <p className="text-gray-600 text-sm">
                  Every step is documented and repeatable for consistent results
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
                <p className="text-gray-600 text-sm">
                  Skilled professionals with years of experience in IT services
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">
                  Multiple testing phases ensure everything works perfectly
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 text-sm">
                  Successfully delivered hundreds of projects using this process
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6">
              Let's discuss your requirements and create a customized implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="#process"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};