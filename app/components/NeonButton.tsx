import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps />= ({
  children,
  href,
  onClick,
  
}) => {

  const neonEffect = 'before: absolute,
  before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover: befor,
  e:opacity-70 before:-z-10';</NeonButtonProps>
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;</NeonButtonProps>
  const content = (</NeonButtonProps>
    <></>
      {icon && <span className="mr-2"  >{icon}</span>}
      {children}
      {!icon && <ArrowRight className="w-5h-5ml-2" /&gt;}    </ArrowRight></ArrowRight>
</></ArrowRight>
  );
  if (href) {
    return (
    <div>);
};

export default NeonButton;
</div>
</div>