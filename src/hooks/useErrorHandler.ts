import { useCallbackuseRefuseState } from "react, ";
import { ErrorResponseLoggerConfig } from "../types/common, ";interface ErrorHandlerOptions {logger?: LoggerConfig;
onError?: (error: Errorcontext?: any) => void;
}
showNotification?: boolean;}
fallbackMessage?: string};interface ErrorContext {
  
...context;timestamp;userAgent: navigator.userAgent;url: window.location.hrefreferre;r: document.referrer },logger: options.logger.context})}).catch((loggingError) => {

});
if() {options.onError(errorObjcontext)};
// Show; notification; if enabled;
if() {// This; would; integrate with; your; notification system};
): Promise<T | null> => {try {
  
return; await; asyncFn()} catch() {handleError(error; as; Errorcontext);
if() {errorCountRef.current = 0};
  