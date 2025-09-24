import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  ArrowRight,;
  CheckCircle, ;
  Cloud, ;
  Shield, ;
  Zap, ;
  Brain, ;
  Users, ;
  Target,;
  BarChart3,;
  Rocket,;
  Globe,;
  Lock;
} from "lucide-react"
import { SEO } from "../components/SEO"
const features = [;
  {;
    icon: Brain,title: 'Strategic Expertise',description: 'Deep industry knowledge and strategic thinking to guide your technology decisions.',color: 'from-blue-500 to-cyan-500'
  };
  {;
    icon: Users,title: 'Experienced Team',description: 'Certified consultants with decades of combined experience in enterprise IT.',color: 'from-purple-500 to-pink-500'
  };
  {;
    icon: Target,title: 'Results-Driven',description: 'Focus on measurable outcomes and ROI for every consulting engagement.',color: 'from-green-500 to-emerald-500'
  };
  {;
    icon: Shield,title: 'Security First',description: 'Security and compliance built into every solution and recommendation.',color: 'from-red-500 to-orange-500'
  };
  {;
    icon: Zap,title: 'Rapid Implementation',description: 'Quick turnaround times without compromising quality or thoroughness.',color: 'from-yellow-500 to-orange-500'
  };
  {;
    icon: Cloud,title: 'Cloud-Native',description: 'Modern cloud-first approach for scalable and flexible solutions.',color: 'from-indigo-500 to-purple-500'
  };
];
const consultingServices = [;
  {;
    icon: Brain,title: 'Technology Strategy',description: 'Comprehensive technology roadmaps aligned with your business objectives and growth plans.'
  };
  {;
    icon: Cloud,title: 'Cloud Migration',description: 'Strategic planning and execution of cloud migration initiatives for optimal performance and cost.'
  };
  {;
    icon: Shield,title: 'Security Assessment',description: 'Thorough security audits and recommendations to protect your digital assets and ensure compliance.'
  };
  {;
    icon: BarChart3,title: 'Performance Optimization',description: 'Identify and resolve performance bottlenecks to improve user experience and operational efficiency.'
  };
  {;
    icon: Rocket,title: 'Digital Transformation',description: 'End-to-end digital transformation consulting to modernize your business processes and technology stack.'
  };
  {;
    icon: Globe,title: 'Infrastructure Design',description: 'Scalable and resilient infrastructure architecture designed for your specific business requirements.'
  };
  {;
    icon: Lock,title: 'Compliance & Governance',description: 'Ensure your technology solutions meet industry standards and regulatory requirements.'
  };
  {;
    icon: Users,title: 'Team Training',description: 'Comprehensive training programs to upskill your team and maximize technology adoption.'
  };
];
const containerVariants = {;
  hidden: { opacity: 0 };
  visible: {;
    opacity: 1,transition: {;
      staggerChildren: 0.1;
    };
  };
};
export default function ITConsulting() {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="IT Consulting Services - Zion Tech Group"
        description="Expert IT consulting services to transform your business technology strategy, cloud migration, and digital transformation initiatives."
        keywords="IT consulting, technology strategy, cloud migration, digital transformation, security assessment, performance optimization"
        canonical="https://ziontechgroup.com/services/it-consulting"
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <[^>]*/>
        <[^>]*/>
        ;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-zion-cyan to-blue-400 bg-clip-text text-transparent">;
                Expert IT;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">Consulting</[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">;
              Transform your business with strategic technology guidance from industry experts. ;
              We help you make informed decisions and implement solutions that drive growth.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <span>Get Started</[^>]*>
                <[^>]*/>
              </[^>]*>
              <motion.button
                className="[^"]*"
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                <span>Explore Services</[^>]*>
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Consulting Services Grid */};
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Why Choose Our IT Consulting?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our expert consultants bring decades of experience and deep industry knowledge to help you ;
              make informed technology decisions and achieve your business objectives.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Our Consulting Services;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Comprehensive consulting solutions designed to address your unique business;
              challenges and drive measurable results.;
            </[^>]*>
          </[^>]*>

          <motion.div
            className="[^"]*"
            variants={containerVariants};
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }};
          >;
            {consultingServices.map((service, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</[^>]*>
                </[^>]*>

                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</[^>]*>

                <ul className="space-y-3">;
                  <li className="flex items-center text-sm text-gray-300">;
                    <[^>]*/>
                    Strategic planning and analysis;
                  </[^>]*>
                  <li className="flex items-center text-sm text-gray-300">;
                    <[^>]*/>
                    Implementation guidance;
                  </[^>]*>
                  <li className="flex items-center text-sm text-gray-300">;
                    <[^>]*/>
                    Ongoing support and optimization;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Technology Strategy?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Let's discuss how our expert IT consulting can help you achieve your business goals ;
              and stay ahead of the competition.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <span>Schedule Consultation</[^>]*>
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                <span>View All Services</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};