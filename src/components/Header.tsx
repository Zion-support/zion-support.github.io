
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
import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
    { name: 'Home', href: any
    { name: 'About', href: any
    { name: 'Services', href: any
    { name: 'Pricing', href: any
    { name: 'Contact', href: any