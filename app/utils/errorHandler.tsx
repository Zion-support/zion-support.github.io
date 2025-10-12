import React from 'react';
'use client'
/**
 * Advanced Error Handler
 * Comprehensive error handling utilities for React applications
 */
 resetError: () => void }>
    onError?: (error: AppError) => void
  { hasError: boolean; error: AppError | null }
    super(props)
    this.state = { hasError: false, error: null }
  }
