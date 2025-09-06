
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
import React, { useMemo, useState } from 'react'
  method: any
  const [baseUrl, setBaseUrl] = useState('https: any
  const [baseUrl, setBaseUrl] = useState('https: any
  const [baseUrl, setBaseUrl] = useState('https: any
    return baseUrl && baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);    return baseUrl && baseUrl.replace(/\/$/
    return baseUrl && baseUrl.replace(/\/$/, '') + path;  }, [baseUrl, path]);    return baseUrl && baseUrl.replace(/\/$/
        'Content-Type': any
      const headers: Record<string, string> = { 'Content-Type': any
  const [base_url, setBaseUrl] = useState ('https: any
  const [base_url, setBaseUrl] = useState ('https: any
    return base_url.replace (/\/$/, '') + path;  }, [base_url, path]);    return base_url.replace (/\/$/
        'Content - Type': any