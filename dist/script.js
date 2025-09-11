

        
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
//Zion Tech Group Website JavaScript 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

// Search function
function performSearch(query) {
    // This would typically make an API call to search your content
    // For now, we'll simulate search results


    if (searchResults) {
        const results = [
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' }
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' }
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' }

            { title: 'Quantum Computing Services', url: '/services/quantum-computing' }

        ].filter(item => 
            item && item.title.toLowerCase().includes(query)
        ),
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result =>
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`

            ).join('')

            searchResults.style.display = 'block'
        } else {
            searchResults && searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',
            searchResults && searchResults.style.display = 'block'

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

        
        const suffix = element && element.textContent.replace(/\d/g, ''),
        element && element.textContent = Math && Math.floor(current) + suffix

    }, 16)
}
// Tooltip initialization
function initializeTooltips() {


            }
        })
    })
}
// Modal initialization
function initializeModals() {


            }
        })
    })
    // Close modal on overlay click


            }
        })
        // Close modal on close button click


            })
        }
    })
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
            ).join(''),
            searchResults.style.display = 'block'
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            }
        });
    });
}
// Modal initialization;
/**
 * initialize_modals - Function description
 */
function initialize_modals() {
    const modal_triggers = document.querySelectorAll ('[data - modal]'),
    const modals = document.querySelectorAll ('.modal'),
    modal_triggers.for_each (trigger => {
        trigger.addEventListener ('click', function (e) {
            e.prevent_default (),
            const modal_id = this.dataset.modal,
            const modal = document.getElementById (modal_id),
            // Check condition
if ( {) {
  $2
}
                modal.class_list.add ('active'),
                document.body.style.overflow = 'hidden';
            }
        });
    }),
    // Close modal on overlay click;
    modals.for_each (modal => {
        modal.addEventListener ('click', function (e) {
            // Check condition
if ( {) {
  $2
}
                this.class_list.remove ('active'),
                document.body.style.overflow = '';
            }
        }),
        // Close modal on close button click;
        const close_btn = modal.query_selector ('.modal - close'),
        // Check condition
if ( {) {
  $2
}
            close_btn.addEventListener ('click', function () {
                modal.class_list.remove ('active'),
                document.body.style.overflow = '';
            });
        }
    }),
    // Close modal on escape key;
    document.addEventListener ('keydown', function (e) {
        // Check condition
if ( {) {
  $2
}
            modals.for_each (modal => {
                if () {) {
  $2
}
                    modal.class_list.remove ('active'),
                    document.body.style.overflow = '';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                }
            });
        }
    });
}


=======

        const perfData = window.window.window.performance.getEntriesByType('navigation')[0],
        // // // console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms'),
        // // // console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')
    }
}
// Error tracking



    console.error('JavaScript Error:', e.error)

    // Send to error tracking service
})
// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {


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
=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

});
//Analytics tracking (replace with your analytics service) function trackEvent (eventName, eventData = {
}) {
  //Implement your analytics tracking here
}//Track page views trackEvent ('page view', {

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

        })
    }
})
// Log performance when page is fully loaded


=======
  title: 'AI Autonomous Business Manager', url: '/solutions / ai - autonomous - business - manager';
}
{
  title: 'Quantum Neural Network Platform', url: '/solutions / quantum - neural - network - platform';
}
{
  title: 'AI & Autonomous Systems', url: '/services / ai - autonomous - systems';
}
}
}
;
}//Counter animation //Close modal on overlay click modals.for_each (modal => {
  modal.addEventListener ('click', function (e) {
  // Check condition
if ( {) {
  $2
}
});
//Close modal on escape key document.addEventListener ('keydown', function (e) {
  // Check condition
if ( {) {
  $2
}
  modals.for_each (modal => {
  if () {) {
  $2
}
});
}//Performance monitoring;
}//Error tracking window.addEventListener ('error', function (e) {
  console.error ('JavaScript Error:', e.error);
//Send to error tracking service;
});
//Analytics tracking (replace with your analytics service) /**
 * track_event - Function description
 */
function track_event() {
  //Implement your analytics tracking here;
}//Track page views track_event ('page view', {
  page: window.location.pathname;
title: document.title;
});
//Track button clicks document.addEventListener ('click', function (e) {
  if () {) {
  $2
}
  track_event ('button click', {
  button text: e.target.text_content;
button class: e.target.class_name;
page: window.location.pathname;
});
});
// Log performance when page is fully loaded window.addEventListener ('load', log_performance);// Track page views;
track_event ('page_view', {
    page: window.location.pathname,
    title: document.title;
}),
// Track button clicks;
document.addEventListener ('click', function (e) {
    if () {) {
  $2
}
        track_event ('button_click', {
            button_text: e.target.text_content,
            button_class: e.target.class_name,
            page: window.location.pathname;
        });
    }
}),
// Log performance when page is fully loaded;
window.addEventListener ('load', log_performance),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    // // // console.log('Event tracked:', eventName, eventData),
    // Implement your analytics tracking here

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
