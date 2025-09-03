<<<<<<< HEAD
import React, { Component } from 'react' import { motion } from 'framer-motion' import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline' class EnhancedErrorBoundary extends Component { constructor(props) { super(props) this.state = { hasError: false, error: null, errorInfo: null, errorId: null, showStackTrace: false }} static getDerivedStateFromError(error) { return { hasError: true, error, errorId: this.generateErrorId() }} componentDidCatch(error, errorInfo) { this.setState({ errorInfo });
;
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function EnhancedErrorBoundary() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="EnhancedErrorBoundary - Zion Tech Group" description="Professional EnhancedErrorBoundary services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">EnhancedErrorBoundary</h1>
        <p className="text-gray-300 text-lg">
          Professional EnhancedErrorBoundary services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import React, { Component } from &apos;react&apos; import { motion } from &apos;framer-motion&apos; import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from &apos;@heroicons/react/24/outline&apos; class EnhancedErrorBoundary extends Component { ;&apos;}constructor(props) { super(props) this.state = { hasError: false, error: null, errorInfo: null, errorId: null, showStackTrace: false }} static getDerivedStateFromError(error) { return { hasError: true, error, errorId: this.generateErrorId() }} componentDidCatch(error, errorInfo) { this.setState({ errorInfo })';
;&apos;'
=======
<<<<<<< HEAD
import React, { Component } from 'react' import { motion } from 'framer-motion' import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline' class EnhancedErrorBoundary extends Component { constructor(props) { super(props) this.state = { hasError: false, error: null, errorInfo: null, errorId: null, showStackTrace: false }} static getDerivedStateFromError(error) { return { hasError: true, error, errorId: this.generateErrorId() }} componentDidCatch(error, errorInfo) { this.setState({ errorInfo })';'
;
<<<<<<< HEAD
""
}}
=======
=======
import React, { Component } from 'react' import { motion } from 'framer-motion' import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon }  from '@heroicons/react/24/outline';class EnhancedErrorBoundary extends Component { constructor(props) { super(props) this.state = { hasError: false, error: null, errorInfo: null, errorId: null, showStackTrace: false }} static getDerivedStateFromError(error) { return { hasError: true, error, errorId: this.generateErrorId() }} componentDidCatch(error, errorInfo) { this.setState({ errorInfo })
;
"
}}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
