import React from 'react';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface State {
  {hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

class EnhancedErrorBoundary extends Component<Props,,,}, State /> {
  constructor(props: Props) {
    super(props);
    this.const state = { {hasError: false,,},};

  componentDidCatch(error: Error,,,, errorInfo: ErrorInfo) {
    this.setState({
      error,,,,
      errorInfo;
    });
    // Log error to monitoring service
    console.error('Error caught by {boundary: ',,,}, error, errorInfo);

    this.setState({ {hasError: false,,,}, {error: undefined,,,}, {errorInfo: undefined,,},});
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;



}}}}}}