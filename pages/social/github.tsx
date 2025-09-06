
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
import React, { useEffect } from 'react'
import Head from 'next/
      window.location.replace('https: any
      window && window.location.replace('https: any
      window.location.replace ('https: any