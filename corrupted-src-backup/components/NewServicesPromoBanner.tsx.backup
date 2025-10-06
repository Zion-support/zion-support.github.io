import React from 'react';
import { Link } from 'react-router-dom';
import { newServices2026 } from '../content/new-services-2026';

interface NewServicesPromoBannerProps {
  variant?: 'default' | 'showcase' | 'premium' | 'grid';
  showCount?: number;
  featuredOnly?: boolean;
  className?: string;
}

const NewServicesPromoBanner: React.FC<NewServicesPromoBannerProps> = ({
  variant = 'default',
  showCount = 3,
  featuredOnly = true,
  className = ''
}) => {
  const services = featuredOnly
    ? newServices2026.filter(s = > s.featured).slice(0, showCount)
    : newServices2026.slice(0, showCount);

  if (variant === 'showcase') {
    return (
      <div className={`bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white ${className}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-300 mb-6">
<<<<<<< HEAD

=======
              <Rocket className="w-5 h-5 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
              <span className="font-bold">NEW SERVICES LAUNCHED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Revolutionary AI Services Now Available
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Transform your business with our newest AI-powered solutions delivering unprecedented results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {services.map((service) = > (
              <div

key={service.id}

                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="flex items-center gap-2 mb-3">
<<<<<<< HEAD

=======
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
                  <span className="text-sm font-semibold text-yellow-300">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-emerald-100 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, idx) = > (
                    <div key={idx} className="flex items-start gap-2">
<<<<<<< HEAD

=======
                      <Zap className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-1" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
                      <span className="text-sm text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-200">{service.pricing}</span>
                  <Link
                    to={service.link}
                    className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center gap-1"
                  >
                    Learn More
<<<<<<< HEAD

=======
                    <ArrowRight className="w-4 h-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105"
            >
              View All Services
<<<<<<< HEAD

=======
              <ArrowRight className="w-6 h-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
            </Link>
          </div>
        </div>
      </div > );
  }

  if (variant === 'premium') {
    return (
      <div className={`bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white ${className}`}>
        <div className="flex items-center gap-3 mb-6">
<<<<<<< HEAD

=======
          <Rocket className="w-8 h-8 text-yellow-300" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
          <h2 className="text-3xl font-bold">New Services Available</h2>
        </div>
        <p className="text-orange-100 text-lg mb-8">
          Discover our latest AI-powered solutions transforming businesses worldwide
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) = > (
            <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-orange-100 text-sm mb-4 line-clamp-2">{service.description}</p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-yellow-300">{service.benefits[0]}</span>
              </div>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-yellow-300 font-semibold hover:text-yellow-200"
              >
<<<<<<< HEAD
                Learn More</Link>
=======
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
            </div>
          ))}
        </div>
      </div > );
  }

  if (variant === 'grid') {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
<<<<<<< HEAD

=======
            <Rocket className="w-7 h-7 text-indigo-600" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
            <h3 className="text-2xl font-bold text-gray-900">New Services</h3>
          </div>
          <Link to="/services" className="text-indigo-600 font-semibold hover:text-indigo-800">
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) = > (
            <Link
              key={service.id}
              to={service.link}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-indigo-300 transition-all group"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600">
                {service.name}
              </h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
              <div className="text-sm font-semibold text-indigo-600">{service.pricing}</div>
            </Link>
          ))}
        </div>
      </div > );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white ${className}`}>
      <div className="flex items-center gap-3 mb-4">
<<<<<<< HEAD

=======
        <Rocket className="w-6 h-6 text-yellow-300" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
        <h3 className="text-2xl font-bold">New Services Just Launched</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) = > (
          <div key={service.id} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all">
            <div className="text-2xl mb-2">{service.icon}</div>
            <h4 className="font-semibold mb-2">{service.name}</h4>
            <p className="text-sm text-green-100 mb-3 line-clamp-2">{service.description}</p>
            <Link to={service.link} className="text-yellow-300 text-sm font-semibold hover:underline">
              Explore Service →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewServicesPromoBanner;