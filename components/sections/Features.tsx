

import React from 'react';


import Card from '../ui/Card';
import { Zap } from 'lucide-react';


  icon: React.ReactNode;
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


  title: string;
  description: string;
  color: string;
  gradient: string;

  delay?: number;


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

            {subtitle}

          </p>;
        </div>;





            {subtitle}
          </p>;
        </div>;
            {subtitle}
          </p>;
        </div>;


        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>;
          {features && features.map((feature, index) => (;
            <Card
              key={index}

export default Features;  )
};

export default Features;




              </p>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
;
export default Features);
}
;
export default Features;
;
