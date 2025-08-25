import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Scale, 
  Leaf, 
  Heart, 
  Cpu, 
  DollarSign, 
  Atom, 
  Truck, 
  Globe,
  Rocket,
  TrendingUp,
  Star,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  path: string;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      path: '/services/ai-services',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      path: '/services/cybersecurity',
      features: ['Threat Detection', 'Incident Response', 'Security Audits', 'Compliance Management']
    },
    {
      id: 'legal-tech',
      title: 'Legal Technology',
      description: 'Innovative legal tech solutions to streamline legal processes and operations.',
      icon: Scale,
      color: 'from-blue-500 to-indigo-500',
      path: '/services/legal-tech',
      features: ['Contract Analysis', 'Legal Research', 'Case Management', 'Document Automation']
    },
    {
      id: 'green-it',
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions to reduce environmental impact.',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      path: '/green-it',
      features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Sustainable Infrastructure', 'Green Computing']
    },
    {
      id: 'healthcare-tech',
      title: 'Healthcare Technology',
      description: 'Advanced healthcare solutions to improve patient care and operational efficiency.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      path: '/services/healthcare-tech',
      features: ['Electronic Health Records', 'Telemedicine', 'Medical Imaging', 'Patient Monitoring']
    },
    {
      id: 'it-solutions',
      title: 'IT Infrastructure',
      description: 'Comprehensive IT solutions to build and maintain robust technology infrastructure.',
      icon: Cpu,
      color: 'from-gray-500 to-slate-500',
      path: '/services/it-solutions',
      features: ['Cloud Migration', 'Network Security', 'Data Management', 'System Integration']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer cutting-edge technology solutions across multiple industries, 
            helping businesses innovate and thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to={service.path}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-medium group-hover:translate-x-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-blue-500/10 border border-zion-cyan/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-zion-cyan/90 hover:to-blue-500/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-medium hover:bg-zion-cyan hover:text-black transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;