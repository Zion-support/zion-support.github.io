<<<<<<< HEAD
import React from 'react',
import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from 'lucide-react',

interface Testimonial {
  id: string,
  name: string,
  title: string,
  company: string,
  content: string,
  rating: number,
  avatar: string,
  category: string
}
=======
import React from 'react';

interface Testimonial {_id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  category: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const EnhancedTestimonialsSection: React.FC = () => {_const testimonials: Testimonial[] = [
    {
<<<<<<< HEAD
      id: '1',
      name: 'Dr. Sarah Chen',
      title: 'CTO',
      company: 'Quantum Dynamics Inc.',
      content: 'Zion Tech Group transformed our AI infrastructure completely. Their quantum cybersecurity solution prevented multiple sophisticated attacks and their AI business intelligence platform gave us insights we never had before. ROI exceeded 400% within 8 months.',
      rating: 5,
      avatar: 'SC',
      category: 'AI & Security'
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'VP of Engineering',
      company: 'SpaceTech Ventures',
      content: 'Working with Zion Tech Group on our space technology platform was game-changing. Their edge computing orchestration and AI-powered mission planning reduced our satellite deployment time by 60% and increased mission success rate to 98%.',
      rating: 5,
      avatar: 'MR',
      category: 'Space Technology'
    },
    {
      id: '3',
      name: 'Dr. Emily Watson',
      title: 'Research Director',
      company: 'NeuralLink Research',
      content: 'Zion Tech Group\'s neural interface development tools are revolutionary. Their AI consciousness simulation platform accelerated our research by 3x and opened new possibilities we hadn\'t considered. The team\'s expertise is unmatched.',
      rating: 5,
      avatar: 'EW',
      category: 'Emerging Tech'
    },
    {
      id: '4',
      name: 'James Thompson',
      title: 'CEO',
      company: 'EdgeFlow Systems',
      content: 'The edge computing orchestration solution from Zion Tech Group transformed our IoT infrastructure. We saw 50% latency reduction and 40% cost savings while improving reliability. Their support team is incredibly responsive.',
      rating: 5,
      avatar: 'JT',
      category: 'Infrastructure'
    },
    {
      id: '5',
      name: 'Dr. Lisa Park',
      title: 'Chief Innovation Officer',
      company: 'FutureTech Labs',
      content: 'Zion Tech Group\'s quantum AI neural networks are cutting-edge. We\'ve achieved breakthroughs in consciousness simulation that seemed impossible. Their technology is truly ahead of its time.',
      rating: 5,
      avatar: 'LP',
      category: 'Quantum AI'
    },
    {
      id: '6',
      name: 'Robert Kim',
      title: 'Head of Digital Transformation',
      company: 'Global Innovations Corp',
      content: 'Implementing Zion Tech Group\'s AI business intelligence suite revolutionized our decision-making process. We now have real-time insights across all departments, leading to 35% faster market response and 28% cost optimization.',
      rating: 5,
      avatar: 'RK',
      category: 'AI & Analytics'
    }
  ],

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Award },
    { number: '4.9/5', label: 'Average Rating', icon: Star }
  ],
=======
      id: '1', _name: 'Dr. Sarah Chen', _title: 'CTO', _company: 'Quantum Dynamics Inc.', _content: 'Zion Tech Group transformed our AI infrastructure completely. Their quantum cybersecurity solution prevented multiple sophisticated attacks and their AI business intelligence platform gave us insights we never had before. ROI exceeded 400% within 8 months.', _rating: 5, _avatar: 'SC', _category: 'AI & Security'},
    {_id: '2', _name: 'Marcus Rodriguez', _title: 'VP of Engineering', _company: 'SpaceTech Ventures', _content: 'Working with Zion Tech Group on our space technology platform was game-changing. Their edge computing orchestration and AI-powered mission planning reduced our satellite deployment time by 60% and increased mission success rate to 98%.', _rating: 5, _avatar: 'MR', _category: 'Space Technology'},
    {_id: '3', _name: 'Dr. Emily Watson', _title: 'Research Director', _company: 'NeuralLink Research', _content: 'Zion Tech Group\'s neural interface development tools are revolutionary. Their AI consciousness simulation platform accelerated our research by 3x and opened new possibilities we hadn\'t considered. The team\'s expertise is unmatched.', _rating: 5, _avatar: 'EW', _category: 'Emerging Tech'},
    {_id: '4', _name: 'James Thompson', _title: 'CEO', _company: 'EdgeFlow Systems', _content: 'The edge computing orchestration solution from Zion Tech Group transformed our IoT infrastructure. We saw 50% latency reduction and 40% cost savings while improving reliability. Their support team is incredibly responsive.', _rating: 5, _avatar: 'JT', _category: 'Infrastructure'},
    {_id: '5', _name: 'Dr. Lisa Park', _title: 'Chief Innovation Officer', _company: 'FutureTech Labs', _content: 'Zion Tech Group\'s quantum AI neural networks are cutting-edge. We\'ve achieved breakthroughs in consciousness simulation that seemed impossible. Their technology is truly ahead of its time.', _rating: 5, _avatar: 'LP', _category: 'Quantum AI'},
    {_id: '6', _name: 'Robert Kim', _title: 'Head of Digital Transformation', _company: 'Global Innovations Corp', _content: 'Implementing Zion Tech Group\'s AI business intelligence suite revolutionized our decision-making process. We now have real-time insights across all departments, _leading to 35% faster market response and 28% cost optimization.', _rating: 5, _avatar: 'RK', _category: 'AI & Analytics'}
  ];

  const _stats = [
    {_number: '500+', _label: 'Projects Delivered', _icon: CheckCircle},
    {_number: '50+', _label: 'Enterprise Clients', _icon: Users},
    {_number: '99.9%', _label: 'Client Satisfaction', _icon: Award},
    {_number: '4.9/5', _label: 'Average Rating', _icon: Star}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _renderStars = (_rating: number) => {_return Array.from(_{ length: 5}, _(_, _i) => (
      <Star
        key={_i}
        className={_`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ))
  },

  return (
<<<<<<< HEAD
    <section className=&quot;py-24 px-6 relative overflow-hidden&quot;>
      {/* Background */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]&quot; />
      </div>

      <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
            <span className=&quot;bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
=======
    <section className="py-24 px-6 relative overflow-hidden">
      {_/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {_/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              What Our Clients Say
            </span>
          </h2>
          <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto leading-relaxed&quot;>
            Discover why leading companies trust Zion Tech Group to transform their business with cutting-edge technology solutions
          </p>
        </div>

<<<<<<< HEAD
        {/* Stats Section */}
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mb-16&quot;>
          {stats.map((stat, index) => (
            <div key={index} className=&quot;text-center group&quot;>
              <div className=&quot;w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                <stat.icon className=&quot;w-10 h-10 text-blue-400&quot; />
              </div>
              <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
              <p className=&quot;text-blue-300 font-medium&quot;>{stat.label}</p>
=======
        {_/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {_stats.map(_(stat, _index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{_stat.number}</div>
              <p className="text-blue-300 font-medium">{_stat.label}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Testimonials Grid */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {testimonials.map((testimonial) => (
=======
        {_/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {_testimonials.map(_(testimonial) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div
              key={testimonial.id}
              className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
            >
<<<<<<< HEAD
              {/* Quote Icon */}
              <div className=&quot;absolute top-4 right-4 text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-300&quot;>
                <Quote className=&quot;w-8 h-8&quot; />
              </div>

              {/* Content */}
              <div className=&quot;p-8&quot;>
                {/* Rating */}
                <div className=&quot;flex items-center gap-1 mb-4&quot;>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className=&quot;text-white/80 text-sm leading-relaxed mb-6&quot;>
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author Info */}
                <div className=&quot;flex items-center gap-4&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm&quot;>
                    {testimonial.avatar}
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                    <div className=&quot;text-sm text-white/70&quot;>{testimonial.title}</div>
                    <div className=&quot;text-xs text-blue-400&quot;>{testimonial.company}</div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className=&quot;mt-4&quot;>
                  <span className=&quot;inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30&quot;>
                    {testimonial.category}
=======
              {_/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {_/* Content */}
              <div className="p-8">
                {_/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {_renderStars(testimonial.rating)}
                </div>

                {_/* Testimonial Text */}
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  "{_testimonial.content}"
                </p>

                {_/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {_testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{_testimonial.name}</div>
                    <div className="text-sm text-white/70">{_testimonial.title}</div>
                    <div className="text-xs text-blue-400">{_testimonial.company}</div>
                  </div>
                </div>

                {_/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    {_testimonial.category}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </span>
                </div>
              </div>

<<<<<<< HEAD
              {/* Hover Effect */}
              <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl&quot; />
=======
              {_/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <div className=&quot;text-center mt-16&quot;>
          <div className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
=======
        {_/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Ready to Join Our Success Stories?
            </h3>
            <p className=&quot;text-white/70 mb-6 max-w-2xl mx-auto&quot;>
              Experience the same transformative results that our clients have achieved. 
              Let's discuss how Zion Tech Group can accelerate your innovation journey.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com?subject=Client Success Story Discussion&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
              >
                Start Your Success Story
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Trust Indicators */}
        <div className=&quot;mt-16 text-center&quot;>
          <div className=&quot;inline-flex items-center gap-8 text-white/60 text-sm&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
=======
        {_/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <span>Enterprise-grade security</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <TrendingUp className=&quot;w-4 h-4 text-blue-400&quot; />
              <span>Proven ROI</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Users className=&quot;w-4 h-4 text-purple-400&quot; />
              <span>Global support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},

export default EnhancedTestimonialsSection,