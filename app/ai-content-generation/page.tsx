import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
  const features = [
    {
      title: 'AI Blog Content Generator Pro',
        description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
        icon: '✍️',
        price: '$199/month',
        features: [
          'SEO-optimized content generation',
          'Research integration',
          'Brand voice consistency',
          'Multi-language support',
          'Content calendar automation',
          'Performance analytics'
        ],
        benefits: [
          'Create 10x more content',
          'Improve SEO rankings by 150%',
          'Save 40+ hours per week',
          'Increase organic traffic by 200%'
        ],
        marketPrice: '$500-1000/month',
        technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
        contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
      },
  ];

const contentTypes = [
    "Blog articles and long-form content",
    "Social media posts and captions",
    "Email marketing campaigns",
    "Product descriptions and reviews",
    "Technical documentation",
    "Press releases and announcements",
    "Website copy and landing pages",
    "Ad copy and marketing materials"
  ];
  return (
    <>
      <Helmet>
        <title>AI Content Generation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your content strategy with our AI-powered content generation services. Create blog posts, social media content, and marketing copy 10x faster." />
        <meta name="keywords" content="AI content generation, automated content creation, blog writing, social media content, marketing copy" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Generation</span>
              </h1>
              
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your content strategy with AI-powered content generation. 
                Create high-quality, SEO-optimized content at scale across multiple formats and languages.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create compelling content at scale
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  
          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Content Types We Generate</h2>
                
          <p className="text-xl text-gray-300">
                  From blog posts to social media content, we can create any type of content you need
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 gap-6">
                {contentTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process makes AI content generation simple and efficient
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  </div>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Content?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI content generation can transform your content strategy.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AiContentGenerationPage;