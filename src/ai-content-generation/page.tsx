<<<<<<< HEAD
'use client'
import { Brain, BarChart } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Brain, Eye, BarChart } from 'lucide-react';
constAIContentGenerationPage: React.FC = () =>{constcontentServices= [
    {
      title: 'AI Blog Content Generator Pro'
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.'
      icon: '✍️'
      price: '$19 9/month'
      features: ['SEO-optimized content', 'Brand voice consistency', 'Research integration', 'Multi-format output']
      popular: true
   }
    {title: 'Social Media Content Suite'
      description: 'Create engaging social media posts, captions, and hashtags across all platforms with AI-powered optimization.'
      icon: '📱'
      price: '$14 9/month'
      features: ['Platform-specific content', 'Hashtag optimization', 'Visual content ideas', 'Engagement analytics']
      popular: false
   }
    {title: 'Email Marketing AI'
      description: 'Generate compelling email campaigns, subject lines, and personalized content that converts.'
      icon: '📧'
      price: '$17 9/month'
      features: ['Subject line optimization', 'Personalization', 'A/B testing', 'Conversion tracking']
      popular: false
   }
    {title: 'E-commerce Product Descriptions'
      description: 'Create compelling product descriptions, reviews, and marketing copy that drives sales.'
      icon: '🛍️'
      price: '$12 9/month'
      features: ['Product descriptions', 'Review generation', 'Marketing copy', 'SEO optimization']
      popular: false
    }
  ]
  const processSteps = [;
    {
      step: '1'
      title: 'Input Your Requirements'
      description: 'Tell us about your brand, target audience, and content goals.'
     icon:<BrainclassName="w-6h-6" />}
    {step: '2'
      title: 'AI Content Generation'
      description: 'Our AI creates high-quality, engaging content tailored to your needs.'
     icon:<ZapclassName="w-6h-6" />}
    {step: '3'
      title: 'Review & Refine'
      description: 'Review the generated content and make any necessary adjustments.'
     icon:<EyeclassName="w-6h-6" />}
    {step: '4'
      title: 'Publish & Monitor'
      description: 'Publish your content and monitor performance with detailed analytics.'
      icon: <BarChart className="w-6h-6" />
    }
  ]
  return ()
    <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="con tainermx-auto px-4 py-16 pt-24">
        </div>
        {/* Hero Section */}
        <section className="tex t-centermb-16">
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6">
        </div>
            AI Content Generation
          </h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto">
        </div>
            Transform your content strategy with our AI-powered content generation services.
            Create blog posts, social media content, and marketing copy 10x faster.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              className="cyb er-button"
            >
        </div>
              Get Started
            </a>
            <a href="tel:+13024640950">
              className="cyb er-button"
            >
        </div>
              Call (302) 464-0950
            </a>
          </div>
        </section>
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="tex t-3xlfont-bold text-white mb-8 text-center">
        </div>
            Content Generation Services
          </h2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-8">
            {contentServices.map((service, index) => ()
              <div key={index} className="cyb er-cardhologram-card p-6">
                <div className="tex t-4xlmb-4">{service.icon}</div>
                <h3 className="tex t-xlfont-bold text-white mb-3">{service.title}</h3>
                <p className="tex t-gray-300mb-4">{service.description}</p>
                <ul className="tex t-smtext-gray-400 mb-4">
        </div>
                  {service.features.map((feature, idx) => ()
                    <li key={idx} className="fle xitems-center mb-1">
        </div>
                      <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="tex t-cyan-400font-bold mb-4">{service.price}</div>
                <a href="/contact">
                  className="cyb er-buttonw-full text-center block"
                >
        </div>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Process Section */}
        <section className="mb-16">
          <h2 className="tex t-3xlfont-bold text-white mb-8 text-center">
        </div>
            How It Works
          </h2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => ()
              <div key={index} className="tex t-center">
                <div className="bg-cy an-600text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <div className="tex t-cyan-400mb-2">{step.icon}</div>
                <h3 className="tex t-lgfont-bold text-white mb-2">{step.title}</h3>
                <p className="tex t-gray-300text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="tex t-center">
          <h2 className="tex t-3xlfont-bold text-white mb-8">
        </div>
            Ready to Transform Your Content?
          </h2>
          <p className="tex t-gray-300mb-8 max-w-2xl mx-auto">
        </div>
            Join thousands of businesses using our AI content generation services to create
            engaging, high-quality content at scale.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              className="cyb er-button"
            >
        </div>
              Start Free Trial
            </a>
            <a href="tel:+13024640950">
              className="cyb er-button"
            >
        </div>
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
};
}
export default AIContentGenerationPage;
=======
import React from "react";

interface PagePageProps {
  // Add props here
}

const PagePage: React.FC<PagePageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the  page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
>>>>>>> origin/main
