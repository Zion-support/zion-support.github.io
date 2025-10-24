'use client'
<<<<<<< HEAD:all-pages-backup/components/SEOHead.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
:app/components/SEOHead.tsx

const SEOHeadPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD:all-pages-backup/components/SEOHead.tsx
      icon: Brain,
  title: title,
  description: description,
  benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
    {
      icon: BarChart,
  title: title,
  description: description,
  benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
    {
      icon: Target,
  title: title,
  description: description,
  benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
    {
      icon: TrendingUp,
  title: title,
  description: description,
  benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
:app/components/SEOHead.tsx
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]

  return (
<<<<<<< HEAD:all-pages-backup/components/SEOHead.tsx
    <>;
      <Helmet>;
:app/components/SEOHead.tsx
        <title>{fullTitle}</title>;
        <meta name=&quot;description&quot; content=&quot;Zion Tech Group&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, SEOHead, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              SEOHead
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Zion Tech Group
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
<<<<<<< HEAD:all-pages-backup/components/SEOHead.tsx
  )};

export default SEOHeadPage
:app/components/SEOHead.tsx
description?: string
keywords?: string
canonical?: string
ogImage?: string
ogType?: string
twitterCard?: string
<<<<<<< HEAD:all-pages-backup/components/SEOHead.tsx
{structuredData?:object}
{}
constSEOHead: React.FC<SEOHeadProp s>= ({title= 'Zion Tech Group - Advanced AI & IT Solutions'
:app/components/SEOHead.tsx
description= 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.'
keywords= 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation'
canonical
ogImage= '/og-image.jpg'
ogType= 'website'
twitterCard= 'summary_large_image'
structuredData}) => {constfullTitle= title.includes('Zion Tech Group') ? title:`${title} | Zion TechGroup`
<<<<<<< HEAD:all-pages-backup/components/SEOHead.tsx
constcanonicalUrl= canonical || (type of windo w !== 'undefined' ? windo w.location.href: '')
const defaultStructuredData= {&quot;@context&quot;:&quot;https:// schema.org&quot;,&quot;@type&quot;:&quot;Organization&quot;,&quot;name&quot;:&quot;Zion Tech Group&quot;,&quot;url&quot;:&quot;https:// ziontechgroup.com&quot;,&quot;logo&quot;:&quot;https:// ziontechgroup.com/logo.png&quot;,&quot;description&quot;:&quot;Advanced AI and IT Solutions company providing cutting-edge technology services&quot;,&quot;address&quot;: {&quot;@type&quot;:&quot;PostalAddress&quot;,&quot;streetAddress&quot;:&quot;364E Main St STE1008&quot;,&quot;addressLocality&quot;:&quot;Middletown&quot;,&quot;addressRegion&quot;:&quot;DE&quot;,&quot;postalCode&quot;:&quot;1970 9&quot;,&quot;addressCountry&quot;:&quot;US&quot},&quot;contactPoint&quot;: {&quot;@type&quot;:&quot;ContactPoint&quot;,&quot;telephone&quot;:&quot;+1-30 2-46 4-095 0&quot;,&quot;contactType&quot;:&quot;customer service&quot;,&quot;email&quot;:&quot;kleber@ziontechgroup.com&quot},&quot;sameAs&quot;: [&quot;https:// www.linkedin.com/$1/zion-tech-group&quot;,&quot;https:// twitter.com/ziontechgroup&quot
:app/components/SEOHead.tsx
]
}
return(<Helme t>{/* Basic MetaTags*/}<titl e>{fullTitle}</titl><metaname=&quot;description&quot; content={description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;keywords&quot; content={keywords} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;author&quot;content=&quot;Zion TechGroup&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;robots&quot;content=&quot;index,follow&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;viewport&quot;content=&quot;width=device-width,initial-scale=1.0&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>{/* CanonicalURL */}
{canonicalUrl&&<linkrel=&quot;canonical&quot;href = {canonicalUrl} />}
{/* Open GraphMetaTags*/}<metaproperty=&quot;og:title&quot; content={fullTitle} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaproperty=&quot;og:description&quot; content={description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaproperty=&quot;og:type&quot; content={ogType} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaproperty=&quot;og:url&quot; content={canonicalUrl} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaproperty=&quot;og:image&quot; content={ogImage} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaproperty=&quot;og:site_name&quot;content=&quot;Zion TechGroup&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaproperty=&quot;og:locale&quot;content=&quot;en_US&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>{/* Twitter CardMetaTags*/}<metaname=&quot;twitter:card&quot; content={twitterCard} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;twitter:title&quot; content={fullTitle} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;twitter:description&quot; content={description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;twitter:image&quot; content={ogImage} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>{/* Additional SEOMetaTags*/}<metaname=&quot;theme-color&quot;content=&quot;#0f172a&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;msapplication-TileColor&quot;content=&quot;#0f172a&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;apple-mobile-web-app-capable&quot;content=&quot;yes&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head><metaname=&quot;apple-mobile-web-app-status-bar-style&quot;content=&quot;black-translucent&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>{/* StructuredData*/}<scripttype=&quot;application/ld+json&quot;>{JSON.stringify(structuredData ||defaultStructuredData)}</scrip></Helme>)
}
export default SEOHead