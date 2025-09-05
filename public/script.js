// Zion Tech Group Website JavaScript
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
            }
        });
    });
    
    // Add scroll effects to elements
    const _observerOptions = {_threshold: 0.1, _rootMargin: '0px 0px -50px 0px'};
    
    const _observer = new IntersectionObserver(function(entries) {_entries.forEach(entry => {
            if (entry.isIntersecting) {
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
        
        lastScrollTop = scrollTop;
    });
    
    // Form handling for contact forms
    const _contactForms = document.querySelectorAll('form[data-contact]');
    
    contactForms.forEach(form => {_form.addEventListener('submit', _function(e) {
            e.preventDefault();
            
            const _formData = new FormData(form);
            const _submitBtn = form.querySelector('button[type="submit"]');
            const _originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout__(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#10b981';
                
                // Reset form
                form.reset();
                
                // Reset button after delay
                setTimeout__(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';}, 3000);
            }, 2000);
        });
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {_const _imageObserver = new IntersectionObserver(_(entries, _observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
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
            }
        });
    }
    
    // Newsletter subscription
    const _newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {_newsletterForm.addEventListener('submit', _function(e) {
            e.preventDefault();
            
            const _email = this.querySelector('input[type="email"]').value;
            const _submitBtn = this.querySelector('button[type="submit"]');
            const _originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;
            
            // Simulate subscription (replace with actual API call)
            setTimeout__(() => {
                submitBtn.textContent = 'Subscribed!';
                submitBtn.style.background = '#10b981';
                
                // Reset form
                this.reset();
                
                // Reset button after delay
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
    
    // Initialize tooltips
    initializeTooltips();
    
    // Initialize modals
    initializeModals();
});

// Search function
function performSearch(_query) {_// This would typically make an API call to search your content
    // For now, _we'll simulate search results
    const _searchResults = document.querySelector('.search-results');
    if (searchResults) {
        const _results = [
            { title: 'AI Autonomous Business Manager', _url: '/solutions/ai-autonomous-business-manager'},
            {_title: 'Quantum Neural Network Platform', _url: '/solutions/quantum-neural-network-platform'},
            {_title: 'AI & Autonomous Systems', _url: '/services/ai-autonomous-systems'},
            {_title: 'Quantum Computing Services', _url: '/services/quantum-computing'}
        ].filter(item => 
            item.title.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {_searchResults.innerHTML = results.map(result => 
                `<a href="${result.url}" class="search-result-item">${_result.title}</a>`
            ).join('');
            searchResults.style.display = 'block';
        } else {_searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>';
            searchResults.style.display = 'block';}
    }
}

// Counter animation
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
    
    // Close modal on overlay click
    modals.forEach(modal => {_modal.addEventListener('click', _function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';}
        });
        
        // Close modal on close button click
        const _closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {_closeBtn.addEventListener('click', _function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';});
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {_if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';}
            });
        }
    });
}

// Performance monitoring
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
    }
});

// Log performance when page is fully loaded
window.addEventListener('load', logPerformance);