// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://api.ziontechgroup.com' 
    : 'http://localhost:3001',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
} as const;

// Application Configuration
export const APP_CONFIG = {
  NAME: 'Zion Tech Group',
  VERSION: '1.0.0',
  DESCRIPTION: 'Advanced AI and IT Solutions',
  URL: 'https://ziontechgroup.com',
  SUPPORT_EMAIL: 'contact@ziontechgroup.com',
  SUPPORT_PHONE: '+1 (555) 123-4567'
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/ziontechgroup',
  LINKEDIN: 'https://linkedin.com/company/zion-tech-group',
  GITHUB: 'https://github.com/ziontechgroup',
  FACEBOOK: 'https://facebook.com/ziontechgroup'
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/', external: false },
  { label: 'About', path: '/about', external: false },
  { 
    label: 'Services', 
    path: '/services', 
    external: false,
    submenu: [
      { label: 'All Services', path: '/services' },
      { label: 'AI Services', path: '/ai-services' },
      { label: 'IT Services', path: '/it-services' },
      { label: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
      { label: '5G Solutions', path: '/5g-solutions' }
    ]
  },
  { label: 'Pricing', path: '/pricing', external: false },
  { label: 'Blog', path: '/blog', external: false },
  { label: 'Team', path: '/team', external: false },
  { label: 'Careers', path: '/careers', external: false },
  { label: 'Contact', path: '/contact', external: false }
] as const;

// Footer Links
export const FOOTER_LINKS = {
  SERVICES: [
    { label: 'All Services', path: '/services' },
    { label: 'AI Services', path: '/ai-services' },
    { label: 'IT Services', path: '/it-services' },
    { label: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { label: '5G Solutions', path: '/5g-solutions' },
    { label: 'Pricing', path: '/pricing' }
  ],
  COMPANY: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Careers', path: '/careers' },
    { label: 'Partnerships', path: '/partnerships' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' }
  ],
  RESOURCES: [
    { label: 'Blog', path: '/blog' },
    { label: 'API Docs', path: '/api-docs' },
    { label: 'Help Center', path: '/help' },
    { label: 'Accessibility', path: '/accessibility' }
  ],
  LEGAL: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' }
  ]
} as const;

// Performance Thresholds
export const PERFORMANCE_THRESHOLDS = {
  FCP: 1800, // First Contentful Paint (ms)
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  TTFB: 800  // Time to First Byte (ms)
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'An unexpected error occurred. Please try again.',
  NETWORK: 'Network error. Please check your connection and try again.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION: 'Please check your input and try again.'
} as const;

// Loading States
export const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px'
} as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const;

// Z-Index Layers
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070
} as const;