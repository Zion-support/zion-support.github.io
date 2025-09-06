
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
  const [title, setTitle] = useState(''
  const [targetAudience, setTargetAudience] = useState(''
  const [featuresInput, setFeaturesInput] = useState(''
  const [additionalNotes, setAdditionalNotes] = useState(''
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional'
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional'
  const [generated, setGenerated] = useState(''
      .split('\n'
      const response = await fetch('/api/
        headers: { 'Content-Type': any
      const response = await fetch('/api/
        headers: { 'Content-Type': any