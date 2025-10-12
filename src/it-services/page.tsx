import React from 'react';
import { Cloud, Database, Users, Server, HardDrive, Monitor, Printer, Router, ArrowRight, CheckCircle, Star, Award, FileText, Activity, Code, Target, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

  ];

  // Removed unused categories and services variables

  // Removed unused benefits array

  ];

  // Removed unused benefits variable

        {/* Hero Section */}
              IT Services & Infrastructure
            Comprehensive IT solutions to support and optimize your business infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running smoothly.
              Get Free IT Assessment
            
              (302) 464-0950

        {/* Main Services Grid */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core IT Services</h2>
                  {React.createElement(service.icon, { className: "w-8 h-8" })}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        {feature}
                    ))}
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        {benefit}
                    ))}
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                        {tech}
                    ))}
                <p className="text-gray-300 mb-4">{service.description}</p>
                      {feature}
                  ))}
                  <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                  
                    Learn More <ArrowRight>
            ))}

        {/* Additional Services */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional IT Services</h2>
                  {React.createElement(service.icon, { className: "w-6 h-6 text-cyan-400 mr-3" })}
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{service.price}</div>
            ))}

        {/* Support Tiers */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
              <h3 className="text-xl font-bold text-white mb-4">Basic Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
                  Business hours support
                  Remote assistance
                  Basic monitoring
              
                Get Started
              <h3 className="text-xl font-bold text-white mb-4">Professional Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$499/month</div>
                  24/7 support
                  On-site visits
                  Advanced monitoring
                  Priority response
              
                Get Started
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
                  Dedicated team
                  Custom SLAs
                  Proactive monitoring
                  Strategic consulting
              
                Contact Sales

        {/* CTA Section */}
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
                Get Free IT Assessment
              
                (302) 464-0950
  );
};

export default ITServicesPage;
