// Accessibility utilities
export const a11yUtils = {
  // Focus management
  "trapFocus": (element) => {
    const focusableElements = element && element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements && focusableElements.length - 1];
    element && element.addEventListener('keydown', (e) => {
      if (e && e.key === 'Tab') {
        if (e && e.shiftKey) {
          if (document && document.activeElement === firstElement) {
            lastElement && lastElement.focus();
            e && e.preventDefault()}
        } else {
          if (document && document.activeElement === lastElement) {
            firstElement && firstElement.focus();
            e && e.preventDefault()}
        }
      }
    })},
  // Screen reader announcements
  "announce": (message) => {
    const announcement = document && document.createElement('div');
    announcement && announcement.setAttribute('aria-live', 'polite');
    announcement && announcement.setAttribute('aria-atomic', 'true');
    announcement && announcement.className = 'sr-only';
    announcement && announcement.textContent = message;
    document && document.body.appendChild(announcement);
    setTimeout(() => {
      document && document.body.removeChild(announcement)}, 1000)}
};


export const a11yUtils = { trapFocus: (element) => { const focusableElements = element && element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements && focusableElements.length - 1]; element && element.addEventListener('keydown',(e) => { if (e && e.key === 'Tab') { if (e && e.shiftKey) { if (document && document.activeElement === firstElement) { lastElement && lastElement.focus(); e && e.preventDefault()} } else { if (document && document.activeElement === lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } } })},announce: (message) => { const announcement = document && document.createElement('div'); announcement && announcement.setAttribute('aria-live','polite'); announcement && announcement.setAttribute('aria-atomic','true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); setTimeout(() => { document && document.body.removeChild(announcement)},1000)} };
export const a11yUtils = { trapFocus: (element) => { const focusableElements = element && element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements && focusableElements.length - 1]; element && element.addEventListener('keydown',(e) => { if (e && e.key === 'Tab') { if (e && e.shiftKey) { if (document && document.activeElement === firstElement) { lastElement && lastElement.focus(); e && e.preventDefault()} } else { if (document && document.activeElement === lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } } })},announce: (message) => { const announcement = document && document.createElement('div'); announcement && announcement.setAttribute('aria-live','polite'); announcement && announcement.setAttribute('aria-atomic','true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); setTimeout(() => { document && document.body.removeChild(announcement)},1000)} };
export const a11yUtils = { trapFocus: (element) => { const focusableElements = element && element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements && focusableElements.length - 1]; element && element.addEventListener('keydown',(e) => { if (e && e.key === 'Tab') { if (e && e.shiftKey) { if (document && document.activeElement === firstElement) { lastElement && lastElement.focus(); e && e.preventDefault()} } else { if (document && document.activeElement === lastElement) { firstElement && firstElement.focus(); e && e.preventDefault()} } } })},announce: (message) => { const announcement = document && document.createElement('div'); announcement && announcement.setAttribute('aria-live','polite'); announcement && announcement.setAttribute('aria-atomic','true'); announcement && announcement.className = 'sr-only'; announcement && announcement.textContent = message; document && document.body.appendChild(announcement); setTimeout(() => { document && document.body.removeChild(announcement)},1000)} };


export const a11yUtils = { trapFocus: (element) => { const focusableElements = element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements.length - 1]; element.addEventListener('keydown',(e) => { if (e.key === 'Tab') { if (e.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); e.preventDefault()} } else { if (document.activeElement === lastElement) { firstElement.focus(); e.preventDefault()} } } })},announce: (message) => { const announcement = document.createElement('div'); announcement.setAttribute('aria-live','polite'); announcement.setAttribute('aria-atomic','true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); setTimeout(() => { document.body.removeChild(announcement)},1000)} };
export const a11yUtils = { trapFocus: (element) => { const focusableElements = element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements.length - 1]; element.addEventListener('keydown',(e) => { if (e.key === 'Tab') { if (e.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); e.preventDefault()} } else { if (document.activeElement === lastElement) { firstElement.focus(); e.preventDefault()} } } })},announce: (message) => { const announcement = document.createElement('div'); announcement.setAttribute('aria-live','polite'); announcement.setAttribute('aria-atomic','true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); setTimeout(() => { document.body.removeChild(announcement)},1000)} };
export const a11yUtils = { trapFocus: (element) => { const focusableElements = element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements.length - 1]; element.addEventListener('keydown',(e) => { if (e.key === 'Tab') { if (e.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); e.preventDefault()} } else { if (document.activeElement === lastElement) { firstElement.focus(); e.preventDefault()} } } })},announce: (message) => { const announcement = document.createElement('div'); announcement.setAttribute('aria-live','polite'); announcement.setAttribute('aria-atomic','true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); setTimeout(() => { document.body.removeChild(announcement)},1000)} };
export const a11yUtils = { trapFocus: (element) => { const focusableElements = element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0]; const lastElement = focusableElements[focusableElements.length - 1]; element.addEventListener('keydown',(e) => { if (e.key === 'Tab') { if (e.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); e.preventDefault()} } else { if (document.activeElement === lastElement) { firstElement.focus(); e.preventDefault()} } } })},announce: (message) => { const announcement = document.createElement('div'); announcement.setAttribute('aria-live','polite'); announcement.setAttribute('aria-atomic','true'); announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); setTimeout(() => { document.body.removeChild(announcement)},1000)} };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
