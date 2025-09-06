
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
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/
import { TALENT_PROFILES } from '../data/
    const normalizedBudget = form.budget.replace(/[^0-9.\-]/
      const res = await fetch('/api/requests/
        headers: { 'Content-Type': any