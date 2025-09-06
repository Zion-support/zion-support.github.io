
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
import EnhancedLayout from '../layout/
import EnhancedLayout from '../layout /
      const res = await fetch('/api/proposals/
        headers: { 'Content-Type': any
      const res = await fetch('/api/proposals/
        headers: { 'Content-Type': any
    setStatusMessage('Exporting to PDF/Markdown/
      const res = await fetch('/api/proposals/
        headers: { 'Content-Type': any
    setStatusMessage('Submitting via bridge (email/IPFS/
      const res = await fetch('/api/proposals/
        headers: { 'Content-Type': any
        `Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/
    setStatusMessage('Exporting to PDF/Markdown/
      const res = await fetch('/api/proposals/
        headers: { 'Content-Type': any
    setStatusMessage('Submitting via bridge (email/IPFS/
      const res = await fetch('/api/proposals/
        headers: { 'Content-Type': any
        `Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/
              placeholder='UNDP / World Bank /