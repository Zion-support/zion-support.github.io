import React from 'react';
import { 
  Users, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Globe,
  Shield,
  Zap,
  Brain,
  Code,
  Cloud,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  const title = 'About Us — Zion Tech Group';
  const description = 'Learn about Zion Tech Group - a leading provider of AI, micro SaaS, and IT solutions. Our mission, values, and expertise.';

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Average ROI', value: '340%', icon: DollarSign },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Years of Experience', value: '10+', icon: Clock }
  ];

  const services = [
    {
      name: 'AI Services & Solutions',
      icon: Brain,
      description: 'Intelligent automation and AI-powered solutions that drive real business results',
      expertise: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      name: 'Micro SaaS Solutions',
      icon: Code,
      description: 'Production-ready micro SaaS applications for modern businesses',
      expertise: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Integration']
    },
    {
      name: 'Cloud Infrastructure & DevOps',
      icon: Cloud,
      description: 'Enterprise-grade cloud infrastructure and DevOps automation',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security solutions and compliance automation',
      expertise: ['SOC2/GDPR/HIPAA', 'Penetration Testing', 'Security Monitoring', 'Risk Assessment']
    },
    {
      name: 'Data Analytics & BI',
      icon: BarChart3,
      description: 'Transform data into actionable business insights',
      expertise: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics', 'Real-time Processing']
    },
    {
      name: 'IT Services & Solutions',
      icon: Settings,
      description: 'Comprehensive IT services and infrastructure management',
      expertise: ['System Administration', 'Network Management', 'Database Optimization', 'Technical Support']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable business outcomes and ROI for our clients'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build long-term partnerships.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to provide cutting-edge solutions'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Security and compliance are built into every solution we deliver'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'We deliver projects quickly without compromising on quality'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      expertise: 'AI & Technology Strategy',
      experience: '10+ years in AI and enterprise technology'
    },
    {
      name: 'AI Engineering Team',
      role: 'Senior AI Engineers',
      expertise: 'Machine Learning & Automation',
      experience: 'Expertise in cutting-edge AI technologies'
    },
    {
      name: 'DevOps Specialists',
      role: 'Cloud & Infrastructure',
      expertise: 'Cloud Architecture & Automation',
      experience: 'Certified in AWS, Azure, and GCP'
    },
    {
      name: 'Security Experts',
      role: 'Cybersecurity Team',
      expertise: 'Security & Compliance',
      experience: 'SOC2, GDPR, HIPAA compliance specialists'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008\nMiddletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'https://ziontechgroup.com',
      link: 'https://ziontechgroup.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Leading provider of AI, micro SaaS, and IT solutions. Transforming businesses with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To empower businesses with cutting-edge AI, micro SaaS, and IT solutions that drive growth, 
              efficiency, and innovation. We believe technology should be accessible, secure, and transformative.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.expertise.map((area, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.expertise}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to work with us? Let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <a 
                  href={contact.link} 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our expertise and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}