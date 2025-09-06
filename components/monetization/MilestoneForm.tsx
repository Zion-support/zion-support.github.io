
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
  const [title, setTitle] = useState(''
  const [description, setDescription] = useState(''
  const [dueDate, setDueDate] = useState(''
  const [amountUsd, setAmountUsd] = useState<string>(''
      setError('Please provide Title, Due Date and a valid Amount.'
      setTitle(''
      setDescription(''
      setDueDate(''
      setAmountUsd(''
      setError(err?.message |'Failed to create milestone'
    
  const [amount_usd, setAmountUsd] = useState < string>(''
      set_error ('Please provide Title, Due Date and a valid Amount.'
      set_title (''
      set_description (''
      setDueDate (''
      setAmountUsd (''
      set_error (err?.message || 'Failed to create milestone'
    