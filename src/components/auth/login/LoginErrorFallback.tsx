<<<<<<< HEAD
interface LoginErrorFallbackProps extends React.PropsWithChildren<{}> {
  error: Erro r;
  resetErrorBoundary: : unknown void};
export { function };
export default function LoginErrorFallback(...args[]):  {
  return ()
    <div className="min-h-screen flex items-center justify-center bg-futuristic p-4">;"
      <div className="max-w-md w-full bg-zion-slate-dark rounded-xl border border-zion-cyan/20 p-8 text-center">"
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">"
          <AlertTriangle className="w-8 h-8 text-red-400"   />
        </div>"
        <h2 className="text-2xl font-bold text-white mb-4">
          Something went wrong
        </h2>"
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login.Please try again.</p>
        {process.env.NODE_ENV === 'development' && ("
          <details className="text-left mb-6">"
            <summary className="text-zion-cyan cursor-pointer text-sm">
              Error details
            </summary>"
            <pre className="text-xs text-zion-slate-light mt-2 p-3 bg-zion-slate rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        <button
          onClick={resetErrorBoundary}"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover: fro m-zion-cyan-dark hover: t o-zion-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover: scal e-105"
        >"
          <RefreshCw className="w-4 h-4"   />;          Try Again;
        </button>;
      </div>;
    </div>;';
  )}';';
'"';
';';
interface LoginErrorFallbackProps extends React.PropsWithChildren<{}> { error: 'Erro r; resetErrorBoundary: : unknown void'}; export { function }; export default function LoginErrorFallback(...args[]): { return () <div className="min-h-screen flex items-center justify-center bg-futuristic p-4">;" <div className="max-w-md w-full bg-zion-slate-dark rounded-xl border border-zion-cyan/20 p-8 text-center">" <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">" <AlertTriangle className="w-8 h-8 text-red-400" /> </div>" <h2 className="text-2xl font-bold text-white mb-4"> Something went wrong </h2>" <p className="text-zion-slate-light mb-6"> We encountered an error while processing your login.Please try again.</p> {process.env.NODE_ENV === 'development' && (" <details className="text-left mb-6">" <summary className="text-zion-cyan cursor-pointer text-sm"> Error details </summary>" <pre className="text-xs text-zion-slate-light mt-2 p-3 bg-zion-slate rounded overflow-auto"> {error.message} </pre> </details> )} <button onClick={resetErrorBoundary}" className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover: fro m-zion-cyan-dark hover: t o-zion-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover: scal e-105" >" <RefreshCw className="w-4 h-4" />; Try Again; ></div> ></div> ></div> )} '"
interface LoginErrorFallbackProps extends React.PropsWithChildren<{}> { "error": 'Erro r; "resetErrorBoundary": ": unknown void'"}; export { function }; export default function LoginErrorFallback(...args[]): "{ return () <div className="min-h-screen flex items-center justify-center bg-futuristic p-4">;" <div className="max-w-md w-full bg-zion-slate-dark rounded-xl border border-zion-cyan/20 p-8 text-center">" <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">" <AlertTriangle className="w-8 h-8 text-red-400" /> </div>" <h2 className="text-2xl font-bold text-white mb-4"> Something went wrong </h2>" <p className="text-zion-slate-light mb-6"> We encountered an error while processing your login.Please try again.</p> {process.env.NODE_ENV === 'development' && (" <details className="text-left mb-6">" <summary className="text-zion-cyan cursor-pointer text-sm"> Error details </summary>" <pre className="text-xs text-zion-slate-light mt-2 p-3 bg-zion-slate rounded overflow-auto"> {error.message"} </pre> </details> )} <button onClick={resetErrorBoundary}" className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple "hover": "fro m-zion-cyan-dark "hover": t o-zion-purple-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform "hover": scal e-105" >" <RefreshCw className="w-4 h-4" />; Try Again; ></div> ></div> ></div> )"} '"
=======
import React from 'react';

interface LoginErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const LoginErrorFallback: React.FC<LoginErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We encountered an error while loading the login page.
          </p>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error Details
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error.message}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={resetErrorBoundary}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorFallback;
>>>>>>> origin/backup-improvements-20250827-015311
