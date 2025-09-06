
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
import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/
      const nonceRes = await fetch('/api/auth/
import Head from 'next /
      const nonce_res = await fetch ('/api / auth /
      const res = await fetch('/api/did/
        headers: { 'Content-Type': any
      const res = await fetch ('/api / did /
        headers: { 'Content-Type': any
      const res = await fetch('/api/did/
        headers: { 'Content-Type': any
      const res = await fetch('/api/backup/
        headers: { 'Content-Type': any
      const res = await fetch ('/api / backup /
        headers: { 'Content - Type': any
      const res = await fetch('/api/backup/
        headers: { 'Content-Type': any