import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, Mail, CheckCircle, Star } from 'lucide-react';

interface GenericServicePageProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
}) => {
  const categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600',
  };

  const categoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';

  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title.toLowerCase()}, AI solutions, IT services, ${category.toLowerCase()}`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center py-16">
            <div className="flex justify-center mb-8">
              <div className={`p-4 rounded-full bg-gradient-to-r ${categoryColor} shadow-lg`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{description}</p>
            {pricing && (
              <div className="text-2xl font-semibold text-cyan-400 mb-8">
                Starting at {pricing}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                href="tel:+13024640950"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-lg text-gray-300">
                Comprehensive {title.toLowerCase()} solutions designed to drive your business forward
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our {title}?</h2>
              <p className="text-lg text-gray-300">
                Experience the difference with our proven expertise and cutting-edge technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-400" />
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
          <section className="py-16">
            <div className="text-center mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCase()} needs. 
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                href="mailto:kleber@ziontechgroup.com"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GenericServicePage;
