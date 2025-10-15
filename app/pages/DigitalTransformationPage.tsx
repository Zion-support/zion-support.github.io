import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  BarChart3,
  Target,
  Rocket,
  Users,
  Award,
  Clock,
  Globe,
  Lock,
  TrendingUp,
  Database,
  Network,
  Code,
  Settings,
  Wifi
} from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      title: 'Digital Strategy & Consulting',
      description: 'Comprehensive digital transformation strategy tailored to your business goals and objectives.',
      features: [
        'Digital maturity assessment',
        'Technology roadmap development',
        'Change management planning',
        'ROI analysis and forecasting',
        'Implementation timeline',
        'Success metrics definition'
      ],
      pricing: 'From $10,000',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Process Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: [
        'Workflow analysis and optimization',
        'RPA implementation',
        'Business process reengineering',
        'Integration with existing systems',
        'Performance monitoring',
        'Continuous improvement'
      ],
      pricing: 'From $5,000/month',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Transform your data into actionable insights for better decision making.',
      features: [
        'Data strategy development',
        'Analytics platform implementation',
        'Real-time dashboards',
        'Predictive analytics',
        'Data visualization',
        'Business intelligence tools'
      ],
      pricing: 'From $3,500/month',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Customer Experience Transformation',
      description: 'Enhance customer experience through digital channels and touchpoints.',
      features: [
        'Customer journey mapping',
        'Omnichannel strategy',
        'Personalization engines',
        'Customer analytics',
        'Mobile app development',
        'Digital marketing automation'
      ],
      pricing: 'From $7,500/month',
      icon: <Users className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Modernize your infrastructure with cloud-first solutions and architectures.',
      features: [
        'Cloud readiness assessment',
        'Migration strategy planning',
        'Application modernization',
        'Microservices architecture',
        'DevOps implementation',
        'Security and compliance'
      ],
      pricing: 'From $15,000',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'AI & Machine Learning Integration',
      description: 'Integrate AI and ML capabilities to enhance your business operations.',
      features: [
        'AI strategy development',
        'Machine learning model development',
        'AI platform implementation',
        'Data preparation and training',
        'Model deployment and monitoring',
        'AI ethics and governance'
      ],
      pricing: 'From $12,000',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Discovery',
      description: 'We assess your current digital maturity and identify transformation opportunities.',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'We develop a comprehensive digital transformation strategy tailored to your needs.',
      icon: <Brain className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'We create a detailed implementation plan with timelines and milestones.',
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Execution & Deployment',
      description: 'We execute the transformation plan with minimal disruption to your operations.',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Optimization & Support',
      description: 'We continuously optimize and provide ongoing support for your digital initiatives.',
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      company: 'Manufacturing Corp',
      role: 'CEO',
      content: 'The digital transformation has revolutionized our operations. We\'ve seen 300% improvement in efficiency.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      company: 'Retail Solutions',
      role: 'CTO',
      content: 'The AI integration has transformed our customer experience and increased sales by 150%.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Financial Services',
      role: 'COO',
      content: 'The process automation has streamlined our workflows and reduced costs by 40%.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group | Business Transformation Services</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services including strategy, automation, analytics, and AI integration." />
        <meta name="keywords" content="digital transformation, business transformation, process automation, data analytics, AI integration, cloud migration" />
        <link rel="canonical" href="https://ziontechgroup.com/digital-transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Digital
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business for the digital age with our comprehensive digital transformation services. 
              From strategy to implementation, we guide you through every step of your digital journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Transformation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed to modernize your business and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold text-lg">
                    {service.pricing}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful digital transformation and maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mt-4">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about our digital transformation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital transformation services can modernize your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTransformationPage;