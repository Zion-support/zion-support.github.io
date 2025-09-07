<<<<<<< HEAD
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
interface Feature {
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import Card from '../ui/Card';'
=======
import Card from '../ui/Card';

>>>>>>> origin/chore/fix-lint-and-merge
import { Zap } from 'lucide-react';

<<<<<<< HEAD
interface Feature {
<<<<<<< HEAD
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
=======

<<<<<<< HEAD
=======
=======
import React from 'react';
import Card from '../ui / Card';
import { Zap } from 'lucide-react';
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return <div>Something went wrong.</div>;

  icon: React.ReactNode;

  icon: React.ReactNode;

  constructor(props) {
    }
    super(props);
    this.state = { "hasError": false
};
  }
  
  static getDerivedStateFromError(error) {
}
return { "hasError": true,;
};
  }

  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);}
=======
  icon: React.ReactNode;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);}
    this.state = { hasError: false,}
};
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true,}
};
>>>>>>> origin/chore/fix-lint-and-merge
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);}
  }
  
  render() {
<<<<<<< HEAD
    if (this.state.hasError) {
      }
      return <div>Something went wrong.</div>;
=======
    if (this.state.hasError) {}
      return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
    }
    return this.props.children;
<<<<<<< HEAD
import { Zap  } from 'lucide-react;
interface Feature  {icon: React.ReactNode;class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error(Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
interface Feature  {icon: React.ReactNode;class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error(Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
<<<<<<< HEAD
}'
import React from 'react';'
  "title": string;
  "description": string;
  "color": string;
=======
}
import React from 'react';
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              <div className="relative">

import { Zap } from lucide-react';
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
import React from 'react;
import Card from ../ui/Card';
import { Zap } from 'lucide-react;
interface Feature {
  icon: React.ReactNode,
  title: string,
  description: string,
  color: string,
  gradient: string,
  delay?: number
=======

  }
}
import React from 'react';
  title: string;
  description: string;
  color: string;

  gradient: string;

  delay?: number;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
}
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
import React from 'react';
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface Feature {
>>>>>>> merged-prs-20250907-203621
  icon: React.ReactNode,
  title: string,
  description: string,
  color: string,
  gradient: string,
  delay?: number
}
  gradient: string;

interface FeaturesProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  gradient: string;delay?: number;
  return (<section className='py-24 bg-black relative overflow-hidden'>;
      <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
>>>>>>> merged-prs-20250907-203621
  title: string,
  subtitle: string,
  features: Feature[],
  columns?: 2 | 3 | 4
}
<<<<<<< HEAD

const Features: React.FC<FeaturesProps> = ({
  title;
  subtitle;
  features;
  columns = 3}) => {
  const gridCols = {
    2: 'md:grid-cols-2';
    3: 'md:grid-cols-2 lg:grid-cols-3';
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
=======
const Features: React.FC<FeaturesProps> = ({
  title;
  subtitle;
  features;
  columns = 3}) => {
  const gridCols = {
    2: 'md:grid-cols-2';
    3: 'md:grid-cols-2 lg:grid-cols-3';
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
<<<<<<< HEAD
            {title}
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>            {subtitle}          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;delay?: number;
}interface FeaturesProps  {title: string;
  subtitle: string;
  features: Feature[];
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>            {subtitle}          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
=======
  title: string;
  subtitle: string;
  features: Feature[];
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'    />}
}
>>>>>>> origin/chore/fix-lint-and-merge
            {subtitle}
=======
{title}
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            {subtitle}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </p>;
        </div>;{/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}    />

<<<<<<< HEAD
const Features: React.FC<FeaturesProps> = ({
  title;
  subtitle;
  features;
  columns = 3}) => {
  const gridCols = {
    2: md:grid-cols-2';
    3: 'md:grid-cols-2 lg:grid-cols-3;
    4: md:grid-cols-2 lg:grid-cols-4'}

<<<<<<< HEAD
  return (
    <section className="py-24 bg-black relative overflow-hidden>
      <div className=absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10>
        {/* Section Header */}
        <div className=text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6>
            <Zap className=w-4 h-4 mr-2" />
            Platform Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight>
            {title}
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>            {subtitle}          <p className=text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;delay?: number;
}interface FeaturesProps  {title: string;
  subtitle: string;
  features: Feature[];
=======

          {features && features.map((feature, index) => (;}
            <Card;}
key={index}

className='text-center group bg-gray-900/50 border border-gray-800 hover: border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
>>>>>>> origin/chore/fix-lint-and-merge

              style={{ animationDelay: `${index * 0.1 + 0.2}s` ,
}
                />;
              <div className='relative'    />;
                <div;
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover: scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}    />

                  {feature.ico,}
}
                </div>;
                <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'    />;
              </div>;
              <h3 className='text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300'    />;
                {feature.title}
              </h3>;
              <p className='text-gray-400 leading-relaxed'    />;
                {feature.description}
              </p>;
            </Card>;
          ))}

<<<<<<< HEAD
=======



<<<<<<< HEAD
            {subtitle}
          </p>;
        </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <Card
              key={index}
<<<<<<< HEAD
              className="text-center group bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              key = $2;
export default Features,
=======
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
>>>>>>> merged-prs-20250907-203621
            {title}
          </h2>
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>            {subtitle}          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <Card
              key={index}
<<<<<<< HEAD
              className="text-center group bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                  {feature.icon}
                </div>
<<<<<<< HEAD
                <div className=absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300>
                {feature.title}
              </h3>
              <p className=text-gray-400 leading-relaxed">
=======
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
}
export default Features;
=======
        </div>
      </div>
    </section>
)
};


export default Features;

>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
  );
}
export default Features;  )
}
export default Features;
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
