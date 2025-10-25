import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
&apos;use client&apos;
import React from &apos;react&apos;
import { ArrowRight } from &apos;lucide-react&apos;;
import { CheckCircle } from &apos;lucide-react&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;
import { CheckCircle } from &apos;lucide-react&apos;;

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      title: &apos;AI Solutions&apos;,
      description: &apos;Transform your business with cutting-edge artificial intelligence&apos;,
      icon: Brain,
      color: &apos;text-purple-400&apos;,
      features: [&apos;Machine Learning&apos;, &apos;Natural Language Processing&apos;, &apos;Computer Vision&apos;, &apos;Predictive Analytics&apos;],
      stats: &apos;300% ROI&apos},
    {
      title: &apos;IT Infrastructure&apos;,
      description: &apos;Build and maintain robust technology foundations&apos;,
      icon: Cloud,
      color: &apos;text-blue-400&apos;,
      features: [&apos;Cloud Migration&apos;, &apos;Server Management&apos;, &apos;Network Security&apos;, &apos;Data Backup&apos;],
      stats: &apos;99.9% Uptime&apos},
    {
      title: &apos;Cybersecurity&apos;,
      description: &apos;Protect your business with enterprise-grade security&apos;,
      icon: Shield,
      color: &apos;text-green-400&apos;,
      features: [&apos;Threat Detection&apos;, &apos;Security Audits&apos;, &apos;Compliance&apos;, &apos;Incident Response&apos;],
      stats: &apos;Zero Breaches&apos},
    {
      title: &apos;Performance Optimization&apos;,
      description: &apos;Maximize efficiency and speed across all systems&apos;,
      icon: Zap,
      color: &apos;text-yellow-400&apos;,
      features: [&apos;Code Optimization&apos;, &apos;Database Tuning&apos;, &apos;Caching Strategies&apos;, &apos;Load Balancing&apos;],
      stats: &apos;10x Faster&apos}
  ]

  return (
    <div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
      <div className=&quot;max-w-7xl mx-auto&quot;></div>
        <div className=&quot;text-center mb-16&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            Enhanced Services Showcase
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Discover our comprehensive range of technology services designed to accelerate your business growth.
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
          {services.map((service, index) => (
            <div
              key={index}
              className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group&quot;
            ></div>
              <div className=&quot;flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300&quot;></div>
                <service.icon className=&quot;h-8 w-8 text-white&quot; />
              </div>
              
              <h3 className=&quot;text-xl font-bold text-white mb-3 text-center&quot;>
                {service.title}
              </h3>
              
              <p className=&quot;text-gray-300 text-center mb-4&quot;>
                {service.description}
              </p>

              <div className=&quot;mb-4&quot;></div>
                <div className=&quot;text-2xl font-bold text-purple-400 text-center mb-2&quot;></div>
                  {service.stats}
                </div>
                <div className=&quot;text-sm text-gray-400 text-center&quot;></div>
                  Average Improvement
                </div>
              </div>

              <ul className=&quot;space-y-2 mb-6&quot;>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className=&quot;flex items-center space-x-2&quot;>
                    <CheckCircle className=&quot;h-4 w-4 text-green-400 flex-shrink-0&quot; />
                    <span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className=&quot;w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center&quot;>
                Learn More
                <ArrowRight className=&quot;h-4 w-4 ml-2&quot; />
              </button>
            </div>

        </div>
      </div>
    </div>
  ))
}

export default EnhancedServicesShowcase