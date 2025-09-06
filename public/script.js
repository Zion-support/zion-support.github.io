<<<<<<< HEAD

//Zion Tech Group Website JavaScript
})
=======
// Zion Tech Group Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle'),
    const navMenu = document.getElementById('nav-menu'),
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active'),
            navToggle.classList.toggle('active')
        })
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav') && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active'),
            navToggle.classList.remove('active')
        }
    }),
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(),
            const target = document.querySelector(this.getAttribute('href')),
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    }),
    
    // Add scroll effects to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    },
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up')
            }
        })
    }, observerOptions),
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .solution-card, .stat-item').forEach(el => {
        observer.observe(el)
    }),
    
    // Header scroll effect
    const header = document.querySelector('.header'),
    let lastScrollTop = 0,
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        
        if (scrollTop > 100) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
        
        lastScrollTop = scrollTop
    }),
    
    // Form handling for contact forms
    const contactForms = document.querySelectorAll('form[data-contact]'),
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(),
            
            const formData = new FormData(form),
            const submitBtn = form.querySelector('button[type="submit"]'),
            const originalText = submitBtn.textContent,
            
            // Show loading state
            submitBtn.textContent = 'Sending...',
            submitBtn.disabled = true,
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!',
                submitBtn.style.background = '#10b981',
                
                // Reset form
                form.reset(),
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText,
                    submitBtn.disabled = false,
                    submitBtn.style.background = ''
                }, 3000)
            }, 2000)
        })
    }),
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target,
                    img.src = img.dataset.src,
                    img.classList.remove('lazy'),
                    imageObserver.unobserve(img)
                }
            })
        }),
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img)
        })
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input'),
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase(),
            const searchResults = document.querySelector('.search-results'),
            
            if (query.length > 2) {
                // Perform search (replace with actual search logic)
                performSearch(query)
            } else {
                if (searchResults) {
                    searchResults.style.display = 'none'
                }
            }
        })
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form'),
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(),
            
            const email = this.querySelector('input[type="email"]').value,
            const submitBtn = this.querySelector('button[type="submit"]'),
            const originalText = submitBtn.textContent,
            
            // Show loading state
            submitBtn.textContent = 'Subscribing...',
            submitBtn.disabled = true,
            
            // Simulate subscription (replace with actual API call)
            setTimeout(() => {
                submitBtn.textContent = 'Subscribed!',
                submitBtn.style.background = '#10b981',
                
                // Reset form
                this.reset(),
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText,
                    submitBtn.disabled = false,
                    submitBtn.style.background = ''
                }, 3000)
            }, 1500)
        })
    }
    
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card'),
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)'
        }),
        
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

// Search function
function performSearch(query) {
    // This would typically make an API call to search your content
    // For now, we'll simulate search results
<<<<<<< HEAD

    const searchResults = document.querySelector('.search-results')
=======
    const searchResults = document && document.querySelector('.search-results'),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (searchResults) {
        const results = [
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' }
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' }
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' }

            { title: 'Quantum Computing Services', url: '/services/quantum-computing' }
<<<<<<< HEAD
        ].filter(item =>
            item.title.toLowerCase().includes(query)

        )

        if (results.length > 0) {
            searchResults.innerHTML = results.map(result =>
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`

            ).join('')

            searchResults.style.display = 'block'
        } else {
            searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>'
            searchResults.style.display = 'block'
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
    }
}
// Counter animation
function animateCounter(element) {
<<<<<<< HEAD
    const target = parseInt(element.textContent.replace(/\D/g, ''))
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
=======
    const target = parseInt(element && element.textContent.replace(/\D/g, '')),
    const duration = 2000,
    const step = target / (duration / 16),
    let current = 0,
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const timer = setInterval(() => {

        current += step
        if (current >= target) {
            current = target
            clearInterval(timer)
        }
<<<<<<< HEAD
        const suffix = element.textContent.replace(/\d/g, '')

        element.textContent = Math.floor(current) + suffix
=======
        
        const suffix = element && element.textContent.replace(/\d/g, ''),
        element && element.textContent = Math && Math.floor(current) + suffix
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }, 16)
}
// Tooltip initialization
function initializeTooltips() {
<<<<<<< HEAD

    const tooltipElements = document.querySelectorAll('[data-tooltip]')
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div')
            tooltip.className = 'tooltip'
            tooltip.textContent = this.dataset.tooltip
            document.body.appendChild(tooltip)
            const rect = this.getBoundingClientRect()
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px'
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px'

            this.tooltip = tooltip
        })
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {

                this.tooltip.remove()

                this.tooltip = null
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            }
        })
    })
}
// Modal initialization
function initializeModals() {
<<<<<<< HEAD

    const modalTriggers = document.querySelectorAll('[data-modal]')
    const modals = document.querySelectorAll('.modal')
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault()
            const modalId = this.dataset.modal
            const modal = document.getElementById(modalId)
            if (modal) {
                modal.classList.add('active')

                document.body.style.overflow = 'hidden'
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            }
        })
    })
    // Close modal on overlay click
<<<<<<< HEAD
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {

                this.classList.remove('active')

                document.body.style.overflow = ''
=======
    modals && modals.forEach(modal => {
        modal && modal.addEventListener('click', function(e) {
            if (e && e.target === this) {
                this && this.classList.remove('active'),
                document && document.body.style && style.overflow = ''
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            }
        })
        // Close modal on close button click
<<<<<<< HEAD

        const closeBtn = modal.querySelector('.modal-close')
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('active')

                document.body.style.overflow = ''
=======
        const closeBtn = modal && modal.querySelector('.modal-close'),
        if (closeBtn) {
            closeBtn && closeBtn.addEventListener('click', function() {
                modal && modal.classList.remove('active'),
                document && document.body.style && style.overflow = ''
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            })
        }
    })
    // Close modal on escape key
<<<<<<< HEAD
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {

                    modal.classList.remove('active')

                    document.body.style.overflow = ''
=======
    document && document.addEventListener('keydown', function(e) {
        if (e && e.key === 'Escape') {
            modals && modals.forEach(modal => {
                if (modal && modal.classList.contains('active')) {
                    modal && modal.classList.remove('active'),
                    document && document.body.style && style.overflow = ''
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                }
            })
        }
    })
}
// Performance monitoring
function logPerformance() {

    if ('performance' in window) {
<<<<<<< HEAD
        const perfData = performance.getEntriesByType('navigation')[0]
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms')

        console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')
=======
        const perfData = performance && performance.getEntriesByType('navigation')[0],
        console && console.log('Page Load Time:', perfData && perfData.loadEventEnd - perfData && perfData.loadEventStart, 'ms'),
        console && console.log('DOM Content Loaded:', perfData && perfData.domContentLoadedEventEnd - perfData && perfData.domContentLoadedEventStart, 'ms')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
}
// Error tracking
<<<<<<< HEAD
window.addEventListener('error', function(e) {
=======
window && window.addEventListener('error', function(e) {
    console && console.error('JavaScript Error:', e && e.error),
    // Send to error tracking service
}),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

    console.error('JavaScript Error:', e.error)

    // Send to error tracking service
})
// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {
<<<<<<< HEAD

    console.log('Event tracked:', eventName, eventData)

=======
    console && console.log('Event tracked:', eventName, eventData),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Implement your analytics tracking here
}
});
//Add scroll effects to elements const observer = new IntersectionObserver (function (entries) {
<<<<<<< HEAD
  entries.forEach (entry => {
  if (entry.isIntersecting) {
  lastScrollTop = scrollTop
=======
  entries && entries.forEach (entry => {
  if (entry && entry.isIntersecting) {
  lastScrollTop = scrollTop 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
//Form handling for contact forms submitBtn && submitBtn.disabled = true;
//Simulate form submission (replace with actual API call) //Reset form form && form.reset ();
//Reset button after delay //Lazy loading for images if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver ( (entries, observer) => {
<<<<<<< HEAD
  entries.forEach (entry => {
  if (entry.isIntersecting) {
})
}//Newsletter subscription submitBtn.disabled = true;
//Simulate subscription (replace with actual API call) //Reset form this.reset ();
=======
  entries && entries.forEach (entry => {
  if (entry && entry.isIntersecting) {
  

}) 
}//Newsletter subscription submitBtn && submitBtn.disabled = true;
//Simulate subscription (replace with actual API call) //Reset form this && this.reset ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
//Reset button after delay //Initialize tooltips initializeTooltips ();
//Initialize modals initializeModals ()
});
//Search function if (searchResults) {
  const results = [ {
  title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager'
}
{
  title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform'
}
{
  title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems'
}
{
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
//Analytics tracking (replace with your analytics service) function trackEvent (eventName, eventData = {
}) {
  //Implement your analytics tracking here
}//Track page views trackEvent ('page view', {
<<<<<<< HEAD
  page: window.location.pathname;
title: document.title
=======
  page: window && window.location.pathname;
title: document && document.title 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
//Track button clicks document && document.addEventListener ('click', function (e) {
  if (e && e.target.matches ('.btn') ) {
  trackEvent ('button click', {
<<<<<<< HEAD
  button text: e.target.textContent;
button class: e.target.className;
page: window.location.pathname
})
=======
  button text: e && e.target.textContent;
button class: e && e.target.className;
page: window && window.location.pathname 
}) 

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
// Log performance when page is fully loaded window && window.addEventListener ('load', logPerformance);// Track page views
trackEvent('page_view', {
<<<<<<< HEAD
    page: window.location.pathname
    title: document.title

})
=======
    page: window && window.location.pathname,
    title: document && document.title
}),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

// Track button clicks
document && document.addEventListener('click', function(e) {
    if (e && e.target.matches('.btn')) {
        trackEvent('button_click', {
<<<<<<< HEAD
            button_text: e.target.textContent
            button_class: e.target.className
            page: window.location.pathname
=======
            button_text: e && e.target.textContent,
            button_class: e && e.target.className,
            page: window && window.location.pathname
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        })
    }
})
// Log performance when page is fully loaded
<<<<<<< HEAD
<<<<<<< HEAD

window.addEventListener('load', logPerformance)

=======
window && window.addEventListener('load', logPerformance),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
window.addEventListener('load', logPerformance),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
