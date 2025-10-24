import { Brain, BarChart } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Brain, Eye, BarChart } from 'lucide-react';
'use client'

constAIContentGenerationPage: 'React.FC = () => {constcontentService',
      s = [
    {
      title: ''AI Blog Content Generator Pro'
      descriptio',
      n: 'Advanced AI-powered blog content creation with SEO optimization', research integration, and brand voice consistency.'
      icon: ''✍️'
      pric',
      e: ''$1 9 9/month'
      feature',
      s: '['SEO-optimized content', 'Brand voice consistency', 'Research integration', 'Multi-format output'],
      popular: 'true'
   }
    {title: ''Social Media Content Suite'
      descriptio',
      n: 'Create engaging social media posts', captions, and hashtags across all platforms with AI-powered optimization.'
      icon: ''📱'
      pric',
      e: ''$1 4 9/month'
      feature',
      s: '['Platform-specific content', 'Hashtag optimization', 'Visual content ideas', 'Engagement analytics'],
      popular: 'false'
   }
    {title: ''Email Marketing AI'
      descriptio',
      n: 'Generate compelling email campaigns', subject lines, and personalized content that converts.'
      icon: ''📧'
      pric',
      e: ''$1 7 9/month'
      feature',
      s: '['Subject line optimization', 'Personalization', 'A/B testing', 'Conversion tracking'],
      popular: 'false'
   }
    {title: ''E-commerce Product Descriptions'
      descriptio',
      n: 'Create compelling product descriptions', reviews, and marketing copy that drives sales.'
      icon: ''🛍️'
      pric',
      e: ''$1 2 9/month'
      feature',
      s: '['Product descriptions', 'Review generation', 'Marketing copy', 'SEO optimization'],
      popular: 'false'
    }
  ]
  const processSteps = [
    {,,,
    'step: '1',,,
    'title: 'Input Your Requirements',,,
    'description: 'Tell us about your brand, target audience, and content goals.',,,
    'icon: '<BrainclassName="w-6h-6" />'}',,,
    {step: '2',,,
    'title: 'AI Content Generation',,,
    'description: 'Our AI creates high-quality', engaging content tailored to your needs.',,,
    'icon: '<ZapclassName="w-6h-6" />'}',,,
    {step: '3',,,
    'title: 'Review & Refine',,,
    'description: 'Review the generated content and make any necessary adjustments.',,,
    'icon: '<EyeclassName="w-6h-6" />'}',,,
    {step: '4',,,
    'title: 'Publish & Monitor',,,
    'description: 'Publish your content and monitor performance with detailed analytics.',,,
    'icon: '<BarChart className="w-6h-6" />',,,
    '}'
  ]
  return (</div>
      <Navigation />
      <main className="con tainermx-auto px-4 py-1 6 pt-2 4">
        </div>
        {
    /* Hero Section  */
    return (</section>
          <h 1 className="tex t-4xlmd: 'text-6xl font-bold text-white mb-6">
        </div>
            AI Content Generation
          </h 1>
          <p className="tex t-xltext-gray-30 0 mb-8 max-w-3xl mx-auto">
        </div>
            Transform your content strategy with our AI-powered content generation services.
            Create blog posts'', social media content, and marketing copy 1 0x faster.
          </p>
          <div className="fle xflex-col sm: 'flex-row gap-4 justify-center"></div>
            <a href="/contact">
              className="cyb er-button"
            >
        </div>
              Get Started
            </a>
            <a href="te'',
      l: '+1302464095 0">
              className="cyb er-button"
            >
        </div>
              Call (30 2) 46 4-095 0
            </a>
          </div>
        </section>
        {
    /* Services Section  */
    return (</section>
          <h 2 className="tex t-3xlfont-bold text-white mb-8 text-center">
        </div>
            Content Generation Services
          </h 2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 l'',
      g: 'grid-cols-2 gap-8"></div>
            {contentServices.map((service'', index) => ()
              <div key={index} className="cyb er-cardhologram-card p-6"></div>;
                <div className="tex t-4xlmb-4">{service.icon};

  return (
                <h 3 className="tex t-xlfont-bold text-white mb-3">{service.title};

  return (
                <p className="tex t-gray-30 0mb-4">{service.description};

  return (
                <ul className = "tex t-smtext-gray-40 0 mb-4">
        </div>
                  {service.features.map((feature, idx) => ()
                    <li key={idx} className="fle xitems-center mb-1">
        </div>
                      <CheckCircle className="w-4h-4te x t-green-40 0 mr-2" />;
                      {feature};

  return (
                  ))};

  return (
                <div className="tex t-cyan-40 0font-bold mb-4">{service.price};

  return (
                <a href = "/contact">
                  className="cyb er-buttonw-full text-center block"
                >
        </div>
                  Get Started
                </a>
              </div>;
            ))};

  return (
        </section>
        {
    /* Process Section  */
    return (</section>
          <h 2 className = "tex t-3xlfont-bold text-white mb-8 text-center">
        </div>
            How It Works
          </h 2>
          <div className="gri dgrid-cols-1 md: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-8"></div>
            {processSteps.map((step'', index) => ()
              <div key={index} className="tex t-center"></div>
                <div className="bg-cy an-60 0text-white w-1 2 h-1 2 rounded-full flex items-center justify-center mx-auto mb-4"></div>;
                  {step.step};

  return (
                <div className="tex t-cyan-40 0mb-2">{step.icon};

  return (
                <h 3 className="tex t-lgfont-bold text-white mb-2">{step.title};

  return (
                <p className="tex t-gray-30 0text-sm">{step.description};

  return (
              </div>
            ))};

  return (
        </section>
        {
    /* CTA Section  */
    return (</section>
          <h 2 className = "tex t-3xlfont-bold text-white mb-8">
        </div>
            Ready to Transform Your Content?
          </h 2>
          <p className="tex t-gray-30 0mb-8 max-w-2xl mx-auto">
        </div>
            Join thousands of businesses using our AI content generation services to create
            engaging, high-quality content at scale.
          </p>
          <div className="fle xflex-col sm: 'flex-row gap-4 justify-center"></div>
            <a href="/contact">
              className="cyb er-button"
            >
        </div>
              Start Free Trial
            </a>
            <a href="te'',
      l: '+1302464095 0">
              className="cyb er-button"
            >
        </div>
              Call (30 2) 46 4-095 0
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );''
};
export default AIContentGenerationPage;
