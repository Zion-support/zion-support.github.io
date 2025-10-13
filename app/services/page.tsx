import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Cloud, BarChart3, Globe, Zap } from 'lucide-react';
export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies."Machine Learning", ", "Computer Vision"Predictive Analytics"]
    },
    {
      icon: <Shield className="Cybersecurity",
      description: ",
      features: ["Threat Detection"Security Audits", ", "Compliance"w-8 h-8"Cloud Services"Migrate and optimize your infrastructure with our cloud solutions and managed services.",
      features: [", "Infrastructure Management"Scalability", "]
    },
    {
      icon: <Zap className="w-8 h-8",
      description: "Ready-to-use software solutions that can transform your business operations immediately."AI Tools", ", "Quick Deployment"No Setup Required"]
    },
    {
      icon: <Globe className="5 G Solutions",
      description: ",
      features: ["5 G Infrastructure"IoT Solutions", ", "Smart Cities"w-8 h-8"Data Analytics"Unlock insights from your data with our advanced analytics and business intelligence solutions.",
      features: [", "Data Visualization"Predictive Modeling", "]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" content="Comprehensive AI and IT services by Zion Tech Group"container mx-auto px-4 py-20"text-center mb-16"text-4 xl font-bold text-white mb-8"text-xl text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"text-2 xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors"text-gray-300 mb-6 leading-relaxed"space-y-2"flex items-center text-gray-300"w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
