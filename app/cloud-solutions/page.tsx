'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  CheckCircleIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ServerIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon;
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const features = [;
    'Scalable Infrastructure';
    'High Availability';
    'Security & Compliance';
    'Cost Optimization';
    'Global CDN';
    'Auto-scaling';
    'Disaster Recovery';
    '24/7 Monitoring'";
  ];

  const services = [
    {;
      name: 'Cloud Migration';
      description: 'Seamlessly migrate your applications and data to the cloud';
      icon: CloudIcon,
      features: ['Zero-downtime migration', 'Data integrity assurance', 'Performance optimization']";
    },
    {
      name: 'Cloud Architecture';
      description: 'Design and implement robust cloud architectures';
      icon: ServerIcon,
      features: ['Microservices architecture', 'Container orchestration', 'API-first design']";
    },
    {
      name: 'DevOps & CI/CD';
      description: 'Automate your development and deployment processes';
      icon: CogIcon,
      features: ['Continuous integration', 'Automated testing', 'Deployment pipelines']";
    },
    {
      name: 'Cloud Security';
      description: 'Comprehensive security solutions for your cloud infrastructure';
      icon: ShieldCheckIcon,
      features: ['Identity management', 'Data encryption', 'Compliance monitoring']";
    }
  ];

  return (
    <>
      <SEOHead title ="Cloud Solutions - Zion Tech Group"";
        description="Comprehensive cloud solutions including migration, architecture, DevOps, and security services for modern businesses."";
        keywords="cloud solutions, cloud migration, cloud architecture, DevOps, cloud security, AWS, Azure, GCP, Zion Tech Group"";
      />
      
      <div className ="min-h-screen bg-slate-900 text-white">";
        {/* Hero Section */}
        <section className ="relative overflow-hidden py-20 lg:py-32">";
          <div className ="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>";
          <div className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div className ="text-center">";
              <h1: className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";
                <span className ="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">";
                  Cloud Solutions
                </span>
              </h1>
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Transform your business with our comprehensive cloud solutions. 
                Migration, architecture, DevOps, and security services tailored to your needs.
              </p>
              <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className ="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">";
                  Get Started
                </button>
                <button className ="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">";
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className ="py-16 bg-slate-800/30">";
          <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div className ="text-center mb-12">";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
                Why Choose Our Cloud Solutions?
              </h2>
              <p className ="text-lg text-gray-300 max-w-2xl mx-auto">";
                We provide comprehensive cloud services that drive innovation and growth.
              </p>
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">";
              {features.map((feature, index) => (
                <div key ={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"";
                >
                  <CloudIcon className ="w-8 h-8 text-blue-400 mb-4" />";
                  <h3 className ="text-lg font-semibold mb-2">{feature}</h3>";
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className ="py-16">";
          <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div className ="text-center mb-12">";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
                Our Cloud Services
              </h2>
              <p className ="text-lg text-gray-300">";
                Comprehensive cloud solutions to accelerate your digital transformation.
              </p>
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2 gap-8">";
              {services.map((service, index) => (
                <div key ={index}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"";
                >
                  <div className ="flex items-center mb-4">";
                    <service.icon: className ="w-12 h-12 text-blue-400 mr-4" />";
                    <h3 className ="text-2xl font-bold">{service.name}</h3>";
                  </div>
                  <p className ="text-gray-300 mb-6">{service.description}</p>";
                  <ul className ="space-y-2">";
                    {service.features.map((feature, featureIndex) => (
                      <li key ={featureIndex} className="flex items-center">";
                        <CheckCircleIcon className ="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />";
                        <span className ="text-gray-300">{feature}</span>";
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className ="py-16 bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40">";
          <div className ="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">";
            <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";
              Ready to Move to the Cloud?
            </h2>
            <p className ="text-lg text-gray-300 mb-8">";
              Let our cloud experts help you design and implement the perfect cloud solution for your business.
            </p>
            <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <button className ="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">";
                Get Free Consultation
              </button>
              <button className ="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">";
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudSolutionsPage;
