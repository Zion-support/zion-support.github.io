
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
import { useParams  } from 'react-router-dom'
import { Header  } from '@/components/
import { Footer  } from '@/components/
import { SEO  } from '@/components/
import { Button  } from '@/components/ui/
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/
import { VideoCallRoom  } from '@/components/video/
import {VideoCallRoom} from '@/components / video /