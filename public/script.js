//Zion Tech Group Website JavaScript 

}) 
// Search function
function performSearch(query) {
    // This would typically make an API call to search your content
    // For now, we'll simulate search results
    const searchResults = document.querySelector('.search-results'),
    if (searchResults) {
        const results = [
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' },
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' },
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' },
            { title: 'Quantum Computing Services', url: '/services/quantum-computing' }
        ].filter(item => 
            item.title.toLowerCase().includes(query)
        ),
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => 
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`
            ).join(''),
            searchResults.style.display = 'block'
        } else {
            searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',
            searchResults.style.display = 'block'
        }
    }
}

// Counter animation
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, '')),
    const duration = 2000,
    const step = target / (duration / 16),
    let current = 0,
    
    const timer = setInterval(() => {
        current += step,
        if (current >= target) {
            current = target,
            clearInterval(timer)
        }
        
        const suffix = element.textContent.replace(/\d/g, ''),
        element.textContent = Math.floor(current) + suffix
    }, 16)
}

// Tooltip initialization
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]'),
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div'),
            tooltip.className = 'tooltip',
            tooltip.textContent = this.dataset.tooltip,
            document.body.appendChild(tooltip),
            
            const rect = this.getBoundingClientRect(),
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px',
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px',
            
            this.tooltip = tooltip
        }),
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove(),
                this.tooltip = null
            }
        })
    })
}

// Modal initialization
function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]'),
    const modals = document.querySelectorAll('.modal'),
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(),
            const modalId = this.dataset.modal,
            const modal = document.getElementById(modalId),
            
            if (modal) {
                modal.classList.add('active'),
                document.body.style.overflow = 'hidden'
            }
        })
    }),
    
    // Close modal on overlay click
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active'),
                document.body.style.overflow = ''
            }
        }),
        
        // Close modal on close button click
        const closeBtn = modal.querySelector('.modal-close'),
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('active'),
                document.body.style.overflow = ''
            })
        }
    }),
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active'),
                    document.body.style.overflow = ''
                }
            })
        }
    })
}

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0],
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms'),
        console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')
    }
}

// Error tracking
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error),
    // Send to error tracking service
}),

// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData),
    // Implement your analytics tracking here
}

});
//Add scroll effects to elements const observer = new IntersectionObserver (function (entries) {
  entries.forEach (entry => {
  if (entry.isIntersecting) {
  lastScrollTop = scrollTop 
});
//Form handling for contact forms submitBtn.disabled = true;
//Simulate form submission (replace with actual API call) //Reset form form.reset ();
//Reset button after delay //Lazy loading for images if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver ( (entries, observer) => {
  entries.forEach (entry => {
  if (entry.isIntersecting) {
  

}) 
}//Newsletter subscription submitBtn.disabled = true;
//Simulate subscription (replace with actual API call) //Reset form this.reset ();
//Reset button after delay //Initialize tooltips initializeTooltips ();
//Initialize modals initializeModals () 
});
//Search function if (searchResults) {
  const results = [ {
  title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' 
};
{
  title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' 
};
{
  title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' 
};
{
  title: 'Quantum Computing Services', url: '/services/quantum-computing' 
}].filter (item => item.title.toLowerCase () .includes (query) );

}//Counter animation //Close modal on overlay click modals.forEach (modal => {
  modal.addEventListener ('click', function (e) {
  if (e.target === this) {
  

});
//Close modal on escape key document.addEventListener ('keydown', function (e) {
  if (e.key === 'Escape') {
  modals.forEach (modal => {
  if (modal.classList.contains ('active') ) {
  

}) 
}//Performance monitoring 

}//Error tracking window.addEventListener ('error', function (e) {
  console.error ('JavaScript Error:', e.error);
//Send to error tracking service 
});
//Analytics tracking (replace with your analytics service) function trackEvent (eventName, eventData = {
  
}) {
  //Implement your analytics tracking here 
}//Track page views trackEvent ('page view', {
  page: window.location.pathname;
title: document.title 
});
//Track button clicks document.addEventListener ('click', function (e) {
  if (e.target.matches ('.btn') ) {
  trackEvent ('button click', {
  button text: e.target.textContent;
button class: e.target.className;
page: window.location.pathname 
}) 

});
// Log performance when page is fully loaded window.addEventListener ('load', logPerformance);// Track page views
trackEvent('page_view', {
    page: window.location.pathname,
    title: document.title
}),

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        trackEvent('button_click', {
            button_text: e.target.textContent,
            button_class: e.target.className,
            page: window.location.pathname
        })
    }
}),

// Log performance when page is fully loaded
window.addEventListener('load', logPerformance),
