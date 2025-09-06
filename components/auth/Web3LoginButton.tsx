
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
import React, { useEffect, useState } from 'react'
import dynamic from 'next/
const Web3LoginModal = dynamic() => import('./
;const Web3LoginModal = dynamic() => import('./
const Web3LoginModal = dynamic() => import('./
;const Web3LoginModal = dynamic() => import('./
      await fetch('/api/auth/
        