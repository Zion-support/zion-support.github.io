// const Component  = () => {; import React { Component}ErrorInfo;ReactNode } from \"react\" interface Props {; children: \'ReactNode\'} fallback?: ReactNode}} onError?: (error: \'Erro\',r)errorInfo: \'ErrorInfo) => voi\',d} ; interface State {; hasError: \'boolean\'}} error?: Error: \'errorInfo?: ErrorInf\',o} ; class: \'ErrorBoundary extends Component<Props\',State></Props\',State>
                {; constructor(props: Props) {} super(props)}; this.state: = { hasError: false} } ; static: getDerivedStateFromError(error: Error): State: {} return { hasError: \'tru\'}e;error: \''} ; componentDidCatch(error: \'Erro\',r)errorInfo: ErrorInfo) {; this.setState()} if: (process.env['NODE_ENV'] = == \"development\") {\",\"}}\"; this.props.onError?.(error)errorInfo);} if: (process.env['NODE_ENV'] = == \"production\") {\"} this.logErrorToService(error}errorInfo)} ; private: logErrorToService = (error: Erro,r)errorInfo: ErrorInfo) =>
                {; fetch(\"/api/analytics/error\" {\" method: \"POST,\",\" headers: {\"} \"Content-Type\": \"application/json}\"},\" body: JSON.stringify({; error: {) message: \'error.messag\',e,stack: \'error.stac\',k} name: \'error.nam\'}e},errorInfo: {} componentStack: \'errorInfo.componentStac\'}k},url: \'window.location.hre\',f)timestamp: Date.now(),userAgent: \'navigator.userAgen\',t})}).catch(console.error)} ; private: handleRetry = () =>
                {} this.setState({ hasError: \'fals\',e,error: \'undefine\')d}errorInfo: \'undefined\'})} ; render() {; if: (this.state.hasError) {} if: (this.props.fallback) {}; return this.props.fallback} ; return(\"; <div className=\"min-h-screen flex items-center justify-center bg-gray-50\">\"</div> <div: className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\">\"</div> <div: className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4\">\"</div> <svg: className=\"w-6 h-6 text-red-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0: 0 24 24\",\" aria-hidden=\"true\">\",\"; <path: strokeLinecap = \"round\",\" strokeLinejoin=\"round\"> strokeWidth=\"{2}> d=\"M12: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\" />\"; ></div>
                </div>\"; <h1: className=\"text-xl font-semibold text-gray-900 text-center mb-2\">\"; Something: \'went wrong\'</$1>\"; <p className = \"text-gray-600 text-center mb-6\">\",\" We&apos,re: \'sorry\',but something unexpected happened. Please try refreshing the page.</$1>\"; <div: className = \"flex flex-col sm: flex-row: gap-3\">\",\"</div> <button: onClick=\"{this.handleRetr}y} className=\"flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover: bg-blue-700: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2: transition-colors\">\"; Try: \'Again\') </button>\"); <button onClick=\"{()\" => window.location.reload()}\" className=\"flex-1: bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover: bg-gray-300: focus:outline-none: focus:ring-2: focus:ring-gray-500: focus:ring-offset-2: transition-colors\">\"; Refresh: Page\" {process.env['NODE_ENV'] === \"development\" && this.state.error && (\",\") <details: className = \"mt-4 p-4 bg-gray-100 rounded-md\">\",\" <summary: className=\"cursor-pointer font-medium text-gray-700\">\"); Error: Details()</$1>\"}
                <pre className=\"mt-2 text-xs text-gray-600 overflow-auto\">\" {this.state.error.stac}k} ; ></div>
                {this.state.errorInfo: && (\"; <pre className=\"mt-2 text-xs text-gray-600 overflow-auto\">\") onError?: (error: \'Error\')errorInfo: \'ErrorInfo) => void\'} onError?: (erro)r: \'Error\'}errorInfo: \'ErrorInfo) => void\'} ; hasError: \'boolean\'; error?: Error; errorInfo?: ErrorInfo} ; error?: Error; class ErrorBoundary extends Component</p><Props,State></Props,State>
                { this.state = { hasError: \'false\' }} ; static getDerivedStateFromError(error: Error): State {; return { hasError: \'true\'}error }} ; componentDidCatch(error: \'Error\')errorInfo: ErrorInfo) {} this.state = { hasErro}; r: \'false\' }} ; return {hasErro;} r: \'true\'}error }} ; override componentDidCatch(error: \'Error\')errorInfo: ErrorInfo) {} error}; errorInfo}); if (process.env['NODE_ENV'] = == \"development\") {\" if (process.env['NODE_ENV'] === \"development\") {;}}} ; if (process.env['NODE_ENV'] === \"production\") {; override componentDidCatch(error: \'Error\')errorInfo: ErrorInfo) {} error}; errorInfo});} if (process.env['NODE_ENV'] = == \"development\") {\" if (process.env['NODE_ENV'] === \"development\") {}}} ; if (process.env['NODE_ENV'] === \"production\") {; private logErrorToService = (error: \'Error\')errorInfo: ErrorInfo) =>
                {; fetch(\"/api/analytics/error\" {\" fetch(\"/api/analytics/error\" {} method: \"POST\",\" headers: {\"}; \"Content-Type\": \"application/json\"}) message: \'error.message\',\" \"Content-Type\": \"application/json\"},body: JSON.stringify({} message: \'error.message\',stack: \'error.stack\'}name: \'error.name\'},errorInfo: {} componentStack: \'errorInfo.componentStack\'},url: \'window.location.href\')timestamp: Date.now(),userAgent: \'navigator.userAgent\'})}).catch(console.error)} ; erro; r: {; messag; e: \'error.message\'; stack: \'error.stack\'; name: \'error.name\'; errorInfo: {; componentStack: \'errorInfo.componentStack\'; componentStac; k: \'errorInfo.componentStack\'; url: \'window.location.href\'} timestamp: Date.now()}; userAgent: \'navigator.userAgent\'});} }).catch(console.error)} ; private handleRetry = () =>
                {; this.setState({ hasError: \'false\')error: \'undefined\'}errorInfo: \'undefined\' })} ; override render() {; if (this.state.hasError) {; if (this.props.fallback) {; return (\" <div className = \"min-h-screen flex items-center justify-center bg-gray-50\">\"</div> <div className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\">\"</div> <div className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4\"></div> <svg;\" return (; <div className=\"min-h-screen flex items-center justify-center bg-gray-50\"></div> <div className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\"></div> <svg; className=\"w-6 h-6 text-red-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\" <path; strokeLinecap=\"round\" strokeLinejoin=\"round} strokeWidth={2} className=\"w-6 h-6 text-red-600; fill=\"none; stroke=\"currentColor; viewBox=\"0 0 24 24; <path strokeLinecap=\"round; d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\" />\" className=\"w-6 h-6 text-red-600; fill=\"none; stroke=\"currentColor; viewBox=\"0 0 24 24; aria-hidden=\"true\">\" strokeLinecap=\"round; strokeLinejoin=\"round; ></div> <h1 className=\"text-xl font-semibold text-gray-900 text-center mb-2\"> Something went wrong\" ></div> <p className=\"text-gray-600 text-center mb-6\">\" We\"re sorry,but something unexpected happened. Please try refreshing the page.\"</p> <p className=\"text-gray-600 text-center mb-6\">\" We&apos;re sorry,but something unexpected happened. Please try refreshing the page.; We&apos;re sorry,but something unexpected happened. Please try refreshing the page.\"; ></div> <div className = \"flex flex-col sm: flex-row gap-3\">\"</$1> <button onClick={this.handleRetry} className=\"flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover: \'bg-blue-700 focus:outline-none focus:ring-2 focu\'; s: \'ring-blue-500 focu\',\" s: ring-offset-2 transition-colors> onClick=\"{this.handleRetry} className=\"flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors, <div className=\"flex space-x-3\">\" className=\"flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors\") Try Again,\" className=\"flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover: bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors\"); onClick=\"{()\" => window.location.reload()} className=\"flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover: \'bg-gray-300 focus:outline-none focus:ring-2 focu\'; s: \'ring-gray-500 focu\'; Refresh Page\" {process.env['NODE_ENV'] === \"development\" && this.state.error && (}
                </div> <details className=\"mt-4 p-4 bg-gray-100 rounded-md\"> className=\"flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover: bg-gray-300 transition-colors) {process.env['NODE_ENV'] === \"development\" && this.state.error && (\" <details className=\"mt-4 p-4 bg-gray-100 rounded-md\">\" <summary className=\"cursor-pointer font-medium text-gray-700\"> Error Details (Development Only)\" <pre className=\"mt-2 text-xs text-gray-600 overflow-auto\">}; {this.state.error.stack} ; {this.state.errorInfo && (\" ></div>
                {this.state.errorInfo && (\"} {this.state.errorInfo.componentStack} ) )}\" <details className=\"mt-4\">\" <summary className=\"text-sm font-medium text-gray-700 cursor-pointer\"> Error Details (Development)\" <div className=\"mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto\">\"</div> <div className=\"mb-2\"></div> <strong>Error:</strong>
                {this.state.error.message} ; <div></div> <strong>Component Stack: </strong>\" <pre className=\"whitespace-pre-wrap\"></$1>,return: \'this.props.children\'} ; return this.props.children} ; export default ErrorBoundary;\\" export default ErrorBoundary;\\"}}}}}}}})))))' const Component  = () => {; import React { Component}ErrorInfo;ReactNode } from "react" interface Props {; children: "ReactNode"} fallback?: ReactNode}} onError?: (error: "Erro",r)errorInfo: "ErrorInfo) => voi",d} ; interface State {; hasError: "boolean"}} error?: Error: "errorInfo?: ErrorInf",o} ; class: "ErrorBoundary extends Component<Props",State></Props",State>
                {; constructor(props: Props) {} super(props)}; this.state: = { hasError: false} } ; static: getDerivedStateFromError(error: Error): State: {} return { hasError: "tru"}e;error: ""} ; componentDidCatch(error: "Erro",r)errorInfo: ErrorInfo) {; this.setState()} if: (process.env['NODE_ENV'] = == "development") {","}}"; this.props.onError?.(error)errorInfo);} if: (process.env['NODE_ENV'] = == "production") {"} this.logErrorToService(error}errorInfo)} ; private: logErrorToService = (error: Erro,r)errorInfo: ErrorInfo) =>
                {; fetch("/api/analytics/error" {" method: "POST,"," headers: {"} "Content-Type": "application/json}"}," body: JSON.stringify({; error: {) message: "error.messag",e,stack: "error.stac",k} name: "error.nam"}e},errorInfo: {} componentStack: "errorInfo.componentStac"}k},url: "window.location.hre",f)timestamp: Date.now(),userAgent: "navigator.userAgen",t})}).catch(console.error)} ; private: handleRetry = () =>
                {} this.setState({ hasError: "fals",e,error: "undefine")d}errorInfo: "undefined"})} ; render() {; if: (this.state.hasError) {} if: (this.props.fallback) {}; return this.props.fallback} ; return(" <div className="text-left">"</div> <div: className="text-left">"</div> <div: className="text-left">"</div> <svg: className="text-left" , fill="none" stroke="currentColor" viewBox="0: 0 24 24"," aria-hidden="true">","; <path: strokeLinecap = "round"," strokeLinejoin="round"> strokeWidth="{2}> d="M12: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />"; ></div>
                </div>"; <h1: className="text-left">"; Something: "went wrong"</$1>"; <p className = "text-gray-600 text-center mb-6">"," We&apos,re: "sorry",but something unexpected happened. Please try refreshing the page.</$1>" <div: className = "flex flex-col sm: flex-row: gap-3">","</div> <button: onClick="{this.handleRetr}y} className="text-left">"; Try: "Again") </button>"); <button onClick="{()" => window.location.reload()}" className="text-left">"; Refresh: Page" {process.env['NODE_ENV'] === "development" && this.state.error && (",") <details: className = "mt-4 p-4 bg-gray-100 rounded-md">"," <summary: className="text-left">"); Error: Details()</$1>"}
                <pre className="text-left">" {this.state.error.stac}k} ; ></div>
                {this.state.errorInfo: && ("; <pre className="text-left">") onError?: (error: "Error")errorInfo: "ErrorInfo) => void"} onError?: (erro)r: "Error"}errorInfo: "ErrorInfo) => void"} ; hasError: "boolean"; error?: Error; errorInfo?: ErrorInfo} ; error?: Error; class ErrorBoundary extends Component</p><Props,State></Props,State>
                { this.state = { hasError: "false" }} ; static getDerivedStateFromError(error: Error): State {; return { hasError: "true"}error }} ; componentDidCatch(error: "Error")errorInfo: ErrorInfo) {} this.state = { hasErro}; r: "false" }} ; return {hasErro;} r: "true"}error }} ; override componentDidCatch(error: "Error")errorInfo: ErrorInfo) {} error}; errorInfo}); if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {;}}} ; if (process.env['NODE_ENV'] === "production") {; override componentDidCatch(error: "Error")errorInfo: ErrorInfo) {} error}; errorInfo});} if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {}}} ; if (process.env['NODE_ENV'] === "production") {; private logErrorToService = (error: "Error")errorInfo: ErrorInfo) =>
                {; fetch("/api/analytics/error" {" fetch("/api/analytics/error" {} method: "POST"," headers: {"}; "Content-Type": "application/json"}) message: "error.message"," "Content-Type": "application/json"},body: JSON.stringify({} message: "error.message",stack: "error.stack"}name: "error.name"},errorInfo: {} componentStack: "errorInfo.componentStack"},url: "window.location.href")timestamp: Date.now(),userAgent: "navigator.userAgent"})}).catch(console.error)} ; erro; r: {; messag; e: "error.message"; stack: "error.stack"; name: "error.name"; errorInfo: {; componentStack: "errorInfo.componentStack"; componentStac; k: "errorInfo.componentStack"; url: "window.location.href"} timestamp: Date.now()}; userAgent: "navigator.userAgent"});} }).catch(console.error)} ; private handleRetry = () =>
                {; this.setState({ hasError: "false")error: "undefined"}errorInfo: "undefined" })} ; override render() {; if (this.state.hasError) {; if (this.props.fallback) {; return (" <div className = "min-h-screen flex items-center justify-center bg-gray-50">"</div> <div className="text-left">"</div> <div className="text-left"></div> <svg;" return (; <div className="text-left"></div> <div className="text-left"></div> <svg; className="text-left" ; fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">" <path; strokeLinecap="round" strokeLinejoin="round} strokeWidth={2} className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; <path strokeLinecap="round; d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />" className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; aria-hidden="true">" strokeLinecap="round; strokeLinejoin="round; ></div> <h1 className="text-left"> Something went wrong" ></div> <p className="text-left">" We"re sorry,but something unexpected happened. Please try refreshing the page."</p> <p className="text-left">" We&apos;re sorry,but something unexpected happened. Please try refreshing the page.; We&apos;re sorry,but something unexpected happened. Please try refreshing the page."; ></div> <div className = "flex flex-col sm: flex-row gap-3">"</$1> <button onClick={this.handleRetry} className="text-left" bg-blue-700 focus: outline-none focus:ring-2 focu"; s: "ring-blue-500 focu"," s: ring-offset-2 transition-colors> onClick="{this.handleRetry} className="text-left" flex space-x-3">" className="text-left" ) Try Again," className="text-left"); onClick="{()" => window.location.reload()} className="text-left" bg-gray-300 focus: outline-none focus:ring-2 focu"; s: "ring-gray-500 focu"; Refresh Page" {process.env['NODE_ENV'] === "development" && this.state.error && (}
                <details className="text-left"> className="text-left" development" && this.state.error && (" <details className="text-left">" <summary className="text-left"> Error Details (Development Only)" <pre className="text-left">}; {this.state.error.stack} ; {this.state.errorInfo && (" ></div>
                {this.state.errorInfo && ("} {this.state.errorInfo.componentStack} ) )}" <details className="text-left">" <summary className="text-left"> Error Details (Development)" <div className="text-left">"</div> <div className="text-left"></div> <strong>Error:</strong>
                {this.state.error.message} ; <div></div> <strong>Component Stack: </strong>" <pre className="text-left"></$1>,return: "this.props.children"} ; return this.props.children} ; export default ErrorBoundary;" export default ErrorBoundary;"}}}}}}}})))))'"'"' const Component  = () => {; import _React { Component}ErrorInfo;ReactNode } from "react" interface Props {; children: 'ReactNode} fallback?: ReactNode}} onError?: (error: 'Erro,r)errorInfo: 'ErrorInfo) => voi,d} ; interface State {; hasError: 'boolean}} error?: Error: 'errorInfo?: ErrorInf,o} ; class: 'ErrorBoundary extends Component<Props,State></Props,State>
                {; constructor(props: Props) {} super(props)}; this.state: = { hasError: false} } ; static: getDerivedStateFromError(error: Error): State: {} return { hasError: 'tru}e;error: ''} ; componentDidCatch(error: 'Erro,r)errorInfo: ErrorInfo) {; this.setState()} if: (process.env['NODE_ENV'] = == "development") {","}}"; this.props.onError?.(error)errorInfo);} if: (process.env['NODE_ENV'] = == "production") {"} this.logErrorToService(error}errorInfo)} ; private: logErrorToService = (error: Erro,r)errorInfo: ErrorInfo) =>
                {; fetch("/api/analytics/error" {" method: "POST,"," headers: {"} "Content-Type": "application/json}"}," body: JSON.stringify({; error: {) message: 'error.messag,e,stack: 'error.stac,k} name: 'error.nam}e},errorInfo: {} componentStack: 'errorInfo.componentStac}k},url: 'window.location.hre,f)timestamp: Date.now(),userAgent: 'navigator.userAgen,t})}).catch(_console.error)} ; private: handleRetry = () =>
                {} this.setState({ hasError: 'fals,e,error: 'undefine)d}errorInfo: 'undefined'})} ; render() {; if: (this.state.hasError) {} if: (this.props.fallback) {}; return this.props.fallback} ; return("; <div className="text-left">"</div> <div: className="text-left">"</div> <div: className="text-left">"</div> <svg: className="text-left" , fill="none" stroke="currentColor" viewBox="0: 0 24 24"," aria-hidden="true">","; <path: strokeLinecap = "round"," strokeLinejoin="round"> strokeWidth="{2}> d="M12: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />"; ></div>
                </div>"; <h1: className="text-left">"; Something: 'went wrong</$1>"; <p className = "text-gray-600 text-center mb-6">"," We&apos,re: 'sorry,but something unexpected happened. Please try refreshing the page.</$1>"; <div: className = "flex flex-col sm: flex-row: gap-3">","</div> <button: onClick="{this.handleRetr}y} className="text-left">"; Try: 'Again) </button>"); <button onClick="{()" => window.location.reload()}" className="text-left">"; Refresh: Page" {process.env['NODE_ENV'] === "development" && this.state.error && (",") <details: className = "mt-4 p-4 bg-gray-100 rounded-md">"," <summary: className="text-left">"); Error: Details()</$1>"}
                <pre className="text-left">" {this.state.error.stac}k} ; ></div>
                {this.state.errorInfo: && ("; <pre className="text-left">") onError?: (error: 'Error)errorInfo: 'ErrorInfo) => void} onError?: (erro)r: 'Error}errorInfo: 'ErrorInfo) => void'} ; hasError: 'boolean; error?: Error; errorInfo?: ErrorInfo} ; error?: Error; class ErrorBoundary extends Component</p><Props,State></Props,State>
                { this.state = { hasError: 'false' }} ; static getDerivedStateFromError(error: Error): State {; return { hasError: 'true}error }} ; componentDidCatch(error: 'Error)errorInfo: ErrorInfo) {} this.state = { hasErro}; r: 'false' }} ; return {hasErro;} r: 'true}error }} ; override componentDidCatch(error: 'Error)errorInfo: ErrorInfo) {} error}; errorInfo}); if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {;}}} ; if (process.env['NODE_ENV'] === "production") {; override componentDidCatch(error: 'Error)errorInfo: ErrorInfo) {} error}; errorInfo});} if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {}}} ; if (process.env['NODE_ENV'] === "production") {; private logErrorToService = (error: 'Error)errorInfo: ErrorInfo) =>
                {; fetch("/api/analytics/error" {" fetch("/api/analytics/error" {} method: "POST"," headers: {"}; "Content-Type": "application/json"}) message: 'error.message," "Content-Type": "application/json"},body: JSON.stringify({} message: 'error.message,stack: 'error.stack}name: 'error.name'},errorInfo: {} componentStack: 'errorInfo.componentStack'},url: 'window.location.href)timestamp: Date.now(),userAgent: 'navigator.userAgent'})}).catch(_console.error)} ; erro; r: {; messag; e: 'error.message; stack: 'error.stack; name: 'error.name; errorInfo: {; componentStack: 'errorInfo.componentStack; componentStac; k: 'errorInfo.componentStack; url: 'window.location.href} timestamp: Date.now()}; userAgent: 'navigator.userAgent'});} }).catch(_console.error)} ; private handleRetry = () =>
                {; this.setState({ hasError: 'false)error: 'undefined}errorInfo: 'undefined' })} ; override render() {; if (this.state.hasError) {; if (this.props.fallback) {; return (" <div className = "min-h-screen flex items-center justify-center bg-gray-50">"</div> <div className="text-left">"</div> <div className="text-left"></div> <svg;" return (; <div className="text-left"></div> <div className="text-left"></div> <svg; className="text-left" ; fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">" <path; strokeLinecap="round" strokeLinejoin="round} strokeWidth={2} className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; <path strokeLinecap="round; d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />" className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; aria-hidden="true">" strokeLinecap="round; strokeLinejoin="round; ></div> <h1 className="text-left"> Something went wrong" ></div> <p className="text-left">" We"re sorry,but something unexpected happened. Please try refreshing the page."</p> <p className="text-left">" We&apos;re sorry,but something unexpected happened. Please try refreshing the page.; We&apos;re sorry,but something unexpected happened. Please try refreshing the page."; ></div> <div className = "flex flex-col sm: flex-row gap-3">"</$1> <button onClick={this.handleRetry} className="text-left" ; s: ring-offset-2 transition-colors> onClick="{this.handleRetry} className="text-left" flex space-x-3">" className="text-left" ) Try Again," className="text-left"); onClick="{()" => window.location.reload()} className="text-left" ; {process.env['NODE_ENV'] === "development" && this.state.error && (}
                <details className="text-left"> className="text-left" development" && this.state.error && (" <details className="text-left">" <summary className="text-left"> Error Details (Development) Only)" <pre className="text-left">}; {this.state.error.stack} ; {this.state.errorInfo && (" ></div>
                {this.state.errorInfo && ("} {this.state.errorInfo.componentStack} ) )}" <details className="text-left">" <summary className="text-left"> Error Details (Development)" <div className="text-left">"</div> <div className="text-left"></div> <strong>Error:</strong>
                {this.state.error.message} ; <div></div> <strong>Component Stack: </strong>" <pre className="text-left"></$1>,return: 'this.props.children'} ; return this.props.children} ; export default ErrorBoundary;" export default ErrorBoundary;"}}}}}}}})))))'
// const Component  = () => {; import React { Component}ErrorInfo;ReactNode } from \"react\" interface Props {/* TODO: Fix JSX expression */}
  n: \'ReactNode\'} fallback?: ReactNode}} onError?: (erro)
  r: \'Erro\',r)errorInf,
  o: \'ErrorInfo) => voi\',d} ; interface State {/* TODO: Fix JSX expression */}
  r: \'boolean\'}} error?: Erro,
  r: \'errorInfo?: ErrorInf\',o} ; clas,
  s: \'ErrorBoundary extends Component<Props\',State></Props\',State>
                {/* TODO: Fix JSX expression */}
  s: Props) {} super(props)}; this.stat,
  e: = {/* TODO: Fix JSX expression */}
  r: false} } ; stati,
  c: getDerivedStateFromError(erro)
  r: Error): Stat,
  e: {} return {/* TODO: Fix JSX expression */}
  r: \'tru\'}e;erro,
  r: \''} ; componentDidCatch(erro)
  r: \'Erro\',r)errorInf,
  o: ErrorInfo) {; this.setState()} i,"
  f: (process.env['NODE_ENV'] = == \"development\") {\",\"}}\"; this.props.onError?.(error)errorInfo);} i,"
  f: (process.env['NODE_ENV'] = == \"production\") {\"} this.logErrorToService(error}errorInfo)} ; privat,
  e: logErrorToService = (erro)
  r: Erro,r)errorInf,
  o: ErrorInfo) =>
                {/* TODO: Fix JSX expression */}"
  s: {\"} \"Content-Type\": \"application/json}\"},\" bod,
  y: JSON.stringify({/* TODO: Fix JSX expression */}
  k: \'error.stac\',k} nam,
  e: \'error.nam\'}e},errorInf,
  o: {} componentStac,
  k: \'errorInfo.componentStac\'}k},ur)
  l: \'window.location.hre\',f)timestam,
  p: Date.now(),userAgen,
  t: \'navigator.userAgen\',t})}).catch(console.error)} ; privat,
  e: handleRetry = () =>
                {} this.setState({/* TODO: Fix JSX expression */})
  r: \'undefine\')d}errorInf,
  o: \'undefined\'})} ; render() {/* TODO: Fix JSX expression */}
  f: (this.state.hasError) {} i,"
  f: (this.props.fallback) {}; return this.props.fallback} ; return(\"; <div className=\"min-h-screen flex items-center justify-center bg-gray-50\">\" <di,"
  v: className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\">\" <di,"
  v: className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4\">\" <sv,"
  g: className=\"w-6 h-6 text-red-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0: 0 24 24\",\" aria-hidden=\"true\">\",\"; <at,"$2 />
  h: strokeLinecap = \"round\",\" strokeLinejoin=\"round\"> strokeWidth=\"{2}> d=\"M1,"
  2: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\" />\"; ></div>
                </div>\"; <h,"
  1: className=\"text-xl font-semibold text-gray-900 text-center mb-2\">\"; Somethin,"
  g: \'went wrong\'</$1>\"; <p className = \"text-gray-600 text-center mb-6\">\",\" We&apos,r,"
  e: \'sorry\',but something unexpected happened. Please try refreshing the page.</$1>\"; <di,"
  v: className = \"flex flex-col,
  sm: flex-ro,"
  w: gap-3\">\",\" <butto,"
  n: onClick=\"{this.handleRetr}y} className=\"flex-1 bg-blue-600 text-white px-4 py-2 rounded-md,
  hover: bg-blue-70,
  0: focu,
  s:outline-non,
  e: focu,
  s:ring-2: focu,
  s:ring-blue-50,
  0: focu,"
  s:ring-offset-2: transition-colors\">\"; Tr,")
  y: \'Again\') </button>\"); <button onClick=\"{()\" => window.location.reload()}\" className=\"flex-1: bg-gray-200 text-gray-800 px-4 py-2 rounded-md,
  hover: bg-gray-30,
  0: focu,
  s:outline-non,
  e: focu,
  s:ring-2: focu,
  s:ring-gray-50,
  0: focu,"
  s:ring-offset-2: transition-colors\">\"; Refres,"
  h: Page\" {/* TODO: Fix JSX expression */}"
  r: Details()</$1>\"}
                <pre className=\"mt-2 text-xs text-gray-600 overflow-auto\">\" {this.state.error.stac}k} ; ></div>
                {/* TODO: Fix JSX expression */}
  o: \'ErrorInfo) => void\'} onError?: (erro)r: \'Error\'}errorInf,
  o: \'ErrorInfo) => void\'} ; hasErro,
  r: \'boolean\'; error?: Error; errorInfo?: ErrorInfo} ; error?: Error; class ErrorBoundary extends Component<Props,State></Props,State>
                {/* TODO: Fix JSX expression */}
  r: \'false\' }} ; static getDerivedStateFromError(erro)
  r: Error): State {/* TODO: Fix JSX expression */}
  r: \'true\'}error }} ; componentDidCatch(erro)
  r: \'Error\')errorInf,
  o: ErrorInfo) {} this.state = { hasErro}; r: \'false\' }} ; return {hasErro;} r: \'true\'}error }} ; override componentDidCatch(erro)
  r: \'Error\')errorInf,"
  o: ErrorInfo) {} error}; errorInfo}); if (process.env['NODE_ENV'] = == \"development\") {\" if (process.env['NODE_ENV'] === \"development\") {;}}} ; if (process.env['NODE_ENV'] === \"production\") {/* TODO: Fix JSX expression */}"
  o: ErrorInfo) {} error}; errorInfo});} if (process.env['NODE_ENV'] = == \"development\") {\" if (process.env['NODE_ENV'] === \"development\") {}}} ; if (process.env['NODE_ENV'] === \"production\") {/* TODO: Fix JSX expression */}"
  o: ErrorInfo) =>
                {; fetch(\"/api/analytics/error\" {\" fetch(\"/api/analytics/error\" {} metho,"
  d: \"POST\",\" header,")
  s: {\"}; \"Content-Type\": \"application/json\"}) messag,"
  e: \'error.message\',\" \"Content-Type\": \"application/json\"},bod,
  y: JSON.stringify({} messag,
  e: \'error.message\',stac,
  k: \'error.stack\'}nam,
  e: \'error.name\'},errorInf,
  o: {} componentStac,
  k: \'errorInfo.componentStack\'},ur)
  l: \'window.location.href\')timestam,
  p: Date.now(),userAgen,
  t: \'navigator.userAgent\'})}).catch(console.error)} ; erro; r: {/* TODO: Fix JSX expression */}
  l: \'window.location.href\'} timestam,
  p: Date.now()}; userAgen,
  t: \'navigator.userAgent\'});} }).catch(console.error)} ; private handleRetry = () =>
                {/* TODO: Fix JSX expression */}
  r: \'undefined\'}errorInf,"
  o: \'undefined\' })} ; override render() {; if (this.state.hasError) {; if (this.props.fallback) {; return (\" <div className = \"min-h-screen flex items-center justify-center bg-gray-50\">\" <div className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\">\" <div className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4\"> <svg;\" return (; <div className=\"min-h-screen flex items-center justify-center bg-gray-50\"> <div className=\"max-w-md w-full bg-white shadow-lg rounded-lg p-6\"> <svg; className=\"w-6 h-6 text-red-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\" <path; strokeLinecap=\"round\" strokeLinejoin=\"round} strokeWidth={2} className=\"w-6 h-6 text-red-600; fill=\"none; stroke=\"currentColor; viewBox=\"0 0 24 24; <path strokeLinecap=\"round; d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\" />\" className=\"w-6 h-6 text-red-600; fill=\"none; stroke=\"currentColor; viewBox=\"0 0 24 24; aria-hidden=\"true\">\" strokeLinecap=\"round; strokeLinejoin=\"round; ></div> <h1 className=\"text-xl font-semibold text-gray-900 text-center mb-2\"> Something went wrong\" ></div> <p className=\"text-gray-600 text-center mb-6\">\" We\"re sorry,but something unexpected happened. Please try refreshing the page.\" <p className=\"text-gray-600 text-center mb-6\">\" We&apos;re sorry,but something unexpected happened. Please try refreshing the page.; We&apos;re sorry,but something unexpected happened. Please try refreshing the page.\"; ></div> < className = \"flex flex-col,"$2 />
  sm: flex-row gap-3\">\"; < onClick={this.handleRetry} className=\"flex-1 bg-blue-600 text-white px-4 py-2 rounded-md,$2 />
  hover: \'bg-blue-700,
  focus:outline-none,"
  focus:ring-2 focu\'; s: \'ring-blue-500 focu\',\" s: ring-offset-2 transition-colors> onClick=\"{this.handleRetry} className=\"flex-1 bg-blue-600 text-white px-4 py-2 rounded-md,
  hover: bg-blue-700,
  focus:outline-none,
  focus:ring-2,
  focus:ring-blue-500,"
  focus:ring-offset-2 transition-colors, <div className=\"flex space-x-3\">\" className=\"flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg,")
  hover:bg-blue-700 transition-colors\") Try Again,\" className=\"flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md,
  hover: bg-gray-300,
  focus:outline-none,
  focus:ring-2,
  focus:ring-gray-500,"
  focus:ring-offset-2 transition-colors\"); onClick=\"{()\" => window.location.reload()} className=\"flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md,
  hover: \'bg-gray-300,
  focus:outline-none,"
  focus:ring-2 focu\'; s: \'ring-gray-500 focu\'; Refresh Page\" {process.env['NODE_ENV'] === \"development\" && this.state.error && (}
                <details className=\"mt-4 p-4 bg-gray-100 rounded-md\"> className=\"flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg,")
  hover: bg-gray-300 transition-colors) {process.env['NODE_ENV'] === \"development\" && this.state.error && (\" <details className=\"mt-4 p-4 bg-gray-100 rounded-md\">\" <summary className=\"cursor-pointer font-medium text-gray-700\"> Error Details (Development Only)\" <pre className=\"mt-2 text-xs text-gray-600 overflow-auto\">}; {this.state.error.stack} ; {this.state.errorInfo && (\" ></div>
                {this.state.errorInfo && (\"} {this.state.errorInfo.componentStack} ) )}\" <details className=\"mt-4\">\" <summary className=\"text-sm font-medium text-gray-700 cursor-pointer\"> Error Details (Development)\" <div className=\"mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto\">\" <div className=\"mb-2\"> <strong>Erro,
  r:</strong>
                {this.state.error.message} ; <div> <strong>Component,"
  Stack: </strong>\" <pre className=\"whitespace-pre-wrap\"></$1>,retur,"
  n: \'this.props.children\'} ; return this.props.children} ; export default ErrorBoundary;\\" export default ErrorBoundary;\\"}}}}}}}})))))' const Component  = () => {; import React { Component}ErrorInfo;ReactNode } from "react" interface Props {/* TODO: Fix JSX expression */}"
  n: "ReactNode"} fallback?: ReactNode}} onError?: (erro,")
  r: "Erro",r)errorInf,"
  o: "ErrorInfo) => voi",d} ; interface State {/* TODO: Fix JSX expression */}"
  r: "boolean"}} error?: Erro,"
  r: "errorInfo?: ErrorInf",o} ; clas,"
  s: "ErrorBoundary extends Component<Props",State></Props",State>
                {/* TODO: Fix JSX expression */}
  s: Props) {} super(props)}; this.stat,
  e: = {/* TODO: Fix JSX expression */}
  r: false} } ; stati,
  c: getDerivedStateFromError(erro)
  r: Error): Stat,
  e: {} return {/* TODO: Fix JSX expression */}"
  r: "tru"}e;erro,"
  r: ""} ; componentDidCatch(erro,")
  r: "Erro",r)errorInf,
  o: ErrorInfo) {; this.setState()} i,"
  f: (process.env['NODE_ENV'] = == "development") {","}}"; this.props.onError?.(error)errorInfo);} i,"
  f: (process.env['NODE_ENV'] = == "production") {"} this.logErrorToService(error}errorInfo)} ; privat,
  e: logErrorToService = (erro)
  r: Erro,r)errorInf,
  o: ErrorInfo) =>
                {/* TODO: Fix JSX expression */}"
  s: {"} "Content-Type": "application/json}"}," bod,
  y: JSON.stringify({/* TODO: Fix JSX expression */}"
  k: "error.stac",k} nam,"
  e: "error.nam"}e},errorInf,
  o: {} componentStac,"
  k: "errorInfo.componentStac"}k},ur,")
  l: "window.location.hre",f)timestam,
  p: Date.now(),userAgen,"
  t: "navigator.userAgen",t})}).catch(console.error)} ; privat,
  e: handleRetry = () =>
                {} this.setState({/* TODO: Fix JSX expression */}")
  r: "undefine")d}errorInf,"
  o: "undefined"})} ; render() {/* TODO: Fix JSX expression */}
  f: (this.state.hasError) {} i,"
  f: (this.props.fallback) {}; return this.props.fallback} ; return(" <div className="text-left">" <di,"
  v: className="text-left">" <di,"
  v: className="text-left">" <sv,"
  g: className="text-left" , fill="none" stroke="currentColor" viewBox="0: 0 24 24"," aria-hidden="true">","; <at,"$2 />
  h: strokeLinecap = "round"," strokeLinejoin="round"> strokeWidth="{2}> d="M1,"
  2: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />"; ></div>
                </div>"; <h,"
  1: className="text-left">"; Somethin,"
  g: "went wrong"</$1>"; <p className = "text-gray-600 text-center mb-6">"," We&apos,r,"
  e: "sorry",but something unexpected happened. Please try refreshing the page.</$1>" <di,"
  v: className = "flex flex-col,
  sm: flex-ro,"
  w: gap-3">"," <butto,"
  n: onClick="{this.handleRetr}y} className="text-left">"; Tr,")
  y: "Again") </button>"); <button onClick="{()" => window.location.reload()}" className="text-left">"; Refres,"
  h: Page" {/* TODO: Fix JSX expression */}"
  r: Details()</$1>"}
                <pre className="text-left">" {this.state.error.stac}k} ; ></div>
                {/* TODO: Fix JSX expression */}"
  o: "ErrorInfo) => void"} onError?: (erro)r: "Error"}errorInf,"
  o: "ErrorInfo) => void"} ; hasErro,"
  r: "boolean"; error?: Error; errorInfo?: ErrorInfo} ; error?: Error; class ErrorBoundary extends Component<Props,State></Props,State>
                {/* TODO: Fix JSX expression */}"
  r: "false" }} ; static getDerivedStateFromError(erro)
  r: Error): State {/* TODO: Fix JSX expression */}"
  r: "true"}error }} ; componentDidCatch(erro,")
  r: "Error")errorInf,"
  o: ErrorInfo) {} this.state = { hasErro}; r: "false" }} ; return {hasErro;} r: "true"}error }} ; override componentDidCatch(erro,")
  r: "Error")errorInf,"
  o: ErrorInfo) {} error}; errorInfo}); if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {;}}} ; if (process.env['NODE_ENV'] === "production") {/* TODO: Fix JSX expression */}"
  o: ErrorInfo) {} error}; errorInfo});} if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {}}} ; if (process.env['NODE_ENV'] === "production") {/* TODO: Fix JSX expression */}"
  o: ErrorInfo) =>
                {; fetch("/api/analytics/error" {" fetch("/api/analytics/error" {} metho,"
  d: "POST"," header,")
  s: {"}; "Content-Type": "application/json"}) messag,"
  e: "error.message"," "Content-Type": "application/json"},bod,
  y: JSON.stringify({} messag,"
  e: "error.message",stac,"
  k: "error.stack"}nam,"
  e: "error.name"},errorInf,
  o: {} componentStac,"
  k: "errorInfo.componentStack"},ur,")
  l: "window.location.href")timestam,
  p: Date.now(),userAgen,"
  t: "navigator.userAgent"})}).catch(console.error)} ; erro; r: {/* TODO: Fix JSX expression */}"
  l: "window.location.href"} timestam,
  p: Date.now()}; userAgen,"
  t: "navigator.userAgent"});} }).catch(console.error)} ; private handleRetry = () =>
                {/* TODO: Fix JSX expression */}"
  r: "undefined"}errorInf,"
  o: "undefined" })} ; override render() {; if (this.state.hasError) {; if (this.props.fallback) {; return (" <div className = "min-h-screen flex items-center justify-center bg-gray-50">" <div className="text-left">" <div className="text-left"> <svg;" return (; <div className="text-left"> <div className="text-left"> <svg; className="text-left" ; fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">" <path; strokeLinecap="round" strokeLinejoin="round} strokeWidth={2} className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; <path strokeLinecap="round; d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />" className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; aria-hidden="true">" strokeLinecap="round; strokeLinejoin="round; ></div> <h1 className="text-left"> Something went wrong" ></div> <p className="text-left">" We"re sorry,but something unexpected happened. Please try refreshing the page." <p className="text-left">" We&apos;re sorry,but something unexpected happened. Please try refreshing the page.; We&apos;re sorry,but something unexpected happened. Please try refreshing the page."; ></div> < className = "flex flex-col,"$2 />
  sm: flex-row gap-3">"; < onClick={this.handleRetry} className="text-left" bg-blue-700,$2 />
  focus: outline-none,")
  focus:ring-2 focu"; s: "ring-blue-500 focu"," s: ring-offset-2 transition-colors> onClick="{this.handleRetry} className="text-left" flex space-x-3">" className="text-left" ) Try Again," className="text-left"); onClick="{()" => window.location.reload()} className="text-left" bg-gray-300,
  focus: outline-none,"
  focus:ring-2 focu"; s: "ring-gray-500 focu"; Refresh Page" {process.env['NODE_ENV'] === "development" && this.state.error && (}
                <details className="text-left"> className="text-left" development" && this.state.error && (" <details className="text-left">" <summary className="text-left"> Error Details (Development Only)" <pre className="text-left">}; {this.state.error.stack} ; {this.state.errorInfo && (" ></div>
                {this.state.errorInfo && ("} {this.state.errorInfo.componentStack} ) )}" <details className="text-left">" <summary className="text-left"> Error Details (Development)" <div className="text-left">" <div className="text-left"> <strong>Erro,
  r:</strong>
                {this.state.error.message} ; <div> <strong>Component,"
  Stack: </strong>" <pre className="text-left"></$1>,retur,"
  n: "this.props.children"} ; return this.props.children} ; export default ErrorBoundary;" export default ErrorBoundary;"}}}}}}}})))))'"'"' const Component  = () => {; import _React { Component}ErrorInfo;ReactNode } from "react" interface Props {/* TODO: Fix JSX expression */}
  n: 'ReactNode} fallback?: ReactNode}} onError?: (erro)
  r: 'Erro,r)errorInf,
  o: 'ErrorInfo) => voi,d} ; interface State {/* TODO: Fix JSX expression */}
  r: 'boolean}} error?: Erro,
  r: 'errorInfo?: ErrorInf,o} ; clas,
  s: 'ErrorBoundary extends Component<Props,State></Props,State>
                {/* TODO: Fix JSX expression */}
  s: Props) {} super(props)}; this.stat,
  e: = {/* TODO: Fix JSX expression */}
  r: false} } ; stati,
  c: getDerivedStateFromError(erro)
  r: Error): Stat,
  e: {} return {/* TODO: Fix JSX expression */}
  r: 'tru}e;erro,
  r: ''} ; componentDidCatch(erro)
  r: 'Erro,r)errorInf,
  o: ErrorInfo) {; this.setState()} i,"
  f: (process.env['NODE_ENV'] = == "development") {","}}"; this.props.onError?.(error)errorInfo);} i,"
  f: (process.env['NODE_ENV'] = == "production") {"} this.logErrorToService(error}errorInfo)} ; privat,
  e: logErrorToService = (erro)
  r: Erro,r)errorInf,
  o: ErrorInfo) =>
                {/* TODO: Fix JSX expression */}"
  s: {"} "Content-Type": "application/json}"}," bod,
  y: JSON.stringify({/* TODO: Fix JSX expression */}
  k: 'error.stac,k} nam,
  e: 'error.nam}e},errorInf,
  o: {} componentStac,
  k: 'errorInfo.componentStac}k},ur)
  l: 'window.location.hre,f)timestam,
  p: Date.now(),userAgen,
  t: 'navigator.userAgen,t})}).catch(_console.error)} ; privat,
  e: handleRetry = () =>
                {} this.setState({/* TODO: Fix JSX expression */})
  r: 'undefine)d}errorInf,
  o: 'undefined'})} ; render() {/* TODO: Fix JSX expression */}
  f: (this.state.hasError) {} i,"
  f: (this.props.fallback) {}; return this.props.fallback} ; return("; <div className="text-left">" <di,"
  v: className="text-left">" <di,"
  v: className="text-left">" <sv,"
  g: className="text-left" , fill="none" stroke="currentColor" viewBox="0: 0 24 24"," aria-hidden="true">","; <at,"$2 />
  h: strokeLinecap = "round"," strokeLinejoin="round"> strokeWidth="{2}> d="M1,"
  2: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />"; ></div>
                </div>"; <h,"
  1: className="text-left">"; Somethin,"
  g: 'went wrong</$1>"; <p className = "text-gray-600 text-center mb-6">"," We&apos,r,"
  e: 'sorry,but something unexpected happened. Please try refreshing the page.</$1>"; <di,"
  v: className = "flex flex-col,
  sm: flex-ro,"
  w: gap-3">"," <butto,"
  n: onClick="{this.handleRetr}y} className="text-left">"; Tr,")
  y: 'Again) </button>"); <button onClick="{()" => window.location.reload()}" className="text-left">"; Refres,"
  h: Page" {/* TODO: Fix JSX expression */}"
  r: Details()</$1>"}
                <pre className="text-left">" {this.state.error.stac}k} ; ></div>
                {/* TODO: Fix JSX expression */}
  o: 'ErrorInfo) => void} onError?: (erro)r: 'Error}errorInf,
  o: 'ErrorInfo) => void'} ; hasErro,
  r: 'boolean; error?: Error; errorInfo?: ErrorInfo} ; error?: Error; class ErrorBoundary extends Component<Props,State></Props,State>
                {/* TODO: Fix JSX expression */}
  r: 'false' }} ; static getDerivedStateFromError(erro)
  r: Error): State {/* TODO: Fix JSX expression */}
  r: 'true}error }} ; componentDidCatch(erro)
  r: 'Error)errorInf,
  o: ErrorInfo) {} this.state = { hasErro}; r: 'false' }} ; return {hasErro;} r: 'true}error }} ; override componentDidCatch(erro)
  r: 'Error)errorInf,"
  o: ErrorInfo) {} error}; errorInfo}); if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {;}}} ; if (process.env['NODE_ENV'] === "production") {/* TODO: Fix JSX expression */}"
  o: ErrorInfo) {} error}; errorInfo});} if (process.env['NODE_ENV'] = == "development") {" if (process.env['NODE_ENV'] === "development") {}}} ; if (process.env['NODE_ENV'] === "production") {/* TODO: Fix JSX expression */}"
  o: ErrorInfo) =>
                {; fetch("/api/analytics/error" {" fetch("/api/analytics/error" {} metho,"
  d: "POST"," header,")
  s: {"}; "Content-Type": "application/json"}) messag,"
  e: 'error.message," "Content-Type": "application/json"},bod,
  y: JSON.stringify({} messag,
  e: 'error.message,stac,
  k: 'error.stack}nam,
  e: 'error.name'},errorInf,
  o: {} componentStac,
  k: 'errorInfo.componentStack'},ur)
  l: 'window.location.href)timestam,
  p: Date.now(),userAgen,
  t: 'navigator.userAgent'})}).catch(_console.error)} ; erro; r: {/* TODO: Fix JSX expression */}
  l: 'window.location.href} timestam,
  p: Date.now()}; userAgen,
  t: 'navigator.userAgent'});} }).catch(_console.error)} ; private handleRetry = () =>
                {/* TODO: Fix JSX expression */}
  r: 'undefined}errorInf,"
  o: 'undefined' })} ; override render() {; if (this.state.hasError) {; if (this.props.fallback) {; return (" <div className = "min-h-screen flex items-center justify-center bg-gray-50">" <div className="text-left">" <div className="text-left"> <svg;" return (; <div className="text-left"> <div className="text-left"> <svg; className="text-left" ; fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">" <path; strokeLinecap="round" strokeLinejoin="round} strokeWidth={2} className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; <path strokeLinecap="round; d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />" className="text-left" none; stroke="currentColor; viewBox="0 0 24 24; aria-hidden="true">" strokeLinecap="round; strokeLinejoin="round; ></div> <h1 className="text-left"> Something went wrong" ></div> <p className="text-left">" We"re sorry,but something unexpected happened. Please try refreshing the page." <p className="text-left">" We&apos;re sorry,but something unexpected happened. Please try refreshing the page.; We&apos;re sorry,but something unexpected happened. Please try refreshing the page."; ></div> < className = "flex flex-col,")$2 />
  sm: flex-row gap-3">"; <button onClick={this.handleRetry} className="text-left" ; s: ring-offset-2 transition-colors> onClick="{this.handleRetry} className="text-left" flex space-x-3">" className="text-left" ) Try Again," className="text-left"); onClick="{()" => window.location.reload()} className="text-left" ; {process.env['NODE_ENV'] === "development" && this.state.error && (}
                <details className="text-left"> className="text-left" development" && this.state.error && (" <details className="text-left">" <summary className="text-left"> Error Details (Development) Only)" <pre className="text-left">}; {this.state.error.stack} ; {this.state.errorInfo && (" ></div>
                {this.state.errorInfo && ("} {this.state.errorInfo.componentStack} ) )}" <details className="text-left">" <summary className="text-left"> Error Details (Development)" <div className="text-left">" <div className="text-left"> <strong>Erro,
  r:</strong>
                {this.state.error.message} ; <div> <strong>Component,"
  Stack: </strong>" <pre className="text-left"></$1>,retur,"
  n: 'this.props.children'} ; return this.props.children} ; export default ErrorBoundary;" export default ErrorBoundary;"}}}}}}}})))))'"</button>
                </button></button>
                </button></button>
                </button></button>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </p></p>
                </h1></h1>
                </h1></h1>
                </h1></h1>
                </h1></h1>
                </h1></a>
                </a></a>