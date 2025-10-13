import React from 'react';'import { Helmet } from 'react-helmet-async';'import { Code, Database, Globe, Cloud, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';'
const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      name: 'Frontend Development','      icon: Code,
      description: 'Modern, responsive user interfaces built with React, Next.js, and Vue.js','      features: ['React/Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']'    },
    {
      name: 'Backend Development','      icon: Database,
      description: 'Scalable server-side applications and APIs','      features: ['Node.js', 'Python/Django', 'PHP/Laravel', 'Java/Spring']'    },
    {
      name: 'Full-Stack Development','      icon: Globe,
      description: 'Complete web applications from frontend to backend','      features: ['MERN Stack', 'MEAN Stack', 'LAMP Stack', 'JAMstack']'    },
    {
      name: 'E-commerce Solutions','      icon: Cloud,
      description: 'Custom e-commerce platforms and online stores','      features: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions']'    },
    {
      name: 'Database Design','      icon: Database,
      description: 'Optimized database architecture and management','      features: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']'    },
    {
      name: 'Cloud Deployment','      icon: Shield,
      description: 'Scalable cloud infrastructure and deployment','      features: ['AWS', 'Azure', 'Google Cloud', 'Docker/Kubernetes']'    }
  ];

  const process = [
    {
      step: '01','      title: 'Discovery & Planning','      description: 'We analyze your requirements and create a detailed project plan','      icon: Shield
    },
    {
      step: '02','      title: 'Design & Prototyping','      description: 'Create wireframes and prototypes to visualize your project','      icon: Code
    },
    {
      step: '03','      title: 'Development','      description: 'Build your application using modern technologies and best practices','      icon: Zap
    },
    {
      step: '04','      title: 'Testing & Deployment','      description: 'Thorough testing and seamless deployment to production','      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"      <Helmet>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices." />"      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"        <div className="text-center mb-16">"          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">"            Web Development Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"            Professional web development solutions built with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"          {webServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">"              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">"                <service.icon className="w-8 h-8" />"              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>"              <p className="text-gray-300 mb-4">{service.description}</p>"              <div className="space-y-2">"                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">"                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">"          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h2>"          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"            {process.map((step, index) => (
              <div key={index} className="text-center">"                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">"                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>"                <p className="text-gray-300">{step.description}</p>"              </div>
            ))}
          </div>
        </div>

        <div className="text-center">"          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">"            <h2 className="text-2xl font-semibold text-white mb-4">Ready to Start Your Project?</h2>"            <p className="text-gray-300 mb-6">"              Let's discuss your web development needs and create something amazing together.'            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center mx-auto">"              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />"            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopmentPage;