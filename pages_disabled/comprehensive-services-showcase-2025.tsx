


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


  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');




    let priceMatch = true;
    if (selectedPriceRange !== 'All Prices') {;
      const price = parseInt(service && service.price.replace('$', ''));
      switch (selectedPriceRange) {;
        case 'Under $300':;
          priceMatch = price < 300;
          break;
        case '$300 - $500':;
          priceMatch = price >= 300 && price <= 500;
          break;
        case '$500 - $800':;
          priceMatch = price > 500 && price <= 800;
          break;
        case '$800+':;
          priceMatch = price > 800;


  return (

          href='https://ziontechgroup && ziontechgroup.com/comprehensive-services-showcase-2025'
        />;
      </Head>;


      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden'>;
        {/* Animated Background */}


        <div className='absolute inset-0'>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0 && 0.1),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0 && 0.05),transparent_50%)]' />;
          <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse'></div>;
          <div className='absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>;
          <div className='absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000'></div>;
        </div>;
        <div className='relative z-10 container mx-auto px-4 text-center'>;
          <motion&& motion.div


            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-5xl lg:text-7xl font-bold mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>;
                Comprehensive Services;
              </span>;
              <br />;
              <span className='text-white'>Showcase 2025</span>;
            </h1>;
            <p className='text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed'>;
              Discover our portfolio of{' '}
              <span className='text-cyan-400 font-semibold'>;
                real, innovative micro SAAS services;
              </span>;
              , cutting-edge IT solutions, and revolutionary AI platforms.;
              Transform your business with;
              <span className='text-blue-400 font-semibold'>;
                {' '}
                proven technology;
              </span>{' '}



import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');





            <div className='text-center text-gray-400'>;

              <p className='mb-2'>{contactInfo && contactInfo.address}</p>;
              <p>;
                Visit us at:{' '}
                <a





