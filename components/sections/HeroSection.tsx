

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
'use client';

=======
'use client';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

'use client';
'use client';
;
import React from 'react';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {ArrowRight, Play, Star, Users, Award, Zap} from 'lucide-react';
<<<<<<< HEAD


const HeroSection: React.FC = () => {;
  const stats = [;
    { icon: Users, value: '500+', label: 'Happy Clients' },;
    { icon: Award, value: '50+', label: 'Awards Won' },;
    { icon: Star, value: '99%', label: 'Client Satisfaction' },;
    { icon: Zap, value: '24/7', label: 'Support Available' },;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];
  ];


=======
const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' }
    { icon: Award, value: '50+', label: 'Awards Won' }
    { icon: Star, value: '99%', label: 'Client Satisfaction' }
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900'>;
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>;
        {/* Floating Orbs */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl'
  const stats = [;
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Star, value: '99%', label: 'Client Satisfaction' },
    { icon: Zap, value: '24 / 7', label: 'Support Available' },
  ];
;
  return (
    <section className='relative min - h-screen flex items - center justify - center overflow - hidden bg - gradient - to - br from - black via - gray - 900 to - blue - 900'>;
      {/* Animated Background Elements */}
      <div className='absolute inset - 0'>;
        {/* Floating Orbs */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 72 h - 72 bg - blue - 500 / 20 rounded - full blur - 3xl';
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],
'use client';

'use client';
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {ArrowRight, Play, Star, Users, Award, Zap} from 'lucide-react';
const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' }
    { icon: Award, value: '50+', label: 'Awards Won' }
    { icon: Star, value: '99%', label: 'Client Satisfaction' }
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        {/* Floating Orbs */}
        <motion.div
          className='absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3]
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>
];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;

        <motion.div;
          className='absolute top - 40 right - 20 w - 96 h - 96 bg - purple - 500 / 20 rounded - full blur - 3xl';

          animate={{

            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.6, 0 && 0.3, 0 && 0.6],

          }}
          transition={{

        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>
=======
        />;
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Star, value: '99%', label: 'Client Satisfaction' },
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0 && 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0 && 0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />;
      </div>;
      <div className='relative container mx-auto px-4 text-center z-10'>        {/* Main Content */}  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">;
      {/* Animated Background Elements */}
      <div className="absolute inset-0">;
        {/* Floating Orbs */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />;
        {/* Grid Pattern */}
        <div className='absolute inset - 0 bg-[linear - gradient (rgba (255, 255, 255, 0.02)_1px, transparent_1px), linear - gradient (90deg, rgba (255, 255, 255, 0.02)_1px, transparent_1px)] bg-[size:50px_50px]' />;
      </div>;
      <div className='relative container mx - auto px - 4 text - center z - 10'>        {/* Main Content */}  ];
;
  return (
    <section className="relative min - h-screen flex items - center justify - center overflow - hidden bg - gradient - to - br from - black via - gray - 900 to - blue - 900">;
      {/* Animated Background Elements */}
      <div className="absolute inset - 0">;
        {/* Floating Orbs */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 72 h - 72 bg - blue - 500 / 20 rounded - full blur - 3xl";
          animate={{
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
        />
        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>
      <div className='relative container mx-auto px-4 text-center z-10'>        {/* Main Content */}  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{

            duration: 8
            repeat: Infinity
            ease: "easeInOut"
          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 20 w - 96 h - 96 bg - purple - 500 / 20 rounded - full blur - 3xl";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2]
            opacity: [0 && 0.6, 0 && 0.3, 0 && 0.6]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0 && 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0 && 0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />;
      </div>;
      <div className="relative container mx-auto px-4 text-center z-10">;
        />
        <motion.div
          className='absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2]
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>
      <div className='relative container mx-auto px-4 text-center z-10'>        {/* Main Content */}  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 8
            repeat: Infinity
            ease: "easeInOut"
          }}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.6, 0.3, 0.6]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 10
            repeat: Infinity
            ease: "easeInOut"
          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <div className="relative container mx-auto px-4 text-center z-10">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0 && 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0 && 0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />;
      </div>;

      <div className="relative container mx-auto px-4 text-center z-10">;

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Main Content */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD





          {/* Badge */}
          transition={{ duration: 0.8 }}
          className='max-w-6xl mx-auto'        >          className="max-w-6xl mx-auto"
        >

          {/* Badge */}

            </span>          </motion.div>

          </motion.div>


            transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
            className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8'>;
            <Star className='w-5 h-5 text-yellow-400 fill-current' />;
            <span className='text-white font-medium'>;
              Leading Technology Solutions Provider;
            </span>          </motion && motion.div>            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8";
          >;
            <Star className="w-5 h-5 text-yellow-400 fill-current" />;
            <span className="text-white font-medium">Leading Technology Solutions Provider</span>;
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Leading Technology Solutions Provider</span>
          </motion.div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Badge */}
          <motion&& motion.div
            initial={{ opacity: 0, scale: 0 && 0.8 }}
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut";
          }}
        />;
        {/* Grid Pattern */}
        <div className="absolute inset - 0 bg-[linear - gradient (rgba (255, 255, 255, 0.02)_1px, transparent_1px), linear - gradient (90deg, rgba (255, 255, 255, 0.02)_1px, transparent_1px)] bg-[size:50px_50px]" />;
      </div>;
      <div className="relative container mx - auto px - 4 text - center z - 10">;
        {/* Main Content */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
          className='max - w-6xl mx - auto'        >          className="max - w-6xl mx - auto";
        >;
          {/* Badge */}
          <motion.div;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

=======
          className='max-w-6xl mx-auto'        >          className="max-w-6xl mx-auto"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8'
          >
            <Star className='w-5 h-5 text-yellow-400 fill-current' />
            <span className='text-white font-medium'>
              Leading Technology Solutions Provider
            </span>          </motion.div>            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Leading Technology Solutions Provider</span>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </span>          </motion.div>

          </motion.div>


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Main Heading */}
          <motion&& motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


<<<<<<< HEAD



            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </motion.h1>
            transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
            className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>;
            Transform Your Business with;
            <span className='block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>              Cutting-Edge Technology            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight";
          >;
            Transform Your Business with;
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
            </span>;
          </motion && motion.h1>;
=======
=======
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'
          >
            Transform Your Business with
            <span className='block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>              Cutting-Edge Technology            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            </span>
          </motion.h1>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Subtitle */}
          <motion&& motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            in the modern technology landscape.          </motion.p>


<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From AI development to cloud architecture, we help companies revolutionize their digital presence
            and achieve sustainable growth in the modern technology landscape.
            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
            className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'>;
            From AI development to cloud architecture, we help companies;
            revolutionize their digital presence and achieve sustainable growth;
            in the modern technology landscape.          </motion && motion.p>            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed";
          >;
            From AI development to cloud architecture, we help companies revolutionize their digital presence ;
            and achieve sustainable growth in the modern technology landscape.;
          </motion.p>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'
          >
            From AI development to cloud architecture, we help companies
            revolutionize their digital presence and achieve sustainable growth
            in the modern technology landscape.          </motion.p>            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From AI development to cloud architecture, we help companies revolutionize their digital presence
            and achieve sustainable growth in the modern technology landscape.
            in the modern technology landscape.          </motion.p>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* CTA Buttons */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


          >
=======
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link
              href='/contact'

            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >

<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Demo</span>
            </button>
          </motion.div>

              className='group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1'>;
              Get Started Today;
              <ArrowRight className='inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />;
            </Link>;
            <button className='group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300'>;
              <div className='w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors'>;
                <Play className='w-6 h-6 ml-1' />;
              </div>;
              <span className='text-lg font-medium'>Watch Demo</span>            </button>          >;
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">;
              Get Started Today;
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
            </Link>;
            <button className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300">;
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors">;
                <Play className="w-6 h-6 ml-1" />;
              </div>;
              <span className="text-lg font-medium">Watch Demo</span>;
            </button>;
          </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Stats */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD


<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            transition={{ duration: 0.8, delay: 0.6 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'          >            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'          >

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            {stats.map((stat, index) => (
              <motion.div
            className='inline - flex items - center space - x-2 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - full px - 6 py - 3 mb - 8';
          >;
            <Star className='w - 5 h - 5 text - yellow - 400 fill - current' />;
            <span className='text - white font - medium'>;
              Leading Technology Solutions Provider;
            </span>          </motion.div>            className="inline - flex items - center space - x-2 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - full px - 6 py - 3 mb - 8";
          >;
            <Star className="w - 5 h - 5 text - yellow - 400 fill - current" />;
            <span className="text - white font - medium">Leading Technology Solutions Provider</span>;
          {/* Main Heading */}
          <motion.h1;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text - 5xl md:text - 7xl font - bold text - white mb - 6 leading - tight';
          >;
            Transform Your Business with;
            <span className='block bg - gradient - to - r from - blue - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>              Cutting - Edge Technology            className="text - 5xl md:text - 7xl font - bold text - white mb - 6 leading - tight";
          >;
            Transform Your Business with;
            <span className="block bg - gradient - to - r from - blue - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
            </span>;
          </motion.h1>;
          {/* Subtitle */}
          <motion.p;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text - xl md:text - 2xl text - gray - 300 mb - 12 max - w-4xl mx - auto leading - relaxed';
          >;
            From AI development to cloud architecture, we help companies;
            revolutionize their digital presence and achieve sustainable growth;
            in the modern technology landscape.          </motion.p>            className="text - xl md:text - 2xl text - gray - 300 mb - 12 max - w-4xl mx - auto leading - relaxed";
          >;
            From AI development to cloud architecture, we help companies revolutionize their digital presence;
            and achieve sustainable growth in the modern technology landscape.;
          {/* CTA Buttons */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex - col sm:flex - row gap - 6 justify - center items - center mb - 16';
          >;
            <Link;
              href='/contact';
              className='group bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - 2xl hover:shadow - blue - 500 / 25 transform hover:-translate - y-1';
            >;
              Get Started Today;
              <ArrowRight className='inline - block ml - 2 w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
            </Link>;
            <button className='group flex items - center space - x-3 text - white hover:text - blue - 400 transition - colors duration - 300'>;
              <div className='w - 14 h - 14 bg - white / 10 backdrop - blur - sm rounded - full flex items - center justify - center border border - white / 20 group - hover:border - blue - 400 transition - colors'>;
                <Play className='w - 6 h - 6 ml - 1' />;
              </div>;
              <span className='text - lg font - medium'>Watch Demo</span>            </button>          >;
            <Link;
              href="/contact";
              className="group bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - 2xl hover:shadow - blue - 500 / 25 transform hover:-translate - y-1";
            >;
              Get Started Today;
              <ArrowRight className="inline - block ml - 2 w - 5 h - 5 group - hover:translate - x-1 transition - transform" />;
            </Link>;
            <button className="group flex items - center space - x-3 text - white hover:text - blue - 400 transition - colors duration - 300">;
              <div className="w - 14 h - 14 bg - white / 10 backdrop - blur - sm rounded - full flex items - center justify - center border border - white / 20 group - hover:border - blue - 400 transition - colors">;
                <Play className="w - 6 h - 6 ml - 1" />;
              </div>;
              <span className="text - lg font - medium">Watch Demo</span>;
            </button>;
          </motion.div>;
          {/* Stats */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='grid grid - cols - 2 md:grid - cols - 4 gap - 8 max - w-4xl mx - auto'          >            className="grid grid - cols - 2 md:grid - cols - 4 gap - 8 max - w-4xl mx - auto";
          >;
            {stats.map ((stat, index) => (
              <motion.div;
        >
          {_/* Badge */}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8'
          >
            <Star className='w-5 h-5 text-yellow-400 fill-current' />
            <span className='text-white font-medium'>
              Leading Technology Solutions Provider
<<<<<<< HEAD
            </span>          </motion.div>            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Leading Technology Solutions Provider</span>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </span>          </motion.div>

          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'
          >
            Transform Your Business with
            <span className='block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>              Cutting-Edge Technology            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'
          >
            From AI development to cloud architecture, we help companies
            revolutionize their digital presence and achieve sustainable growth
<<<<<<< HEAD
            in the modern technology landscape.          </motion.p>            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From AI development to cloud architecture, we help companies revolutionize their digital presence
            and achieve sustainable growth in the modern technology landscape.
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            in the modern technology landscape.          </motion.p>

          </motion.p>

<<<<<<< HEAD
          </motion.p>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'

          >
            <Link
              href='/contact'
              className='group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1'
            >
              Get Started Today
              <ArrowRight className='inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
            <button className='group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300'>
              <div className='w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors'>
                <Play className='w-6 h-6 ml-1' />
              </div>
              <span className='text-lg font-medium'>Watch Demo</span>            </button>          >
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Demo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
<<<<<<< HEAD
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'          >            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'          >

          >
            {stats.map((stat, index) => (
              <motion.div

                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}

                className='text-center group'




<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-blue-400 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>





<<<<<<< HEAD
            ))}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
          </motion.div>
        </motion.div>
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </motion && motion.div>;
        </motion && motion.div>;
      </div>;


<<<<<<< HEAD



<<<<<<< HEAD
</motion && motion.div>;
        </motion && motion.div>;
      </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Scroll Indicator */}
      <motion&& motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                className='text-center group'

              >
                <div className='w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-blue-400 transition-colors'>
                  <stat.icon className='w-8 h-8 text-blue-400' />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-400 font-medium'>{stat.label}</div>              </motion.div>              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-blue-400 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>

            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-3 bg-white/60 rounded-full mt-2'          />
        </motion.div>
      </motion.div>
    </section>
  );
}
export default HeroSection;        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
};

export default HeroSection;

export default HeroSection;        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
export default HeroSection;

      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-3 bg-white/60 rounded-full mt-2'            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default HeroSection;  );
};
export default HeroSection;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
                className='text - center group';
              >;
                <div className='w - 16 h - 16 bg - white / 10 backdrop - blur - sm rounded - 2xl flex items - center justify - center mx - auto mb - 4 border border - white / 20 group - hover:border - blue - 400 transition - colors'>;
                  <stat.icon className='w - 8 h - 8 text - blue - 400' />;
                </div>;
                <div className='text - 3xl font - bold text - white mb - 2'>;
                  {stat.value}
                </div>;
                <div className='text - gray - 400 font - medium'>{stat.label}</div>              </motion.div>              >;
                <div className="w - 16 h - 16 bg - white / 10 backdrop - blur - sm rounded - 2xl flex items - center justify - center mx - auto mb - 4 border border - white / 20 group - hover:border - blue - 400 transition - colors">;
                  <stat.icon className="w - 8 h - 8 text - blue - 400" />;
                </div>;
                <div className="text - 3xl font - bold text - white mb - 2">{stat.value}</div>;
                <div className="text - gray - 400 font - medium">{stat.label}</div>;
              </motion.div>))}
          </motion.div>;
        </motion.div>;
      </div>;
      {/* Scroll Indicator */}
      <motion.div;
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2'      >;
        <motion.div;
          animate={{ coordinate_y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w - 6 h - 10 border - 2 border - white / 30 rounded - full flex justify - center'        >;
          <motion.div;
            animate={{ coordinate_y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='w - 1 h - 3 bg - white / 60 rounded - full mt - 2'          />;
        </motion.div>;
      </motion.div>;
    </section>);
=======
            className='w-1 h-3 bg-white/60 rounded-full mt-2'          />
        </motion.div>
      </motion.div>
    </section>
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export default HeroSection;        className="absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2";
      >;
        <motion.div;
          animate={{ coordinate_y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w - 6 h - 10 border - 2 border - white / 30 rounded - full flex justify - center'          className="w - 6 h - 10 border - 2 border - white / 30 rounded - full flex justify - center";
        >;
          <motion.div;
            animate={{ coordinate_y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
            className='w - 1 h - 3 bg - white / 60 rounded - full mt - 2'            className="w - 1 h - 3 bg - white / 60 rounded - full mt - 2";
          />;
        </motion.div>;
      </motion.div>;
    </section>);
=======
            className='w-1 h-3 bg-white/60 rounded-full mt-2'            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export default HeroSection);
}
;
export default HeroSection;
;
<<<<<<< HEAD
<<<<<<< HEAD

    </section>
    </section>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
