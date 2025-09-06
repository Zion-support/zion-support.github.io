
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
  const [input, setInput] = useState(''
      const resp = await fetch('/api/learn/
        headers: { 'Content-Type': any
      const resp = await fetch('/api/learn/
        headers: { 'Content-Type': any