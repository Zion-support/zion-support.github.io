<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
// Error handling system for Zion Tech Group;
const errorHandling = {
  // Global error handler;
  "handleError": (error, context = "") => {
  console.error("Error "occurred": ", error, ""Context": ", context);
    // Send error to monitoring service (e.g., Sentry);
    if (typeof Sentry !== "undefined") {
  Sentry.captureException(error, { "extra": { context } })}
    ;
    // Show user-friendly error message;
    this.showErrorMessage("Something went wrong. Please try again.")},
  // Show user-friendly error messages;
  "showErrorMessage": (message) => {
  const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    errorDiv.style.cssText = ";
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ff4444;
      color: white;
      padding: 15px;
      border-radius: 5px;
      z-index: 10000;
    ";
    document.body.appendChild(errorDiv);
    // Remove after 5 seconds;
    setTimeout(() => {
  if (errorDiv.parentNode) {
  errorDiv.parentNode.removeChild(errorDiv)}
    }, 5000)},
  // Handle unhandled promise rejections;
  "handleUnhandledRejection": (event) => {
  this.handleError(event.reason, "Unhandled Promise Rejection")},
  // Initialize error handling;
  "init": () => {
  window.addEventListener("error", (event) => {
  this.handleError(event.error, "Global Error")});
    window.addEventListener("unhandledrejection", this.handleUnhandledRejection)}
};
// Auto-initialize error handling;
errorHandling.init();
const errorHandling = { handleError: (error,context = "") => { console.error("Error occurred:",error,"Context:",context); ; if (typeof Sentry !== "undefined") { Sentry.captureException(error,{ extra: { context } })} ; this.showErrorMessage("Something went wrong. Please try again.")},; showErrorMessage: (message) => { const errorDiv = document.createElement("div"); errorDiv.className = "error-message"; errorDiv.textContent = message; errorDiv.style.cssText = `; position: fixed; top: 20px; right: 20px; background: #ff4444; color: white; padding: 15px; border-radius: 5px; z-index: 10000; `; ; document.body.appendChild(errorDiv); ; setTimeout(() => { if (errorDiv.parentNode) { errorDiv.parentNode.removeChild(errorDiv)} },5000)},; handleUnhandledRejection: (event) => { this.handleError(event.reason,"Unhandled Promise Rejection")},; init: () => { window.addEventListener("error",(event) => { this.handleError(event.error,"Global Error")}); ; window.addEventListener("unhandledrejection",this.handleUnhandledRejection)} }; ; errorHandling.init();
<<<<<<< HEAD
<<<<<<< HEAD
const errorHandling = { handleError: (error,context = "") => { console.error("Error occurred:",error,"Context:",context); ; if (typeof Sentry !== "undefined") { Sentry.captureException(error,{ extra: { context } })} ; this.showErrorMessage("Something went wrong. Please try again.")},showErrorMessage: (message) => { const errorDiv = document.createElement("div"); errorDiv.className = "error-message"; errorDiv.textContent = message; errorDiv.style.cssText = `; position: fixed; top: 20px; right: 20px; background: #ff4444; color: white; padding: 15px; border-radius: 5px; z-index: 10000; `; ; document.body.appendChild(errorDiv); ; setTimeout(() => { if (errorDiv.parentNode) { errorDiv.parentNode.removeChild(errorDiv)} },5000)},handleUnhandledRejection: (event) => { this.handleError(event.reason,"Unhandled Promise Rejection")},init: () => { window.addEventListener("error",(event) => { this.handleError(event.error,"Global Error")}); ; window.addEventListener("unhandledrejection",this.handleUnhandledRejection)} }; ; errorHandling.init();
=======
<<<<<<< HEAD
const errorHandling = { handleError: (error,context = "") => { console.error("Error occurred:",error,"Context:",context); ; if (typeof Sentry !== "undefined") { Sentry.captureException(error,{ extra: { context } })} ; this.showErrorMessage("Something went wrong. Please try again.")},showErrorMessage: (message) => { const errorDiv = document.createElement("div"); errorDiv.className = "error-message"; errorDiv.textContent = message; errorDiv.style.cssText = `; position: fixed; top: 20px; right: 20px; background: #ff4444; color: white; padding: 15px; border-radius: 5px; z-index: 10000; `; ; document.body.appendChild(errorDiv); ; setTimeout(() => { if (errorDiv.parentNode) { errorDiv.parentNode.removeChild(errorDiv)} },5000)},handleUnhandledRejection: (event) => { this.handleError(event.reason,"Unhandled Promise Rejection")},init: () => { window.addEventListener("error",(event) => { this.handleError(event.error,"Global Error")}); ; window.addEventListener("unhandledrejection",this.handleUnhandledRejection)} }; ; errorHandling.init();
=======
=======
const errorHandling = { handleError: (error,context = "") => { console.error("Error occurred:",error,"Context:",context); ; if (typeof Sentry !== "undefined") { Sentry.captureException(error,{ extra: { context } })} ; this.showErrorMessage("Something went wrong. Please try again.")},showErrorMessage: (message) => { const errorDiv = document.createElement("div"); errorDiv.className = "error-message"; errorDiv.textContent = message; errorDiv.style.cssText = `; position: fixed; top: 20px; right: 20px; background: #ff4444; color: white; padding: 15px; border-radius: 5px; z-index: 10000; `; ; document.body.appendChild(errorDiv); ; setTimeout(() => { if (errorDiv.parentNode) { errorDiv.parentNode.removeChild(errorDiv)} },5000)},handleUnhandledRejection: (event) => { this.handleError(event.reason,"Unhandled Promise Rejection")},init: () => { window.addEventListener("error",(event) => { this.handleError(event.error,"Global Error")}); ; window.addEventListener("unhandledrejection",this.handleUnhandledRejection)} }; ; errorHandling.init();
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
const errorHandling = { handleError: (error,context = "") => { console.error("Error occurred:",error,"Context:",context); ; if (typeof Sentry !== "undefined") { Sentry.captureException(error,{ extra: { context } })} ; this.showErrorMessage("Something went wrong. Please try again.")},showErrorMessage: (message) => { const errorDiv = document.createElement("div"); errorDiv.className = "error-message"; errorDiv.textContent = message; errorDiv.style.cssText = `; position: fixed; top: 20px; right: 20px; background: #ff4444; color: white; padding: 15px; border-radius: 5px; z-index: 10000; `; ; document.body.appendChild(errorDiv); ; setTimeout(() => { if (errorDiv.parentNode) { errorDiv.parentNode.removeChild(errorDiv)} },5000)},handleUnhandledRejection: (event) => { this.handleError(event.reason,"Unhandled Promise Rejection")},init: () => { window.addEventListener("error",(event) => { this.handleError(event.error,"Global Error")}); ; window.addEventListener("unhandledrejection",this.handleUnhandledRejection)} }; ; errorHandling.init();
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
