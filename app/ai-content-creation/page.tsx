import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, PenTool, Image, Video, FileText } from 'lucide-react';

const AIContentCreationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation for blogs, articles, marketing copy, and technical documentation.',
      icon: '✍️',
      price: '$199/month',
      features: [
        'Blog Post Generation',
        'Article Writing',
        'Marketing Copy',
        'Technical Documentation',
        'SEO Optimization',
        'Plagiarism Detection',
        'Tone & Style Customization',
        'Multi-language Support'
      ],
      benefits: [
        'Create 50+ articles per day',
        'Reduce writing time by 80%',
        'Improve SEO rankings by 40%',
        'Maintain consistent brand voice',
        'Scale content production 10x'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Content Writing',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom NLP Models', 'SEO Tools', 'Plagiarism Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Image Generator',
      description: 'Professional AI image creation for marketing, social media, and design projects with custom styles.',
      icon: '🎨',
      price: '$299/month',
      features: [
        'Custom Image Generation',
        'Style Transfer',
        'Background Removal',
        'Image Enhancement',
        'Logo Creation',
        'Social Media Graphics',
        'Product Photography',
        'Brand Consistency'
      ],
      benefits: [
        'Generate 100+ images daily',
        'Reduce design costs by 70%',
        'Create unique visuals instantly',
        'Maintain brand consistency',
        'Scale visual content production'
      ],
      marketPrice: '$800-2,000/month',
      category: 'Image Generation',
      technologies: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'Adobe Creative Suite', 'Custom AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Creation | Zion Tech Group</title>
        <meta name="description" content="Professional AI content creation services including writing, image generation, and video production for your business." />
        <meta name="keywords" content="AI content creation, content writing, image generation, video production, content marketing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content Creation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create compelling content at scale with our advanced AI-powered content creation suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content Creation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional AI-powered content creation for all your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-purple-400 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-sm text-gray-400">{service.contactInfo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss your content creation needs and get a custom solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentCreationPage;