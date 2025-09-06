



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import React,{ Component } from';react' import { motion } from';';framer-motion' import { ExclamationTriangleIcon,ArrowPathIcon,HomeIcon,DocumentTextIcon,BugAntIcon } from';';@heroicons/react/24/outline' "class": EnhancedErrorBoundary extends Component { constructor(props) { super(props) this.state = { hasError: fals,e,"error": 'nul',l,"errorInfo": 'nul',l,"errorId": 'nul',l,"showStackTrace": 'false'}} "static": getDerivedStateFromError(error) { return { hasError: tru,e,error,"errorId": this.generateErrorId()}} componentDidCatch(error,errorInfo) { this.setState({ "errorInfo": ''})'';''
=======
=======
"class\": EnhancedErrorBoundary extends Component { constructor(props) { super(props) this && this.state = { hasError: fals,e,\"error\": \'nul\',l,\"errorInfo\": \'nul\',l,\"errorId\": \'nul\',l,\"showStackTrace\": \'false\'}} \"static\": getDerivedStateFromError(error) { return { hasError: tru,e,error,\"errorId\": this && this.generateErrorId()}} componentDidCatch(error,errorInfo) { this && this.setState({ \"errorInfo\": \''})
class: EnhancedErrorBoundary extends Component { constructor(props) { super(props) this && this.state = { hasError: fals,e,error: "nul",l,errorInfo: "nul",l,errorId: "nul",l,showStackTrace: "false"}} static: getDerivedStateFromError(error) { return { hasError: tru,e,error,errorId: this && this.generateErrorId()}} componentDidCatch(error,errorInfo) { this && this.setState({ errorInfo: ""})'"'"

import React,{ Component } from';react' import { motion } from';';framer-motion' import { ExclamationTriangleIcon,ArrowPathIcon,HomeIcon,DocumentTextIcon,BugAntIcon } from';';@heroicons/react/24/outline' "class": EnhancedErrorBoundary extends Component { constructor(props) { super(props) this && this.state = { hasError: fals,e,"error": 'nul',l,"errorInfo": 'nul',l,"errorId": 'nul',l,"showStackTrace": 'false'}} "static": getDerivedStateFromError(error) { return { hasError: tru,e,error,"errorId": this && this.generateErrorId()}} componentDidCatch(error,errorInfo) { this && this.setState({ "errorInfo": ''})'';''

