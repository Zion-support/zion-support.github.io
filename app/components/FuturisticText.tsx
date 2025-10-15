      className?: string,
      glow?: boolean,
      animate?: boolean;
    },

    {}
const FuturisticText: React.FC<FuturisticTextProps> = ({},)
      children,
      variant = 'body',
      size = 'base',
      className = '',
      glow = false,
      animate = false
}) => {},

    ${getVariantClasses()};
    ${getSizeClasses()};
    ${getGlowClasses()};
    ${getAnimateClasses()};
    ${className};
  `,
      return ()
    <span className={baseClasses}></span>
      {children};
    </span>
  )
    },
    {}
export default FuturisticText;

export default ComponentsPage;

interface $1 { [key: string]: any },;
      children: React.ReactNode,';';
      variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'gradient' | 'neon','';
      size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl',;";
      className?: string,;
      glow?: boolean,;
      animate?: boolean;
    },;
    {
const FuturisticText: React.FC<FuturisticTextProps> = ({},';';
      children,'';
      variant = 'body',': value';
      size = 'base',': value';
      className = '': value,;";
      glow = false: value,;
      animate = false;: value;
}) => {}: value,;
      const getVariantClasses = () => {}: value,';';
      switch (variant) {},'';
      case 'heading':'';
        return 'font-bold text-white','';
      case 'subheading':'';
        return 'font-semibold text-gray-200','';
      case 'body':'';
        return 'font-normal text-gray-300','';
      case 'caption':'';
        return 'font-medium text-gray-400','';
      case 'gradient':'';
        return 'font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent','';
      case 'neon':'';
        return 'font-bold text-cyan-400',';
      default: '';
        return 'font-normal text-gray-300',
    },;
    {
  },;";
      const getSizeClasses = () => {";";
        return 'text-base",";
    },;";";
  },';";
      const getGlowClasses = () => {";
  ";";
        return 'drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]";";
    },;";";
  },';";
      const getAnimateClasses = () => {";
  ";";
      return 'animate-pulse";";
    },;";";
