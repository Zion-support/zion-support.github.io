import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  Brain,;
  Shield,;
  Rocket,;
  Lock,;
  Cpu,;
  Code,;
  Users,;
  Globe,;
  Heart,;
  TrendingUp,;
  Zap,;
  Database,;
  Network,;
  Server,;
  Cloud,;
  FileText,;
  BarChart3,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  ArrowRight,;
  Star,;
  CheckCircle,;
  Clock;
} from "lucide-react"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025"
export function ServicesOverview() {;
  const serviceCategories = [;
    {;
      id: 'ai-analytics',name: 'AI & Analytics',icon: Brain,color: 'from-zion-cyan to-zion-purple',description: 'Cutting-edge artificial intelligence and advanced analytics solutions',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI'));
    };
    {;
      id: 'quantum-computing',name: 'Quantum Computing',icon: Rocket,color: 'from-zion-blue to-zion-cyan',description: 'Next-generation quantum computing and quantum machine learning',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Quantum'));
    };
    {;
      id: 'blockchain',name: 'Blockchain & Web3',icon: Lock,color: 'from-zion-purple to-zion-blue',description: 'Decentralized solutions and blockchain technology platforms',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Blockchain'));
    };
    {;
      id: 'iot-edge',name: 'IoT & Edge Computing',icon: Cpu,color: 'from-zion-green to-zion-cyan',description: 'Internet of Things and edge computing solutions',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('IoT'));
    };
    {;
      id: 'cybersecurity',name: 'Cybersecurity',icon: Shield,color: 'from-zion-purple to-zion-red',description: 'Advanced security and threat protection solutions',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Cybersecurity'));
    };
    {;
      id: 'digital-twin',name: 'Digital Twin',icon: Server,color: 'from-zion-blue to-zion-purple',description: 'Virtual replicas and simulation platforms',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Digital Twin'));
    };
    {;
      id: 'sustainability',name: 'Sustainability',icon: Globe,color: 'from-zion-green to-zion-blue',description: 'Environmental monitoring and sustainability solutions',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Sustainability'));
    };
    {;
      id: 'hr-talent',name: 'HR & Talent',icon: Users,color: 'from-zion-pink to-zion-purple',description: 'Human resources and talent management platforms',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('HR'));
    };
    {;
      id: 'content-creation',name: 'Content Creation',icon: Code,color: 'from-zion-orange to-zion-purple',description: 'AI-powered content generation and management',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Content'));
    };
    {;
      id: 'legal-tech',name: 'Legal Tech',icon: FileText,color: 'from-zion-purple to-zion-cyan',description: 'Legal technology and compliance solutions',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Legal'));
    };
    {;
      id: 'fintech',name: 'FinTech',icon: BarChart3,color: 'from-zion-green to-zion-blue',description: 'Financial technology and advisory platforms',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('FinTech'));
    };
    {;
      id: 'healthcare-ai',name: 'Healthcare AI',icon: Heart,color: 'from-zion-pink to-zion-purple',description: 'Healthcare artificial intelligence solutions',services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Healthcare'));
    };
  ];
  return (
    <div className="py-20 bg-futuristic relative overflow-hidden">;
      {/* Background effects */};
      <div className="absolute inset-0 opacity-10">;
        <div className="cyber-grid w-full h-full"></[^>]*>
      </[^>]*>

      <div className="container-responsive relative z-10">;
        {/* Header */};
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6 }};
        >;
          <h1 className="heading-responsive font-bold mb-6">;
            <span className="text-gradient neon-text-cyan">Comprehensive Technology</[^>]*>
            <[^>]*/>
            <span className="text-white">Services Portfolio</[^>]*>
          </[^>]*>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">;
            Discover our complete range of innovative micro SAAS services, IT solutions, and AI platforms.;
            From cutting-edge quantum computing to practical business applications, we provide the technology;
            solutions your business needs to thrive in the digital age.;
          </[^>]*>
        </[^>]*>

        {/* Service Categories Grid */};
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">;
          {serviceCategories.map((category, index) => (;
            <motion.div
              key={category.id};
              className="[^"]*"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
              whileHover={{ y: -10 }};
            >;
              <Link to={`/services/${category.id}`} className="block">;
                <div className="card-futuristic h-full hover:border-zion-cyan/50 transition-all duration-300">;
                  {/* Category Icon */};
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>;
                    <[^>]*/>
                  </[^>]*>

                  {/* Category Info */};
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300 text-center">;
                    {category.name};
                  </[^>]*>

                  <p className="text-zion-slate-light text-sm text-center mb-4 leading-relaxed">;
                    {category.description};
                  </[^>]*>

                  {/* Service Count */};
                  <div className="text-center">;
                    <div className="text-2xl font-bold text-zion-cyan mb-1">;
                      {category.services.length};
                    </[^>]*>
                    <div className="text-xs text-zion-slate-light">;
                      Services Available;
                    </[^>]*>
                  </[^>]*>

                  {/* Hover Arrow */};
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* Featured Services */};
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: 20 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.6 }};
        >;
          <h2 className="heading-responsive font-bold mb-8 text-center">;
            <span className="text-gradient neon-text-purple">Featured Services</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 6).map((service, index) => (;
              <motion.div
                key={service.id};
                className="[^"]*"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                whileHover={{ y: -5 }};
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">;
                      {service.title};
                    </[^>]*>
                    <p className="text-zion-slate-light leading-relaxed mb-3">;
                      {service.description};
                    </[^>]*>
                  </[^>]*>
                  <div className="text-right ml-4">;
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</[^>]*>
                    <div className="text-sm text-zion-slate-light">per month</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="space-y-3 mb-4">;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-zion-cyan font-medium">{service.category}</[^>]*>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${;
                      service.innovationLevel === 'Cutting-edge'
                        ? 'bg-zion-cyan/20 text-zion-cyan'
                        : 'bg-zion-purple/20 text-zion-purple'
                    }`}>;
                      {service.innovationLevel};
                    </[^>]*>
                  </[^>]*>

                  <div className="flex items-center justify-between text-sm">;
                    <div className="flex items-center gap-1 text-zion-green">;
                      <[^>]*/>
                      <span>ROI: {service.roi}</[^>]*>
                    </[^>]*>
                    <div className="text-zion-slate-light">;
                      Market: {service.marketPrice};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">;
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">;
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      <span>{service.estimatedDelivery}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-1">;
                      <[^>]*/>
                      <span>{service.supportLevel}</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <Link;
                    to={`/services/${service.id}`};
                    className="[^"]*"
                  >;
                    Learn More;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: 30 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
        >;
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-12 border border-zion-cyan/20">;
            <h2 className="heading-responsive font-bold mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Get in touch with our technology experts to discuss your specific needs and discover;
              how our innovative solutions can drive your business forward.;
            </[^>]*>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Free Consultation;
              </[^>]*>

              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now: +1 302 464 0950;
              </[^>]*>
            </[^>]*>

            {/* Contact Info Grid */};
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-4xl mx-auto">;
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-cyan/20">;
                <[^>]*/>
                <p className="font-medium text-white mb-1">Address</[^>]*>
                <p className="text-sm text-zion-slate-light">364 E Main St STE 1008</[^>]*>
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</[^>]*>
              </[^>]*>

              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-purple/20">;
                <[^>]*/>
                <p className="font-medium text-white mb-1">Email</[^>]*>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 text-sm">;
                  kleber@ziontechgroup.com
                </[^>]*>
              </[^>]*>

              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-blue/20">;
                <[^>]*/>
                <p className="font-medium text-white mb-1">Website</[^>]*>
                <a href="https://[^;]*
                  ziontechgroup.com
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};