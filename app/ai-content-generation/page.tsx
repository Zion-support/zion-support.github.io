import React from 'react';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
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
        'Create 10 x more content',
        'Improve SEO rankings by 150%',
        'Save 40+ hours per week',
        'Increase organic traffic by 200%'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization, hashtag research, and engagement prediction.',
      icon: '📱',
      price: '$149/month',
      features: [
        'Platform-specific optimization',
        'Hashtag research automation',
        'Engagement prediction',
        'Visual content generation',
        'Posting schedule optimization',
        'Viral content analysis'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Grow followers organically',
        'Save 25+ hours per week',
        'Improve brand awareness'
      ],
      marketPrice: '$300-600/month',
      technologies: ['OpenAI GPT-4', 'DALL-E', 'Instagram API', 'Twitter API', 'LinkedIn API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">{/* Hero Section */}</div>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6"></h1></<<<h1>AI</h1></<<h1>Content</h1> Generation<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"></span></<<<span>Services</span></span><p className="text-xl text-gray-600 mb-8 max-w-3 xl mx-auto">Transform your content strategy with our AI-powered content generation services.</p></<<<p>Create</p></<<p>high</p>-quality blog posts, social media content, and marketing copy 10 x faster.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              ></a>
                <<<<span>Call</span></<<span>Now</span>: (302) 464-0950</span>
                <ArrowRight className="w-5 h-5" /></ArrowRigh>
              <a
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >Get Free Consultation</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"></h2></<<<h2>Our</h2></<<h2>AI</h2> Content Services<p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p></<<<p>Choose</p></<<p>from</p> our comprehensive suite of AI-powered content generation services<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{contentServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"></div>
                <div className="flex items-center mb-4"></div>
                  <span className="text-4 xl mr-4">{service.icon}</spa>
                  <div></div>
                    <h3 className="text-2 xl font-bold text-gray-900"></h>{service.title}<p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="mb-6"></div>
                  <div className="flex items-center justify-between mb-2"></div>
                    <span className="text-3 xl font-bold text-blue-600"></spa>{service.price}<span className="text-sm text-gray-500">Market: {service.marketPrice}</spa>
                  </div>
                </div>
                <div className="mb-6"></div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4><ul className="space-y-2">{service.features.map((feature, idx) => (</u>
                      <li key={idx} className="flex items-center text-gray-600"></l>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" >{feature}</CheckCircl>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
                <div className="mb-6"></div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4><ul className="space-y-2">{service.benefits.map((benefit, idx) => (</u>
                      <li key={idx} className="flex items-center text-gray-600"></l>
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" >{benefit}</Sta>
                      </Star>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4"></div>
                  <p className="text-sm text-gray-600">{service.contactInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGenerationPage;
