import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { SEO } from &apos;../components/SEO&apos;;
import { Button } from &apos;../components/ui/Button&apos;;
import { Card } from &apos;../components/ui/Card&apos;;
import { Badge } from &apos;../components/ui/Badge&apos;;
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from &apos;lucide-react&apos;;

export default function Home() {
  const stats = [
    { number: &apos;500+&apos;, label: &apos;Projects Completed&apos; },
    { number: &apos;50+&apos;, label: &apos;Happy Clients&apos; },
    { number: &apos;99.9%&apos;, label: &apos;Uptime Guarantee&apos; },
    { number: &apos;24/7&apos;, label: &apos;Support Available&apos; }
  ];

  const testimonials = [
    {
      name: &apos;Sarah Johnson&apos;,
      role: &apos;CEO, TechCorp&apos;,
      content: &apos;Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.&apos;,
      rating: 5
    },
    {
      name: &apos;Michael Chen&apos;,
      role: &apos;CTO, InnovateLabs&apos;,
      content: &apos;Outstanding service and cutting-edge technology. They delivered our project on time and within budget.&apos;,
      rating: 5
    },
    {
      name: &apos;Emily Rodriguez&apos;,
      role: &apos;Founder, StartupXYZ&apos;,
      content: &apos;The team at Zion Tech Group is exceptional. Their expertise in cloud infrastructure saved us months of development.&apos;,
      rating: 5
    }
  ];

  const features = [
    {
      icon: Zap,
      title: &apos;Lightning Fast&apos;,
      description: &apos;Optimized performance with cutting-edge technology&apos;
    },
    {
      icon: Shield,
      title: &apos;Secure & Reliable&apos;,
      description: &apos;Enterprise-grade security with 99.9% uptime guarantee&apos;
    },
    {
      icon: Globe,
      title: &apos;Global Reach&apos;,
      description: &apos;Serving clients worldwide with 24/7 support&apos;
    },
    {
      icon: TrendingUp,
      title: &apos;Scalable Solutions&apos;,
      description: &apos;Grow with confidence using our scalable architecture&apos;
    }
  ];
  const services = [
    {
      title: &apos;AI Services&apos;,
      description: &apos;Cutting-edge artificial intelligence solutions and automation tools&apos;,
      icon: Brain,
      href: &apos;/services#ai&apos;,
      features: [&apos;Content Creation&apos;, &apos;Email Automation&apos;, &apos;Customer Support&apos;, &apos;Business Intelligence&apos;]
    },
    {
      title: &apos;IT Services&apos;,
      description: &apos;Enterprise-grade infrastructure and development services&apos;,
      icon: Network,
      href: &apos;/services#cloud&apos;,
      features: [&apos;DevOps Automation&apos;, &apos;Cloud Migration&apos;, &apos;Security Assessment&apos;, &apos;API Management&apos;]
    },
    {
      title: &apos;Micro SaaS&apos;,
      description: &apos;Specialized software solutions for business challenges&apos;,
      icon: Cloud,
      href: &apos;/services#saas&apos;,
      features: [&apos;Project Management&apos;, &apos;Analytics Dashboard&apos;, &apos;HR Management&apos;, &apos;Financial Tracking&apos;]
    }
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider</title>
        <meta name=&apos;description&apos; content=&apos;Transform your business with Zion Tech Group cutting-edge AI services, enterprise IT solutions, and innovative Micro SaaS platforms. 500+ projects completed, 99.9% uptime guarantee.&apos; />
        <meta name=&apos;keywords&apos; content=&apos;AI services, IT solutions, Micro SaaS, cloud computing, cybersecurity, business automation, technology consulting, enterprise software&apos; />
        <meta name=&apos;viewport&apos; content=&apos;width=device-width, initial-scale=1&apos; />
        <meta property=&apos;og:title&apos; content=&apos;Zion Tech Group - Leading Technology Solutions Provider&apos; />
        <meta property=&apos;og:description&apos; content=&apos;Transform your business with cutting-edge AI, IT, and Micro SaaS solutions. Expert team, proven results, 24/7 support.&apos; />
        <meta property=&apos;og:type&apos; content=&apos;website&apos; />
        <meta property=&apos;og:url&apos; content=&apos;https://ziontechgroup.com&apos; />
        <meta property=&apos;og:image&apos; content=&apos;https://ziontechgroup.com/og-image.jpg&apos; />
        <meta name=&apos;twitter:card&apos; content=&apos;summary_large_image&apos; />
        <meta name=&apos;twitter:title&apos; content=&apos;Zion Tech Group - Leading Technology Solutions Provider&apos; />
        <meta name=&apos;twitter:description&apos; content=&apos;Transform your business with cutting-edge AI, IT, and Micro SaaS solutions.&apos; />
        <meta name=&apos;twitter:image&apos; content=&apos;https://ziontechgroup.com/og-image.jpg&apos; />
        <link rel=&apos;canonical&apos; href=&apos;https://ziontechgroup.com&apos; />
        <script type=&apos;application/ld+json&apos;>
          {JSON.stringify({
            &quot;@context&quot;: &quot;https://schema.org&quot;,
            &quot;@type&quot;: &quot;Organization&quot;,
            &quot;name&quot;: &quot;Zion Tech Group&quot;,
            &quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
            &quot;logo&quot;: &quot;https://ziontechgroup.com/logo.png&quot;,
            &quot;description&quot;: &quot;Leading provider of AI services, IT solutions, and Micro SaaS platforms&quot;,
            &quot;address&quot;: {
              &quot;@type&quot;: &quot;PostalAddress&quot;,
              &quot;streetAddress&quot;: &quot;364 E Main St STE 1008&quot;,
              &quot;addressLocality&quot;: &quot;Middletown&quot;,
              &quot;addressRegion&quot;: &quot;DE&quot;,
              &quot;postalCode&quot;: &quot;19709&quot;,
              &quot;addressCountry&quot;: &quot;US&quot;
            },
            &quot;contactPoint&quot;: {
              &quot;@type&quot;: &quot;ContactPoint&quot;,
              &quot;telephone&quot;: &quot;+1-302-464-0950&quot;,
              &quot;contactType&quot;: &quot;customer service&quot;,
              &quot;email&quot;: &quot;kleber@ziontechgroup.com&quot;
            },
            &quot;sameAs&quot;: [
              &quot;https://ziontechgroup.com&quot;
            ]
          })}
        </script>
      </Head>
      <main className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>
        {/* Hero Section */}
        <section className=&apos;relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600&apos;>
          <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32&apos;>
            <div className=&apos;text-center&apos;>
              <h1 className=&apos;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6&apos;>
                Welcome to Zion Tech Group
              </h1>
              <p className=&apos;text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8&apos;>
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
              </p>
              <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center items-center&apos;>
                <Link href=&apos;/services&apos;>
                  <Button className=&apos;bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold&apos;>
                    Explore Our Services
                    <ArrowRight className=&apos;w-5 h-5 ml-2&apos; />
                  </Button>
                </Link>
                <Link href=&apos;/contact&apos;>
                  <Button variant=&apos;outline&apos; className=&apos;border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold&apos;>
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className=&apos;py-16 bg-white&apos;>
          <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>
            <div className=&apos;grid grid-cols-2 lg:grid-cols-4 gap-8&apos;>
              {stats.map((stat, index) => (
                <div key={index} className=&apos;text-center&apos;>
                  <div className=&apos;text-3xl sm:text-4xl font-bold text-blue-600 mb-2&apos;>{stat.number}</div>
                  <div className=&apos;text-sm sm:text-base text-gray-600&apos;>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className=&apos;py-20 sm:py-32&apos;>
          <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>
            <div className=&apos;text-center mb-16&apos;>
              <h2 className=&apos;text-3xl sm:text-4xl font-bold text-gray-900 mb-6&apos;>
                Our Core Services
              </h2>
              <p className=&apos;text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto&apos;>
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
            </div>
            <div className=&apos;grid grid-cols-1 lg:grid-cols-3 gap-8&apos;>
              {services.map((service, index) => (
                <Card key={index} className=&apos;p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg&apos;>
                  <div className=&apos;p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6&apos;>
                    <service.icon className=&apos;w-8 h-8 text-white&apos; />
                  </div>
                  <h3 className=&apos;text-2xl font-bold text-gray-900 mb-4 text-center&apos;>{service.title}</h3>
                  <p className=&apos;text-gray-600 mb-6 text-center&apos;>{service.description}</p>
                  <div className=&apos;mb-6&apos;>
                    <h4 className=&apos;text-sm font-semibold text-gray-900 mb-3&apos;>Key Features:</h4>
                    <div className=&apos;grid grid-cols-2 gap-2&apos;>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className=&apos;flex items-center text-sm text-gray-600&apos;>
                          <CheckCircle className=&apos;w-4 h-4 text-green-500 mr-2 flex-shrink-0&apos; />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={service.href}>
                    <Button className=&apos;w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white&apos;>
                      Learn More
                      <ArrowRight className=&apos;w-4 h-4 ml-2&apos; />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&apos;py-20 bg-gray-50&apos;>
          <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>
            <div className=&apos;text-center mb-16&apos;>
              <h2 className=&apos;text-3xl sm:text-4xl font-bold text-gray-900 mb-6&apos;>
                Why Choose Zion Tech Group?
              </h2>
              <p className=&apos;text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto&apos;>
                We deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
              </p>
            </div>
            <div className=&apos;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&apos;>
              {features.map((feature, index) => (
                <div key={index} className=&apos;text-center group&apos;>
                  <div className=&apos;p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300&apos;>
                    <feature.icon className=&apos;w-8 h-8 text-white&apos; />
                  </div>
                  <h3 className=&apos;text-xl font-bold text-gray-900 mb-4&apos;>{feature.title}</h3>
                  <p className=&apos;text-gray-600&apos;>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className=&apos;py-20 bg-white&apos;>
          <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>
            <div className=&apos;text-center mb-16&apos;>
              <h2 className=&apos;text-3xl sm:text-4xl font-bold text-gray-900 mb-6&apos;>
                What Our Clients Say
              </h2>
              <p className=&apos;text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto&apos;>
                Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
              </p>
            </div>
            <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-8&apos;>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className=&apos;p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300&apos;>
                  <div className=&apos;flex items-center mb-4&apos;>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&apos;w-5 h-5 text-yellow-400 fill-current&apos; />
                    ))}
                  </div>
                  <p className=&apos;text-gray-600 mb-6 italic&apos;>&quot;{testimonial.content}&quot;</p>
                  <div className=&apos;border-t pt-4&apos;>
                    <div className=&apos;font-semibold text-gray-900&apos;>{testimonial.name}</div>
                    <div className=&apos;text-sm text-gray-500&apos;>{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className=&apos;py-20 bg-gradient-to-r from-blue-600 to-purple-600&apos;>
          <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&apos;>
            <h2 className=&apos;text-3xl sm:text-4xl font-bold text-white mb-6&apos;>
              Ready to Transform Your Business?
            </h2>
            <p className=&apos;text-xl text-blue-100 mb-8 max-w-2xl mx-auto&apos;>
              Contact us today for a free consultation and discover how our solutions can drive your success.
            </p>
            <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center items-center&apos;>
              <a href=&apos;tel:+13024640950&apos; className=&apos;flex items-center text-white hover:text-blue-200 transition-colors&apos;>
                <Phone className=&apos;w-5 h-5 mr-2&apos; />
                +1 302 464 0950
              </Link>
              <a href=&apos;mailto:kleber@ziontechgroup.com&apos; className=&apos;flex items-center text-white hover:text-blue-200 transition-colors&apos;>
                <Mail className=&apos;w-5 h-5 mr-2&apos; />
                kleber@ziontechgroup.com
              </Link>
            </div>
            <div className=&apos;mt-4 text-center text-blue-100&apos;>
              <p className=&apos;text-sm&apos;>364 E Main St STE 1008, Middletown DE 19709</p>
              <p className=&apos;text-sm mt-1&apos;>Visit us at <a href=&apos;https://ziontechgroup.com&apos; className=&apos;underline hover:text-white&apos; target=&apos;_blank&apos; rel=&apos;noreferrer&apos;>ziontechgroup.com</Link></p>
            </div>
            <div className=&apos;mt-8&apos;>
              <Link href=&apos;/contact&apos;>
                <Button className=&apos;bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold&apos;>
                  Get Free Consultation
                  <ArrowRight className=&apos;w-5 h-5 ml-2&apos; />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}