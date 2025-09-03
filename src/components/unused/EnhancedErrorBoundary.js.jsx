<<<<<<< HEAD
import React, { Component } from 'react'; import { motion    } from 'framer-motion'; import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline'; class EnhancedErrorBoundary extends Component {; constructor(props) {; super(props); this.state = {; hasError: false,; error: null,; errorInfo: null,; errorId: null,; showStackTrace: false; }}; static getDerivedStateFromError(error) {; return {; hasError: true,; error,; errorId: this.generateErrorId(); }}; componentDidCatch(error, errorInfo) {; this.setState({ errorInfo });
=======
<<<<<<< HEAD

import React, { Component } from 'react'; import { motion } from 'framer-motion'; import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline'; class EnhancedErrorBoundary extends Component {; constructor(props) {; super(props); this.state = {; hasError: false,; error: null,; errorInfo: null,; errorId: null,; showStackTrace: false; }}; static getDerivedStateFromError(error) {; return {; hasError: true,; error,; errorId: this.generateErrorId(); }}; componentDidCatch(error, errorInfo) {; this.setState({ errorInfo });'';,"});,"})
;,"});,"})
import React, { Component } from 'react'; import { motion    } from 'framer-motion'; import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline'; class EnhancedErrorBoundary extends Component {; constructor(props) {; super(props); this.state = {; hasError: false,; error: null,; errorInfo: null,; errorId: null,; showStackTrace: false; }}; static getDerivedStateFromError(error) {; return {; hasError: true,; error,; errorId: this.generateErrorId(); }}; componentDidCatch(error, errorInfo) {; this.setState({ errorInfo });,"});,"})
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff;,"});,"})
=======
import React, { Component } from 'react' import { motion } from 'framer-motion' import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline' class EnhancedErrorBoundary extends Component { constructor(props) { super(props) this.state = { hasError: false, error: null, errorInfo: null, errorId: null, showStackTrace: false }} static getDerivedStateFromError(error) { return { hasError: true, error, errorId: this.generateErrorId() }} componentDidCatch(error, errorInfo) { this.setState({ errorInfo })';;
>>>>>>> main
>>>>>>> main
