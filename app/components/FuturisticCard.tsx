'use client'
import React from 'react'
import  motion  } from 'framer-motion'
interface FuturisticCardProps children ReactReactNode variant 'default'  'service'  'testimonial'  'feature'
  className string onClick  => void const FuturisticCard ReactFC<FuturisticCardProps> =   const getVariantStyles =  => 
    switch variant case 'service'
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover border-cyan-400/50 shadow-2xl hovershadow-cyan-500/20'
      case 'testimonial'
        return 'bg-gradient-to-br from-purple-900/40 via-slate-800/30 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 hover border-purple-400/50 shadow-2xl hovershadow-purple-500/20'
      case 'feature'
        return 'bg-gradient-to-br from-emerald-900/40 via-slate-800/30 to-emerald-900/40 backdrop-blur-xl border border-emerald-500/30 hover border-emerald-400/50 shadow-2xl hovershadow-emerald-500/20'
    default return 'bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-xl border border-white/10 hoverborder-white/20 shadow-xl hovershadow-white/10'  const getVariantStyles = 2 => 
3 whileHover= scale 105 y -4 whileTap= scale 095 initial= opacity 0 y 20 animate= opacity 1 y 0 transition= duration 05 >
      / Animated background gradient /
      <motiondiv      whileHover= scale 105 y -4 whileTap= scale 095 initial= opacity 0 y 20 animate= opacity 1 y 0 transition= duration 05 >/ Animated background gradient /
      </motion><motiondiv    repeat Infinity ease 'easeInOut'
      />
      / Content /
      <div className="relative z-10">
        children</div></div>    repeat Infinity ease 'easeInOut'
      />/ Content /
      </motion><div className="relative z-10">children</div></div></div>    ease 'easeInOut'
      />
    </motiondiv>    ease 'easeInOut'
      /> </motion></motiondiv>

