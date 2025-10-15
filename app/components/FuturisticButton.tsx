<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`futuristic-button ${className}`}
    >
      {children}
    </button>
  );
};

export default FuturisticButton;
=======
<<<<<<< HEAD
import React from 'react;'
import { Link } from 'react-router-dom;'
import { LucideIcon, ArrowRight } from 'lucide-react;'
interface FuturisticButtonProps {
  children: React.ReactNode;
  className?: string;''
  variant?: 'primary' | 'secondary' | 'outline;''
  size?: 'sm' | 'md' | 'lg;''
  icon?: React.ReactNode;
  onClick?: () => void;''
  type?: 'button' | 'submit' | 'reset;}''
}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children, ''
  className = ',''
  variant = 'primary',''
  size = 'md',''
  icon,
  onClick,''
  type = 'button';}''
}) => {''
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2;''
  const variantClasses = {''
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500',''
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50',''
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500';}''
  };
  const sizeClasses = {''
    sm: 'px-4 py-2 text-sm',''
    md: 'px-6 py-3 text-base',''
    lg: 'px-8 py-4 text-lg';}''
  };
  return (
    <button></button>
      type="{type}"
      onClick="{onClick}"
      className="{`${baseClasses}" ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >;
      {icon && <span className="mr-2">{icon}</span>}""
      {children}
    </button>)};
export default FuturisticButton;
=======
ursor/fix-errors-and-merge-to-main-234b
>>>>>>> main
=======
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
>>>>>>> main
