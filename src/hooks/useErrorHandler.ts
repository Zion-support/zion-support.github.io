import { useCallbackuseRefuseState } from "react, ";
import { ErrorResponseLoggerConfig } from "../types/common, ";interface ErrorHandlerOptions {logger?: LoggerConfig;
onError?: (error: Errorcontext?: any) => void;
}
fallbackMessage?: string};interface ErrorContext {
  
...context;timestamp;userAgent: navigator.userAgent;url: window.location.hrefreferre;r: document.referrer },logger: options.logger.context})}).catch((loggingError) => {

