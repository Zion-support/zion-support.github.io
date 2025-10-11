import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-helmet-async';
const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and sales automation.',
      features: ['No-code builder', 'Multi-channel deployment', 'Analytics dashboard', 'Custom integrations'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports', 'API integration'],
      pricing: 'Starting at $79/month',
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management, scheduling, and responses with intelligent email assistance.',
      features: ['Smart scheduling', 'Auto-responses', 'Email categorization', 'Sentiment analysis'],
      pricing: 'Starting at $39/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-500" />,
      title: 'AI Image Recognition',
      description: 'Advanced computer vision solutions for object detection, facial recognition, and image analysis.',
      features: ['Real-time processing', 'Custom model training', 'API integration', 'Batch processing'],
      pricing: 'Starting at $99/month',
      link: '/ai-image-recognition',
      popular: false
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: 'AI Voice Assistant',
      description: 'Build conversational AI assistants with natural language processing and speech recognition.',
      features: ['Voice commands', 'Multi-language support', 'Custom wake words', 'Cloud integration'],
      pricing: 'Starting at $69/month',
      link: '/ai-voice-assistant',
      popular: true
    }
  ];

  const features = [
    {
      icon: <Cog className="w-6 h-6 text-blue-500" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate AI services into your existing workflow with our simple APIs.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Real-time Analytics',
      description: 'Monitor performance and usage with comprehensive analytics and reporting tools.'
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: 'Custom AI Models',
      description: 'Train custom AI models tailored to your specific business needs and data.'
    }
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>AI Services - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>

      {/* Hero Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h1>
  
              AI Services That
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Transform</span>
              <br>
  
              Your Business
            </h1>
            <p>
  
              Leverage the power of artificial intelligence to automate processes, enhance customer experiences, 
              and drive innovation across your organization.
            </p>
            <div>
  
              <Link>
  
                Get Started Today
              </Link>
              <Link>
  
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2>
  
              Our AI Service Portfolio
            </h2>
            <p>
  
              Choose from our comprehensive suite of AI services designed to address every aspect of your business needs.
            </p>
          </div>

          <div>
  
            {aiServices.map((service, index) => (
              <div>
  
                <div>
  
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  {service.popular && (
                    <span>
  
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul>
  
                  {service.features.map((feature, featureIndex) => (
                    <li>
  
                      <CheckCircle>
  
                      {feature}
                    </li>
                  ))}
                </ul>

                <div>
  
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>

                <Link>
  
                  Learn More
                  <ArrowRight>
  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2>
  
              Why Choose Our AI Services?
            </h2>
            <p>
  
              We combine cutting-edge technology with industry expertise to deliver AI solutions that drive real business value.
            </p>
          </div>

          <div>
  
            {features.map((feature, index) => (
              <div>
  
                <div>
  
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
  
  <div>
  
        <div>
  
          <h2>
  
            Ready to Transform Your Business with AI?
          </h2>
          <p>
  
            Join thousands of businesses already using our AI services to drive growth and innovation.
          </p>
          <div>
  
            <Link>
  
              Get Started Today
            </Link>
            <Link>
  
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;