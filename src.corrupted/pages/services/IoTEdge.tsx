import React from "react"
import { motion } from "framer-motion"
import { Cpu, Wifi, Zap, Database, Globe, BarChart3, ArrowRight, Shield, Cloud, Smartphone } from "lucide-react"
export default function IoTEdge() {;
  const features = [;
    {;
      icon: Cpu,title: 'Edge Computing',description: 'Process data closer to the source for faster response times'
    };
    {;
      icon: Wifi,title: 'IoT Connectivity',description: 'Seamless device communication and data transmission'
    };
    {;
      icon: Zap,title: 'Real-time Processing',description: 'Instant data analysis and decision making'
    };
    {;
      icon: Database,title: 'Data Management',description: 'Efficient storage and processing of IoT data streams'
    };
  ];
  const services = [;
    {;
      title: 'IoT Device Management',description: 'Centralized management and monitoring of connected devices',icon: Smartphone;
    };
    {;
      title: 'Edge Analytics',description: 'Real-time data processing and analytics at the edge',icon: BarChart3;
    };
    {;
      title: '5G Integration',description: 'High-speed connectivity for IoT applications',icon: Wifi;
    };
    {;
      title: 'Security & Compliance',description: 'End-to-end security for IoT ecosystems',icon: Shield;
    };
  ];
  return (
    <div className="min-h-screen bg-futuristic">;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></[^>]*>
        <div className="container-responsive relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">;
              <[^>]*/>
              <span className="text-blue-400 font-medium">IoT & Edge Computing</[^>]*>
            </[^>]*>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Connect, Process,;
              <span className="text-gradient"> Transform</[^>]*>
            </[^>]*>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Harness the power of IoT and edge computing to create intelligent;
              connected systems that process data faster and more efficiently.;
            </[^>]*>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="btn-futuristic px-8 py-4 text-lg">;
                Start IoT Project;
                <[^>]*/>
              </[^>]*>
              <button className="btn-outline px-8 py-4 text-lg">;
                Learn More;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose IoT & Edge Computing?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Faster processing, reduced latency, and intelligent automation;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-zion-slate-light">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Section */};
      <section className="py-20 bg-white/5">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Our IoT & Edge Services;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Comprehensive solutions for connected device ecosystems;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <motion.div
                key={service.title};
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</[^>]*>
                    <p className="text-zion-slate-light leading-relaxed">{service.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <div className="absolute inset-0 bg-black/20"></[^>]*>
            <div className="relative z-10">;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Build the Future?;
              </[^>]*>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
                Transform your business with intelligent IoT solutions and edge computing capabilities.;
              </[^>]*>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">;
                  Start IoT Project;
                </[^>]*>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">;
                  Contact IoT Team;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};