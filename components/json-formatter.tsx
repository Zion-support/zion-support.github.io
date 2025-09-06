
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
import Head from 'next/
import Card from '../components/ui/
import Button from '../components/ui/
import Head from 'next /
import Card from '../components / ui /
import Button from '../components / ui /
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui /
    const blob = new Blob([content], { type: any
    const blob = new Blob([content], { type: any
    const blob = new Blob([content], { type: any
    const blob = new Blob([content], { type: any