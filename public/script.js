
//Zion Tech Group Website JavaScript
})
//Zion Tech Group Website JavaScript 

        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)'
        })
    }),
    
    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number'),
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target),
                statsObserver.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 }),
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat)
    }),
    
    // Back to top button
    const backToTopBtn = document.createElement('button'),
    backToTopBtn.innerHTML = '↑',
    backToTopBtn.className = 'back-to-top',
    backToTopBtn.setAttribute('aria-labelBack to top'),
    document.body.appendChild(backToTopBtn),
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }),
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible')
        } else {
            backToTopBtn.classList.remove('visible')
        }
    }),
    
    // Initialize tooltips
    initializeTooltips(),
    
    // Initialize modals
    initializeModals()
}),
// Search function
function performSearch(query) {
    // This would typically make an API call to search your content
    // For now, we'll simulate search results
        }
    }
}
// Counter animation
function animateCounter(element) {


    const timer = setInterval(() => {

        current += step
        if (current >= target) {
            current = target
            clearInterval(timer)
        }
        element.textContent = Math.floor(current) + suffix
        
        const suffix = element && element.textContent.replace(/\d/g, ''),
        element && element.textContent = Math && Math.floor(current) + suffix

            this.tooltip = tooltip
        })
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {

                this.tooltip.remove()

                this.tooltip = null
            }
        })
    })
}
// Modal initialization
function initializeModals() {

                document.body.style.overflow = 'hidden'

            }
        })
    })
    // Close modal on overlay click
                this.classList.remove('active')

                document.body.style.overflow = ''



            }
        })
        // Close modal on close button click

                document.body.style.overflow = ''

            })
        }
    })
    // Close modal on escape key
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
        ].filter(item =>;
            item.title.toLowerCase().includes(query);
        ),;
        if (results.length > 0) {;
            searchResults.innerHTML = results.map(result =>;
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`;
            ).join(''),;
            searchResults.style.display = 'block';
        } else {;
            searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',;
            searchResults.style.display = 'block';
        }
    }
}
;
// Counter animation;
function animateCounter(element) {;
    const target = parseInt(element.textContent.replace(/\D/g, '')),;
    const duration = 2000,;
    const step = target / (duration / 16),;
    let current = 0,;
    const timer = setInterval(() => {;
        current += step,;
        if (current >= target) {;
            current = target,;
            clearInterval(timer);
        }
;
        const suffix = element.textContent.replace(/\d/g, ''),;
        element.textContent = Math.floor(current) + suffix;
        
        ].filter(item => 
            item && item.title.toLowerCase().includes(query)
        ),
        if (results && results.length > 0) {
            searchResults && searchResults.innerHTML = results && results.map(result => 
                `<a href="${result && result.url}" class="search-result-item">${result && result.title}</a>`
            ).join(''),
            searchResults && searchResults.style.display = 'block'
        } else {
            searchResults && searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',
            searchResults && searchResults.style.display = 'block'
        }
    }
}
// Counter animation
function animateCounter(element) {
    const target = parseInt(element && element.textContent.replace(/\D/g, '')),
    const duration = 2000,
    const step = target / (duration / 16),
    let current = 0,
    const timer = setInterval(() => {
        current += step
        if (current >= target) {
            current = target
            clearInterval(timer)
        }
        const suffix = element && element.textContent.replace(/\d/g, ''),
        element && element.textContent = Math && Math.floor(current) + suffix
    }, 16)
}
// Tooltip initialization
function initializeTooltips() {
    const tooltipElements = document && document.querySelectorAll('[data-tooltip]'),
    tooltipElements && tooltipElements.forEach(element => {
        element && element.addEventListener('mouseenter', function(e) {
            const tooltip = document && document.createElement('div'),
            tooltip && tooltip.className = 'tooltip',
            tooltip && tooltip.textContent = this && this.dataset.tooltip,
            document && document.body.appendChild(tooltip),
            const rect = this && this.getBoundingClientRect(),
            tooltip && tooltip.style.left = rect && rect.left + (rect && rect.width / 2) - (tooltip && tooltip.offsetWidth / 2) + 'px',
            tooltip && tooltip.style.top = rect && rect.top - tooltip && tooltip.offsetHeight - 10 + 'px',
            this && this.tooltip = tooltip
        }),
        element && element.addEventListener('mouseleave', function() {
            if (this && this.tooltip) {
                this && this.tooltip.remove(),
                this && this.tooltip = null
            }
        })
    })
}
// Modal initialization
function initializeModals() {
    const modalTriggers = document && document.querySelectorAll('[data-modal]'),
    const modals = document && document.querySelectorAll('.modal'),
    modalTriggers && modalTriggers.forEach(trigger => {
        trigger && trigger.addEventListener('click', function(e) {
            e && e.preventDefault(),
            const modalId = this && this.dataset.modal,
            const modal = document && document.getElementById(modalId),
            if (modal) {
                modal && modal.classList.add('active'),
                document && document.body.style && style.overflow = 'hidden'
            }
        })
    })
    // Close modal on overlay click
    modals && modals.forEach(modal => {
        modal && modal.addEventListener('click', function(e) {
            if (e && e.target === this) {
                this && this.classList.remove('active'),
                document && document.body.style && style.overflow = ''
            }
        })
        // Close modal on close button click
        const closeBtn = modal && modal.querySelector('.modal-close'),
        if (closeBtn) {
            closeBtn && closeBtn.addEventListener('click', function() {
                modal && modal.classList.remove('active'),
                document && document.body.style && style.overflow = ''
            })
        }
    })
    // Close modal on escape key
    document && document.addEventListener('keydown', function(e) {
        if (e && e.key === 'Escape') {
            modals && modals.forEach(modal => {
                if (modal && modal.classList.contains('active')) {
                    modal && modal.classList.remove('active'),
                    document && document.body.style && style.overflow = ''


});
// Search function;
/**
 * perform_search - Function description
 */
function perform_search() {
    // This would typically make an API call to search your content;
    // For now, we'll simulate search results;
    const search_results = document.query_selector ('.search - results'),
    // Check condition
if ( {) {
  $2
}
        const results = [;
            { title: 'AI Autonomous Business Manager', url: '/solutions / ai - autonomous - business - manager' },
            { title: 'Quantum Neural Network Platform', url: '/solutions / quantum - neural - network - platform' },
            { title: 'AI & Autonomous Systems', url: '/services / ai - autonomous - systems' },
            { title: 'Quantum Computing Services', url: '/services / quantum - computing' }
        ].filter (item =>;
            item.title.toLowerCase ().includes (query)),
        // Check condition
if ( {) {
  $2
}
            search_results.innerHTML = results.map (result =>;
                `<a href="${result.url}" class="search - result - item">${result.title}</a>`).join (''),
            search_results.style.display = 'block';
        } else {
            search_results.innerHTML = '<div class="search - result - item no - results">No results found</div>',
            search_results.style.display = 'block';
        }
    }
}
// Counter animation;
/**
 * animate_counter - Function description
 */
function animate_counter() {
    const target = parse_int (element.text_content.replace (/\D / g, '')),
    const duration = 2000,
    const step = target / (duration / 16),
    let current = 0,
    const timer = set_interval (() => {
        current += step,
        // Check condition
if ( {) {
  $2
}
            current = target,
            clear_interval (timer);
        }
        const suffix = element.text_content.replace (/\d / g, ''),
        element.text_content = Math.floor (current) + suffix;
    }, 16);
}
// Tooltip initialization;
/**
 * initialize_tooltips - Function description
 */
function initialize_tooltips() {
    const tooltip_elements = document.querySelectorAll ('[data - tooltip]'),
    tooltip_elements.for_each (element => {
        element.addEventListener ('mouseenter', function (e) {
            const tooltip = document.create_element ('div'),
            tooltip.class_name = 'tooltip',
            tooltip.text_content = this.dataset.tooltip,
            document.body.append_child (tooltip),
            const rect = this.getBoundingClientRect (),
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offset_width / 2) + 'px',
            tooltip.style.top = rect.top - tooltip.offset_height - 10 + 'px',
            this.tooltip = tooltip;
        }),
        element.addEventListener ('mouseleave', function () {
            // Check condition
if ( {) {
  $2
}
                this.tooltip.remove (),
                this.tooltip = null;
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
;
// Modal initialization;
function initializeModals() {;
    const modalTriggers = document.querySelectorAll('[data-modal]'),;
    const modals = document.querySelectorAll('.modal'),;
    modalTriggers.forEach(trigger => {;
        trigger.addEventListener('click', function(e) {;
            e.preventDefault(),;
            const modalId = this.dataset.modal,;
            const modal = document.getElementById(modalId),;
            if (modal) {;
                modal.classList.add('active'),;
                document.body.style.overflow = 'hidden';
            }
        });
    }),;
    // Close modal on overlay click;
    modals.forEach(modal => {;
        modal.addEventListener('click', function(e) {;
            if (e.target === this) {;
                this.classList.remove('active'),;
                document.body.style.overflow = '';
            }
        }),;
        // Close modal on close button click;
        const closeBtn = modal.querySelector('.modal-close'),;
        if (closeBtn) {;
            closeBtn.addEventListener('click', function() {;
                modal.classList.remove('active'),;
                document.body.style.overflow = '';
            });
        }
    }),;
    // Close modal on escape key;
    document.addEventListener('keydown', function(e) {;
        if (e.key === 'Escape') {;
            modals.forEach(modal => {;
                if (modal.classList.contains('active')) {;
                    modal.classList.remove('active'),;
                    document.body.style.overflow = '';
                }
            });
        }
    });
}

                    document.body.style.overflow = ''
                }
            })
        }
    })
}
// Performance monitoring
function logPerformance() {

    if ('performance' in window) {
                }
            });
        }
    });
}



        const perfData = window.window.window.performance.getEntriesByType('navigation')[0],
        // // // console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms'),
        // // // console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')

        console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')
        const perfData = window.window.window.performance.getEntriesByType('navigation')[0],
        // // // console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms'),
        // // // console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')
    }
}
// Error tracking
window.addEventListener('error', function(e) {
    }
}
// Error tracking


    console.error('JavaScript Error:', e.error)

    // Send to error tracking service
})
// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData)


    // Implement your analytics tracking here
}
});
//Add scroll effects to elements const observer = new IntersectionObserver (function (entries) {
  entries && entries.forEach (entry => {
  if (entry && entry.isIntersecting) {
  lastScrollTop = scrollTop 

});
//Form handling for contact forms submitBtn && submitBtn.disabled = true;
//Simulate form submission (replace with actual API call) //Reset form form && form.reset ();
//Reset button after delay //Lazy loading for images if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver ( (entries, observer) => {

  entries && entries.forEach (entry => {
  if (entry && entry.isIntersecting) {
  

}) 
}//Newsletter subscription submitBtn && submitBtn.disabled = true;
//Simulate subscription (replace with actual API call) //Reset form this && this.reset ();

//Reset button after delay //Initialize tooltips initializeTooltips ();
//Initialize modals initializeModals ()
// Performance monitoring;
/**
 * log_performance - Function description
 */
function log_performance() {
    // Check condition
if ( {) {
  $2
}
        const perf_data = performance.getEntriesByType ('navigation')[0],
        console.log ('Page Load Time:', perf_data.loadEventEnd - perf_data.loadEventStart, 'ms'),
        console.log ('DOM Content Loaded:', perf_data.domContentLoadedEventEnd - perf_data.domContentLoadedEventStart, 'ms');
    }
}
// Error tracking;
window.addEventListener ('error', function (e) {
    console.error ('JavaScript Error:', e.error),
    // Send to error tracking service;
}),
// Analytics tracking (replace with your analytics service);
/**
 * track_event - Function description
 */
function track_event() {
    console.log ('Event tracked:', event_name, event_data),
    // Implement your analytics tracking here;
}
});
//Add scroll effects to elements const observer = new IntersectionObserver (function (entries) {
  entries.for_each (entry => {
  // Check condition
if ( {) {
  $2
}
  lastScrollTop = scroll_top;
});
//Form handling for contact forms submit_btn.disabled = true;
//Simulate form submission (replace with actual API call) //Reset form form.reset ();
//Reset button after delay //Lazy loading for images // Check condition
if ( {) {
  $2
}
  const image_observer = new IntersectionObserver ( (entries, observer) => {
  entries.for_each (entry => {
  // Check condition
if ( {) {
  $2
}});
}//Newsletter subscription submit_btn.disabled = true;
//Simulate subscription (replace with actual API call) //Reset form this.reset ();
//Reset button after delay //Initialize tooltips initialize_tooltips ();
//Initialize modals initialize_modals ();
});
//Search /**
 * if - Function description
 */
function if() {
  const results = [ {

  title: 'Quantum Computing Services', url: '/services/quantum-computing' 
}].filter (item => item && item.title.toLowerCase () .includes (query) );

}//Counter animation //Close modal on overlay click modals && modals.forEach (modal => {
  modal && modal.addEventListener ('click', function (e) {
  if (e && e.target === this) {
  

});
//Close modal on escape key document && document.addEventListener ('keydown', function (e) {
  if (e && e.key === 'Escape') {
  modals && modals.forEach (modal => {
  if (modal && modal.classList.contains ('active') ) {
  

}) 
}//Performance monitoring 

}//Error tracking window && window.addEventListener ('error', function (e) {
  console && console.error ('JavaScript Error:', e && e.error);
//Send to error tracking service 

})

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        trackEvent('button_click', {
            button_text: e.target.textContent
            button_class: e.target.className
            page: window.location.pathname
  page: window && window.location.pathname;
title: document && document.title 

});
//Track button clicks document && document.addEventListener ('click', function (e) {
  if (e && e.target.matches ('.btn') ) {
  trackEvent ('button click', {

  button text: e && e.target.textContent;
button class: e && e.target.className;
page: window && window.location.pathname 
}) 


});
// Log performance when page is fully loaded window && window.addEventListener ('load', logPerformance);// Track page views
trackEvent('page_view', {

    page: window && window.location.pathname,
    title: document && document.title
}),


// Track button clicks
document && document.addEventListener('click', function(e) {
    if (e && e.target.matches('.btn')) {
        trackEvent('button_click', {

            button_text: e && e.target.textContent,
            button_class: e && e.target.className,
            page: window && window.location.pathname

window.addEventListener('load', logPerformance)

    // // // console.log('Event tracked:', eventName, eventData),
    // Implement your analytics tracking here
window.addEventListener('load', logPerformance),

}
}
}
}
}
;
// Performance monitoring;
function logPerformance() {;
    if ('performance' in window) {;
        const perfData = window.window.window.performance.getEntriesByType('navigation')[0],;
        // // // console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms'),;
        // // // console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
    }
}
;
// Error tracking;
window.addEventListener('error', function(e) {;
    console.error('JavaScript Error:', e.error),;
    // Send to error tracking service;
}),;
// Analytics tracking (replace with your analytics service);
function trackEvent(eventName, eventData = {}) {;
    // // // console.log('Event tracked:', eventName, eventData),;
    // Implement your analytics tracking here;
}
;
// Track page views;
trackEvent('page_view', {;
    page: window.location.pathname,;
    title: document.title;
}),;
// Track button clicks;
document.addEventListener('click', function(e) {;
    if (e.target.matches('.btn')) {;
        trackEvent('button_click', {;
  entries.forEach (entry => {
  if (entry.isIntersecting) {
  lastScrollTop = scrollTop 
});
//Form handling for contact forms submitBtn && submitBtn.disabled = true;
//Simulate form submission (replace with actual API call) //Reset form form && form.reset ();
//Reset button after delay //Lazy loading for images if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver ( (entries, observer) => {
//Reset button after delay //Initialize tooltips initializeTooltips ();
//Initialize modals initializeModals ()
// Performance monitoring;
/**
 * log_performance - Function description
 */
function log_performance() {
    // Check condition
if ( {) {
  $2
}
        const perf_data = performance.getEntriesByType ('navigation')[0],
        console.log ('Page Load Time:', perf_data.loadEventEnd - perf_data.loadEventStart, 'ms'),
        console.log ('DOM Content Loaded:', perf_data.domContentLoadedEventEnd - perf_data.domContentLoadedEventStart, 'ms');
    }
}
// Error tracking;
window.addEventListener ('error', function (e) {
    console.error ('JavaScript Error:', e.error),
    // Send to error tracking service;
}),
// Analytics tracking (replace with your analytics service);
/**
 * track_event - Function description
 */
function track_event() {
    console.log ('Event tracked:', event_name, event_data),
    // Implement your analytics tracking here;
}
  entries.forEach (entry => {
  if (entry.isIntersecting) {
  
}
}) 
}//Newsletter subscription submitBtn.disabled = true;
//Simulate subscription (replace with actual API call) //Reset form this.reset ();
//Reset button after delay //Initialize tooltips initializeTooltips ();
//Initialize modals initializeModals () 
});
//Add scroll effects to elements const observer = new IntersectionObserver (function (entries) {
  entries.for_each (entry => {
  // Check condition
if ( {) {
  $2
}
  lastScrollTop = scroll_top;
});
//Form handling for contact forms submit_btn.disabled = true;
//Simulate form submission (replace with actual API call) //Reset form form.reset ();
//Reset button after delay //Lazy loading for images // Check condition
if ( {) {
  $2
}
  const image_observer = new IntersectionObserver ( (entries, observer) => {
  entries.for_each (entry => {
  // Check condition
if ( {) {
  $2
}
});
}//Newsletter subscription submit_btn.disabled = true;
//Simulate subscription (replace with actual API call) //Reset form this.reset ();
//Reset button after delay //Initialize tooltips initialize_tooltips ();
//Initialize modals initialize_modals ();
});
//Search /**
 * if - Function description
 */
function if() {
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
}
}
}//Counter animation //Close modal on overlay click modals.forEach (modal => {
  modal.addEventListener ('click', function (e) {
  if (e.target === this) {
  
}
});
//Close modal on escape key document.addEventListener ('keydown', function (e) {
  if (e.key === 'Escape') {
  modals.forEach (modal => {
  if (modal.classList.contains ('active') ) {
  
}
}) 
}//Performance monitoring 
}
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
//Track button clicks document && document.addEventListener ('click', function (e) {
  if (e && e.target.matches ('.btn') ) {
  trackEvent ('button click', {
});
// Log performance when page is fully loaded window && window.addEventListener ('load', logPerformance);// Track page views
trackEvent('page_view', {
    page: window && window.location.pathname,
    title: document && document.title
}),
// Track button clicks
document && document.addEventListener('click', function(e) {
    if (e && e.target.matches('.btn')) {
        trackEvent('button_click', {
            button_text: e && e.target.textContent,
            button_class: e && e.target.className,
            page: window && window.location.pathname
        })
    }
})
// Log performance when page is fully loaded
window && window.addEventListener('load', logPerformance),
window.addEventListener('load', logPerformance),


  title: 'AI Autonomous Business Manager', url: '/solutions / ai - autonomous - business - manager';
}
{
  title: 'Quantum Neural Network Platform', url: '/solutions / quantum - neural - network - platform';
}
{
  title: 'AI & Autonomous Systems', url: '/services / ai - autonomous - systems';
}
    // // // console.log('Event tracked:', eventName, eventData),
    // Implement your analytics tracking here

  button text: e.target.textContent;
button class: e.target.className;
page: window.location.pathname 
}) 
}
});
// Log performance when page is fully loaded window.addEventListener ('load', logPerformance);
            button_text: e.target.textContent,;
            button_class: e.target.className,;
            page: window.location.pathname;
        });
    }
}),;
// Log performance when page is fully loaded;
window.addEventListener('load', logPerformance),;
