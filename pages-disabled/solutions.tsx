import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import {
  // TODO: Implement
}
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Brain, 
  Network, 
  TrendingUp, 
  Clock, 

  CheckCircle, 
  ArrowRight;
} from 'lucide-react';
const solutions = [
  {
    title: 'Enterprise Solutions',
    icon: Shield,
    description: 'Comprehensive enterprise-grade solutions for large organizations',']
    features: ['Scalable Architecture', 'Enterprise Security', '24/7 Support', 'Custom Integration']
  },
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Modern cloud infrastructure and migration services',
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization']
    title: 'AI Solutions',
    icon: Brain,
    description: 'Artificial intelligence and machine learning solutions',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  {'
    title: 'Cloud Solutions','
    icon: Cloud,'
    description: 'Modern cloud infrastructure and migration services',''
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization']'
  },
  {'
    title: 'AI Solutions','
    icon: Brain,'
    description: 'Artificial intelligence and machine learning solutions',''
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']'

];

export default function SolutionsPage() {
  return (
    <Layout;

    <Layout;'
      title="Solutions - Zion Tech Group"""
      description="Comprehensive technology solutions for businesses of all sizes"""
      keywords="solutions, enterprise, cloud, AI, technology solutions""
    >
"
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">"
</div>"
        <section className="relative py-20 px-4">"
</section>"
          <div className="max-w-7xl mx-auto">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}"
              className="text-center""
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
</span>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">"
</p>
            </motion.div>
        <section className="py-16">"
          <div className="max-w-7xl mx-auto px-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
                  key={index}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow""
                  <div className="flex items-center mb-4">"
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">"
                      <solution.icon className="w-6 h-6 text-blue-600" />"
</solution>
                    <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>"
                  <p className="text-gray-600 mb-4">{solution.description}</p>""
                  <ul className="space-y-2">"
</ul>"
                      <li key={featureIndex} className="flex items-center">"
</li>"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                        <span className="text-sm text-gray-600">{feature}</span>"

                      </li>
                  </ul>
                </motion.div>)
              ))}
            </div>
          </div>

        </section>"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="container mx-auto px-4 text-center">"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              <h2 className="text-4xl font-bold text-white mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <a;"
                  href="/contact"""
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center""
</a>"
                  <ArrowRight className="w-4 h-4 ml-2" />"

                </a>
                  href="/services"""
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors""
        </section>
                >
</a>

                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>"
