import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { comprehensiveMicroSaasServices2025 } from '../../data/2025-comprehensive-micro-saas-services';
import { innovativeITAIServices2025 } from '../../data/2025-innovative-it-ai-services';
import { expandedInnovativeServices2025 } from '../../data/2025-expanded-innovative-services';
import { emergingTechInnovationServices2025 } from '../../data/2025-emerging-tech-innovations';
import { enterpriseITInnovationServices2025 } from '../../data/2025-enterprise-it-innovations';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  customers: number;
  rating: number;
  reviews: number;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const allServices = [
    ...comprehensiveMicroSaasServices2025, 
    ...innovativeITAIServices2025,
    ...expandedInnovativeServices2025,
    ...emergingTechInnovationServices2025,
    ...enterpriseITInnovationServices2025
  ];
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Marketing')).length },
    { id: 'ai-customer-service', name: 'AI Customer Service', count: allServices.filter(s => s.category.includes('Customer Service')).length },
    { id: 'data-analytics-bi', name: 'Data Analytics & BI', count: allServices.filter(s => s.category.includes('Analytics') || s.category.includes('BI')).length },
    { id: 'ai-sales-crm', name: 'AI Sales & CRM', count: allServices.filter(s => s.category.includes('Sales') || s.category.includes('CRM')).length },
    { id: 'ai-social-media', name: 'AI Social Media', count: allServices.filter(s => s.category.includes('Social Media')).length },
    { id: 'ai-supply-chain', name: 'AI Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'ai-hr-recruitment', name: 'AI HR & Recruitment', count: allServices.filter(s => s.category.includes('HR') || s.category.includes('Recruitment')).length },
    { id: 'ai-finance-accounting', name: 'AI Finance & Accounting', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Accounting')).length },
    { id: 'quantum-computing-ai', name: 'Quantum Computing & AI', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'autonomous-ai-ml', name: 'Autonomous AI & ML', count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { id: 'edge-computing-ai', name: 'Edge Computing & AI', count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'ai-cybersecurity', name: 'AI Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'blockchain-ai', name: 'Blockchain & AI', count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'autonomous-devops', name: 'Autonomous DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'ai-data-governance', name: 'AI Data Governance', count: allServices.filter(s => s.category.includes('Data Governance')).length },
    { id: 'ai-api-management', name: 'AI API Management', count: allServices.filter(s => s.category.includes('API Management')).length },
    { id: 'autonomous-cloud-migration', name: 'Autonomous Cloud Migration', count: allServices.filter(s => s.category.includes('Cloud Migration')).length },
    { id: 'ai-legal-compliance', name: 'AI Legal & Compliance', count: allServices.filter(s => s.category.includes('Legal') || s.category.includes('Compliance')).length },
    { id: 'quantum-security-communication', name: 'Quantum Security & Communication', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Security') || s.category.includes('Communication'))).length },
    { id: 'ai-healthcare-diagnostics', name: 'AI Healthcare & Diagnostics', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Diagnostics')).length },
    { id: 'autonomous-supply-chain-logistics', name: 'Autonomous Supply Chain & Logistics', count: allServices.filter(s => s.category.includes('Supply Chain') || s.category.includes('Logistics')).length },
    { id: 'blockchain-digital-identity', name: 'Blockchain & Digital Identity', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Digital Identity')).length },
    { id: 'ai-finance-trading', name: 'AI Finance & Trading', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length },
    { id: 'space-technology-innovation', name: 'Space Technology & Innovation', count: allServices.filter(s => s.category.includes('Space') || s.category.includes('Innovation')).length },
    { id: 'metaverse-virtual-reality', name: 'Metaverse & Virtual Reality', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('Virtual Reality')).length },
    { id: 'sustainable-energy-green-tech', name: 'Sustainable Energy & Green Tech', count: allServices.filter(s => s.category.includes('Energy') || s.category.includes('Green Tech')).length },
    { id: 'advanced-robotics-automation', name: 'Advanced Robotics & Automation', count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'quantum-internet-networking', name: 'Quantum Internet & Networking', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Internet') || s.category.includes('Networking'))).length },
    { id: 'climate-tech-sustainability', name: 'Climate Tech & Sustainability', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length },
    { id: 'autonomous-vehicles-transportation', name: 'Autonomous Vehicles & Transportation', count: allServices.filter(s => s.category.includes('Vehicle') || s.category.includes('Transportation')).length },
    { id: 'brain-computer-interface-neuroscience', name: 'Brain-Computer Interface & Neuroscience', count: allServices.filter(s => s.category.includes('Brain-Computer') || s.category.includes('Neuroscience')).length },
    { id: 'synthetic-biology-biotechnology', name: 'Synthetic Biology & Biotechnology', count: allServices.filter(s => s.category.includes('Biology') || s.category.includes('Biotechnology')).length },
    { id: 'enterprise-data-analytics', name: 'Enterprise Data & Analytics', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Data') || s.category.includes('Analytics'))).length },
    { id: 'multi-cloud-infrastructure', name: 'Multi-Cloud & Infrastructure', count: allServices.filter(s => s.category.includes('Multi-Cloud') || s.category.includes('Infrastructure')).length },
    { id: 'enterprise-api-integration', name: 'Enterprise API & Integration', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('API') || s.category.includes('Integration'))).length },
    { id: 'enterprise-itsm', name: 'Enterprise IT Service Management', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('IT Service Management')).length },
    { id: 'enterprise-security-soc', name: 'Enterprise Security & SOC', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Security') || s.category.includes('SOC'))).length },
    { id: 'enterprise-governance', name: 'Enterprise Data Governance', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('Data Governance')).length },
    { id: 'enterprise-workflow-automation', name: 'Enterprise Workflow & Automation', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Workflow') || s.category.includes('Automation'))).length },
    { id: 'enterprise-digital-twin-iot', name: 'Enterprise Digital Twin & IoT', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Digital Twin') || s.category.includes('IoT'))).length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        const category = categories.find(c => c.id === selectedCategory);
        if (!category) return true;
        
        // Handle special category mappings
        const categoryMappings: { [key: string]: string[] } = {
          'ai-legal-compliance': ['Legal', 'Compliance'],
          'quantum-security-communication': ['Quantum', 'Security', 'Communication'],
          'ai-healthcare-diagnostics': ['Healthcare', 'Diagnostics'],
          'autonomous-supply-chain-logistics': ['Supply Chain', 'Logistics'],
          'blockchain-digital-identity': ['Blockchain', 'Digital Identity'],
          'ai-finance-trading': ['Finance', 'Trading'],
          'space-technology-innovation': ['Space', 'Innovation'],
          'metaverse-virtual-reality': ['Metaverse', 'Virtual Reality'],
          'sustainable-energy-green-tech': ['Energy', 'Green Tech'],
          'advanced-robotics-automation': ['Robotics', 'Automation'],
          'quantum-internet-networking': ['Quantum', 'Internet', 'Networking'],
          'climate-tech-sustainability': ['Climate', 'Sustainability'],
          'autonomous-vehicles-transportation': ['Vehicle', 'Transportation'],
          'brain-computer-interface-neuroscience': ['Brain-Computer', 'Neuroscience'],
          'synthetic-biology-biotechnology': ['Biology', 'Biotechnology'],
          'enterprise-data-analytics': ['Enterprise', 'Data', 'Analytics'],
          'multi-cloud-infrastructure': ['Multi-Cloud', 'Infrastructure'],
          'enterprise-api-integration': ['Enterprise', 'API', 'Integration'],
          'enterprise-itsm': ['Enterprise', 'IT Service Management'],
          'enterprise-security-soc': ['Enterprise', 'Security', 'SOC'],
          'enterprise-governance': ['Enterprise', 'Data Governance'],
          'enterprise-workflow-automation': ['Enterprise', 'Workflow', 'Automation'],
          'enterprise-digital-twin-iot': ['Enterprise', 'Digital Twin', 'IoT']
        };
        
        const targetKeywords = categoryMappings[selectedCategory] || [category.name];
        return targetKeywords.some(keyword => 
          service.category.toLowerCase().includes(keyword.toLowerCase().replace(' & ', ' ').replace('AI ', '').replace('Autonomous ', ''))
        );
      });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Innovative Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our cutting-edge collection of AI-powered micro SAAS services, innovative IT solutions, 
            emerging technology innovations, enterprise services, quantum computing solutions, and revolutionary 
            technology platforms designed to transform your business operations across all industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  service.popular 
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{service.tagline}</p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">{service.category}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-center">
                      <span className="text-xs text-blue-400">+{service.features.length - 4} more features</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>⭐ {service.rating} ({service.reviews})</span>
                  <span>👥 {service.customers} customers</span>
                </div>

                <div className="text-center">
                  <span className="text-xs text-gray-400">
                    {service.trialDays} days free trial • Setup: {service.setupTime}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center text-3xl`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                    <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-white font-semibold">{selectedService.price}{selectedService.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Trial:</span>
                        <span className="text-white">{selectedService.trialDays} days free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Setup:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Customers:</span>
                        <span className="text-white">{selectedService.customers}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Rating:</span>
                        <span className="text-white">⭐ {selectedService.rating}/5 ({selectedService.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Market Position</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.marketPosition}</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">ROI & Benefits</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.roi}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-white">
                        <span className="mr-2">📱</span>
                        <a href={`tel:${selectedService.contactInfo.mobile}`} className="hover:underline">
                          {selectedService.contactInfo.mobile}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">✉️</span>
                        <a href={`mailto:${selectedService.contactInfo.email}`} className="hover:underline">
                          {selectedService.contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">🌐</span>
                        <a href={selectedService.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact us today to discuss how our innovative micro SAAS services can drive growth, 
            efficiency, and competitive advantage for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-gray-300">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase;