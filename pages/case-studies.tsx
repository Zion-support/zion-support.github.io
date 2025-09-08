
const CaseStudies: NextPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');

  const caseStudies = [
    {
      id: 'fintech-ai-fraud-detection',
      title: 'FinTech Revolution: AI-Powered Fraud Detection System',
      company: 'SecureBank Corp',
      industry: 'Financial Services',
      service: 'AI & Machine Learning',
      challenge: 'High fraud rates and false positives in transaction monitoring',
      solution: 'Implemented advanced AI fraud detection system with real-time analysis',
      results: {
        fraudReduction: '89%',
        falsePositives: '76%',
        processingSpeed: '95%',
        costSavings: '$2.4M',
        timeframe: '6 months'
      },
      description: 'SecureBank Corp was experiencing significant losses due to fraudulent transactions and customer dissatisfaction from false positive alerts. Our AI-powered fraud detection system revolutionized their security infrastructure.',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Behavioral Analysis', 'Pattern Recognition'],
      metrics: [
        { label: 'Fraud Detection Rate', value: '99.2%', improvement: '+89%' },
        { label: 'False Positives', value: '2.1%', improvement: '-76%' },
        { label: 'Processing Speed', value: '<100ms', improvement: '+95%' },
        { label: 'Annual Savings', value: '$2.4M', improvement: 'New' }
      ],
      testimonial: {
        quote: "Zion Tech Group's AI solution has transformed our fraud detection capabilities. We've seen an 89% reduction in fraud while dramatically improving customer experience.",
        author: 'Sarah Mitchell',
        role: 'Chief Risk Officer',
        avatar: 'SM'
      },
      image: '🛡️',
      featured: true,
      duration: '6 months',
      teamSize: '8 experts'
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'Healthcare Innovation: AI-Powered Medical Diagnostics Platform',
      company: 'MediCore Health System',
      industry: 'Healthcare',
      service: 'AI & Machine Learning',
      challenge: 'Slow diagnostic processes and inconsistent accuracy across different specialists',
      solution: 'Developed AI diagnostic platform with computer vision and predictive analytics',
      results: {
        diagnosticAccuracy: '94%',
        processingTime: '78%',
        patientThroughput: '65%',
        costReduction: '$1.8M',
        timeframe: '8 months'
      },
      description: 'MediCore Health System needed to improve diagnostic accuracy and speed while reducing costs. Our AI-powered medical diagnostics platform delivered exceptional results.',
      technologies: ['Computer Vision', 'Deep Learning', 'Medical Imaging', 'Predictive Analytics'],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '96.7%', improvement: '+94%' },
        { label: 'Processing Time', value: '15 min', improvement: '-78%' },
        { label: 'Patient Throughput', value: '+65%', improvement: '+65%' },
        { label: 'Cost Reduction', value: '$1.8M', improvement: 'Annual' }
      ],
      testimonial: {
        quote: "The AI diagnostics platform has revolutionized our patient care. We're seeing faster, more accurate diagnoses that are saving lives.",
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        avatar: 'MC'
      },
      image: '🏥',
      featured: true,
      duration: '8 months',
      teamSize: '12 experts'
    },
    {
      id: 'ecommerce-cloud-migration',
      title: 'E-commerce Transformation: Cloud Migration & Optimization',
      company: 'RetailMax Global',
      industry: 'E-commerce',
      service: 'Cloud & Infrastructure',
      challenge: 'Legacy infrastructure causing downtime and limiting scalability',
      solution: 'Complete cloud migration with auto-scaling and performance optimization',
      results: {
        uptime: '99.9%',
        loadTimes: '68%',
        scalability: '10x',
        costOptimization: '45%',
        timeframe: '4 months'
      },
      description: 'RetailMax Global was struggling with frequent downtime and slow performance during peak shopping seasons. Our cloud migration strategy delivered remarkable improvements.',
      technologies: ['AWS', 'Kubernetes', 'Auto-scaling', 'Load Balancing', 'CDN'],
      metrics: [
        { label: 'Uptime', value: '99.97%', improvement: '+99.9%' },
        { label: 'Page Load Time', value: '1.2s', improvement: '-68%' },
        { label: 'Scalability', value: '10x', improvement: '1000%' },
        { label: 'Infrastructure Costs', value: '-45%', improvement: '-45%' }
      ],
      testimonial: {
        quote: "Our Black Friday traffic increased 300% with zero downtime. The cloud migration has been transformational for our business.",
        author: 'Jennifer Walsh',
        role: 'CTO',
        avatar: 'JW'
      },
      image: '☁️',
      featured: false,
      duration: '4 months',
      teamSize: '6 experts'
    },
    {
      id: 'manufacturing-iot-automation',
      title: 'Smart Manufacturing: IoT-Powered Production Optimization',
      company: 'TechManufacture Inc',
      industry: 'Manufacturing',
      service: 'IoT & Automation',
      challenge: 'Inefficient production processes and lack of real-time visibility',
      solution: 'Implemented IoT sensors and automation systems for smart manufacturing',
      results: {
        efficiency: '42%',
        downtime: '67%',
        qualityImprovement: '35%',
        energySavings: '28%',
        timeframe: '10 months'
      },
      description: 'TechManufacture Inc needed to modernize their production facilities to compete in the digital age. Our IoT and automation solution transformed their operations.',
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Maintenance', 'Real-time Analytics'],
      metrics: [
        { label: 'Production Efficiency', value: '+42%', improvement: '+42%' },
        { label: 'Unplanned Downtime', value: '-67%', improvement: '-67%' },
        { label: 'Quality Score', value: '98.5%', improvement: '+35%' },
        { label: 'Energy Consumption', value: '-28%', improvement: '-28%' }
      ],
      testimonial: {
        quote: "The smart manufacturing solution has given us unprecedented visibility and control over our production processes.",
        author: 'David Rodriguez',
        role: 'Operations Director',
        avatar: 'DR'
      },
      image: '🏭',
      featured: false,
      duration: '10 months',
      teamSize: '10 experts'
    },
    {
      id: 'startup-devops-platform',
      title: 'Startup Success: Autonomous DevOps Platform Implementation',
      company: 'InnovateTech Startup',
      industry: 'Technology',
      service: 'DevOps & Infrastructure',
      challenge: 'Manual deployment processes causing delays and errors',
      solution: 'Implemented autonomous DevOps platform with CI/CD and self-healing infrastructure',
      results: {
        deploymentSpeed: '85%',
        errorReduction: '92%',
        teamProductivity: '60%',
        timeToMarket: '70%',
        timeframe: '3 months'
      },
      description: 'InnovateTech Startup was struggling with slow, error-prone deployments that were hampering their growth. Our autonomous DevOps platform accelerated their success.',
      technologies: ['CI/CD Pipeline', 'Docker', 'Kubernetes', 'Monitoring', 'Infrastructure as Code'],
      metrics: [
        { label: 'Deployment Speed', value: '< 5 min', improvement: '+85%' },
        { label: 'Deployment Errors', value: '-92%', improvement: '-92%' },
        { label: 'Team Productivity', value: '+60%', improvement: '+60%' },
        { label: 'Time to Market', value: '-70%', improvement: '-70%' }
      ],
      testimonial: {
        quote: "The DevOps platform has been a game-changer. We can now deploy features multiple times per day with complete confidence.",
        author: 'Alex Thompson',
        role: 'Founder & CEO',
        avatar: 'AT'
      },
      image: '🚀',
      featured: false,
      duration: '3 months',
      teamSize: '5 experts'
    }
  ];

  const industries = ['All', 'Financial Services', 'Healthcare', 'E-commerce', 'Manufacturing', 'Technology'];
  const services = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'DevOps & Infrastructure', 'IoT & Automation', 'Cybersecurity'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

export default CaseStudies;
