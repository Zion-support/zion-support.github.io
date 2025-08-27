import React from 'react';
import { Building2, Users, Globe, Shield, Award, ArrowRight, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';

export const EnterpriseCallToAction = () => {
  const enterpriseFeatures = [
    {
      icon: Building2,
      title: 'Enterprise-Grade Infrastructure',
      description: 'Scalable solutions designed for large organizations with complex requirements'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Assigned IT professionals who understand your business and infrastructure'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with local expertise in multiple regions'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-level security measures and compliance management'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully serving Fortune 500 companies and government agencies'
    }
  ];

  const enterpriseBenefits = [
    'Customized solutions tailored to your business needs',
    'Dedicated account manager and support team',
    'Priority response times and escalation procedures',
    'Comprehensive reporting and analytics',
    'Strategic IT consulting and roadmap planning',
    'Compliance and regulatory support',
    'Vendor management and procurement assistance',
    'Training and change management programs'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our enterprise team',
      action: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your requirements and questions',
      action: 'enterprise@zion.com',
      link: 'mailto:enterprise@zion.com',
      color: 'green'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation with our experts',
      action: 'Book Consultation',
      link: '#consultation',
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For large organizations requiring enterprise-grade IT services, we provide customized solutions, 
            dedicated support teams, and strategic consulting to drive your digital transformation.
          </p>
        </div>

        {/* Enterprise Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {enterpriseFeatures.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enterprise Benefits */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Enterprise Organizations Choose Zion
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enterpriseBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-white/40 transition-all duration-300">
              <div className={`w-20 h-20 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <method.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{method.title}</h4>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <a
                href={method.link}
                className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 text-white font-semibold rounded-lg hover:from-${method.color}-600 hover:to-${method.color}-700 transition-all duration-300`}
              >
                <span>{method.action}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprise organizations that trust Zion with their critical IT operations. 
            Let's discuss how we can help you achieve your technology goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="#enterprise-demo"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              Request Enterprise Demo
            </a>
            <a
              href="#enterprise-quote"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
            >
              Get Enterprise Quote
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Enterprise Support</div>
            </div>
          </div>
        </div>

        {/* Enterprise Process */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Enterprise Engagement Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Discovery</h4>
              <p className="text-gray-300 text-sm">
                Comprehensive assessment of your current infrastructure and business needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Strategy</h4>
              <p className="text-gray-300 text-sm">
                Development of a customized technology roadmap aligned with your business goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
              <p className="text-gray-300 text-sm">
                Expert execution with dedicated teams and proven methodologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Optimization</h4>
              <p className="text-gray-300 text-sm">
                Continuous improvement and strategic guidance for ongoing success
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Enterprise Journey
            </h3>
            <p className="text-gray-300 mb-6">
              Contact our enterprise team today to discuss your requirements and explore how Zion can help 
              you achieve your technology objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#enterprise-contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Contact Enterprise Team
              </a>
              <a
                href="#enterprise-case-studies"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};