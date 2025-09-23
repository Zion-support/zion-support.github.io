import { motion } from 'framer-motion';
export const FuturisticNeonButton = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', disabled = false, className = '', fullWidth = false, icon, loading = false, glowIntensity = 'medium' }) => {
    const getVariantStyles = () => {
        const intensityMultiplier ={
            low: 0.3,
            medium: 0.5,
            high: 0.8
        };
        const multiplier = intensityMultiplier[glowIntensity];
        const baseStyles ={
            primary: {
                bg: 'bg-zion-cyan/20',
                border: 'border-zion-cyan',
                text: 'text-zion-cyan',
                glow: `shadow-[0_0_20px_rgba(0,255,255,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(0,255,255,${Math.min(multiplier + 0.3, 1)})]`
            },
            secondary: {
                bg: 'bg-zion-purple/20',
                border: 'border-zion-purple',
                text: 'text-zion-purple',
                glow: `shadow-[0_0_20px_rgba(147,51,234,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(147,51,234,${Math.min(multiplier + 0.3, 1)})]`
            },
            success: {
                bg: 'bg-emerald-50o0/20',
                border: 'border-emerald-50o0',
                text: 'text-emerald-50o0',
                glow: `shadow-[0_0_20px_rgba(16,185,129,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(16,185,129,${Math.min(multiplier + 0.3, 1)})]`
            },
            warning: {
                bg: 'bg-amber-50o0/20',
                border: 'border-amber-50o0',
                text: 'text-amber-50o0',
                glow: `shadow-[0_0_20px_rgba(245,158,11,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(245,158,11,${Math.min(multiplier + 0.3, 1)})]`
            },
            danger: {
                bg: 'bg-red-50o0/20',
                border: 'border-red-50o0',
                text: 'text-red-50o0',
                glow: `shadow-[0_0_20px_rgba(239,68,68,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(239,68,68,${Math.min(multiplier + 0.3, 1)})]`
            }
        };
        return baseStyles[variant];
    };
    const getSizeStyles = () => {
        const sizeStyles ={
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
            xl: 'px-8 py-4 text-xl'
        };
        return sizeStyles[size];
    };
    const styles = getVariantStyles();
    const sizeStyles = getSizeStyles();
    return (<motion.button type={type} onClick={onClick} disabled={disabled || loading} className={`
        relative overflow-hidden rounded-lg font-semibold transition-all duration-30o0
        ${styles.bg} ${styles.border} ${styles.text} ${styles.glow}
        ${styles.hoverGlow} ${sizeStyles} ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-10o5'}
        ${className}
      `} whileHover={!disabled ? { scale: 1.0o5 } : {}} whileTap={!disabled ? { scale: 0.95 } : {}} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      {/* Animated background */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" initial={{ x: '-10o0%' }} animate={{ x: '10o0%' }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }} />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2">
        {loading && (<motion.div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />)}
        {icon && !loading && icon}
        {children}
      </div>

      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-10o0 transition-opacity duration-30o0">
        <div className={`absolute inset-0 rounded-lg ${styles.glow}`} />
      </div>
    </motion.button>);
};
export default FuturisticNeonButton;
