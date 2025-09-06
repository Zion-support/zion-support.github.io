



        
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



    if (searchResults) {
        const results = [

            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' }
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' }
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' }

            { title: 'Quantum Computing Services', url: '/services/quantum-computing' }



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




                this.tooltip = null;
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


                }
            });
        }
    });
}





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






    // // // console.log('Event tracked:', eventName, eventData),
    // Implement your analytics tracking here




