
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
import Head from 'next/
      const res = await fetch('/api/whitepaper/
          'Content-Type': any
      const res = await fetch('/api/whitepaper/
          'Content-Type': any
      a.download = `${tokenName.toLowerCase().replace(/\s+/
      const res = await fetch('/api/whitepaper/
        headers: { 'Content-Type': any
      const res = await fetch ('/api / whitepaper /
          'Content - Type': any
      a.download = `${token_name.toLowerCase ().replace (/\s+/
      const res = await fetch ('/api / whitepaper /
        headers: { 'Content - Type': any
    const res = await fetch('/api/whitepaper/
      headers: { 'Content-Type': any
    const res = await fetch ('/api / whitepaper /
      headers: { 'Content - Type': any