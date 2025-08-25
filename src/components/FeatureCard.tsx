<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight } from 'lucide-react';
=======
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
=======
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/main
=======
import React from 'react';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857

interface FeatureCardProps {
  title: string;
  description: string;
<<<<<<< HEAD
  icon?: React.ReactNode;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  stats?: string;
  href?: string;
  onClick?: () => void;
}

export function FeatureCard({
  title,
  description,
  icon,
  color = 'text-zion-cyan',
  bgColor = 'bg-zion-blue-light/10',
  borderColor = 'border-zion-blue-light/20',
  stats,
  href,
  onClick
}: FeatureCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <motion.div
      whileHover="hover"
      className={`group relative ${bgColor} border-2 ${borderColor} rounded-2xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 cursor-pointer`}
      onClick={handleClick}
    >
      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4 shadow-lg">
          {icon}
        </div>
      )}

      {/* Content */}
      <h3 className={`text-xl font-bold ${color} mb-3`}>{title}</h3>
      <p className="text-zion-slate-light leading-relaxed mb-4">{description}</p>

      {/* Stats */}
      {stats && (
        <div className="text-sm text-zion-slate-light mb-4">{stats}</div>
      )}

      {/* CTA */}
      <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zion-cyan/0 via-zion-cyan/5 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}
=======
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-zion-blue-light rounded-lg p-6 border border-zion-blue-lighter ${className}`}>
      <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-zion-cyan" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zion-slate-light text-sm">{description}</p>
    </div>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-zion-cyan text-xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-zion-slate-light">{title}</h3>
      </div>
      <p className="text-zion-slate text-sm leading-relaxed">{description}</p>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
