
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface InteractiveButtonProps {

  children: React.ReactNode;

  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;


  className?: string}



  variant = 'primary',
  size = 'md',
  disabled = false,

  loading = false,

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg',


}) => {
  const [isHovered, setIsHovered] = useState(false);



  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'

  };

  const sizeClasses: Record<ButtonSize, string> = {'
    sm: 'px-3 py-1.5 text-sm',



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
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'}
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
        return 'px-4 py-2 text-base'}

  };



  return (
    <motion.button

    <motion.button;

        />

      )}
    </motion.button>

        animate={{ x: isHovered ? [ -100%;
  ', '100%;
  '] as any: '-100%, opacity: isHovered ? [0, 0.2, 0] as any : 0 }}        transition={{ duration: 0.6 }}
      />
      <div className='relative flex items-center gap-2'>
        {loading ? (
          <motion.div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full' animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear'
  ' }} />        ) : ('
          icon && <span className='flex-shrink-0'>{icon}</span>


        )}
        <span    />{children}</span>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;
    </motion.button>;
  )}
;


interface AnimatedCardProps {

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref { once: true, margin:
  '-100px' });
  const controls = useAnimation()}) => {

  const controls = useAnimation();



  useEffect(() => {

  }, [isInView, controls])

  const: variants = {
    hidden: { opacity: ,0, y: 50 },
    visible: {

      controls.start('visible')}
  }, [isInView, controls]);

  return: (
    <motion.div
      ref={ref}

      animate={controls}

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



export: const HoverEffect: React.FC<HoverEffectProps> = ({
  childre,n,
  className: = ''',;
  scale: = 1.05
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}



    >
      {children}
    </motion.div>
  )};

  size = 'md',
  color = 'primary'



}) => {

    lg: 'w-8 h-8'
  };

  const colorClasses = {'
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    white: 'border-white'
  };


  return (
    <motion.div'
      className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color]}`}
      animate={{ rotate: 360 }}`
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}

    />




export const FadeIn: React.FC<FadeInProps> = ({



  useEffect(() => {


}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref { once: true });


  useEffect(() => {
    if (!isInView) return}



  )};

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean}


  progress,
  className = '',
  showPercentage = true
}) => {

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        {showPercentage && (

        )}
      </div>"
      <div className="w-full bg-gray-200 rounded-full h-2">

          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}"
          animate={{ width: `${progress}%` }}`
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )};

interface TooltipProps {
  children: React.ReactNode;
  conten,
    t: string;
  position?: 'top' | 'bottom' | 'left' | 'right'}

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

    >
      {children}

      <motion.div

        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', damping: 10 }}
        >


          <stat.icon className="w-8 h-8 text-white" />
        </motion.div>
        <motion.h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }} viewport={{ once: true }}>
          {stat.number}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>


      </motion.div>

  icon: React.ReactNode;



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


  };


  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <motion.button
        className={`w-14 h-14 rounded-full text-white shadow-lg focus: outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses[color]}`}
        onClick={onClick}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        whileHover={{ "scale": 1.1 }}
        whileTap={{ "scale": 0.9 }}
        initial={{ "scale": 0 }}
        animate={{ "scale": 1 
}
        transition={{ "type":;
  'spring', "damping": 15, "stiffness": 300 ,'
=======
  icon: React.ReactNode;
   onClick: () => void;
   tooltip?: string;
   position?:, bottom-right' | 'bottom-left' | 'top-right' | 'top-left'';
   color?: 'blue' | 'green' | 'purple' | 'red';}
}
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps    /> = ({ icon, onClick, tooltip, position =, bottom-right', color =';}
  'blue'    }) => {


const [showTooltip, setShowTooltip] = useState(false);}
  const positionClasses: Record<NonNullable<FloatingActionButtonProps[;}
  'position]    />, string> = {, bottom-right': 'bottom-6 right-6,  , bottom-left': 'bottom-6 left-6,  , top-right': 'top-6 right-6,  , top-left': 'top-6 left-6}';

const colorClasses: Record<NonNullable<FloatingActionButtonProps[, color']    />, string> = {';}
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500, green:, bg-green-600 hover: bg-green-700 focus:ring-green-500, purple:, bg-purple-600 hover: bg-purple-700 focus:ring-purple-500, red:, bg-red-600 hover: bg-red-700 focus:ring-red-50}
}';
  return (<div className={`fixed ${positionClasses[position]} z-50`}    />

      <motion.button;
        className={`w-14 h-14 rounded-full text-white shadow-lg focus: outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses[color]}`}
        onClick={onClick}
        onHoverStart={() =    /> setShowTooltip(true)}
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



interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string}

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
  )};

export {
  InteractiveButton,
  InteractiveCard,
  AnimatedCounter,
  ProgressBar,
  ToggleSwitch

};



