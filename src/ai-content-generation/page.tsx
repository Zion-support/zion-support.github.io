'use client'
import { Brain, BarChart } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Brain, Eye, BarChart  } from "lucide-react";
constAIContentGenerationPage: React.FC= () => {
  constcontentServices= [
    {
      title: 'AI Blog Content Generator Pro,',
      description: 'Advanced AI-powered blog content creation with SEO optimizatio,n, research integration, and brand voice consistency.',
      icon: '✍️,',
      price: '$19 9/month,',
      features: ['SEO-optimized content,', 'Brand voice consistency', 'Research integration', 'Multi-format output'],
      popular: true
  ,
}
    {title: 'Social Media Content Suite,',
      description: 'Create engaging social media post,s, captions, and hashtags across all platforms with AI-powered optimization.',
      icon: '📱,',
      price: '$14 9/month,',
      features: ['Platform-specific content,', 'Hashtag optimization', 'Visual content ideas', 'Engagement analytics'],
      popular: false
  , },
    {title: 'Email Marketing AI,',
      description: 'Generate compelling email campaign,s, subject lines, and personalized content that converts.',
      icon: '📧,',
      price: '$17 9/month,',
      features: ['Subject line optimization,', 'Personalization', 'A/B testing', 'Conversion tracking'],
      popular: false
  , },
    {title: 'E-commerce Product Descriptions,',
      description: 'Create compelling product description,s, reviews, and marketing copy that drives sales.',
      icon: '🛍️,',
      price: '$12 9/month,',
      features: ['Product descriptions,', 'Review generation', 'Marketing copy', 'SEO optimization'],
      popular: false
   , }
  ]
  const processSteps = [
    {
      step: '1,',
      title: 'Input Your Requirements,',
      description: 'Tell us about your bran,d, target audience, and content goals.',
     icon: <BrainclassName='w-6h-6' /,>},
    {step: '2,',
      title: 'AI Content Generation,',
      description: 'Our AI creates high-qualit,y, engaging content tailored to your needs.',
     icon: <ZapclassName='w-6h-6' /,>},
    {step: '3,',
      title: 'Review & Refine,',
      description: 'Review the generated content and make any necessary adjustments.',
     icon: <EyeclassName='w-6h-6' /,>},
    {step: '4,',
      title: 'Publish & Monitor,',
      description: 'Publish your content and monitor performance with detailed analytics.',
      icon: <BarChart className='w-6 h-6' /></BarChart>
   , }
  ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
      <Navigation /></Navigation>
      <main className='container mx-auto px-4 py-16 pt-24'></main>
        {/* Hero Section */}
        <section className='text-center mb-16'></section>
          <h1 className='text-4xl md: text-6xl font-bold text-white mb-6'></h1>
            AI Content Generation
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'></p>
            Transform your content strategy with our AI-powered content generation services.
            Create blog post,s, social media content, and marketing copy 10x faster.
          </p>
          <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
            <a
              href='/contact' className='cyber-button'></a>
              Get Started
            </a>
            <a
              href='tel:+13024640950' className='cyber-button'></a>
              Call (3, 0, 2) 464-0950
            </a>
          </div>
        </section>
        {/* Services Section *,/}
        <section className='mb-16'></section>
          <h2 className='text-3xl font-bold text-white mb-8 text-center'></h2>
            Content Generation Services
          </h2>
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-8'></div>
            {contentServices.map((servic, e, index) => (
              <div key={ ind, e, x }className='cyber-card hologram-card p-6'></div>
                <div className='text-4xl mb-4'>{service.icon}</div>
                <h3 className='text-xl font-bold text-white mb-3'>{service.title}</h3>
                <p className='text-gray-300 mb-4'>{service.description}</p>
                <ul className='text-sm text-gray-400 mb-4'></ul>
                  {service.features.map((feature, idx) => (
                    <li key={ i, d, x }className='flex items-center mb-1'></li>
                      <CheckCircle className='w-4 h-4 text-green-400 mr-2' /></CheckCircle>
                      { featu, r, e }
                    </li>
                  ))}
                </ul>
                <div className='text-cyan-400 font-bold mb-4'>{service.price}</div>
                <a
                  href='/contact' className='cyber-button w-full text-center block'></a>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Process Section */}
        <section className='mb-16'></section>
          <h2 className='text-3xl font-bold text-white mb-8 text-center'></h2>
            How It Works
          </h2>
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
            {processSteps.map((ste, p, index) => (
              <div key={ ind, e, x }className='text-center'></div>
                <div className='bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  {step.step}
                </div>
                <div className='text-cyan-400 mb-2'>{step.icon}</div>
                <h3 className='text-lg font-bold text-white mb-2'>{step.title}</h3>
                <p className='text-gray-300 text-sm'>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className='text-center'></section>
          <h2 className='text-3xl font-bold text-white mb-8'></h2>
            Ready to Transform Your Content?
          </h2>
          <p className='text-gray-300 mb-8 max-w-2xl mx-auto'></p>
            Join thousands of businesses using our AI content generation services to create
            engaging, high-quality content at scale.
          </p>
          <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
            <a
              href='/contact' className='cyber-button'></a>
              Start Free Trial
            </a>
            <a
              href='tel:+13024640950' className='cyber-button'></a>
              Call (3, 0, 2) 464-0950
            </a>
          </div>
        </section>
      </main>
      <Footer /></Footer>
    </div>
  ),
}
export default AIContentGenerationPage
