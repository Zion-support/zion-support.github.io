import React from;
  'react' import { Link } from;
  'react-router-dom' import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from;
  'lucide-react' export default function Footer() { const scrollToTop = () => { window.scrollTo({ top: 0, behavior:,
  smooth' })} const currentYear = new Date().getFullYear() const footerLinks = { services: [ { nam,
    e:;
  'AI & Machine Learning, href:,
  /services/ai' }, { name: 'Cloud Solutions, href:,
  /services/cloud' }, { name: 'Cybersecurity, href:,
  /services/cybersecurity' }, { name: 'Software Development, href:,
  /services/development' }, { name: 'Digital Transformation, href:,
  /services/transformation' }, { name: 'Consulting, href:,
  /services/consulting' } ], solutions: [ { nam,
    e:;
  'Enterprise Solutions, href:,
  /solutions/enterprise' }, { name: 'Startup Solutions, href:,
  /solutions/startup' }, { name: 'Government Solutions, href:,
  /solutions/government' }, { name: 'Healthcare Solutions, href:,
  /solutions/healthcare' }, { name: 'Financial Solutions, href:,
  /solutions/financial' } ], company: [ { nam,
    e:;
  'About Us, href:,
  /about' }, { name: 'Our Team, href:,
  /about#team' }, { name: 'Careers, href:,
  /careers' }, { name: 'Partners, href:,
  /partners' }, { name: 'Press, href:,
  /press' }, { name: 'Case Studies, href:,
<<<<<<< HEAD
  /case-studies' } ], resources: [ { name:
=======
  /case-studies' } ], resources: [ { nam,
    e:;
>>>>>>> main
  'Blog, href:,
  /blog' }, { name: 'Documentation, href:,
  /docs' }, { name: 'API Reference, href:,
  /api' }, { name: 'Developer Portal, href:,
  /developer' }, { name: 'Training, href:,
  /training' }, { name: 'Support, href:,
<<<<<<< HEAD
  /support' } ] } const socialLinks = [ { name: 'Facebook, icon: Facebook, href:,
  https: '''
=======
  /support' } ] } const socialLinks = [
  { name: 'Facebook, icon: Facebook, href:,
  https: ''
>>>>>>> main
