<<<<<<< HEAD
import React from 'react',

const Sustainability: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>Sustainability | Zion Tech Group</title>,
        <meta name="description" content="Sustainability - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">Sustainability</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default Sustainability;
=======
import React from 'react.ts';
import { SEO  } from '../../components/SEO';
import { motion  } from 'framer-motion.ts';
import { Globe, Leaf, Zap, Shield, Database, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Sun, Wind, Battery, Recycle  } from 'lucide-react.ts';

export default function Sustainability(...args: any[]): any {
  const features = [
    {
      icon: Leaf,
      title: 'Green IT Solutions',
      description: 'Energy-efficient technology and sustainable computing practices',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar, wind, and other renewable energy integration',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Waste reduction and resource optimization strategies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Carbon Tracking',
      description: 'Real-time monitoring and reporting of carbon footprint',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Environmental Compliance',
      description: 'Regulatory compliance and sustainability certifications',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Business growth strategies that prioritize environmental responsibility',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      title: 'Sustainability Assessment',
      description: 'Comprehensive evaluation of current environmental impact',
      price: 'From $3,000',
      features: ['Carbon footprint analysis', 'Energy audit', 'Waste assessment', 'Recommendations']
    },
    {
      title: 'Green IT Implementation',
      description: 'Energy-efficient technology and sustainable computing solutions',
      price: 'From $8,000',
      features: ['Energy optimization', 'Cloud migration', 'Hardware upgrades', 'Monitoring tools']
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Solar, wind, and other renewable energy solutions',
      price: 'From $15,000',
      features: ['System design', 'Installation', 'Grid integration', 'Maintenance']
    },
    {
      title: 'Sustainability Reporting',
      description: 'ESG reporting and sustainability metrics dashboard',
      price: 'From $5,000',
      features: ['Data collection', 'Report generation', 'Stakeholder communication', 'Compliance']
    }
  ];

  const solutions = [
    { name: 'Energy Efficiency', icon: Zap, description: 'Reduce energy consumption and costs' },
    { name: 'Waste Management', icon: Recycle, description: 'Optimize waste reduction and recycling' },
    { name: 'Water Conservation', icon: Globe, description: 'Smart water management systems' },
    { name: 'Carbon Offsetting', icon: Leaf, description: 'Carbon credit and offset programs' },
    { name: 'Sustainable Supply Chain', icon: Network, description: 'Green procurement and logistics' },
    { name: 'Employee Engagement', icon: Users, description: 'Sustainability training and programs' }
  ];

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Sustainability | Zion Tech Group</title>
        <meta name="description" content="Sustainability - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Sustainability</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
