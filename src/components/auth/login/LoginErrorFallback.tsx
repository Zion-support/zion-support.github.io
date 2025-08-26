import React from 'react';

interface LoginErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const LoginErrorFallback: React.FC<LoginErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zion-blue-dark">
            <div className="max-w-md w-full mx-auto p-6">
                <div className="bg-zion-blue rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
                    <p className="text-zion-slate-light mb-6">
                        We encountered an error while loading the login page. Please try again.
                    </p>
                    <button
                        onClick={resetErrorBoundary}
                        className="px-6 py-3 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                    >
                        Try again
                    </button>
                    {process.env.NODE_ENV === 'development' && (
                        <details className="mt-4 text-left">
                            <summary className="text-zion-slate-light cursor-pointer">Error details</summary>
                            <pre className="text-xs text-zion-slate-light mt-2 p-2 bg-zion-blue-dark rounded overflow-auto">
                                {error.message}
                            </pre>
                        </details>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginErrorFallback;