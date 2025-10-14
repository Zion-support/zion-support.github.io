import SEOOptimizer from "../components/SEOOptimizer";

export default function ITServices() {
  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including AWS, Azure, and Google Cloud Platform migration and optimization",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud strategy & planning",
        "AWS/Azure/GCP migration",
        "Cloud cost optimization",
        "Disaster recovery setup",
        "Auto-scaling configuration",
        "Security & compliance",
        "24/7 monitoring & support",
        "Performance optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase system reliability"
      ],
      category: "Infrastructure",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-suite",
      name: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Compliance management",
        "Firewall configuration",
        "Intrusion detection"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Ensure compliance with regulations",
        "Reduce security incidents by 85%",
        "Improve security posture"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-solutions",
      featured: true
    },
    {
      id: "web-development",
      name: "Web Development Services",
      description: "Custom web applications, e-commerce solutions, and responsive websites built with modern technologies",
      price: "From $2,999/project",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Custom web applications",
        "E-commerce solutions",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Security implementation",
        "Content management systems",
        "API development"
      ],
      benefits: [
        "Increase online presence",
        "Improve user experience",
        "Boost conversion rates",
        "Enhance brand credibility"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1156,
      link: "/web-development",
      featured: true
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
      price: "From $4,999/project",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization",
        "Push notifications",
        "Analytics integration",
        "Offline functionality",
        "Security implementation"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase brand visibility",
        "Generate additional revenue"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 743,
      link: "/mobile-development",
      featured: false
    },
    {
      id: "database-management",
      name: "Database Management",
      description: "Comprehensive database services including design, optimization, migration, and performance tuning",
      price: "From $199/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Database design & architecture",
        "Performance tuning",
        "Migration services",
        "Backup & recovery",
        "Security hardening",
        "Monitoring & maintenance",
        "Query optimization",
        "Data integrity checks"
      ],
      benefits: [
        "Improve database performance",
        "Ensure data security",
        "Reduce downtime",
        "Optimize storage costs"
      ],
      category: "Data Services",
      rating: 4.7,
      reviews: 567,
      link: "/database-management",
      featured: false
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      description: "Tailored software solutions designed to meet specific business requirements with scalable architecture",
      price: "From $5,999/project",
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Custom software solutions",
        "Scalable architecture",
        "API development",
        "Integration services",
        "Quality assurance",
        "Documentation",
        "User training",
        "Ongoing support"
      ],
      benefits: [
        "Meet specific business needs",
        "Improve operational efficiency",
        "Gain competitive advantage",
        "Reduce manual processes"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 423,
      link: "/custom-software",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: 12, active: true },
    { name: "Infrastructure", count: 3, active: false },
    { name: "Security", count: 2, active: false },
    { name: "Development", count: 4, active: false },
    { name: "Data Services", count: 2, active: false },
    { name: "Support", count: 1, active: false }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "IT Services", icon: <Settings className="w-6 h-6" /> }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Analyze your current IT infrastructure and identify areas for improvement",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive IT strategy aligned with your business goals",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with minimal disruption to your business operations",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Enterprise Solutions Inc.",
      role: "CTO",
      content: "Zion's IT services transformed our entire infrastructure. The cloud migration was seamless and our systems are now 40% more efficient.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      company: "TechStart Ventures",
      role: "CEO",
      content: "Outstanding cybersecurity solutions and support. Our security posture improved dramatically with their comprehensive approach.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "Digital Agency",
      role: "Operations Director",
      content: "The custom software development exceeded our expectations. Professional, reliable, and delivered on time and within budget.",
      rating: 5,
      avatar: "RM"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic IT Support",
      price: "$99",
      period: "/month",
      description: "Essential IT support for small businesses",
      features: [
        "24/7 Help Desk",
        "Remote Support",
        "Basic Maintenance",
        "Email Support",
        "System Monitoring",
        "Monthly Reports"
      ],
      popular: false
    },
    {
      name: "Professional IT Services",
      price: "$299",
      period: "/month",
      description: "Comprehensive IT services for growing businesses",
      features: [
        "All Basic Features",
        "Proactive Monitoring",
        "Security Management",
        "Cloud Services",
        "Priority Support",
        "Quarterly Reviews",
        "Backup & Recovery",
        "Software Updates"
      ],
      popular: true
    },
    {
      name: "Enterprise IT Solutions",
      price: "$599",
      period: "/month",
      description: "Full-service IT solutions for large organizations",
      features: [
        "All Professional Features",
        "Dedicated Account Manager",
        "Custom Solutions",
        "Advanced Security",
        "Disaster Recovery",
        "Compliance Management",
        "Strategic Consulting",
        "Unlimited Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions;
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation;
              </h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support;
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today,
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
)}
            </button>
          </div>
        </div>
      </div>
    </div>
)}
};
