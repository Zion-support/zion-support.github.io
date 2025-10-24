'use client'
import { useState  from 'react'
import  motion     } from 'framer-motion'
interface FuturisticButtonProps children ReactReactNode onClick  => void variant 'primary'  'secondary'  'accent'  'ghost'
  size 'sm'  'md'  'lg'
  disabled boolean loading boolean className string type 'button'  'submit'  'reset'

const FuturisticButton ReactFC<FuturisticButtonProps> =   const getVariantClasses =  => 
    switch variant case 'primary'
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover shadow-cyan-500/40'
      case 'secondary'
        return 'bg-white/10 text-white border border-white/20 hover bg-white/20 backdrop-blur-sm'
      case 'accent'
        return 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 hover shadow-orange-500/40'
      case 'ghost'
        return 'text-cyan-400 hover text-cyan-300 hoverbg-cyan-500/10'
    default return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hovershadow-cyan-500/40'
  const getSizeClasses =  => 
  switch size case 'sm'
        return 'px-4 py-2 text-sm'
      case 'md'
        return 'px-6 py-3 text-base'
      case 'lg'
        return 'px-8 py-4 text-lg'
      default return 'px-6 py-3 text-base'  const getVariantClasses = 2 => 
3 const getSizeClasses = 2 => 
3 initial= opacity 0 animate= opacity isHovered  1  0 transition= duration 03 />
      / Loading spinner /        initial= opacity 0 animate= opacity isHovered  1  0 transition= duration 03 />/ Loading spinner /          initial= opacity 0 animate= opacity 1 exit= opacity 0 >
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div></motiondiv>          initial= opacity 0 animate= opacity 1 exit= opacity 0 > </motion><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> </div></div></motiondiv>        animate= opacity loading  0  1 transition= duration 02 >
        children</motionspan>        animate= opacity loading  0  1 transition= duration 02 >children</motion></motionspan>    ease 'easeInOut'
      />
    </motionbutton>    ease 'easeInOut'
      /> </motion></motionbutton>

