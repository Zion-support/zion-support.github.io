import React from 'react';
import { ArrowRight    } from 'lucide-react';
interfaceNeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

constNeonButton: React.FC<NeonButtonProps /> = ({
  children,
  href,
  onClick,
  constvariant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false
}) => {
  constbaseClasses = 'relativeinline-flexitems-centerjustify-centerfont-semiboldrounded-lgtransition-allduration-300 transformhover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-alloweddisabled:hover:scale-100';
  constsizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  constvariantClasses = {
    primary: 'bg-gradient-to-rfrom-blue-600 to-purple-600 text-whiteshadow-lghover:shadow-blue-500/25 hover:shadow-2 xl',
    secondary: 'bg-gradient-to-rfrom-purple-600 to-pink-600 text-whiteshadow-lghover:shadow-purple-500/25 hover:shadow-2 xl',
    accent: 'bg-gradient-to-rfrom-cyan-500 to-blue-500 text-whiteshadow-lghover:shadow-cyan-500/25 hover:shadow-2 xl'
  };
  constneonEffect = 'before:absolutebefore:inset-0 before:rounded-lgbefore:bg-gradient-to-rbefore:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-smbefore:transition-opacitybefore:duration-300 hover:before:opacity-70 before:-z-10';
  constbuttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;
  constcontent = (
    <>
    <>
      {icon && <spanclassName="m r-2">{icon}</span>}
    </>
      {children}
    <>
      {!icon && <ArrowRightclassName="w-4 h-4 m l-2 group-hover:translate-x-1transition-transform" />}
    </>
  );
  if (href) {
    return (
      <aconsthref = {href}
        className="{b u ttonClasses}"
        style="{{"
          boxShadow: '0 0 20 pxrgba(59, 130, 246, 0.3), 0 0 40 pxrgba(147, 51, 234, 0.2)',
        }}>
        {content}
      </a>
    );
  }

  return (
    <buttonconstonClick = {onClick}
      disabled="{disabled}"
      className="{b u ttonClasses}"
      style="{{"
        boxShadow: '0 0 20 pxrgba(59, 130, 246, 0.3), 0 0 40 pxrgba(147, 51, 234, 0.2)',
      }}>{content}
    </button>
  );
};

exportdefaultNeonButton;
    </>
