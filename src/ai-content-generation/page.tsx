'use client'
import { Brain, BarChart } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Brain, Eye, BarChart } from 'lucide-react'

constAIContentGenerationPage: React.FC= () =>{constcontentServices= [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '✍️',
      price: '$19 9/month',
      features: ['SEO-optimized content', 'Brand voice consistency', 'Research integration', 'Multi-format output'],
      popular: true
   },
    {title: 'Social Media Content Suite',
      description: 'Create engaging social media posts, captions, and hashtags across all platforms with AI-powered optimization.',
      icon: '📱',
      price: '$14 9/month',
      features: ['Platform-specific content', 'Hashtag optimization', 'Visual content ideas', 'Engagement analytics'],
      popular: false
   },
    {title: 'Email Marketing AI',
      description: 'Generate compelling email campaigns, subject lines, and personalized content that converts.',
      icon: '📧',
      price: '$17 9/month',
      features: ['Subject line optimization', 'Personalization', 'A/B testing', 'Conversion tracking'],
      popular: false
   },
    {title: 'E-commerce Product Descriptions',
      description: 'Create compelling product descriptions, reviews, and marketing copy that drives sales.',
      icon: '🛍️',
      price: '$12 9/month',
      features: ['Product descriptions', 'Review generation', 'Marketing copy', 'SEO optimization'],
      popular: false
    }
  ]
  const processSteps = [
    {
      step: '1',
      title: 'Input Your Requirements',
      description: 'Tell us about your brand, target audience, and content goals.',
     icon:<BrainclassName=&quot;w-6h-6&quot; />},
    {step: '2',
      title: 'AI Content Generation',
      description: 'Our AI creates high-quality, engaging content tailored to your needs.',
     icon:<ZapclassName=&quot;w-6h-6&quot; />},
    {step: '3',
      title: 'Review & Refine',
      description: 'Review the generated content and make any necessary adjustments.',
     icon:<EyeclassName=&quot;w-6h-6&quot; />},
    {step: '4',
      title: 'Publish & Monitor',
      description: 'Publish your content and monitor performance with detailed analytics.',
      icon: <BarChart className=&quot;w-6 h-6&quot; />
    }
  ]
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
=======
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        {/* Hero Section */}
        <section className=&quot;text-center mb-16&quot;></section>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            AI Content Generation
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
            Transform your content strategy with our AI-powered content generation services.
            Create blog posts, social media content, and marketing copy 10x faster.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;/contact&quot;
              className=&quot;cyber-button&quot;
            >
              Get Started
            </a>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;cyber-button&quot;
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
        {/* Services Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>
            Content Generation Services
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8&quot;></div>
            {contentServices.map((service, index) => (
              <div key={index} className=&quot;cyber-card hologram-card p-6&quot;></div>
                <div className=&quot;text-4xl mb-4&quot;>{service.icon}</div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{service.title}</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                <ul className=&quot;text-sm text-gray-400 mb-4&quot;>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className=&quot;flex items-center mb-1&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className=&quot;text-cyan-400 font-bold mb-4&quot;>{service.price}</div>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;cyber-button w-full text-center block&quot;
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Process Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>
            How It Works
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {processSteps.map((step, index) => (
              <div key={index} className=&quot;text-center&quot;></div>
                <div className=&quot;bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  {step.step}
                </div>
                <div className=&quot;text-cyan-400 mb-2&quot;>{step.icon}</div>
                <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{step.title}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white mb-8&quot;>
            Ready to Transform Your Content?
          </h2>
          <p className=&quot;text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Join thousands of businesses using our AI content generation services to create
            engaging, high-quality content at scale.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;/contact&quot;
              className=&quot;cyber-button&quot;
            >
              Start Free Trial
            </a>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;cyber-button&quot;
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      <Footer />
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
    </div>
  )
}
export default AIContentGenerationPage
