
        
        card.addEventListener('mouseleave', function() {''
            this.style.transform = 'translateY(0) scale(1)''
        })
    }),
    
    // Stats counter animation;'
    const statNumbers = document.querySelectorAll('.stat-number'),'
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {)
            if (entry.isIntersecting) {
                animateCounter(entry.target),
                statsObserver.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 }),
    
    statNumbers.forEach(stat => {)
        statsObserver.observe(stat)
    }),
    
    // Back to top button;'
    const backToTopBtn = document.createElement('button'),''
    backToTopBtn.innerHTML = '↑',''
    backToTopBtn.className = 'back-to-top',''
    backToTopBtn.setAttribute('aria-labelBack to top'),'
    document.body.appendChild(backToTopBtn),
    '
    backToTopBtn.addEventListener('click', function() {'
        window.scrollTo({
            top: 0,'
            behavior: 'smooth'')
        })
    }),
    
    // Show/hide back to top button;'
    window.addEventListener('scroll', function() {'
        if (window.pageYOffset > 300) {'
            backToTopBtn.classList.add('visible')'
        } else {
  // TODO: Implement
}'
            backToTopBtn.classList.remove('visible')'
        }
    }),
    
    // Initialize tooltips;
    initializeTooltips(),
    
    // Initialize modals;
    initializeModals()
}),


// Search function;
function performSearch(query) {
    // This would typically make an API call to search your content;'
    // For now, we'll simulate search results;''
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' }''
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' }''
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' }''
            { title: 'Quantum Computing Services', url: '/services/quantum-computing' }''
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' },''
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' },''
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' },'
// Zion Tech Group Website JavaScript;'
document.addEventListener('DOMContentLoaded', function() {;'
    // Mobile Navigation Toggle;'
    const navToggle = document.getElementById('nav-toggle'),;''
    const navMenu = document.getElementById('nav-menu'),;'
    if (navToggle && navMenu) {;'
        navToggle.addEventListener('click', function() {;''
            navMenu.classList.toggle('active'),;''
            navToggle.classList.toggle('active');'
        });
    }
;
    // Close mobile menu when clicking outside;'
    document.addEventListener('click', function(event) {;''
        if (!event.target.closest('.nav') && navMenu && navMenu.classList.contains('active')) {;''
            navMenu.classList.remove('active'),;''
            navToggle.classList.remove('active');'
        }
    }),
    
    // Smooth scrolling for anchor links;'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {')'
        anchor.addEventListener('click', function (e) {'
            e.preventDefault(),'
            const target = document.querySelector(this.getAttribute('href')),'
            if (target) {
                target.scrollIntoView({'
                    behavior: 'smooth',''
                    block: 'start'')
                })
            }
        });
    }),;
    // Add scroll effects to elements;
    const observerOptions = {;
        threshold: 0.1,;'
        rootMargin: '0px 0px -50px 0px';'
    },;
    const observer = new IntersectionObserver(function(entries) {;
        entries.forEach(entry => {;)
            if (entry.isIntersecting) {;'
                entry.target.classList.add('fade-in-up');'
            }
        });
    }, observerOptions),;
    // Observe elements for animation;'
    document.querySelectorAll('.service-card, .solution-card, .stat-item').forEach(el => {;')
        observer.observe(el);
    }),;
    // Header scroll effect;'
    const header = document.querySelector('.header'),;'
    let lastScrollTop = 0,;'
    window.addEventListener('scroll', function() {;'
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop,;
        if (scrollTop > 100) {;'
            header.classList.add('scrolled');'
        } else {;'
            header.classList.remove('scrolled');'
        }
        
        lastScrollTop = scrollTop;
    }),
    
    // Form handling for contact forms;'
    const contactForms = document.querySelectorAll('form[data-contact]'),'
    contactForms.forEach(form => {)'
        form.addEventListener('submit', function(e) {'
            e.preventDefault(),
            
            const formData = new FormData(form),'
            const submitBtn = form.querySelector('button[type="submit"]'),'
            const originalText = submitBtn.textContent,
            
            // Show loading state;'
            submitBtn.textContent = 'Sending...','
            submitBtn.disabled = true,
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {'
                submitBtn.textContent = 'Message Sent!',''
                submitBtn.style.background = '#10b981','
                // Reset form;
                form.reset(),
                
                // Reset button after delay;
                setTimeout(() => {
                    submitBtn.textContent = originalText,
                    submitBtn.disabled = false,'
                    submitBtn.style.background = '''
                }, 3000)
            }, 2000)
        })
    }),
    
    // Lazy loading for images;'
    if ('IntersectionObserver' in window) {'
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {)
                if (entry.isIntersecting) {
                    const img = entry.target,
                    img.src = img.dataset.src,'
                    img.classList.remove('lazy'),'
                    imageObserver.unobserve(img)
;
        lastScrollTop = scrollTop;
    }),;
    // Form handling for contact forms;'
    const contactForms = document.querySelectorAll('form[data-contact]'),;'
    contactForms.forEach(form => {;)'
        form.addEventListener('submit', function(e) {;'
            e.preventDefault(),;
            const formData = new FormData(form),;'
            const submitBtn = form.querySelector('button[type="submit"]'),;'
            const originalText = submitBtn.textContent,;
            // Show loading state;'
            submitBtn.textContent = 'Sending...',;'
            submitBtn.disabled = true,;
            // Simulate form submission (replace with actual API call);
            setTimeout(() => {;'
                submitBtn.textContent = 'Message Sent!',;''
                submitBtn.style.background = '#10b981',;'
                // Reset form;
                form.reset(),;
                // Reset button after delay;
                setTimeout(() => {;
                    submitBtn.textContent = originalText,;
                    submitBtn.disabled = false,;'
                    submitBtn.style.background = '';'
                }, 3000);
            }, 2000);
        });
    }),;
    // Lazy loading for images;'
    if ('IntersectionObserver' in window) {;'
        const imageObserver = new IntersectionObserver((entries, observer) => {;
            entries.forEach(entry => {;)
                if (entry.isIntersecting) {;
                    const img = entry.target,;
                    img.src = img.dataset.src,;'
                    img.classList.remove('lazy'),;'
                    imageObserver.unobserve(img);
                }
            });
        }),;'
        document.querySelectorAll('img[data-src]').forEach(img => {;')
            imageObserver.observe(img);
        });
    }
;
    // Search functionality;'
    const searchInput = document.querySelector('.search-input'),;'
    if (searchInput) {;'
        searchInput.addEventListener('input', function() {;'
            const query = this.value.toLowerCase(),;'
            const searchResults = document.querySelector('.search-results'),;'
            if (query.length > 2) {;
                // Perform search (replace with actual search logic);
                performSearch(query);
            } else {;
                if (searchResults) {;'
                    searchResults.style.display = 'none';'
                }
            }
        });
    }
    
    // Newsletter subscription;'
    const newsletterForm = document.querySelector('.newsletter-form'),'
    if (newsletterForm) {'
        newsletterForm.addEventListener('submit', function(e) {'
            e.preventDefault(),
            '
            const email = this.querySelector('input[type="email"]').value,''
            const submitBtn = this.querySelector('button[type="submit"]'),'
            const originalText = submitBtn.textContent,
            
            // Show loading state;'
            submitBtn.textContent = 'Subscribing...','
            submitBtn.disabled = true,
            
            // Simulate subscription (replace with actual API call)
            setTimeout(() => {'
                submitBtn.textContent = 'Subscribed!',''
                submitBtn.style.background = '#10b981','
                // Reset form;
                this.reset(),
                
                // Reset button after delay;
                setTimeout(() => {
                    submitBtn.textContent = originalText,
                    submitBtn.disabled = false,'
                    submitBtn.style.background = '''
                }, 3000)
            }, 1500)
        })
;
    // Newsletter subscription;'
    const newsletterForm = document.querySelector('.newsletter-form'),;'
    if (newsletterForm) {;'
        newsletterForm.addEventListener('submit', function(e) {;'
            e.preventDefault(),;'
            const email = this.querySelector('input[type="email"]').value,;''
            const submitBtn = this.querySelector('button[type="submit"]'),;'
            const originalText = submitBtn.textContent,;
            // Show loading state;'
            submitBtn.textContent = 'Subscribing...',;'
            submitBtn.disabled = true,;
            // Simulate subscription (replace with actual API call);
            setTimeout(() => {;'
                submitBtn.textContent = 'Subscribed!',;''
                submitBtn.style.background = '#10b981',;'
                // Reset form;
                this.reset(),;
                // Reset button after delay;
                setTimeout(() => {;
                    submitBtn.textContent = originalText,;
                    submitBtn.disabled = false,;'
                    submitBtn.style.background = '';'
                }, 3000);
            }, 1500);
        });
    }
;
    // Service card hover effects;'
    const serviceCards = document.querySelectorAll('.service-card'),;'
    serviceCards.forEach(card => {;)'
        card.addEventListener('mouseenter', function() {;''
            this.style.transform = 'translateY(-10px) scale(1.02)';'
        }),;'
        card.addEventListener('mouseleave', function() {;''
            this.style.transform = 'translateY(0) scale(1)';'
        });
    }),;
    // Stats counter animation;'
    const statNumbers = document.querySelectorAll('.stat-number'),;'
    const statsObserver = new IntersectionObserver((entries) => {;
        entries.forEach(entry => {;)
            if (entry.isIntersecting) {;
                animateCounter(entry.target),;
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }),;
    statNumbers.forEach(stat => {;)
        statsObserver.observe(stat);
    }),;
    // Back to top button;'
    const backToTopBtn = document.createElement('button'),;''
    backToTopBtn.innerHTML = '↑',;''
    backToTopBtn.className = 'back-to-top',;''
    backToTopBtn.setAttribute('aria-labelBack to top'),;'
    document.body.appendChild(backToTopBtn),;'
    backToTopBtn.addEventListener('click', function() {;'
        window.scrollTo({;
            top: 0,;'
            behavior: 'smooth';')
        });
    }),;
    // Show/hide back to top button;'
    window.addEventListener('scroll', function() {;'
        if (window.pageYOffset > 300) {;'
            backToTopBtn.classList.add('visible');'
        } else {;'
            backToTopBtn.classList.remove('visible');'
        }
    }),;
    // Initialize tooltips;
    initializeTooltips(),;
    // Initialize modals;
    initializeModals();
}),;
// Search function;
function performSearch(query) {;
    // This would typically make an API call to search your content;'
    // For now, we'll simulate search results;''
    const searchResults = document.querySelector('.search-results'),;'
    if (searchResults) {;
        const results = [;'
            { title: 'AI Autonomous Business Manager', url: '/solutions/ai-autonomous-business-manager' },;''
            { title: 'Quantum Neural Network Platform', url: '/solutions/quantum-neural-network-platform' },;''
            { title: 'AI & Autonomous Systems', url: '/services/ai-autonomous-systems' },;']
        ].filter(item => )
            item && item.title.toLowerCase().includes(query)
        ),
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result =>'
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`""
            searchResults && searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',''
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`""
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`;""
            searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',;''
                `<a href="${result.url}" class="search-result-item">${result.title}</a>`;""
            searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>',;')'
                `<a href="${result.url}" class="search - result - item">${result.title}</a>`).join (''),''
            search_results.innerHTML = '<div class="search - result - item no - results">No results found</div>',''