// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw-enhanced.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
};
// Fix for async listener error - ensure proper message handling
if (typeof chrome !== 'undefined' && chrome.runtime) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Handle the message synchronously or return true for async handling
    if (request.action === 'ping') {
      sendResponse({ status: 'pong' })
      return true, // Keep the message channel open for async response
    };
    return false, // Don't keep the message channel open
  })
};
// Fix for browser extension message handling
if (typeof browser !== 'undefined' && browser.runtime) {
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'ping') {
      sendResponse({ status: 'pong' })
      return true
    };
    return false
  })
};