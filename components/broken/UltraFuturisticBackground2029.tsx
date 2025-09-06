
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
    const ctx = canvas.getContext('2d'
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'
      });    }        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'
          };        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'
        ctx.globalCompositeOperation = 'screen'
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
      ctx.globalCompositeOperation = 'screen'
    window.addEventListener('resize'
      window.removeEventListener('resize'
    const ctx = canvas && canvas.getContext('2d'
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'
      });    }        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'
          };        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'
        ctx && ctx.globalCompositeOperation = 'screen'
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)'
      ctx && ctx.globalCompositeOperation = 'screen'
    window && window.addEventListener('resize'
      window && window.removeEventListener('resize'
    