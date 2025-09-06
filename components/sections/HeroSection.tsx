<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

'use client';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
'use client';
'use client';
;
import React from 'react';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {ArrowRight, Play, Star, Users, Award, Zap} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' }
    { icon: Award, value: '50+', label: 'Awards Won' }
    { icon: Star, value: '99%', label: 'Client Satisfaction' }
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const HeroSection: React.FC = () => {;
  const stats = [;
    { icon: Users, value: '500+', label: 'Happy Clients' },;
    { icon: Award, value: '50+', label: 'Awards Won' },;
    { icon: Star, value: '99%', label: 'Client Satisfaction' },;
    { icon: Zap, value: '24/7', label: 'Support Available' },;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ];
=======
  ];



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],

=======
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
<<<<<<< HEAD
        />;

        <motion.div;
          className='absolute top - 40 right - 20 w - 96 h - 96 bg - purple - 500 / 20 rounded - full blur - 3xl';

          animate={{

            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.6, 0 && 0.3, 0 && 0.6],

          }}
          transition={{

<<<<<<< HEAD
=======
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>
=======
=======
<<<<<<< HEAD
        />;
        <motion.div;
          className='absolute top - 40 right - 20 w - 96 h - 96 bg - purple - 500 / 20 rounded - full blur - 3xl';
          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.6, 0 && 0.3, 0 && 0.6],
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
          }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Star, value: '99%', label: 'Client Satisfaction' },
    { icon: Zap, value: '24/7', label: 'Support Available' }
<<<<<<< HEAD
  ];

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

=======
];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 20 w - 96 h - 96 bg - purple - 500 / 20 rounded - full blur - 3xl";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2]
            opacity: [0 && 0.6, 0 && 0.3, 0 && 0.6]}}
          transition={{
<<<<<<< HEAD

        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.6, 0.3, 0.6]}}
          transition={{

            duration: 10
            repeat: Infinity
            ease: "easeInOut"
          }}

        />;

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0 && 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0 && 0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />;
      </div>;

      <div className="relative container mx-auto px-4 text-center z-10">;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
        />;
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0 && 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0 && 0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />;
      </div>;
      <div className="relative container mx-auto px-4 text-center z-10">;
=======
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
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.6, 0.3, 0.6]}}
          transition={{
            duration: 10
            repeat: Infinity
            ease: "easeInOut"
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <div className="relative container mx-auto px-4 text-center z-10">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Main Content */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
          transition={{ duration: 0.8 }}
          className='max-w-6xl mx-auto'        >          className="max-w-6xl mx-auto"
        >
<<<<<<< HEAD

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

=======


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Badge */}
=======
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
          className="max-w-6xl mx-auto"
=======
          className='max-w-6xl mx-auto'        >          className="max-w-6xl mx-auto"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          {/* Badge */}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          className='max - w-6xl mx - auto'        >          className="max - w-6xl mx - auto";
        >;
          {/* Badge */}
          <motion.div;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

            </span>          </motion.div>

          </motion.div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Main Heading */}
          <motion&& motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
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

=======


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Subtitle */}
          <motion&& motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'
          >
            From AI development to cloud architecture, we help companies
            revolutionize their digital presence and achieve sustainable growth

=======



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

            in the modern technology landscape.          </motion.p>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* CTA Buttons */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Link
              href='/contact'

            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >

=======
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Stats */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.6 }}

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
            className=&quot;inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8&quot;
          >
            <Star className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
            <span className=&quot;text-white font-medium&quot;>Leading Technology Solutions Provider</span>
          </motion.div>

          {_/* Main Heading */}
=======
            className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8'
          >
            <Star className='w-5 h-5 text-yellow-400 fill-current' />
            <span className='text-white font-medium'>
              Leading Technology Solutions Provider
            </span>          </motion.div>            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Leading Technology Solutions Provider</span>
            </span>          </motion.div>

          </motion.div>

          {/* Main Heading */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
<<<<<<< HEAD
            className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;
          >
            Transform Your Business with
            <span className=&quot;block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
              Cutting-Edge Technology
            </span>
          </motion.h1>

          {_/* Subtitle */}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
            className=&quot;text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed&quot;
          >
            From AI development to cloud architecture, we help companies revolutionize their digital presence 
            and achieve sustainable growth in the modern technology landscape.
          </motion.p>

          {_/* CTA Buttons */}
=======
            className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'
          >
            From AI development to cloud architecture, we help companies
            revolutionize their digital presence and achieve sustainable growth
            in the modern technology landscape.          </motion.p>            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From AI development to cloud architecture, we help companies revolutionize their digital presence
            and achieve sustainable growth in the modern technology landscape.
            in the modern technology landscape.          </motion.p>

          </motion.p>

          </motion.p>

          {/* CTA Buttons */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
<<<<<<< HEAD
            className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-16&quot;
          >
            <Link
              href=&quot;/contact&quot;
              className=&quot;group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1&quot;
            >
              Get Started Today
              <ArrowRight className=&quot;inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
            </a>
            
            <button className=&quot;group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300&quot;>
              <div className=&quot;w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors&quot;>
                <Play className=&quot;w-6 h-6 ml-1&quot; />
              </div>
              <span className=&quot;text-lg font-medium&quot;>Watch Demo</span>
            </button>
          </motion.div>

          {_/* Stats */}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto&quot;
          >
            {_stats.map(_(stat, _index) => (
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'          >            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'          >

          >
            {stats.map((stat, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div

                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-center group'

=======

                className='text-center group'




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-blue-400 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>

<<<<<<< HEAD
            ))}
          </motion.div>
        </motion.div>
      </div>

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}

          </motion && motion.div>;
        </motion && motion.div>;
      </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
</motion && motion.div>;
        </motion && motion.div>;
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Scroll Indicator */}
      <motion&& motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
<<<<<<< HEAD


=======
=======
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
=======
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

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
=======
          className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
className="w-1 h-3 bg-white/60 rounded-full mt-2"
=======
            className='w-1 h-3 bg-white/60 rounded-full mt-2'            className="w-1 h-3 bg-white/60 rounded-full mt-2"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          />
        </motion.div>
      </motion.div>
    </section>
<<<<<<< HEAD
  )
};
export default HeroSection;        className="absolute bottom-8 left-1/2 transform -translate-x-1/2";
      >;
        <motion&& motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">;
          <motion&& motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-3 bg-white/60 rounded-full mt-2'            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />;
        </motion && motion.div>;
      </motion && motion.div>;
    </section>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  );
};
export default HeroSection;  );
};
export default HeroSection;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            className='w-1 h-3 bg-white/60 rounded-full mt-2'          />
        </motion.div>
      </motion.div>
    </section>
  );

      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
=======
            className='w - 1 h - 3 bg - white / 60 rounded - full mt - 2'          />;
        </motion.div>;
      </motion.div>;
    </section>);
}
;
export default HeroSection;        className="absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2";
      >;
        <motion.div;
          animate={{ coordinate_y: [0, 10, 0] }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          transition={{ duration: 2, repeat: Infinity }}
          className='w - 6 h - 10 border - 2 border - white / 30 rounded - full flex justify - center'          className="w - 6 h - 10 border - 2 border - white / 30 rounded - full flex justify - center";
        >;
          <motion.div;
            animate={{ coordinate_y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
            className='w-1 h-3 bg-white/60 rounded-full mt-2'            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

    </section>

=======
            className='w - 1 h - 3 bg - white / 60 rounded - full mt - 2'            className="w - 1 h - 3 bg - white / 60 rounded - full mt - 2";
          />;
        </motion.div>;
      </motion.div>;
    </section>);
}
;
export default HeroSection);
}
;
export default HeroSection;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    </section>
    </section>
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
