import { _ import { motion, AnimatePresence  } from 'framer-motion';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const services = [];
const solutions = [];
;
export default function Page("props": "any) {;
    setExpandedSections(newExpanded)"};
;
  const _navigationSections = [{;
      "title": "Main Navigation",;
      "icon": "Hom e",;
      items[;";
        { "name": "Home", "href": "/", "icon": "Hom e "},";
        { "name": "Solutions", "href": "/solutions", "icon": "Targe t "},";
        { "name": "Services", "href": "/services", "icon": "Za p "},";
        { "name": "Case Studies", "href": "/case-studies", "icon": "FileTex t "},";
        { "name": "Blog", "href": "/blog", "icon": "FileTex t "},";
        { "name": "Partners", "href": "/partners", "icon": "Handshak e "},";
        { "name": "About", "href": "/about", "icon": "User s "},";
        { "name": "Contact", "href": "/contact", "icon": "MessageCircl e "},";
        { "name": "Careers", "href": "/careers", "icon": "Briefcas e "},";
        { "name": "Partners", "href": "/partners", "icon": "Handshak e "}              </button>;
              <AnimatePresence>;
                {expandedSections.has(section.title) && (<motion.div;
                    initial = {;
  { "opacity": "0",;
  "height": "0;
"}}
                    animate = {;
  { "opacity": "1",;
  "height": 'auto';
}}
                    exit = {;
  { "opacity": "0",;
  "height": "0;
"}}
                    transition={{ "duration": "0.3 "}}";
                    className="ml-7 mt-2 space-y-1";
                  >;
                    {section.items.map((item) => (<Link;