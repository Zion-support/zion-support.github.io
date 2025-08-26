import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Globe,
  Smartphone,
  Lock,
  BarChart3
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-16 h-16 text-blue-500" />,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
      price: "$8,000 - $25,000",
      features: [
        "Custom AI Model Development",
        "Machine Learning Training",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Strategy Consulting"
      ],
      benefits: [
        "Increased operational efficiency",
        "Data-driven decision making",
        "Competitive advantage",
        "Cost reduction through automation"
      ],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Cloud className="w-16 h-16 text-green-500" />,
      title: "Cloud & DevOps",
      description: "Build scalable, secure, and efficient cloud infrastructure with modern DevOps practices.",
      price: "$5,000 - $20,000",
      features: [
        "Cloud Migration & Strategy",
        "AWS/Azure/GCP Implementation",
        "Docker & Kubernetes",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "24/7 Monitoring & Support"
      ],
      benefits: [
        "Scalable infrastructure",
        "Reduced operational costs",
        "Improved deployment speed",
        "Enhanced security & compliance"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Shield className="w-16 h-16 text-red-500" />,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and compliance frameworks.",
      price: "$10,000 - $30,000",
      features: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "SOC 2 Compliance",
        "Incident Response Planning",
        "Security Training",
        "Threat Intelligence"
      ],
      benefits: [
        "Protection against cyber threats",
        "Regulatory compliance",
        "Customer trust & confidence",
        "Reduced risk exposure"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Database className="w-16 h-16 text-orange-500" />,
      title: "Data & Analytics",
      description: "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      price: "$6,000 - $22,000",
      features: [
        "Data Warehouse Design",
        "ETL Pipeline Development",
        "Business Intelligence Dashboards",
        "Real-time Analytics",
        "Data Governance",
        "Machine Learning Integration"
      ],
      benefits: [
        "Data-driven insights",
        "Improved decision making",
        "Operational efficiency",
        "Competitive intelligence"
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Globe className="w-16 h-16 text-indigo-500" />,
      title: "Web Development",
      description: "Create stunning, high-performance websites and web applications that drive results.",
      price: "$3,000 - $15,000",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Development",
        "Performance Optimization",
        "SEO & Accessibility"
      ],
      benefits: [
        "Professional online presence",
        "Improved user experience",
        "Better search rankings",
        "Increased conversions"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Smartphone className="w-16 h-16 text-cyan-500" />,
      title: "Mobile Development",
      description: "Build native and cross-platform mobile applications that engage your users.",
      price: "$8,000 - $25,000",
      features: [
        "iOS & Android Development",
        "React Native Apps",
        "Flutter Applications",
        "App Store Optimization",
        "Push Notifications",
        "Analytics Integration"
      ],
      benefits: [
        "Mobile-first user experience",
        "Increased user engagement",
        "App store visibility",
        "Cross-platform compatibility"
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your business needs and create a comprehensive technology roadmap.",
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Our experts design scalable solutions using industry best practices.",
      icon: <BarChart3 className="w-8 h-8 text-green-400" />
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build your solution with rigorous testing and quality assurance.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing support and maintenance services.",
      icon: <Lock className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="flex items-start gap-6">
                  {service.icon}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-blue-200 mb-4">{service.description}</p>
                    <div className="text-blue-400 font-semibold text-lg mb-4">{service.price}</div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-blue-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-blue-200">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact" className={`w-full btn-primary bg-gradient-to-r ${service.color} hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center`}>
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-blue-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary px-8 py-4 text-lg">
              Schedule Free Consultation
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;