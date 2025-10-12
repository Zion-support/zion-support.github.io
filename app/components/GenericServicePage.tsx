'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
interface GenericServicePageProps {
  title: string;
  description: string;
  icon: React.ComponentType<a>;
  features: string[];
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';
  color: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  const categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };

  const categoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';

  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title.toLowerCase()}, AI solutions, IT services, ${category.toLowerCase()}`} />
      </Helmet>

      <div>
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section>
            <div>
              <div>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
              
              {pricing && (
                <div>
                  Starting at {pricing}
                </div>
              )}
              
              <div>
                <a>
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a>
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive {title.toLowerCase()} solutions designed to drive your business forward
              </p>
            </div>
            <div>
              {features.map((feature, index) => (
                <div>
                  <div>
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our {title}?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the difference with our proven expertise and cutting-edge technology
              </p>
            </div>
            <div>
              {benefits.map((benefit, index) => (
                <div>
                  <div>
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-300">
                      Leverage our expertise to maximize your business potential with {title.toLowerCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section>
            <div>
              <div>
                <div>
                  <div>500+</div>
                  <div>Happy Clients</div>
                </div>
                <div>
                  <div>99%</div>
                  <div>Success Rate</div>
                </div>
                <div>
                  <div>24/7</div>
                  <div>Support</div>
                </div>
                <div>
                  <div>10+</div>
                  <div>Years Experience</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCase()} needs. 
                Get a free consultation today.
              </p>
              <div>
                <a>
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GenericServicePage;