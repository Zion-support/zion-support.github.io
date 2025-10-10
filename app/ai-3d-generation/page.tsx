'use client';
import React, { lazy } from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AI3 DGenerationPage: React.FC = () => {
  const features = [
    'Generate high-quality 3 D models from text descriptions',
    'Create photorealistic textures and materials',
    'Automated animation and rigging',
    'LOD (Level of Detail) optimization',
    'VR/AR integration ready',
    'Real-time rendering capabilities',
    'Batch processing for multiple models',
    'Custom style transfer and adaptation',
    'Physics simulation integration',
    'Export to all major 3 D formats'
  ]
  const benefits = [
    'Reduce 3 D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3 D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3 D artists'
  ]
  const applications = [
    {
      title: 'Game Development',
      description: 'Generate characters, environments, and props for games',
      icon: '🎮',
      examples: ['Character models', 'Environment assets', 'Weapon designs', 'Vehicle models']
    },
    {
      title: 'Architecture & Real Estate',
      description: 'Create 3 D visualizations and virtual tours',
      icon: '🏗️',
      examples: ['Building models', 'Interior designs', 'Furniture layouts', 'Landscape designs']
    },
    {
      title: 'E-commerce',
      description: 'Generate product visualizations and AR experiences',
      icon: '🛒',
      examples: ['Product models', 'AR try-ons', 'Virtual showrooms', 'Packaging designs']
    },
    {
      title: 'Education & Training',
      description: 'Create interactive 3 D learning materials',
      icon: '📚',
      examples: ['Anatomical models', 'Historical reconstructions', 'Scientific visualizations', 'Training simulations']
    },
    {
      title: 'Entertainment & Media',
      description: 'Produce 3 D content for films and animations',
      icon: '🎬',
      examples: ['Character designs', 'Set pieces', 'Props and objects', 'Special effects']
    },
    {
      title: 'Manufacturing',
      description: 'Design and prototype products in 3 D',
      icon: '🏭',
      examples: ['Product prototypes', 'Assembly instructions', 'Quality control models', 'Packaging designs']
    }
  ]
  const pricing = [
    {
      name: 'Creator',
      price: '$199/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 100 3 D models/month',
        'Basic texture generation',
        'Standard quality output',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$499/month',
      description: 'Ideal for small studios',
      features: [
        'Up to 500 3 D models/month',
        'Advanced texture generation',
        'High quality output',
        'Priority support',
        'All export formats',
        'Animation support',
        'Batch processing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large organizations',
      features: [
        'Unlimited 3 D models',
        'Premium texture generation',
        'Ultra-high quality output',
        'Dedicated support',
        'Custom model training',
        'API access',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ]
  const technologies = [
    'NeRF (Neural Radiance Fields)', '3 D GANs', 'Point Cloud Processing',
    'Mesh Generation', 'Texture Synthesis', 'Blender API Integration',
    'Unity Integration', 'Unreal Engine Support', 'Custom 3 D Models',
    'Deep Learning', 'Computer Vision', 'Generative AI'
  ]
  const workflow = [
    {
      step: 1,
      title: 'Describe Your Vision',
      description: 'Input text description or upload reference images',
      icon: '✍️'
    },
    {
      step: 2,
      title: 'AI Processing',
      description: 'Our AI generates 3 D model with textures and materials',
      icon: '🤖'
    },
    {
      step: 3,
      title: 'Review & Refine',
      description: 'Review the generated model and make adjustments',
      icon: '👁️'
    },
    {
      step: 4,
      title: 'Export & Use',
      description: 'Download in your preferred format and integrate',
      icon: '📤'
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helme>
        <<<<title>AI</title></title> 3 D Model Generation - Zion Tech Group | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Generate high-quality 3 D models using AI. Create characters, environments, and objects from text descriptions. Starting at $199/month." /></met>
        <meta name="keywords" content="3 D generation, AI 3 D, 3 D models, game assets, 3 D design, virtual reality, augmented reality" /></met>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto text-center"></div>
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Cube className="w-4 h-4 mr-2" >Revolutionary 3 D Technology</Cube><h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"></h1></<<<h1>AI</h1></h1> 3 D Model Generation<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Create stunning 3 D models, characters, and environments from simple text descriptions.</p></<<<p>Transform</p></<<p>your</p> ideas into photorealistic 3 D assets in minutes, not months.</p>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>90%<div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3 xl font-bold text-green-400 mb-2"></div>80%<div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3 xl font-bold text-purple-400 mb-2"></div>5 min<div className="text-gray-300">Generation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
              <div className="text-3 xl font-bold text-orange-400 mb-2"></div>24/7<div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12"></div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"></div>
              <div className="flex items-center space-x-2"></div>
                <Phone className="w-5 h-5" /></Phon>
                <span className="text-white font-medium"></spa><span className="sr-only">Screen reader:</spa> </span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2"></div>
                <Mail className="w-5 h-5" /></Mai>
                <span className="text-white font-medium"></spa><span className="sr-only">Screen reader:</span> </<<<span>kleber</span></span>@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2"></div>
                <MapPin className="w-5 h-5" /></MapPi>
                <span className="text-white font-medium"></spa><span className="sr-only">Screen reader:</span> </<<<span>Middletown</span></span>, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white text-center mb-12">Powerful 3 D Generation Features</h>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            <div className="space-y-4">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" /></CheckCircl>
                  <span className="text-gray-300"></spa><span className="sr-only">Screen reader:</spa> </span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8"></div>
              <h3 className="text-2 xl font-bold text-white mb-6"></h3></<<<h3>Why</h3></<<h3>Choose</h3> Our 3 D Generation?<div className="space-y-4">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="flex items-start space-x-3"></div>
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" /></TrendingU>
                    <span className="text-gray-300"></spa><span className="sr-only">Screen reader:</spa> </span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white text-center mb-12"></h2></<<<h2>Simple</h2></h2> 4-Step Process<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{workflow.map((step, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2 xl"></spa><span className="sr-only">Screen reader:</spa> </span>{step.icon}<div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">Step {step.step}</div>
                <h3 className="text-xl font-bold text-white mb-2"></h>{step.title}<p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white text-center mb-12"></h2></<<<h2>Applications</h2></h2> & Use Cases<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"></div>
                <div className="text-4 xl mb-4"></div>{app.icon}<h3 className="text-xl font-bold text-white mb-3"></h>{app.title}<p className="text-gray-300 mb-4">{app.description}</p>
                <div className="space-y-2"></div>
                  <h4 className="text-sm font-semibold text-cyan-400">Examples:</h4><ul className="space-y-1" role="list">{app.examples.map((example, exampleIndex) => (</u>
                      <li key={exampleIndex} className="text-sm text-gray-400 flex items-center" style={{ color: "#9 CA3 AF" }}></l>
                        <ArrowRight className="w-3 h-3 mr-2" >{example}</ArrowRigh>
                      </ArrowRight>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white text-center mb-12"></h2></<<<h2>Flexible</h2></<<h2>Pricing</h2> Plans<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>{pricing.map((plan, index) => (<div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium"></spa><span className="sr-only">Screen reader:</span> </<<<span>Most</span></<<span>Popular</span>
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2 xl font-bold text-gray-900 mb-2"></h>{plan.name}<p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4 xl font-bold text-purple-600 mb-2"></div>{plan.price}<p className="text-gray-500"></p></<<<p>per</p></<<p>month</p><ul className="space-y-3 mb-8" role="list">{plan.features.map((feature, featureIndex) => (</u>
                    <li key={featureIndex} className="flex items-center text-gray-600"></l>
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} 3 D Generation Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >Get Started</a>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white text-center mb-12"></h2></<<<h2>Advanced</h2></<<h2>Technologies</h2><div className="flex flex-wrap justify-center gap-4">{technologies.map((tech, index) => (</div>
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"></spa><span className="sr-only">Screen reader:</spa> </span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600"></sectio>
        <div className="max-w-4 xl mx-auto text-center"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Generate 3 D Models?<p className="text-xl text-purple-100 mb-8">Start creating stunning 3 D assets with our AI-powered generation technology.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              aria-label="Call (302) 464-0950"
            >Call (302) 464-0950</a><a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              aria-label="Email Us"
            >Email Us</a>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI3 DGenerationPage;