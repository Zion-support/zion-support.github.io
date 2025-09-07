delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({}
  children,'
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,

}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    margin: '-50px 0px'
  });

    }
  };

      case 'slideUp':
        return {}
          ...baseVariants,
          hidden: { opacity: 0, y: 50 },

      case 'slideDown':
        return {}
          ...baseVariants,
          hidden: { opacity: 0, y: -50 },

      case 'slideLeft':
        return {}
          ...baseVariants,
          hidden: { opacity: 0, x: 50 },

      case 'slideRight':
        return {}
          ...baseVariants,
          hidden: { opacity: 0, x: -50 },

      case 'scale':
        return {}
          ...baseVariants,
          hidden: { opacity: 0, scale: 0.8 },

      case 'rotate':
        return {}
          ...baseVariants,
          hidden: { opacity: 0, rotate: -180 },

        };
      default:
        return baseVariants;
    }
  };

    >
      {children}
    </motion.div>
  );
};