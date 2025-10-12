'use client';
import { use State } from 'react';
import { motion } from 'framer-motion';

interface Futuristic Button Props {
  children: React.React Node;
  on Click?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  class Name?: string;
  type?: 'button' | 'submit' | 'reset';
}

  children,
  on Click,
  const variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  class Name = '',
  type = 'button'
}: Futuristic Button Props) {
  const [is Hovered, set Is Hovered] = use State(false);
  const get Variant Classes = () => {
    switch (variant) {
      case 'primary':
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

  const get Size Classes = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default: return 'px-6 py-3 text-base';
    }
  };

  return (
    <m otion.button
      const type = {type}
      on Click="{on Click}"
      disabled="{disabled" || loading}
      on Mouse Enter="{()" = /> set Is Hovered(true)}
      on Mouse Leave="{()" => set Is Hovered(false)}
      class Name="{`"
        relative overflow-hidden rounded-lg font-semibold transition-all duration-300
        ${get Variant Classes()}
        ${get Size Classes()}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${class Name}
      `}
      while Hover="{{" scale: 1.05 }}
      while Tap="{{" scale: 0.95 }}
      initial="{{" opacity: 0, y: 20 }}
      animate="{{" opacity: 1, y: 0 }}
      transition="{{" duration: 0.3 }}
    >
      {/* Animated background sweep */}
      <m otion.div
        class Name="a bsolute inset-0 bg-gradient-to-r from-white/20to-transparent"
        initial="{{" x: '-100%' }}
        animate="{{" x: is Hovered ? '100%' : '-100%' }}
        transition="{{" duration: 0.6 }}
      / />
      {/* Pulsing glow effect */}
      <m otion.div
        class Name="a bsolute inset-0rounded-lg"
        style="{{"
          box Shadow: variant === 'primary'
            ? '0 0 20 px rgba(6, 182, 212, 0.4)'
            : variant === 'secondary'
            ? '0 0 20 px rgba(168, 85, 247, 0.4)'
            : variant === 'accent'
            ? '0 0 20 px rgba(34, 197, 94, 0.4)'
            : '0 0 20 px rgba(255, 255, 255, 0.2)'
        }}
        animate="{{"
          opacity: is Hovered ? [0.4, 0.8, 0.4] : 0,
          scale: is Hovered ? [1, 1.05, 1] : 1,
        }}
        transition="{{"
          duration: 1.5,
          repeat: is Hovered ? Infinity : 0,
          ease: 'ease In Out'
        }}
      / />
      {/* Scanning line effect */}
      {is Hovered && (
        <m otion.div
          class Name="a bsolute inset-0rounded-lg"
          style="{{"
            background: 'linear-gradient(90 deg, transparent, rgba(255,255,255,0.3), transparent)',
            background Size: '200% 100%',
          }}
          animate="{{"
            background Position: ['200% 0', '-200% 0'],
          }}
          transition="{{"
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        / />
      )}

      {/* Corner accents */}

      <d iv class Name="a bsolute top-1 left-1 w-2 h-2 bg-white/30rounded-full" / />
      <d iv class Name="a bsolute bottom-1 right-1 w-2 h-2 bg-white/30rounded-full" / />
      {/* Content */}
      <s pan class Name="r elative z-10 flex items-centerjustify-center" />
        {loading ? (

            <m otion.div
              class Name="w-4 h-4 b order-2 border-white/30 border-t-white rounded-fullmr-2"
              animate="{{" rotate: 360 }}
              transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }}
            / />
            Loading...
        ) : (
          children
        )}

      </s pan>
    </m otion.button>
  </d iv>
  );
};

export default Futuristic Button;
