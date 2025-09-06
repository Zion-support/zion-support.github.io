=======

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
'use client';
;
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  Brain;
  Cloud
  RefreshCw
  Wifi
  Shield
  BarChart3;
  ArrowRight;
  Zap

    visible: {
      opacity: 1
      transition: {
  const cardVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: { opacity: 1, y: 0 },;
  };
  return (
    <section className='py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>;
      {/* Background Elements */}
  return (
    <section className='py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>;
      {/* Background Elements */}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

      <div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
      </div>;
    }
  };
  const cardVariants = {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">;
      {/* Background Elements */}

      <div className="absolute inset-0">;
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]" />;
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0 && 0.1),transparent_50%)]" />;
      </div>;
      <div className="relative container mx-auto px-4">;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {/* Section Header */}
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },

  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'        >          className="text-center mb-16"
          className='text-center mb-16'        >

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        >
          <motion.div
        stagger_children: 0.1,
      },
    },  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },        stagger_children: 0.1;
=======
    hidden: { opacity: 0, y: 20 }
    visible: { opacity: 1, y: 0 },        staggerChildren: 0.1
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
    }
  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },
  }

  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden">;
      {/* Background Elements */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}

        >
          <motion.div

            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <Zap className='w-5 h-5 text-blue-400' />
            <span className='text-blue-400 font-medium'>Our Services</span>
          </motion.div>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Comprehensive Technology
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Solutions
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            We deliver cutting-edge technology solutions that drive innovation
            We deliver cutting-edge technology solutions that drive innovation,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            efficiency, and growth for businesses across all industries.          </p>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth
            for businesses across all industries.

          </p>

        </motion.div>

        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}
            className='inline - flex items - center space - x-2 bg - blue - 600 / 20 border border - blue - 500 / 30 rounded - full px - 6 py - 3 mb - 6';
            <Zap className='w - 5 h - 5 text - blue - 400' />;
            <span className='text - blue - 400 font - medium'>Our Services</span>;
          </motion.div>;
          <h2 className='text - 4xl md:text - 6xl font - bold text - white mb - 6'>;
            Comprehensive Technology;
            <span className='block bg - gradient - to - r from - blue - 400 to - purple - 400 bg - clip - text text - transparent'>;
              Solutions;
            </span>;
          </h2>;
          <p className='text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed'>;
            We deliver cutting - edge technology solutions that drive innovation,
            efficiency, and growth for businesses across all industries.          </p>;
          <p className="text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed">;
            We deliver cutting - edge technology solutions that drive innovation, efficiency, and growth;
            for businesses across all industries.;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          variants={container_variants}
          initial='hidden';
          whileInView='visible';
          viewport={{ once: true }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'        >          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16";
          {services.map ((service, index) => (
            <motion.div;
              key={service.title}
              variants={card_variants}
              while_hover={{ coordinate_y: -10 }}
              className='group relative';
            >;
              <div className='relative h - full bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8 hover:border - gray - 700 transition - all duration - 300 overflow - hidden'>;
                {/* Background Gradient */}
                <div;
                  className={`absolute inset - 0 bg - gradient - to - br ${service.color} opacity - 0 group - hover:opacity - 5 transition - opacity duration - 300`}
                />;
                {/* Icon */}
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <service.icon className='w - 8 h - 8 text - white' />;
                </div>;
                {/* Content */}
                <h3 className='text - 2xl font - bold text - white mb - 4 group - hover:text - blue - 400 transition - colors duration - 300'>;
                  {service.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >

              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                </h3>;
                <p className='text - gray - 300 mb - 6 leading - relaxed'>                  {service.description}
                </p>;
                {/* Features */}            >;
              <div className="relative h - full bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8 hover:border - gray - 700 transition - all duration - 300 overflow - hidden">;
                {/* Background Gradient */}
                <div className={`absolute inset - 0 bg - gradient - to - br ${service.color} opacity - 0 group - hover:opacity - 5 transition - opacity duration - 300`} />;
                {/* Icon */}
                <div className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}>;
                  <service.icon className="w - 8 h - 8 text - white" />;
                </div>;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                {/* Content */}
                <h3 className="text - 2xl font - bold text - white mb - 4 group - hover:text - blue - 400 transition - colors duration - 300">;
                  {service.title}

                  className={`absolute inset-0 bg-gradient-to-br ${service && service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />;
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service && service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <service && service.icon className='w-8 h-8 text-white' />;
                </div>;
                {/* Content */}
                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300'>;
                  {service && service.title}
                </h3>;
                <p className='text-gray-300 mb-6 leading-relaxed'>                  {service && service.description}
                </p>;
                {/* Features */}            >;
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden">;
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service && service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />;
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service && service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <service && service.icon className="w-8 h-8 text-white" />;
                </div>;
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">;
                  {service && service.title}
                </h3>;
                <p className="text-gray-300 mb-6 leading-relaxed">;
                  {service && service.description}
                </p>;


                {/* Features */}

                  ))}

                </h3>;
                <p className="text - gray - 300 mb - 6 leading - relaxed">;
                  {service.description}
                </p>;
                {/* Features */}
                <ul className='space - y-2 mb - 8'>;
                  {service.features.map (feature => (
                    <li;
                      key={feature}
                      className='flex items - center space - x-3 text - gray - 400';
                    >;
                      <div className='w - 2 h - 2 bg - blue - 400 rounded - full' />;
                      <span className='text - sm'>{feature}</span>                    </li>                <ul className="space - y-2 mb - 8">;
                  {service.features.map ((feature) => (
                    <li key={feature} className="flex items - center space - x-3 text - gray - 400">;
                      <div className="w - 2 h - 2 bg - blue - 400 rounded - full" />;
                      <span className="text - sm">{feature}</span>))}
                </ul>;

                {/* CTA */}
                <Link;
                  href={service.href}

                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                >

                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                </ul>;
                {/* CTA */}
                <Link
                  href={service && service.href}
                  className='inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1'>;
                  <span className='font-medium'>Learn More</span>;
                  <ArrowRight className='w-4 h-4' />;
                </Link>;
                {/* Hover Effect */}

                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Bottom CTA */}
        <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
          viewport={{ once: true }}
          className='text-center'

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        >
          <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6'>
              Let&apos;s discuss how our technology solutions can drive your
              success and accelerate your growth.
            </p>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Link
              href='/contact'
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              <span>Get Started Today</span>
              <ArrowRight className='w-5 h-5' />            </Link>        >

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos,s discuss how our technology solutions can drive your success and accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

export default ServicesSection;  )
}
export default ServicesSection;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
};
export default ServicesSection;  );
};
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default ServicesSection;

export default ServicesSection;
export default ServicesSection;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
