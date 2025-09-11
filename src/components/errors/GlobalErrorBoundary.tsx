<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertTriangle
  RefreshCw
  Home
  Bug
  Send
  Clipboard
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import * as Sentry from '@sentry/nextjs'
import {logErrorToProduction} from '@/utils/productionLogger';
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  Send,
<<<<<<< HEAD
<<<<<<< HEAD
  Clipboard,
  Clipboard,
  Clipboard,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import * as Sentry from '@sentry/nextjs'
import {logErrorToProduction} from '@/utils/productionLogger';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  Clipboard,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import * as Sentry from '@sentry / nextjs';
import { logErrorToProduction } from '@/utils / production_logger';
interface ErrorBoundaryState {
<<<<<<< HEAD
<<<<<<< HEAD
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string | null
  retryCount: number
  userFeedback: string
  showDetails: boolean
interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  enableRetry?: boolean
  Clipboard,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ErrorBoundaryState {;
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  userFeedback: string;
  showDetails: boolean;
}
;
interface ErrorBoundaryProps {;
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;
  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;  enableRetry?: boolean
  maxRetries?: number
  showReportButton?: boolean
  context?: string
}

=======
  has_error: boolean;
  error: Error | null;
  error_info: ErrorInfo | null;
  error_id: string | null;
  retry_count: number;
  user_feedback: string;
  show_details: boolean;
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;

  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;
  maxRetries?: number;

  showReportButton?: boolean;
  context?: string;  enable_retry?: boolean;
  max_retries?: number;
  showReportButton?: boolean;
  context?: string;
}

      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      userFeedback: '',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export class GlobalErrorBoundary extends Component<
  ErrorBoundaryProps
  ErrorBoundaryState
> {
  private retryTimeouts: NodeJS.Timeout[] = []
  constructor(props: ErrorBoundaryProps) {
    super(props)
export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeouts: NodeJS.Timeout[] = []
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false
      error: null
      errorInfo: null
      errorId: null
      retryCount: 0
      userFeedback: ''
      showDetails: false
    } }    ,}
<<<<<<< HEAD
=======
  has_error: boolean;
  error: Error | null;
  error_info: ErrorInfo | null;
  error_id: string | null;
  retry_count: number;
  user_feedback: string;
  show_details: boolean;
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;

  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;

  maxRetries?: number;

  showReportButton?: boolean;
  context?: string;  enable_retry?: boolean;
  max_retries?: number;
  showReportButton?: boolean;
  context?: string;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      userFeedback: '',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      showDetails: false
    }
  }
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
<<<<<<< HEAD
<<<<<<< HEAD
      hasError: true,
      error
'use client';
;
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, Send, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ErrorBoundaryState {;
  hasError:boolean;
  error:Error | null;
  errorInfo:ErrorInfo | null;
  errorId:string | null;
  retryCount:number;
  userFeedback:string;
  showDetails:boolean;
}
;
interface ErrorBoundaryProps {;
  children:ReactNode;
  fallback?:ReactNode;
  onError?:(error:Error, errorInfo:ErrorInfo) => void;
  enableRetry?:boolean;
  maxRetries?:number;
  showReportButton?:boolean;
  context?:string;
}
;
export class GlobalErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {;
  private retryTimeouts:NodeJS.Timeout[] = [];
;
  constructor(props:ErrorBoundaryProps) {;
    super(props);
;
    this.state = {;
      hasError:false,;
      error:null,;
      errorInfo:null,;
      errorId:null,;
      retryCount:0,;
      userFeedback:'',;
      showDetails:false;
    }
  }
;
  static getDerivedStateFromError(error:Error):Partial<ErrorBoundaryState> {;
    return {;
      hasError:true,;
      error;
    }
  }
;
  componentDidCatch(error:Error, errorInfo:ErrorInfo) {;
    const errorId = this.generateErrorId();
    ;
    // Enhanced error logging;
    const enhancedError = {;
      ...error,;
      componentStack:errorInfo.componentStack,;
      errorBoundary:this.props.context || 'GlobalErrorBoundary',;
      timestamp:new Date().toISOString(),;
      userAgent:typeof window !== 'undefined' ? navigator.userAgent :'SSR',;
      url:typeof window !== 'undefined' ? window.location.href :'SSR',;
      userId:this.getUserId(),;
      buildInfo:this.getBuildInfo();
    }
;
    // Log to console in development;
    if (process.env.NODE_ENV === 'development') {;
      console.group('🚨 Error Boundary Caught Error');
      logErrorToProduction('Error:', { data:error });
      logErrorToProduction('Error Info:', { data:errorInfo });
      logErrorToProduction('Enhanced Error:', { data:enhancedError });
      console.groupEnd();
    }
;
    // Report to Sentry;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundary', this.props.context || 'GlobalErrorBoundary');
      scope.setLevel('error');
      scope.setContext('errorInfo', {;
        componentStack:errorInfo.componentStack,;
        retryCount:this.state.retryCount;
      });
      ;
      Sentry.captureException(error);
    });
;
    // Custom error handler;
    if (this.props.onError) {;
      this.props.onError(error, errorInfo);
    }
;
    this.setState({;
      errorInfo,;
      errorId;
    });
  }
      hasError: true
=======

      hasError: true,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      hasError: true,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      error
    }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId()
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId()
    // Enhanced error logging
    const enhancedError = {
<<<<<<< HEAD
<<<<<<< HEAD
      ...error
    // Enhanced error logging
    const enhancedError = {
      ...error,      componentStack: errorInfo.componentStack,      ...error
      componentStack: errorInfo.componentStack
      errorBoundary: this.props.context |'GlobalErrorBoundary'
      timestamp: new Date().toISOString()
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
      url: typeof window !== 'undefined' ? window.location.href : 'SSR'
      userId: this.getUserId()
      buildInfo: this.getBuildInfo()
    }
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', { data: error })
      logErrorToProduction('Error Info:', { data: errorInfo })
      logErrorToProduction('Enhanced Error:', { data: enhancedError })
      console.groupEnd()
    }
    // Report to Sentry
    Sentry.withScope(scope => {
      scope.setTag(
        'errorBoundary'
        this.props.context |'GlobalErrorBoundary'
      )
        'errorBoundary'
        this.props.context |'GlobalErrorBoundary'
      )
        'errorBoundary',
        this.props.context || 'GlobalErrorBoundary';
      );
      scope.setLevel('error');      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack
        retryCount: this.state.retryCount
      })
      Sentry.captureException(error)
    })
    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ...error;
      componentStack: errorInfo.componentStack,
      errorBoundary: this.props.context || 'GlobalErrorBoundary',
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
      userId: this.getUserId(),
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      buildInfo: this.getBuildInfo()
export class GlobalErrorBoundary extends Component<;
  ErrorBoundaryProps,
  ErrorBoundaryState;
> {
  private retry_timeouts: NodeJS.Timeout[] = [];
  constructor (props: ErrorBoundaryProps) {
    super (props);
export class GlobalErrorBoundary extends Component < ErrorBoundaryProps, ErrorBoundaryState> {
  private retry_timeouts: NodeJS.Timeout[] = [];
  constructor (props: ErrorBoundaryProps) {
    super (props);
    this.state = {
      has_error: false,
      error: null,
      error_info: null,
      error_id: null,
      retry_count: 0,
      user_feedback: '',
      show_details: false,
    } }    , }
      show_details: false;
    }
<<<<<<< HEAD
=======
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', { data: error })
      logErrorToProduction('Error Info:', { data: errorInfo })
      logErrorToProduction('Enhanced Error:', { data: enhancedError })
      console.groupEnd()
    }
    // Report to Sentry
    Sentry.withScope(scope => {
      scope.setTag(
        'errorBoundary',
        this.props.context || 'GlobalErrorBoundary';
      );
      scope.setLevel('error');      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack
        retryCount: this.state.retryCount
      })
      Sentry.captureException(error)
    })
    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  static getDerivedStateFromError (error: Error): Partial < ErrorBoundaryState> {
    return {
      has_error: true,
      error,
    }
  }
  componentDidCatch (error: Error, error_info: ErrorInfo) {
    const error_id = this.generateErrorId ();
  }
  componentDidCatch (error: Error, error_info: ErrorInfo) {
    const error_id = this.generateErrorId ();
    // Enhanced error logging;
    const enhanced_error = {
      ...error,
    // Enhanced error logging;
    const enhanced_error = {
      ...error,      component_stack: error_info.component_stack,      ...error;
      component_stack: error_info.component_stack,
      error_boundary: this.props.context || 'GlobalErrorBoundary',
      timestamp: new Date ().toISOString (),
      user_agent: typeof window !== 'undefined' ? navigator.user_agent : 'SSR',
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
      user_id: this.getUserId (),
      build_info: this.getBuildInfo (),
    }
    // Log to console in development;
    // Check condition
if ( {) {
  $2
}
      console.group ('🚨 Error Boundary Caught Error');
      logErrorToProduction ('Error:', { data: error });
      logErrorToProduction ('Error Info:', { data: error_info });
      logErrorToProduction ('Enhanced Error:', { data: enhanced_error });
      console.group_end ();
    }
<<<<<<< HEAD
    })
;
  componentWillUnmount() {;
    // Clear any pending retry timeouts;
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
  }
;
  private generateErrorId():string {;
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
;
  private getUserId():string | null {;
    // Try to get user ID from various sources;
    if (typeof window !== 'undefined') {;
      try {;
        // Check localStorage, sessionStorage, or cookies;
        return localStorage.getItem('userId') || ;
               sessionStorage.getItem('userId') || ;
               null;
      } catch {;
        return null;
      }    }
    return null;
  }
  }
    }
    this.setState({
      errorInfo
      errorId
    }) }
  componentWillUnmount() {
    // Clear any pending retry timeouts
      errorInfo
      errorId
    })
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', { data: error })
      logErrorToProduction('Error Info:', { data: errorInfo })
      logErrorToProduction('Enhanced Error:', { data: enhancedError })
      console.groupEnd()
    }
    // Report to Sentry
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', this.props.context |'GlobalErrorBoundary')
      scope.setLevel('error')
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack
        retryCount: this.state.retryCount
      })
      Sentry.captureException(error)
    })
    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    this.setState({
      errorInfo
      errorId
    })
  }
  componentWillUnmount() {
    // Clear any pending retry timeouts
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    })
  }

  componentWillUnmount() {
    // Clear any pending retry timeouts

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }
  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` }    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }
  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  private getUserId(): string | null {
    // Try to get user ID from various sources
    if (typeof window !== 'undefined') {
      try {
        // Check localStorage, sessionStorage, or cookies
<<<<<<< HEAD
<<<<<<< HEAD
        return localStorage.getItem('userId') || 
               sessionStorage.getItem('userId') || 
               null
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        return localStorage.getItem('userId') || 
               sessionStorage.getItem('userId') || 
               null

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Report to Sentry;
    Sentry.with_scope (scope => {
      scope.set_tag (
        'error_boundary',
        this.props.context || 'GlobalErrorBoundary');
      scope.set_level ('error');      scope.set_context ('error_info', {
        component_stack: error_info.component_stack,
        retry_count: this.state.retry_count,
      });
      Sentry.capture_exception (error);
    });
    // Custom error handler;
    // Check condition
if ( {) {
  $2
}
      this.props.on_error (error, error_info);
    }
    this.set_state ({
      error_info,
      error_id,
    }) }
  componentWillUnmount () {
    // Clear any pending retry timeouts;
      error_info;
      error_id;
    });
    // Log to console in development;
    // Check condition
if ( {) {
  $2
}
      console.group ('🚨 Error Boundary Caught Error');
      logErrorToProduction ('Error:', { data: error });
      logErrorToProduction ('Error Info:', { data: error_info });
      logErrorToProduction ('Enhanced Error:', { data: enhanced_error });
      console.group_end ();
    }
    // Report to Sentry;
    Sentry.with_scope ((scope) => {
      scope.set_tag ('error_boundary', this.props.context || 'GlobalErrorBoundary');
      scope.set_level ('error');
      scope.set_context ('error_info', {
        component_stack: error_info.component_stack,
        retry_count: this.state.retry_count;
      });
      Sentry.capture_exception (error);
    });
    // Custom error handler;
    // Check condition
if ( {) {
  $2
}
      this.props.on_error (error, error_info);
    }
    this.set_state ({
      error_info;
      error_id;
    });
  }
  componentWillUnmount () {
    // Clear any pending retry timeouts;
    this.retry_timeouts.for_each (timeout => clear_timeout (timeout));
  }
  private generateErrorId (): string {
    return `err_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}` }    this.retry_timeouts.for_each (timeout => clear_timeout (timeout));
  }
  private generateErrorId (): string {
    return `err_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
  private getUserId (): string | null {
    // Try to get user ID from various sources;
    // Check condition
if ( {) {
  $2
}
      try {
        // Check local_storage, session_storage, or cookies;
        return (
          local_storage.get_item ('user_id') ||;
          session_storage.get_item ('user_id') ||;
          null);
      } catch {
        return null;
<<<<<<< HEAD
<<<<<<< HEAD
;
  private getBuildInfo() {;
    return {;
      version:process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',;
      environment:process.env.NODE_ENV,;
      buildTime:process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown';
    }
  }
;
  private getErrorSeverity(error:Error):'low' | 'medium' | 'high' | 'critical' {;
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';
;
    // Critical errors;
    if (message.includes('network') || message.includes('fetch')) {;
      return 'medium';
    }
    ;
    if (message.includes('chunk') || message.includes('loading')) {;
      return 'medium';
    }
;
    if (stack.includes('auth') || stack.includes('payment')) {;
      return 'critical';
    }
;
    if (stack.includes('database') || stack.includes('api')) {;
      return 'high';
    }
;
    return 'low';
  }
;
  private getErrorSuggestion(error:Error):string {;
    const message = error.message.toLowerCase();
;
    if (message.includes('network') || message.includes('fetch')) {;
      return 'Please check your internet connection and try again.';
    }
    ;
    if (message.includes('chunk')) {;
      return 'The application was updated. Please refresh the page.';
    }
;
    if (message.includes('permission') || message.includes('unauthorized')) {;
      return 'You may need to log in again or check your permissions.';
    }
;
    return 'This appears to be a temporary issue. Please try again.';
  }
;
  private retry = () => {;
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {;
      return;
    }
;
    const retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff;
;
    const timeout = setTimeout(() => {;
      this.setState({;
        hasError:false,;
        error:null,;
        errorInfo:null,;
        errorId:null,;
        retryCount:this.state.retryCount + 1,;
        showDetails:false;
      });
    }, retryDelay);
;
    this.retryTimeouts.push(timeout);
  }
;
  private copyErrorDetails = async () => {;
    const errorDetails = {;
      errorId:this.state.errorId,;
      message:this.state.error?.message,;
      stack:this.state.error?.stack,;
      componentStack:this.state.errorInfo?.componentStack,;
      timestamp:new Date().toISOString(),;
      url:typeof window !== 'undefined' ? window.location.href :'unknown',;
      userAgent:typeof window !== 'undefined' ? navigator.userAgent :'unknown';
    }
;
    try {;
      await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2));
      // Could show a toast notification here;
    } catch (err) {;
      logErrorToProduction('Failed to copy error details:', { data:err });
    }
  }
;
  private reportError = async () => {;
    if (!this.state.error || !this.state.errorId) return;
;
    try {;
      // Report to your error reporting service;
      const response = await fetch('/api/error-report', {;
        method:'POST',;
        headers:{;
          'Content-Type':'application/json';
        },;
        body:JSON.stringify({;
          errorId:this.state.errorId,;
          error:{;
            message:this.state.error.message,;
            stack:this.state.error.stack,;
            name:this.state.error.name;
          },;
          errorInfo:this.state.errorInfo,;
          userFeedback:this.state.userFeedback,;
          context:this.props.context,;
          timestamp:new Date().toISOString();
        });
      });
;
      if (response.ok) {;
        // Show success message;
      }
    } catch (err) {;
      logErrorToProduction('Failed to report error:', { data:err });
    }
    return null
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }


'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  AlertTriangle,;
  RefreshCw,;
  Home,;
  Bug,;
  Send,;
  Clipboard,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Sentry from '@sentry/nextjs';
import { logErrorToProduction } from '@/utils/productionLogger';

interface ErrorBoundaryState {;
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  userFeedback: string;
  showDetails: boolean;

interface ErrorBoundaryProps {;
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;
  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;  enableRetry?: boolean;
  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;
}

export class GlobalErrorBoundary extends Component<;
  ErrorBoundaryProps,;
  ErrorBoundaryState;
> {;
  private retryTimeouts: NodeJS && NodeJS.Timeout[] = [];

  constructor(props: ErrorBoundaryProps) {;
    super(props);
export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {;
  private retryTimeouts: NodeJS && NodeJS.Timeout[] = [];

  constructor(props: ErrorBoundaryProps) {;
    super(props);

    this && this.state = {;
      hasError: false,;
      error: null,;
      errorInfo: null,;
      errorId: null,;
      retryCount: 0,;
      userFeedback: '',;
      showDetails: false,;
    };  }    ,}
      showDetails: false;
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {;
    return {;
      hasError: true,;
      error,;
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    const errorId = this && this.generateErrorId();
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    const errorId = this && this.generateErrorId();

    // Enhanced error logging;
    const enhancedError = {;
      ...error,;
    // Enhanced error logging;
    const enhancedError = {;
      ...error,      componentStack: errorInfo && errorInfo.componentStack,      ...error;
      componentStack: errorInfo && errorInfo.componentStack,;
      errorBoundary: this && this.props.context || 'GlobalErrorBoundary',;
      timestamp: new Date().toISOString(),;
      userAgent: typeof window !== 'undefined' ? navigator && navigator.userAgent : 'SSR',;
      url: typeof window !== 'undefined' ? window && window.location.href : 'SSR',;
      userId: this && this.getUserId(),;
      buildInfo: this && this.getBuildInfo(),;
    };
    // Log to console in development;
    if (process && process.env.NODE_ENV === 'development') {;
      console && console.group('🚨 Error Boundary Caught Error');
      logErrorToProduction('Error:', { data: error });
      logErrorToProduction('Error Info:', { data: errorInfo });
      logErrorToProduction('Enhanced Error:', { data: enhancedError });
      console && console.groupEnd();
    }

    // Report to Sentry;
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag(;
        'errorBoundary',;
        this && this.props.context || 'GlobalErrorBoundary';
      );
      scope && scope.setLevel('error');      scope && scope.setContext('errorInfo', {;
        componentStack: errorInfo && errorInfo.componentStack,;
        retryCount: this && this.state.retryCount,;
      });

      Sentry && Sentry.captureException(error);
    });

    // Custom error handler;
    if (this && this.props.onError) {;
      this && this.props.onError(error, errorInfo);
    }

    this && this.setState({;
      errorInfo,;
      errorId,;
    });  }

  componentWillUnmount() {;
    // Clear any pending retry timeouts;
      errorInfo;
      errorId;
    });

    // Log to console in development;
    if (process && process.env.NODE_ENV === 'development') {;
      console && console.group('🚨 Error Boundary Caught Error');
      logErrorToProduction('Error:', { data: error });
      logErrorToProduction('Error Info:', { data: errorInfo });
      logErrorToProduction('Enhanced Error:', { data: enhancedError });
      console && console.groupEnd();
    }

    // Report to Sentry;
    Sentry && Sentry.withScope((scope) => {;
      scope && scope.setTag('errorBoundary', this && this.props.context || 'GlobalErrorBoundary');
      scope && scope.setLevel('error');
      scope && scope.setContext('errorInfo', {;
        componentStack: errorInfo && errorInfo.componentStack,;
        retryCount: this && this.state.retryCount;
      });

      Sentry && Sentry.captureException(error);
    });

    // Custom error handler;
    if (this && this.props.onError) {;
      this && this.props.onError(error, errorInfo);
    }

    this && this.setState({;
      errorInfo;
      errorId;
    });
  }

  componentWillUnmount() {;
    // Clear any pending retry timeouts;
    this && this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
  }

  private generateErrorId(): string {;
    return `err_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;  }    this && this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
  }

  private generateErrorId(): string {;
    return `err_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;

  private getUserId(): string | null {;
    // Try to get user ID from various sources;
    if (typeof window !== 'undefined') {;
      try {;
        // Check localStorage, sessionStorage, or cookies;
        return (
          localStorage && localStorage.getItem('userId') ||;
          sessionStorage && sessionStorage.getItem('userId') ||;
          null;
        );
      } catch {;
        return null;
      }
    }
    return null;  }      } catch {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return null;
      }
    }
    return null;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    return null
        return null;
      }
    }
    return null;

  }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  private getBuildInfo () {
    return {
      version: process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',
      environment: process.env.NODE_ENV,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return 'This appears to be a temporary issue. Please try again.'
      build_time: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',
    }
  }
  private getErrorSeverity (
    error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase ();
    const stack = error.stack?.toLowerCase () || '';
    // Critical errors;
    if (|| message.includes ('fetch')) {) {
  $2
}
      return 'medium';
    }
    if (|| message.includes ('loading')) {) {
  $2
}
      return 'medium';
    }
    if (|| stack.includes ('payment')) {) {
  $2
}
      return 'critical';
    }
    if (|| stack.includes ('api')) {) {
  $2
}
      return 'high';
    }
    return 'low';
  }
  private getErrorSuggestion (error: Error): string {
    const message = error.message.toLowerCase ();
    if (|| message.includes ('fetch')) {) {
  $2
}
      return 'Please check your internet connection and try again.';
    }
    if () {) {
  $2
}
      return 'The application was updated. Please refresh the page.';
    }
    if (|| message.includes ('unauthorized')) {) {
  $2
}
      return 'You may need to log in again or check your permissions.';
    }
    return 'This appears to be a temporary issue. Please try again.' }
  private retry = () => {
    if () {  }
) {
  $2
}
  private getErrorSeverity (error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase ();
    const stack = error.stack?.toLowerCase () || '';
    // Critical errors;
    if (|| message.includes ('fetch')) {) {
  $2
}
      return 'medium';
    }
    if (|| message.includes ('loading')) {) {
  $2
}
      return 'medium';
    }
    if (|| stack.includes ('payment')) {) {
  $2
}
      return 'critical';
    }
    if (|| stack.includes ('api')) {) {
  $2
}
      return 'high';
    }
    return 'low';
  }
  private getErrorSuggestion (error: Error): string {
    const message = error.message.toLowerCase ();
    if (|| message.includes ('fetch')) {) {
  $2
}
      return 'Please check your internet connection and try again.';
    }
    if () {) {
  $2
}
      return 'The application was updated. Please refresh the page.';
    }
    if (|| message.includes ('unauthorized')) {) {
  $2
}
      return 'You may need to log in again or check your permissions.';
    }
    return 'This appears to be a temporary issue. Please try again.';
<<<<<<< HEAD
<<<<<<< HEAD
  }
  private retry = () => {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
  private retry = () => {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const timeout = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: this.state.retryCount + 1,
<<<<<<< HEAD
<<<<<<< HEAD
        return (
          localStorage.getItem('userId') |
          sessionStorage.getItem('userId') |
          null
        )
      } catch {
        return null
      }
    }
    return null }      } catch {
        return null
      }
    }
    return null
  }
  private getBuildInfo() {
    return {
      version: process.env.NEXT_PUBLIC_APP_VERSION |'unknown'
      environment: process.env.NODE_ENV
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME |'unknown'
    }
  }
  private getErrorSeverity(
    error: Error
  ): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase()
    const stack = error.stack?.toLowerCase() |''
    // Critical errors
    if (message.includes('network') |message.includes('fetch')) {
      return 'medium'
    }
    if (message.includes('chunk') |message.includes('loading')) {
      return 'medium'
    }
    if (stack.includes('auth') |stack.includes('payment')) {
      return 'critical'
    }
    if (stack.includes('database') |stack.includes('api')) {
      return 'high'
    }
    return 'low'
  }
  private getErrorSuggestion(error: Error): string {
    const message = error.message.toLowerCase()
    if (message.includes('network') |message.includes('fetch')) {
      return 'Please check your internet connection and try again.'
    }
    if (message.includes('chunk')) {
      return 'The application was updated. Please refresh the page.'
    }
    if (message.includes('permission') |message.includes('unauthorized')) {
      return 'You may need to log in again or check your permissions.'
    }
    return 'This appears to be a temporary issue. Please try again.' }
  private retry = () => {
    if (this.state.retryCount >= (this.props.maxRetries |3)) {  }
  private getErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase()
    const stack = error.stack?.toLowerCase() |''
    // Critical errors
    if (message.includes('network') |message.includes('fetch')) {
      return 'medium'
    }
    if (message.includes('chunk') |message.includes('loading')) {
      return 'medium'
    }
    if (stack.includes('auth') |stack.includes('payment')) {
      return 'critical'
    }
    if (stack.includes('database') |stack.includes('api')) {
      return 'high'
    }
    return 'low'
  }
  private getErrorSuggestion(error: Error): string {
    const message = error.message.toLowerCase()
    if (message.includes('network') |message.includes('fetch')) {
      return 'Please check your internet connection and try again.'
    }
    if (message.includes('chunk')) {
      return 'The application was updated. Please refresh the page.'
    }
    if (message.includes('permission') |message.includes('unauthorized')) {
      return 'You may need to log in again or check your permissions.'
    }
    return 'This appears to be a temporary issue. Please try again.'
  }
  private retry = () => {
    if (this.state.retryCount >= (this.props.maxRetries |3)) {
      return
    }
    const retryDelay = Math.pow(2, this.state.retryCount) * 1000; // Exponential backoff
      return
    }
    const retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff
    const timeout = setTimeout(() => {      this.setState({
        hasError: false
        error: null
        errorInfo: null
        errorId: null
        retryCount: this.state.retryCount + 1
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        showDetails: false
      })
    }, retryDelay)
    this.retryTimeouts.push(timeout)
  };        showDetails: false
      })
    }, retryDelay)
    this.retryTimeouts.push(timeout)
    if () {) {
  $2
}
      return;
    }
    const retry_delay = Math.pow (2, this.state.retry_count) * 1000; // Exponential backoff;
      return;
    }
    const retry_delay = Math.pow (2, this.state.retry_count) * 1000 // Exponential backoff;
    const timeout = set_timeout (() => {      this.set_state ({
        has_error: false,
        error: null,
        error_info: null,
        error_id: null,
        retry_count: this.state.retry_count + 1,
        show_details: false,
      });
    }, retry_delay);
    this.retry_timeouts.push (timeout);
  }        show_details: false;
      });
    }, retry_delay);
    this.retry_timeouts.push (timeout);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const error_details = {
      error_id: this.state.error_id,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      component_stack: this.state.error_info?.component_stack,
      timestamp: new Date ().toISOString (),
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      user_agent:;
        typeof window !== 'undefined' ? navigator.user_agent : 'unknown',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    try {
      await navigator.clipboard.write_text (
        JSON.stringify (error_details, null, 2));
      // Could show a toast notification here;
    } catch (err) {
      logErrorToProduction ('Failed to copy error details:', { data: err });
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  private copyErrorDetails = async () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown'
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  private report_error = async () => {
    // Check condition
if (return) {
  $2
}
    // Check condition
if (return) {
  $2
}
    try {
      await navigator.clipboard.write_text (JSON.stringify (error_details, null, 2));
      // Could show a toast notification here;
    } catch (err) {
      logErrorToProduction ('Failed to copy error details:', { data: err });
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
    if (!this.state.error || !this.state.errorId) return
  }
  private copyErrorDetails = async () => {
    const errorDetails = {
      errorId: this.state.errorId
      message: this.state.error?.message
      stack: this.state.error?.stack
      componentStack: this.state.errorInfo?.componentStack
      timestamp: new Date().toISOString()
      url: typeof window !== 'undefined' ? window.location.href : 'unknown'
      userAgent:
        typeof window !== 'undefined' ? navigator.userAgent : 'unknown'
    }
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(errorDetails, null, 2)
      )
      // Could show a toast notification here
    } catch (err) {
      logErrorToProduction('Failed to copy error details:', { data: err })
    }
  }
  private reportError = async () => {
    if (!this.state.error |!this.state.errorId) return
    if (!this.state.error |!this.state.errorId) return
    try {
      await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      // Could show a toast notification here
    } catch (err) {
      logErrorToProduction('Failed to copy error details:', { data: err })
    }
  }
  private reportError = async () => {
    if (!this.state.error |!this.state.errorId) return
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    if (!this.state.error || !this.state.errorId) return


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      // Report to your error reporting service
      const response = await fetch('/api/error-report', {
        method: 'POST'
        headers: {
<<<<<<< HEAD
<<<<<<< HEAD
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          'Content-Type': 'application/json'
        }
          errorId: this.state.errorId
          error: {
            message: this.state.error.message
            stack: this.state.error.stack
            name: this.state.error.name
          }
          errorInfo: this.state.errorInfo
          userFeedback: this.state.userFeedback
          context: this.props.context
          timestamp: new Date().toISOString()
        })
      });          timestamp: new Date().toISOString()
        })
      })
<<<<<<< HEAD
<<<<<<< HEAD
      if (response.ok) {
        // Show success message
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  Send,
  Clipboard,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ErrorBoundaryState {;
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  userFeedback: string;
  showDetails: boolean;
}
;
interface ErrorBoundaryProps {;
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;
  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;
}
;
export class GlobalErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {;
  private retryTimeouts: NodeJS.Timeout[] = [];
  constructor(props: ErrorBoundaryProps) {;
    super(props);
    this.state = {;
      hasError: false,;
      error: null,;
      errorInfo: null,;
      errorId: null,;
      retryCount: 0,;
      userFeedback: '',;
      showDetails: false;
    }
  }
;
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {;
    return {;
      hasError: true,;
      error;
    }
  }
;
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    const errorId = this.generateErrorId();
    // Enhanced error logging;
    const enhancedError = {;
      ...error,;
      componentStack: errorInfo.componentStack,;
      errorBoundary: this.props.context || 'GlobalErrorBoundary',;
      timestamp: new Date().toISOString(),;
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',;
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',;
      userId: this.getUserId(),;
      buildInfo: this.getBuildInfo();
    }
;
    // Log to console in development;
    if (process.env.NODE_ENV === 'development') {;
      console.group('🚨 Error Boundary Caught Error');
      logErrorToProduction('Error:', { data: error });
      logErrorToProduction('Error Info:', { data: errorInfo });
      logErrorToProduction('Enhanced Error:', { data: enhancedError });
      console.groupEnd();
    }
;
    // Report to Sentry;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundary', this.props.context || 'GlobalErrorBoundary');
      scope.setLevel('error');
      scope.setContext('errorInfo', {;
        componentStack: errorInfo.componentStack,;
        retryCount: this.state.retryCount;
      });
      Sentry.captureException(error);
    });
    // Custom error handler;
    if (this.props.onError) {;
      this.props.onError(error, errorInfo);
    }

    this.setState({
      errorInfo,
      errorId,
    }) }

  componentWillUnmount() {
    // Clear any pending retry timeouts
      errorInfo
      errorId
    })

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', { data: error })
      logErrorToProduction('Error Info:', { data: errorInfo })
      logErrorToProduction('Enhanced Error:', { data: enhancedError })
      console.groupEnd()
    }

    // Report to Sentry
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', this.props.context || 'GlobalErrorBoundary')
      scope.setLevel('error')
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack,
        retryCount: this.state.retryCount
      })
      
      Sentry.captureException(error)
    })

    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    this.setState({
      errorInfo
      errorId
    })
  }

  componentWillUnmount() {
    // Clear any pending retry timeouts
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` }    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  private getUserId(): string | null {
    // Try to get user ID from various sources
    if (typeof window !== 'undefined') {
      try {
        // Check localStorage, sessionStorage, or cookies
        return (
          localStorage.getItem('userId') ||
          sessionStorage.getItem('userId') ||
          null
        )
      } catch {
        return null
      }
    }
    return null }      } catch {
        return null
      }
    }
    return null
  }

  private getBuildInfo() {
    return {
      version: process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',
      environment: process.env.NODE_ENV,
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',
    }
  }

  private getErrorSeverity(
    error: Error
  ): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase()
    const stack = error.stack?.toLowerCase() || ''
    // Critical errors
    if (message.includes('network') || message.includes('fetch')) {
      return 'medium'
    }

    if (message.includes('chunk') || message.includes('loading')) {
      return 'medium'
    }

    if (stack.includes('auth') || stack.includes('payment')) {
      return 'critical'
    }

    if (stack.includes('database') || stack.includes('api')) {
      return 'high'
    }

    return 'low'
  }

  private getErrorSuggestion(error: Error): string {
    const message = error.message.toLowerCase()
    if (message.includes('network') || message.includes('fetch')) {
      return 'Please check your internet connection and try again.'
    }

    if (message.includes('chunk')) {
      return 'The application was updated. Please refresh the page.'
    }

    if (message.includes('permission') || message.includes('unauthorized')) {
      return 'You may need to log in again or check your permissions.'
    }

    return 'This appears to be a temporary issue. Please try again.' }

  private retry = () => {
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {  }

  private getErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase()
    const stack = error.stack?.toLowerCase() || ''

    // Critical errors
    if (message.includes('network') || message.includes('fetch')) {
      return 'medium'
    }
    
    if (message.includes('chunk') || message.includes('loading')) {
      return 'medium'
    }

    if (stack.includes('auth') || stack.includes('payment')) {
      return 'critical'
    }

    if (stack.includes('database') || stack.includes('api')) {
      return 'high'
    }

    return 'low'
  }

  private getErrorSuggestion(error: Error): string {
    const message = error.message.toLowerCase()

    if (message.includes('network') || message.includes('fetch')) {
      return 'Please check your internet connection and try again.'
    }
    
    if (message.includes('chunk')) {
      return 'The application was updated. Please refresh the page.'
    }

    if (message.includes('permission') || message.includes('unauthorized')) {
      return 'You may need to log in again or check your permissions.'
    }

    return 'This appears to be a temporary issue. Please try again.'
  }

  private retry = () => {
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {
      return;
    }

    const retryDelay = Math.pow(2, this.state.retryCount) * 1000; // Exponential backoff
      return;
    }

    const retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff
    const timeout = setTimeout(() => {      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: this.state.retryCount + 1,
        showDetails: false,
      })
    }, retryDelay)
    this.retryTimeouts.push(timeout)
  };        showDetails: false
      })
    }, retryDelay)

    this.retryTimeouts.push(timeout)
  }
  private copyErrorDetails = async () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      userAgent:
        typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
    }
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (response.ok) {
        // Show success message
  private report_error = async () => {
    // Check condition
if (return) {
  $2
}
    try {
      // Report to your error reporting service;
      const response = await fetch ('/api / error - report', {
        method: 'POST',
        headers: {
          'Content - Type': 'application / json',
        },
          error_id: this.state.error_id,
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(errorDetails, null, 2)
      )
      // Could show a toast notification here
    } catch (err) {
      logErrorToProduction('Failed to copy error details:', { data: err })
    }
  }
  private reportError = async () => {
    if (!this.state.error || !this.state.errorId) return;
    if (!this.state.error || !this.state.errorId) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      // Could show a toast notification here
    } catch (err) {
      logErrorToProduction('Failed to copy error details:', { data: err })
    }
  }

  private reportError = async () => {
    if (!this.state.error || !this.state.errorId) return;
    try {
      // Report to your error reporting service
      const response = await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          errorId: this.state.errorId,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          error: {
            message: this.state.error.message,
            stack: this.state.error.stack,
            name: this.state.error.name,
          },
<<<<<<< HEAD
<<<<<<< HEAD
          errorInfo: this.state.errorInfo,
          userFeedback: this.state.userFeedback,
          context: this.props.context,
          timestamp: new Date().toISOString(),
        }),
      });          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        // Show success message
      }
    } catch (err) {
      logErrorToProduction('Failed to report error:', { data: err })
    }    }
  }
    });  }

  componentWillUnmount() {
    // Clear any pending retry timeouts

  }

  componentWillUnmount() {
    // Clear any pending retry timeouts

  }
;
  private generateErrorId(): string {;
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
;
  private getUserId(): string | null {;
    // Try to get user ID from various sources;
    if (typeof window !== 'undefined') {;
      try {;
        // Check localStorage, sessionStorage, or cookies;
        return localStorage.getItem('userId') ||;
               sessionStorage.getItem('userId') ||;
               null;
      } catch {;
        return null;
      }
    }
    return null;
  }
;
  private getBuildInfo() {;
    return {;
      version: process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',;
      environment: process.env.NODE_ENV,;
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown';
    }
    return null;  }

  }
;
  private getErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {;
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';
    // Critical errors;
    if (message.includes('network') || message.includes('fetch')) {;
      return 'medium';
    }
;
    if (message.includes('chunk') || message.includes('loading')) {;
      return 'medium';
    }

    if (stack.includes('auth') || stack.includes('payment')) {
      return 'critical';
    }

    if (stack.includes('database') || stack.includes('api')) {
      return 'high';
    }

    return 'low';
  }
;
  private getErrorSuggestion(error: Error): string {;
    const message = error.message.toLowerCase();
    if (message.includes('network') || message.includes('fetch')) {;
      return 'Please check your internet connection and try again.';
    }
;
    if (message.includes('chunk')) {;
      return 'The application was updated. Please refresh the page.';
    }

    if (message.includes('permission') || message.includes('unauthorized')) {
      return 'You may need to log in again or check your permissions.';
    }

    return 'This appears to be a temporary issue. Please try again.';  }

  private retry = () => {
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {

  }
;
  private retry = () => {;
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {;
      return;
    }
;
    const retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff;
    const timeout = setTimeout(() => {;
      this.setState({;
        hasError: false,;
        error: null,;
        errorInfo: null,;
        errorId: null,;
        retryCount: this.state.retryCount + 1,;
        showDetails: false;
      });
    }, retryDelay);
    this.retryTimeouts.push(timeout);
  }
;
  private copyErrorDetails = async () => {;
    const errorDetails = {;
      errorId: this.state.errorId,;
      message: this.state.error?.message,;
      stack: this.state.error?.stack,;
      componentStack: this.state.errorInfo?.componentStack,;
      timestamp: new Date().toISOString(),;
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',;
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown';
    }
;
    try {;
      await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2));
      // Could show a toast notification here;
    } catch (err) {;
      logErrorToProduction('Failed to copy error details:', { data: err });
    }
  }
;
  private reportError = async () => {;
    if (!this.state.error || !this.state.errorId) return;
    try {;
      // Report to your error reporting service;
      const response = await fetch('/api/error-report', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/json';
        },;
        body: JSON.stringify({;
          errorId: this.state.errorId,;
          error: {;
            message: this.state.error.message,;
            stack: this.state.error.stack,;
            name: this.state.error.name;
          },;
          errorInfo: this.state.errorInfo,;
          userFeedback: this.state.userFeedback,;
          context: this.props.context;
          timestamp: new Date().toISOString();
        });
      });
      if (response.ok) {;
        // Show success message;
      }
    } catch (err) {;
      logErrorToProduction('Failed to report error:', { data: err });
    }
  }

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          error_info: this.state.error_info,
          user_feedback: this.state.user_feedback,
          context: this.props.context,
          timestamp: new Date ().toISOString (),
        }),
      });          timestamp: new Date ().toISOString ();
        });
      });
      // Check condition
if ( {) {
  $2
}
        // Show success message;
      }
    } catch (err) {
      logErrorToProduction ('Failed to report error:', { data: err });
    }    }
  }



    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    this.setState({
      errorInfo,
      errorId,




<<<<<<< HEAD
<<<<<<< HEAD
  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }

  };
ursor/fix-website-loading-errors-and-merge-6662
  private goHome = () => {
      window.location.href = '/'
    }
  }




=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  } }
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
<<<<<<< HEAD
<<<<<<< HEAD
        return this.props.fallback
        return this.props.fallback
      }
      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)
      const canRetry =
        this.props.enableRetry !== false &&
        this.state.retryCount < (this.props.maxRetries |3)
      return (
        <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20'>          <motion.div      }
      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)
      const canRetry = this.props.enableRetry !== false &&
                       this.state.retryCount < (this.props.maxRetries |3)
      return (
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return this.props.fallback;

        return this.props.fallback;

=======
<<<<<<< HEAD


        return this.props.fallback;

=======
=======
        return this.props.fallback;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  private getBuildInfo() {;
    return {;
      version: process && process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',;
      environment: process && process.env.NODE_ENV,;
      buildTime: process && process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',;
    };
  }




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }

      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)
<<<<<<< HEAD
<<<<<<< HEAD
      const canRetry = null;
        this.props.enableRetry !== false &&
        this.state.retryCount < (this.props.maxRetries || 3)
      return (
        <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20'>          <motion.div      }

      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)
  private getBuildInfo() {;
    return {;
      version: process && process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',;
      environment: process && process.env.NODE_ENV,;
      buildTime: process && process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',;
    };
  }
  private getErrorSeverity(;
    error: Error;
  ): 'low' | 'medium' | 'high' | 'critical' {;
    const message = error && error.message.toLowerCase();
    const stack = error && error.stack?.toLowerCase() || '';
    // Critical errors;
    if (message && message.includes('network') || message && message.includes('fetch')) {;
      return 'medium';
    }
    if (message && message.includes('chunk') || message && message.includes('loading')) {;
      return 'medium';
    }
    if (stack && stack.includes('auth') || stack && stack.includes('payment')) {;
      return 'critical';
    }
    if (stack && stack.includes('database') || stack && stack.includes('api')) {;
      return 'high';
    }
    return 'low';
  }
  private getErrorSuggestion(error: Error): string {;
    const message = error && error.message.toLowerCase();
    if (message && message.includes('network') || message && message.includes('fetch')) {;
      return 'Please check your internet connection and try again.';
    }
    if (message && message.includes('chunk')) {;
      return 'The application was updated. Please refresh the page.';
    }
    if (message && message.includes('permission') || message && message.includes('unauthorized')) {;
      return 'You may need to log in again or check your permissions.';
    }
    return 'This appears to be a temporary issue. Please try again.';  }
  private retry = () => {;
    if (this && this.state.retryCount >= (this && this.props.maxRetries || 3)) {  }
  private getErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {;
    const message = error && error.message.toLowerCase();
    const stack = error && error.stack?.toLowerCase() || '';
    // Critical errors;
    if (message && message.includes('network') || message && message.includes('fetch')) {;
      return 'medium';
    }
    if (message && message.includes('chunk') || message && message.includes('loading')) {;
      return 'medium';
    }
    if (stack && stack.includes('auth') || stack && stack.includes('payment')) {;
      return 'critical';
    }
    if (stack && stack.includes('database') || stack && stack.includes('api')) {;
      return 'high';
    }
    return 'low';
  }
  private getErrorSuggestion(error: Error): string {;
    const message = error && error.message.toLowerCase();
    if (message && message.includes('network') || message && message.includes('fetch')) {;
      return 'Please check your internet connection and try again.';
    }
    if (message && message.includes('chunk')) {;
      return 'The application was updated. Please refresh the page.';
    }
    if (message && message.includes('permission') || message && message.includes('unauthorized')) {;
      return 'You may need to log in again or check your permissions.';
    }
    return 'This appears to be a temporary issue. Please try again.';
  }
  private retry = () => {;
    if (this && this.state.retryCount >= (this && this.props.maxRetries || 3)) {;
      return;
    }
    const retryDelay = Math && Math.pow(2, this && this.state.retryCount) * 1000; // Exponential backoff;
      return;
    }
    const retryDelay = Math && Math.pow(2, this && this.state.retryCount) * 1000 // Exponential backoff;
    const timeout = setTimeout(() => {      this && this.setState({;
        hasError: false,;
        error: null,;
        errorInfo: null,;
        errorId: null,;
        retryCount: this && this.state.retryCount + 1,;
        showDetails: false,;
      });
    }, retryDelay);
    this && this.retryTimeouts.push(timeout);
  };        showDetails: false;
      });
    }, retryDelay);
    this && this.retryTimeouts.push(timeout);
  }
  private copyErrorDetails = async () => {;
    const errorDetails = {;
      errorId: this && this.state.errorId,;
      message: this && this.state.error?.message,;
      stack: this && this.state.error?.stack,;
      componentStack: this && this.state.errorInfo?.componentStack,;
      timestamp: new Date().toISOString(),;
      url: typeof window !== 'undefined' ? window && window.location.href : 'unknown',;
      userAgent:;
        typeof window !== 'undefined' ? navigator && navigator.userAgent : 'unknown',;
    };
    try {;
      await navigator && navigator.clipboard.writeText(;
        JSON && JSON.stringify(errorDetails, null, 2);
      );
      // Could show a toast notification here;
    } catch (err) {;
      logErrorToProduction('Failed to copy error details:', { data: err });
    }
  };
  private reportError = async () => {;
    if (!this && this.state.error || !this && this.state.errorId) return;
    if (!this && this.state.error || !this && this.state.errorId) return;
    try {;
      await navigator && navigator.clipboard.writeText(JSON && JSON.stringify(errorDetails, null, 2));
      // Could show a toast notification here;
    } catch (err) {;
      logErrorToProduction('Failed to copy error details:', { data: err });
    }
  }
  private reportError = async () => {;
    if (!this && this.state.error || !this && this.state.errorId) return;
    try {;
      // Report to your error reporting service;
      const response = await fetch('/api/error-report', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/json',;
        },;
          errorId: this && this.state.errorId,;
          error: {;
            message: this && this.state.error && error.message,;
            stack: this && this.state.error && error.stack,;
            name: this && this.state.error && error.name,;
          },;
          errorInfo: this && this.state.errorInfo,;
          userFeedback: this && this.state.userFeedback,;
          context: this && this.props.context,;
          timestamp: new Date().toISOString(),;
        }),;
      });          timestamp: new Date().toISOString();
        });
      });
      if (response && response.ok) {;
        // Show success message;
      }
    } catch (err) {;
      logErrorToProduction('Failed to report error:', { data: err });
    }    }
  }
  private goHome = () => {;
    if (typeof window !== 'undefined') {;
      window && window.location.href = '/';
    }
  };
  private goHome = () => {;
    if (typeof window !== 'undefined') {;
      window && window.location.href = '/';
    }
  };  }
  render() {;
    if (this && this.state.hasError && this && this.state.error) {;
      // Use custom fallback if provided;
      if (this && this.props.fallback) {;
        return this && this.props.fallback;
      }
      const severity = this && this.getErrorSeverity(this && this.state.error);
      const suggestion = this && this.getErrorSuggestion(this && this.state.error);
      const canRetry =;
        this && this.props.enableRetry !== false &&;
        this && this.state.retryCount < (this && this.props.maxRetries || 3);
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const canRetry = this.props.enableRetry !== false && 
                       this.state.retryCount < (this.props.maxRetries || 3)

      return (
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            transition={{ duration: 0.3 }}
          >


            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />



                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900'>
              <CardHeader className='text-center'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20'>
                  <AlertTriangle className='h-8 w-8 text-red-600 dark:text-red-400' />
            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='flex items-center justify-center gap-2 mt-2'>
                  <Badge
                    variant={
                      severity === 'critical'
                        ? 'destructive'
                        : severity === 'high'
                          ? 'destructive'
                          : 'secondary'
                    }                  >
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
                    <Badge variant='outline' className='text-xs'>                      ID: {this.state.errorId.slice(-8)}                    variant = {severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary',}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
                  >
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
                    <Badge variant='outline' className='text-xs'>                    <Badge variant="outline" className="text-xs">
<<<<<<< HEAD
=======

                    <Badge variant="outline" className="text-xs">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ID: {this.state.errorId.slice(-8)}
                    </Badge>
                  )}
                </div>
              </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
              <CardContent className='space-y-6'>
                <div className='text-center'>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {suggestion}
                  </p>
                  {this.state.retryCount > 0 && (
                    <p className='text-sm text-orange-600 dark:text-orange-400'>
                      Retry attempt: {this.state.retryCount}/
                      {this.props.maxRetries |3}                    </p>                    {suggestion}
                  </p>
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries |3}

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {this.props.maxRetries || 3}                    </p>                    {suggestion}
                  </p>
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
<<<<<<< HEAD
<<<<<<< HEAD
                    </p>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge 
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
                  >;
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
                    <Badge variant="outline" className="text-xs">
                      ID: {this.state.errorId.slice(-8)}
                    </Badge>;
                  )}
                </div>
              </CardHeader>

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {suggestion}
                  </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }>;
                    {severity && severity.toUpperCase()}
                  </Badge>;
                  {this && this.state.errorId && (;
                    <Badge variant='outline' className='text-xs'>                      ID: {this && this.state.errorId && errorId.slice(-8)}                    variant = {severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary',}
                </div>;
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className="flex items-center justify-center gap-2 mt-2">;
                  <Badge
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}>;
                    {severity && severity.toUpperCase()}
                  </Badge>;
                  {this && this.state.errorId && (;
                    <Badge variant='outline' className='text-xs'>                    <Badge variant="outline" className="text-xs">;
                      ID: {this && this.state.errorId && errorId.slice(-8)}
                    </Badge>;
                  )}
                </div>;
              </CardHeader>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CardContent className='space-y-6'>;
                <div className='text-center'>;
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>;
                    {suggestion}
                  </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {this && this.state.retryCount > 0 && (;
                    <p className='text-sm text-orange-600 dark:text-orange-400'>;
                      Retry attempt: {this && this.state.retryCount}/;
                      {this && this.props.maxRetries || 3}                    </p>                    {suggestion}
                  </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {this && this.state.retryCount > 0 && (;
                    <p className="text-sm text-orange-600 dark:text-orange-400">;
                      Retry attempt: {this && this.state.retryCount}/{this && this.props.maxRetries || 3}
                    </p>;
                  )}
                </div>;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>;
                  {canRetry && (;
                    <Button
                      onClick={this && this.retry}
                      className='flex items-center gap-2'>;
                      <RefreshCw className='h-4 w-4' />;
                      Try Again;
                    </Button>;
                  )}
                  <Button
                    onClick={this && this.goHome}
                    variant='outline'
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='flex items-center gap-2'>;
                    <Home className='h-4 w-4' />;
                    Go Home;
                  </Button>;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button
                    onClick={() =>;
                      this && this.setState({ showDetails: !this && this.state.showDetails });
                    }
                    variant='ghost';
                    size='sm';
                    className='flex items-center gap-2';
                  >;
                    <Bug className='h-4 w-4' />                    {this && this.state.showDetails ? 'Hide' : 'Show'} Details                  {canRetry && (;
                    <Button onClick={this && this.retry} className="flex items-center gap-2">;
                      <RefreshCw className="h-4 w-4" />;
                      Try Again;
                    </Button>;
<<<<<<< HEAD
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>
                  
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>;
                  )}
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
=======

                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>

                  )}

                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>;



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  )}
                </div>
                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}

<<<<<<< HEAD
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>;
                </div>
                {/* Action Buttons */}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">

                  {canRetry && (
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}
<<<<<<< HEAD
                  )}
                  <Button
                    onClick={this.goHome}
                    variant='outline'
                    className='flex items-center gap-2'
                  >
                    <Home className='h-4 w-4' />
                    Go Home
                  </Button>
                  <Button
                    onClick={() =>
                      this.setState({ showDetails: !this.state.showDetails })
                    }
                    variant='ghost'
                    size='sm'
                    className='flex items-center gap-2'
                  >
                    <Bug className='h-4 w-4' />                    {this.state.showDetails ? 'Hide' : 'Show'} Details                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}
                  <Button onClick={this.goHome} variant="outline" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Go Home
                  </Button>
                  <Button
                    onClick={() => this.setState({ showDetails: !this.state.showDetails })}
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                  
                  <Button onClick={this.goHome} variant="outline" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Go Home
                  </Button>
                  <Button 
                    onClick={() => this.setState({ showDetails: !this.state.showDetails })}
                    variant="ghost" 
                    size="sm"
                    className="flex items-center gap-2"
                  >
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <Bug className="h-4 w-4" />
                    {this.state.showDetails ? 'Hide' : 'Show'} Details
                  </Button>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    {this.state.showDetails ? 'Hide' : 'Show'} Details
                  </Button>
                </div>

                {/* Error Details */}
                <AnimatePresence>
                  {this.state.showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className='border-t pt-4'
                      <div className="space-y-4">
                        <div>
                      className='border-t pt-4'
                      className="border-t pt-4"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className='font-semibold text-sm mb-2'>
                            Error Message:
                          </h4>
                          <code className='block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto'>                            {this.state.error.message}
                          </code>
                        </div>
                    >
                      <div className="space-y-4">
                        <div>
                    <Bug className="h-4 w-4" />
                    {this.state.showDetails ? 'Hide' : 'Show'} Details
                  </Button>
                </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                  )}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button onClick={this && this.goHome} variant="outline" className="flex items-center gap-2">;
                    <Home className="h-4 w-4" />;
                    Go Home;
                  </Button>;
<<<<<<< HEAD
                  <Button
                    onClick={() => this && this.setState({ showDetails: !this && this.state.showDetails })}
  }
;
  private goHome = () => {;
    if (typeof window !== 'undefined') {;
      window.location.href = '/';
    }
  }
;
  render() {;
    if (this.state.hasError && this.state.error) {;
      // Use custom fallback if provided;
      if (this.props.fallback) {;
        return this.props.fallback;
      }
;
      const severity = this.getErrorSeverity(this.state.error);
      const suggestion = this.getErrorSuggestion(this.state.error);
      const canRetry = this.props.enableRetry !== false && ;
                       this.state.retryCount < (this.props.maxRetries || 3);
;
      return (;
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">;
          <motion.div;
            initial={{ opacity:0, scale:0.95 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.3 }}
          >;
            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">;
              <CardHeader className="text-center">;
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">;
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />;
                </div>;
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className="flex items-center justify-center gap-2 mt-2">;
                  <Badge ;
                    variant={severity === 'critical' ? 'destructive' :severity === 'high' ? 'destructive' :'secondary'}
                  >;
                    {severity.toUpperCase()}
                  </Badge>;
                  {this.state.errorId && (;
                    <Badge variant="outline" className="text-xs">;
                      ID:{this.state.errorId.slice(-8)}
                    </Badge>;
                  )}
                </div>;
              </CardHeader>;
;
              <CardContent className="space-y-6">;
                <div className="text-center">;
                  <p className="text-gray-600 dark:text-gray-300 mb-4">;
                    {suggestion}
                  </p>;
                  ;
                  {this.state.retryCount > 0 && (;
                    <p className="text-sm text-orange-600 dark:text-orange-400">;
                      Retry attempt:{this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>;                  )}
                </div>;
;
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">;
                  {canRetry && (;
                    <Button onClick={this.retry} className="flex items-center gap-2">;
                      <RefreshCw className="h-4 w-4" />;
                      Try Again;
                    </Button>;
                  )}
                  ;
                  <Button onClick={this.goHome} variant="outline" className="flex items-center gap-2">;
                    <Home className="h-4 w-4" />;
                    Go Home;
                  </Button>;
;
                  <Button ;
                    onClick={() => this.setState({ showDetails:!this.state.showDetails })}
=======

                  <Button
                    onClick={() => this && this.setState({ showDetails: !this && this.state.showDetails })}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    variant="ghost" ;
                    size="sm";
                    className="flex items-center gap-2";
                  >;
                    <Bug className="h-4 w-4" />;
<<<<<<< HEAD
=======
                    {this && this.state.showDetails ? 'Hide' : 'Show'} Details;
                  </Button>;
                </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





                {/* Error Details */}
                <AnimatePresence>;
                  {this && this.state.showDetails && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
                      className="border-t pt-4"
=======
                      className='border-t pt-4'
                      className="border-t pt-4"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    >
                      <div className="space-y-4">
                        <div>


                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
<<<<<<< HEAD
                            {this.state.error.message}
                          </code>
                        </div>
<<<<<<< HEAD
                        {process.env.NODE_ENV === 'development' &&
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
                            {this.state.error.message}
                          </code>
                        </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                        {process.env.NODE_ENV === 'development' &&
  private go_home = () => {
    // Check condition
if ( {) {
  $2
}
      window.location.href = '/';
    }
  }
  private go_home = () => {
    // Check condition
if ( {) {
  $2
}
      window.location.href = '/';
    }
  } }
  render () {
    // Check condition
if ( {) {
  $2
}
      // Use custom fallback if provided;
      // Check condition
if ( {) {
  $2
}
        return this.props.fallback;
      }
      const severity = this.getErrorSeverity (this.state.error);
      const suggestion = this.getErrorSuggestion (this.state.error);
      const can_retry =;
        this.props.enable_retry !== false &&;
        this.state.retry_count < (this.props.max_retries || 3);
      return (
        <div className='min - h-screen flex items - center justify - center p - 4 bg - gradient - to - br from - red - 50 to - orange - 50 dark:from - red - 950 / 20 dark:to - orange - 950 / 20'>          <motion.div      }
      const severity = this.getErrorSeverity (this.state.error);
      const suggestion = this.getErrorSuggestion (this.state.error);
      const can_retry = this.props.enable_retry !== false &&;
                      this.state.retry_count < (this.props.max_retries || 3);
      return (
        <div className="min - h-screen flex items - center justify - center p - 4 bg - gradient - to - br from - red - 50 to - orange - 50 dark:from - red - 950 / 20 dark:to - orange - 950 / 20">;
          <motion.div;
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >;
            <Card className='w - full max - w-2xl border - red - 200 bg - white dark:bg - gray - 900'>;
              <CardHeader className='text - center'>;
                <div className='mx - auto mb - 4 flex h - 16 w - 16 items - center justify - center rounded - full bg - red - 100 dark:bg - red - 900 / 20'>;
                  <AlertTriangle className='h - 8 w - 8 text - red - 600 dark:text - red - 400' />;
                </div>;
                <CardTitle className='text - 2xl font - bold text - gray - 900 dark:text - gray - 100'>;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className='flex items - center justify - center gap - 2 mt - 2'>;
                  <Badge;
                    variant={
                      severity === 'critical';
                        ? 'destructive';
                        : severity === 'high';
                          ? 'destructive';
                          : 'secondary';
                    }                  >;
                    {severity.toUpperCase ()}
                  </Badge>;
                  {this.state.error_id && (
                    <Badge variant='outline' className='text - xs'>                      ID: {this.state.error_id.slice (-8)}                    variant = {severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary', }
                </div>;
                <CardTitle className="text - 2xl font - bold text - gray - 900 dark:text - gray - 100">;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className="flex items - center justify - center gap - 2 mt - 2">;
                  <Badge;
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
                  >;
                    {severity.toUpperCase ()}
                  </Badge>;
                  {this.state.error_id && (
                    <Badge variant='outline' className='text - xs'>                    <Badge variant="outline" className="text - xs">;
                      ID: {this.state.error_id.slice (-8)}
                    </Badge>)}
                </div>;
              </CardHeader>;
              <CardContent className='space - y-6'>;
                <div className='text - center'>;
                  <p className='text - gray - 600 dark:text - gray - 300 mb - 4'>;
                    {suggestion}
                  </p>;
                  {this.state.retry_count > 0 && (
                    <p className='text - sm text - orange - 600 dark:text - orange - 400'>;
                      Retry attempt: {this.state.retry_count}/;
                      {this.props.max_retries || 3}                    </p>                    {suggestion}
                  </p>;
                  {this.state.retry_count > 0 && (
                    <p className="text - sm text - orange - 600 dark:text - orange - 400">;
                      Retry attempt: {this.state.retry_count}/{this.props.max_retries || 3}
                    </p>)}
                </div>;
                {/* Action Buttons */}
                <div className='flex flex - col sm:flex - row gap - 3 justify - center'>;
                  {can_retry && (
                    <Button;
                      on_click={this.retry}
                      className='flex items - center gap - 2';
                    >;
                      <RefreshCw className='h - 4 w - 4' />;
                      Try Again;
                    </Button>)}
                  <Button;
                    on_click={this.go_home}
                    variant='outline';
                    className='flex items - center gap - 2';
                  >;
                    <Home className='h - 4 w - 4' />;
                    Go Home;
                  </Button>;
                  <Button;
                    on_click={() =>;
                      this.set_state ({ show_details: !this.state.show_details });
                    }
                    variant='ghost';
                    size='sm';
                    className='flex items - center gap - 2';
                  >;
                    <Bug className='h - 4 w - 4' />                    {this.state.show_details ? 'Hide' : 'Show'} Details                  {can_retry && (
                    <Button on_click={this.retry} className="flex items - center gap - 2">;
                      <RefreshCw className="h - 4 w - 4" />;
                      Try Again;
                    </Button>)}
                  <Button on_click={this.go_home} variant="outline" className="flex items - center gap - 2">;
                    <Home className="h - 4 w - 4" />;
                    Go Home;
                  </Button>;
                  <Button;
                    on_click={() => this.set_state ({ show_details: !this.state.show_details })}
                    variant="ghost";
                    size="sm";
                    className="flex items - center gap - 2";
                  >;
                    <Bug className="h - 4 w - 4" />;
                    {this.state.show_details ? 'Hide' : 'Show'} Details;
                  </Button>;
                </div>;
                {/* Error Details */}
                <AnimatePresence>;
                  {this.state.show_details && (
                    <motion.div;
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className='border - t pt - 4';
                    >;
                      <div className='space - y-4'>;
                        <div>;
                          <h4 className='font - semibold text - sm mb - 2'>;
                            Error Message:;
                          </h4>;
                          <code className='block p - 3 bg - red - 50 dark:bg - red - 900 / 10 rounded text - sm text - red - 800 dark:text - red - 200 overflow - auto'>                            {this.state.error.message}
                          </code>;
                        </div>;
                    >;
                      <div className="space - y-4">;
                        <div>;
                          <h4 className="font - semibold text - sm mb - 2">Error Message:</h4>;
                          <code className="block p - 3 bg - red - 50 dark:bg - red - 900 / 10 rounded text - sm text - red - 800 dark:text - red - 200 overflow - auto">;
                            {this.state.error.message}
                          </code>;
                        </div>;
                        {process.env.NODE_ENV === 'development' &&;
                          this.state.error.stack && (
                            <div>;
                              <h4 className='font - semibold text - sm mb - 2'>;
                                Stack Trace:;
                              </h4>;
                              <pre className='p - 3 bg - gray - 50 dark:bg - gray - 800 rounded text - xs overflow - auto max - h-32'>;
                                {this.state.error.stack}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className='border-t pt-4'>;
                      <div className='space-y-4'>;
                        <div>;
                          <h4 className='font-semibold text-sm mb-2'>;
                            Error Message:;
                          </h4>;
                          <code className='block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto'>                            {this && this.state.error && error.message}
                          </code>;
                        </div>;
                    >;
                      <div className="space-y-4">;
                        <div>;
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>;
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">;
                            {this && this.state.error && error.message}
                          </code>;
                        </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {process && process.env.NODE_ENV === 'development' &&;
                          this && this.state.error && error.stack && (;
                            <div>;
                              <h4 className='font-semibold text-sm mb-2'>;
                                Stack Trace:;
                              </h4>;
                              <pre className='p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32'>;
                                {this && this.state.error && error.stack}
                              </pre>;
                            </div>;
                          )}
<<<<<<< HEAD
                        <div className='flex gap-2'>
                          <Button
                            onClick={this && this.copyErrorDetails}
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
                            {this.state.error.message}
                          </code>
                        </div>
                        {process.env.NODE_ENV === 'development' &&
                          this.state.error.stack && (
                            <div>
                              <h4 className='font-semibold text-sm mb-2'>
                                Stack Trace:
                              </h4>
                              <pre className='p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32'>
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}

                        <div className='flex gap-2'>
                          <Button
                            onClick={this.copyErrorDetails}
                            variant='outline'
                            size='sm'
                          >
                            <Clipboard className='h-4 w-4 mr-2' />
                        <div className='flex gap-2'>;
                          <Button
                            onClick={this && this.copyErrorDetails}
                            variant='outline'
                            size='sm'>;
                            <Clipboard className='h-4 w-4 mr-2' />;
                            Copy Details;
                          </Button>;
                          {this && this.props.showReportButton !== false && (;
=======
                            size='sm'
                          >
                            <Clipboard className='h-4 w-4 mr-2' />
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                          {this && this.props.showReportButton !== false && (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <Button
                              onClick={this && this.reportError}
                              variant='outline'

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {process.env.NODE_ENV === 'development' && this.state.error.stack && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Stack Trace:</h4>
                            <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32">
                              {this.state.error.stack}
<<<<<<< HEAD
<<<<<<< HEAD
                            </pre>;
                          </div>;
                        )}

                        <div className="flex gap-2">
                          <Button onClick={this.copyErrorDetails} variant="outline" size="sm">
                            <Clipboard className="h-4 w-4 mr-2" />
                          </Button>
                          {this.props.showReportButton !== false && (
                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (
                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (
                            <Button
                              onClick={this.reportError}
                              variant='outline'
                              size='sm'
                            >
                              <Send className='h-4 w-4 mr-2' />                              Report Issue
                        <div className="flex gap-2">
                          <Button onClick={this.copyErrorDetails} variant="outline" size="sm">
                            <Clipboard className="h-4 w-4 mr-2" />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            </pre>
                          </div>
                        )}


<<<<<<< HEAD
                        <div className="flex gap-2">
                          <Button onClick={this.copyErrorDetails} variant="outline" size="sm">
                            <Clipboard className="h-4 w-4 mr-2" />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (
                        <div className="flex gap-2">
                          <Button onClick={this.copyErrorDetails} variant="outline" size="sm">
                            <Clipboard className="h-4 w-4 mr-2" />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (



                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (


<<<<<<< HEAD
<<<<<<< HEAD
                            <Button onClick={this.reportError} variant="outline" size="sm">
                              Report Issue
                            </Button>
                              size='sm'>;
                              <Send className='h-4 w-4 mr-2' />                              Report Issue;
                        <div className="flex gap-2">;
                          <Button onClick={this && this.copyErrorDetails} variant="outline" size="sm">;
                            <Clipboard className="h-4 w-4 mr-2" />;
                            Copy Details;
                          </Button>;
                          {this && this.props.showReportButton !== false && (;
                            <Button onClick={this && this.reportError} variant="outline" size="sm">;
                              <Send className="h-4 w-4 mr-2" />;
                              Report Issue;
                            </Button>;
                          )}
                        </div>;
                      </div>;
                    </motion && motion.div>;
                  )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            <Button onClick={this.reportError} variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-2" />
                              Report Issue
                            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
// Hook for programmatic error boundary
export const useErrorBoundary = () => {
      )
    return this.props.children
      );

    }

    return this.props.children;
  }
// Hook for programmatic error boundary
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null)
  React.useEffect((,) => {
    if (error) {
      throw error
    }
  }, [error])
  const captureError = React.useCallback((error: Error) => {
    setError(error)
  }, [])
  return { captureError }
}
}
                              </pre>;
                            </div>)}
                        <div className='flex gap - 2'>;
                          <Button;
                            on_click={this.copyErrorDetails}
                            variant='outline';
                            size='sm';
                          >;
                            <Clipboard className='h - 4 w - 4 mr - 2' />;
                            Copy Details;
                          </Button>;
                          {this.props.showReportButton !== false && (
                            <Button;
                              on_click={this.report_error}
                              variant='outline';
                              size='sm';
                            >;
                              <Send className='h - 4 w - 4 mr - 2' />                              Report Issue;
                        <div className="flex gap - 2">;
                          <Button on_click={this.copyErrorDetails} variant="outline" size="sm">;
                            <Clipboard className="h - 4 w - 4 mr - 2" />;
                            Copy Details;
                          </Button>;
                          {this.props.showReportButton !== false && (
                            <Button on_click={this.report_error} variant="outline" size="sm">;
                              <Send className="h - 4 w - 4 mr - 2" />;
                              Report Issue;
                            </Button>)}
                        </div>;
                      </div>;
                    </motion.div>)}
                    {this.state.showDetails ? 'Hide' :'Show'} Details;
                  </Button>;
                </div>;
;
                {/* Error Details */}
                <AnimatePresence>;
                  {this.state.showDetails && (;
                    <motion.div;
                      initial={{ opacity:0, height:0 }}
                      animate={{ opacity:1, height:'auto' }}
                      exit={{ opacity:0, height:0 }}
                      className="border-t pt-4";
                    >;
                      <div className="space-y-4">;
                        <div>;
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>;
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">;
                            {this.state.error.message}
                          </code>;
                        </div>;
;
                        {process.env.NODE_ENV === 'development' && this.state.error.stack && (;
                          <div>;
                            <h4 className="font-semibold text-sm mb-2">Stack Trace:</h4>;
                            <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32">;                              {this.state.error.stack}
                            </pre>;
                          </div>;
                        )}
;
                        <div className="flex gap-2">;
                          <Button onClick={this.copyErrorDetails} variant="outline" size="sm">;
                            <Clipboard className="h-4 w-4 mr-2" />;
                            Copy Details;
                          </Button>;
                          ;
                          {this.props.showReportButton !== false && (;
                            <Button onClick={this.reportError} variant="outline" size="sm">;
                              <Send className="h-4 w-4 mr-2" />;
                              Report Issue;
                            </Button>;                          )}
                        </div>;
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </CardContent>;
            </Card>;
          </motion.div>;
        </div>;
      );
    }
;
    return this.props.children;
  }
}
;
// Hook for programmatic error boundary;
export const useErrorBoundary = () => {;
  const [error, setError] = React.useState<Error | null>(null);
;
  React.useEffect(() => {;
    if (error) {;
      throw error;
    }
  }, [error]);
;
  const captureError = React.useCallback((error:Error) => {;
    setError(error);
  }, []);
;
  return { captureError }
}
;
// Higher-order component for adding error boundaries;
export const withErrorBoundary = <P extends object>(;
  Component:React.ComponentType<P>,;
  errorBoundaryProps?:Omit<ErrorBoundaryProps 'children'>;
) => {;
  const WrappedComponent = (props:P) => (;
    <GlobalErrorBoundary {...errorBoundaryProps}>;
      <Component {...props} />;
    </GlobalErrorBoundary>;
  );
;
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  ;
  return WrappedComponent;}
;
export default GlobalErrorBoundary 
'use client' import { ;
  {;
  React, {;
  Component,  ErrorInfo, ReactNode ';
 } from "react";
import * as Sentry from '@sentry/nextjs' error: Error | null errorInfo: ErrorInfo | null errorId: string | null retryCount: number userFeedback: string showDetails: boolean ;
}interface ErrorBoundaryProps {;
  children: ReactNode fallback?: ReactNode onError?: (error: Error, errorInfo: ErrorInfo) => void enableRetry?: boolean maxRetries?: number showReportButton?: boolean context?: string ;
}constructor (props: ErrorBoundaryProps) {;
  super (props) this.state = {';
  hasError: false, error: null, errorInfo: null, errorId: null, retryCount: 0,  userFeedback: '', showDetails: false ;
}
// Higher-order component for adding error boundaries
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>

  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
,) => {
  const WrappedComponent = (props: P,) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>
  )
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName |Component.name})`
  return WrappedComponent
}
export default GlobalErrorBoundary
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName |Component.name})`
  return WrappedComponent
}
export default GlobalErrorBoundary
      );

      );

    }

    return this.props.children;
  }

// Hook for programmatic error boundary
export const useErrorBoundary = () => {
                </AnimatePresence>;
              </CardContent>;
            </Card>;
          </motion && motion.div>;
        </div>;
      );
    return this && this.props.children;
  }
// Hook for programmatic error boundary;
export const useErrorBoundary = () => {;
  const [error, setError] = React && React.useState<Error | null>(null);
  React && React.useEffect((,) => {;
export default GlobalErrorBoundary;
;
  const [error, setError] = React.useState<Error | null>(null);
  React.useEffect(() => {;
    if (error) {;
      throw error;
    }
  }, [error]);
  const captureError = React && React.useCallback((error: Error) => {;
  const captureError = React.useCallback((error: Error) => {;
    setError(error);
  }, []);
  return { captureError }
}
;
// Higher-order component for adding error boundaries;
export const withErrorBoundary = <P extends object>(;
  Component: React.ComponentType<P>;
  errorBoundaryProps?: Omit<ErrorBoundaryProps 'children'>;
) => {;
  const WrappedComponent = (props: P) => (;
    <GlobalErrorBoundary {...errorBoundaryProps}>;
      <Component {...props} />;
    </GlobalErrorBoundary>;
  );
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
}
;
export default GlobalErrorBoundary;
      );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              size='sm'>;
                              <Send className='h-4 w-4 mr-2' />                              Report Issue;
                        <div className="flex gap-2">;
                          <Button onClick={this && this.copyErrorDetails} variant="outline" size="sm">;
                            <Clipboard className="h-4 w-4 mr-2" />;
                            Copy Details;
                          </Button>;

                          {this && this.props.showReportButton !== false && (;
                            <Button onClick={this && this.reportError} variant="outline" size="sm">;
                              <Send className="h-4 w-4 mr-2" />;
                              Report Issue;
                            </Button>;


                          )}
                        </div>;
                      </div>;
                    </motion && motion.div>;
                  )}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    }

    return this.props.children;

// Hook for programmatic error boundary
export const useErrorBoundary = () => {


  WrappedComponent && WrappedComponent.displayName = `withErrorBoundary(${Component && Component.displayName || Component && Component.name})`;
  return WrappedComponent;
};
export default GlobalErrorBoundary;
  WrappedComponent && WrappedComponent.displayName = `withErrorBoundary(${Component && Component.displayName || Component && Component.name})`;
  return WrappedComponent;
}
export default GlobalErrorBoundary 
=======



  return WrappedComponent;
}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Higher - order component for adding error boundaries;
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType < P>,
  errorBoundaryProps?: Omit < ErrorBoundaryProps, 'children'>;
, ) => {
  const WrappedComponent = (props: P, ) =>: any (
    <GlobalErrorBoundary {...errorBoundaryProps}>;
      <Component {...props} />;
    </GlobalErrorBoundary>);
  WrappedComponent.display_name = `withErrorBoundary (${Component.display_name || Component.name})`;
  return WrappedComponent;
}
export default GlobalErrorBoundary;
  WrappedComponent.display_name = `withErrorBoundary (${Component.display_name || Component.name})`;
  return WrappedComponent;
}
export default GlobalErrorBoundary;
<<<<<<< HEAD
}static getDerivedStateFromError (error: Error) : Partial<ErrorBoundaryState> {;
  return {;
  hasError: true, error ;
}
}componentDidCatch (error: Error, errorInfo: ErrorInfo) {;
  const errorId = this.generateErrorId () //Enhanced error logging const enhancedError = {';
  ...error, componentStack: errorInfo.componentStack, errorBoundary: this.props.context || 'GlobalErrorBoundary', timestamp: new Date () .toISOString (), userAgent: typeof window !== 'undefined'? navigator.userAgent : 'SSR', url: typeof window !== 'undefined'? window.location.href : 'SSR',  userId: this.getUserId (), buildInfo: this.getBuildInfo () ';
}//Log to console in development if (process.env.NODE ENV === 'development') {';
  console.group ('🚨 Error Boundary Caught Error') logErrorToProduction ('Error:', {;
  data: error ';
}) logErrorToProduction ('Error Info:', {;
  data: errorInfo ';
}) logErrorToProduction ('Enhanced Error:', {;
  data: enhancedError ;
}) console.groupEnd () ;
}//Report to Sentry Sentry.withScope ( (scope) => {';
  scope.setTag ('errorBoundary', this.props.context || 'GlobalErrorBoundary') scope.setLevel ('error') scope.setContext ('errorInfo',  {;
  componentStack: errorInfo.componentStack, retryCount: this.state.retryCount ;
}) Sentry.captureException (error) ;
}) //Custom error handler if (this.props.onError) {;
  this.props.onError (error, errorInfo) ;
}this.setState ({;
  errorInfo, errorId ;
}) ;
}componentWillUnmount () {;
  //Clear any pending retry timeouts this.retryTimeouts.forEach (timeout => clearTimeout (timeout) ) ;
}private generateErrorId () : string {;
  return `err $ {;
  Date.now () ;
}$ {;
  Math.random () .toString (36) .substr (2, 9) ;
}` ;
}private getUserId () : string | null {';
  //Try to get user ID from various sources if (typeof window !== 'undefined') {;
  try {';
  //Check localStorage,  sessionStorage, or cookies return localStorage.getItem ('userId') || sessionStorage.getItem ('userId') || null ;
}catch {;
  return null;
}
}return null;
}private getBuildInfo () {;
  return {';
  version: process.env.NEXT PUBLIC APP VERSION || 'unknown',  environment: process.env.NODE ENV, buildTime: process.env.NEXT PUBLIC BUILD TIME || 'unknown' ;
}';
}private getErrorSeverity (error: Error) : 'low'| 'medium'| 'high'| 'critical' {';
  const message = error.message.toLowerCase () const stack = error.stack?.toLowerCase () || ''//Critical errors if (message.includes ('network') || message.includes ('fetch') ) {';
  return 'medium' ';
}if (message.includes ('chunk') || message.includes ('loading') ) {';
  return 'medium' ';
}if (stack.includes ('auth') || stack.includes ('payment') ) {';
  return 'critical' ';
}if (stack.includes ('database') || stack.includes ('api') ) {';
  return 'high' ';
}return 'low' ;
}private getErrorSuggestion (error: Error) : string {';
  const message = error.message.toLowerCase () if (message.includes ('network') || message.includes ('fetch') ) {';
  return 'Please check your internet connection and try again.' ';
}if (message.includes ('chunk') ) {';
  return 'The application was updated. Please refresh the page.' ';
}if (message.includes ('permission') || message.includes ('unauthorized') ) {';
  return 'You may need to log in again or check your permissions.' ';
}return 'This appears to be a temporary issue. Please try again.' ;
}private retry = () => {;
  if (this.state.retryCount >= (this.props.maxRetries || 3) ) {;
  return ;
}const retryDelay = Math.pow (2, this.state.retryCount) * 1000 //Exponential backoff const timeout = setTimeout ( () => {;
  this.setState ({;
  hasError: false, error: null, errorInfo: null, errorId: null,  retryCount: this.state.retryCount + 1, showDetails: false ;
}) ;
}, retryDelay) this.retryTimeouts.push (timeout) ;
}private copyErrorDetails = async () => {;
  const errorDetails = {';
  errorId: this.state.errorId, message: this.state.error?.message, stack: this.state.error?.stack, componentStack: this.state.errorInfo?.componentStack, timestamp: new Date () .toISOString (),  url: typeof window !== 'undefined'? window.location.href : 'unknown', userAgent: typeof window !== 'undefined'? navigator.userAgent : 'unknown' ;
}try {;
  await navigator.clipboard.writeText (JSON.stringify (errorDetails,  null, 2) ) //Could show a toast notification here ;
}catch (err) {';
  logErrorToProduction ('Failed to copy error details:', {;
  data: err ;
}) ;
}
}private reportError = async () => {;
  if (!this.state.error || !this.state.errorId) return try {';
  //Report to your error reporting service const response = await fetch ('/api/error-report',  {';
  method: 'POST', headers: {';
  'Content-Type': 'application/json' ;
};
body: JSON.stringify ({;
  errorId: this.state.errorId, error: {;
  message: this.state.error.message,  stack: this.state.error.stack, name: this.state.error.name ;
};
errorInfo: this.state.errorInfo;
userFeedback: this.state.userFeedback;
context: this.props.context;
timestamp: new Date () .toISOString () ;
}) ;
}) if (response.ok) {;
  //Show success message ;
}
}catch (err) {';
  logErrorToProduction ('Failed to report error:', {;
  data: err ;
}) ;
}
}private goHome = () => {';
  if (typeof window !== 'undefined') {';
  window.location.href = '/' ;
}
}render () {;
  if (this.state.hasError && this.state.error) {;
  //Use custom fallback if provided if (this.props.fallback) {;
  return this.props.fallback ;
}const severity = this.getErrorSeverity (this.state.error) const suggestion = this.getErrorSuggestion (this.state.error) const canRetry = this.props.enableRetry !== false && this.state.retryCount < (this.props.maxRetries || 3) return (<div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20" > <motion.div initial= {;
  {;
  opacity: 0, scale: 0.95 ;
}
}animate= {;
  {;
  opacity: 1, scale: 1 ;
}
}transition= {;
  {;
  duration: 0.3 ;
}";
}> <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900" > <CardHeader className="text-center" > <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20" > <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" /> </div> <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100" > Oops! Something went wrong </CardTitle> <div className="flex items-center justify-center gap-2 mt-2" > <Badge variant= {';
  severity === 'critical'? 'destructive': severity === 'high'? 'destructive': 'secondary' ;
}> {;
  severity.toUpperCase () ;
}</Badge> ID: {;
  this.state.errorId.slice (-8) ;
}</Badge>) ;
}</div> </CardHeader> </p>) ;
}</div> Try Again </Button>) ;
}Go Home </Button> <Button </Button> </div> {;
  /* Error Details */ ;
}<AnimatePresence> {";
  this.state.showDetails && (<motion.div > <div className="space-y-4" > <div> </code> </div> {'";
  process.env.NODE ENV === 'development' && this.state.error.stack && (<div> <h4 className="font-semibold text-sm mb-2" >Stack Trace:</h4> <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32" > {;
  this.state.error.stack ;
}</pre> </div>) ;
}Report Issue </Button>) ;
}</div> </div> </motion.div>) ;
}</AnimatePresence> </CardContent> </Card> </motion.div> </div>) ;
}return this.props.children ;
}
}//Hook for programmatic error boundary export const useErrorBoundary = () => {;
  const [error, setError] = React.useState<Error | null> (null) React.useEffect ( () => {;
  if (error) {;
  throw error ;
}
}, [error]) const captureError = React.useCallback ( (error: Error) => {;
  setError (error) ;
}, []) return {;
  captureError ;
}
}//Higher-order component for adding error boundaries <GlobalErrorBoundary {;
  ...errorBoundaryProps ;
}> <Component {;
  ...props ;
}/> </GlobalErrorBoundary>) WrappedComponent.displayName = `withErrorBoundary ($ {;
  Component.displayName || Component.name ;
}) ` return WrappedComponent;
}export default GlobalErrorBoundary '"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      );

    }

    return this.props.children;

  }
<<<<<<< HEAD
// Hook for programmatic error boundary
<<<<<<< HEAD
export const useErrorBoundary = () => {
=======
export const useErrorBoundary = () => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

// Hook for programmatic error boundary
export const useErrorBoundary = () => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
