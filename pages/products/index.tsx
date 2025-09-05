import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics platform with AI-driven insights and predictions.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization'],
    pricing: '$299 - $1,499/month',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern businesses.',
    icon: Cloud,
    features: ['Auto-scaling', 'High Availability', 'Disaster Recovery', '24/7 Monitoring'],
    pricing: '$199 - $999/month',
    category: 'Cloud',
    popular: true
  },
  {
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions to protect your business.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance'],
    pricing: '$399 - $1,999/month',
    category: 'Security',
    popular: true
  },
  {
    title: 'Team Collaboration',
    description: 'AI-powered collaboration tools for remote teams.',
    icon: Users,
    features: ['Video Conferencing', 'Document Collaboration', 'Task Management', 'AI Assistant'],
    pricing: '$99 - $499/month',
    category: 'Collaboration',
    popular: false
  }
];

const ProductsIndex: NextPage = () => {
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of AI-powered products and solutions" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered products designed to transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <product.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
                {product.popular && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                    Popular
                  </span>
                )}
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {product.pricing}
              </div>
              
              <Link href="/contact">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
=======
    }
  ];

  return (
                  </Link>
                </div>
              </div>
            ))}
          </div>
                </Link>
              </div>
            ))}
          </div>
>>>>>>> main
  );
};

export default ProductsIndex;