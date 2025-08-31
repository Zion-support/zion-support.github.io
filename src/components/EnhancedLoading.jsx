import { motion } from 'framer-motion';
const EnhancedLoading = ({ variant = 'spinner', size = 'md', text, className = '' }) => {
    const sizeClasses = {
  sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};
    const renderVariant = () => {
        switch (variant) {
            case 'dots':
                return renderDots();
            case 'pulse':
                return renderPulse();
            case 'bars':
                return renderBars();
            default:
                return renderSpinner()}
    };
    return (<div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderVariant()}
      {text && (<motion.p className="text-sm text-gray-400 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {text}
        </motion.p>)}
    </div>)};
export default EnhancedLoading;
</motion.div></motion.div></motion.div></motion.div>}