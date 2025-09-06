=======

<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  Brain
  Shield
  Rocket
  Cpu
  Database
  Atom
  Users
  CheckCircle
  TrendingUp
  Clock
  Star
  Filter
  ChevronDown;
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

  Filter,;
  ChevronDown,;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
  Filter,;
  ChevronDown,;
} from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

} from 'lucide-react';
;
interface Service {
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
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;  });
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI & Analytics': Brain
      Security: Shield
      Infrastructure: Cpu
      'Space Tech': Rocket
      'Emerging Tech': Brain
      'Quantum AI': Atom
    }
    return iconMap[category] |Brain;
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <section id='services' className='py-24 px-6 relative overflow-hidden'>;
      {/* Background */}
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">;
      {/* Background */}
        {/* Filters */}
<<<<<<< HEAD

=======
          {/* Category Filter */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">
<<<<<<< HEAD

                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

          {/* Search */}
          <div className="relative">;
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
<<<<<<< HEAD
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          </div>
        </div>
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute top-4 right-4 z-20'>
                  <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                    <Star className='w-3 h-3' />                    Popular          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          </div>
        </div>
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute top-4 right-4 z-20'>
                  <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                    <Star className='w-3 h-3' />                    Popular          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {/* Service Content */}
              <div className='p-8'>
        </div>

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
<<<<<<< HEAD

              <div className='p-8'>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {/* Icon and Category */}
                <div className='flex items-center justify-between mb-4'>;
                  <div

      color: 'from - blue - 500 to - cyan - 500',
    },
  ];
;
  const categories = [;
    'all',
    ...Array.from (new Set (services.map (string => s.category))),
  const filtered_services = services.filter (service => {
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tagline.toLowerCase ().includes (search_term.toLowerCase ());
    return matches_category && matches_search;  });
;
  const getCategoryIcon = (category: string) =>: any {
    const icon_map: { [key: string]: React.ComponentType < any> } = {    const matches_category = selected_category === 'all' || service.category === selected_category;
    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tagline.toLowerCase ().includes (search_term.toLowerCase ());
    return matches_category && matches_search;
  const getCategoryIcon = (category: string) =>: any {
    const icon_map: { [key: string]: React.ComponentType < any> } = {
      'AI & Analytics': Brain,
      Security: Shield,
      Infrastructure: Cpu,
      'Space Tech': Rocket,
      'Emerging Tech': Brain,
      'Quantum AI': Atom,
    }
    return icon_map[category] || Brain;
  }
;
  return (
    <section id='services' className='py - 24 px - 6 relative overflow - hidden'>;
      {/* Background */}
      <div className='absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (168, 85, 247, 0.1), transparent_50%)]' />;
      </div>;
      <div className='max - w-7xl mx - auto relative z - 10'>;
        {/* Header */}
        <div className='text - center mb - 16'>;
          <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
            <span className='bg - gradient - to - r from - blue - 400 to - cyan - 400 bg - clip - text text - transparent'>;
              Our Services;
            </span>;
          </h2>;
          <p className='text - xl text - white / 70 max - w-3xl mx - auto leading - relaxed'>;
            Cutting - edge technology solutions designed to transform your;
            business and accelerate innovation          </p>;
        </div>;
        {/* Filters */}
        <div className='flex flex - col md:flex - row gap - 4 mb - 12 justify - center items - center'>    }
    return icon_map[category] || Brain;
  }
;
  return (
    <section id="services" className="py - 24 px - 6 relative overflow - hidden">;
      {/* Background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950">;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]" />;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (168, 85, 247, 0.1), transparent_50%)]" />;
      </div>;
      <div className="max - w-7xl mx - auto relative z - 10">;
        {/* Header */}
        <div className="text - center mb - 16">;
          <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
            <span className="bg - gradient - to - r from - blue - 400 to - cyan - 400 bg - clip - text text - transparent">;
              Our Services;
            </span>;
          </h2>;
          <p className="text - xl text - white / 70 max - w-3xl mx - auto leading - relaxed">;
            Cutting - edge technology solutions designed to transform your business and accelerate innovation;
          </p>;
        </div>;
        {/* Filters */}
        <div className='flex flex - col md:flex - row gap - 4 mb - 12 justify - center items - center'>;
          {/* Category Filter */}
          <div className='relative'>;
            <select;
              value={selected_category}
              on_change={e => setSelectedCategory (e.target.value)}
              className='px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white focus:outline - none focus:border - blue - 400 transition - colors duration - 300 appearance - none pr - 12';
            >;
              {categories.map (category => (
                <option;
                  key={category}
                  value={category}
                  className='bg - slate - 800 text - white';
                >                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>;
            <ChevronDown className='absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50 pointer - events - none' />          {/* Category Filter */}
          <div className="relative">;
            <select;
              value={selected_category}
              on_change={(e) => setSelectedCategory (e.target.value)}
              className="px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white focus:outline - none focus:border - blue - 400 transition - colors duration - 300 appearance - none pr - 12";
            >;
              {categories.map ((category) => (
                <option key={category} value={category} className="bg - slate - 800 text - white">;
                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>;
            <ChevronDown className='absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50 pointer - events - none' />;
          </div>;
          {/* Search */}
          <div className='relative'>;
            <input;
              type='text';
              placeholder='Search services...';
              value={search_term}
              on_change={e => setSearchTerm (e.target.value)}
              className='px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white placeholder - white / 50 focus:outline - none focus:border - blue - 400 transition - colors duration - 300 w - 64';
            />;
            <Filter className='absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50' />          </div>;
        </div>;
        {/* Services Grid */}
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>          </div>;
          {/* Search */}
          <div className="relative">;
            <input;
              type="text";
              placeholder="Search services...";
              value={search_term}
              on_change={(e) => setSearchTerm (e.target.value)}
              className="px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white placeholder - white / 50 focus:outline - none focus:border - blue - 400 transition - colors duration - 300 w - 64";
            />;
            <Filter className="absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50" />;
          </div>;
        </div>;
        {/* Services Grid */}
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
          {filtered_services.map ((service, index) => (
            <div;
              key={service.id}
              className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl';
            >;
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute top - 4 right - 4 z - 20'>;
                  <div className='bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1'>;
                    <Star className='w - 3 h - 3' />                    Popular          {filtered_services.map ((service, index) => (
            <div;
              key={service.id}
              className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
            >;
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top - 4 right - 4 z - 20">;
                  <div className="bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1">;
                    <Star className="w - 3 h - 3" />;
                    Popular;
                  </div>;
                </div>)}
              {/* Service Content */}
              <div className='p - 8'>;
              {/* Service Content */}
              <div className='p-8'>
<<<<<<< HEAD
=======
        </div>

        {/* Services Grid */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

                    Popular
                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className='p-8'>

                {/* Icon and Category */}
                <div className='flex items - center justify - between mb - 4'>;
                  <div;
                    className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br ${service.color} p - 4 flex items - center justify - center text - 2xl`}
                  >;
                    <service.icon className='w - 8 h - 8 text - white' />;
                  </div>;
                  <div className='text - right'>;
                    <div className='text - xs text - white / 60 mb - 1'>;
                      {getCategoryIcon (service.category)({
                        class_name: 'w - 3 h - 3',

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
                      <Users className="w-3 h-3" />
                      {service.customers} customers
                    </span>
                  </div>
                </div>
<<<<<<< HEAD

                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-green-400" />

                {/* Benefits */}
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Benefits:
                  </h4>
                  <div className='space-y-2'>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <TrendingUp className='w-3 h-3 text-blue-400' />                        {benefit}                <div className="mb-6">

                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <TrendingUp className="w-3 h-3 text-blue-400" />

                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-white/5 rounded-lg'>
                  <div className='text-xs text-white/60 mb-2'>
                    ROI & Market Position
                  </div>
                  <div className='text-xs text-white/80 leading-relaxed'>
                    {service.roi}
                  </div>
                  <div className='mt-2 text-xs text-white/60'>                    Market: {service.marketSize} • Growth: {service.growthRate}                <div className="mb-6 p-4 bg-white/5 rounded-lg">

                    ))}
                  </div>
                </div>

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {/* Benefits */}
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Benefits:
                  </h4>
                  <div className='space-y-2'>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <TrendingUp className='w-3 h-3 text-blue-400' />                        {benefit}                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                      </div>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                  </div>;
                </div>;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {/* Benefits */}


                    ))}
                  </div>
                </div>

<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {/* ROI and Market Info */}

                <div className="mb-6 p-4 bg-white/5 rounded-lg">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                  <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                  <div className="mt-2 text-xs text-white/60">
                    Market: {service.marketSize} • Growth: {service.growthRate}

                {/* Benefits */}


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
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          ))}
        </div>

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </button>
                  <button
                    className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>;


        {/* CTA Section */}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
<<<<<<< HEAD

              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Consultation Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"

              >
                Schedule Consultation
              </a>
              <a

                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

export default EnhancedServicesShowcase;  )
}
export default EnhancedServicesShowcase;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              Ready to Transform Your Business?
            </h3>
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>
              Let's discuss how our cutting-edge technology solutions can
              accelerate your digital transformation journey.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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
  );
export default EnhancedServicesShowcase;  )
}
export default EnhancedServicesShowcase;

<<<<<<< HEAD
export default EnhancedServicesShowcase;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
}
export default EnhancedServicesShowcase;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
