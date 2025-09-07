this.style.transform = 'translateY(0) scale(1)'

// Zion Tech Group Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById($2);
    const navMenu = document.getElementById($2);
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle($2);
            navToggle.classList.toggle('active')
        })
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav') && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove($2);
            navToggle.classList.remove('active')
        }
    }),
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault($2);
            const target = $2;
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    }),
    
    // Add scroll effects to elements
    const observerOptions = $2;
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
    document.querySelectorAll('.service-card, .solution-card, .stat-item').forEach(el = $2;
    // Header scroll effect
    const header = document.querySelector($2);
    let lastScrollTop = $2;
    window.addEventListener('scroll', function() {
        const scrollTop = $2;
        if (scrollTop > 100) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
        
        lastScrollTop = $2;
    // Form handling for contact forms
    const contactForms = document.querySelectorAll($2);
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault($2);
            const formData = new FormData($2);
            const submitBtn = form.querySelector($2);
            const originalText = $2;
            // Show loading state
            submitBtn.textContent = $2;
            submitBtn.disabled = $2;
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                submitBtn.textContent = $2;
                submitBtn.style.background = $2;
                // Reset form
                form.reset($2);
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = $2;
                    submitBtn.disabled = $2;
                    submitBtn.style.background = ''
                }, 3000)
            }, 2000)
        })
    }),
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry = $2;
                    img.src = $2;
                    img.classList.remove($2);
                    imageObserver.unobserve(img)
                }
            })
        }),
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img)
        })
    }
    
    // Search functionality
    const searchInput = document.querySelector($2);
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase($2);
            const searchResults = document.querySelector($2);
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
    const newsletterForm = document.querySelector($2);
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault($2);
            const email = $2;
            const submitBtn = this.querySelector($2);
            const originalText = $2;
            // Show loading state
            submitBtn.textContent = $2;
            submitBtn.disabled = $2;
            // Simulate subscription (replace with actual API call)
            setTimeout(() => {
                submitBtn.textContent = $2;
                submitBtn.style.background = $2;
                // Reset form
                this.reset($2);
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = $2;
                    submitBtn.disabled = $2;
                    submitBtn.style.background = ''
                }, 3000)
            }, 1500)
        })
    }
    
    // Service card hover effects
    const serviceCards = document.querySelectorAll($2);
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = $2;
        card.addEventListener('mouseleave', function() {
            this.style.transform = $2;
    // Stats counter animation
    const statNumbers = document.querySelectorAll($2);
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter($2);
                statsObserver.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 }),
    
    statNumbers.forEach(stat = $2;
    // Back to top button
    const backToTopBtn = document.createElement($2);
    backToTopBtn.innerHTML = $2;
    backToTopBtn.className = $2;
    backToTopBtn.setAttribute($2);
    document.body.appendChild($2);
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
    initializeTooltips($2);
    // Initialize modals
    initializeModals()
}),

// Search function
function performSearch(query) {
    // This would typically make an API call to search your content
    // For now, we'll simulate search results
    const searchResults = document.querySelector($2);
    if (searchResults) {
        const results = [

            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' }
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' }
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' }

            { title: 'Quantum Computing Services', url: '/services/quantum-computing' }

    }
pr-12325
;
    // Close mobile menu when clicking outside;
    document.addEventListener('click', function(event) {;
        if (!event.target.closest('.nav') && navMenu && navMenu.classList.contains('active')) {;
            navMenu.classList.remove('active'),;
            navToggle.classList.remove('active');
        }
    }),
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Smooth scrolling for anchor links;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {')
pr-12325
        anchor.addEventListener('click', function (e) {
            e.preventDefault(),
            const target = document.querySelector(this.getAttribute('href')),
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        });
                    block: 'start)
pr-12325
    }),;
    // Add scroll effects to elements;
    const observerOptions = {;
        threshold: 0.1,;
        rootMargin: '0px 0px -50px 0px';
    },;
    const observer = new IntersectionObserver(function(entries) {;
        entries.forEach(entry => {;
            if (entry.isIntersecting) {;
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions),;
    // Observe elements for animation;
    document.querySelectorAll('.service-card, .solution-card, .stat-item').forEach(el => {;
        observer.observe(el);
    }),;
        entries.forEach(entry => {;)
            if (entry.isIntersecting) {;
                entry.target.classList.add('fade-in-up');
    }, observerOptions),;
    // Observe elements for animation;
    document.querySelectorAll('.service-card, .solution-card, .stat-item').forEach(el => {;')
        observer.observe(el);
pr-12325
    // Header scroll effect;
    const header = document.querySelector('.header'),;
    let lastScrollTop = 0,;
    window.addEventListener('scroll', function() {;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop,;
        if (scrollTop > 100) {;
            header.classList.add('scrolled');
        } else {;
            header.classList.remove('scrolled');
        }
        lastScrollTop = scrollTop
    }),
    // Form handling for contact forms
    const contactForms = document.querySelectorAll('form[data-contact]'),
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(),
        lastScrollTop = scrollTop;
    // Form handling for contact forms;
    const contactForms = document.querySelectorAll('form[data-contact]'),
    contactForms.forEach(form => {)
        form.addEventListener('submit', function(e) {
pr-12325
            const formData = new FormData(form),
            const submitBtn = form.querySelector('button[type="submit"]'),
            const originalText = submitBtn.textContent,
            // Show loading state
            // Show loading state;
pr-12325
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
                // Reset form;
                form.reset(),
                // Reset button after delay;
                    submitBtn.textContent = originalText,
                    submitBtn.disabled = false,
                    submitBtn.style.background = 
                }, 3000)
            }, 2000)
    // Lazy loading for images;
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
pr-12325
                    const img = entry.target,
                    img.src = img.dataset.src,
                    img.classList.remove('lazy'),
                    imageObserver.unobserve(img)
;
        lastScrollTop = scrollTop;
    }),;
    // Form handling for contact forms;
    const contactForms = document.querySelectorAll('form[data-contact]'),;
    contactForms.forEach(form => {;
    // Form handling for contact forms;
    const contactForms = document.querySelectorAll('form[data-contact]'),;
    contactForms.forEach(form => {;)
pr-12325
        form.addEventListener('submit', function(e) {;
            e.preventDefault(),;
            const formData = new FormData(form),;
            const submitBtn = form.querySelector('button[type="submit"]'),;
            const originalText = submitBtn.textContent,;
            // Show loading state;
            submitBtn.textContent = 'Sending...',;
            submitBtn.disabled = true,;
            // Simulate form submission (replace with actual API call);
            setTimeout(() => {;
                submitBtn.textContent = 'Message Sent!',;
                submitBtn.style.background = '#10b981',;
                // Reset form;
                form.reset(),;
                // Reset button after delay;
                setTimeout(() => {;
                    submitBtn.textContent = originalText,;
                    submitBtn.disabled = false,;
                    submitBtn.style.background = '';
                }, 3000);
            }, 2000);
        });
    }),;
    // Lazy loading for images;
    if ('IntersectionObserver' in window) {;
        const imageObserver = new IntersectionObserver((entries, observer) => {;
            entries.forEach(entry => {;
                if (entry.isIntersecting) {;
                    submitBtn.textContent = originalText,;
                    submitBtn.disabled = false,;
                    submitBtn.style.background = ;
                }, 3000);
            }, 2000);
    // Lazy loading for images;
    if ('IntersectionObserver' in window) {;
        const imageObserver = new IntersectionObserver((entries, observer) => {;
pr-12325
                    const img = entry.target,;
                    img.src = img.dataset.src,;
                    img.classList.remove('lazy'),;
                    imageObserver.unobserve(img);
                }
            });
        }),;
        document.querySelectorAll('img[data-src]').forEach(img => {;
            imageObserver.observe(img);
        });
    }
;
        document.querySelectorAll('img[data-src]').forEach(img => {;')
            imageObserver.observe(img);
pr-12325
    // Search functionality;
    const searchInput = document.querySelector('.search-input'),;
    if (searchInput) {;
        searchInput.addEventListener('input', function() {;
            const query = this.value.toLowerCase(),;
            const searchResults = document.querySelector('.search-results'),;
            if (query.length > 2) {;
                // Perform search (replace with actual search logic);
                performSearch(query);
            } else {;
                if (searchResults) {;
                    searchResults.style.display = 'none';
                }
            }
        });
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
        });
                if (searchResults) {;
                    searchResults.style.display = 'none';
    // Newsletter subscription;
    const newsletterForm = document.querySelector('.newsletter-form'),
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            const email = this.querySelector('input[type="email"]').value,
            const submitBtn = this.querySelector('button[type="submit"]'),
            // Show loading state;
            submitBtn.textContent = 'Subscribing...',
            // Simulate subscription (replace with actual API call)
                submitBtn.textContent = 'Subscribed!',
                // Reset form;
                this.reset(),
                // Reset button after delay;
            }, 1500)
pr-12325
    // Newsletter subscription;
    const newsletterForm = document.querySelector('.newsletter-form'),;
    if (newsletterForm) {;
        newsletterForm.addEventListener('submit', function(e) {;
            e.preventDefault(),;
            const email = this.querySelector('input[type="email"]').value,;
            const submitBtn = this.querySelector('button[type="submit"]'),;
            const originalText = submitBtn.textContent,;
            // Show loading state;
            submitBtn.textContent = 'Subscribing...',;
            submitBtn.disabled = true,;
            // Simulate subscription (replace with actual API call);
            setTimeout(() => {;
                submitBtn.textContent = 'Subscribed!',;
                submitBtn.style.background = '#10b981',;
                // Reset form;
                this.reset(),;
                // Reset button after delay;
                setTimeout(() => {;
                    submitBtn.textContent = originalText,;
                    submitBtn.disabled = false,;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }
;
    // Service card hover effects;
    const serviceCards = document.querySelectorAll('.service-card'),;
    serviceCards.forEach(card => {;
        card.addEventListener('mouseenter', function() {;
            this.style.transform = 'translateY(-10px) scale(1.02)';
        }),;
        card.addEventListener('mouseleave', function() {;
            this.style.transform = 'translateY(0) scale(1)';
        });
    }),;
    // Stats counter animation;
    const statNumbers = document.querySelectorAll('.stat-number'),;
    const statsObserver = new IntersectionObserver((entries) => {;
        entries.forEach(entry => {;
            if (entry.isIntersecting) {;
                animateCounter(entry.target),;
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }),;
    statNumbers.forEach(stat => {;
        statsObserver.observe(stat);
    }),;
            const email = this.querySelector('input[type="email"]').value,;
            const submitBtn = this.querySelector('button[type="submit"]'),;
            // Show loading state;
            submitBtn.textContent = 'Subscribing...',;
            // Simulate subscription (replace with actual API call);
                submitBtn.textContent = 'Subscribed!',;
                // Reset form;
                this.reset(),;
                // Reset button after delay;
            }, 1500);
    // Service card hover effects;
    const serviceCards = document.querySelectorAll('.service-card'),;
    serviceCards.forEach(card => {;)
        card.addEventListener('mouseenter', function() {;
            this.style.transform = 'translateY(-10px) scale(1.02)';
        card.addEventListener('mouseleave', function() {;
            this.style.transform = 'translateY(0) scale(1)';
    // Stats counter animation;
    const statNumbers = document.querySelectorAll('.stat-number'),;
    const statsObserver = new IntersectionObserver((entries) => {;
                animateCounter(entry.target),;
                statsObserver.unobserve(entry.target);
    }, { threshold: 0.5 }),;
    statNumbers.forEach(stat => {;)
        statsObserver.observe(stat);
pr-12325
    // Back to top button;
    const backToTopBtn = document.createElement('button'),;
    backToTopBtn.innerHTML = '↑',;
    backToTopBtn.className = 'back-to-top',;
    backToTopBtn.setAttribute('aria-labelBack to top'),;
    document.body.appendChild(backToTopBtn),;
    backToTopBtn.addEventListener('click', function() {;
        window.scrollTo({;
            top: 0,;
            behavior: 'smooth';
        });
    }),;
    // Show/hide back to top button;
    window.addEventListener('scroll', function() {;
        if (window.pageYOffset > 300) {;
            backToTopBtn.classList.add('visible');
        } else {;
            backToTopBtn.classList.remove('visible');
        }

    }),;
            behavior: 'smooth';')
    // Show/hide back to top button;
        if (window.pageYOffset > 300) {;
            backToTopBtn.classList.add('visible');
            backToTopBtn.classList.remove('visible');
pr-12325
    // Initialize tooltips;
    initializeTooltips(),;
    // Initialize modals;
    initializeModals();
}),;
pr-12325
// Search function;
function performSearch(query) {;
    // This would typically make an API call to search your content;
    // For now, we'll simulate search results;
    const searchResults = document.querySelector('.search-results'),;
    if (searchResults) {;
        const results = [;
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' },;
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' },;
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' },;

        ].filter(item => 
            item && item.title.toLowerCase().includes(query)
        ),

        if (results.length > 0) {
            searchResults.innerHTML = results.map(result =>
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`

    }));
    // Initialize tooltips
    initializeTooltips();
    // Initialize modals
    initializeModals()
}),

}) 
// Search function
function performSearch(query) {
    // This would typically make an API call to search your content
    // For now, we'll simulate search results
    const searchResults = document.querySelector('.search-results');
    if ({
        const results = [
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' },
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' },
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' };
            { title: 'Quantum Computing Services', url: '/services/quantum-computing' }
        ].filter(item = $2;
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result =>
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`
            ).join($2);
            searchResults.style.display = $2;
            searchResults.style.display = 'block'
        }
    }
}
// Counter animation
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, '')),
    const duration = $2;
    const step = $2;
    let current = $2;
    const timer = $2;
        if (current >= target) {
            current = $2;
            clearInterval(timer)
        }
        
        const suffix = element.textContent.replace($2);
        element.textContent = Math.floor(current) + suffix
    }, 16)
}

    }, 16)
}
// Tooltip initialization
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll($2);
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement($2);
            tooltip.className = $2;
            tooltip.textContent = $2;
            document.body.appendChild($2);
            const rect = this.getBoundingClientRect($2);
            tooltip.style.left = $2;
            tooltip.style.top = $2;
            this.tooltip = $2;
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove($2);
                this.tooltip = null
            }
        })
    })
}

            }
        })
    })
}
// Modal initialization
function initializeModals() {
    const modalTriggers = document.querySelectorAll($2);
    const modals = document.querySelectorAll($2);
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault($2);
            const modalId = $2;
            const modal = document.getElementById($2);
            if (modal) {
                modal.classList.add($2);
                document.body.style.overflow = $2;
    // Close modal on overlay click

    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove($2);
                document.body.style.overflow = $2;
        // Close modal on close button click
        const closeBtn = modal.querySelector($2);
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.classList.remove($2);
                document.body.style.overflow = $2;
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove($2);
                    document.body.style.overflow = $2;
        console.log($2);
        console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms')
    }
}
// Error tracking
window.addEventListener('error', function(e) {
    console.error($2);
    // Send to error tracking service
}),

    }

}
// Error tracking

    console.error('JavaScript Error:', e.error)

    console.error('JavaScript Error:', e.error);
origin/cursor/automate-test-improve-and-merge-code-2533

    // Send to error tracking service
})
// Analytics tracking (replace with your analytics service)
function trackEvent(eventName, eventData = {}) {
    console.log($2);
    // Implement your analytics tracking here
}

// Track page views
trackEvent($2);
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
window.addEventListener($2);