import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Cloud, BarChart3, Users, Award, ArrowRight, CheckCircle, Star, Globe, Smartphone, Monitor, Package, Mail } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization'],
      price: '$29/month',
      featured: true
    },
    {
      title: 'Zion Security Shield Pro',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield-pro',
      features: ['Threat monitoring', 'Automated responses', 'Security audits'],
      price: '$49/month',
      featured: true
    },
    {
      title: 'Zion Cloud Vault Pro',
      description: 'Secure cloud storage and file management with advanced encryption.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault-pro',
      features: ['End-to-end encryption', 'File sharing', 'Version control'],
      price: '$19/month',
      featured: false
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI insights.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-crm-pro',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting'],
      price: '$39/month',
      featured: false
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform.',
      icon: <Package className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'Content calendar', 'Team collaboration'],
      price: '$39/month',
      featured: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Analytics Pro has transformed how we understand our data. The insights are incredible!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder",
      content: "The AI CRM Pro has increased our sales by 60%. It's like having a sales team that never sleeps.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster now.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation." />
      </Helmet>
      
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Discover our innovative micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation."
        keywords="micro saas, business automation, AI tools, productivity software, business solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Powerful, focused tools that solve specific business challenges. 
              No bloat, no complexity - just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                variant="primary"
                size="lg"
                className="group"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </FuturisticButton>
              <FuturisticButton
                variant="secondary"
                size="lg"
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each product is designed to solve a specific business problem with precision and efficiency.
            </p>
          </div>

          <ResponsiveGrid>
            {microSaasProducts.map((product, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                      {product.icon}
                    </div>
                    {product.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={product.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black/20">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied customers who trust our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with our micro SAAS solutions today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                variant="primary"
                size="lg"
                className="group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </FuturisticButton>
              <FuturisticButton
                variant="secondary"
                size="lg"
              >
                Contact Sales
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;
