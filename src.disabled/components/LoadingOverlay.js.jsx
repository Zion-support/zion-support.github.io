<<<<<<< HEAD

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
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return() <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return() <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
=======
<<<<<<< HEAD:src.disabled/components/LoadingOverlay.js.jsx
<<<<<<< HEAD
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return() <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return() <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return() <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return() <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/components/LoadingOverlay.js.jsx
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import _React from';react'';"export": const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return() <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white' />' </div>' ) } export default LoadingOverlay'';''';
import React from\';react\'';\"export\": const LoadingOverlay = ({ visible = false }) => {\' if (!visible) return null return () <div className=\'fixed inset-0 z-50 flex items-center justify-center bg-black/50\'>\' <Loader2 className=\'h-8 w-8 animate-spin text-white\' />\' </div>\' ) } export default LoadingOverlay\'';\''\';
const React from";react"";export: const LoadingOverlay = ({ visible = false }) => {" if (!visible) return null return () <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">" <Loader2 className="h-8 w-8 animate-spin text-white" />" </div>" ) } export default LoadingOverlay"";""";'"'"
import _React from';react'';"export": const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return () <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white' />' </div>' ) } export default LoadingOverlay'';''';
import _React from';react'';"export": const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return () <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white' />' </div>' ) } export default LoadingOverlay'';''';
