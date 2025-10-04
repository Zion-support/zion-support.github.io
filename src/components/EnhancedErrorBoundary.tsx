<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error: ', error, errorInfo);
    }
    
    // Report error to external service
    this.reportError(error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };
    
    // For now, we'll just log it
    console.error('Error Report: ', errorReport);
    
    // In production, send to error reporting service:
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorReport)
    // });
  };

  getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or auth context
    return localStorage.getItem('userId');
  };

  getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    // const errorReport = {
    //   errorId: this.state.errorId,
    //   message: this.state.error?.message,
    //   stack: this.state.error?.stack,
    //   url: window.location.href,
    //   timestamp: new Date().toISOString()
    // };
    
    // Open email client with error details
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error ID: ${this.state.errorId}
Error Message: ${this.state.error?.message}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}

Please describe what you were doing when this error occurred:
[Your description here]

Stack Trace: ${this.state.error?.stack}
    `);
    
    window.open(`mailto:kleber@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified
                and is working to fix this issue.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Error Details:</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Error ID:</strong> {this.state.errorId}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Message:</strong> {this.state.error?.message || 'Unknown error'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
              <button
                onClick={this.handleReload}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">
                If this problem persists, please report it to our support team.
              </p>
              <button
                onClick={this.handleReportError}
                className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Report Error
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                  Development Details
                </summary>
                <pre className="mt-2 text-xs text-gray-600 bg-gray-100 p-3 rounded overflow-auto max-h-64">
                  {this.state.error?.stack}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
=======
import React, {ComponentErrorInfoReactNode }from 'react'; import {AlertTriangleRefreshCwHomeBug }from 'lucide-react'; interface Props {children: ReactNode; fallback?: ReactNode; onError?: (error: ErrorerrorInfo: ErrorInfo) => void; }interface State {hasError: boolean; error: Error | null; errorInfo: ErrorInfo | null; errorId: string; }class EnhancedErrorBoundary extends Component<PropsState > {constructor (props: Props) {super (props) ; this.state = {hasError: falseerror: nullerrorInfo: nullerrorId: '" }; }static getDerivedStateFromError (error: Error) : Partial<State > {// Generate unique error ID for tracking const errorId = `error_$ {Date.now () }_$ {Math.random () .toString (36) .substr (29) }`; return {hasError: trueerrorerrorId }; }componentDidCatch (error: ErrorerrorInfo: ErrorInfo) {this.setState ({errorerrorInfo }) ; // Log error to console in development if (process.env.NODE_ENV = == "development') {console.error ('Error Boundary caught an error:"errorerrorInfo) ; }// Call custom error handler if provided if (this.props.onError) {this.props.onError (errorerrorInfo) ; }// Send error to monitoring service in production if (process.env.NODE_ENV = == "production') {this.reportError (errorerrorInfo) ; } }private reportError = (error: ErrorerrorInfo: ErrorInfo) => {// In a real applicationyou would send this to your error monitoring service // For nowwe'll just log it console.error ('Production Error Report:" {errorId: this.state.errorIdmessage: error.messagestack: error.stackcomponentStack: errorInfo.componentStacktimestamp: new Date () .toISOString () userAgent: navigator.userAgenturl: window.location.href }) ; }; private handleRetry = () => {this.setState ({hasError: falseerror: nullerrorInfo: nullerrorId: "" }) ; }; private handleReload = () => {window.location.reload () ; }; private handleGoHome = () => {window.location.href = "/"; }; private handleReportBug = () => {const errorReport = {errorId: this.state.errorIdmessage: this.state.error ? .messagestack : this.state.error?.stackcomponentStack: this.state.errorInfo?.componentStacktimestamp: new Date () .toISOString () userAgent: navigator.userAgenturl: window.location.href }; // Create a mailto link with error details const subject = encodeURIComponent (`Bug Report - Error ID: $ {this.state.errorId }`) ; const body = encodeURIComponent (` Error Details: - Error ID: $ {errorReport.errorId }- Message: $ {errorReport.message }- URL: $ {errorReport.url }- Timestamp: $ {errorReport.timestamp }- User Agent: $ {errorReport.userAgent }Stack Trace: $ {errorReport.stack }Component Stack: $ {errorReport.componentStack }`) ; window.open (`mailto:support@ziontechgroup.com ? subject = $ {subject }&body=$ {body }`) ; }; render () {if (this.state.hasError) {// Use custom fallback if provided if (this.props.fallback) {return this.props.fallback; }return (<div className = "min-h-screen bg-gray-50 flex items-center justify-center px-4"> <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8"> <div className="text-center"> <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4"> <AlertTriangle className="h-8 w-8 text-red-600" /> </div> <h1 className="text-2xl font-bold text-gray-900 mb-2"> Oops! Something went wrong </h1> <p className="text-gray-600 mb-6"> We're sorrybut something unexpected happened.Our team has been notified. </p> {process.env.NODE_ENV === 'development' && this.state.error && (<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left"> <h3 className="text-sm font-medium text-red-800 mb-2">Error Details : </h3> <p className="text-sm text-red-700 mb-2"> <strong>Message:</strong> {this.state.error.message }</p> <details className="text-sm text-red-700"> <summary className="cursor-pointer font-medium">Stack Trace</summary> <pre className="mt-2 whitespace-pre-wrap text-xs"> {this.state.error.stack }</pre> </details> {this.state.errorInfo && (<details className="text-sm text-red-700 mt-2"> <summary className="cursor-pointer font-medium">Component Stack</summary> <pre className="mt-2 whitespace-pre-wrap text-xs"> {this.state.errorInfo.componentStack }</pre> </details>) }</div>) }<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"> <p className="text-sm text-blue-800"> <strong>Error ID:</strong> {this.state.errorId }</p> <p className="text-sm text-blue-700 mt-1"> Please include this ID when reporting the issue. </p> </div> <div className="flex flex-col sm:flex-row gap-3 justify-center"> <button onClick= {this.handleRetry }className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" > <RefreshCw className="h-4 w-4 mr-2" /> Try Again </button> <button onClick= {this.handleGoHome }className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" > <Home className="h-4 w-4 mr-2" /> Go Home </button> <button onClick= {this.handleReportBug }className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" > <Bug className="h-4 w-4 mr-2" /> Report Bug </button> <button onClick= {this.handleReload }className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" > <RefreshCw className="h-4 w-4 mr-2" /> Reload Page </button> </div> </div> </div> </div>) ; }return this.props.children; } }export default EnhancedErrorBoundary; importReact, {ComponentErrorInfoReactNode }from "reac, t";"; import { }from "lucide-react"; interface Props {children: ReactNode " }from "lucide-react";"; interface Props {childre, n: ReactNod, e; fallbac, k?: ReactNod, e; onErro, r?: (err, o r: Erro, rerrorInf, o: ErrorInf, o) => voi, d; }interface State {hasErro, r: boolea, n; erro, r: Erro, r | nul, l; errorInf, o: ErrorInf, o | nul, l; error, I d: strin, g; }classEnhancedErrorBoundaryextends Componen, t<Prop , sStat, e> {constructo, r (prop, s: Prop, s) {supe, r (prop, s) ; thi, s.stat, e = {hasErro, r: fals, e error: null errorInfo: null" errorI, d: ' }; " errorId: "" }; }staticgetDerivedStateFromError (erro, r: Erro, r) : Partia, l<Stat , e> {retur, n {hasError: true error errorId: `error, _$ {Date.no, w () }_$ {Mat, h.rando, m () .toStrin, g (36) .subst, r (2, 9) }`` }; }componentDidCatc, h (erro, r: Erro, rerrorInf, o: ErrorInf, o) {this.setState ({error errorInfo; }) ; // Logerrorto consoleindevelopment" if (proces, s.en, v.NODE_EN, V = == "development") {;" console.error ("ErrorBoundarycaught anerror: "errorerrorInfo) ;" " if (process.env.NODE_ENV = == "development") {';" console.error ("ErrorBoundarycaught anerror: "errorerrorInfo) ;"; }// Reporterrorto externalservice thi, s.reportErro, r (erro, rerrorInf, o) ; // Callcustomerror handlerifprovided if (thi, s.prop, s.onErro, r) {thi, s.prop, s.onErro, r (erro, rerrorInf, o) ; } }reportErro, r = (erro, r: Erro, rerrorInf, o: ErrorInf, o) => {// Ina, real applicatio, nyouwouldsend thistoan errorreportingservice; // likeSentry, LogRocke, torBugsnag const errorReport = {errorI, d: thi, s.stat, e.errorI, d messag, e: erro, r.messag, e stac, k: erro, r.stac, k componentStac, k: errorInf, o.componentStac, k timestam, p: newDate () .toISOStrin, g () userAgen, t: navigato, r.userAgen, t ur, l: windo, w.locatio, n.hre, f userI, d: thi, s.getUserI, d () sessionI, d: thi, s.getSessionId () };" // Fornowwe"lljustlog it;" console.error ("ErrorReport: "errorReport) ;" // Inproductionsendtoerror reportingservice:" // fetch ("/api/errors" {" // method: "POST" // header" s: {"Content-Type": "application/json" }// bod, y: JSO, N.stringify (errorReport) " // Fornowwe"lljustlog it';" console.error ("ErrorReport: "errorReport) ;";" // Inproductionsendtoerror reportingservice: // fetch ("/api/errors" {";" // method: "POST"";" // headers: {"Content-Type": "application/json" }"; // bod, y: JSO, N.stringif, y (errorRepor, t) // }) ; }; getUserI, d = () : string | null => {// GetuserID fromlocalStoragecookiesorauthcontext" return localStorage.getItem ("userId") ;"; }; getSessionId = () : string => {" let sessionId = sessionStorage.getItem ("sessionId") ;"; if (!sessionId) {sessionId = `session, _$ {Date.no, w () }_$ {Mat, h.random () .toString (36) .substr (29) }`;`;`" sessionStorag, e.setIte, m ("sessionId"sessionId) ; " sessionStorage.setItem ("sessionId"sessionId) ;"; }return sessionId; }; handleRetr, y = () => {thi, s.setStat, e ({hasErro, r: fals, e erro, r: nul, l errorInfo: null" errorId: " }) ; " errorId: "" }) ; }; handleReloa, d = () => {window.location.reload () ; }; handleGoHome = () => {" windo, w.locatio, n.hre, f = '/';"; }; handleReportErro, r = () => {const errorReport = {errorI, d: thi, s.stat, e.errorI, d messag, e: thi, s.stat, e.erro, r ? .messag, e stac, k : thi, s.stat, e.erro, r?.stac, k ur, l: windo, w.locatio, n.href timestamp: newDate () .toISOString () }; // Openemailclient witherrordetails const subject = encodeURIComponent (`ErrorReport - $ {thi, s.stat, e.errorI, d }`) ;`;` const body = encodeURIComponent (`` ErrorI, D: $ {thi, s.stat, e.errorI, d }ErrorMessage: $ {thi, s.stat, e.erro, r ? .messag, e }UR, L : $ {windo, w.locatio, n.hre, f }Timestam, p: $ {newDate () .toISOStrin, g () }Pleasedescribewhat youweredoing whenthiserror occurre, d: [Yourdescriptionhere] UR L: $ {windo, w.locatio, n.hre, f }Timestam, p: $ {newDate () .toISOStrin, g () }Pleasedescribewhat youweredoing whenthiserror occurre, d: [Yourdescriptionhere] StackTrace: $ {this.state.error?.stack }`) ;`;` window.open (`mailt, o:klebe, r@ziontechgrou, p.co, m ? subjec, t = $ {subjec, t }&body=$ {body }`) ;`;` }; rende, r () {if (thi, s.stat, e.hasErro, r) {// CustomfallbackUI if (thi, s.props.fallback) {return this.props.fallback; }// DefaulterrorUI return (<divclassName = "min-h-screenb, g-gra, y-50, flexitems-centerjustify-centerp, x-4" > <divclassName="ma, x-w-2xl, w-fullbg-whiterounded-lgshadow-lgp-8text-center" > <divclassName="mb-6" > <AlertTriangleclassName ="w-1, 6, h-16, text-red-500mx-automb-4 /> <h1className=" tex, t-2xlfont-boldtext-gra, y-900, mb-2"> Oops! Somethingwentwrong; </h1> <pclassName = "text-gray-600mb-4" >' We"resorrybutsomethingunexpected happened.Ourteamhas beennotified ; <divclassName = "min-h-screenb, g-gra, y-50flexitems-centerjustify-centerpx-4" >"; <divclassName = "ma, x-w-2xl, w-fullbg-whiterounded-lgshadow-lgp-8text-center" >"; <divclassName = "mb-6" >"; <AlertTriangleclassName = "w-1, 6, h-16text-red-500mx-automb-4" />"; <h1className = "text-2xlfont-boldtext-gray-900mb-2" >"; Oops! Somethingwentwrong; </h1> <pclassName = "text-gray-600mb-4" >";' We"resorrybutsomethingunexpected happened.Ourteamhas beennotified "; andisworking tofixthis issue. </p> </div> <divclassName = "bg-gra, y-100, rounded-lg, p-4, mb-6text-left" > <h3className="font-semiboldtext-gray-900mb-2" >ErrorDetails : </h3>" <pclassName="text-smtext-gray-600mb-2" > <stron, g>ErrorI, D:</stron, g> {thi, s.stat, e.errorId }</p> <pclassName="tex, t-smtext-gray-600" >" <stron, g>Messag, e:</stron, g> {this.state.error?.message || "Unknownerror" }; </p> </div> <divclassName = "flexflex-cols, m: flex-rowgap-3justify-center" >" <divclassName="bg-gra, y-100, rounded-lgp-4mb-6text-left" >"; <h3className = "font-semiboldtext-gray-900mb-2" >ErrorDetails: </h3>"; <pclassName = "text-smtext-gray-600mb-2" >"; <stron, g>Error, I D:</strong> {this.state.errorId }</p> <pclassName = "tex, t-smtext-gra, y-6, 0, 0" >";" <stron, g>Messag, e:</stron, g> {this.state.error ? .message || "Unknownerror' }"; </p> </div> <divclassName = "flexflex-cols, m : flex-rowgap-3justify-center" >"; <butto, n onClick = {this.handleRetry }className="inlin, e-flexitems-centerp, x-4, py-2, bg-blu, e-600, text-whiterounded-lghover: bg-blu, e-700, transition-color, s" > <RefreshCwclassName ="w-4 h-4mr-2 /> <RefreshCwclassName =" w-4 h-4mr-2" />"; TryAgain; </butto, n> <butto, n onClick = {this.handleGoHome }className="inlin, e-flexitems-centerp, x-4, py-2, bg-gra, y-600, text-whiterounded-lghover: bg-gra, y-700, transition-color, s" > <HomeclassName ="w-4 h-4mr-2 /> <HomeclassName =" w-4 h-4mr-2" />"; GoHome; </butto, n> <butto, n onClick = {this.handleReload }className="inlin, e-flexitems-centerp, x-4, py-2, borderborder-gra, y-300, text-gra, y-700, rounded-lghover: bg-gra, y-50, transition-color, s" > <RefreshCwclassName ="w-4 h-4mr-2 /> <RefreshCwclassName =" w-4 h-4mr-2" />"; ReloadPage; </button> </div> <divclassName = "mt-6, pt-6, border-tborder-gra, y-200" >"; <pclassName = "text-smtext-gray-500mb-3" >"; Ifthisproblem persist, spleasereportit tooursupport tea, m. </p> <butto, n onClick = {this.handleReportError }className="inlin, e-flexitems-centerp, x-4, py-2, text-blu, e-600, hover: tex, t-blu, e-700, transition-color, s" > <MailclassName ="w-4 h-4mr-2 /> <MailclassName =" w-4 h-4mr-2" />"; ReportError; </button> </div> {" proces, s.env.NODE_ENV = == "development" && this.state.errorInfo && (; <detailsclassName = "mt-6, text-left" > <summaryclassName="curso, r-pointertext-smfont-mediumtext-gra, y-700, hover: text-gray-900" > " process.env.NODE_ENV === "development" && this.state.errorInfo && ("; <detailsclassName = "mt-6text-left" >"; <summaryclassName = "curso, r-pointertext-smfont-mediumtext-gra, y-700, hove r: text-gray-900" >,"; DevelopmentDetails; </summary> <preclassName = "mt-2, text-xstext-gra, y-600, bg-gra, y-100p-3roundedoverflow-automax-h-64" >"; {thi, s.stat, e.erro, r?.stac, k; }{thi, s.stat, e.errorInf, o.componentStac, k }</pr, e> </detail, s>) }</div> </div>) ; }return this.props.children; } }export default EnhancedErrorBoundary;" 
>>>>>>> e01e43d0c93dff705d25015e1b19001d2377c295
