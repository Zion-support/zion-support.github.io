import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Users,
  Shield,
  Zap,
  Globe,
  Award,
  Clock,
  Target
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  pricing: {
    starting: string;
    popular?: boolean;
  };
  rating: number;
  reviewCount: number;
  category: string;
  tags: string[];
  image: string;
  url: string;
  stats?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

interface ServiceShowcaseProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  showStats?: boolean;
  maxItems?: number;
}

const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({
  title = "Our Services",
  subtitle = "Comprehensive solutions designed to transform your business",
  services,
  showStats = true,
  maxItems = 6
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const displayedServices = services.slice(0, maxItems);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-zion-cyan/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </div>
                {service.pricing.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-zion-cyan group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                    {service.name}
                  </h3>
                </div>

                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-zion-slate-light">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-zion-cyan font-semibold">
                    Starting {service.pricing.starting}
                  </div>
                </div>

                <Link
                  to={service.url}
                  className="w-full bg-zion-slate-dark hover:bg-zion-slate-light text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
            <div className="bg-zion-slate-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-zion-cyan text-4xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h3>
                    <div className="flex items-center gap-4">
                      <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                        {selectedService.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-zion-slate-light">
                          {selectedService.rating} ({selectedService.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-zion-slate-light mb-8 text-lg leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Benefits</h4>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {showStats && selectedService.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {selectedService.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <div className="text-zion-cyan">
                            {stat.icon}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                        <div className="text-sm text-zion-slate-light">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tags.map((tag, index) => (
                      <span key={index} className="bg-zion-purple/20 text-zion-purple-light px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      to={selectedService.url}
                      className="bg-zion-slate-dark hover:bg-zion-slate-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-zion-cyan hover:bg-zion-blue-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                      Get Started
                      <Target className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Zion Tech Group for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-zion-cyan hover:bg-zion-blue-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;