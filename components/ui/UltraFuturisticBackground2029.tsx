import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'energy' | 'data' | 'quantum' | 'neon';
  life: number;
  maxLife: number
}

interface EnergyField {
  x: number;
  y: number;
  radius: number;
  intensity: number;
  color: string;
  pulse: number
}

export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {
  const canvasRef = null;
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />

      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
  );      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
