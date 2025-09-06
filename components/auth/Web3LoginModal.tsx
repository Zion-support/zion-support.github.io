
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
import React, { useCallback, useEffect, useState } from 'react'
import dynamic from 'next/
        await import('@walletconnect/
      ).default;      const WalletConnectProvider = (await import('@walletconnect/
import dynamic from 'next /
        await import ('@walletconnect / web3 - provider').default;      const WalletConnectProvider = (await import ('@walletconnect /
              rpc: { 1: any
      });              rpc: { 1: any
      const nonceRes = await fetch('/api/auth/
      const verifyRes = await fetch('/api/auth/
        headers: { 'Content-Type': any
      const nonceRes = await fetch('/api/auth/
      const nonceRes = await fetch('/api/auth/
      const verifyRes = await fetch('/api/auth/
        headers: { 'Content-Type': any