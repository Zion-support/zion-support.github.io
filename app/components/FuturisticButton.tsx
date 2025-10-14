import { useState } from 'react';
import { motion } from 'framer-motion';
'use client';

  children,
  onClick,
  const variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  type = 'button'
}: FuturisticButtonProps) {;
  const [isHovered, setIsHovered] = useState(false);
const getVariantClasses = () => {
    switch (variant) {
      case 'primary':;
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40';
      case 'accent':
        return 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40';
      case 'ghost':
        return 'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover: bg-white/20';,
  default: return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
    }
  };
  const getSizeClasses = () => {

            Loading...
          </>
        ) : (;
          children;
        )}
      </span>
    </motion.button>
  </div>);
}