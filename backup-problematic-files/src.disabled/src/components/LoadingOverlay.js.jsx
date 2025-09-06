<<<<<<< HEAD
<<<<<<< HEAD:backup-merge-conflicts/LoadingOverlay.js.jsx.backup


const React from "react"; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"'"'"

import _React from 'react'; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"

import _React from 'react'; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"

import _React from 'react'; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"
=======
<<<<<<< HEAD
import _React from 'react'; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"
=======
import React from \'react\'; \"export const LoadingOverlay = ({ visible = false }) => {\"; if(!visible) return null; return ( <div className=\"fixed inset-0 z-50 flex items-center justify-center bg-black/50\">\" <Loader2 className=\"h-8 w-8 animate-spin text-white\" />\" </div>\" )}; export default LoadingOverlay; \";\"
const React from "react"; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"'"'"
import _React from 'react'; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/components/LoadingOverlay.js.jsx
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \'react\'; \"export const LoadingOverlay = ({ visible = false }) => {\"; if(!visible) return null; return ( <div className=\"fixed inset-0 z-50 flex items-center justify-center bg-black/50\">\" <Loader2 className=\"h-8 w-8 animate-spin text-white\" />\" </div>\" )}; export default LoadingOverlay; \";\"
const React from "react"; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"'"'"
import _React from 'react'; "export const LoadingOverlay = ({ visible = false }) => {"; if(!visible) return null; return ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" )}; export default LoadingOverlay; ";"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
