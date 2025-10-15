import React from 'react';,;,;,;,;,
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3, Star } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {;,;,;,;,;,
  const solutions = [
    {;
      name: "5G Implementation",;";,
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.",;";,
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"],;";,
      price: "From $5,999",;";,
      marketPrice: "$12,999-49,999",;,;,;,;,;,
      popular: true,;";,
      icon: <Wifi className="w-8 h-8" />,;";,
      benefits: "Deploy 5G networks 60% faster than industry average"
    },
    {;";,
      name: "5G Network Infrastructure",;";,
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",;";,
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"],;";,
      price: "From $4,999",;";,
      marketPrice: "$9,999-39,999",;,;,;,;,;,
      popular: false,;";,
      icon: <Network className="w-8 h-8" />,;";,
      benefits: "Achieve 99.9% network uptime with our infrastructure"
    },
    {;";,
      name: "5G IoT Solutions",;";,
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.",;";,
      features: ["Device connectivity", "Data analytics", "Remote monitoring", "Edge computing", "Real-time processing", "Scalable architecture"],;";,
      price: "From $3,999",;";,
      marketPrice: "$7,999-29,999",;,;,;,;,;,
      popular: false,;";,
      icon: <Cpu className="w-8 h-8" />,;";,
      benefits: "Connect 10x more devices with ultra-low latency"
    },
    {;";,
      name: "5G Smart City Solutions",;";,
      description: "Transform your city with 5G-powered smart infrastructure and citizen services.",;";,
      features: ["Traffic management", "Public safety systems", "Energy efficiency", "Citizen services", "Environmental monitoring", "Emergency response"],;";,
      price: "From $7,999",;";,
      marketPrice: "$19,999-99,999",;,;,;,;,;,
      popular: false,;";,
      icon: <Smartphone className="w-8 h-8" />,;";,
      benefits: "Improve city efficiency by 40% with smart solutions"
    },
    {;";,
      name: "5G Edge Computing",;";,
      description: "Ultra-low latency edge computing solutions for real-time applications and AI inference.",;";,
      features: ["Low latency processing", "Local data centers", "Real-time analytics", "AI inference", "Content delivery", "Autonomous systems"],;";,
      price: "From $2,999",;";,
      marketPrice: "$5,999-19,999",;,;,;,;,;,
      popular: false,;";,
      icon: <BarChart3 className="w-8 h-8" />,;";,
      benefits: "Reduce latency by 90% with edge computing"
    },
    {;";,
      name: "5G Private Networks",;";,
      description: "Dedicated 5G private networks with enhanced security and custom configuration.",;";,
      features: ["Dedicated spectrum", "Enhanced security", "Custom configuration", "SLA guarantees", "Isolated infrastructure", "Custom applications"],;";,
      price: "From $6,999",;";,
      marketPrice: "$14,999-59,999",;,;,;,;,;,
      popular: true,;";,
      icon: <Shield className="w-8 h-8" />,;";,
      benefits: "Achieve enterprise-grade security with private networks"
    }  ];
;,;,;,;,;,
  const benefits = [
    {;";
      icon: <Clock className="w-6 h-6" />,;";,
      title: "Ultra-Low Latency",;";,
      description: "Achieve sub-millisecond latency for real-time applications"
    },    {;";,
      icon: <Network className="w-6 h-6" />,;";,
      title: "Massive Connectivity",;";,
      description: "Support millions of devices per square kilometer"
    },
    {;";,
      icon: <Cpu className="w-6 h-6" />,;";,
      title: "Edge Computing",;";,
      description: "Process data locally for faster response times"
    },
    {;";,
      icon: <Shield className="w-6 h-6" />,;";,
      title: "Enhanced Security",;";,
      description: "Advanced encryption and network slicing for secure communications"
    }  ];
;,;";,
  const technologies = ["
    "5G NR", "Network Slicing", "Edge Computing", "IoT Protocols", "
    "AI/ML Integration", "Cloud-Native", "SDN/NFV", "MEC"
  ];";
import { Helmet } from "react-helmet-async;";
import { Link } from "react-router-dom;";
import { ArrowRight } from "lucide-react;

export default function FiveGSolutionsPage() {;
  return (
    <>
      <Helmet></Helmet><//Helmet><///Helmet><////Helmet></////Helmet>
        <title>5G Solutions - Zion Tech Group</title><//title><///title><////title></////title><//////title>
        <meta;";
          name="description;";
          content="Comprehensive 5G solutions for businesses"
        />"
      </Helmet><//Helmet>"

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">"
        <div className="max-w-4xl mx-auto px-4 text-center">"
          <h1 className="text-4xl font-bold text-white mb-6">5G Solutions</h1>"
          <p className="text-lg text-gray-300 mb-8"></p>;
            Comprehensive 5G solutions by Zion Tech Group. Transform your;
            business with our expert solutions.
          </p><//p><///p><////p></////p><//////p>

        {/* Benefits Section */}"
        <section className="py-20 bg-white/5">"
          <div className="container mx-auto px-4">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our 5G Solutions?</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;";
                Built with cutting-edge technology and industry expertise"
              </p><//p><///p>"
            </div><//div>"

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
              {benefits.map((benefit, index) => ("
                <div key={index} className="text-center">"
                  <div className="text-cyan-400 mb-4 flex justify-center"></div><//div>"
                    {benefit.icon}"
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>"
                  <p className="text-gray-300">{benefit.description}</p><//p><///p><////p></////p><//////p>
                </div><//div><///div><////div></////div><//////div>
              ))}
            </div><//div><///div><////div></////div><//////div>
          </div><//div><///div><////div></////div><//////div>
        </section><//section><///section><////section></////section><//////section>

        {/* Technologies Section */}"
        <section className="py-20">"
          <div className="container mx-auto px-4">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold text-white mb-6">5G Technologies We Use</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;,;,;,;,";,
                Leveraging the latest 5G standards and cutting-edge technologies"
              </p><//p><///p>"
            </div><//div>"

            <div className="flex flex-wrap justify-center gap-4"></div>"
              {technologies.map((tech, index) => ("
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"></span><//span><///span><////span></////span>
                  {tech}
                </span><//span><///span><////span></////span><//////span>
              ))}
            </div><//div><///div><////div></////div><//////div>
          </div><//div><///div><////div></////div><//////div>
        </section><//section><///section><////section></////section><//////section>

        {/* CTA Section */}"
        <section className="py-20">"
          <div className="container mx-auto px-4">"
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">"
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy 5G?</h2>"
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"></p>;,;,;";,
                Let&apos;s discuss how 5G can transform your business and give you a competitive advantage."
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"></button>;,;,;";,
                  Schedule Consultation"
                </button>"
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"></button>;,;,;,;,;,
                  View Portfolio
                </button><//button><///button><////button></////button><//////button>
              </div><//div><///div><////div></////div><//////div>
            </div><//div><///div><////div></////div><//////div>
          </div><//div><///div><////div></////div><//////div>
        </section><//section><///section><////section></////section><//////section>
          <Link;";
            to="/contact;";
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          ></Link"
>;";
            Contact Us"
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link><//Link><///Link><////Link></////Link><//////Link>
        </div><//div><///div><////div></////div><//////div>
      </div><//div><///div><////div></////div><//////div>
    </>
  );"
}"
