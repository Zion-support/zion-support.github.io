import React from 'react';
import { Shield, Users, Award, Star, TrendingUp, Globe } from 'lucide-react';

export const CommunityTrust = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users', color: 'text-blue-400' },
    { icon: Star, value: '4.8/5', label: 'User Rating', color: 'text-yellow-400' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime', color: 'text-green-400' },
    { icon: Shield, value: 'SOC 2', label: 'Certified', color: 'text-purple-400' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'IT Director',
      company: 'TechCorp Inc.',
      content: 'Zion mobile app has transformed how our team manages IT assets in the field. The offline capability is a game-changer.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Systems Administrator',
      company: 'Global Solutions',
      content: 'Intuitive interface and powerful features. Our asset tracking accuracy improved by 95% since switching to Zion.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'IT Manager',
      company: 'InnovateTech',
      content: 'The real-time synchronization and mobile-first approach make Zion the perfect solution for our distributed team.',
      rating: 5,
      avatar: '👩‍🔧'
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: '🔒', description: 'Security & compliance certified' },
    { name: 'ISO 27001', icon: '🛡️', description: 'Information security management' },
    { name: 'GDPR Compliant', icon: '🇪🇺', description: 'Data protection regulation' },
    { name: 'HIPAA Ready', icon: '🏥', description: 'Healthcare data standards' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and multi-factor authentication'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: '99.9% uptime with data centers worldwide'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solution trusted by Fortune 500 companies'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by IT Professionals Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of IT teams who rely on Zion mobile for secure, reliable, and efficient asset management.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Certifications & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why IT Teams Choose Zion
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Zion Community
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the same level of trust and reliability that has made Zion the preferred choice for IT asset management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-lg font-semibold text-white">150+ Countries</div>
              <div className="text-sm text-gray-400">Global presence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏢</div>
              <div className="text-lg font-semibold text-white">10,000+ Companies</div>
              <div className="text-sm text-gray-400">Trust us daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-lg font-semibold text-white">1M+ Downloads</div>
              <div className="text-sm text-gray-400">Mobile app users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-lg font-semibold text-white">4.8/5 Rating</div>
              <div className="text-sm text-gray-400">User satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Zion Mobile?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of IT professionals who trust Zion for their asset management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#download"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Download Now
              </a>
              <a
                href="#demo"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};