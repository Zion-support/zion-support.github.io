import React from 'react';
import Footer from '../components/Footer';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  benefits: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const features: Feature[] = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      icon: Brain,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',

    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 6,
      title: 'Global Scalability',
      description: 'Scale your operations worldwide with our global infrastructure',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans'
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding performance and reliability. Highly recommended for enterprise use.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'VP Technology',
      content: 'The best investment we made for our digital transformation journey.',
      rating: 5
    }
  ];

  useEffect(() => {

  }, [features.length]);

  const currentFeature = features[currentIndex];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Dynamic Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI and technology solutions
          </p>
        </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl text-white transform transition-all duration-500 ${
              index === currentIndex ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
            <p className="text-white/90">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>

            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

