import React from "react"
import {ArrowRight} from"lucide-react"
interface NeonButtonProp s {children?: React.ReactNode;
  class Nam e?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () =>voidvariant?:"primary" |"secondary" |"accent";
  size?:"sm" |"md" |"lg";
  icon?: React.ReactNode;
  disabled?: boolean;}
constNeonButton:React.FC<NeonButtonProp s>= ({children,
  href,
  onClick,
  variant="primary",
  size="md",
  className="",
  icon,
  disabled= false}) => {constbaseClasses=
   "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300transformhover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-alloweddisabled: hover:scale-10 0";

  constsizeClasses= {
    sm:"px-4 py-2 text-sm",
    md:"px-6 py-3 text-base",
    lg:"px-8 py-4 text-lg"
 };

  constvariantClasses= {primary:
     "bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl",
    secondary:
     "bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl",
    accent:
     "bg-gradient-to-r from-cyan-500to-blue-500text-white shado w-lghover:shado w-cyan-50 0/25 hover:shado w-2 xl"
 };

  constneonEffect=
   "before: absolutebefore:inset-0 before:rounded-lgbefore:bg-gradient-to-rbefore:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-smbefore:transition-opacitybefore:duration-300 hover: before:opacity-70 before:-z-1 0";

  constbuttonClasses= `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;

  constcontent= (
  <di v>{icon&&<spanclassName="mr-2">{icon}</spa>}
      {children}
      {!icon&&<ArrowRightclassName="w-5h-5ml-2"/>}
  </di>);

  if (hre f) {return (
    <ahref={href} className={buttonClasses}>{content}
    </a>);
  }

  return (
  < onClick={onClick} disabled={disabled} className={buttonClasses}></ onClick={onClick} disabled={disabled} className={buttonClasses}>{content}
  </butto>
  );
};

export default NeonButton;