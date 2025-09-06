
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
} from 'lucide-react';

interface Service {;
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  period: string;
  setup_time: string;
  customers: string;
  features: string[];
  benefits: string[];
  roi: string;
  market_size: string;
  growth_rate: string;
  popular?: boolean;

  return (
    <section id='services' className='py-24 px-6 relative overflow-hidden'>;
      {/* Background */}
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">;
      {/* Background */}
        {/* Filters */}
                  {category === 'all' ? 'All Categories' : category}
                </option>;
              ))}
            </select>;
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />;
          </div>;

          {/* Search */}
          <div className='relative'>;
            <input
              type='text'
              placeholder='Search services...'
              value={searchTerm}

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          </div>;

          {/* Search */}
          <div className="relative">;
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
          {filteredServices && filteredServices.map((service, index) => (;
            <div
              key={service && service.id}
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>;
              {/* Popular Badge */}
              {service && service.popular && (;
                <div className='absolute top-4 right-4 z-20'>;
                  <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>;
                    <Star className='w-3 h-3' />                    Popular          {filteredServices && filteredServices.map((service, index) => (;
            <div
              key={service && service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">;
              {/* Popular Badge */}
              {service && service.popular && (;
                <div className="absolute top-4 right-4 z-20">;
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">;
                    <Star className="w-3 h-3" />;
                    Popular;
                  </div>;
                </div>;
              )}
              {/* Service Content */}
                      })}
                    </div>;
                    <div className='text - xs text - white / 40'>;
                      {service.category}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service.category)({ className: 'w-3 h-3' })}</div>
                    <div className="text-xs text-white/40">{service.category}</div>
                  </div>
                </div>
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service && service.color} p-4 flex items-center justify-center text-2xl`}>;
                    <service && service.icon className='w-8 h-8 text-white' />;
                  </div>;
                  <div className='text-right'>;
                    <div className='text-xs text-white/60 mb-1'>;
                      {getCategoryIcon(service && service.category)({;
                        className: 'w-3 h-3',;
                      })}
                    </div>;
                    <div className='text-xs text-white/40'>;
                      {service && service.category}
                    </div>                  </div>;
                </div>;
                {/* Service Info */}                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">;
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service && service.color} p-4 flex items-center justify-center text-2xl`}>;
                    <service && service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div className="text-right">;
                    <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service && service.category)({ className: 'w-3 h-3' })}</div>;
                    <div className="text-xs text-white/40">{service && service.category}</div>;
                  </div>;
                </div>;
                {/* Service Info */}
                      <Users className="w-3 h-3" />
                      {service.customers} customers
                    </span>
                  </div>
                </div>
                  <div className='flex items-baseline gap-2 mb-2'>;
                    <span className='text-3xl font-bold text-white'>;
                      {service && service.price}
                    </span>;
                    <span className='text-white/60'>{service && service.period}</span>;
                  </div>;
                  <div className='flex items-center gap-4 text-xs text-white/50'>;
                    <span className='flex items-center gap-1'>;
                      <Clock className='w-3 h-3' />;
                      {service && service.setupTime}
                    </span>;
                    <span className='flex items-center gap-1'>;
                      <Users className='w-3 h-3' />                      {service && service.customers} customers                    <span className="flex items-center gap-1">;
                      <Users className="w-3 h-3" />;
                      {service && service.customers} customers;
                    </span>;
                  </div>;
                </div>;
                {/* Key Features */}
                    ))}
                {/* Benefits */}
                <div className='mb-6'>;
                  <h4 className='text-sm font-semibold text-white mb-3'>;
                    Key Benefits:;
                  </h4>;
                  <div className='space-y-2'>;
                    {service && service.benefits.slice(0, 2).map((benefit, idx) => (;
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'>;
                        <TrendingUp className='w-3 h-3 text-blue-400' />                        {benefit}                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>;
                  <div className="space-y-2">;
                    {service && service.benefits.slice(0, 2).map((benefit, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">;
                        <TrendingUp className="w-3 h-3 text-blue-400" />;
                      </div>;
                    ))}
                  </div>
                </div>
                  </div>;
                </div>;

                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-white/5 rounded-lg'>;
                  <div className='text-xs text-white/60 mb-2'>;
                    ROI & Market Position;
                  </div>;
                  <div className='text-xs text-white/80 leading-relaxed'>;
                    {service && service.roi}
                  </div>;
                  <div className='mt-2 text-xs text-white/60'>                    Market: {service && service.marketSize} • Growth: {service && service.growthRate}                <div className="mb-6 p-4 bg-white/5 rounded-lg">;
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>;
                  <div className="text-xs text-white/80 leading-relaxed">{service && service.roi}</div>;
                  <div className="mt-2 text-xs text-white/60">;
                  </div>;
                </div>;
                {/* Action Buttons */}
                  >;
                    Demo;
                  </button>;
                </div>;
              </div>;
          ))}
        {/* CTA Section */}
        <div className='text-center mt-16'>;
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>;
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>;
              Let's discuss how our cutting-edge technology solutions can;
              accelerate your digital transformation journey.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <a
                href='mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Consultation Request'
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>;
                Schedule Consultation;
              </a>;
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>              Ready to Transform Your Business?;
            </h3>;
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">;
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a
                href="mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Consultation Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">;
                Schedule Consultation;
              </a>;
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
            </div>))}
        </div>;
        {/* CTA Section */}
        <div className='text - center mt - 16'>;
          <div className='bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 8 border border - blue - 500 / 20'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - white / 70 mb - 6 max - w-2xl mx - auto'>;
              Let's discuss how our cutting - edge technology solutions can;
              accelerate your digital transformation journey.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='mailto:kleber@ziontechgroup.com?subject = Consultation Request';
                className='px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl'              >;
                Schedule Consultation;
              </a>;
              <a;
                href='tel:+13024640950';
                className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'              >              Ready to Transform Your Business?;
            </h3>;
            <p className="text - white / 70 mb - 6 max - w-2xl mx - auto">;
              Let's discuss how our cutting - edge technology solutions can accelerate your digital transformation journey.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com?subject = Consultation Request";
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
              >;
                Schedule Consultation;
              </a>;
              <a;
                href='tel:+13024640950';
                className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10";
              >;
                Call Now;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
};

export default EnhancedServicesShowcase;  );
};

export default EnhancedServicesShowcase;
    </section>);
}
;
export default EnhancedServicesShowcase);
}
;
export default EnhancedServicesShowcase;
;
