import React from 'react';

const LoginErrorFallback: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LoginErrorFallback</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default LoginErrorFallback;
=======
    <div className="min-h-screen flex items-center justify-center bg-futuristic p-4">
      <div className="max-w-md w-full bg-zion-slate-dark rounded-xl border border-zion-cyan/20 p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        <h2 className="text-2xl font-bold text-white mb-4">
          Something went wrong
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login. Please try again.
        {process.env.NODE_ENV === 'development' && (
          <details className="text-left mb-6">
            <summary className="text-zion-cyan cursor-pointer text-sm">
              Error details
            <pre className="text-xs text-zion-slate-light mt-2 p-3 bg-zion-slate rounded overflow-auto">
              {error.message}
        )}
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
  );
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
