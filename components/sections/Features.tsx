
<<<<<<< HEAD
=======
import Card from '../ui/Card';'

import { Zap } from 'lucide-react';'
>>>>>>> origin/cursor/delete-old-data-records-6bba



import Card from '../ui/Card';'
<<<<<<< HEAD

import { Zap } from 'lucide-react';




=======
import Card from '../ui/Card';

import { Zap } from 'lucide-react';

interface Feature {

interface Feature {
  }
  "icon": React.ReactNode;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  
  componentDidCatch(error, errorInfo) {
    }
    console.error('Error caught by "boundary":', error, errorInfo);'
  }

<<<<<<< HEAD
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);}

  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);}
  }
  
  render() {

    if (this.state.hasError) {}
      return <div    />Something went wrong.</div>;}

=======
  render() {
    }
    if (this.state.hasError) {
      }
      return <div>Something went wrong.</div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }


    return this.props.children;
<<<<<<< HEAD

}
import React from 'react';
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
=======
import { Zap  } from 'lucide-react';
interface Feature  {icon: React.ReactNode;class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
import { Zap  } from 'lucide-react';
interface Feature  {icon: React.ReactNode;class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }

import React from 'react';'
  "title": string;
  "description": string;
  "color": string;

>>>>>>> origin/cursor/delete-old-data-records-6bba

interface Feature {
<<<<<<< HEAD

  icon: React.ReactNode,
  title: string,
  description: string,
  color: string,
  gradient: string,
=======
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

  }
}
import React from 'react';
  title: string;
  description: string;
  color: string;

  gradient: string;

  delay?: number;

  return ('
    <section className='py-24 bg-black relative overflow-hidden'>;'
      <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;'
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
  delay?: number
}

interface FeaturesProps {
<<<<<<< HEAD
=======

  title: string,
  subtitle: string,
  features: Feature[],
  columns?: 2 | 3 | 4
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
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
            {subtitle}
{title}
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </p>;
        </div>;{/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}    />

<<<<<<< HEAD


          {features && features.map((feature, index) => (;}
            <Card;}
key={index}

className='text-center group bg-gray-900/50 border border-gray-800 hover: border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'


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








        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
            <Card
              key={index}


              <div className="relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                  {feature.icon}
                </div>

=======
const Features: React.FC<FeaturesProps> = ({
  title;
  subtitle;
  features;
  columns = 3}) => {
  const gridCols = {
    2: md:grid-cols-2';
    3: 'md:grid-cols-2 lg:grid-cols-3;
    4: md:grid-cols-2 lg:grid-cols-4'}


                  {feature.icon}
                </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
    </section>

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );
}
export default Features;  )
}
export default Features;




<<<<<<< HEAD
=======

  )
};
export default Features;
>>>>>>> origin/cursor/delete-old-data-records-6bba
