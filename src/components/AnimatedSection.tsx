<<<<<<< HEAD
import, React, from 'rea, c, t';

<<<<<<< HEAD
interface, AnimatedSectionProp, s { 
  animati, o, n?: 'fade, I, n' | 'slide, U, p' | 'slideLe, f, t' | 'slideRig, h, t' | 'sca, l, e';
  del, a, y ? : number;
  childr, e, n : Rea, c, t.ReactN, o, d, e;
 }

const, AnimatedSectio, n: Rea, c, t.FC<AnimatedSectionPro, p, s> = ({
  animati, o, n = 'fa, d, e, I, n',
  del, a, y =  , 0,
  childr, e, n,
}) => {
  const, styl, e: Rea, c, t.CSSProperti, e, s = {  animationDel, a, y: `${d, e, l, a, y }, ms` }; const, classNam, e = `animat, e, d-section, animatio, n-${animati, o, n}`; retu, r, n (
    <div, classNam, e = { classN, a, m, e }, sty, l, e = {sty, l, e}>
      {childr, e, n}
    </di, v>
  );
};

export, default, AnimatedSection;
=======
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`animated-section ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
=======
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
