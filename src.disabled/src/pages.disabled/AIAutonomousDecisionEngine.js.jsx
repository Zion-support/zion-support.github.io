
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
import React from \'react\';\''\'; import { Helmet } from \'react-helmet-async\'
import _React from 'react';'''; import { Helmet } from 'react-helmet-async'