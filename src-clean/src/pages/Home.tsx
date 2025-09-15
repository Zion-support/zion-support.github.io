import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI & Machine Learning",
      description: "Custom AI development, ML model training, and strategic consulting",
      price: "$8,000 - $25,000",
      features: ["Custom AI Models", "ML Training", "Strategy Consulting", "Integration"],
      link: "/services",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-500" />,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, CI/CD pipelines, and scalable solutions",
      price: "$5,000 - $20,000",
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "Monitoring", "Security"],
      link: "/services",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Cybersecurity",
      description: "Comprehensive security audits, penetration testing, and compliance",
      price: "$10,000 - $30,000",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      link: "/services",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: "Data & Analytics",
      description: "Big data solutions, analytics platforms, and business intelligence",
      price: "$6,000 - $22,000",
      features: ["Data Warehousing", "Analytics Platforms", "BI Tools", "Machine Learning"],
      link: "/services",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technologies"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Expert Team",
      description: "Certified professionals with 10+ years experience"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "Proven Results",
      description: "500+ successful projects delivered on time"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            Transforming businesses through cutting-edge technology solutions. 
            AI, Cloud, Cybersecurity, and Data Analytics expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/services" className="btn-primary inline-flex items-center">
              Explore Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get Started
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We deliver innovative solutions that drive business growth and digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive technology solutions to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="text-blue-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                <p className="text-blue-200 mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={service.link} className={`w-full btn-primary bg-gradient-to-r ${service.color} hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center`}>
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your technology needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-200">+1 (302) 464-0950</p>
            </div>
            <div className="card text-center">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-200">kleber@ziontechgroup.com</p>
            </div>
            <div className="card text-center">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-blue-200">364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary px-8 py-4 text-lg">
              Schedule Consultation
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;