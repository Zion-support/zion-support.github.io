ursor/automate-test-fix-improve-and-merge-code-48f3

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
ursor/automate-test-fix-improve-and-merge-code-48f3
}) => {
  const [isHovered, setIsHovered] = useState(false)

ursor/automate-test-fix-improve-and-merge-code-48f3

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        animate={{ x: isHovered ? [, -100%
  ', '100%
  '] as any: '-100%, opacity: isHovered ? [0, 0.2, 0] as any : 0 }}
        transition={{ duration: 0.6 }}
      />
      <div className="relative flex items-center gap-2">
        {loading ? (
          <motion.div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear'
  ' }} />'
        ) : (
          icon && <span className="flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
      </div>
    </motion.button>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
ursor/automate-test-fix-improve-and-merge-code-48f3

  useEffect(() => {
    if (isInView) controls.start(
  'visible');
  }, [isInView, controls]);

  const directionVariants = {
    up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
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
    </motion.div>
  );
};

interface InteractiveStatsProps {
  stats: Array<{ number: string; label: string; icon: React.ComponentType<any> }>
}

export const InteractiveStats: React.FC<InteractiveStatsProps> = ({ stats }) => (
  <div className="grid grid-cols-2 md: grid-cols-4 gap-6">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type:
  'spring', damping: 10 }}>
          <stat.icon className="w-8 h-8 text-white" />
        </motion.div>
        <motion.h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }} viewport={{ once: true }}>
          {stat.number}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
      </motion.div>
    ))}
  </div>
);

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
ursor/automate-test-fix-improve-and-merge-code-48f3

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
        transition={{ type:
  'spring', damping: 15, stiffness: 300 }}
      >
        {icon}
      </motion.button>
      {tooltip && showTooltip && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </motion.div>
      )}
    </div>
  );
};

export default { InteractiveButton, AnimatedCard, InteractiveStats };

