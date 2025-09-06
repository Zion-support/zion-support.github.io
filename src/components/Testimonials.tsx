import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/Card';
import ScrollAnimation from './ScrollAnimation';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
<<<<<<< HEAD
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and their team\'s expertise is unmatched.',
      rating: 5,
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The cybersecurity solutions provided by Zion Tech have been exceptional. We\'ve had zero security incidents since implementation, and their 24/7 support is outstanding.',
      rating: 5,
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'CloudScale Systems',
      role: 'VP of Engineering',
      content: 'Their cloud migration service was flawless. We reduced our infrastructure costs by 40% while improving performance. Highly recommend their services.',
      rating: 5,
      avatar: 'ER',
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'InnovateLabs',
      role: 'Founder',
      content: 'The micro SaaS platform they built for us has been a game-changer. It\'s scalable, reliable, and has generated significant recurring revenue for our business.',
      rating: 5,
      avatar: 'DT',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      company: 'AnalyticsPro',
      role: 'Data Director',
      content: 'Their data analytics solutions provided insights we never knew existed. The custom dashboards and reporting tools have revolutionized our decision-making process.',
      rating: 5,
      avatar: 'LW',
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'SecureNet Corp',
      role: 'IT Director',
      content: 'Outstanding IT services and support. Their team is professional, knowledgeable, and always available when we need them. They\'ve become an extension of our team.',
      rating: 5,
      avatar: 'JW',
    },
=======
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Zion Tech Group transformed our business with their AI solutions. We\'ve seen a 300% increase in efficiency and our team productivity has skyrocketed.',
      rating: 5,
      avatar: '/avatars/sarah-johnson.jpg'
    },
    {
      name: 'Mike Chen',
      role: 'CTO, InnovateLab',
      content: 'Their cloud migration service was flawless. We were up and running in record time with zero downtime. The team\'s expertise is unmatched.',
      rating: 5,
      avatar: '/avatars/mike-chen.jpg'
    },
    {
      name: 'Emily Davis',
      role: 'VP Engineering, DataFlow',
      content: 'The data analytics platform they built for us has revolutionized how we make business decisions. ROI was achieved within 3 months.',
      rating: 5,
      avatar: '/avatars/emily-davis.jpg'
    },
    {
      name: 'David Rodriguez',
      role: 'Founder, StartupXYZ',
      content: 'Working with Zion Tech Group was a game-changer. Their micro SaaS solutions helped us scale from 0 to 100k users in just 6 months.',
      rating: 5,
      avatar: '/avatars/david-rodriguez.jpg'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Security, SecureCorp',
      content: 'Their cybersecurity implementation was comprehensive and thorough. We now have enterprise-grade security that we can trust completely.',
      rating: 5,
      avatar: '/avatars/lisa-wang.jpg'
    },
    {
      name: 'James Thompson',
      role: 'Operations Director, GlobalTech',
      content: 'The mobile development team delivered beyond our expectations. Our app has 4.9 stars and over 1M downloads. Incredible work!',
      rating: 5,
      avatar: '/avatars/james-thompson.jpg'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </p>
        </motion.div>
=======
        <ScrollAnimation animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients who have transformed their businesses with our solutions.
            </p>
          </div>
        </ScrollAnimation>
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={index}
              animation="scale"
              delay={index * 0.1}
              className="group"
            >
              <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50">
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-cyan-400 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats */}
<<<<<<< HEAD
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
=======
        <ScrollAnimation animation="fadeIn" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
