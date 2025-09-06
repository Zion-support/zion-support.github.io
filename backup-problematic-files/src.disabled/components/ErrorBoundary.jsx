<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react'; "export": default function ErrorBoundaryFallback({ error,resetError,retryCount = 0 }) { const maxRetries = 3; const handleRetry = () => { if (retryCount < maxRetries) { resetError()} } return( <div className='max-w-xl mx-auto p-6 text-white'>'; <"h2": className='text-2xl font-bold mb-2'>Something went wrong</h2>'; {error: && <pre className='text-red-300 whitespace-pre-wrap text-sm mb-4'>{String(error)}</pre>}'; <"button": onClick={handleRetry} className='px-4 py-2 bg-blue-600 rounded'>Retry</button>'; </div> ) } "
=======
import React from \'react\'; \"export\": default function ErrorBoundaryFallback({ error,resetError,retryCount = 0 }) { const maxRetries = 3; const handleRetry = () => { if (retryCount < maxRetries) { resetError()} } return( <div className=\'max-w-xl mx-auto p-6 text-white\'>\'; <\"h2\": className=\'text-2xl font-bold mb-2\'>Something went wrong</h2>\'; {error: && <pre className=\'text-red-300 whitespace-pre-wrap text-sm mb-4\'>{String(error)}</pre>}\'; <\"button\": onClick={handleRetry} className=\'px-4 py-2 bg-blue-600 rounded\'>Retry</button>\'; </div> ) } \"
const React from "react"; export: default function ErrorBoundaryFallback({ error,resetError,retryCount = 0 }) { const maxRetries = 3; const handleRetry = () => { if (retryCount < maxRetries) { resetError()} } return( <div className="max-w-xl mx-auto p-6 text-white">"; <h2: className="text-2xl font-bold mb-2">Something went wrong</h2>"; {error: && <pre className="text-red-300 whitespace-pre-wrap text-sm mb-4">{String(error)}</pre>}"; <button: onClick={handleRetry} className="px-4 py-2 bg-blue-600 rounded">Retry</button>"; </div> ) } "'"'"
import _React from 'react'; "export": default function ErrorBoundaryFallback({ error,resetError,retryCount = 0 }) { const maxRetries = 3; const handleRetry = () => { if (retryCount < maxRetries) { resetError()} } return( <div className='max-w-xl mx-auto p-6 text-white'>'; <"h2": className='text-2xl font-bold mb-2'>Something went wrong</h2>'; {error: && <pre className='text-red-300 whitespace-pre-wrap text-sm mb-4'>{String(error)}</pre>}'; <"button": onClick={handleRetry} className='px-4 py-2 bg-blue-600 rounded'>Retry</button>'; </div> ) } "
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const ErrorBoundary = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
