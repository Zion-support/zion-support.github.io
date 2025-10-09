'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart, 
  Target, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Award,
  TrendingUp,
  Globe,
  Lock,
  Building,
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Home,
  Car,
  Plane
} from 'lucide-react';

const IndustriesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered medical solutions, electronic health records, and healthcare IT infrastructure.',
      color: 'from-red-500 to-pink-500',
      services: [
        'Medical AI diagnostics',
        'Electronic health records',
        'Telemedicine platforms',
        'Medical imaging AI',
        'Patient management systems',
        'Healthcare analytics'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced medical errors',
        'Enhanced diagnostic accuracy',
        'Streamlined workflows',
        'Cost reduction',
        'Better patient experience'
      ],
      pricing: 'Starting at $2,999/month',
      link: '/ai-healthcare'
    },
    {
      id: 'financial-services',
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Fintech solutions, fraud detection, algorithmic trading, and financial AI applications.',
      color: 'from-green-500 to-emerald-500',
      services: [
        'Fraud detection systems',
        'Algorithmic trading',
        'Credit risk assessment',
        'Anti-money laundering',
        'Regulatory compliance',
        'Customer analytics'
      ],
      benefits: [
        'Enhanced security',
        'Reduced fraud losses',
        'Improved risk management',
        'Regulatory compliance',
        'Better customer insights',
        'Operational efficiency'
      ],
      pricing: 'Starting at $3,499/month',
      link: '/ai-fintech'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: ShoppingCart,
      description: 'E-commerce AI solutions, personalization, inventory management, and customer experience optimization.',
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Product recommendation engines',
        'Dynamic pricing optimization',
        'Inventory forecasting',
        'Customer segmentation',
        'Chatbot integration',
        'Visual search capabilities'
      ],
      benefits: [
        'Increased conversion rates',
        'Better customer experience',
        'Optimized inventory management',
        'Personalized shopping',
        'Reduced cart abandonment',
        'Higher customer satisfaction'
      ],
      pricing: 'Starting at $1,999/month',
      link: '/ai-ecommerce-solutions'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Building,
      description: 'Industrial AI, automation, predictive maintenance, and smart manufacturing solutions.',
      color: 'from-gray-500 to-slate-500',
      services: [
        'Predictive maintenance',
        'Quality control AI',
        'Supply chain optimization',
        'Robotic process automation',
        'Energy management',
        'Production optimization'
      ],
      benefits: [
        'Reduced downtime',
        'Improved quality control',
        'Cost optimization',
        'Increased productivity',
        'Better resource utilization',
        'Enhanced safety'
      ],
      pricing: 'Starting at $2,499/month',
      link: '/ai-automation'
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      description: 'Educational technology, AI learning platforms, and digital transformation for educational institutions.',
      color: 'from-purple-500 to-violet-500',
      services: [
        'AI-powered learning platforms',
        'Student performance analytics',
        'Personalized learning paths',
        'Automated grading systems',
        'Virtual classroom solutions',
        'Educational content generation'
      ],
      benefits: [
        'Personalized learning',
        'Improved student outcomes',
        'Reduced administrative burden',
        'Better engagement',
        'Data-driven insights',
        'Scalable education delivery'
      ],
      pricing: 'Starting at $1,299/month',
      link: '/ai-services'
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      icon: Home,
      description: 'Property management AI, real estate analytics, and digital transformation solutions.',
      color: 'from-orange-500 to-red-500',
      services: [
        'Property valuation AI',
        'Market analysis tools',
        'Property management systems',
        'Virtual property tours',
        'Lead generation AI',
        'Investment analytics'
      ],
      benefits: [
        'Accurate property valuations',
        'Better market insights',
        'Improved lead generation',
        'Streamlined operations',
        'Enhanced customer experience',
        'Data-driven decisions'
      ],
      pricing: 'Starting at $1,799/month',
      link: '/ai-services'
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: Car,
      description: 'Transportation AI, logistics optimization, and smart mobility solutions.',
      color: 'from-indigo-500 to-purple-500',
      services: [
        'Route optimization',
        'Fleet management AI',
        'Predictive maintenance',
        'Demand forecasting',
        'Autonomous vehicle systems',
        'Traffic management'
      ],
      benefits: [
        'Optimized routes',
        'Reduced fuel costs',
        'Improved safety',
        'Better customer service',
        'Reduced emissions',
        'Operational efficiency'
      ],
      pricing: 'Starting at $2,199/month',
      link: '/ai-services'
    },
    {
      id: 'travel-hospitality',
      name: 'Travel & Hospitality',
      icon: Plane,
      description: 'Travel AI solutions, hospitality management, and customer experience optimization.',
      color: 'from-cyan-500 to-blue-500',
      services: [
        'Dynamic pricing optimization',
        'Customer service AI',
        'Revenue management',
        'Personalized recommendations',
        'Booking optimization',
        'Guest experience analytics'
      ],
      benefits: [
        'Increased revenue',
        'Better customer experience',
        'Optimized pricing',
        'Improved occupancy rates',
        'Enhanced guest satisfaction',
        'Operational efficiency'
      ],
      pricing: 'Starting at $1,599/month',
      link: '/ai-services'
    }
  ];

  const filteredIndustries = selectedIndustry === 'all' 
    ? industries 
    : industries.filter(industry => industry.id === selectedIndustry);

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Industries">
            Industries
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Industry-Specific AI and IT Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            We specialize in delivering tailored AI and IT solutions for specific industries, 
            understanding the unique challenges and opportunities each sector presents.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredIndustries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Our Services:</h4>
                  <ul className="space-y-1">
                    {industry.services.slice(0, 3).map((service, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                    {industry.services.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{industry.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {industry.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                    {industry.benefits.length > 2 && (
                      <li className="text-sm text-gray-400">
                        +{industry.benefits.length - 2} more benefits
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-cyan-400">{industry.pricing}</div>
                </div>
                
                <Link
                  href={industry.link}
                  className="w-full cyber-button text-center inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Industry Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Industry Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Deep Industry Knowledge</h3>
              <p className="text-gray-300">
                Our team has extensive experience across multiple industries, understanding 
                unique challenges and regulatory requirements.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Rocket className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Solutions</h3>
              <p className="text-gray-300">
                We've successfully implemented solutions for 500+ clients across various 
                industries with measurable results.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Compliance Ready</h3>
              <p className="text-gray-300">
                Our solutions are designed to meet industry-specific compliance requirements 
                and regulatory standards.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Measurable ROI</h3>
              <p className="text-gray-300">
                Our industry solutions deliver measurable business value and return on investment.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-gray-300">
                We serve clients worldwide with localized solutions and 24/7 support.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dedicated Teams</h3>
              <p className="text-gray-300">
                Industry-specific teams with deep expertise and ongoing support for your success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our industry experts help you implement the right AI and IT solutions for your sector. 
            Schedule a free consultation to discuss your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.phone}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.email}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;