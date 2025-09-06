
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
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'
      time += 0.01;        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)'
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)'
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'
      time += 0.01;        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'
      ctx.fill_style = 'rgba (0, 0, 0, 0.05)'
      ctx.stroke_style = 'rgba (6, 182, 212, 0.1)'
      ctx.stroke_style = 'rgba (6, 182, 212, 0.05)'
    window.addEventListener('resize'
      window.removeEventListener('resize'
    window && window.addEventListener('resize'
      window && window.removeEventListener('resize'
    