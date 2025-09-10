
const CaseStudies: NextPage = () => {
  const caseStudies = [;
    {
      id: 1,;
      title: 'Healthcare AI Platform Transformation',;
      client: 'MedTech Solutions',;
      industry: 'Healthcare',;
      challenge: 'Legacy system modernization and AI integration for patient data management',;
      solution: 'Implemented cloud-native AI platform with real-time analytics and predictive modeling',;
      results: [;
        '40% reduction in patient data processing time',;
        '60% improvement in diagnostic accuracy',;
        '99.9% system uptime achieved',;
        '$2M annual cost savings';
      ],;
      technologies: ['AI/ML', 'Cloud Computing', 'Data Analytics', 'Security'],;
      duration: '6 months',;
      teamSize: '12 developers',;
      image: '/case-studies/healthcare-ai.jpg'},;
    {
      id: 2,;
      title: 'Financial Services Digital Transformation',;
      client: 'FinSecure Bank',;
      industry: 'Financial Services',;
      challenge: 'Digital banking platform modernization and fraud detection enhancement',;
      solution: 'Built comprehensive digital banking platform with advanced AI-powered fraud detection',;
      results: [;
        '50% increase in mobile banking adoption',;
        '85% reduction in fraudulent transactions',;
        '3x faster loan processing',;
        '99.95% system reliability';
      ],;
      technologies: ['Blockchain', 'AI/ML', 'Mobile Development', 'Security'],;
      duration: '8 months',;
      teamSize: '15 developers',;
      image: '/case-studies/financial-services.jpg'},;
    {
      id: 3,;
      title: 'Manufacturing IoT Integration',;
      client: 'AutoParts Manufacturing',;
      industry: 'Manufacturing',;
      challenge: 'Smart factory implementation with IoT sensors and predictive maintenance',;
      solution: 'Deployed comprehensive IoT platform with real-time monitoring and predictive analytics',;
      results: [;
        '30% reduction in equipment downtime',;
        '25% increase in production efficiency',;
        '50% decrease in maintenance costs',;
        'Real-time quality monitoring';
      ],;
      technologies: ['IoT', 'Data Analytics', 'Cloud Computing', 'AI/ML'],;
      duration: '10 months',;
      teamSize: '18 developers',;
      image: '/case-studies/manufacturing-iot.jpg'},;
    {
      id: 4,;
      title: 'E-commerce Platform Scaling',;
      client: 'RetailMax',;
      industry: 'Retail',;
      challenge: 'High-traffic e-commerce platform scaling and performance optimization',;
      solution: 'Implemented microservices architecture with auto-scaling and CDN optimization',;
      results: [;
        '10x increase in concurrent users',;
        '90% reduction in page load times',;
        '99.9% uptime during peak seasons',;
        '300% increase in conversion rates';
      ],;
      technologies: ['Microservices', 'Cloud Computing', 'CDN', 'Performance Optimization'],;
      duration: '4 months',;
      teamSize: '10 developers',;
      image: '/case-studies/ecommerce-scaling.jpg'},;
    {
      id: 5,;
      title: 'Government Data Analytics Platform',;
      client: 'CitySmart Government',;
      industry: 'Government',;
      challenge: 'Citizen data management and analytics for smart city initiatives',;
      solution: 'Built secure data analytics platform with citizen engagement features',;
      results: [;
        '70% improvement in data processing speed',;
        '95% citizen satisfaction rating',;
        '40% reduction in service response time',;
        'Complete data security compliance';
      ],;
      technologies: ['Data Analytics', 'Security', 'Cloud Computing', 'AI/ML'],;
      duration: '12 months',;
      teamSize: '20 developers',;
      image: '/case-studies/government-analytics.jpg'},;
    {
      id: 6,;
      title: 'EdTech Learning Platform',;
      client: 'EduTech Innovations',;
      industry: 'Education',;
      challenge: 'Scalable online learning platform with AI-powered personalization',;
      solution: 'Developed comprehensive learning management system with AI tutoring and analytics',;
      results: [;
        '80% improvement in student engagement',;
        '45% increase in course completion rates',;
        '60% reduction in administrative overhead',;
        'Personalized learning paths for 50K+ students';
      ],;
      technologies: ['AI/ML', 'Cloud Computing', 'Mobile Development', 'Analytics'],;
      duration: '9 months',;
      teamSize: '14 developers',;
      image: '/case-studies/edtech-platform.jpg'}
  ];

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Healthcare':;