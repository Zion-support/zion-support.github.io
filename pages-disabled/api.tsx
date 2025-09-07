import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
const apiFeatures = [
  {
    icon: Code,
    title: 'RESTful API',
    description: 'Clean, intuitive REST API endpoints for easy integration',']
    features: ['RESTful design', 'JSON responses', 'HTTP status codes', 'Error handling']
  },
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security with authentication and encryption',
    features: ['JWT authentication', 'Rate limiting', 'HTTPS encryption', 'API key management']
    icon: Zap,
    title: 'Performance',
    description: 'High-performance API with caching and optimization',
    features: ['Response caching', 'CDN integration', 'Load balancing', 'Real-time updates']
    icon: Book,
    title: 'Documentation',
    description: 'Comprehensive documentation with examples and guides',
    features: ['Interactive docs', 'Code examples', 'SDK libraries', 'Developer support']
];

export default function APIPage() {
  return (
    <Layout;
      title="API - Zion Tech Group"""
      description="Powerful APIs for integrating with Zion Tech Group services. Build amazing applications with our developer-friendly APIs."""
      keywords="API, REST API, developer tools, integration, SDK""
    >
"
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">"
</div>"
        <div className="container mx-auto px-4 py-16">"
</div>
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-16""
</motion>"
            <h1 className="text-5xl font-bold text-gray-900 mb-6">"
</h1>
            </h1>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">"
                key={index}
                transition={{ duration: 0.6, delay: index * 0.1 }}"
                className="bg-white rounded-xl p-8 shadow-lg""
                <div className="flex items-center mb-4">"
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3" />"
</feature>"
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>"
                <p className="text-gray-600 mb-6">{feature.description}</p>""
                <ul className="space-y-2">"
</ul>"
                    <li key={idx} className="flex items-center text-gray-700">"
</li>"
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />"

                    </li>
                </ul>
              </motion.div>)
            ))}

            transition={{ duration: 0.6, delay: 0.8 }}"
            className="bg-blue-600 rounded-xl p-8 text-center""
            <h2 className="text-3xl font-bold text-white mb-4">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-8">"
            </p>"
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">"
              <div className="flex items-center text-white">"
                <Phone className="h-5 w-5 mr-2" />"

                <span>+1 302 464 0950</span>
                <Mail className="h-5 w-5 mr-2" />"

                <span>kleber@ziontechgroup.com</span>
                <MapPin className="h-5 w-5 mr-2" />"

                <span>364 E Main St STE 1008 Middletown DE 19709</span>
        <section className="py - 20 bg - gradient - to - r from - indigo - 600 to - purple - 600 text - white">;"
</section>"
          <div className="container mx - auto px - 4">;"
            <motion.div;"
              className="text - center";"
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;"
              </h2>;"
              <p className="text - xl text - indigo - 100 mb - 8 max - w-3xl mx - auto">;"
              </p>;"
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;"
                <a;"
                  href="/contact";""
                  className="px - 8 py - 4 bg - white text - indigo - 600 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";"
</a>
                </a>;
                  href="/docs";""
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - indigo - 600 transition - all duration - 300 font - semibold";"
              </div>;
            </motion.div>;
        </section>;
    );"