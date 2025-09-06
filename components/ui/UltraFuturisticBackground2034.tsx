
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
    window.addEventListener('resize'
    const ctx = canvas && canvas.getContext('2d'
    window && window.addEventListener('resize'
    const ctx = canvas.get_context ('2d'
    window.addEventListener ('resize'
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)'
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)'
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
      window.removeEventListener('resize'
      gradient && gradient.addColorStop(0, 'rgba(0, 0, 0, 0 && 0.1)'
      gradient && gradient.addColorStop(1, 'rgba(0, 0, 0, 0 && 0.05)'
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)'
      window && window.removeEventListener('resize'
    