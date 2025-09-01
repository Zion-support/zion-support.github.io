import React from 'react';
import { ClipboardList, Search, Settings, CheckCircle, Users, Headphones, FileText, Star, Clock export const ServiceProcessSteps = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your current IT infrastructure, business needs, and objectives.',
      icon: Search,
      color: 'blue',
      details[;
        'Infrastructure audit and documentation review',
        'Business requirements gathering',
        'Current pain points identification',
        'Compliance and security assessment',
        'Budget and timeline discussion'
      ],;
      duration: '1-2 days',
      team: 'Project Manager + Senior Engineer'
    },
    {
      step: 2,
      title: 'Planning & Design',
      description: 'Our team creates a comprehensive solution design tailored to your specific needs.',
      icon: ClipboardList,
      color: 'green',
      details[;
        'Solution architecture design',
        'Technology stack selection',
        'Implementation timeline planning',
        'Resource allocation',
        'Risk assessment and mitigation'
      ],;
      duration: '3-5 days',
      team: 'Solution Architect + Technical Lead'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Expert engineers execute the planned solution with precision and attention to detail.',
      icon: Settings,
      color: 'purple',
      details[;
        'Infrastructure setup and configuration',
        'Security implementation',
        'Integration and testing',
        'Documentation creation',
        'Quality assurance checks'
      ],;
      duration: '1-4 weeks',
      team: 'Implementation Engineers + Security Specialist'
    },
    {
      step: 4,
      title: 'Testing & Validation',
      description: 'Rigorous testing ensures everything works perfectly before going live.',
      icon: CheckCircle,
      color: 'orange',
      details[;
        'Functional testing and validation',
        'Performance and load testing',
        'Security penetration testing',
        'User acceptance testing',
        'Compliance verification'
      ],;
      duration: '2-5 days',
      team: 'QA Engineers + Security Team'
    },
    {
      step: 5,
      title: 'Deployment & Go-Live',
      description: 'Carefully managed deployment ensures smooth transition to the new system.',
      icon: Users,
      color: 'red',
      details[;
        'Production deployment',
        'Data migration and verification',
        'User training and onboarding',
        'Go-live support',
        'Performance monitoring'
      ],;
      duration: '1-2 days',
      team: 'Deployment Team + Support Engineers'
    },
    {
      step: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance ensure your system continues to perform optimally.',
      icon: Headphones,
      color: 'indigo',
      details[;
        '24/7 technical support',
        'Regular maintenance and updates',
        'Performance optimization',
        'Security monitoring',
        'Continuous improvement'
      ],;
      duration: 'Ongoing',
      team: 'Support Team + Maintenance Engineers'
  ];
  const getColorClasses = (color) => {
    const colorMap = {
  blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200'





}



}


}

}
}