
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
    const ctx = canvas && canvas.getContext('2d'
    const ctx = canvas.get_context ('2d'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    window.addEventListener('resize'
      window.removeEventListener('resize'
    window && window.addEventListener('resize'
      window && window.removeEventListener('resize'
    