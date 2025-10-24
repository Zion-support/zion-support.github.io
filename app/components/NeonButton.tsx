import React from 'react';import { Metadata } from 'next';
import React from &quot;react&quot;
import { ArrowRight } from &quot;lucide-react&quot;
interface NeonButtonProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent""  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode;
  disabled?: boolean;
}const NeonButton="React.FC<NeonButtonProps>= ({
  children,  href,  onClick,
  variant: "primary","  size: "md","  className="&quot;,
  icon,
  disabled = false;}) =</ {""  const baseClasses ="    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover="scale-105 active: "scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100  ;const benefits = ['    'Increase efficiency by up to 50%'",'    'Reduce costs by 30% with automation','    'Improve decision-making with AI insights','    'Scale operations without proportional staff increases','    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>            <Navigation></Navigation>"      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900></div />

</div>export default NeonButtonPage;  constvariantClasses= {primary="     "bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover: "shado w-blue-50 0/25 hover:shado w-2 xl"",    secondary: ""     "bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl"","    accent: ""bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl"  ""}  const neonEffect ="    "before="absolute before: "inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10&quot;  const buttonClasses = `${baseClasses"} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`
  ;
constcontent= (  <di v>{icon&&<spanclassName="mr-2">{icon}</spa>};export default NeonButton;"'
}))

export default ;
function Page() {
  return <div>Page content</div>;
}