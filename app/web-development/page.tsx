const $1: React.FC = () => {;
  const webServices = [,;
    {,;
      title: 'Frontend Development',;
      description: 'Modern, responsive web applications with cutting-edge technologies',;
      icon: Code,;
      price: '$1,200/month',;
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],;
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],;}
      color: 'text-blue-400'},;
    {;
      title: 'Backend Development',;
      description: 'Scalable server-side solutions and API development',;
      icon: Database,;
      price: '$1,500/month',;
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],;
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],;}
      color: 'text-green-400'},;
    {;
      title: 'Full-Stack Development',;
      description: 'Complete web solutions from frontend to backend',;
      icon: Globe,;
      price: '$2,200/month',;
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],;
      benefits: ['Unified solution', 'Faster development', 'Better performance'],;}
      color: 'text-purple-400'},;
    {;
      title: 'E-commerce Development',;
      description: 'Custom e-commerce platforms and online stores',;
      icon: Smartphone,;
      price: '$1,800/month',;
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],;
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],;}
      color: 'text-orange-400'},;
    {;
      title: 'Maintenance & Support',;
      description: 'Ongoing maintenance and support for your web applications',;
      icon: Users,;
      price: '$500/month',;
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],;}
      color: 'text-gray-400'}
  ];
  const technologies = [
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    { name: 'Node.js', icon: Database, description: 'Server-side JavaScript' },
    { name: 'Python/Django', icon: Globe, description: 'Backend development' },
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' }
  ];
  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart,
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code,
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe,
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield,
    }
  ];
  return(<React.Fragment>
