

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
;
ursor/automate-test-improve-and-merge-code-646c;
'use client';import React, { Component, ErrorInfo, ReactNode } from 'react';'
interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
  onError?: ("error": Error, "errorInfo": ErrorInfo) => void;interface Props  {"children": ReactNode;
  }
  level?: string;
  fallback?: ReactNode;

interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
  onError?: ("error": Error, "errorInfo": ErrorInfo) => void;

interface Props  {"children": ReactNode;
  }
  level?: string;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
'use client';

;
import React, { Component, ErrorInfo, ReactNode } from 'react';
;

interface Props {

<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  level?: string;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;import { AlertTriangle, RefreshCw } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
=======
interface Props {;
  children: ReactNode;
  level?: string;
  fallback?: ReactNode;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface Props  {children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
class ErrorBoundary extends Component<Props, State> {
  constructor (props: Props) {
  super (props)
this.state = {
  hasError: false 
}
}static getDerivedStateFromError (error: Error) : State {
  return {
  hasError: true, error 
}
}> Reload Page </button> >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 console.error ('Error caught by boundary:', error, errorInfo)
this.setState ({
  error
errorInfo 
})
//Call the onError prop if provided if (this.props.onError) {
  this.props.onError (error, errorInfo)
}//Log error to external service (e.g., Sentry) if (typeof window !== 'undefined' && (window as any) .Sentry) {
  (window as any) .Sentry.captureException (error, {
  extra: errorInfo 
})
}
  children: ReactNode;
=======
  onError?: (error: Error, errorInfo: ErrorInfo) => void;

interface Props  {children: ReactNode;
  level?: string;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  fallback?: ReactNode;

interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
  "children": ReactNode;
  fallback?: ReactNode;
  onError?: ("error": Error, "errorInfo": ErrorInfo) => void;
}interface State  {"hasError": boolean;
  }
  error?: Error;
  errorInfo?: ErrorInfo;
}interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
<<<<<<< HEAD
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
=======
<<<<<<< HEAD
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
interface State  {"hasError": boolean;
  }
  error?: Error;interface State  {"hasError": boolean;
  }
  error?: Error;
interface Props  {"children": ReactNode,level?: string;
  }
  fallback?: ReactNode;
  onError?: ("error": Error, "errorInfo": ErrorInfo) => void;import { AlertTriangle, RefreshCw  } from 'lucide-react';'
interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
<<<<<<< HEAD
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
=======
<<<<<<< HEAD
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
=======

<<<<<<< HEAD
=======
interface Props  {children: ReactNode;}
  fallback?: ReactNode;}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
}

interface State  {"hasError": boolean;
  }
  error?: Error;
  errorInfo?: ErrorInfo;
}

interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}

interface State  {"hasError": boolean;
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  error?: Error;

interface State  {"hasError": boolean;
  }
  error?: Error;

interface Props  {"children": ReactNode,level?: string;
  }
  fallback?: ReactNode;
  onError?: ("error": Error, "errorInfo": ErrorInfo) => void;import { AlertTriangle, RefreshCw  } from 'lucide-react';'

interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;

interface Props  {"children": ReactNode;
  }
  fallback?: ReactNode;
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
}
class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)return { "hasError": true, error }return { "hasError": true, error }
  }
  componentDidCatch("error": Error, "errorInfo": ErrorInfo) {return { "hasError": true, error }return { "hasError": true, error }
  }
  componentDidCatch("error": Error, "errorInfo": ErrorInfo) {origin/automation-improvements-final;
    }
    return { "hasError": true, error }return { "hasError": true, error }
  }
  componentDidCatch("error": Error, "errorInfo": ErrorInfo) {console.error('Error caught by "boundary":', error, errorInfo)this.setState({ursor/integrate-build-improve-and-re-verify-8f7d;'
    // Log the error to console or error reporting service;
    }
    console.error('ErrorBoundary caught an "error":', error, errorInfo)this.setState({origin/automation-improvements-final;'
      }
      error,error_info;
    })// Log error for debugging in development;
    if (process.env.NODE_ENV === 'development') {// eslint-disable-next-line no-console;'
      }
      console.error('ErrorBoundary caught an "error":', error, errorInfo)}'
<<<<<<< HEAD
=======
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {return { hasError: true, error }return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {origin/automation-improvements-final;}
    return { hasError: true, error }return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('Error caught by boundary:', error, errorInfo)this.setState({ursor/integrate-build-improve-and-re-verify-8f7d;
    // Log the error to console or error reporting service;
    console.error('ErrorBoundary caught an error:', error, errorInfo)this.setState({origin/automation-improvements-final;}
      error,error_info;}
    })// Log error for debugging in development;
    if (process.env.NODE_ENV === 'development') {// eslint-disable-next-line no-console;}
      console.error('ErrorBoundary caught an error:', error, errorInfo)}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      error;
}class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)this.state = { "hasError": false }static getDerivedStateFromError("error": Error): State {return { "hasError": true, error }export class ErrorBoundary extends Component<Props, State> {public "state": State = {"hasError": false;
}class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)this.state = { "hasError": false 
}static getDerivedStateFromError("error": Error): State ;
  return { "hasError": true, error ;
}

export class ErrorBoundary extends Component<Props, State> {public "state": State = {"hasError": false;
  }static getDerivedStateFromError("error": Error): State {return { "hasError": true, error }"hasError": false;
  }
<<<<<<< HEAD
  public static getDerivedStateFromError("error": Error): State {return { "hasError": true, error }componentDidCatch("error": Error, "errorInfo": ErrorInfo) {console.error('ErrorBoundary caught an "error":', error, errorInfo)this.setState({error,errorInfo;'
=======
<<<<<<< HEAD
  public static getDerivedStateFromError("error": Error): State {return { "hasError": true, error }}componentDidCatch("error": Error, "errorInfo": ErrorInfo) {console.error('ErrorBoundary caught an "error":', error, errorInfo)this.setState({error,errorInfo;'
>>>>>>> origin/resolved-merge-conflicts
    })// Call custom error handler if provided;
    if (this.props.onError) {this.props.onError(error, errorInfo)}
// Log to external service in production;
    if (process.env.NODE_ENV === 'production') {// Here you would typically send to an error reporting service;'
      }
      console.error('Production "error":', error, errorInfo)componentDidCatch("error": Error, "errorInfo": ErrorInfo) {console && console.error('Error caught by "boundary":', error, errorInfo)this && this.setState({error,errorInfo;'
    })// Call custom error handler if provided;
    if (this && this.props.onError) {this && this.props.onError(error, errorInfo)}
    // You can also log the error to an error reporting service here;
    // "Example": logErrorToService(error, errorInfo)// Log error for debugging in development;
    if (process.env.NODE_ENV === 'development') {// eslint-disable-next-line no-console;'
    // Log error for debugging in development;
    }
    if (process.env.NODE_ENV === 'development') {console.error('ErrorBoundary caught an "error":', error, errorInfo)}'
  }
      // Fallback UI;
      return (<div className="min-h-screen flex items-center justify-center bg-gray-50">;"
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">;"
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">;"
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;"
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;"
              </svg>;
            </div>;
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">;"
              Something went wrong;
            </h2>;
            <p className="text-gray-600 text-center mb-6">;"
              We're sorry, but something unexpected happened. Please try refreshing the page.;'
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className="text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10">;"
                <summary className="text-white/80 font-medium cursor-pointer mb-4">;"
                  }
                  Error Details (Development)</summary>;
                <div className="space-y-3 text-sm">;"
                  <div>;
                    <strong className="text-red-400">"Error":</strong>;"
                    <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300">;"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      {this.state.error.toString()}
                    </pre>;
                  </div>;
                  {this.state.errorInfo && (<div>;
<<<<<<< HEAD
                      <strong className="text-red-400">Stack "Trace":</strong>;"
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">;"
=======
<<<<<<< HEAD
                      <strong className="text-red-400">Stack "Trace":</strong>;"
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">;"
=======

=======
  public static getDerivedStateFromError(error: Error): State {return { hasError: true, error }}componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error:', error, errorInfo)this.setState({error,errorInfo;}
    })// Call custom error handler if provided;
    if (this.props.onError) {this.props.onError(error, errorInfo)}
// Log to external service in production;
    if (process.env.NODE_ENV === 'production') {// Here you would typically send to an error reporting service;}
      console.error('Production error:', error, errorInfo)componentDidCatch(error: Error, errorInfo: ErrorInfo) {console && console.error('Error caught by boundary:', error, errorInfo)this && this.setState({error,errorInfo;}
    })// Call custom error handler if provided;
    if (this && this.props.onError) {this && this.props.onError(error, errorInfo)}
    // You can also log the error to an error reporting service here;
    // Example: logErrorToService(error, errorInfo)// Log error for debugging in development;
    if (process.env.NODE_ENV === 'development') {// eslint-disable-next-line no-console;}
    // Log error for debugging in development;}
    if (process.env.NODE_ENV === 'development') {console.error('ErrorBoundary caught an error:', error, errorInfo)}
  }
      // Fallback UI;
      return (<div className=\"min-h-screen flex items-center justify-center bg-gray-50\"    />;
          <div className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\"    />;
            <div className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4\"    />;
              <svg className=\"w-6 h-6 text-red-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"    />;
                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\"    />;
              </svg>;
            </div>;
            <h2 className=\"text-xl font-semibold text-gray-900 text-center mb-2\"    />;
              Something went wrong;
            </h2>;
            <p className=\"text-gray-600 text-center mb-6\"    />;
              We're sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className=\"text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10\"    />;
                <summary className=\"text-white/80 font-medium cursor-pointer mb-4\"    />;
                  Error Details (Development)</summary>;
                <div className=\"space-y-3 text-sm\"    />;
                  <div    />;
                    <strong className=\"text-red-400\"    />Error:</strong>;}
                    <pre className=\"mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300\"    />;}
                      {this.state.error.toString()}
                    </pre>;
                  </div>;
                  {this.state.errorInfo && (<div    />;
                      <strong className=\"text-red-400\"    />Stack Trace:</strong>;}
                      <pre className=\"mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs\"    />;}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                        {this.state.errorInfo.componentStack}
                      </pre>;
                    </div>;
                  )}                </div>;
              </details>;
            )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)this.state = { "hasError": false } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}// Log error to external service (e.g., Sentry)if (typeof window !== 'undefined' && (window as any).Sentry) {(window as any).Sentry.captureException(error, { "extra": errorInfo })}// Call custom error handler if provided;'
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}
class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)this.state = { "hasError": false 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error;"
}
return res.status(500).json({ "error": "Internal server error" },;"
}// Log error to external service (e.g., Sentry)if (typeof window !== 'undefined' && (window as any).Sentry) {(window as any).Sentry.captureException(error, { "extra": errorInfo },'
}// Call custom error handler if provided;
    if (this.props.onError) {this.props.onError(error, errorInfo)}// Log to external service in production;
    if (process.env.NODE_ENV === 'production') {// Here you would typically send to an error reporting service;'
      }
      console.error('Production "error":', error, errorInfo)// Log error for debugging in development;'
    if (process.env.NODE_ENV === 'development') {console.error('Error "details":', error)console.error('Error "info":', errorInfo)}'
  }render() {if (this.state.hasError) {// Fallback UI;
      }
      return (<div className="min-h-screen flex items-center justify-center bg-gray-50">;"
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">;"
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">;"
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;"
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;"
              </svg>;
  public componentDidCatch("error": Error, "errorInfo": ErrorInfo) {console.error('ErrorBoundary caught an "error": ', error, errorInfo)// Log error to monitoring service;'
    }
    if (typeof window !== 'undefined' && window.gtag) {window.gtag('event', 'exception', {"description": error.message,"fatal": false;'
      })}
  }public render() {if (this.state.hasError) {return (this.props.fallback || (<div className="min-h-screen flex items-center justify-center bg-gray-50">;"
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">;"
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">;"
                <svg;
                  }
                  className="w-6 h-6 text-red-600";"
                  fill="none";"
                  stroke="currentColor";"
                  viewBox="0 0 24 24";"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                >;
                  viewBox="0 0 24 24">"

                  <path;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
                    strokeLinecap="round";"
                    strokeLinejoin="round";"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z";" />;
                </svg>;
              </div>;
              <div className="mt-4 text-center">;"
                <h3 className="text-lg font-medium text-gray-900">;"
                  Something went wrong;
                </h3>;
                <p className="mt-2 text-sm text-gray-500">;"
                  We&apos;re sorry, but something unexpected happened. Please;
                  try refreshing the page.'';'
                </p>;
                <div className="mt-6">;"
                  <button;
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 "hover": bg-blue-700 "focus":outline-none "focus":ring-2 "focus":ring-offset-2 "focus":ring-blue-500";"
<<<<<<< HEAD
=======
=======

=======
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
class ErrorBoundary extends Component<Props, State    /> {constructor(props: Props) {super(props)this.state = { hasError: false }} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}// Log error to external service (e.g., Sentry)if (typeof window !== 'undefined' && (window as any).Sentry) {(window as any).Sentry.captureException(error, { extra: errorInfo })}// Call custom error handler if provided;
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" },
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
 ,
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })},
}
class ErrorBoundary extends Component<Props, State    /> {constructor(props: Props) {super(props)this.state = { hasError: false ,}
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" },
} catch (error) {console.error(\"Error:\", error;}
  return res.status(500).json({ error: \"Internal server error\" },
}// Log error to external service (e.g., Sentry)if (typeof window !== 'undefined' && (window as any).Sentry) {(window as any).Sentry.captureException(error, { extra: errorInfo },
}// Call custom error handler if provided;
    if (this.props.onError) {this.props.onError(error, errorInfo)}// Log to external service in production;
    if (process.env.NODE_ENV === 'production') {// Here you would typically send to an error reporting service;}
      console.error('Production error:', error, errorInfo)// Log error for debugging in development;}
    if (process.env.NODE_ENV === 'development') {console.error('Error details:', error)console.error('Error info:', errorInfo)}
  }render() {if (this.state.hasError) {// Fallback UI;
      return (<div className=\"min-h-screen flex items-center justify-center bg-gray-50\"    />;
          <div className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\"    />;
            <div className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4\"    />;}
              <svg className=\"w-6 h-6 text-red-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"    />;}
                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\"    />;
              </svg>;
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error: ', error, errorInfo)// Log error to monitoring service;}
    if (typeof window !== 'undefined' && window.gtag) {window.gtag('event', 'exception', {description: error.message,fatal: false;}
      })}
  }public render() {if (this.state.hasError) {return (this.props.fallback || (<div className=\"min-h-screen flex items-center justify-center bg-gray-50\"    />;
            <div className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\"    />;
              <div className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full\"    />;
                <svg;
                  className=\'w-6 h-6 text-red-600\';
                  fill=\'none\';
                  stroke=\'currentColor\';
                  viewBox=\'0 0 24 24\';
                    />;
                  viewBox=\"0 0 24 24\">

                  <path;
                    strokeLinecap=\'round\';}
                    strokeLinejoin=\'round\';}
                    strokeWidth={2}
                    d=\'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\';
                     />;
                </svg>;
              </div>;
              <div className=\"mt-4 text-center\"    />;
                <h3 className=\"text-lg font-medium text-gray-900\"    />;
                  Something went wrong;
                </h3>;
                <p className=\"mt-2 text-sm text-gray-500\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
                  We&apos;re sorry, but something unexpected happened. Please;
                  try refreshing the page.'';
                </p>;
<<<<<<< HEAD

=======
                <div className=\"mt-6\"    />;
                  <button;
                    onClick={() =    /> window.location.reload()}
                    className=\'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  >;
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 "hover": bg-blue-700 "focus":outline-none "focus":ring-2 "focus":ring-offset-2 "focus":ring-blue-500">"

                    Refresh Page;
                  </button>;
                </div>;
<<<<<<< HEAD
              </div>;
            </div>;
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">;"
              Something went wrong;
            </h2>;
            <p className="text-gray-600 text-center mb-6">;"
              We're sorry, but something unexpected happened. Please try refreshing the page.;'
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className="text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10">;"
                <summary className="text-white/80 font-medium cursor-pointer mb-4">;"
                  }
                  Error Details (Development)</summary>;
                <div className="space-y-3 text-sm">;"
                  <div>;
                    <strong className="text-red-400">"Error":</strong>;"
                    <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300">;"
<<<<<<< HEAD
=======
=======
              </div>;
            </div>;
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      {this.state.error.toString()}
                    </pre>;
                  </div>;
                  {this.state.errorInfo && (<div>;
<<<<<<< HEAD
                      <strong className="text-red-400">Stack "Trace":</strong>;"
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">;"
=======
<<<<<<< HEAD
                      <strong className="text-red-400">Stack "Trace":</strong>;"
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">;"
=======

=======
            <h2 className=\"text-xl font-semibold text-gray-900 text-center mb-2\"    />;
              Something went wrong;
            </h2>;
            <p className=\"text-gray-600 text-center mb-6\"    />;
              We're sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className=\"text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10\"    />;
                <summary className=\"text-white/80 font-medium cursor-pointer mb-4\"    />;
                  Error Details (Development)</summary>;
                <div className=\"space-y-3 text-sm\"    />;
                  <div    />;
                    <strong className=\"text-red-400\"    />Error:</strong>;}
                    <pre className=\"mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300\"    />;}
                      {this.state.error.toString()}
                    </pre>;
                  </div>;
                  {this.state.errorInfo && (<div    />;
                      <strong className=\"text-red-400\"    />Stack Trace:</strong>;}
                      <pre className=\"mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs\"    />;}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                        {this.state.errorInfo.componentStack}
                      </pre>;
                    </div>;
                  )}                </div>;
              </details>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            )}<div className="flex flex-col "sm":flex-row gap-4 justify-center">;"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
export default class ErrorBoundary extends Component<Props, State> {public "state": State = {"hasError": false;
  }public static getDerivedStateFromError("_": Error): State {return { "hasError": true } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  public componentDidCatch("error": Error, "errorInfo": ErrorInfo) {console.error('Uncaught "error":', error, errorInfo)} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  componentDidCatch("error": Error, "errorInfo": ErrorInfo) {// Only log to console in development;
    }
    if (process.env.NODE_ENV === 'development') {// eslint-disable-next-line no-console;'
      }
      console.error('ErrorBoundary caught an "error":', error, errorInfo)} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}<button;"
                onClick={() => window && window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md "hover":bg-blue-700 transition-colors";"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
            )}<div className=\"flex flex-col sm:flex-row gap-4 justify-center\"    />;
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
export default class ErrorBoundary extends Component<Props, State    /> {public state: State = {hasError: false;}
  }public static getDerivedStateFromError(_: Error): State {return { hasError: true }} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('Uncaught error:', error, errorInfo)} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {// Only log to console in development;}
    if (process.env.NODE_ENV === 'development') {// eslint-disable-next-line no-console;}
      console.error('ErrorBoundary caught an error:', error, errorInfo)} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}<button;
                onClick={() =    /> window && window.location.reload()}
                className=\'flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors\';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              >;
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}

export default class ErrorBoundary extends Component<Props, State> {public "state": State = {"hasError": false;
  }public static getDerivedStateFromError("_": Error): State {return { "hasError": true 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}
  public componentDidCatch("error": Error, "errorInfo": ErrorInfo) {console.error('Uncaught "error":', error, errorInfo)} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}
  componentDidCatch("error": Error, "errorInfo": ErrorInfo) {// Only log to console in development;
    }
    if (process.env.NODE_ENV === 'development') {// eslint-disable-next-line no-console;'
      }
      console.error('ErrorBoundary caught an "error":', error, errorInfo)} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
}<button;
                onClick={() => window && window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md "hover":bg-blue-700 transition-colors">"

                Refresh Page;
              </button>;
              <button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      return this.props.fallback || (<div className="min-h-screen bg-slate-950 flex items-center justify-center">;"
          <div className="text-center text-white max-w-md mx-auto p-6">;"
            <div className="mb-6">;"
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚠️</span>;"
              </div>;
              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>;"
              <p className="text-slate-300 mb-6">;"
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.;
              </p>;
            </div>;
            <div className="space-y-3">;"
              <button;
                onClick={() => typeof window !== 'undefined' && window.location.reload()}className="w-full px-6 py-3 bg-blue-600 rounded-lg "hover":bg-blue-700 transition-colors font-semibold";"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
      return this.props.fallback || (<div className=\"min-h-screen bg-slate-950 flex items-center justify-center\"    />;
          <div className=\"text-center text-white max-w-md mx-auto p-6\"    />;
            <div className=\"mb-6\"    />;
              <div className=\"w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4\"    />;
                <span className=\"text-2xl\"    />⚠️</span>;
              </div>;
              <h1 className=\"text-2xl font-bold mb-2\"    />Something went wrong</h1>;
              <p className=\"text-slate-300 mb-6\"    />;
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.;
              </p>;
            </div>;
            <div className=\"space-y-3\"    />;
              <button;
                onClick={() =    /> typeof window !== 'undefined' && window.location.reload()}className=\'w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold\';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              >;
                Reload Page;
              </button>;
              <button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
                onClick={() => this.setState({ "hasError": false })}onClick={() => this.setState({ "hasError": false })  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
              <button;
                onClick={() => this.setState({ "hasError": false })}className="w-full px-6 py-3 bg-slate-700 rounded-lg "hover":bg-slate-600 transition-colors font-semibold";"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
                onClick={() =    /> this.setState({ hasError: false })}onClick={() => this.setState({ hasError: false })  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
              <button;
                onClick={() =    /> this.setState({ hasError: false })}className=\'w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold\';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              >;
                onClick={() => typeof window !== 'undefined' && window.location.reload()}className="w-full px-6 py-3 bg-blue-600 rounded-lg "hover":bg-blue-700 transition-colors font-semibold">"

                Reload Page;
              </button>;
              <button;
                onClick = {() => this.setState({ "hasError": false })}onClick={() => this.setState({ "hasError": false }) 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error;"
}
return res.status(500).json({ "error": "Internal server error" })},;"
}
              <button;
                onClick={() => this.setState({ "hasError": false }
}className="w-full px-6 py-3 bg-slate-700 rounded-lg "hover":bg-slate-600 transition-colors font-semibold">"

                Try Again;
              </button>;
            </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className="mt-4 p-4 bg-gray-100 rounded-md">;"
                <summary className="cursor-pointer font-medium text-gray-700">;"
                  }
                  Error Details (Development)</summary>;
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">;"
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
              <details className="mt-6 text-left">;"
                <summary className="cursor-pointer text-sm text-slate-400 "hover":text-slate-300">;"
                  Error Details (Development)</summary>;
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">;"
                  {this.state.error.stack}
                </pre>;
              </details>;
            )}<details className="mt-6 text-left">;"
                <summary className="cursor-pointer text-sm text-slate-400 "hover":text-slate-300">;"
                  Error Details (Development)</summary>;
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">;"
                  {this.state.error.stack  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
                  {this.state.error.stack  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className=\"mt-4 p-4 bg-gray-100 rounded-md\"    />;
                <summary className=\"cursor-pointer font-medium text-gray-700\"    />;
                  Error Details (Development)</summary>;}
                <pre className=\"mt-2 text-xs text-gray-600 overflow-auto\"    />;}
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
              <details className=\"mt-6 text-left\"    />;
                <summary className=\"cursor-pointer text-sm text-slate-400 hover:text-slate-300\"    />;
                  Error Details (Development)</summary>;
                <pre className=\"mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto\"    />;
                  {this.state.error.stack}
                </pre>;
              </details>;
            )}<details className=\"mt-6 text-left\"    />;
                <summary className=\"cursor-pointer text-sm text-slate-400 hover:text-slate-300\"    />;
                  Error Details (Development)</summary>;
                <pre className=\"mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto\"    />;
                  {this.state.error.stack  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
                  {this.state.error.stack  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" },
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
 ,
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })},
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
                </pre>;
              </details>;
            )}
          </div>;
    // Log the error to an error reporting service;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    console && console.error('ErrorBoundary caught an "error":', error, errorInfo)this && this.setState({ error, errorInfo })}'
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}
  public render() {if (this.state.hasError) {return (<div className="min-h-screen bg-slate-950 flex items-center justify-center">;"
          <div className="text-center text-white">;"
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>;"
            <button;
              }
              onClick={() => window.location.reload()  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
              className="px-4 py-2 bg-blue-600 rounded-lg "hover":bg-blue-700";"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
    console && console.error('ErrorBoundary caught an error:', error, errorInfo)this && this.setState({ error, errorInfo })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })},
}
  public render() {if (this.state.hasError) {return (<div className=\"min-h-screen bg-slate-950 flex items-center justify-center\"    />;
          <div className=\"text-center text-white\"    />;
            <h1 className=\"text-2xl font-bold mb-4\"    />Something went wrong</h1>;}
            <button;}
              onClick={() =    /> window.location.reload()  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
              className=\'px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700\';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            >;
              onClick = {() => window.location.reload()  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error;"
}
return res.status(500).json({ "error": "Internal server error" })},;"
}
              className="px-4 py-2 bg-blue-600 rounded-lg "hover":bg-blue-700">"

              Reload Page;
            </button>;
ursor/automate-test-improve-and-merge-code-646c;
          </div>;
        </div>;
      )}ursor/automate-test-improve-and-merge-code-646c;
    return this.props.children;
  }
}export default ErrorBoundary;</div>;
        ))}return this.props.children;
'use client';'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import React, { Component, ErrorInfo, ReactNode } from 'react';'

interface Props {
  }
  "children": ReactNode;
  fallback?: ReactNode;
  onError?: ("error": Error, "errorInfo": ErrorInfo) => void;
}
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
'use client';

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home } from 'lucide-react';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
interface State {
  }
  "hasError": boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

class ErrorBoundary extends Component<Props, State> {
  }
  constructor("props": Props) {
    }
    super(props);
    this.state = { "hasError": false
};
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  static getDerivedStateFromError("error": Error): State {
    }
    return { "hasError": true, error };
  }

  componentDidCatch("error": Error, "errorInfo": ErrorInfo) {
    }
    console.error('ErrorBoundary caught an "error":', error, errorInfo);'
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}

}

=======
<<<<<<< HEAD
export default ErrorBoundary;</div>;
        ))}return this.props.children;
'use client';

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;}
  onError?: (error: Error, errorInfo: ErrorInfo) => void;}
}

<<<<<<< HEAD
interface State {
  hasError: boolean;
  error?: Error;}
  errorInfo?: ErrorInfo;}
=======
<<<<<<< HEAD
interface State {
  hasError: boolean,
  error?: Error;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

class ErrorBoundary extends Component<Props, State    /> {
  constructor(props: Props) {
<<<<<<< HEAD
    super(props);}
    this.state = { hasError: false,}
};
  }

  static getDerivedStateFromError(error: Error): State {}
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    
    this.setState({
      }
      error,
      errorInfo
    });

    // Call custom error handler if provided,
if (this.props.onError) {
      }
      this.props.onError(error, errorInfo);
    }

    // Log error for debugging in development,
if (process.env.NODE_ENV === 'development') {'
      }
      console.error('Error "details":', error);'
      console.error('Error "info":', errorInfo);'
    }
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  render() {
    }
    if (this.state.hasError) {
}
return this.props.fallback || (;
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">"
          <div className="text-center text-white max-w-md mx-auto p-6">"
            <div className="mb-6">"
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">⚠️</span>"
              </div>
              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>"
              <p className="text-slate-300 mb-6">"
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-3">"
              <button,
onClick={() => typeof window !== 'undefined' && window.location.reload()} '
                className="w-full px-6 py-3 bg-blue-600 rounded-lg "hover": bg-blue-700 transition-colors font-semibold""
<<<<<<< HEAD
=======
=======
  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD

=======
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                <summary className="text-white/80 font-medium cursor-pointer mb-4">
                  Error Details (Development)
                </summary>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-red-400">Error:</strong>
                    <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong className="text-red-400">Stack Trace:</strong>
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only log to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  render() {
    if (this.state.hasError) {
>>>>>>> merged-prs-20250907-203621
      return this.props.fallback || (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white max-w-md mx-auto p-6">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
              <p className="text-slate-300 mb-6">
<<<<<<< HEAD
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => typeof window !== 'undefined' && window.location.reload()} 
=======
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-3">
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <button
                onClick={() => typeof window !== 'undefined' && window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> merged-prs-20250907-203621
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Reload Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return this.props.fallback || (
<<<<<<< HEAD
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white max-w-md mx-auto p-6">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
              <p className="text-slate-400">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </button>
<<<<<<< HEAD
              <button,
onClick={() => this.setState({ "hasError": false })} 
                className="w-full px-6 py-3 bg-slate-700 rounded-lg "hover":bg-slate-600 transition-colors font-semibold""
=======
<<<<<<< HEAD
              <button,
onClick={() => this.setState({ "hasError": false })} 
                className="w-full px-6 py-3 bg-slate-700 rounded-lg "hover":bg-slate-600 transition-colors font-semibold""
=======

<<<<<<< HEAD
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
=======
              <button
                onClick={() => window.location.href = '/'}
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======





=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onClick={() => this.setState({ hasError: false })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            {process.env.NODE_ENV === 'development' && this.state.error && ('
              <details className="mt-6 text-left">"
                <summary className="cursor-pointer text-sm text-slate-400 "hover":text-slate-300">"
                  }
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
            {process.env.NODE_ENV === 'development' && this.state.error && (

              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  {this.state.error.stack}

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <details className="mt-4 p-4 bg-gray-100 rounded-md">
                <summary className="cursor-pointer font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
<<<<<<< HEAD
                <div className="mt-2 p-4 bg-slate-800 rounded-lg text-xs font-mono text-red-400 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
<<<<<<< HEAD
            
=======

=======
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack}
<<<<<<< HEAD
=======





=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/resolved-merge-conflicts
                </pre>
              </details>
            
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
<<<<<<< HEAD
main

=======
>>>>>>> merged-prs-20250907-203621
          </div>
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }
  handle_reload = () => {
    window.location.reload ();
  }
;
  handleGoHome = () => {
    window.location.href = '/';  }
;
  render () {
    // Check condition
if ( {) {
  $2
}
      // Fallback UI;
      return (
        <div className="min - h-screen flex items - center justify - center bg - gray - 50">;
          <div className="max - w-md w - full bg - white shadow - lg rounded - lg p - 6">;
            <div className="flex items - center justify - center w - 12 h - 12 mx - auto bg - red - 100 rounded - full mb - 4">;
              <svg className="w - 6 h - 6 text - red - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M12 9v2m0 4h.01m - 6.938 4h13.856c1.54 0 2.502 - 1.667 1.732 - 2.5L13.732 4c-.77-.833 - 1.964-.833 - 2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;
              </svg>;
            </div>;
            <h2 className="text - xl font - semibold text - gray - 900 text - center mb - 2">;
              Something went wrong;
            </h2>;
            <p className="text - gray - 600 text - center mb - 6">;
              We're sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text - left bg - white / 5 rounded - xl p - 6 mb - 8 border border - white / 10">;
                <summary className="text - white / 80 font - medium cursor - pointer mb - 4">;
                  Error Details (Development);
                </summary>;
                <div className="space - y-3 text - sm">;
                  <div>;
                    <strong className="text - red - 400">Error:</strong>;
                    <pre className="mt - 2 p - 3 bg - red - 500 / 10 rounded - lg overflow - x-auto text - red - 300">;
                      {this.state.error.to_string ()}
                    </pre>;
                  </div>;
                  {this.state.error_info && (
                    <div>;
                      <strong className="text - red - 400">Stack Trace:</strong>;
                      <pre className="mt - 2 p - 3 bg - red - 500 / 10 rounded - lg overflow - x-auto text - red - 300 text - xs">;
                        {this.state.error_info.component_stack}
                      </pre>;
                    </div>)}                </div>;
              </details>)}
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <button;
                on_click={() => window.location.reload ()}
                className="flex - 1 bg - blue - 600 text - white px - 4 py - 2 rounded - md hover:bg - blue - 700 transition - colors";
              >;
                Refresh Page;
              </button>;
              <button;
                on_click={() => this.set_state ({ has_error: false, error: undefined, error_info: undefined })}
                className="flex - 1 bg - gray - 200 text - gray - 800 px - 4 py - 2 rounded - md hover:bg - gray - 300 transition - colors";
              >;
                Try Again;
              </button>;
            </div>;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt - 4 p - 4 bg - gray - 100 rounded - md">;
                <summary className="cursor - pointer font - medium text - gray - 700">;
                  Error Details (Development);
                </summary>;
                <pre className="mt - 2 text - xs text - gray - 600 overflow - auto">;
                  {this.state.error.to_string ()}
                  {this.state.error_info?.component_stack}
                </pre>;
              </details>)}
          </div>;
    // Log the error to an error reporting service;
    console.error ('ErrorBoundary caught an error:', error, error_info);
    this.set_state ({ error, error_info });
  }
  render () {
    // Check condition
if ( {) {
  $2
}
      // You can render any custom fallback UI;
      return this.props.fallback || (
        <div style={{
          padding: '20px',
          text_align: 'center',
          border: '1px solid #ff6b6b',
          border_radius: '8px',
          background_color: '#ffe0e0',
          margin: '20px';
        }}>;
          <h2 > Something went wrong.</h2>;
          <p > We're sorry, but something unexpected happened.</p>;
          <button;
            on_click={() => window.location.reload ()}
            style={{
              padding: '10px 20px',
              background_color: '#ff6b6b',
              color: 'white',
              border: 'none',
              border_radius: '4px',
              cursor: 'pointer';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }}
          >;
            Reload Page;
          </button>;
          {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  render() {;
    if (this && this.state.hasError) {;
      // You can render any custom fallback UI;
      return this && this.props.fallback || (;
        <divstyle={{ 
          padding: '20px', 
          textAlign: 'center',
          border: '1px solid #ff6b6b',
          borderRadius: '8px',
          backgroundColor: '#ffe0e0',
          margin: '20px'
        }}>;
          <h2>Something went wrong.</h2>;
          <p>We're sorry, but something unexpected happened.</p>;
          <button
            onClick={() => window && window.location.reload()}
            style={{;
              padding: '10px 20px',;
              backgroundColor: '#ff6b6b',;
              color: 'white',;
              border: 'none',;
              borderRadius: '4px',;
              cursor: 'pointer';
            }}
          >;
            Reload Page;
          </button>;
          {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
            <details style={{ marginTop: '20px', textAlign: 'left' }}>;
              <summary>Error Details (Development)</summary>;
              <prestyle={{ 
                backgroundColor: '#f5f5f5', 
                padding: '10px', 
                borderRadius: '4px',
                overflow: 'auto',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                fontSize: '12px'
              }}>;
                {this && this.state.error && error.toString()}
                {this && this.state.errorInfo?.componentStack}
              </pre>;
            </details>;
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
  }
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
<<<<<<< HEAD
main

=======
        <div className=\"min-h-screen bg-slate-950 flex items-center justify-center\"    />
          <div className=\"text-center text-white max-w-md mx-auto p-6\"    />
            <div className=\"mb-6\"    />
              <div className=\"w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4\"    />
                <span className=\"text-2xl\"    />⚠️</span>
              </div>
              <h1 className=\"text-2xl font-bold mb-2\"    />Something went wrong</h1>
              <p className=\"text-slate-300 mb-6\"    />
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className=\"space-y-3\"    />}
              <button;}
onClick={() =    /> typeof window !== 'undefined' && window.location.reload()} 
                className=\"w-full px-6 py-3 bg-blue-600 rounded-lg hover: bg-blue-700 transition-colors font-semibold\"
              >
                Reload Page;
              </button>
              <button;
onClick={() =    /> this.setState({ hasError: false })} 
                className=\"w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold\"
              >
                Try Again;
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className=\"mt-6 text-left\"    />
                <summary className=\"cursor-pointer text-sm text-slate-400 hover:text-slate-300\"    />
                  Error Details (Development)
                </summary>}
                <pre className=\"mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto\"    />}
                  {this.state.error.stack}
                </pre>
              </details>
            ,
}
          </div>
=======
          </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>
      );
    }

<<<<<<< HEAD
    return this && this.props.children;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
main

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
main

                </pre>
              </details>
            )}
                </pre>
              </details>
            )}

          </div>
<<<<<<< HEAD
        </div>
      );
    }

    return this.props.children;
=======
      );
    }

    return this.props.children;
=======
class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this && this.state = { hasError: false };

}
  handleRetry = () => {this.setState({ hasError: false, error: undefined, errorInfo: undefined });
}
=======
    return this.props.children;
  }
}


<<<<<<< HEAD
        </div>
      );
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    return this && this.props.children;
  }
}return this && this.props.children;
  }
<<<<<<< HEAD
}class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)this && this.state = { "hasError": false }
=======
<<<<<<< HEAD
}class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)this && this.state = { "hasError": false }}
>>>>>>> origin/resolved-merge-conflicts
  handleRetry = () => {this.setState({ "hasError": false, "error": undefined, "errorInfo": undefined })}
}class ErrorBoundary extends Component<Props, State> {constructor("props": Props) {super(props)this && this.state = { "hasError": false 
}
  handleRetry = () => {this.setState({ "hasError": false, "error": undefined, "errorInfo": undefined }
}
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">;"
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">;"
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">;"
              <AlertTriangle className="w-8 h-8 text-red-400" />;"
            <details style={ "margin_top": '20px', "text_align": 'left' ,'
}>;
              <summary > Error Details (Development)</summary>;
<<<<<<< HEAD
              <pre style={"background_color": '#f5f5f5',"padding": '10px',"border_radius": '4px',"overflow": 'auto',"font_size": '12px';'
              }>;
=======
              <pre style={{"background_color": '#f5f5f5',"padding": '10px',"border_radius": '4px',"overflow": 'auto',"font_size": '12px';'
              }}>;
=======
}class ErrorBoundary extends Component<Props, State    /> {constructor(props: Props) {super(props)this && this.state = { hasError: false }}
  handleRetry = () => {this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
}class ErrorBoundary extends Component<Props, State    /> {constructor(props: Props) {super(props)this && this.state = { hasError: false ,}
}
<<<<<<< HEAD
  handleRetry = () => {this.setState({ hasError: false, error: undefined, errorInfo: undefined },
}
        <div className=\"min-h-screen bg-gray-900 flex items-center justify-center px-4\"    />;
          <div className=\"max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center\"    />;
            <div className=\"w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6\"    />;
              <AlertTriangle className=\"w-8 h-8 text-red-400\"    />;
            <details style={{ margin_top: '20px',}
  text_align: 'left' ,}
}    />;
              <summary     /> Error Details (Development)</summary>;
              <pre style={{background_color: '#f5f5f5',
  padding: '10px',border_radius: '4px',}
  overflow: 'auto',font_size: '12px';}
              }}    />;
=======
class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {;

class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this && this.state = { hasError: false };

}
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
}


<<<<<<< HEAD
    super(props);
    this && this.state = { hasError: false };
}
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    console && console.error('ErrorBoundary caught an error:', error, errorInfo);
    this && this.setState({ error, errorInfo });
}
  handleRetry = () => {;
    this && this.setState({ hasError: false, error: undefined, errorInfo: undefined });
};
  render() {;
    if (this && this.state.hasError) {;
      if (this && this.props.fallback) {;
        return this && this.props.fallback;
}
      return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">;
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">;
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">;
              <AlertTriangle className="w-8 h-8 text-red-400" />;
            <details style={{ margin_top: '20px', text_align: 'left' }}>;
              <summary > Error Details (Development)</summary>;
              <pre style={{
                background_color: '#f5f5f5',
                padding: '10px',
                border_radius: '4px',
                overflow: 'auto',
                font_size: '12px';
              }}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                {this.state.error.to_string ()}
                {this.state.error_info?.component_stack}
              </pre>;
            </details>)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
        </div>);
    }
    return this.props.children;
  }
}
class ErrorBoundary extends Component < Props, State> {constructor ("props": Props) {super (props)this.state = { "has_error": false }
}
  static getDerivedStateFromError ("error": Error): State {return { "has_error": true, error }
}
  componentDidCatch ("error": Error, "error_info": ErrorInfo) {console.error ('ErrorBoundary caught an "error":', error, error_info)this.set_state ({ error, error_info })}'
  handle_retry = () => {this.set_state ({ "has_error": false, "error": undefined, "error_info": undefined })}
  render () {// Check condition;
}
if ( {) {$2;
}
class ErrorBoundary extends Component < Props, State> {constructor ("props": Props) {super (props)this.state = { "has_error": false }
}
  static getDerivedStateFromError ("error": Error): State ;
  return { "has_error": true, error }
}
  componentDidCatch ("error": Error, "error_info": ErrorInfo) {console.error ('ErrorBoundary caught an "error":', error, error_info)this.set_state ({ error, error_info })}'
  handle_retry = () => {this.set_state ({ "has_error": false, "error": undefined, "error_info": undefined }
}
  render () {// Check condition;
}
if ( {) {$2;
}
      // Check condition;
if ( {) {$2;
}
        return this.props.fallback;
}
      return (<div className="min - h-screen bg - gray - 900 flex items - center justify - center px - 4">;"
          <div className="max - w-md w - full bg - white / 5 backdrop - blur - sm border border - white / 10 rounded - 2xl p - 8 text - center">;"
            <div className="w - 16 h - 16 bg - red - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6">;"
              <AlertTriangle className="w - 8 h - 8 text - red - 400" />;"
            </div>;
            <h1 className="text - 2xl font - bold text - white mb - 4">;"
              Something went wrong;
            </h1>;
            <p className="text - gray - 300 mb - 6">;"
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.;'
            </p>;
              <details className="text-left mb-6">;"
                <summary className="text-gray-400 cursor-pointer mb-2">;"
                  Error Details (Development)</summary>;
                <pre className="text-xs text-red-400 bg-black/20 p-3 rounded overflow-auto">;"
<<<<<<< HEAD
=======
=======
        </div>)}
    return this.props.children;
  }
}
<<<<<<< HEAD
class ErrorBoundary extends Component < Props, State> {
  constructor (props: Props) {
    super (props);
    this.state = { has_error: false }
}
  static getDerivedStateFromError (error: Error): State {
    return { has_error: true, error }
}
  componentDidCatch (error: Error, error_info: ErrorInfo) {
    console.error ('ErrorBoundary caught an error:', error, error_info);
    this.set_state ({ error, error_info });
}
  handle_retry = () => {
    this.set_state ({ has_error: false, error: undefined, error_info: undefined });
}
  render () {
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        return this.props.fallback;
}
=======
class ErrorBoundary extends Component < Props, State> {constructor (props: Props) {super (props)this.state = { has_error: false }
}
  static getDerivedStateFromError (error: Error): State {return { has_error: true, error }
}
  componentDidCatch (error: Error, error_info: ErrorInfo) {console.error ('ErrorBoundary caught an error:', error, error_info)this.set_state ({ error, error_info })}
  handle_retry = () => {this.set_state ({ has_error: false, error: undefined, error_info: undefined })}
  render () {// Check condition;}
if ( {) {$2;}
}
class ErrorBoundary extends Component < Props, State> {constructor (props: Props) {super (props)this.state = { has_error: false },
}
  static getDerivedStateFromError (error: Error): State ;
  return { has_error: true, error }
}
  componentDidCatch (error: Error, error_info: ErrorInfo) {console.error ('ErrorBoundary caught an error:', error, error_info)this.set_state ({ error, error_info })}
  handle_retry = () => {this.set_state ({ has_error: false, error: undefined, error_info: undefined },
}
  render () {// Check condition;}
if ( {) {$2;}
}
      // Check condition;
if ( {) {$2;}
}
        return this.props.fallback;
}
<<<<<<< HEAD
      return (<div className=\"min - h-screen bg - gray - 900 flex items - center justify - center px - 4\"    />;
          <div className=\"max - w-md w - full bg - white / 5 backdrop - blur - sm border border - white / 10 rounded - 2xl p - 8 text - center\"    />;
            <div className=\"w - 16 h - 16 bg - red - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6\"    />;
              <AlertTriangle className=\"w - 8 h - 8 text - red - 400\"    />;
=======
>>>>>>> merged-prs-20250907-203621
      return (
        <div className="min - h-screen bg - gray - 900 flex items - center justify - center px - 4">;
          <div className="max - w-md w - full bg - white / 5 backdrop - blur - sm border border - white / 10 rounded - 2xl p - 8 text - center">;
            <div className="w - 16 h - 16 bg - red - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6">;
              <AlertTriangle className="w - 8 h - 8 text - red - 400" />;
<<<<<<< HEAD
            </div>;
            <h1 className="text - 2xl font - bold text - white mb - 4">;
              Something went wrong;
            </h1>;
            <p className="text - gray - 300 mb - 6">;
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.;
            </p>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>;
            <h1 className=\"text - 2xl font - bold text - white mb - 4\"    />;
              Something went wrong;
            </h1>;
            <p className=\"text - gray - 300 mb - 6\"    />;
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.;
            </p>;
<<<<<<< HEAD
              <details className=\"text-left mb-6\"    />;
                <summary className=\"text-gray-400 cursor-pointer mb-2\"    />;
                  Error Details (Development)</summary>;
                <pre className=\"text-xs text-red-400 bg-black/20 p-3 rounded overflow-auto\"    />;
=======
<<<<<<< HEAD
            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
=======


            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
              <details className="text-left mb-6">;
                <summary className="text-gray-400 cursor-pointer mb-2">;
                  Error Details (Development);
                </summary>;
                <pre className="text-xs text-red-400 bg-black/20 p-3 rounded overflow-auto">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  {this && this.state.error && error.toString()}
                  {this && this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            <div className="flex flex-col "sm":flex-row gap-4">;"
              <button;
                onClick={this && this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-blue-600 "hover":bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;"
                <RefreshCw className="w-4 h-4" />;"
                <span>Try Again</span>;
              </button>;
              <button
                onClick={() => window && window.location.reload()}
                className="bg-transparent border border-white/20 text-white "hover":bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;{process.env.NODE_ENV === 'development' && this.state.error && (<details className="text - left mb - 6">;"
                <summary className="text - gray - 400 cursor - pointer mb - 2">;"
                  }
                  Error Details (Development)</summary>;
                <pre className="text - xs text - red - 400 bg - black / 20 p - 3 rounded overflow - auto">;"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4">;
              <button
                onClick={this && this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;
                <RefreshCw className="w-4 h-4" />;
                <span>Try Again</span>;
=======
            <div className=\"flex flex-col sm:flex-row gap-4\"    />;
              <button;
                onClick={this && this.handleRetry}
                className=\"flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200\"    />;
                <RefreshCw className=\"w-4 h-4\"    />;
                <span    />Try Again</span>;
>>>>>>> merged-prs-20250907-203621
              </button>;
<<<<<<< HEAD
              <button;
                onClick={() =    /> window && window.location.reload()}
                className=\"bg-transparent border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-200\">;{process.env.NODE_ENV === 'development' && this.state.error && (<details className=\"text - left mb - 6\"    />;
                <summary className=\"text - gray - 400 cursor - pointer mb - 2\"    />;
                  Error Details (Development)</summary>;}
                <pre className=\"text - xs text - red - 400 bg - black / 20 p - 3 rounded overflow - auto\"    />;}
=======
              <button
                onClick={() => window && window.location.reload()}
                className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;
;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text - left mb - 6">;
                <summary className="text - gray - 400 cursor - pointer mb - 2">;
                  Error Details (Development);
                </summary>;
                <pre className="text - xs text - red - 400 bg - black / 20 p - 3 rounded overflow - auto">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  {this.state.error.to_string ()}
                  {this.state.error_info?.component_stack}
                </pre>;
              </details>)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            <div className="flex flex - col "sm":flex - row gap - 4">;"
              <button;
                on_click={this.handle_retry}
                className="flex items - center justify - center space - x-2 bg - blue - 600 "hover":bg - blue - 700 text - white px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200">;"
                <RefreshCw className="w - 4 h - 4" />;"
                <span > Try Again</span>;
              </button>;
              <button;
                on_click={() => window.location.reload ()}
                className="bg - transparent border border - white / 20 text - white "hover":bg - white / 10 px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200">;"
                Refresh Page;
              </button>;
            </div>;
          </div>;
        </div>)}
        </div>;
      )} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
}
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
    return this.props.children;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
            <div className="flex flex - col sm:flex - row gap - 4">;
              <button;
                on_click={this.handle_retry}
                className="flex items - center justify - center space - x-2 bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200">;
                <RefreshCw className="w - 4 h - 4" />;
                <span > Try Again</span>;
=======
            <div className=\"flex flex - col sm:flex - row gap - 4\"    />;
              <button;
                on_click={this.handle_retry}
                className=\"flex items - center justify - center space - x-2 bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200\"    />;
                <RefreshCw className=\"w - 4 h - 4\"    />;
                <span     /> Try Again</span>;
>>>>>>> merged-prs-20250907-203621
              </button>;
              <button;
<<<<<<< HEAD
                on_click={() =    /> window.location.reload ()}
                className=\"bg - transparent border border - white / 20 text - white hover:bg - white / 10 px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200\">;
=======
                on_click={() => window.location.reload ()}
                className="bg - transparent border border - white / 20 text - white hover:bg - white / 10 px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                Refresh Page;
              </button>;
            </div>;
          </div>;
<<<<<<< HEAD
        </div>);
}
        </div>
      );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
        </div>)}
        </div>;
      )} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
<<<<<<< HEAD
    return this.props.children;
    } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}return this.props.children;
  }
}export default ErrorBoundary;ursor/automate-test-improve-and-merge-code-646c;
          </div>
<<<<<<< HEAD
    </div>
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  );
}
        </div>;
      )} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
}
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}
    return this.props.children;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}return this.props.children;
  }
}

    return this.props.children;
  }
}

main

main

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
=======
=======
    </div>
  );
}
        </div>;
      )} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" },
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
=======
<<<<<<< HEAD
    return this && this.props.children;
=======


    return this && this.props.children;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this.props.children;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
}
}
 ,
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })},
}
    return this.props.children;
    } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" },
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
 ,
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
 ,
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" },
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
 ,
} catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })},
}return this.props.children;
>>>>>>> origin/chore/fix-lint-and-merge
  }
}

export default ErrorBoundary;ursor/automate-test-improve-and-merge-code-646c;

export default ErrorBoundary;
}
    return this.props.children;
  }
}

export default ErrorBoundary;

<<<<<<< HEAD
main

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
export default ErrorBoundary;
<<<<<<< HEAD
        </div>
      );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return this.props.children;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


=======
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
