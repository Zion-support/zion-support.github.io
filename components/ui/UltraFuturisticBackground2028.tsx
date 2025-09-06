import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2028({ children }: UltraFuturisticBackground2028Props) {
  const canvasRef = null;
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative' style={{ zIndex: 10 }}>        {children}
      </div>

      {/* Bottom Glow */}      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>

      {/* Bottom Glow */}
      <div
        className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none'
        style={{ zIndex: 5 }}
      />
    </div>
  );      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}
