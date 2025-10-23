'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '✍️',
      price: '$199/month',
      features: ['SEO-optimized content', 'Brand voice consistency', 'Research integration', 'Multi-format output'],
      popular: true
    },
    {
      title: 'Social Media Content Suite',
      description: 'Create engaging social media posts, captions, and hashtags across all platforms with AI-powered optimization.',
      icon: '📱',
      price: '$149/month',
      features: ['Platform-specific content', 'Hashtag optimization', 'Visual content ideas', 'Engagement analytics'],
      popular: false
    },
    {
      title: 'Email Marketing AI',
      description: 'Generate compelling email campaigns, subject lines, and personalized content that converts.',
      icon: '📧',
      price: '$179/month',
      features: ['Subject line optimization', 'Personalization', 'A/B testing', 'Conversion tracking'],
      popular: false
    },
    {
      title: 'E-commerce Product Descriptions',
      description: 'Create compelling product descriptions, reviews, and marketing copy that drives sales.',
      icon: '🛍️',
      price: '$129/month',
      features: ['Product descriptions', 'Review generation', 'Marketing copy', 'SEO optimization'],
      popular: false
    }
  ];
  const processSteps = [
    {
      step: '1',
      title: 'Input Your Requirements',
      description: 'Tell us about your brand, target audience, and content goals.',
      icon: <Brain className="w-6 h-6" /></Brain className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'AI Content Generation',
      description: 'Our AI creates high-quality, engaging content tailored to your needs.',
      icon: <Zap className="w-6 h-6" /></Zap className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Review & Refine',
      description: 'Review the generated content and make any necessary adjustments.',
      icon: <Eye className="w-6 h-6" /></Eye className="w-6 h-6" />
    },
    {
      step: '4',
      title: 'Publish & Monitor',
      description: 'Publish your content and monitor performance with detailed analytics.',
      icon: <BarChart className="w-6 h-6" /></BarChart className="w-6 h-6" />
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Navigation /><>
</Navigation />
<main className="container mx-auto px-4 py-16 pt-24"></main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16"><>
</section className="text-center mb-16">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
            AI Content Generation</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with our AI-powered content generation services. </p><//p>
            Create blog posts, social media content, and marketing copy 10x faster.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
              href="/contact"
              className="cyber-button"
            ></a
              href="/contact"
              className="cyber-button"
            >
              Get Started
            </a><>
<//a>
<a
              href="tel:+13024640950"
              className="cyber-button"
            ></a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a><>
<//a>
</div><>
<//div>
</section><//section>
        {/* Services Section */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl font-bold text-white mb-8 text-center"></h1><//h1>
            Content Generation Services</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"></div><//div>
            {contentServices.map((service, index) => (</div><>
<//div>
<div key={index} className="cyber-card hologram-card p-6"></div><>
<//div>
<div className="text-4xl mb-4">{service.icon}</div><>
<//div>
<h3 className="text-xl font-bold text-white mb-3">{service.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{service.description}</p><>
<//p>
<ul className="text-sm text-gray-400 mb-4"></ul className="text-sm text-gray-400 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-1"><>
</li key={idx} className="flex items-center mb-1">
<CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
<div className="text-cyan-400 font-bold mb-4">{service.price}</div><>
<//div>
<a
                  href="/contact"
                  className="cyber-button w-full text-center block"
                ></a
                  href="/contact"
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                </a><>
<//a>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* Process Section */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl font-bold text-white mb-8 text-center"></h1><//h1>
            How It Works</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
            {processSteps.map((step, index) => (</div><>
<//div>
<div key={index} className="text-center"></div><>
<//div>
<div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"></div><//div>
                  {step.step}</div><>
<//div>
</div><>
<//div>
<div className="text-cyan-400 mb-2">{step.icon}</div><>
<//div>
<h3 className="text-lg font-bold text-white mb-2">{step.title}</h3><>
<//h3>
<p className="text-gray-300 text-sm">{step.description}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section className="text-center"><>
</section className="text-center">
<h2 className="text-3xl font-bold text-white mb-8"></h1><//h1>
            Ready to Transform Your Content?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our AI content generation services to create </p><//p>
            engaging, high-quality content at scale.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
              href="/contact"
              className="cyber-button"
            ></a
              href="/contact"
              className="cyber-button"
            >
              Start Free Trial
            </a><>
<//a>
<a
              href="tel:+13024640950"
              className="cyber-button"
            ></a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a><>
<//a>
</div><>
<//div>
</section><>
<//section>
</main><>
<//main>
<Footer /><>
</Footer />
</div><//div>
  );
};
export default AIContentGenerationPage;