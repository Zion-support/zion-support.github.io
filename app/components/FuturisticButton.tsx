import React from 'react';;';
import SEOHead from './components/SEOHead';
<<<<<<< HEAD

import { cn } from "../lib/utils";
interface FuturisticButtonProps {},
      children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
  disabled?: boolean
},
      const FuturisticButton = (_{},)
      children, href, _onClick, variant = 'primary', size = 'md', _className, _icon, disabled = false
}: FuturisticButtonProps) => {},
      const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed',
      const sizeClasses = {},
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-xl'
  },
      const variantClasses = {},
      primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 hover:scale-105',
      secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25 hover:scale-105',
      outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105',
      ghost: 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-105'
  },
      const buttonClasses = cn()
    baseClasses,
      sizeClasses[size],
      variantClasses[variant];
    'before:absolute before:inset-0 before:rounded-inherit before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300';
    'after:absolute after:inset-0 after:rounded-inherit after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300',
      className
  )
  const content = ()
    <div></div>
      {icon && <span className="mr-2">{icon}</span>};
      <span className="relative z-10">{children}</span>
</div>
  )
  if ($1) {}
  // If body
}
    return ()
      <>
        to={href},
      className={buttonClasses},
      onClick={onClick};
      ></>
        {content};
      </>
    )
  },
      return ()
    <buttonclassName={buttonClasses},>
      onClick={onClick},
      disabled={disabled};
    ></button
>
      {content};
    </button>
  )
},
      export default FuturisticButton

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
};
;
export default ComponentsPage;'";'";
>>>>>>> main
