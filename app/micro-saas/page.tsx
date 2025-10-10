'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 1,
      title: 'AI Content Writer',
      description: 'Automated content creation with AI-powered writing assistance',
      category: 'AI Tools',
      price: '$29/month',

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime'
    }
  ];

      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions. Small, focused tools that solve specific business problems with big impact." />
        <meta name="keywords" content="micro SaaS, AI tools, productivity software, business automation, small business tools" />
      </Helmet>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {product.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {product.users}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{product.price}</div>
                </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
