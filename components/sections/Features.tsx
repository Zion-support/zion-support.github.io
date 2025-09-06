<<<<<<< HEAD
import React from 'react',
=======
import React from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface Feature {
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======


>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
=======
  columns?: 2 | 3 | 4;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
<<<<<<< HEAD
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>            {subtitle}          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
=======
          <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            {subtitle}
          </p>
        </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-8 ${gridCols[columns]}`}>
          {features.map((feature, index) => (
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
<<<<<<< HEAD
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
=======
              <p className='text-gray-400 leading-relaxed'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
export default Features;  )
}
export default Features;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default Features;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
