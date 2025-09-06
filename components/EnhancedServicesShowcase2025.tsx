
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
import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
 from 'react-icons/
 from 'react - icons /
            className='fixed inset-0 bg-black/
                      className='px-3 py-2 bg-white/
            className='fixed inset - 0 bg - black /
                      className='px - 3 py - 2 bg - white /