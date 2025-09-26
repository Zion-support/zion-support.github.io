import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Brain,;
  Cpu, ;
  Shield, ;
  Cloud, ;
  Database, ;
  Network, ;
  Zap, ;
  Globe, ;
  Rocket, ;
  Target,;
  CheckCircle,;
  Star,;
  Phone,;
  Mail,;
  ExternalLink,;
  ArrowRight;
} from "lucide-react"
import SEO from "@/components/SEO"
export default function NewServicesShowcase2025() {;
  const serviceCategories = [;
    {;
      title: "AI-Powered Micro SAAS Services",icon: Brain,color: "from-purple-600 to-blue-600",services: [;
        {;
          name: "AI Autonomous Code Reviewer",description: "Advanced AI-powered code review system with security analysis and optimization",price: "$2,999",;
          features: ["Multi-language Support", "Security Analysis", "Code Quality", "Automation"],;
          aiScore: 98,roi: "400% within 4 months"
        };
        {;
          name: "AI-Powered SEO Optimization",description: "Intelligent SEO platform with machine learning and content strategy",price: "$1,999",;
          features: ["Content Optimization", "Ranking Tracking", "Keyword Research", "Analytics"],;
          aiScore: 95,roi: "350% within 6 months"
        };
        {;
          name: "AI Customer Support Automation",description: "Intelligent support automation with chatbots and sentiment analysis",price: "$2,499",;
          features: ["AI Chatbot", "Ticket Management", "Sentiment Analysis", "24/7 Support"],;
          aiScore: 94,roi: "300% within 5 months"
        };
      ];
    };
    {;
      title: "Emerging Technology Services 2030",icon: Rocket,color: "from-orange-500 to-red-600",services: [;
        {;
          name: "Quantum-AI Hybrid Computing",description: "Revolutionary platform combining quantum computing with AI",price: "$15,999",;
          features: ["Quantum Computing", "AI Integration", "Optimization", "Simulation"],;
          aiScore: 99,roi: "800% within 18 months"
        };
        {;
          name: "Neuromorphic Computing Platform",description: "Brain-inspired AI platform with ultra-efficient processing",price: "$12,999",;
          features: ["Brain-Inspired AI", "Neural Networks", "Real-time Learning", "Low Power"],;
          aiScore: 98,roi: "600% within 15 months"
        };
        {;
          name: "Edge AI Computing Platform",description: "Distributed intelligence platform for IoT and edge networks",price: "$8,999",;
          features: ["Edge Computing", "Distributed AI", "Real-time Processing", "Privacy"],;
          aiScore: 96,roi: "500% within 12 months"
        };
      ];
    };
    {;
      title: "IT Infrastructure Services",icon: Cpu,color: "from-green-600 to-teal-600",services: [;
        {;
          name: "Cloud Migration Automation",description: "Comprehensive cloud migration with zero-downtime deployment",price: "$15,999",;
          features: ["AWS/Azure/GCP", "Zero Downtime", "Cost Optimization", "Monitoring"],;
          aiScore: 94,roi: "300% within 12 months"
        };
        {;
          name: "DevOps Automation Platform",description: "Advanced CI/CD platform with intelligent pipeline management",price: "$8,999",;
          features: ["CI/CD", "Automation", "Testing", "Deployment"],;
          aiScore: 93,roi: "400% within 8 months"
        };
        {;
          name: "Cybersecurity Intelligence",description: "Advanced threat detection and incident response platform",price: "$12,999",;
          features: ["Threat Detection", "Incident Response", "Security Monitoring", "AI Security"],;
          aiScore: 96,roi: "450% within 10 months"
        };
      ];
    };
  ];
  const contactInfo = {;
    phone: "+1 302 464 0950",email: "kleber@ziontechgroup.com",website: "https://ziontechgroup.com",address: "364 E Main St STE 1008 Middletown DE 19709"
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
              <Rocket className="w-4 h-4 mr-2" /> 2025 Innovation Showcase;
            </[^>]*>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              Next-Generation;
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                AI & Tech Services;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Discover our cutting-edge portfolio of AI-powered micro SAAS services, emerging technology solutions, and enterprise IT infrastructure platforms designed to transform your business.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <a;
                href={`tel:${contactInfo.phone}`};
                className="[^"]*"
              >;
                <[^>]*/>
                {contactInfo.phone};
              </[^>]*>
              <a;
                href={`mailto:${contactInfo.email}`};
                className="[^"]*"
              >;
                <[^>]*/>
                {contactInfo.email};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Showcase */};
      <section className="py-20 max-w-7xl mx-auto px-6">;
        <div className="space-y-20">;
          {serviceCategories.map((category, categoryIndex) => (;
            <motion.div
              key={category.title};
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }};
              viewport={{ once: true }};
            >;
              <div className="text-center mb-16">;
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</[^>]*>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">;
                  Revolutionary solutions that leverage cutting-edge technology to solve complex business challenges;
                </[^>]*>
              </[^>]*>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {category.services.map((service, serviceIndex) => (;
                  <motion.div
                    key={service.name};
                    initial={{ opacity: 0, scale: 0.9 }};
                    whileInView={{ opacity: 1, scale: 1 }};
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }};
                    viewport={{ once: true }};
                    className="[^"]*"
                  >;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center space-x-2">;
                        <div className="w-2 h-2 bg-green-400 rounded-full"></[^>]*>
                        <span className="text-sm text-gray-400">AI Score: {service.aiScore}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center space-x-1">;
                        <[^>]*/>
                        <span className="text-sm text-gray-400">4.8+</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">;
                      {service.name};
                    </[^>]*>
                    <p className="text-gray-400 mb-4 text-sm">;
                      {service.description};
                    </[^>]*>

                    <div className="mb-4">;
                      <div className="text-3xl font-bold text-white mb-1">{service.price}</[^>]*>
                      <div className="text-sm text-gray-500">per month</[^>]*>
                    </[^>]*>

                    <div className="mb-4">;
                      <div className="text-sm text-gray-400 mb-2">Key Features:</[^>]*>
                      <div className="space-y-1">;
                        {service.features.map((feature, index) => (;
                          <div key={index} className="flex items-center text-sm text-gray-300">;
                            <[^>]*/>
                            {feature};
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>

                    <div className="mb-6">;
                      <div className="text-sm text-gray-400 mb-1">Expected ROI:</[^>]*>
                      <div className="text-lg font-semibold text-green-400">{service.roi}</[^>]*>
                    </[^>]*>

                    <div className="flex space-x-2">;
                      <a;
                        href={`tel:${contactInfo.phone}`};
                        className="[^"]*"
                      >;
                        <[^>]*/>
                        Contact;
                      </[^>]*>
                      <a;
                        href={contactInfo.website};
                        target="_blank"
                        rel="noopener noreferrer"
                        className="[^"]*"
                      >;
                        <[^>]*/>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Market Analysis Section */};
      <section className="py-20 bg-white/5">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Market Analysis & ROI</[^>]*>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Our services deliver exceptional value with proven ROI and competitive market positioning;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {[;
              { label: "Average ROI", value: "425%", description: "Within 6-18 months" };
              { label: "Market Size", value: "$2.1T", description: "By 2027" };
              { label: "Growth Rate", value: "23.4%", description: "CAGR" };
              { label: "AI Capability", value: "95+", description: "Average AI Score" };
            ].map((stat, index) => (;
              <motion.div
                key={stat.label};
                initial={{ opacity: 0, scale: 0.9 }};
                whileInView={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</[^>]*>
                <div className="text-lg font-semibold text-blue-400 mb-1">{stat.label}</[^>]*>
                <div className="text-sm text-gray-400">{stat.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</[^>]*>
            <p className="text-xl text-gray-400 mb-8">;
              Get in touch with our team of experts to discuss how our innovative services can drive your business forward;
            </[^>]*>

            <div className="grid md:grid-cols-3 gap-6 mb-8">;
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">;
                <[^>]*/>
                <div className="text-white font-semibold mb-2">Call Us</[^>]*>
                <div className="text-gray-400">{contactInfo.phone}</[^>]*>
              </[^>]*>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">;
                <[^>]*/>
                <div className="text-white font-semibold mb-2">Email Us</[^>]*>
                <div className="text-gray-400">{contactInfo.email}</[^>]*>
              </[^>]*>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">;
                <[^>]*/>
                <div className="text-white font-semibold mb-2">Visit Us</[^>]*>
                <div className="text-gray-400">{contactInfo.website}</[^>]*>
              </[^>]*>
            </[^>]*>

            <div className="flex flex-wrap justify-center gap-4">;
              <a;
                href={`tel:${contactInfo.phone}`};
                className="[^"]*"
              >;
                <[^>]*/>
                Start Your Journey;
                <[^>]*/>
              </[^>]*>
              <a;
                href={`mailto:${contactInfo.email}`};
                className="[^"]*"
              >;
                <[^>]*/>
                Request Demo;
              </[^>]*>
            </[^>]*>

            <div className="mt-8 text-sm text-gray-500">;
              <p>Address: {contactInfo.address}</[^>]*>
              <p className="mt-2">Available 24/7 for global support and consultation</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};