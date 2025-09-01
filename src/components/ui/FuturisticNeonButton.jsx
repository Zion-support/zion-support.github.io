import { motion } from 'framer-motion';
export const FuturisticNeonButton = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', disabled = false, className = '', fullWidth = false, icon, loading = false, glowIntensity = 'medium' }) => {
    const getVariantStyles = () => {
        const intensityMultiplier = {
  low: 0.3,
            medium: 0.5,
  high: 0.8
};
        const multiplier = intensityMultiplier[glowIntensity];
        const baseStyles = {
  primary: {
                bg: 'bg-zion-cyan/20',
                border: 'border-zion-cyan',
                text: 'text-zion-cyan',
                glow: `shadow-[0_0_20px_rgba(0,255,255,
  ${multiplier
})]`,
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
                bg: 'bg-emerald-500/20',
                border: 'border-emerald-500',
                text: 'text-emerald-500',
                glow: `shadow-[0_0_20px_rgba(16,185,129,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(16,185,129,${Math.min(multiplier + 0.3, 1)})]`
            },
            warning: {
                bg: 'bg-amber-500/20',
                border: 'border-amber-500',
                text: 'text-amber-500',
                glow: `shadow-[0_0_20px_rgba(245,158,11,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(245,158,11,${Math.min(multiplier + 0.3, 1)})]`
            },
            danger: {
                bg: 'bg-red-500/20',
                border: 'border-red-500',
                text: 'text-red-500',
                glow: `shadow-[0_0_20px_rgba(239,68,68,${multiplier})]`,
                hoverGlow: `hover:shadow-[0_0_30px_rgba(239,68,68,${Math.min(multiplier + 0.3, 1)})]`
        };
        return baseStyles[variant]};
    const getSizeStyles = () => {
        const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg'




}


}

}
}