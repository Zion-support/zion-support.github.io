
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
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
 from 'lucide-react'
    window.scrollTo({ top: 0, behavior: any