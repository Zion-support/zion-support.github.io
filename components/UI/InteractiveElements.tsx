<<<<<<< HEAD
import: React, { useEffect, useRef, useState } from 'react';';
import: { motion, useAnimation, useInView } from 'framer-motion';';

type: ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient';';
type: ButtonSize = 'sm' | 'md' | 'lg';';

interface: InteractiveButtonProps {
  'react';';
import: { motion, useAnimation, useInView  } from 'lucide-react';';

type: ButtonVariant =;
  'primary' |;';
  'secondary' |;';
  'ghost' |;';
  'gradient';';
type: ButtonSize =;
  'sm' |;';
  'md' |;';
  'lg';';
interface: InteractiveButtonProps {
=======
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
<<<<<<< HEAD

=======
'
>>>>>>> main
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface InteractiveButtonProps {
>>>>>>> main
  children: React.ReactNode;
<<<<<<< HEAD
  onClick?: () => void;
=======
>>>>>>> main
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
<<<<<<< HEAD
  loading?: boolean;
  icon?: React.ReactNode: className?: strin,g}

export: const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  childre,n,
  onClick,
  variant: = 'primary',';
  size: = 'md',';
  disabled: = false,
=======
<<<<<<< HEAD
  loading?: boolean
  icon?: React.ReactNode
  className?: string}
=======
  loading?: boolean;
<<<<<<< HEAD
  icon?: React.ReactNode;
=======
<<<<<<< HEAD
  icon?: React.ReactNode;
=======
  onClick?: () => void;
>>>>>>> main
>>>>>>> main
  className?: string;
}
>>>>>>> main

<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD
export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
<<<<<<< HEAD
  children, onClick,
  variant = 'primary', size = 'md',
  disabled = false, loading = false,
  icon, className = '',
=======
<<<<<<< HEAD
  children,
  onClick,
=======
  children, onClick,
  variant = 'primary', size = 'md',
  disabled = false, loading = false,
  icon, className = ''
<<<<<<< HEAD
=======
=======
const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
>>>>>>> main
  variant = 'primary',
  size = 'md',
  disabled = false,
>>>>>>> main
  loading = false,
<<<<<<< HEAD
  icon,
  className = ''';
>>>>>>> main
}) => {
<<<<<<< HEAD
  const: [isHovered, setIsHovered] = useState(false)

  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none: focus:ring-2: focus:ring-offset-2: disabled:opacity-50: disabled:cursor-not-allowed: overflow-hidden'';
  
  const: variantClasses: Record<ButtonVarian,t, string> = {
    primary: 'bg-blue-600: text-white hover:bg-blue-700: focus:ring-blue-500,',';
    secondary: 'bg-gray-200: text-gray-900 hover:bg-gray-300: focus:ring-gray-500,',';
    ghost: 'bg-transparent: text-gray-700 hover:bg-gray-100: focus:ring-gray-500,',';
    gradient: 'bg-gradient-to-r: from-blue-600 to-purple-600 text-white hover:from-blue-700: hover:to-purple-700: focus:ring-blue-500'';
 , }

  const: sizeClasses: Record<ButtonSiz,e, string> = {
    sm: 'px-3: py-1.5 text-sm,',';
    md: 'px-4: py-2 text-base,',';
    lg: 'px-6: py-3 text-lg'';
 , }

  const: buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
=======
  const [isHovered, setIsHovered] = useState(false);

<<<<<<< HEAD
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    ghost:
      'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
    gradient:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
  };
=======
<<<<<<< HEAD
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600', ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500', };
>>>>>>> main
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg',
=======
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
=======
  onClick,
  className = ''
>>>>>>> main
>>>>>>> main
}) => {
  const [isHovered, setIsHovered] = useState(false);
<<<<<<< HEAD
'
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disable,
    d:cursor-not-allowed overflow-hidden';
  
  const variantClasse,
    s: Record<ButtonVariant, string> = {'
    primary: 'bg-blue-600 text-white hove,
    r:bg-blue-700 focu,
    s:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hove,
    r:bg-gray-300 focu,
    s:ring-gray-500',
    ghost: 'bg-transparent text-gray-700 hove,
    r:bg-gray-100 focu,
    s:ring-gray-500',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hove,
    r:to-purple-700 focu,
    s:ring-blue-500'
=======
<<<<<<< HEAD

<<<<<<< HEAD
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
=======
<<<<<<< HEAD
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
=======
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
>>>>>>> main
>>>>>>> main
>>>>>>> main
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'
<<<<<<< HEAD
>>>>>>> main
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
>>>>>>> main
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
=======
>>>>>>> main
  };

  const sizeClasses: Record<ButtonSize, string> = {'
    sm: 'px-3 py-1.5 text-sm',
<<<<<<< HEAD
    md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg'
  }
=======
<<<<<<< HEAD
    md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg'
  }
=======
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
=======
  const [isPressed, setIsPressed] = useState(false);
>>>>>>> main
>>>>>>> main

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      case 'secondary':
        return 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500';
      case 'ghost':
        return 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
>>>>>>> main
  };
>>>>>>> main
>>>>>>> main

  return (
    <motion.button
<<<<<<< HEAD
      className={buttonClasses}
<<<<<<< HEAD
=======
export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-48f,3}) => {
  const: [isHovered, setIsHovered] = useState(false);
  const: baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none: focus:ring-2: focus:ring-offset-2: disabled:opacity-50: disabled:cursor-not-allowed: overflow-hidden';
  const: variantClasses: Record<ButtonVarian,t, string> = {
    primary:,
  bg-blue-600: text-white hover: bg-blue-700: focus:ring-blue-50,0,
    secondary:,
  bg-gray-200: text-gray-900 hover: bg-gray-300: focus:ring-gray-500: dark:bg-gray-700: dark:text-white: dark:hover:bg-gray-60,0,
    ghost:,
  text-gray-700: hover: bg-gray-100: focus:ring-gray-500: dark:text-gray-300: dark:hover:bg-gray-80,0,
    gradient:,
  bg-gradient-to-r: from-blue-600 to-purple-600 text-white hover: from-blue-700: hover:to-purple-700: focus:ring-blue-50,0}
  const: sizeClasses: Record<ButtonSiz,e, string> = {
    sm:,
  px-3: py-2 text-sm;
  ',';
    md: 'px-4: py-2 text-bas,e,';
    lg: 'px-6: py-3 text-lg;';
  ,'}';
;
ursor/automate-test-fix-improve-and-merge-code-48f3: return(
=======
ursor/automate-test-fix-improve-and-merge-code-48f3}) => {
  const [isHovered, setIsHovered] = useState(false)
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
  const variantClasses: Record<ButtonVariant, string> = {
    primary:,
  bg-blue-600 text-white hover: bg-blue-700 focus:ring-blue-500, secondary:,
  bg-gray-200 text-gray-900 hover: bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600, ghost:,
  text-gray-700 hover: bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800, gradient:,
  bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700 focus:ring-blue-500}
  const sizeClasses: Record<ButtonSize, string> = {
    sm:,
  px-3 py-2 text-sm;
  ', '
    md: 'px-4 py-2 text-base,'
    lg: 'px-6 py-3 text-lg'
  '}'

ursor/automate-test-fix-improve-and-merge-code-48f3
  return(
>>>>>>> main
    <motion.button;
=======
<<<<<<< HEAD
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
>>>>>>> main
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
>>>>>>> main
      onClick={onClick}
<<<<<<< HEAD
      disabled={disabled: || loading}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
<<<<<<< HEAD
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        animate={{
          x: isHovered ? (['-100%', '100%'] as any) : '-100%',
          opacity: isHovered ? ([0, 0.2, 0] as any) : 0,
        }}
=======
      whileHover={{ scale: 1.02, }}
      whileTap={{ scale: 0.98, }}
      transition={{ type: 'spring,', stiffness: 40,0, damping: 17, }}';
=======
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
>>>>>>> main
    >
      {loading: && (
        <motion.div
<<<<<<< HEAD
          className="absolute inset-0 flex items-center justify-center"";
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
        >
          <div: className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />";
        </motion.div>
      )}
      
      <motion.div: className={`flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}
        animate={{ opacity: loading: ? 0 : 1, }}
      >
        {icon: && <span className="flex-shrink-0">{icon}</span>}";
        {children}
      </motion.div>

      {variant: === 'gradient' && (';
        <motion.div: className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"";
          initial={{ x: '-100%', }}';
          animate={{ x: isHovered: ? '100%' : '-100%', }}';
          transition={{ duration: 0.,6, ease: 'easeInOut', }}';
=======
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}`
          className="absolute inset-0 flex items-center justify-center"
        >"
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      <motion.div
<<<<<<< HEAD
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
ursor/automate-test-fix-improve-and-merge-code-99d1
>>>>>>> main
        transition={{ duration: 0.6 }}
      />
      <div className="relative flex items-center gap-2">
        {loading ? (
<<<<<<< HEAD
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
=======
ursor/automate-test-fix-improve-and-merge-code-99d1
>>>>>>> main
        ) : (
          icon && <span className="flex-shrink-0">{icon}</span>
=======
        animate={{ opacity: loading ? 0 : 1 }}"
        className="flex items-center"
      >"
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </motion.div>
"
      {variant === 'gradient' && (
        <motion.div'
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0""
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
>>>>>>> main
        />
=======
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        rounded-lg font-medium transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      animate={{
        boxShadow: isHovered && !disabled ? '0 10px 25px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : (
        children
>>>>>>> main
      )}
    </motion.button>
<<<<<<< HEAD
  );
};

=======
<<<<<<< HEAD
    >
<<<<<<< HEAD
      <motion.div: className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0';';
        animate={{ x: isHovered: ? ,[,
  -100%;
  ', '100%;';
  '] as: any: '-100,%, opacity: isHovered: ? [,0, 0.2, 0] as any: 0, }}        transition={{ duration: 0.6, }}';
      />
      <div: className='relative flex items-center gap-2'>';
        {loading: ? (
          <motion.div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full' animate={{ rotate: 360, }} transition={{ duration:  ,1, repeat: Infinit,y, ease: 'linear;';
  ', }} />        ) : (';
          icon: && <span className='flex-shrink-0'>{icon}</span>';
=======
      <motion.div
<<<<<<< HEAD
        className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0'
=======
        className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0';
>>>>>>> main
        animate={{ x: isHovered ? [, -100%;
  ', '100%;
  '] as any: '-100%, opacity: isHovered ? [0, 0.2, 0] as any : 0 }}        transition={{ duration: 0.6 }}
      />
      <div className='relative flex items-center gap-2'>
        {loading ? (
          <motion.div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full' animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear'
  ' }} />        ) : ('
          icon && <span className='flex-shrink-0'>{icon}</span>
>>>>>>> main
>>>>>>> main
        )}
        <span>{children}</span>
      </div>
    </motion.button>
  )}
;
<<<<<<< HEAD
interface: AnimatedCardProps {
  children: React.ReactNode;
  className?: string: delay?: numbe,r}

export: const AnimatedCard: React.FC<AnimatedCardProps> = ({
  childre,n,
  className: = '',';
  delay: = 0
=======
=======
  );
};
<<<<<<< HEAD

>>>>>>> main
>>>>>>> main
interface AnimatedCardProps {
<<<<<<< HEAD
  children: React.ReactNode
  className?: string
  delay?: number}
=======
  children: React.ReactNode;
  className?: string;
  delay?: number;
<<<<<<< HEAD
  direction?: 'up
  ' | 'down
  ' | 'left
  ' | 'right
  ';
}

<<<<<<< HEAD
export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
=======
ursor/automate-test-fix-improve-and-merge-code-99d1
>>>>>>> main
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin:
  '-100px' });
  const controls = useAnimation();
=======
<<<<<<< HEAD
  direction?: 'up' | 'down' | 'left' | 'right';
}
>>>>>>> main

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
>>>>>>> main
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
=======
}
>>>>>>> main

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
<<<<<<< HEAD
  children, className = '',
  delay = 0
=======
<<<<<<< HEAD
  children, className = '',
  delay = 0
=======
=======

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
>>>>>>> main
  children,
  className = '',
  onClick
>>>>>>> main
>>>>>>> main
}) => {
<<<<<<< HEAD
  const ref = useRef(null);
<<<<<<< HEAD
  const: isInView = useInView(ref, { once: tru,e, margin: '-100px', })';
  const: controls = useAnimation();
=======
<<<<<<< HEAD
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()
=======
  const isInView = useInView(ref, { once: true });
>>>>>>> main
  const controls = useAnimation();
>>>>>>> main

>>>>>>> main
  useEffect(() => {
<<<<<<< HEAD
    if: (isInView) {
      controls.start('visible')}';
=======
<<<<<<< HEAD
    if (isInView) {'
=======
    if (isInView) {
<<<<<<< HEAD
      controls.start('visible');
    }
  }, [isInView, controls]);

  const directionVariants = {
    up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }
  } as const;

  return (
    <motion.div
      ref={ref}
      className={`bg-white dark: bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      variants={directionVariants[direction]}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {children}
=======
<<<<<<< HEAD
      controls.start('visible')}
>>>>>>> main
  }, [isInView, controls])

  const: variants = {
    hidden: { opacity: ,0, y: 50, },
    visible: {
<<<<<<< HEAD
      opacity: ,1,
      y:  ,0,
      transition: {
        duration: 0.,6,
        delay,
        ease: 'easeOut'';
     , }
=======
      opacity: 1, y: 0,
      transition: {
        duration: 0.6, delay,
        ease: 'easeOut'
      }
=======
>>>>>>> main
      controls.start('visible');
>>>>>>> main
>>>>>>> main
    }
  }, [isInView, controls]);

  return: (
    <motion.div
      ref={ref}
<<<<<<< HEAD
      variants={variants}
      initial="hidden"";
=======
      initial="hidden"
>>>>>>> main
      animate={controls}
<<<<<<< HEAD
      className={className}
    >
export: const AnimatedCard: React.FC<AnimatedCardProps> = ({ childre,n, className: = '', delay = 0, direction =';
  'up' }) => {  const: ref = useRef<HTMLDivElement | null>(null);';
  const: isInView = useInView(ref, { once: tru,e, margin: ;
  '-100px', })';
  const: controls = useAnimation();
  useEffect(() => {
<<<<<<< HEAD
    if: (isInView) controls.start(
  'visible')}, [isInView, controls]);';
  const: directionVariants = {
    up: { hidden: { y: 5,0, opacity: 0, }, visible: { y: ,0, opacity: 1, } },
    down: { hidden: { y: -5,0, opacity: 0, }, visible: { y: ,0, opacity: 1, } },
    left: { hidden: { x: 5,0, opacity: 0, }, visible: { x: ,0, opacity: 1, } },
    right: { hidden: { x: -5,0, opacity: 0, }, visible: { x: ,0, opacity: 1, } }} as: const
  return (
    <motion.div
      ref={ref}
      className={`bg-white dark: bg-gray-800: rounded-xl shadow-lg hover:shadow-xl: transition-shadow duration-300 ${classNam,e}`}
      variants={directionVariants[direction]}
      initial='hidden';';
      animate={controls}
      transition={{ duration: 0.,6, delay: }}
      whileHover={{ y: -5, }}
=======
    if (isInView) controls.start(
  'visible')}, [isInView, controls])
  const directionVariants = {
    up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }} as const
=======
      variants={{
        hidden: { opacit,
    y: 0, y: 20 },
        visible: { opacit,
    y: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay }}"
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
=======
  const [isHovered, setIsHovered] = useState(false);

>>>>>>> main
  return (
    <motion.div
      className={`
        bg-white rounded-lg shadow-md border border-gray-200
        transition-all duration-300 cursor-pointer
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
<<<<<<< HEAD
>>>>>>> main
    >{children}
>>>>>>> main
    </motion.div>
  );
};

<<<<<<< HEAD
interface: HoverEffectProps {
  children: React.ReactNode;
  className?: string: scale?: numbe,r}
=======
interface HoverEffectProps {
<<<<<<< HEAD
  children: React.ReactNode
  className?: string
  scale?: number}
=======
  children: React.ReactNode;
  className?: string;
  scale?: number;
}
>>>>>>> main
>>>>>>> main

export: const HoverEffect: React.FC<HoverEffectProps> = ({
  childre,n,
  className: = '',';
  scale: = 1.05
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
<<<<<<< HEAD
      transition={{ type: 'spring,', stiffness: 40,0, damping: 17, }}';
=======
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
=======
      animate={{
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.1)' 
          : '0 4px 6px rgba(0,0,0,0.1)'
      }}
>>>>>>> main
>>>>>>> main
>>>>>>> main
    >
      {children}
    </motion.div>
  );
};
<<<<<<< HEAD

<<<<<<< HEAD
interface: LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'';
  className?: string}

export: const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size: = 'md,',';
  className: = ''';
}) => {
  const: sizeClasses = {
    sm: 'w-4: h-4,',';
    md: 'w-6: h-6,',';
    lg: 'w-8: h-8'';
 , }

  return: (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full ${className}`}
      animate={{ rotate: 360, }}
      transition={{ duration:  ,1, repeat: Infinit,y, ease: 'linear', }}';
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = ''
=======
<<<<<<< HEAD

interface LoadingSpinnerProps {`
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

<<<<<<< HEAD
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({'
=======
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
<<<<<<< HEAD
  size = 'md', className = ''
=======
<<<<<<< HEAD
  size = 'md', className = ''
=======
>>>>>>> main
  size = 'md',
  color = 'primary'
>>>>>>> main
>>>>>>> main
>>>>>>> main
}) => {
<<<<<<< HEAD
  const sizeClasses = {'
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
=======
  const sizeClasses = {
<<<<<<< HEAD
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
=======
    sm: 'w-4 h-4', md: 'w-6 h-6',
>>>>>>> main
    lg: 'w-8 h-8'
  };

  const colorClasses = {'
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    white: 'border-white'
  };
>>>>>>> main

  return (
    <motion.div'
      className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color]}`}
      animate={{ rotate: 360 }}`
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
>>>>>>> main
    />
<<<<<<< HEAD
  );
};
=======
=======

<<<<<<< HEAD
interface: FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number: className?: strin,g}

export: const FadeIn: React.FC<FadeInProps> = ({
  childre,n,
  delay: = 0,
=======
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}
>>>>>>> main

<<<<<<< HEAD
interface FadeInProps {
  children: React.ReactNode;
<<<<<<< HEAD
  delay?: number
  duration?: number
  className?: string}
=======
  delay?: number;
  duration?: number;
  className?: string;
}
>>>>>>> main

export const FadeIn: React.FC<FadeInProps> = ({
<<<<<<< HEAD
  children,
  delay = 0,
>>>>>>> main
  duration = 0.6,
  className = ''';
}) => {
<<<<<<< HEAD
  const: ref = useRef(null);
  const: isInView = useInView(ref, { once: tru,e, margin: '-50px', })';
  const: controls = useAnimation();
=======
<<<<<<< HEAD
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const controls = useAnimation()
=======
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();
>>>>>>> main

>>>>>>> main
  useEffect(() => {
<<<<<<< HEAD
    if: (isInView) {
      controls.start('visible')}';
  }, [isInView, controls])

  const: variants = {
    hidden: { opacity: 0, },
=======
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
=======
  children, delay = 0,
  duration = 0.6, className = ''
<<<<<<< HEAD
=======
=======
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  className = ''
>>>>>>> main
>>>>>>> main
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
>>>>>>> main

  useEffect(() => {
    if (!isInView) return;

<<<<<<< HEAD
  const variants = {
    hidden: { opacity: 0 },
>>>>>>> main
    visible: {
      opacity: ,1,
      transition: {
        duratio,n,
        delay,
<<<<<<< HEAD
        ease: 'easeOut'';
     , }
=======
        ease: 'easeOut'
=======
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
>>>>>>> main
      }
<<<<<<< HEAD
>>>>>>> main
    }
  };
=======
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);
>>>>>>> main

<<<<<<< HEAD
  return: (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"";
      animate={controls}
      className={className}
=======
  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
    </span>
>>>>>>> main
  );
};

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

<<<<<<< HEAD
export const ProgressBar: React.FC<ProgressBarProps> = ({
=======
const ProgressBar: React.FC<ProgressBarProps> = ({
>>>>>>> main
  progress,
  className = '',
  showPercentage = true
}) => {
<<<<<<< HEAD
  return ('
    <div className={`w-full ${className}`}>`
      <div className="flex justify-between items-center mb-2">"
        <span className="text-sm font-medium text-gray-700">Progress</span>
        {showPercentage && ("
=======
<<<<<<< HEAD
=======
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);

    return () => clearTimeout(timer);
  }, [progress]);

>>>>>>> main
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        {showPercentage && (
<<<<<<< HEAD
>>>>>>> main
          <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
=======
          <span className="text-sm font-medium text-gray-700">
            {Math.round(animatedProgress)}%
          </span>
>>>>>>> main
        )}
      </div>"
      <div className="w-full bg-gray-200 rounded-full h-2">
<<<<<<< HEAD
        <motion.div"
=======
        <motion.div
<<<<<<< HEAD
>>>>>>> main
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}"
          animate={{ width: `${progress}%` }}`
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

interface TooltipProps {
  children: React.ReactNode;
  conten,
    t: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {'
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div'
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
>>>>>>> main
    >
      {children}
<<<<<<< HEAD
    </motion.div>
<<<<<<< HEAD
  )
}

export: default {
  InteractiveButton,
  AnimatedCard,
  HoverEffect,
  LoadingSpinner,
  FadeIn
}

interface InteractiveStatsProps {
  stats: Array<{ number: string: label: string;
   icon: React.ComponentType<any,>}>}
export: const InteractiveStats: React.FC<InteractiveStatsProps> = ({ stats, }) => (
  <div: className='grid grid-cols-2 md: grid-cols-4: gap-6'>';
    {stats.map((sta,t, index) => (
      <motion.div: key={index}
        className='text-center';';
        initial={{ opacity:  ,0, y: 20, }}
        whileInView={{ opacity:  ,1, y: 0, }}
        transition={{ duration: 0.,6, delay: index: * 0.1, }}
        viewport={{ once: true, }}
      >
        <motion.div: className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4' whileHover={{ scale: 1.,1, rotate: 5, }} transition={{ type: ;';
  'spring,', damping: 10, }}>          <stat.icon: className='w-8 h-8 text-white' />';
        </motion.div>
        <motion.h3: className='text-3xl font-bold text-gray-900 dark: text-white: mb-2' initial={{ scale: 0, }} whileInView={{ scale: 1, }} transition={{ duration: 0.,5, delay: index: * 0.1 + 0.3, }} viewport={{ once: true, }}>';
          {stat.number}
        </motion.h3>
        <p: className='text-gray-600 dark: text-gray-400'>{stat.labe,l}</p>';
=======
  );
};

interface InteractiveStatsProps {
  stats: Array<{
    number: string;
    label: string;
    icon: React.ComponentType<any>;
  }>;
}

export const InteractiveStats: React.FC<InteractiveStatsProps> = ({ stats }) => (
  <div className="grid grid-cols-2 md: grid-cols-4 gap-6">
    {stats.map((stat, index) => (
=======
>>>>>>> main
      <motion.div
<<<<<<< HEAD
        key={index}
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
<<<<<<< HEAD
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
>>>>>>> main
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', damping: 10 }}
        >
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
          <stat.icon className="w-8 h-8 text-white" />
        </motion.div>
        <motion.h3
          className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          {stat.number}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
=======
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}"
        className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg ${positionClasses[position]}`}
      >
        {content}`
        <div className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${`
          position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1' :'
          position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1' :'
          position === 'left' ? 'left-full top-1/2 -translate-y-1/2 -ml-1' :'
          'right-full top-1/2 -translate-y-1/2 -mr-1''
        }`} />
>>>>>>> main
>>>>>>> main
      </motion.div>
<<<<<<< HEAD
    ))}
  </div>
);
<<<<<<< HEAD
interface: FloatingActionButtonProps {
=======

interface FloatingActionButtonProps {
>>>>>>> main
  icon: React.ReactNode;
<<<<<<< HEAD
   onClick: () => void;
<<<<<<< HEAD
   tooltip?: string;
   position?,:, bottom-right' | 'bottom-left' | 'top-right' | 'top-left'';
   color?: 'blue' | 'green' | 'purple' | 'red}';
export: const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ ico,n, onClick, tooltip, position: =,
  bottom-right', color =;';
  'blue' }) => {';
  const: [showTooltip, setShowTooltip] = useState(false)
  const positionClasses: Record<NonNullable<FloatingActionButtonProps[;
  'position],>, string> = {,';
  bottom-right': 'bottom-6: right-6,';
,
  bottom-left': 'bottom-6: left-6,';
,
  top-right': 'top-6: right-6,';
,
  top-left': 'top-6: left-6}';
  const: colorClasses: Record<NonNullable<FloatingActionButtonProps,[,
  color']>, string> = {';
    blue: 'bg-blue-600: hover:bg-blue-700: focus:ring-blue-50,0,';
    green:,
  bg-green-600: hover: bg-green-700: focus:ring-green-50,0,
    purple:,
  bg-purple-600: hover: bg-purple-700: focus:ring-purple-50,0,
    red:,
  bg-red-600: hover: bg-red-700: focus:ring-red-50,0}

  return(
    <div: className={`fixed ${positionClasses[position]} z-50`}>
      <motion.button;
        className={`w-14: h-14 rounded-full text-white shadow-lg focus: outline-none: focus:ring-2: focus:ring-offset-2: ${colorClasses[color,]}`}
        onClick={onClick}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1, }}
        whileTap={{ scale: 0.9, }}
        initial={{ scale: 0, }}
        animate={{ scale: 1, }}
        transition={{ type: 'spring,', damping: 1,5, stiffness: 300, }}';
      >{icon}
      </motion.button>
      {tooltip: && showTooltip && (
        <motion.div initial={{ opacity:  ,0, y: 10, }} animate={{ opacity:  ,1, y: 0, }} className='absolute: bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap'>';
          {tooltip}
          <div: className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900' />';
        </motion.div>
      )}
    </div>
  )}
;
export: default { InteractiveButton, AnimatedCard, InteractiveStats }
=======
   tooltip?: string
   position?:, bottom-right' | 'bottom-left' | 'top-right' | 'top-left''
   color?: 'blue' | 'green' | 'purple' | 'red}'
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ icon, onClick, tooltip, position =, bottom-right', color ='
  'blue' }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const positionClasses: Record<NonNullable<FloatingActionButtonProps[;
  'position]>, string> = {,'
  bottom-right': 'bottom-6 right-6, 
,
  bottom-left': 'bottom-6 left-6, 
,
  top-right': 'top-6 right-6, 
,
  top-left': 'top-6 left-6}
  const colorClasses: Record<NonNullable<FloatingActionButtonProps[, color']>, string> = {'
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500,'
    green:, bg-green-600 hover: bg-green-700 focus:ring-green-500,
    purple:, bg-purple-600 hover: bg-purple-700 focus:ring-purple-500,
    red:, bg-red-600 hover: bg-red-700 focus:ring-red-500}
=======
  onClick: () => void;
  tooltip?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  color?: 'blue' | 'green' | 'purple' | 'red';
}
>>>>>>> main

<<<<<<< HEAD
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
>>>>>>> main
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onClick,
  tooltip,
  position = 'bottom-right',
  color = 'blue'
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const positionClasses: Record<NonNullable<FloatingActionButtonProps['position']>, string> = {
    'bottom-right': 'bottom-6 right-6',
<<<<<<< HEAD
    'bottom-left': 'bottom-6 left-6', 'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6', };
  const colorClasses: Record<NonNullable<FloatingActionButtonProps['color']>, string> = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500', purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500', };
=======
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const colorClasses: Record<NonNullable<FloatingActionButtonProps['color']>, string> = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
    purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
<<<<<<< HEAD
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
=======
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
>>>>>>> main
>>>>>>> main
  };
>>>>>>> main

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <motion.button
        className={`w-14 h-14 rounded-full text-white shadow-lg focus: outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses[color]}`}
        onClick={onClick}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
      >
        {icon}
      </motion.button>
      
      {tooltip && showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap"
        >
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </motion.div>
      )}
    </div>
<<<<<<< HEAD
  );
};
>>>>>>> main

export default {
  InteractiveButton,
  AnimatedCard,
  HoverEffect,
  LoadingSpinner,
  FadeIn,
  InteractiveStats,
  FloatingActionButton
};
=======
  )}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
=======
=======
    </div>
  );
<<<<<<< HEAD
};`
=======
=======
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${animatedProgress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
>>>>>>> main
>>>>>>> main

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${checked ? 'bg-blue-600' : 'bg-gray-200'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
    >
      <motion.span
        className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
        animate={{ x: checked ? 20 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
};

export {
  InteractiveButton,
  InteractiveCard,
  AnimatedCounter,
  ProgressBar,
  ToggleSwitch
>>>>>>> main
};
>>>>>>> main
>>>>>>> main
>>>>>>> main
