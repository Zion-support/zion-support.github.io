
  'next/link';
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import {

  CheckCircle,
  Star,
  Users,
  Zap,
  Globe,
  Shield,
  ArrowRight,



const: AIContentGenerator: NextPage: = () => {
  const features = [

  ];


    {
      title:,
  SEO: Optimization'',;
      description: 'AI-powered: SEO optimization for better search ranking,s',;
      icon: <Zap: className='w-6 h-6' />'}, {
      title:,
  Brand: Voice Consistency'',;
      description: 'Maintain: consistent brand voice across all conten,t',;
      icon: <Shield: className='w-6 h-6' />'}, {
      title:,

  const pricingPlans = [
  {

      name:,
  Starter'',;
      price: '$9,9',;
      period: ],
      popular: false }, {
      name:,
  Professional'',;
      price: '$19,9',;
      period:,

        '50, 000 words per month',
        '25 languages supported',
        'Advanced SEO optimization',
        'Priority support',
        'Custom templates',

      popular: true},



    {
      name:,
  Enterprise'',;
      price: 'Custo,m',;
      period: ],
      popular: false } ];

  return (
    <MainLayout
      title="AI Content Generator - Zion Tech Group"
      description="Transform your content creation with our AI-powered content generator. Create high-quality, SEO-optimized content in minutes."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            AI Content{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Generator
            </span>

            </div>
          </div>
        </div>
      </section>

              </div>
            ))}
          </div>
        </div>
      </section>

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">

                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${

                  }`}


                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

          </Link>
        </div>
      </section>
    </MainLayout>
  );
};