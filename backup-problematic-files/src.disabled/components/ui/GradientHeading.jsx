<<<<<<< HEAD
import _React from react''; import { cn } from '@/lib/utils'; "export": function GradientHeading({} children,' variant =';';primary',''; "size": = '2xl';';,' "className": = '';';,customGradient}) {} const gradients = {}''; "primary": '''';';bg-gradient-to-r: from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparen,t,,'';';'; "secondary": '''';';bg-gradient-to-r: from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparen,t,,'';';'; "accent": '''';';bg-gradient-to-r: from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparen,t,,''; "custom": ''';'; customGradient: ||'''';';bg-gradient-to-r: from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparen,t} const getGradientClasses = () => {} return gradients[variant] } const getSizeClasses = () => {} const sizes = {}';';'; "xs": 'text-x,s,,'';';'; "sm": 'text-s,m,,'';';'; "md": 'text-bas,e,,'';';'; "lg": 'text-l,g,,'';';'; "xl": 'text-x,l,2xl': '; text-2xl',3xl';';: 'text-3xl,4xl': '; text-4xl',5xl';';: 'text-5xl,6xl':';';text-6xl'} "return": 'sizes[size]' }' return()'' <h1''''; className={cn('''';';font-"bold": leading-tight';';,getSizeClasses(),getGradientClasses(),"className": ')'} > {children} </h1> ) }'';';
import _React from react''; import { cn } from '@/lib/utils'; "export": function GradientHeading({} children,' variant =';';primary',''; "size": = '2xl';';,' "className": = '';';,customGradient}) {} const gradients = {}''; "primary": '''';';bg-gradient-to-r: from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparen,t,,'';';'; "secondary": '''';';bg-gradient-to-r: from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparen,t,,'';';'; "accent": '''';';bg-gradient-to-r: from-zion-purple via-zion-cyan to-zion-blue bg-clip-text text-transparen,t,,''; "custom": ''';'; customGradient: ||'''';';bg-gradient-to-r: from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparen,t} const getGradientClasses = () => {} return gradients[variant] } const getSizeClasses = () => {} const sizes = {}';';'; "xs": 'text-x,s,,'';';'; "sm": 'text-s,m,,'';';'; "md": 'text-bas,e,,'';';'; "lg": 'text-l,g,,'';';'; "xl": 'text-x,l,2xl': '; text-2xl',3xl';';: 'text-3xl,4xl': '; text-4xl',5xl';';: 'text-5xl,6xl':';';text-6xl'} "return": 'sizes[size]' }' return()'' <h1''''; className={cn('''';';font-"bold": leading-tight';';,getSizeClasses(),getGradientClasses(),"className": ')'} > {children} </h1> ) }'';';
=======
import React from 'react';

const GradientHeading = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GradientHeading</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GradientHeading;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
