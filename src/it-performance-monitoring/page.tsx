import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {BarChart, Zap, Shield, Settings, CheckCircle, Star,  BarChart,  Zap,  Settings from 'lucide-react';
const ITPerformanceMonitoringPage: React.FC = () => {
  const features = [
    {
  // TODO: Add content
 };
  icon: BarChart,
      title: 'Real-time Monitoring',
      description: 'Comprehensive real-time system performance monitoring',
      benefits: ['Live dashboards', 'Performance metrics', 'Alerting'];
    },
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Automated performance optimization and tuning',
      benefits: ['Auto-tuning', 'Bottleneck detection', 'Optimization recommendations']
      icon: Settings,
      title: 'Custom Dashboards',
      description: 'Customizable dashboards and reporting',
      benefits: ['Custom metrics', 'Visualization', 'Reporting']
    }
  ];
  return (
    
          
          
          
          
          
          
          
          <div></div>Coming Soon</div>
  )
    
          </div></div>
      </div>
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <section className="text-center mb-16"></section>
          </section>
// IT Performance Monitoring
          
          
          
          
          
          
          
          
          
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
// Comprehensive Performance Monitoring Solutions
          
          
          
          
          
          
          
          
          
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Monitor and optimize your IT infrastructure performance with our comprehensive monitoring solutions.
            Get real-time insights and proactive alerts to ensure optimal performance.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
// >
//               Get Started
            
          
          
          
          
          
          
          
          
          </a>
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
<BarChart className="w-5 h-5" />
              +1 302 464 0950
          </div>
        </section>
        </section></section>
          </section></h2>
// Monitoring Services
          
          
          
          
          
          
          
          
          
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => ()
              
          <div key={index} className="cyber-card p-6 hover: scale-105 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto"></div>
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title }
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => ()
                    
          <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
      </main>
      <Footer />
  );
};
export default ITPerformanceMonitoringPage;