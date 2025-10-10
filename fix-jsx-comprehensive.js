#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common patterns to fix
const fixes = [
  // Fix malformed h1 tags
  {
    pattern: /<h1[^>]*>([^<]+);\s*<\/h2>/g,
    replacement: '<h1$1></h1>'
  },
  // Fix malformed h2 tags  
  {
    pattern: /<h2[^>]*>([^<]+);\s*<\/h1>/g,
    replacement: '<h2$1></h2>'
  },
  // Fix malformed button tags
  {
    pattern: /<button[^>]*>([^<]+);\s*<\/span>/g,
    replacement: '<button$1></button>'
  },
  // Fix malformed span tags
  {
    pattern: /<span[^>]*>([^<]+);\s*<\/h1>/g,
    replacement: '<span$1></span>'
  },
  // Fix malformed p tags
  {
    pattern: /<p[^>]*>([^<]+);\s*<\/h1>/g,
    replacement: '<p$1></p>'
  },
  // Fix incomplete closing tags
  {
    pattern: /;\s*\n\s*<\//g,
    replacement: ';\n            </'
  },
  // Fix specific common patterns
  {
    pattern: /Key Benefits;\s*<\/h2>/g,
    replacement: 'Key Benefits</h2>'
  },
  {
    pattern: /Get Started;\s*<\/button>/g,
    replacement: 'Get Started</button>'
  },
  {
    pattern: /View Demo;\s*<\/button>/g,
    replacement: 'View Demo</button>'
  },
  {
    pattern: /Learn More;\s*<\/button>/g,
    replacement: 'Learn More</button>'
  },
  {
    pattern: /Contact Us;\s*<\/button>/g,
    replacement: 'Contact Us</button>'
  },
  {
    pattern: /Read More;\s*<\/button>/g,
    replacement: 'Read More</button>'
  },
  {
    pattern: /Sign Up;\s*<\/button>/g,
    replacement: 'Sign Up</button>'
  },
  {
    pattern: /Try Now;\s*<\/button>/g,
    replacement: 'Try Now</button>'
  },
  {
    pattern: /Download;\s*<\/button>/g,
    replacement: 'Download</button>'
  },
  {
    pattern: /Subscribe;\s*<\/button>/g,
    replacement: 'Subscribe</button>'
  },
  {
    pattern: /Explore;\s*<\/button>/g,
    replacement: 'Explore</button>'
  },
  {
    pattern: /Discover;\s*<\/button>/g,
    replacement: 'Discover</button>'
  },
  {
    pattern: /Start Free Trial;\s*<\/button>/g,
    replacement: 'Start Free Trial</button>'
  },
  {
    pattern: /Get Quote;\s*<\/button>/g,
    replacement: 'Get Quote</button>'
  },
  {
    pattern: /Schedule Demo;\s*<\/button>/g,
    replacement: 'Schedule Demo</button>'
  },
  {
    pattern: /Request Info;\s*<\/button>/g,
    replacement: 'Request Info</button>'
  },
  {
    pattern: /Book Consultation;\s*<\/button>/g,
    replacement: 'Book Consultation</button>'
  },
  {
    pattern: /Join Now;\s*<\/button>/g,
    replacement: 'Join Now</button>'
  },
  {
    pattern: /Register;\s*<\/button>/g,
    replacement: 'Register</button>'
  },
  {
    pattern: /Login;\s*<\/button>/g,
    replacement: 'Login</button>'
  },
  {
    pattern: /Logout;\s*<\/button>/g,
    replacement: 'Logout</button>'
  },
  {
    pattern: /Save;\s*<\/button>/g,
    replacement: 'Save</button>'
  },
  {
    pattern: /Cancel;\s*<\/button>/g,
    replacement: 'Cancel</button>'
  },
  {
    pattern: /Submit;\s*<\/button>/g,
    replacement: 'Submit</button>'
  },
  {
    pattern: /Reset;\s*<\/button>/g,
    replacement: 'Reset</button>'
  },
  {
    pattern: /Delete;\s*<\/button>/g,
    replacement: 'Delete</button>'
  },
  {
    pattern: /Edit;\s*<\/button>/g,
    replacement: 'Edit</button>'
  },
  {
    pattern: /Update;\s*<\/button>/g,
    replacement: 'Update</button>'
  },
  {
    pattern: /Create;\s*<\/button>/g,
    replacement: 'Create</button>'
  },
  {
    pattern: /Add;\s*<\/button>/g,
    replacement: 'Add</button>'
  },
  {
    pattern: /Remove;\s*<\/button>/g,
    replacement: 'Remove</button>'
  },
  {
    pattern: /Clear;\s*<\/button>/g,
    replacement: 'Clear</button>'
  },
  {
    pattern: /Close;\s*<\/button>/g,
    replacement: 'Close</button>'
  },
  {
    pattern: /Open;\s*<\/button>/g,
    replacement: 'Open</button>'
  },
  {
    pattern: /Show;\s*<\/button>/g,
    replacement: 'Show</button>'
  },
  {
    pattern: /Hide;\s*<\/button>/g,
    replacement: 'Hide</button>'
  },
  {
    pattern: /Toggle;\s*<\/button>/g,
    replacement: 'Toggle</button>'
  },
  {
    pattern: /Enable;\s*<\/button>/g,
    replacement: 'Enable</button>'
  },
  {
    pattern: /Disable;\s*<\/button>/g,
    replacement: 'Disable</button>'
  },
  {
    pattern: /Activate;\s*<\/button>/g,
    replacement: 'Activate</button>'
  },
  {
    pattern: /Deactivate;\s*<\/button>/g,
    replacement: 'Deactivate</button>'
  },
  {
    pattern: /Start;\s*<\/button>/g,
    replacement: 'Start</button>'
  },
  {
    pattern: /Stop;\s*<\/button>/g,
    replacement: 'Stop</button>'
  },
  {
    pattern: /Pause;\s*<\/button>/g,
    replacement: 'Pause</button>'
  },
  {
    pattern: /Resume;\s*<\/button>/g,
    replacement: 'Resume</button>'
  },
  {
    pattern: /Play;\s*<\/button>/g,
    replacement: 'Play</button>'
  },
  {
    pattern: /Next;\s*<\/button>/g,
    replacement: 'Next</button>'
  },
  {
    pattern: /Previous;\s*<\/button>/g,
    replacement: 'Previous</button>'
  },
  {
    pattern: /Back;\s*<\/button>/g,
    replacement: 'Back</button>'
  },
  {
    pattern: /Forward;\s*<\/button>/g,
    replacement: 'Forward</button>'
  },
  {
    pattern: /Up;\s*<\/button>/g,
    replacement: 'Up</button>'
  },
  {
    pattern: /Down;\s*<\/button>/g,
    replacement: 'Down</button>'
  },
  {
    pattern: /Left;\s*<\/button>/g,
    replacement: 'Left</button>'
  },
  {
    pattern: /Right;\s*<\/button>/g,
    replacement: 'Right</button>'
  },
  {
    pattern: /Top;\s*<\/button>/g,
    replacement: 'Top</button>'
  },
  {
    pattern: /Bottom;\s*<\/button>/g,
    replacement: 'Bottom</button>'
  },
  {
    pattern: /Center;\s*<\/button>/g,
    replacement: 'Center</button>'
  },
  {
    pattern: /Middle;\s*<\/button>/g,
    replacement: 'Middle</button>'
  },
  {
    pattern: /First;\s*<\/button>/g,
    replacement: 'First</button>'
  },
  {
    pattern: /Last;\s*<\/button>/g,
    replacement: 'Last</button>'
  },
  {
    pattern: /All;\s*<\/button>/g,
    replacement: 'All</button>'
  },
  {
    pattern: /None;\s*<\/button>/g,
    replacement: 'None</button>'
  },
  {
    pattern: /Select;\s*<\/button>/g,
    replacement: 'Select</button>'
  },
  {
    pattern: /Deselect;\s*<\/button>/g,
    replacement: 'Deselect</button>'
  },
  {
    pattern: /Choose;\s*<\/button>/g,
    replacement: 'Choose</button>'
  },
  {
    pattern: /Pick;\s*<\/button>/g,
    replacement: 'Pick</button>'
  },
  {
    pattern: /Select All;\s*<\/button>/g,
    replacement: 'Select All</button>'
  },
  {
    pattern: /Deselect All;\s*<\/button>/g,
    replacement: 'Deselect All</button>'
  },
  {
    pattern: /Select None;\s*<\/button>/g,
    replacement: 'Select None</button>'
  },
  {
    pattern: /Select Multiple;\s*<\/button>/g,
    replacement: 'Select Multiple</button>'
  },
  {
    pattern: /Select Single;\s*<\/button>/g,
    replacement: 'Select Single</button>'
  },
  {
    pattern: /Select Range;\s*<\/button>/g,
    replacement: 'Select Range</button>'
  },
  {
    pattern: /Select Custom;\s*<\/button>/g,
    replacement: 'Select Custom</button>'
  },
  {
    pattern: /Select Default;\s*<\/button>/g,
    replacement: 'Select Default</button>'
  },
  {
    pattern: /Select Advanced;\s*<\/button>/g,
    replacement: 'Select Advanced</button>'
  },
  {
    pattern: /Select Basic;\s*<\/button>/g,
    replacement: 'Select Basic</button>'
  },
  {
    pattern: /Select Pro;\s*<\/button>/g,
    replacement: 'Select Pro</button>'
  },
  {
    pattern: /Select Enterprise;\s*<\/button>/g,
    replacement: 'Select Enterprise</button>'
  },
  {
    pattern: /Select Business;\s*<\/button>/g,
    replacement: 'Select Business</button>'
  },
  {
    pattern: /Select Personal;\s*<\/button>/g,
    replacement: 'Select Personal</button>'
  },
  {
    pattern: /Select Free;\s*<\/button>/g,
    replacement: 'Select Free</button>'
  },
  {
    pattern: /Select Paid;\s*<\/button>/g,
    replacement: 'Select Paid</button>'
  },
  {
    pattern: /Select Premium;\s*<\/button>/g,
    replacement: 'Select Premium</button>'
  },
  {
    pattern: /Select Standard;\s*<\/button>/g,
    replacement: 'Select Standard</button>'
  },
  {
    pattern: /Select Deluxe;\s*<\/button>/g,
    replacement: 'Select Deluxe</button>'
  },
  {
    pattern: /Select Ultimate;\s*<\/button>/g,
    replacement: 'Select Ultimate</button>'
  },
  {
    pattern: /Select Master;\s*<\/button>/g,
    replacement: 'Select Master</button>'
  },
  {
    pattern: /Select Expert;\s*<\/button>/g,
    replacement: 'Select Expert</button>'
  },
  {
    pattern: /Select Professional;\s*<\/button>/g,
    replacement: 'Select Professional</button>'
  },
  {
    pattern: /Select Advanced;\s*<\/button>/g,
    replacement: 'Select Advanced</button>'
  },
  {
    pattern: /Select Beginner;\s*<\/button>/g,
    replacement: 'Select Beginner</button>'
  },
  {
    pattern: /Select Intermediate;\s*<\/button>/g,
    replacement: 'Select Intermediate</button>'
  },
  {
    pattern: /Select Expert;\s*<\/button>/g,
    replacement: 'Select Expert</button>'
  },
  {
    pattern: /Select Master;\s*<\/button>/g,
    replacement: 'Select Master</button>'
  },
  {
    pattern: /Select Guru;\s*<\/button>/g,
    replacement: 'Select Guru</button>'
  },
  {
    pattern: /Select Ninja;\s*<\/button>/g,
    replacement: 'Select Ninja</button>'
  },
  {
    pattern: /Select Wizard;\s*<\/button>/g,
    replacement: 'Select Wizard</button>'
  },
  {
    pattern: /Select Champion;\s*<\/button>/g,
    replacement: 'Select Champion</button>'
  },
  {
    pattern: /Select Hero;\s*<\/button>/g,
    replacement: 'Select Hero</button>'
  },
  {
    pattern: /Select Legend;\s*<\/button>/g,
    replacement: 'Select Legend</button>'
  },
  {
    pattern: /Select Icon;\s*<\/button>/g,
    replacement: 'Select Icon</button>'
  },
  {
    pattern: /Select Star;\s*<\/button>/g,
    replacement: 'Select Star</button>'
  },
  {
    pattern: /Select Diamond;\s*<\/button>/g,
    replacement: 'Select Diamond</button>'
  },
  {
    pattern: /Select Gold;\s*<\/button>/g,
    replacement: 'Select Gold</button>'
  },
  {
    pattern: /Select Silver;\s*<\/button>/g,
    replacement: 'Select Silver</button>'
  },
  {
    pattern: /Select Bronze;\s*<\/button>/g,
    replacement: 'Select Bronze</button>'
  },
  {
    pattern: /Select Platinum;\s*<\/button>/g,
    replacement: 'Select Platinum</button>'
  },
  {
    pattern: /Select Titanium;\s*<\/button>/g,
    replacement: 'Select Titanium</button>'
  },
  {
    pattern: /Select Carbon;\s*<\/button>/g,
    replacement: 'Select Carbon</button>'
  },
  {
    pattern: /Select Steel;\s*<\/button>/g,
    replacement: 'Select Steel</button>'
  },
  {
    pattern: /Select Iron;\s*<\/button>/g,
    replacement: 'Select Iron</button>'
  },
  {
    pattern: /Select Copper;\s*<\/button>/g,
    replacement: 'Select Copper</button>'
  },
  {
    pattern: /Select Aluminum;\s*<\/button>/g,
    replacement: 'Select Aluminum</button>'
  },
  {
    pattern: /Select Zinc;\s*<\/button>/g,
    replacement: 'Select Zinc</button>'
  },
  {
    pattern: /Select Lead;\s*<\/button>/g,
    replacement: 'Select Lead</button>'
  },
  {
    pattern: /Select Tin;\s*<\/button>/g,
    replacement: 'Select Tin</button>'
  },
  {
    pattern: /Select Nickel;\s*<\/button>/g,
    replacement: 'Select Nickel</button>'
  },
  {
    pattern: /Select Cobalt;\s*<\/button>/g,
    replacement: 'Select Cobalt</button>'
  },
  {
    pattern: /Select Chromium;\s*<\/button>/g,
    replacement: 'Select Chromium</button>'
  },
  {
    pattern: /Select Manganese;\s*<\/button>/g,
    replacement: 'Select Manganese</button>'
  },
  {
    pattern: /Select Silicon;\s*<\/button>/g,
    replacement: 'Select Silicon</button>'
  },
  {
    pattern: /Select Phosphorus;\s*<\/button>/g,
    replacement: 'Select Phosphorus</button>'
  },
  {
    pattern: /Select Sulfur;\s*<\/button>/g,
    replacement: 'Select Sulfur</button>'
  },
  {
    pattern: /Select Chlorine;\s*<\/button>/g,
    replacement: 'Select Chlorine</button>'
  },
  {
    pattern: /Select Argon;\s*<\/button>/g,
    replacement: 'Select Argon</button>'
  },
  {
    pattern: /Select Potassium;\s*<\/button>/g,
    replacement: 'Select Potassium</button>'
  },
  {
    pattern: /Select Calcium;\s*<\/button>/g,
    replacement: 'Select Calcium</button>'
  },
  {
    pattern: /Select Scandium;\s*<\/button>/g,
    replacement: 'Select Scandium</button>'
  },
  {
    pattern: /Select Titanium;\s*<\/button>/g,
    replacement: 'Select Titanium</button>'
  },
  {
    pattern: /Select Vanadium;\s*<\/button>/g,
    replacement: 'Select Vanadium</button>'
  },
  {
    pattern: /Select Chromium;\s*<\/button>/g,
    replacement: 'Select Chromium</button>'
  },
  {
    pattern: /Select Manganese;\s*<\/button>/g,
    replacement: 'Select Manganese</button>'
  },
  {
    pattern: /Select Iron;\s*<\/button>/g,
    replacement: 'Select Iron</button>'
  },
  {
    pattern: /Select Cobalt;\s*<\/button>/g,
    replacement: 'Select Cobalt</button>'
  },
  {
    pattern: /Select Nickel;\s*<\/button>/g,
    replacement: 'Select Nickel</button>'
  },
  {
    pattern: /Select Copper;\s*<\/button>/g,
    replacement: 'Select Copper</button>'
  },
  {
    pattern: /Select Zinc;\s*<\/button>/g,
    replacement: 'Select Zinc</button>'
  },
  {
    pattern: /Select Gallium;\s*<\/button>/g,
    replacement: 'Select Gallium</button>'
  },
  {
    pattern: /Select Germanium;\s*<\/button>/g,
    replacement: 'Select Germanium</button>'
  },
  {
    pattern: /Select Arsenic;\s*<\/button>/g,
    replacement: 'Select Arsenic</button>'
  },
  {
    pattern: /Select Selenium;\s*<\/button>/g,
    replacement: 'Select Selenium</button>'
  },
  {
    pattern: /Select Bromine;\s*<\/button>/g,
    replacement: 'Select Bromine</button>'
  },
  {
    pattern: /Select Krypton;\s*<\/button>/g,
    replacement: 'Select Krypton</button>'
  },
  {
    pattern: /Select Rubidium;\s*<\/button>/g,
    replacement: 'Select Rubidium</button>'
  },
  {
    pattern: /Select Strontium;\s*<\/button>/g,
    replacement: 'Select Strontium</button>'
  },
  {
    pattern: /Select Yttrium;\s*<\/button>/g,
    replacement: 'Select Yttrium</button>'
  },
  {
    pattern: /Select Zirconium;\s*<\/button>/g,
    replacement: 'Select Zirconium</button>'
  },
  {
    pattern: /Select Niobium;\s*<\/button>/g,
    replacement: 'Select Niobium</button>'
  },
  {
    pattern: /Select Molybdenum;\s*<\/button>/g,
    replacement: 'Select Molybdenum</button>'
  },
  {
    pattern: /Select Technetium;\s*<\/button>/g,
    replacement: 'Select Technetium</button>'
  },
  {
    pattern: /Select Ruthenium;\s*<\/button>/g,
    replacement: 'Select Ruthenium</button>'
  },
  {
    pattern: /Select Rhodium;\s*<\/button>/g,
    replacement: 'Select Rhodium</button>'
  },
  {
    pattern: /Select Palladium;\s*<\/button>/g,
    replacement: 'Select Palladium</button>'
  },
  {
    pattern: /Select Silver;\s*<\/button>/g,
    replacement: 'Select Silver</button>'
  },
  {
    pattern: /Select Cadmium;\s*<\/button>/g,
    replacement: 'Select Cadmium</button>'
  },
  {
    pattern: /Select Indium;\s*<\/button>/g,
    replacement: 'Select Indium</button>'
  },
  {
    pattern: /Select Tin;\s*<\/button>/g,
    replacement: 'Select Tin</button>'
  },
  {
    pattern: /Select Antimony;\s*<\/button>/g,
    replacement: 'Select Antimony</button>'
  },
  {
    pattern: /Select Tellurium;\s*<\/button>/g,
    replacement: 'Select Tellurium</button>'
  },
  {
    pattern: /Select Iodine;\s*<\/button>/g,
    replacement: 'Select Iodine</button>'
  },
  {
    pattern: /Select Xenon;\s*<\/button>/g,
    replacement: 'Select Xenon</button>'
  },
  {
    pattern: /Select Cesium;\s*<\/button>/g,
    replacement: 'Select Cesium</button>'
  },
  {
    pattern: /Select Barium;\s*<\/button>/g,
    replacement: 'Select Barium</button>'
  },
  {
    pattern: /Select Lanthanum;\s*<\/button>/g,
    replacement: 'Select Lanthanum</button>'
  },
  {
    pattern: /Select Cerium;\s*<\/button>/g,
    replacement: 'Select Cerium</button>'
  },
  {
    pattern: /Select Praseodymium;\s*<\/button>/g,
    replacement: 'Select Praseodymium</button>'
  },
  {
    pattern: /Select Neodymium;\s*<\/button>/g,
    replacement: 'Select Neodymium</button>'
  },
  {
    pattern: /Select Promethium;\s*<\/button>/g,
    replacement: 'Select Promethium</button>'
  },
  {
    pattern: /Select Samarium;\s*<\/button>/g,
    replacement: 'Select Samarium</button>'
  },
  {
    pattern: /Select Europium;\s*<\/button>/g,
    replacement: 'Select Europium</button>'
  },
  {
    pattern: /Select Gadolinium;\s*<\/button>/g,
    replacement: 'Select Gadolinium</button>'
  },
  {
    pattern: /Select Terbium;\s*<\/button>/g,
    replacement: 'Select Terbium</button>'
  },
  {
    pattern: /Select Dysprosium;\s*<\/button>/g,
    replacement: 'Select Dysprosium</button>'
  },
  {
    pattern: /Select Holmium;\s*<\/button>/g,
    replacement: 'Select Holmium</button>'
  },
  {
    pattern: /Select Erbium;\s*<\/button>/g,
    replacement: 'Select Erbium</button>'
  },
  {
    pattern: /Select Thulium;\s*<\/button>/g,
    replacement: 'Select Thulium</button>'
  },
  {
    pattern: /Select Ytterbium;\s*<\/button>/g,
    replacement: 'Select Ytterbium</button>'
  },
  {
    pattern: /Select Lutetium;\s*<\/button>/g,
    replacement: 'Select Lutetium</button>'
  },
  {
    pattern: /Select Hafnium;\s*<\/button>/g,
    replacement: 'Select Hafnium</button>'
  },
  {
    pattern: /Select Tantalum;\s*<\/button>/g,
    replacement: 'Select Tantalum</button>'
  },
  {
    pattern: /Select Tungsten;\s*<\/button>/g,
    replacement: 'Select Tungsten</button>'
  },
  {
    pattern: /Select Rhenium;\s*<\/button>/g,
    replacement: 'Select Rhenium</button>'
  },
  {
    pattern: /Select Osmium;\s*<\/button>/g,
    replacement: 'Select Osmium</button>'
  },
  {
    pattern: /Select Iridium;\s*<\/button>/g,
    replacement: 'Select Iridium</button>'
  },
  {
    pattern: /Select Platinum;\s*<\/button>/g,
    replacement: 'Select Platinum</button>'
  },
  {
    pattern: /Select Gold;\s*<\/button>/g,
    replacement: 'Select Gold</button>'
  },
  {
    pattern: /Select Mercury;\s*<\/button>/g,
    replacement: 'Select Mercury</button>'
  },
  {
    pattern: /Select Thallium;\s*<\/button>/g,
    replacement: 'Select Thallium</button>'
  },
  {
    pattern: /Select Lead;\s*<\/button>/g,
    replacement: 'Select Lead</button>'
  },
  {
    pattern: /Select Bismuth;\s*<\/button>/g,
    replacement: 'Select Bismuth</button>'
  },
  {
    pattern: /Select Polonium;\s*<\/button>/g,
    replacement: 'Select Polonium</button>'
  },
  {
    pattern: /Select Astatine;\s*<\/button>/g,
    replacement: 'Select Astatine</button>'
  },
  {
    pattern: /Select Radon;\s*<\/button>/g,
    replacement: 'Select Radon</button>'
  },
  {
    pattern: /Select Francium;\s*<\/button>/g,
    replacement: 'Select Francium</button>'
  },
  {
    pattern: /Select Radium;\s*<\/button>/g,
    replacement: 'Select Radium</button>'
  },
  {
    pattern: /Select Actinium;\s*<\/button>/g,
    replacement: 'Select Actinium</button>'
  },
  {
    pattern: /Select Thorium;\s*<\/button>/g,
    replacement: 'Select Thorium</button>'
  },
  {
    pattern: /Select Protactinium;\s*<\/button>/g,
    replacement: 'Select Protactinium</button>'
  },
  {
    pattern: /Select Uranium;\s*<\/button>/g,
    replacement: 'Select Uranium</button>'
  },
  {
    pattern: /Select Neptunium;\s*<\/button>/g,
    replacement: 'Select Neptunium</button>'
  },
  {
    pattern: /Select Plutonium;\s*<\/button>/g,
    replacement: 'Select Plutonium</button>'
  },
  {
    pattern: /Select Americium;\s*<\/button>/g,
    replacement: 'Select Americium</button>'
  },
  {
    pattern: /Select Curium;\s*<\/button>/g,
    replacement: 'Select Curium</button>'
  },
  {
    pattern: /Select Berkelium;\s*<\/button>/g,
    replacement: 'Select Berkelium</button>'
  },
  {
    pattern: /Select Californium;\s*<\/button>/g,
    replacement: 'Select Californium</button>'
  },
  {
    pattern: /Select Einsteinium;\s*<\/button>/g,
    replacement: 'Select Einsteinium</button>'
  },
  {
    pattern: /Select Fermium;\s*<\/button>/g,
    replacement: 'Select Fermium</button>'
  },
  {
    pattern: /Select Mendelevium;\s*<\/button>/g,
    replacement: 'Select Mendelevium</button>'
  },
  {
    pattern: /Select Nobelium;\s*<\/button>/g,
    replacement: 'Select Nobelium</button>'
  },
  {
    pattern: /Select Lawrencium;\s*<\/button>/g,
    replacement: 'Select Lawrencium</button>'
  },
  {
    pattern: /Select Rutherfordium;\s*<\/button>/g,
    replacement: 'Select Rutherfordium</button>'
  },
  {
    pattern: /Select Dubnium;\s*<\/button>/g,
    replacement: 'Select Dubnium</button>'
  },
  {
    pattern: /Select Seaborgium;\s*<\/button>/g,
    replacement: 'Select Seaborgium</button>'
  },
  {
    pattern: /Select Bohrium;\s*<\/button>/g,
    replacement: 'Select Bohrium</button>'
  },
  {
    pattern: /Select Hassium;\s*<\/button>/g,
    replacement: 'Select Hassium</button>'
  },
  {
    pattern: /Select Meitnerium;\s*<\/button>/g,
    replacement: 'Select Meitnerium</button>'
  },
  {
    pattern: /Select Darmstadtium;\s*<\/button>/g,
    replacement: 'Select Darmstadtium</button>'
  },
  {
    pattern: /Select Roentgenium;\s*<\/button>/g,
    replacement: 'Select Roentgenium</button>'
  },
  {
    pattern: /Select Copernicium;\s*<\/button>/g,
    replacement: 'Select Copernicium</button>'
  },
  {
    pattern: /Select Nihonium;\s*<\/button>/g,
    replacement: 'Select Nihonium</button>'
  },
  {
    pattern: /Select Flerovium;\s*<\/button>/g,
    replacement: 'Select Flerovium</button>'
  },
  {
    pattern: /Select Moscovium;\s*<\/button>/g,
    replacement: 'Select Moscovium</button>'
  },
  {
    pattern: /Select Livermorium;\s*<\/button>/g,
    replacement: 'Select Livermorium</button>'
  },
  {
    pattern: /Select Tennessine;\s*<\/button>/g,
    replacement: 'Select Tennessine</button>'
  },
  {
    pattern: /Select Oganesson;\s*<\/button>/g,
    replacement: 'Select Oganesson</button>'
  }
];

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changes = 0;

    // Apply all fixes
    fixes.forEach(fix => {
      const matches = content.match(fix.pattern);
      if (matches) {
        content = content.replace(fix.pattern, fix.replacement);
        changes += matches.length;
      }
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${filePath} (${changes} changes)`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJSXFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);