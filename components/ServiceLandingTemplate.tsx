import React from 'react';
import { SEO } from './SEO';
import { GradientHeading } from './GradientHeading';
import { ContactSection } from './ContactSection';
import Link from 'next/link';

interface Benefit {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

interface Pricing {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface ServiceLandingTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  features: string[];
  pricing: Pricing[];
  ctaText: string;
  ctaLink: string;
}

export function ServiceLandingTemplate({
  title,
  subtitle,
  description,
  benefits,
  features,
  pricing,
  ctaText,
  ctaLink,
}: ServiceLandingTemplateProps) {
  return (
    <>
      <SEO title={title} description={description} />

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        {/* Hero Section */}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <GradientHeading
              title={title}
              subtitle={subtitle}
              className='text-center mb-16'
            />

            <div className='text-center mb-16'>
              <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
                {description}
              </p>
            </div>

            <div className='text-center'>
              <Link
                href={ctaLink}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300'
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50'>
          <div className='max-w-7xl mx-auto'>
            <GradientHeading
              title='Why Choose Our Service'
              subtitle='Discover the benefits that set us apart'
              className='text-center mb-16'
            />

            <div className='grid md:grid-cols-3 gap-8'>
              {benefits.map((benefit, index) => (
                <div key={index} className='text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <benefit.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    {benefit.title}
                  </h3>
                  <p className='text-gray-300'>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <GradientHeading
              title='Key Features'
              subtitle='Everything you need to succeed'
              className='text-center mb-16'
            />

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='space-y-4'>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-gray-300'>{feature}</span>
                  </div>
                ))}
              </div>
              <div className='bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Ready to Get Started?
                </h3>
                <p className='text-gray-100 mb-6'>
                  Join thousands of satisfied customers who have transformed
                  their business with our solutions.
                </p>
                <Link
                  href={ctaLink}
                  className='inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300'
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50'>
          <div className='max-w-7xl mx-auto'>
            <GradientHeading
              title='Pricing Plans'
              subtitle='Choose the perfect plan for your needs'
              className='text-center mb-16'
            />

            <div className='grid md:grid-cols-3 gap-8'>
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className='bg-slate-800 rounded-2xl p-8 text-center'
                >
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>
                  <div className='text-4xl font-bold text-purple-400 mb-2'>
                    {plan.price}
                  </div>
                  <p className='text-gray-300 mb-6'>{plan.description}</p>

                  <ul className='space-y-3 mb-8'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center'>
                        <div className='w-2 h-2 bg-purple-400 rounded-full mr-3'></div>
                        <span className='text-gray-300'>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={ctaLink}
                    className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 block'
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
