
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
import React, { useState } from 'react'
import { motion } from 'framer-motion'
  placeholder = 'Search talent, skills, or jobs...'
export default function InteractiveSearch({ placeholder = 'Search talent, skills, or jobs...'
  const [value, setValue] = useState(''
        className='w-full rounded-md border border-gray-300 dark: any
          onClick={() => setValue(''
          className='absolute right-2 top-1/2 -translate-y-1/
          className='absolute right-2 top-1/2 -translate-y-1/
          className='absolute right - 2 top - 1/2 -translate - y-1 /