 import { Link } from 'react - router - dom'  export function Footer () { const currentYear = new Date () .getFullYear ()   const navSections = [ { title: 'Company', links: [ { labe,
    l: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Partners', to: '/partners' }, { label: 'Careers', to: '/careers' }, { label: 'Contact', to: '/contact' },  ]}, { title: 'Services', links: [ { labe,
    l: 'All Services', to: '/services' }, { label: 'Pricing', to: '/pricing' }, { label: 'FAQ', to: '/faq' }, { label: 'Blog', to: '/blog' }, ]}, { title: 'Legal', links: [ { labe,
    l: 'Privacy Policy', to: '/privacy' }, { label: 'Terms of Service', to: '/terms' }, { label: 'Sitemap', to: '/sitemap' }, ]},  ]  const social = [ { label: 'LinkedIn', href: 'http,
    s:''';