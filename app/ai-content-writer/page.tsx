import React from 'react';
import {  PenTool, FileText, Sparkles, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'AI Writing Assistant',
      description: 'Advanced AI-powered content generation and writing assistance.',
      benefits: ['Content Generation', 'Grammar Check', 'Style Optimization', 'Tone Adjustment'],
      icon: <PenTool>
  
    },
    {
      title: 'Content Templates',
      description: 'Pre-built templates for various content types and formats.',
      benefits: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions'],
      icon: <FileText>
  
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to optimize content for search engines.',
      benefits: ['Keyword Research', 'Meta Tags', 'Content Analysis', 'Ranking Insights'],
      icon: <Target>
  
    },
    {
      title: 'Creative Enhancement',
      description: 'AI-powered creative tools to enhance your content quality.',
      benefits: ['Ideas Generation', 'Headline Creation', 'Content Expansion', 'Creative Writing'],
      icon: <Sparkles>
  
    }
  ];

  return (
    <div>

    <>
      <Helmet>
  
        <title>AI Content Writer | Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      <div>
  
        <Navigation>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
          <div>
  
          <div>
  
            <h1>
  
              AI Content
              <span>
  
                Writer
              </span>
            </h1>
            <p>
  
              Professional AI content writing solutions by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div>
  
              <button>
  
                Get Started Today
                <ArrowRight>
  
              </button>
              <button>
  
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Advanced AI Content Creation
              </h2>
              <p>
  
                Comprehensive AI content writing platform designed for modern businesses.
              </p>
            </div>
            
            <div>
  
              {features.map((feature, index) => (
                <div>
  
                  <div>
  
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul>
  
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li>
  
                        <CheckCircle>
  
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p>
  
                Contact us today to learn more about our AI content writing solutions.
              </p>
              <div>
  
                <button>
  
                  Contact Us
                </button>
                <button>
  
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer>
  
      </div>
    </>
  );
};

export default AIContentWriterPage;
