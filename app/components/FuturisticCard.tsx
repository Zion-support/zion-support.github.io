<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default ComponentsPage;'";'";"
=======
<<<<<<< HEAD
import React from 'react';";";";";
import SEOHead from './components/SEOHead";
interface FuturisticCardProps {},";
      children: React.ReactNode,";";
      className?: string,";";";
      variant?: 'default' | 'elevated' | 'glow' | 'gradient",";";
      hover?: boolean,";";";
      glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green"
    },
    {};";
const FuturisticCard: React.FC<FuturisticCardProps>  =  ({},)";";
      children,";";";
      className = '",";";";
      variant = 'default",";";
      hover = true,";";";
      glowColor = 'cyan"
}) => {},
      const getVariantClasses = () => {";
};";";
      {/* Animated background gradient */};";";";
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>";";";
      {/* Animated border */};"
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>";";";
      {/* Content */};"
      <div className="relative z-10"></div>
=======
<<<<<<< HEAD
import React from 'react;''";
=======
import React from 'react'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
interface FuturisticCardProps {
  children: React.ReactNode";
  className?: string;
  variant?: 'default' | 'glow' | 'gradient'}'"'"
const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children, '"'"
  className = ','";
  variant = 'default';}'"'"
}) => {'"'"
  const baseClasses  = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm'";
  const variantClasses  = {'"'"
    default: 'bg-white/10','"'"
    glow: 'bg-white/10 shadow-lg shadow-blue-500/20','"'"
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20';}'"'"
  };
  return (
    <div: className ="{`${baseClasses}" ${variantClasses[variant]} ${className}`}></div>";
      {children})
    </div>)
  );
};
export default FuturisticCard;
<<<<<<< HEAD
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

interface FuturisticCardProps {},
      children: React.ReactNode,
      className?: string,
      variant?: 'default' | 'elevated' | 'glow' | 'gradient',";
      hover?: boolean,
      glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green'";
    },
    {}
const FuturisticCard: React.FC<FuturisticCardProps> = ({},)
      children,
      className = '',";
      variant = 'default',";
      hover = true,
      glowColor = 'cyan'";
}) => {},
      const: getVariantClasses = () => {},
      switch (variant) {},;
      case 'elevated':";
        return 'bg-slate-800/50 backdrop-blur-sm border border-white/20 shadow-2xl',";
      case 'glow':";
        return 'bg-slate-800/30 backdrop-blur-sm border border-white/10 shadow-lg',";
      case 'gradient':";
        return 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10',";
      default:
        return 'bg-slate-800/40 backdrop-blur-sm border border-white/10'";
    },
    {}
  },
      const: getGlowColor = () => {},
      switch (glowColor) {},;
      case 'cyan':";
        return 'hover:shadow-cyan-500/20 hover:border-cyan-400/30',";
      case 'purple':";
        return 'hover:shadow-purple-500/20 hover:border-purple-400/30',";
      case 'pink':";
        return 'hover:shadow-pink-500/20 hover:border-pink-400/30',";
      case 'blue':";
        return 'hover:shadow-blue-500/20 hover:border-blue-400/30',";
      case 'green':";
        return 'hover:shadow-green-500/20 hover:border-green-400/30',";
      default:
        return 'hover:shadow-cyan-500/20 hover:border-cyan-400/30'";
    },
    {}
  },
      const: hoverClasses = hover ? 'hover:scale-105 hover:shadow-xl' : '',";
      const: glowClasses = hover ? getGlowColor() : '',";
      const: baseClasses = `
    relative rounded-xl p-6
    transition-all duration-300
    group overflow-hidden
  `,
      const: cardClasses = `${baseClasses} ${getVariantClasses()} ${hoverClasses} ${glowClasses} ${className}`,
      return ()
    <div: className ={cardClasses}></div>;
      {/* Animated background gradient */};
      <div: className ="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>";
      
      {/* Animated border */};
      <div: className ="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>";
      
      {/* Content */};
      <div: className ="relative z-10"></div>";
>>>>>>> main
        {children};
      </div>
    </div>
  )
    },
    {};
export default Component;

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";";";

>>>>>>> main
>>>>>>> main
>>>>>>> main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
