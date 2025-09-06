
export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services: Service[] = [
    {
      title: 'Micro SaaS Products',
      description: 'Innovative, focused software solutions for modern businesses',
      icon: Code,
      features: ['AI-Powered Video Clip Maker', 'Smart Contract Analyzer', 'Cybersecurity Threat Intelligence', 'Multi-Language Website Translator'],
      href: '/micro-saas',
      color: 'blue'
    },
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions and automation',
      icon: Cpu,
      features: ['Autonomous AI Agents', 'AI-Powered Financial Trading', 'AI Legal Document Analysis', 'AI-Powered Voice Analytics'],
      href: '/ai-services',
      color: 'purple'
    },
    {
      title: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions and cloud infrastructure',
      icon: Cloud,
      features: ['Quantum Computing Consulting', 'Blockchain & Web3 Solutions', 'DevSecOps & Security Automation', 'Enterprise Data Platform'],
      href: '/it-services',
      color: 'green'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions and threat protection',
      icon: Shield,
      features: ['Threat Intelligence', 'Security Audits', 'Penetration Testing', 'Compliance Management'],
      href: '/cybersecurity',
      color: 'red'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements for your applications',
      icon: Zap,
      features: ['Performance Audits', 'Code Optimization', 'Database Tuning', 'Caching Strategies'],
      href: '/performance',
      color: 'yellow'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive business technology solutions',
      icon: Building,
      features: ['Custom Software Development', 'System Integration', 'Digital Transformation', 'Process Automation'],
      href: '/enterprise',
      color: 'indigo'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI-powered solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      content: 'Their micro SaaS products helped us scale rapidly. The team is professional and innovative.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions Ltd.',
      content: 'Outstanding IT services and cloud solutions. They delivered on time and within budget.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Micro SaaS Products', value: '150+', icon: Code },
    { label: 'AI Services', value: '100+', icon: Cpu },
    { label: 'IT Solutions', value: '100+', icon: Cloud },
    { label: 'Happy Clients', value: '500+', icon: Users }
  ];

  if (isLoading) {
    return <LoadingSpinner fullScreen text="Loading Zion Tech Group..." />;
  }

  return (

