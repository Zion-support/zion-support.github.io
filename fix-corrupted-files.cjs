const fs = require('fs');
const path = require('path');

// List of corrupted files that need to be fixed
const corruptedFiles = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-infrastructure/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/404.tsx',
  'api/create-payment-intent.js'
];

// Template for 5G pages
const fiveGPageTemplate = (title, description, features) => `import React from 'react';
import { 
  Wifi, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Network,
  Database
} from 'lucide-react';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  const features = ${JSON.stringify(features, null, 2)};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">${title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our ${title}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge 5G solutions powered by the latest technology</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Ultra-low latency and high-speed connectivity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// 404 page template
const notFoundPageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-x-4">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}`;

// API template
const apiTemplate = `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({
        error: 'Internal server error',
        message: error.message
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    // Mock payment intent creation
    const paymentIntent = {
      id: \`pi_\${Date.now()}\`,
      amount,
      currency,
      status: 'requires_payment_method',
      client_secret: \`pi_\${Date.now()}_secret_\${Math.random().toString(36).substr(2, 9)}\`
    };
    
    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});`;

// 5G page configurations
const fiveGPages = {
  'app/5g-data-analytics/page.tsx': {
    title: '5G Data Analytics',
    description: 'Advanced data analytics solutions powered by 5G technology for real-time insights and decision making.',
    features: [
      {
        icon: 'BarChart3',
        title: 'Real-time Analytics',
        description: 'Process and analyze data in real-time with 5G speed',
        benefits: ['Instant insights', 'Live dashboards', 'Predictive analytics']
      },
      {
        icon: 'Database',
        title: 'Big Data Processing',
        description: 'Handle massive datasets with 5G connectivity',
        benefits: ['Scalable processing', 'Cloud integration', 'Data visualization']
      },
      {
        icon: 'Cpu',
        title: 'Edge Computing',
        description: 'Process data at the edge for faster response times',
        benefits: ['Low latency', 'Reduced bandwidth', 'Improved performance']
      }
    ]
  },
  'app/5g-edge-computing/page.tsx': {
    title: '5G Edge Computing',
    description: 'Leverage the power of 5G edge computing for ultra-low latency applications and real-time processing.',
    features: [
      {
        icon: 'Cpu',
        title: 'Edge Processing',
        description: 'Process data closer to the source for minimal latency',
        benefits: ['Ultra-low latency', 'Real-time processing', 'Bandwidth optimization']
      },
      {
        icon: 'Network',
        title: 'Distributed Computing',
        description: 'Distribute computing power across edge nodes',
        benefits: ['Scalable architecture', 'Fault tolerance', 'Load balancing']
      },
      {
        icon: 'Zap',
        title: 'Instant Response',
        description: 'Achieve millisecond response times with edge computing',
        benefits: ['Real-time applications', 'IoT integration', 'Autonomous systems']
      }
    ]
  },
  'app/5g-implementation/page.tsx': {
    title: '5G Implementation',
    description: 'Complete 5G network implementation services from planning to deployment and optimization.',
    features: [
      {
        icon: 'Network',
        title: 'Network Planning',
        description: 'Strategic planning and design of 5G infrastructure',
        benefits: ['Site surveys', 'Coverage analysis', 'Capacity planning']
      },
      {
        icon: 'Wifi',
        title: 'Infrastructure Setup',
        description: 'Deploy and configure 5G network equipment',
        benefits: ['Equipment installation', 'Configuration', 'Testing']
      },
      {
        icon: 'Shield',
        title: 'Security Implementation',
        description: 'Implement comprehensive security measures',
        benefits: ['Network security', 'Data protection', 'Compliance']
      }
    ]
  },
  'app/5g-infrastructure/page.tsx': {
    title: '5G Infrastructure',
    description: 'Build robust and scalable 5G infrastructure to support your business needs.',
    features: [
      {
        icon: 'Network',
        title: 'Core Network',
        description: 'Deploy 5G core network infrastructure',
        benefits: ['5G Core deployment', 'Network slicing', 'Service orchestration']
      },
      {
        icon: 'Wifi',
        title: 'Radio Access Network',
        description: 'Implement 5G RAN for optimal coverage',
        benefits: ['Small cell deployment', 'Massive MIMO', 'Beamforming']
      },
      {
        icon: 'Cloud',
        title: 'Cloud Integration',
        description: 'Integrate with cloud platforms for scalability',
        benefits: ['Multi-cloud support', 'Edge cloud', 'Hybrid infrastructure']
      }
    ]
  },
  'app/5g-mobile-applications/page.tsx': {
    title: '5G Mobile Applications',
    description: 'Develop high-performance mobile applications that leverage 5G capabilities.',
    features: [
      {
        icon: 'Smartphone',
        title: 'Native Apps',
        description: 'Build native mobile apps optimized for 5G',
        benefits: ['High performance', 'Low latency', 'Rich media support']
      },
      {
        icon: 'Globe',
        title: 'Cross-Platform',
        description: 'Develop apps that work across all platforms',
        benefits: ['iOS & Android', 'Web apps', 'Progressive Web Apps']
      },
      {
        icon: 'Zap',
        title: 'Real-time Features',
        description: 'Implement real-time features with 5G speed',
        benefits: ['Live streaming', 'AR/VR', 'Gaming']
      }
    ]
  },
  'app/5g-network-infrastructure/page.tsx': {
    title: '5G Network Infrastructure',
    description: 'Comprehensive 5G network infrastructure solutions for enterprise and carrier deployments.',
    features: [
      {
        icon: 'Network',
        title: 'Network Design',
        description: 'Design optimal 5G network architecture',
        benefits: ['Coverage planning', 'Capacity design', 'Interference analysis']
      },
      {
        icon: 'Wifi',
        title: 'Equipment Deployment',
        description: 'Deploy and configure 5G equipment',
        benefits: ['Base stations', 'Antennas', 'Backhaul']
      },
      {
        icon: 'Shield',
        title: 'Security & Compliance',
        description: 'Ensure network security and regulatory compliance',
        benefits: ['Security protocols', 'Data protection', 'Standards compliance']
      }
    ]
  },
  'app/5g-network-optimization/page.tsx': {
    title: '5G Network Optimization',
    description: 'Optimize your 5G network performance for maximum efficiency and coverage.',
    features: [
      {
        icon: 'BarChart3',
        title: 'Performance Analysis',
        description: 'Analyze and monitor network performance metrics',
        benefits: ['KPI monitoring', 'Performance reports', 'Trend analysis']
      },
      {
        icon: 'Zap',
        title: 'Speed Optimization',
        description: 'Optimize network speed and throughput',
        benefits: ['Bandwidth optimization', 'Latency reduction', 'Capacity tuning']
      },
      {
        icon: 'Globe',
        title: 'Coverage Enhancement',
        description: 'Improve network coverage and reliability',
        benefits: ['Signal optimization', 'Dead zone elimination', 'Handover optimization']
      }
    ]
  },
  'app/5g-private-networks/page.tsx': {
    title: '5G Private Networks',
    description: 'Deploy dedicated 5G private networks for enterprise and industrial applications.',
    features: [
      {
        icon: 'Shield',
        title: 'Private Infrastructure',
        description: 'Deploy dedicated 5G infrastructure for your organization',
        benefits: ['Dedicated resources', 'Enhanced security', 'Custom configuration']
      },
      {
        icon: 'Network',
        title: 'Network Slicing',
        description: 'Create isolated network slices for different applications',
        benefits: ['Service isolation', 'QoS guarantees', 'Resource allocation']
      },
      {
        icon: 'Cpu',
        title: 'Edge Computing',
        description: 'Integrate edge computing capabilities',
        benefits: ['Local processing', 'Reduced latency', 'Data sovereignty']
      }
    ]
  },
  'app/5g-smart-city-solutions/page.tsx': {
    title: '5G Smart City Solutions',
    description: 'Transform your city with 5G-powered smart city solutions and IoT applications.',
    features: [
      {
        icon: 'Globe',
        title: 'Smart Infrastructure',
        description: 'Deploy smart city infrastructure with 5G connectivity',
        benefits: ['IoT sensors', 'Smart lighting', 'Traffic management']
      },
      {
        icon: 'BarChart3',
        title: 'Data Analytics',
        description: 'Analyze city data for better decision making',
        benefits: ['Real-time insights', 'Predictive analytics', 'Resource optimization']
      },
      {
        icon: 'Shield',
        title: 'Public Safety',
        description: 'Enhance public safety with 5G-enabled systems',
        benefits: ['Emergency response', 'Surveillance systems', 'Communication networks']
      }
    ]
  }
};

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = '';
    
    if (filePath === 'app/404.tsx') {
      content = notFoundPageTemplate;
    } else if (filePath === 'api/create-payment-intent.js') {
      content = apiTemplate;
    } else if (fiveGPages[filePath]) {
      const config = fiveGPages[filePath];
      content = fiveGPageTemplate(config.title, config.description, config.features);
    }
    
    if (content) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all corrupted files
console.log('Fixing corrupted files...');
corruptedFiles.forEach(fixFile);
console.log('Done!');