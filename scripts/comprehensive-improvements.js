#!/usr/bin/env node

/**
 * Comprehensive Improvements Script
 * Fixes all build issues and implements comprehensive improvements
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Comprehensive Improvements...');

// 1. Fix Vite configuration to resolve import issues
const fixViteConfig = () => {
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
});
`;
  
  fs.writeFileSync(path.join(process.cwd(), 'vite.config.ts'), viteConfig);
  console.log('✅ Fixed Vite configuration');
};

// 2. Create missing components
const createMissingComponents = () => {
  const components = {
    'src/components/CategoriesSection.tsx': `import React from 'react';
import { motion } from 'framer-motion';

export const CategoriesSection = () => {
  const categories = [
    { name: 'AI Services', icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { name: 'Cloud Solutions', icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', icon: '🔒', color: 'from-red-500 to-orange-500' },
    { name: 'Data Analytics', icon: '📊', color: 'from-green-500 to-teal-500' }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
          <p className="text-lg text-gray-600">Explore our comprehensive range of technology services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={\`bg-gradient-to-r \${category.color} p-6 rounded-xl text-white text-center hover:scale-105 transition-transform cursor-pointer\`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
`,
    
    'src/components/BenefitsSection.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Award } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful project deliveries'
    },
    {
      icon: Star,
      title: 'Expert Team',
      description: 'Highly skilled professionals with industry expertise'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Discover the advantages of partnering with Zion Tech Group</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
`,
    
    'src/components/HowItWorksSection.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We analyze your requirements and propose the best solution'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Detailed project planning and resource allocation'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Expert execution with regular progress updates'
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing maintenance and continuous optimization'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Our streamlined process ensures successful project delivery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
`,
    
    'src/components/FeaturedListingsSection.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export const FeaturedListingsSection = () => {
  const listings = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI solutions.',
      rating: 4.9,
      price: 5000,
      category: 'AI Services'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Scalable and secure cloud infrastructure for your business needs.',
      rating: 4.8,
      price: 3500,
      category: 'Cloud Solutions'
    },
    {
      id: 3,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and protection implementation.',
      rating: 4.9,
      price: 2500,
      category: 'Security'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-lg text-gray-600">Discover our most popular and highly-rated solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {listing.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{listing.title}</h3>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{listing.rating}</span>
                </div>
                <div className="text-lg font-bold text-blue-600">\${listing.price.toLocaleString()}</div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
`,
    
    'src/components/HeroSection.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Technology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Discover cutting-edge AI solutions, expert talent, and innovative technology services to accelerate your digital transformation
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
`,
    
    'src/components/SEO.tsx': `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image || '/og-image.jpg'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
`
  };
  
  Object.entries(components).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created component: ${filePath}`);
  });
};

// 3. Create missing data files
const createMissingData = () => {
  const dataFiles = {
    'src/data/comprehensiveServices2030.ts': `export const COMPREHENSIVE_SERVICES_2030 = [
  {
    id: 'ai-business-intelligence',
    name: 'AI-Powered Business Intelligence Platform',
    description: 'Transform your data into actionable insights with our advanced AI-driven business intelligence solutions.',
    category: 'AI & Business Intelligence',
    rating: 4.9,
    price: 15000,
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration']
  },
  {
    id: 'cybersecurity-suite',
    name: 'Advanced Cybersecurity Suite',
    description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and incident response.',
    category: 'Cybersecurity',
    rating: 4.8,
    price: 12000,
    features: ['24/7 Monitoring', 'Threat Detection', 'Compliance Management', 'Security Training']
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud solutions with automated deployment and continuous integration pipelines.',
    category: 'Cloud & DevOps',
    rating: 4.7,
    price: 8000,
    features: ['Auto-scaling', 'CI/CD Pipelines', 'Monitoring', 'Backup & Recovery']
  },
  {
    id: 'ai-marketing-automation',
    name: 'AI Marketing Automation Platform',
    description: 'Intelligent marketing automation with personalized campaigns and customer journey optimization.',
    category: 'AI & Marketing',
    rating: 4.6,
    price: 6000,
    features: ['Campaign Automation', 'Personalization', 'Analytics', 'A/B Testing']
  },
  {
    id: 'data-analytics-platform',
    name: 'Advanced Data Analytics Platform',
    description: 'Enterprise-grade data analytics with machine learning capabilities and real-time processing.',
    category: 'Data Analytics',
    rating: 4.8,
    price: 10000,
    features: ['Real-time Processing', 'ML Models', 'Data Visualization', 'API Access']
  }
];`,
    
    'src/data/comprehensivePricingGuide2030.ts': `export const COMPREHENSIVE_PRICING_GUIDE_2030 = {
  basic: {
    name: 'Basic Plan',
    price: 2999,
    features: [
      'Basic AI Analytics',
      'Standard Support',
      'Monthly Reports',
      'Email Integration'
    ]
  },
  professional: {
    name: 'Professional Plan',
    price: 7999,
    features: [
      'Advanced AI Analytics',
      'Priority Support',
      'Real-time Monitoring',
      'API Access',
      'Custom Dashboards'
    ]
  },
  enterprise: {
    name: 'Enterprise Plan',
    price: 19999,
    features: [
      'Full AI Suite',
      '24/7 Dedicated Support',
      'Custom Development',
      'Advanced Security',
      'Unlimited Users',
      'On-premise Deployment'
    ]
  }
};`
  };
  
  Object.entries(dataFiles).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created data file: ${filePath}`);
  });
};

// 4. Create missing home components
const createHomeComponents = () => {
  const homeComponents = {
    'src/components/home/QuickAccess.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Cloud } from 'lucide-react';

export const QuickAccess = () => {
  const quickLinks = [
    { name: 'AI Services', icon: Zap, href: '/services?category=ai', color: 'from-purple-500 to-pink-500' },
    { name: 'Team', icon: Users, href: '/team', color: 'from-blue-500 to-cyan-500' },
    { name: 'Security', icon: Shield, href: '/security', color: 'from-green-500 to-teal-500' },
    { name: 'Cloud', icon: Cloud, href: '/services?category=cloud', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <p className="text-lg text-gray-600">Navigate to our most popular services and features</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={\`bg-gradient-to-r \${link.color} p-6 rounded-xl text-white hover:scale-105 transition-transform block text-center\`}
                >
                  <IconComponent className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{link.name}</h3>
                  <ArrowRight className="h-5 w-5 mx-auto" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};`,
    
    'src/components/home/FeatureCTAs.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

export const FeatureCTAs = () => {
  const ctas = [
    {
      title: 'Schedule a Demo',
      description: 'See our solutions in action',
      icon: Calendar,
      href: '/demo',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Get a Quote',
      description: 'Custom pricing for your needs',
      icon: Phone,
      href: '/contact',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Contact Sales',
      description: 'Speak with our experts',
      icon: Mail,
      href: '/contact',
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600">Choose the best way to connect with our team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctas.map((cta, index) => {
            const IconComponent = cta.icon;
            return (
              <motion.div
                key={cta.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={cta.href}
                  className={\`\${cta.color} text-white p-8 rounded-xl hover:scale-105 transition-transform block text-center\`}
                >
                  <IconComponent className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{cta.title}</h3>
                  <p className="mb-4">{cta.description}</p>
                  <ArrowRight className="h-5 w-5 mx-auto" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};`,
    
    'src/components/home/FeatureHighlights.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Clock, Award } from 'lucide-react';

export const FeatureHighlights = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence for business optimization'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance and rapid deployment capabilities'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive compliance'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class professionals with proven expertise'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance and monitoring'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful project deliveries'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group</h2>
          <p className="text-lg text-gray-600">Discover the advantages that make us the preferred choice</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};`,
    
    'src/components/home/ITServiceRequestHero.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const ITServiceRequestHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Request IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Get expert IT support and solutions tailored to your business needs
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              Submit Request
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Services
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};`
  };
  
  Object.entries(homeComponents).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created home component: ${filePath}`);
  });
};

// 5. Create other missing components
const createOtherComponents = () => {
  const otherComponents = {
    'src/components/FloatingCTA.tsx': `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowRight } from 'lucide-react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg max-w-sm">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Need Help?</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-blue-100 mb-3">
            Chat with our experts to get personalized recommendations
          </p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors flex items-center gap-2">
            Start Chat
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};`,
    
    'src/components/ServicesShowcase.tsx': `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export const ServicesShowcase = () => {
  const services = [
    {
      name: 'AI Business Intelligence',
      description: 'Transform data into actionable insights',
      rating: 4.9,
      price: 15000
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions',
      rating: 4.8,
      price: 12000
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions',
      rating: 4.7,
      price: 8000
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-lg text-gray-600">Explore our most popular solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{service.rating}</span>
                </div>
                <div className="text-lg font-bold text-blue-600">${service.price.toLocaleString()}</div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};`
  };
  
  Object.entries(otherComponents).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created component: ${filePath}`);
  });
};

// 6. Install missing dependencies
const installDependencies = () => {
  console.log('📦 Installing missing dependencies...');
  // This would typically run npm install for missing packages
  // For now, we'll just log what would be installed
  const missingDeps = [
    'react-helmet-async',
    'react-router-dom',
    'framer-motion',
    'lucide-react'
  ];
  
  console.log(`Would install: ${missingDeps.join(', ')}`);
};

// Main execution
console.log('🔧 Starting comprehensive improvements...');

fixViteConfig();
createMissingComponents();
createMissingData();
createHomeComponents();
createOtherComponents();
installDependencies();

console.log('🎉 Comprehensive improvements completed!');
console.log('📊 Next steps:');
console.log('1. Run "npm install" to install dependencies');
console.log('2. Run "npm run build" to test the build');
console.log('3. Run "npm run dev" to start development server');