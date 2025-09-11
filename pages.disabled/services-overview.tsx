import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Star, Clock, Users, Shield, Zap, TrendingUp, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const ServicesOverviewPage: NextPage = () => {;
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');
  const stats = [;
    { number: '100+', label: 'Services Available', icon: Globe },
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '30-60%', label: 'Cost Savings', icon: Shield },
  ];
  const benefits = [;
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest technologies and frameworks to deliver innovative solutions that give you a competitive edge.';
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, regular security audits, and advanced threat protection.';
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Our team consists of certified professionals with deep expertise in AI, cloud architecture, and modern development practices.';
},
    {;
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Implementation',
      description: 'Quick setup and deployment to get you up and running in days, not months, with our proven methodologies.';
},
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations with measurable ROI improvements and client satisfaction.';
},
    {;
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing, code reviews, and quality assurance processes ensure reliable and maintainable solutions.';
}
  ];
  const pricingComparison = [;
    {;
      category: 'Micro SaaS',
      ourPrice: '$12 - $1,299/month',
      marketPrice: '$25 - $2,500/month',
      savings: '30-50%',
      features: ['AI-powered automation', 'Real-time analytics', '24/7 support', 'Custom integrations'];
},
    {;
      category: 'IT Services',
      ourPrice: '$2,000 - $120,000',
      marketPrice: '$5,000 - $200,000',
      savings: '25-40%',
      features: ['Cloud migration', 'Security implementation', 'DevOps automation', 'Infrastructure optimization'];
},
    {;
      category: 'AI Services',
      ourPrice: '$5,000 - $400,000',
      marketPrice: '$15,000 - $800,000',
      savings: '40-60%',
      features: ['Custom AI models', 'Machine learning', 'Computer vision', 'Natural language processing'];
}
  ];
  return (;
    <MainLayout;
      title="Complete Services Overview - Zion Tech Group";
      description="Comprehensive overview of all our technology services including micro SaaS, IT services, and AI solutions. Competitive pricing and proven results.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.h1 ;
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight";
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              Complete Technology Solutions Portfolio;
            </motion.h1>;
            <motion.p ;
              className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed";
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >;
              From innovative micro SaaS applications to enterprise-grade AI platforms,
              we provide comprehensive technology solutions that drive business growth and digital transformation.;
            </motion.p>;
            <motion.div ;
              className="flex flex-col sm:flex-row justify-center gap-4";
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >;
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">;
                Get Free Consultation;
              </Link>;
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">;
                View All Services;
              </Link>;
            </motion.div>;
          </div>;
        </div>;
      </section>;

      {/* Stats Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div ;