<<<<<<< HEAD

export default MobileNavigation;
=======
import React, {useState, useEffect, useRef} from 'react';'''
import {Link, useLocation} from 'react-router-dom';'''
import {motion, AnimatePresence} from 'framer-motion';
import { X, ChevronDown, Search, User, Bell const MobileNavigation = (props: any) => {}
    const [activeDropdown, setActiveDropdown] = useState(null);'
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const menuRef = useRef(null);
    // Close menu when route changes;
    useEffect ( () => {}
        onToggle () }, [location.pathname]) ;
    // Close menu when clicking outside;
    useEffect ( () => {}
        const handleClickOutside = (props: any) => {}
            if (menuRef.current && !menuRef.current.contains(event.target)) {}
                onToggle()}
        };
        if (isOpen) {}
'
''
'''
            document.addEventListener('mousedown', handleClickOutside);'''
            document.body.style.overflow = 'hidden'}
        return () => {}
'
''
'''
            document.removeEventListener('mousedown', handleClickOutside);'''
            document.body.style.overflow = 'unset'}}, [isOpen, onToggle]);
    const navigationItems = []
        {}
'
''
'''
            label: 'Services','''
            href: '/services',''
            children[;'''
                {label: 'AI & Machine Learning', href: '/services/ai'},'''
                {label: 'Quantum Computing', href: '/services/quantum'},'''
                {label: 'Cybersecurity', href: '/services/cybersecurity'},'''
                {label: 'Cloud Services', href: '/services/cloud'},'''
                {label: 'Digital Transformation', href: '/services/transformation'},'''
                {label: 'Consulting', href: '/services/consulting'}
            ]
        },;
        {}
'
''
'''
            label: 'Solutions','''
            href: '/solutions',''
            children[;'''
                {label: 'Enterprise Solutions', href: '/solutions/enterprise'},'''
                {label: 'Startup Solutions', href: '/solutions/startup'},'''
                {label: 'Government Solutions', href: '/solutions/government'},'''
                {label: 'Healthcare Solutions', href: '/solutions/healthcare'}
            ]
        },;
        {}
'
''
'''
            label: 'Industries','''
            href: '/industries',''
            children[;'''
                {label: 'Technology', href: '/industries/technology'},'''
                {label: 'Healthcare', href: '/industries/healthcare'},'''
                {label: 'Finance', href: '/industries/finance'},'''
                {label: 'Manufacturing', href: '/industries/manufacturing'},'''
                {label: 'Education', href: '/industries/education'}
            ]
        },;
        {}
'
''
'''
            label: 'Comp','''
            href: '/about',''
            children[;'''
                {label: 'About Us', href: '/about'},'''
                {label: 'Careers', href: '/careers'},'''
                {label: 'News', href: '/news'},'''
                {label: 'Press', href: '/press'},'''
                {label: 'Contact', href: '/contact'}
            ]

export default MobileNavigation;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
