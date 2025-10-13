import React from 'react';';'import {Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe}}from 'lucide-react';';'const EnhancedServicesShowcase: React.FC = () => {,;
const services = [
  
    {
  
      title: 'AI Solutions',''      description: 'Transform your business with cutting-edge artificial intelligence',''      icon: Brain,
      color: 'text-purple-400',''      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],''      stats: '300% ROI'''    },
    {
  
      title: 'IT Infrastructure',''      description: 'Build and maintain robust technology foundations',''      icon: Cloud,
      color: 'text-blue-400',''      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],''      stats: '99.9% Uptime'''    },
    {
  
      title: 'Cybersecurity',''      description: 'Protect your business with enterprise-grade security',''      icon: Shield,
      color: 'text-green-400',''      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],''      stats: 'Zero Breaches'''    },
    {
  
      title: 'Automation',''      description: 'Streamline processes with intelligent automation',''      icon: Zap,
      color: 'text-yellow-400',''      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],''          <div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>""<p className="text-xl text-gray-300">Section description</p></div>""</div></section>
<div className="container mx-auto px-4"></div>""<div className="text-center mb-16"></div>""<h2>Our Core Services;</h2></h2>
<p>Comprehensive AI and IT solutions designed to transform your business and drive innovation;</p></p>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,""          {services.map((service, index) => (</div>} <div key={index}className="cyber-card hologram-card p-6 group hover: scale-105 transition-all duration-300"></div>,""              <div className="flex items-center mb-4"></div>""<service></service>
<div />
<h3 className="text-xl font-bold text-white">{service.title}</h3>""<div className="text-sm text-cyan-400 font-semibold">{service.stats</div>}</div></div>""<p className="text-gray-300 mb-4">{service.description</p>}</p>""<ul>
                {service.features.map((feature, featureIndex) => (} <li>
<CheckCircle />

                    {feature} </li>
                ))}

              </ul>
<a>
                Learn More </a>
<ArrowRight>
>>>>>>> origin/main
              </a></div>
          ))}
        </div>
<div className="text-center mt-12">""<a
            href="/services"""            className="cyber-button inline-flex items-center"""          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" /></a>""</div></section>
  );
}
export default EnhancedServicesShowcase;
