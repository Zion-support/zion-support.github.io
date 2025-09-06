
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
import { v4 as uuidv4 } from 'uuid'
 FeedbackWidgetProps) {  const [rating, setRating] = useState