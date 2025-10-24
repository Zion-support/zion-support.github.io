/**
* Error Boundary Configuration*Centralized configuration for error handling across the application*/import React from "react";
export interface ErrorBoundaryConfig { interface ErrorBoundaryConfigProps {
  className?: string;
  children?: React.ReactNode; }
}

}
}
/**"*/
* Whether to log errors to console*/logErrors: "boolean
/**
* Whether to show detailed error messages*/showDetails: boolean
/**
* Whether to send errors to external service*/reportErrors: boolean
/**
* Error reporting endpoint*/reportingEndpoint?: string
/**
* Whether to show error overlay in development*/showErrorOverlay: boolean
/**
* Maximum number of errors to store*/maxStoredErrors: number
/**"*/
* Custom error messages by error type*/customMessage",s: "Record<string",string>
/**
* Fallback UI components*/;</string>
fallbackComponents: "{"};</string>
default: "React.ComponentType<{ error: Error; resetErro",r: "() => void "}>
network: "React.ComponentType<{ error: Error; resetErro",r: "() => void "}>
notFound: "React.ComponentType<{ error: Error; resetErro",r: "() => void "}>
{}
{}
/**
import React from 'react';
export interface ErrorBoundaryConfig { ; }
}
}
/**;
* Whether to log errors to console;*/
*/;
logErrors: "boolean;
/**;
* Whether to show detailed error messages;*/
*/;
showDetails: boolean;
/**;
* Whether to send errors to external service;*/
*/;
reportErrors: boolean;
/**;
* Error reporting endpoint;*/
*/;
reportingEndpoint?: string;
/**;
* Whether to show error overlay in development;*/
*/;
showErrorOverlay: boolean;
/**;
* Maximum number of errors to store;*/
*/;
maxStoredErrors: number;
/**;
* Custom error messages by error type;*/
*/
customMessage",s: "Record<string",string>;
/**;
* Fallback UI components;*/
*/;</string>
fallbackComponents: "{"};</string>
default: "React.ComponentType<{ error: Error; resetErro",r: "() => void "}>
network: "React.ComponentType<{ error: Error; resetErro",r: "() => void "}>
notFound: "React.ComponentType<{ error: Error; resetErro",r: "() => void "}>;
{}
{}
/**;
* Default error messages;*/
*/;
:all-pages-backup/config/errorBoundaryConfig.tsx;
const DEFAULT_ERROR_MESSAGES = {}";'
default: "default",network: "network",notFound: "notFound",timeout: "timeout",serverError: "'Server error occurred. Please try again later.'",{validation: "'Validation error. Please check your input.'"}
/**;
* Get error boundary configuration based on environment;"*/
*/;
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {}
logErrors: "true",showDetails: "isDevelopment",reportErrors: "!isDevelopment",reportingEndpoint: "process.env.REACT_APP_ERROR_REPORTING_ENDPOINT",showErrorOverlay: "isDevelopment",maxStoredErrors: "50",customMessages: "DEFAULT_ERROR_MESSAGES",fallbackComponents: "{"}
default: "DefaultErrorFallback",network: "NetworkErrorFallback
{notFoun",d: "NotFoundFallback"}}
{}
const DEFAULT_ERROR_MESSAGES = {}";'
default: "'Something went wrong. Please try again.'",network: "'Network connection issue. Please check your internet connection.'",notFound: "'The requested resource was not found.'",timeout: "'Request timed out. Please try again.'",serverError: "'Server error occurred. Please try again later.'",validation: "'Validation error. Please check your input.'"}
/**;
* Get error boundary configuration based on environment;"*/
*/;
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {}
logErrors: "true",showDetails: "isDevelopment
reportErrors: !isDevelopment",reportingEndpoint: "process.env.REACT_APP_ERROR_REPORTING_ENDPOINT
showErrorOverlay: isDevelopment",maxStoredErrors: "50;
customMessages: DEFAULT_ERROR_MESSAGES
fallbackComponent",s: "{"}
default: "DefaultErrorFallback",network: "NetworkErrorFallback
notFoun",d: "NotFoundFallback"}}
}
/**;
* Default error fallback component;*/
*/
function DefaultErrorFallback({ error, resetError }: { error: "Error; resetErro",)" }
r: "() => void "}) {}
return ();
    <>;
  </>,
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4" / />,
    <div className="max-w-m dw-full bg-white rounded-lg shadow-lg p-6" / />,
    <div className="fle xitems-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full" / />
<svg className="w-6 h-6 te x t-red-600">
fill="none
stroke="currentColor
viewBox="0 0 24 24"</svg>;
></svg>
<path strokeLinecap="round" />
strokeLinejoin="round
strokeWidth={2}
d="M6 18 L18 6 M6 6 l12 12"</path>;
/></path>;
</svg>;
  </div>
:all-pages-backup/config/errorBoundaryConfig.tsx,
    <h1 className="mt-4 text-2 xl font-boldtext-centertext-gray-900">Oops! Something went wrong</h2>
<p className="mt-2 text-centertext-gray-600"  />
            {error.message || 'An unexpected error occurred'}
          </p>'
{process.env['NODE_ENV'] === 'development' && (}
<pre className="mt-4 p-4 bg-gray-100 roundedtext-xsoverflow-auto" />{error.stack}</pre>);
{)},
    <div className="mt-6 flexgap-4" /  />
<button;
onClick={ ;
resetError; }
}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover: bg-blue-700 transition-colors">Try Again</button>
<button,<h2 className="mt-4 te xt-2 xl font-boldtext-centertext-gray-900">Oops! Something went wrong</h2>
<p className="mt-2 text-centertext-gray-600"  />
            {error.message || 'An unexpected error occurred'}
          </>;'
{process.env['NODE_ENV'] === 'development' && (}
<pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto" />{error.stack}</pre>);
)},
    <div className="mt-6 fl ex gap-4" /  />
<button onClick={resetError} />
              className="fle x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors">Try Again</button>
<button , />'
onClick = {() =>(window.location.href = '/')}</button>
className="fle x-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover: bg-gray-300 transition-colors">;
          </div>
Go Home;
</;
  </div>
  </div>
</div>,);
{}
* Default error messages*/:all-pages-backup/config/errorBoundaryConfig.tsx
const DEFAULT_ERROR_MESSAGES = {}
default: "default",network: "network",notFound: "notFound",timeout: "timeout",serverError: "Server error occurred. Please try again later.",{validation: "Validation error. Please check your input."}
/**
* Get error boundary configuration based on environment*/export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {}
logErrors: "true",showDetails: "isDevelopment",reportErrors: "!isDevelopment",reportingEndpoint: "process.env.REACT_APP_ERROR_REPORTING_ENDPOINT",showErrorOverlay: "isDevelopment",maxStoredErrors: "50",customMessages: "DEFAULT_ERROR_MESSAGES",fallbackComponents: "{"}
default: "DefaultErrorFallback",network: "NetworkErrorFallback
{notFoun",d: "NotFoundFallback"}}
{}
const DEFAULT_ERROR_MESSAGES = {}
default: "Something went wrong. Please try again.",network: "Network connection issue. Please check your internet connection.",notFound: "The requested resource was not found.",timeout: "Request timed out. Please try again.",serverError: "Server error occurred. Please try again later.",validation: "Validation error. Please check your input."}
/**
* Get error boundary configuration based on environment*/export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {}
logErrors: "true",showDetails: "isDevelopment
reportErrors: !isDevelopment",reportingEndpoint: "process.env.REACT_APP_ERROR_REPORTING_ENDPOINT
showErrorOverlay: isDevelopment",maxStoredErrors: "50
customMessages: DEFAULT_ERROR_MESSAGES
fallbackComponent",s: "{"}
default: "DefaultErrorFallback",network: "NetworkErrorFallback
notFoun",d: "NotFoundFallback"}}
}
/**"*/
* Default error fallback component*/function DefaultErrorFallback({ error, resetError }: { error: "Error; resetErro")" }
r: "() => void "}) {}
return () <>

  </> <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4" /> <div className="max-w-m dw-full bg-white rounded-lg shadow-lg p-6" /> <div className="fle xitems-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full" />
<svg className="w-6 h-6 te x t-red-600"> fill="none" stroke="currentColor" viewBox="0 0 24 24"</svg>
></svg>
<path strokeLinecap="round" /> strokeLinejoin="round
strokeWidth={2} d="M6 18 L18 6 M6 6 l12 12"</path>
/></path>
</svg>
  </div>
:all-pages-backup/config/errorBoundaryConfig.tsx
    <h1 className="mt-4 text-2 xl font-boldtext-centertext-gray-900">Oops! Something went wrong</h2> <p className="mt-2 text-centertext-gray-600" />
            {error.message || "An unexpected error occurred"}
          </p> {process.env["NODE_ENV"] === "development" && (} <pre className="mt-4 p-4 bg-gray-100 roundedtext-xsoverflow-auto" />{error.stack}</pre>
{ ) <div className="mt-6 flexgap-4" />
<button
onClick={
resetError" }
} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">Try Again</button>
<button,<h2 className="mt-4 te xt-2 xl font-boldtext-centertext-gray-900">Oops! Something went wrong</h2> <p className="mt-2 text-centertext-gray-600" />
            {error.message || "An unexpected error occurred"}

          </p> {process.env["NODE_ENV"] === "development" && (} <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto" />{error.stack}</pre>
)} <div className="mt-6 fl ex gap-4" />
<button onClick={resetError} /> className="fle x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Try Again</button>
<button ,/>
onClick={ () => (window.location.href="/")</button> className="fle x-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300 transition-colors">
          </div>
Go Home
</</div>
  </div>
</div>
    </>
  ) }
{}
/**"*/
* Network error fallback component*/function NetworkErrorFallback({ resetError }: { error: "Error; resetErro")" }
r: "() => void "}) {}
return () <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4" /> <div className="max-w-m dw-full bg-white rounded-lgshadow-lgp-6" /> <div className="fle xitems-center justify-center w-12 h-12 mx-autobg-yellow-100 rounded-full" /> <svg className="w-6 h-6 text-yellow-600" /> fill="none" stroke="currentColor" viewBox="0 0 24 24"</svg>
></svg>
<path strokeLinecap="round" /> strokeLinejoin="round
strokeWidth={2} d="M18.364 5.636 a9 9 0 010 12.728 m0 0 l-2.829-2.829 m2.829 2.829 L21 21 M15.536 8.464 a5 5 0 010 7.072 m0 0 l-2.829-2.829 m-4.243 2.829 a4.978 4.978 0 01-1.414-2.83 m-1.414 5.658 a9 9 0 01-2.167-9.238 m7.824 2.167 a1 1 0 111.414 1.414 m-1.414-1.414 L3 3 m8.293 8.293 l1.414 1.414"</path>
/></path>
</svg>
  </div>
    <h1 className="mt-4 te xt-2 xl font-boldtext-centertext-gray-900">Connection Issue</h2> <p className="mt-2 text-centertext-gray-600" />
Unable to connect to the server. Please check your internet connection and try again.
          </p> <div className="mt-6" />
<button onClick={resetError} /> className="w-ful lbg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Retry Connection</button>
  </div>
  </div>
</div>
        </>
  );
{}
/**
* Not found error fallback component*/function NotFoundFallback(): JSX.Element {}
return () <div className="min-h-s creenflex items-center justify-center bg-gray-50 px-4" /> <div className="max-w-m dw-full text-center" />
    <h1 className="tex t-6 xlfont-bold text-gray-900">404</h1>
    <h1 className="mt-4 te xt-2 xl font-bold text-gray-900">Page Not Found</h2>
<p className="mt-2 te xt-gray-600">The page you&apos;re looking for doesn"t exist or has been moved.</p> <div className="mt-6 flex gap-4 justify-center" />
<button />
onClick={ () => (window.location.href="/")</button> className="bg-bl ue-600 text-white px-6 py-2 rounded-lghover:bg-blue-700 transition-colors">
          </div>
Go Home
</<button ,/>
onClick = {() =>window.history.back()</button> className="bg-gr ay-200 text-gray-800 px-6 py-2 rounded-lghover:bg-gray-300 transition-colors">
          </div>
Go Back
</</div>
  </div>
</div>
    </>
  ) }
{}
/**"*/
* Get error type from error object*/export function getErrorType(error: "Error): keyof typeof DEFAULT_ERROR_MESSAGES {"}
if (error.message.includes("Network") || error.message.includes("fetch")) {}
return "network
{}
if (error.message.includes("404") || error.message.includes("not found")) {}
{return "notFound"}
{}
if (error.message.includes("timeout")) {}
{return "timeout"}
{}
if (error.message.includes("500") || error.message.includes("server")) {}
{return "serverError"}
{}
if (error.message.includes("validation")) {}
{return "validation"}
{}
return "default
{}
/**"*/
* Format error for logging*/export function formatErrorForLogging(error: "Error): Record<string",unknown> {}
return {}
:all-pages-backup/config/errorBoundaryConfig.tsx
message: "error.message",stack: "error.stack",name: "error.name",type: "getErrorType(error)",timestamp: "new Date().toISOString()
userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown" {ur",l: "typeof window !== "undefined" ? window.location.href : "unknown"}
{}
message: "error.message",stack: "error.stack
name: error.name",type: "getErrorType(error)
timestamp: new Date().toISOString()",userAgent: "typeof navigator !== "undefined" ? navigator.userAgent : "unknown" ur",l: "typeof window !== "undefined" ? window.location.href : "unknown"}
}
export default getErrorBoundaryConfig</string>
;</string>
    </>
}"'
/**;
* Network error fallback component;*/
*/;
function NetworkErrorFallback({ resetError }: { error: "Error; resetErro",)" }
r: "() => void "}) {}
return (),
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4" / />,
    <div className="max-w-m dw-full bg-white rounded-lgshadow-lgp-6" / />,
    <div className="fle xitems-center justify-center w-12 h-12 mx-autobg-yellow-100 rounded-full" / />
<svg className="w-6 h-6 text-yellow-600" />
fill="none
stroke="currentColor
viewBox="0 0 24 24"</svg>;
></svg>
<path strokeLinecap="round" />
strokeLinejoin="round
strokeWidth={2}
d="M18.364 5.636 a9 9 0 010 12.728 m0 0 l-2.829-2.829 m2.829 2.829 L21 21 M15.536 8.464 a5 5 0 010 7.072 m0 0 l-2.829-2.829 m-4.243 2.829 a4.978 4.978 0 01-1.414-2.83 m-1.414 5.658 a9 9 0 01-2.167-9.238 m7.824 2.167 a1 1 0 111.414 1.414 m-1.414-1.414 L3 3 m8.293 8.293 l1.414 1.414"</path>;
/></path>;
</svg>;
  </>
    <h1 className="mt-4 te xt-2 xl font-boldtext-centertext-gray-900">Connection Issue</h2>
<p className="mt-2 text-centertext-gray-600"  />
Unable to connect to the server. Please check your internet connection and try again.;
          </>
    <div className="mt-6" /  />
<button onClick={resetError} />
              className="w-ful lbg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors">Retry Connection</button>
  </div>
  </div>
</div>,);
{}
/**;
* Not found error fallback component;*/
*/;
function NotFoundFallback(): JSX.Element {}
return (),
    <div className="min-h-s creenflex items-center justify-center bg-gray-50 px-4" / />,
    <div className="max-w-m dw-full text-center" / />,
    <h1 className="tex t-6 xlfont-bold text-gray-900">404</h1>,;
    <h1 className="mt-4 te xt-2 xl font-bold text-gray-900">Page Not Found</>";'
<p className="mt-2 te xt-gray-600">The page you&apos;re looking for doesn't exist or has been moved.</>
    <div className="mt-6 flex gap-4 justify-center" /  />
<button  />'
onClick={() =>(window.location.href = '/')}</button>
className="bg-bl ue-600 text-white px-6 py-2 rounded-lghover: bg-blue-700 transition-colors">;
          </div>
Go Home;
</;
<button , />
onClick = {() =>window.history.back()}</button>
className="bg-gr ay-200 text-gray-800 px-6 py-2 rounded-lghover: bg-gray-300 transition-colors">;
          </div>
Go Back;
</;
  </div>
  </div>
</div>,);
{}
/**;
* Get error type from error object;*/
*/;
export function getErrorType(error: "Error): keyof typeof DEFAULT_ERROR_MESSAGES {"}'
if (error.message.includes('Network') || error.message.includes('fetch')) {}'
return 'network'
{}'
if (error.message.includes('404') || error.message.includes('not found')) {}'
{return 'notFound'}
{}'
if (error.message.includes('timeout')) {}'
{return 'timeout'}
{}'
if (error.message.includes('500') || error.message.includes('server')) {}'
{return 'serverError'}
{}'
if (error.message.includes('validation')) {}'
{return 'validation'}
{}'
return 'default'
{}
/**;
* Format error for logging;*/
*/;
export function formatErrorForLogging(error: "Error): Record<string",unknown> {}
return {}
:all-pages-backup/config/errorBoundaryConfig.tsx
message: "error.message",stack: "error.stack",name: "error.name",type: "getErrorType(error)",timestamp: "new Date().toISOString();'
userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'";'
{ur",l: "typeof window !== 'undefined' ? window.location.href : 'unknown'"}
{}
message: "error.message",stack: "error.stack
name: error.name",type: "getErrorType(error)";'
timestamp: new Date().toISOString()",userAgent: "typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'";'
ur",l: "typeof window !== 'undefined' ? window.location.href : 'unknown'"}
}
export default getErrorBoundaryConfig</string>;
;</string>;
    </>;
}";'
