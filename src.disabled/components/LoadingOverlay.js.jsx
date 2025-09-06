<<<<<<< HEAD
:src.disabled/components/LoadingOverlay.js.jsx
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return() <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return() <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return() <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return() <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
:temp_exclude/src.disabled/components/LoadingOverlay.js.jsx
=======

import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return() <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return() <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/components/LoadingOverlay.js.jsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return() <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return() <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import _React from';react'';"export": const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return() <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white' />' </div>' ) } export default LoadingOverlay'';''';
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return () <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return () <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
import _React from';react'';"export": const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return () <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white' />' </div>' ) } export default LoadingOverlay'';''';
import _React from';react'';"export": const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return () <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white' />' </div>' ) } export default LoadingOverlay'';''';
