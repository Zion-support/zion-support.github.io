
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
import React, { useEffect, useState } from 'react'
import { MessageSquare, Video  } from 'lucide-react'
import { useMessaging  } from '@/context/
import { ProtectedRoute  } from '@/components/
import { ConversationsList, ConversationDetailView  } from '@/components/
import { useIsMobile  } from '@/hooks/
import { Button  } from '@/components/ui/
import {Button} from '@/components/ui/