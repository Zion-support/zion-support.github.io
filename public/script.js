// Zion Tech Group Website JavaScript
<<<<<<< HEAD
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
    document.querySelectorAll('a[href^=&quot;#&quot;]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(),
            const target = document.querySelector(this.getAttribute('href')),
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
=======
document.addEventListener('DOMContentLoaded', function() {_// Mobile Navigation Toggle
    const _navToggle = document.getElementById('nav-toggle');
    const _navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', _function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');});
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {_if (!event.target.closest('.nav') && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');}
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {_anchor.addEventListener('click', _function (_e) {
            e.preventDefault();
            const _target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', _block: 'start'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }
        })
    }),
    
    // Add scroll effects to elements
<<<<<<< HEAD
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    },
=======
    const _observerOptions = {_threshold: 0.1, _rootMargin: '0px 0px -50px 0px'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    const _observer = new IntersectionObserver(function(entries) {_entries.forEach(entry => {
            if (entry.isIntersecting) {
<<<<<<< HEAD
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
=======
                entry.target.classList.add('fade-in-up');}
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .solution-card, .stat-item').forEach(el => {_observer.observe(el);});
    
    // Header scroll effect
    const _header = document.querySelector('.header');
    let _lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {_const _scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');} else {_header.classList.remove('scrolled');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        lastScrollTop = scrollTop
    }),
    
    // Form handling for contact forms
<<<<<<< HEAD
    const contactForms = document.querySelectorAll('form[data-contact]'),
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(),
            
<<<<<<< HEAD
            const formData = new FormData(form),
            const submitBtn = form.querySelector('button[type="submit"]'),
            const originalText = submitBtn.textContent,
=======
            const formData = new FormData(form);
            const submitBtn = form.querySelector('button[type=&quot;submit&quot;]');
            const originalText = submitBtn.textContent;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const _contactForms = document.querySelectorAll('form[data-contact]');
    
    contactForms.forEach(form => {_form.addEventListener('submit', _function(e) {
            e.preventDefault();
            
            const _formData = new FormData(form);
            const _submitBtn = form.querySelector('button[type="submit"]');
            const _originalText = submitBtn.textContent;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            
            // Show loading state
            submitBtn.textContent = 'Sending...',
            submitBtn.disabled = true,
            
            // Simulate form submission (replace with actual API call)
<<<<<<< HEAD
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!',
                submitBtn.style.background = '#10b981',
=======
            setTimeout__(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#10b981';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                
                // Reset form
                form.reset(),
                
                // Reset button after delay
<<<<<<< HEAD
                setTimeout(() => {
                    submitBtn.textContent = originalText,
                    submitBtn.disabled = false,
                    submitBtn.style.background = ''
                }, 3000)
            }, 2000)
        })
    }),
=======
                setTimeout__(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';}, 3000);
            }, 2000);
        });
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {_const _imageObserver = new IntersectionObserver(_(entries, _observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
<<<<<<< HEAD
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
=======
                    const _img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);}
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {_imageObserver.observe(img);});
    }
    
    // Search functionality
    const _searchInput = document.querySelector('.search-input');
    if (searchInput) {_searchInput.addEventListener('input', _function() {
            const _query = this.value.toLowerCase();
            const _searchResults = document.querySelector('.search-results');
            
            if (query.length > 2) {
                // Perform search (replace with actual search logic)
                performSearch(query);} else {_if (searchResults) {
                    searchResults.style.display = 'none';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }
        })
    }
    
    // Newsletter subscription
<<<<<<< HEAD
    const newsletterForm = document.querySelector('.newsletter-form'),
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(),
            
<<<<<<< HEAD
            const email = this.querySelector('input[type="email"]').value,
            const submitBtn = this.querySelector('button[type="submit"]'),
            const originalText = submitBtn.textContent,
=======
            const email = this.querySelector('input[type=&quot;email&quot;]').value;
            const submitBtn = this.querySelector('button[type=&quot;submit&quot;]');
            const originalText = submitBtn.textContent;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const _newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {_newsletterForm.addEventListener('submit', _function(e) {
            e.preventDefault();
            
            const _email = this.querySelector('input[type="email"]').value;
            const _submitBtn = this.querySelector('button[type="submit"]');
            const _originalText = submitBtn.textContent;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            
            // Show loading state
            submitBtn.textContent = 'Subscribing...',
            submitBtn.disabled = true,
            
            // Simulate subscription (replace with actual API call)
<<<<<<< HEAD
            setTimeout(() => {
                submitBtn.textContent = 'Subscribed!',
                submitBtn.style.background = '#10b981',
=======
            setTimeout__(() => {
                submitBtn.textContent = 'Subscribed!';
                submitBtn.style.background = '#10b981';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                
                // Reset form
                this.reset(),
                
                // Reset button after delay
<<<<<<< HEAD
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
=======
                setTimeout__(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';}, 3000);
            }, 1500);
        });
    }
    
    // Service card hover effects
    const _serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {_card.addEventListener('mouseenter', _function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';});
        
        card.addEventListener('mouseleave', function() {_this.style.transform = 'translateY(0) scale(1)';});
    });
    
    // Stats counter animation
    const _statNumbers = document.querySelectorAll('.stat-number');
    const _statsObserver = new IntersectionObserver(_(entries) => {_entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);}
        });
    }, {_threshold: 0.5});
    
    statNumbers.forEach(stat => {_statsObserver.observe(stat);});
    
    // Back to top button
    const _backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', function() {_window.scrollTo({
            top: 0, _behavior: 'smooth'});
    });
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {_if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');} else {_backToTopBtn.classList.remove('visible');}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Initialize tooltips
    initializeTooltips(),
    
    // Initialize modals
    initializeModals()
}),

// Search function
<<<<<<< HEAD
function performSearch(query) {
    // This would typically make an API call to search your content
    // For now, we'll simulate search results
    const searchResults = document.querySelector('.search-results'),
=======
function performSearch(_query) {_// This would typically make an API call to search your content
    // For now, _we'll simulate search results
    const _searchResults = document.querySelector('.search-results');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (searchResults) {
        const _results = [
            { title: 'AI Autonomous Business Manager', _url: '/solutions/ai-autonomous-business-manager'},
            {_title: 'Quantum Neural Network Platform', _url: '/solutions/quantum-neural-network-platform'},
            {_title: 'AI & Autonomous Systems', _url: '/services/ai-autonomous-systems'},
            {_title: 'Quantum Computing Services', _url: '/services/quantum-computing'}
        ].filter(item => 
            item.title.toLowerCase().includes(query)
        ),
        
<<<<<<< HEAD
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => 
<<<<<<< HEAD
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`
            ).join(''),
            searchResults.style.display = 'block'
        } else {
            searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',
            searchResults.style.display = 'block'
=======
                `<a href=&quot;${result.url}&quot; class=&quot;search-result-item&quot;>${result.title}</Link>`
            ).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class=&quot;search-result-item no-results&quot;>No results found</div>';
            searchResults.style.display = 'block';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
=======
        if (results.length > 0) {_searchResults.innerHTML = results.map(result => 
                `<a href="${result.url}" class="search-result-item">${_result.title}</a>`
            ).join('');
            searchResults.style.display = 'block';
        } else {_searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>';
            searchResults.style.display = 'block';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
}

// Counter animation
<<<<<<< HEAD
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
=======
function animateCounter(_element) {_const _target = parseInt(element.textContent.replace(/\D/g, _''));
    const _duration = 2000;
    const _step = target / (duration / 16);
    let _current = 0;
    
    const _timer = setInterval__(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);}
        
        const _suffix = element.textContent.replace(/\d/g, '');
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Tooltip initialization
function initializeTooltips() {_const _tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', _function(e) {
            const _tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const _rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            this.tooltip = tooltip;});
        
        element.addEventListener('mouseleave', function() {_if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;}
        });
    });
}

// Modal initialization
function initializeModals() {_const _modalTriggers = document.querySelectorAll('[data-modal]');
    const _modals = document.querySelectorAll('.modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', _function(e) {
            e.preventDefault();
            const _modalId = this.dataset.modal;
            const _modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';}
        });
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Close modal on overlay click
    modals.forEach(modal => {_modal.addEventListener('click', _function(e) {
            if (e.target === this) {
<<<<<<< HEAD
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
=======
                this.classList.remove('active');
                document.body.style.overflow = '';}
        });
        
        // Close modal on close button click
        const _closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {_closeBtn.addEventListener('click', _function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
    }),
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {_if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
<<<<<<< HEAD
                    modal.classList.remove('active'),
                    document.body.style.overflow = ''
                }
            })
=======
                    modal.classList.remove('active');
                    document.body.style.overflow = '';}
            });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
    })
}

// Performance monitoring
<<<<<<< HEAD
function logPerformance() {
    if ('performance' in window) {
<<<<<<< HEAD
        const perfData = window.window.window.performance.getEntriesByType('navigation')[0],
        // // // console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms'),
        // // // console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')
=======
        const perfData = performance.getEntriesByType('navigation')[0];
        // console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        // console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
}

// Error tracking
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error),
    // Send to error tracking service
}),

// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {
<<<<<<< HEAD
    // // // console.log('Event tracked:', eventName, eventData),
=======
    // console.log('Event tracked:', eventName, eventData);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // Implement your analytics tracking here
}

// Track page views
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
=======
function logPerformance() {_if ('performance' in window) {
        const _perfData = performance.getEntriesByType('navigation')[0];}
}

// Error tracking
window.addEventListener('error', function(e) {_// Send to error tracking service});

// Analytics tracking (replace with your analytics service)
function trackEvent(_eventName, _eventData = {}) {_// Implement your analytics tracking here}

// Track page views
trackEvent('page_view', {_page: window.location.pathname, _title: document.title});

// Track button clicks
document.addEventListener('click', function(e) {_if (e.target.matches('.btn')) {
        trackEvent('button_click', _{
            button_text: e.target.textContent, _button_class: e.target.className, _page: window.location.pathname});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
}),

// Log performance when page is fully loaded
window.addEventListener('load', logPerformance),