'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']
    },
    {
      title: 'Cloud Architecture',
      description: 'Design scalable and secure cloud architectures for your business needs',
      features: ['Microservices design', 'Auto-scaling solutions', 'Disaster recovery', 'Performance optimization']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Implement automated deployment pipelines and infrastructure management',
      features: ['Docker & Kubernetes', 'Infrastructure as Code', 'Automated testing', 'Monitoring & logging']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure',
      features: ['Identity & access management', 'Data encryption', 'Compliance auditing', 'Threat detection']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Cloud Services | Zion Tech Group</title><>
<//title>
<meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." /><>
</meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." />
<meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, DevOps, cloud architecture" /><>
</meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, DevOps, cloud architecture" />
</Helmet><//Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"><>
</section className="relative py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><>
<//h1>
<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud Services
              </span><>
<//span>
<br /><>
</br />
<span className="text-white">Solutions</span><>
<//span>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced cloud solutions. </p><//p>
              Powered by cutting-edge technology and industry expertise.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button><//button>
                Get Started</button><>
<//button>
<ArrowRight className="ml-2 h-5 w-5" /><>
</ArrowRight className="ml-2 h-5 w-5" />
</button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button><//button>
                Learn More</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
              Why Choose Our Cloud Services?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Our cloud solutions deliver unmatched performance, security, and scalability.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
            {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<feature.icon className="w-8 h-8 text-white" /><>
</feature.icon className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300">{feature.description}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-5"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
              Our Cloud Services</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Experience the power of our comprehensive cloud solutions for your business.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid md:grid-cols-2 gap-8"></div><//div>
            {services.map((service, index) => (</div><>
<//div>
<div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300"></div><>
<//div>
<h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3><>
<//h3>
<p className="text-gray-300 mb-6">{service.description}</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"><>
</li key={featureIndex} className="flex items-center text-gray-300">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
              Key Benefits</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Discover the advantages of partnering with us for your cloud transformation.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"></div><//div>
            {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"></div><>
<//div>
<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<CheckCircle className="w-6 h-6 text-white" /><>
</CheckCircle className="w-6 h-6 text-white" />
</div><>
<//div>
<p className="text-white font-medium">{benefit}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
            Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
            Contact our experts to discuss your cloud needs and get a customized solution.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Mail className="mr-2 h-5 w-5" /></Mail className="mr-2 h-5 w-5" />
              Send Email
            </button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"><>
</section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="grid md:grid-cols-3 gap-8 text-center"></div><>
<//div>
<div className="flex items-center justify-center gap-3 text-gray-300"></div><>
<//div>
<Phone className="w-5 h-5 text-purple-400" /><>
</Phone className="w-5 h-5 text-purple-400" />
<span>+1 (555) 123-4567</span><>
<//span>
</div><>
<//div>
<div className="flex items-center justify-center gap-3 text-gray-300"></div><>
<//div>
<Mail className="w-5 h-5 text-purple-400" /><>
</Mail className="w-5 h-5 text-purple-400" />
<span>cloud@ziontech.com</span><>
<//span>
</div><>
<//div>
<div className="flex items-center justify-center gap-3 text-gray-300"></div><>
<//div>
<MapPin className="w-5 h-5 text-purple-400" /><>
</MapPin className="w-5 h-5 text-purple-400" />
<span>San Francisco, CA</span><>
<//span>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><//div>
  );
};

export default CloudServicesPage;
