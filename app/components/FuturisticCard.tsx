import { clsx } from 'clsx';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'border';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300';
  
  const variantClasses = {
    default: 'hover:border-white/20',
    glow: 'hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400/50',
    border: 'border-2 border-cyan-400/30 hover:border-cyan-400/60'
  };

  return (
    <div className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};

export default FuturisticCard;