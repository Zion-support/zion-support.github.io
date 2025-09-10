<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from "react"; interface Props { children: ReactNode, fallback?: ReactNode, onError?: (error Error, errorInfo: ErrorInfo) => void,,
} interface State { hasError: boolean, error?: Error, errorInfo? ErrorInfo';
} export class EnhancedErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props), this.state = { hasError: false }} static getDerivedStateFromError(error: Error): State { return { hasError true, error }} componentDidCatch(error: Error, errorInfo: ErrorInfo) { this.setState({ error, errorInfo });"}}
=======
import React,{ Component,ErrorInfo,ReactNode } from 'react'; interface Props { children: ReactNod e; fallback?: ReactNode,onError?: (error Error,errorInfo: ErrorInf o) => void';'} interface State { hasError: boolean; error?: Error; errorInfo? ErrorInfo';';'} export class EnhancedErrorBoundary extends Component<Props,State> { constructor(props: Prop s) { super(props),this.state = { hasError: fals e }} static getDerivedStateFromError(error: Erro r): State { return { hasError true,error }} componentDidCatch(error: Erro r,errorInfo: ErrorInf o) { this.setState({ error,errorInfo });"';';';'; </Props>
>>>>>>> origin/automation-improvements
