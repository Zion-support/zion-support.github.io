import React from "react";
import { CpuChipIcon, 
  CloudIcon, 
  CogIcon, 
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon;
   } from "@heroicons/react/24/outline"

const Services: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',''
      description: 'Cutting-edge artificial intelligence solutions to automate processes and drive innovation.',''
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']''
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',''
      description: 'Scalable and secure cloud solutions to power your business growth.',''
      features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Container Orchestration', 'Cloud Migration']''
    },
    {
      icon: CogIcon,
      title: 'IT Services',''
      description: 'Comprehensive IT support and management to keep your systems running smoothly.',''
      features: ['System Administration', 'Network Security', 'Data Backup', '24/7 Monitoring']''
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',''
      description: 'Transform your data into actionable insights with advanced analytics solutions.',''
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports']''
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',''
      description: 'Protect your business with comprehensive security solutions and best practices.',''
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']''
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',''
      description: 'Complete digital transformation strategies to modernize your business processes.',''
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training & Support']''
    }
  ];

  return (
<>    <section className="py-20 bg-white">""
      <div>""</div>
        <div>""</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">""
            Our Services;
          </h2>
          <p>""
            We provide comprehensive technology solutions to help your business ;
            thrive in the digital age.</p>
          </div>
    </>

        <div>""
          {services.map((service, index) => (</div>
            <div>"</div>
              <div>""</div>
                <div>""</div>
                  <service.icon className="h-8 w-8 text-blue-600" />""
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">""
                  {service.title}
                </div>
              
              <p>""
                {service.description}</p>
              </p>
              
              <ul className="space-y-2">""
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">""
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                )})}
              </ul>
              
              <div>""</div>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline">""
                  Learn More →
                </div>
          ))}
        </div>

        {/* CTA Section */}
        <div>""</div>
          <div>""</div>
            <h3 className="text-3xl font-bold mb-4">""
              Ready to Transform Your Business?
            </h3>
            <p>""
              Let's discuss how our solutions can help you achieve your goals.''</p>
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">""
              Get Free Consultation;
            </div>
    </section>
  );
};

export default Services;