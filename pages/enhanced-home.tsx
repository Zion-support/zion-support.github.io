import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const handleSelectPlan = (tierId: string) => {
    trackClick(`select-plan-${tierId}`, 'conversion');
    console.log('Selected plan:', tierId);
  };

  const handleReadMore = (slug: string) => {
    trackClick(`read-blog-${slug}`, 'engagement');
    console.log('Read more:', slug);
  };

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.',
      icon: '🤖'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure to support your growing business needs.',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your operations and improve efficiency.',
      icon: '🚀'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion App transformed our entire digital infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'David Lee',
      company: 'Global Innovations',
      content: 'Their cloud solutions are robust and have significantly improved our operational efficiency.',
      rating: 4
    },
    {
      name: 'Emily White',
      company: 'Future Enterprises',
      content: 'The AI integration provided by Zion App has given us a competitive edge in the market.',
      rating: 5
    }
  ];

  const pricingTiers = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$49/month',
      features: ['AI Automation', 'Cloud Hosting', 'Basic Analytics'],
      buttonText: 'Choose Basic'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$99/month',
      features: ['All Basic Features', 'Advanced AI Models', 'Scalable Cloud', 'Custom Integrations'],
      buttonText: 'Choose Pro'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      features: ['All Pro Features', 'Dedicated Support', 'On-premise Options', 'Strategic Consulting'],
      buttonText: 'Contact Us'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      summary: 'Explore how artificial intelligence is reshaping industries and driving innovation.',
      slug: 'future-of-ai',
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Cloud Computing Best Practices',
      summary: 'Learn essential strategies for optimizing your cloud infrastructure for performance and security.',
      slug: 'cloud-best-practices',
      image: '/images/blog/cloud-best.jpg'
    },
    {
      id: 3,
      title: 'Digital Transformation: A Step-by-Step Guide',
      summary: 'A comprehensive guide to successfully implementing digital transformation in your organization.',
      slug: 'digital-transformation-guide',
      image: '/images/blog/digital-transform.jpg'
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Enhanced Home - Zion App</title>
        <meta name="description" content="Discover Zion App's enhanced home page with AI, Cloud, and Digital Transformation solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovate. Transform. Grow.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge AI, Cloud, and Digital Transformation solutions.
            </p>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white rounded-lg shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Core Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8 px-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.company}</div>
                  <div className="text-yellow-500 text-lg">{'⭐'.repeat(testimonial.rating)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 bg-blue-600 text-white rounded-lg shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8 px-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="bg-white text-gray-900 rounded-lg p-8 shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <p className="text-4xl font-bold text-blue-600 mb-6">{tier.price}</p>
                  <ul className="mb-8 text-gray-700">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">✅ {feature}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleSelectPlan(tier.id)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {tier.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Latest Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <button
                      onClick={() => handleReadMore(post.slug)}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-indigo-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
            <p className="text-xl mb-6">Contact us today for a personalized consultation and discover how we can help you achieve your goals.</p>
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}