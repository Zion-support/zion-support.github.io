<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from 'react';


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Card from '../ui/Card';
import { Zap } from 'lucide-react';


<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import Card from '../ui / Card';
import { Zap } from 'lucide-react';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  icon: React.ReactNode;
=======
=======
  icon: React.ReactNode;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  title: string;
  description: string;
  color: string;
  gradient: string;

  delay?: number;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            {subtitle}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          </p>;
        </div>;





<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            {subtitle}
          </p>;
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            {subtitle}
          </p>;
        </div>;


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>;
          {features && features.map((feature, index) => (;
            <Card
              key={index}
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export default Features;  );
};

export default Features;
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
