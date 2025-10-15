import React from 'react';;';
import SEOHead from './components/SEOHead';
<<<<<<< HEAD

interface AnimatedCardProps {}
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow';
  hoverEffect?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({)}
  children,
  className = '',
  glowColor = 'purple',
  hoverEffect = true
}) => {}
  const glowColors = {}
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',
    green: 'shadow-green-500/25 hover:shadow-green-500/40',
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40'
  };

  const borderColors = {}
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
    pink: 'border-pink-500/30 hover:border-pink-500/60',
    green: 'border-green-500/30 hover:border-green-500/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60',
    yellow: 'border-yellow-500/30 hover:border-yellow-500/60'
  };

  return ()
    <divclassName={`>}
        relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 
        backdrop-blur-sm border border-slate-600/50 
        rounded-xl p-6 transition-all duration-300
        ${hoverEffect ? 'hover:transform hover:scale-105 hover:-translate-y-1' : ''}
        ${glowColors[glowColor]}
        ${borderColors[glowColor]}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}

      </div>
    </>
  );
=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
>>>>>>> main
};
<<<<<<< HEAD
;
export default ComponentsPage;'";'";
=======

export default ComponentsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
