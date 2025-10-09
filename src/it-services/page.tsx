import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Server, Database, BarChart, Users, CheckCircle, ArrowRight, Star, Clock, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cybersecurity',
      description: 'Advanced threat protection with comprehensive security solutions and real-time monitoring.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Monitoring', 'Compliance Reporting', 'Penetration Testing'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced Security Posture', 'Reduced Risk', 'Compliance Assurance', 'Peace of Mind'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Firewalls', 'Intrusion Detection']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration services with 99.9% uptime guarantee and comprehensive support.',
      icon: Cloud,
      features: ['Cloud Strategy', 'Migration Planning', 'Data Transfer', 'Application Modernization', 'Security Implementation', 'Ongoing Support'],
      price: 'Starting at $1,500/month',
      category: 'Cloud',
      benefits: ['Scalability', 'Cost Reduction', 'Improved Performance', 'Enhanced Security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with comprehensive management and 24/7 support.',
      icon: Server,
      features: ['Network Setup', 'Server Management', 'Backup Solutions', 'Disaster Recovery', 'Performance Monitoring', '24/7 Support'],
      price: 'Starting at $1,200/month',
      category: 'Infrastructure',
      benefits: ['Reliable Infrastructure', 'Reduced Downtime', 'Improved Efficiency', 'Cost Savings'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory', 'Exchange']
    },
    {
      title: 'Database Management',
      description: 'Comprehensive database solutions with optimization, security, and performance monitoring.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Maintenance'],
      price: 'Starting at $800/month',
      category: 'Database',
      benefits: ['Optimized Performance', 'Data Security', 'Reduced Downtime', 'Cost Efficiency'],
      technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with comprehensive BI and analytics solutions.',
      icon: BarChart,
      features: ['Data Visualization', 'Report Generation', 'Dashboard Creation', 'Data Warehousing', 'ETL Processes', 'Predictive Analytics'],
      price: 'Starting at $1,000/month',
      category: 'Analytics',
      benefits: ['Data-Driven Decisions', 'Improved Efficiency', 'Competitive Advantage', 'Cost Optimization'],
      technologies: ['Power BI', 'Tableau', 'QlikView', 'SSRS', 'SSAS', 'SSIS']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize investments.',
      icon: Users,
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Evaluation', 'Cost Analysis', 'Implementation Guidance', 'Training'],
      price: 'Starting at $150/hour',
      category: 'Consulting',
      benefits: ['Strategic Guidance', 'Cost Optimization', 'Risk Mitigation', 'Technology Alignment'],
      technologies: ['IT Strategy', 'Architecture Design', 'Vendor Management', 'Project Management']
    }
  ];

  const benefits = [
    '99.9% Uptime Guarantee',
    '24/7 Expert Support',
    '50% Cost Reduction',
    '300% Performance Improvement'
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'Enterprise Solutions Inc.',
      role: 'IT Director',
      content: 'Zion Tech Group transformed our IT infrastructure. We achieved 99.9% uptime and reduced costs by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'DataCorp Systems',
      role: 'CTO',
      content: 'Their cybersecurity solutions protected us from multiple threats. The peace of mind is invaluable.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'CloudFirst Technologies',
      role: 'VP of Engineering',
      content: 'The cloud migration was seamless. Our applications run faster and more reliably than ever.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to optimize your technology infrastructure and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600">
              Proven expertise and reliable solutions that deliver results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <Link
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technologies and industry-standard tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Windows Server', 'Linux', 'VMware', 'SQL Server', 'MySQL', 'MongoDB'].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl font-bold text-gray-700">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT services can help you achieve better performance, security, and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get IT Consultation
            </Link>
            <Link
              to="/case-studies"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ItServicesPage;