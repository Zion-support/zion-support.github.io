<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react';


=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Card from '../ui/Card';
import { Zap } from 'lucide-react';


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import React from 'react';
import Card from '../ui / Card';
import { Zap } from 'lucide-react';
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  icon: React.ReactNode;
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
import React from 'react';
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  title: string;
  description: string;
  color: string;
  gradient: string;

  delay?: number;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  columns?: 2 | 3 | 4;




const Features: React.FC<FeaturesProps> = ({;
  title,;
  subtitle,;
  features,;
  columns = 3,;
}) => {;
  const gridCols = {;
    2: 'md:grid-cols-2',;
    3: 'md:grid-cols-2 lg:grid-cols-3',;
    4: 'md:grid-cols-2 lg:grid-cols-4',;
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className='py-24 bg-black relative overflow-hidden'>;
      <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
        {/* Section Header */}
        <div className='text-center mb-20 animate-fade-in'>;
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>;
            <Zap className='w-4 h-4 mr-2' />;
            Platform Features;
          </div>;
          <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
            {title}
          </h2>;
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>            {subtitle}          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface Feature {
  icon: React.ReactNode,
  title: string,
  description: string,
  color: string,
  gradient: string,
  delay?: number
}

interface FeaturesProps {
  title: string,
  subtitle: string,
  features: Feature[],
  columns?: 2 | 3 | 4
}
const Features: React.FC<FeaturesProps> = ({
  title;
  subtitle;
  features;
  columns = 3}) => {
  const gridCols = {
    2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'};
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
{/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Platform Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
{title}
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            {subtitle}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </p>;
        </div>;





<<<<<<< HEAD
            {subtitle}
          </p>;
        </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>;
          {features && features.map((feature, index) => (;
            <Card
              key={index}
<<<<<<< HEAD
              className="text-center group bg-gray-900/50 border border-gray-800 hover: border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
;
import React from 'react',
import React from 'react';
import Card from '../ui/Card';
import { Zap } from 'lucide-react';


  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;

  delay?: number;

interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  columns?: 2 | 3 | 4;

  columns?: 2 | 3 | 4;
const Features: React.FC<FeaturesProps> = ({
  title
  subtitle
  features
  columns = 3
}) => {
  const gridCols = {
    2: 'md:grid-cols-2'
    3: 'md:grid-cols-2 lg:grid-cols-3'
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }
  return (
    <section className='py-24 bg-black relative overflow-hidden'>
      <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20 animate-fade-in'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
            <Zap className='w-4 h-4 mr-2' />
            Platform Features
          </div>
          <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
            {title}
          </h2>
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>            {subtitle}          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {subtitle}
          </p>
        </div>

<<<<<<< HEAD
        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
=======
          </p>;
        </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>;
          {features && features.map((feature, index) => (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Card
              key={index}
              className='text-center group bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className='relative'>
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}
                >
                  {feature.icon}
                </div>
                <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm' />
              </div>
              <h3 className='text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300'>
                {feature.title}
              </h3>
              <p className='text-gray-400 leading-relaxed'>                {feature.description}            >
              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                  {feature.icon}
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;  )
}
export default Features;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
