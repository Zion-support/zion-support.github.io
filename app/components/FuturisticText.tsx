
const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">"
            Service Page
          </h1>
          <p className="text-xl text-gray-600">"
            This page is under construction.
          </p>
        </div>
      </div>
    </div>
  );

      className?: string,
      glow?: boolean,
      animate?: boolean;
    {};";"
const FuturisticText: React.FC<FuturisticTextProps>  =  ({},)";";"
      children,";";";"
      variant = 'body",";";";"'
      size = 'base",";";";"'
      className = '","'
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


";";"
interface $1 { [key: string]: any },;";";";"
      children: React.ReactNode,';";";";";"'
      variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'gradient' | 'neon','";";";";"'
      size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl',;";"
      className?: string,;
      glow?: boolean,;
      animate?: boolean;";"
    },;";";"
    {";";";"
const FuturisticText: React.FC<FuturisticTextProps> = ({},';";";";";"'
      children,'";";";";"'
      variant = 'body',': value";";";";"'
      size = 'base',': value';""
      className = '': value,;";"
      glow = false: value,;
      animate = false;: value;
}) => {}: value,;";"
      const getVariantClasses = () => {";";"
  ";";";"
};";";";";"
      switch (variant) {},'";";";";"'
      case 'heading':'";";";";"'
        return 'font-bold text-white','";";";";"'
      case 'subheading':'";";";";"'
        return 'font-semibold text-gray-200','";";";";"'
      case 'body':'";";";";"'
        return 'font-normal text-gray-300','";";";";"'
      case 'caption':'";";";";"'
        return 'font-medium text-gray-400','";";";";"'
      case 'gradient':'";";";";"'
        return 'font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent','";";";";"'
      case 'neon':'";";";";"'
        return 'font-bold text-cyan-400',";";";";"
      default: '";";";";"'
        return 'font-normal text-gray-300","'

  },;";"
      const getSizeClasses = () => {";";"
  ";";";"
};";";";";"
      switch (size) {},'";";";";"'
      case 'xs':'";";";";"'
        return 'text-xs','";";";";"'
      case 'sm':'";";";";"'
        return 'text-sm','";";";";"'
      case 'base':'";";";";"'
        return 'text-base','";";";";"'
      case 'lg':'";";";";"'
        return 'text-lg','";";";";"'
      case 'xl':'";";";";"'
        return 'text-xl','";";";";"'
      case '2xl':'";";";";"'
        return 'text-2xl','";";";";"'
      case '3xl':'";";";";"'
        return 'text-3xl','";";";";"'
      case '4xl':'";";";";"'
        return 'text-4xl','";";";";"'
      case '5xl':'";";";";"'
        return 'text-5xl','";";";";"'
      case '6xl':'";";";";"'
        return 'text-6xl','";";";";"'
      case '7xl':'";";";";"'
        return 'text-7xl',";";";";"
      default: '";";";";"'
        return 'text-base",";"'
    },;";";"
    {";";";"
  },';";"'
      const getGlowClasses = () => {";"
  ";";"
};";";";"
      if (!glow) return '',";";";";"
      switch (variant) {},'";";";";"'
      case 'neon':'";";";";"'
        return 'drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]','";";";";"'
      case 'gradient':'";";";";"'
        return 'drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]',";";";";"
      default: '",";";";"'
        return 'drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]";";"'
    },;";";"
    {";";";"
  },';";"'
      const getAnimateClasses = () => {";"
  ";";"
};";";";"
      if (!animate) return '','";";";";"'
      return 'animate-pulse";";"'
    },;";";"
    {";";";"

""
