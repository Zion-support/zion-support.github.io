import React, { useState } from 'react';
import Link from 'next/link';

import { Menu, X, ChevronDown  } from 'lucide-react';
const mainNavLinks = [;
  { href: '/';,}
  label: 'Home' ;},{ href: '/services';,}
  label: 'Services' ;},{ href: '/products';,}
  label: 'Products' ;},{ href: '/blog';,}
  label: 'Blog' ;},{ href: '/about';,}
  label: 'About' ;},{ href: '/contact';,}
  label: 'Contact' ;}
import { Menu, X, ChevronDown } from 'lucide-react';



const mainNavLinks = [
pr-12325
  { href: '/';, label: 'Home' ;},
  { href: '/services';, label: 'Services' ;},
  { href: '/products';, label: 'Products' ;},
  { href: '/blog';, label: 'Blog' ;},
  { href: '/about';, label: 'About' ;},
  { href: '/contact';, label: 'Contact' ;},

];
const EnhancedNavigation: React.FC = () => {
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
const mainNavLinks = [{ "href": '/', "label": 'Home' },
  { "href": '/services', "label": 'Services' },
  { "href": '/products', "label": 'Products' },
  { "href": '/blog', "label": 'Blog' },
  { "href": '/about', "label": 'About' },
  { "href": '/contact', "label": 'Contact' },
  { href: '/';,}
  label: 'Home' ;},
  { href: '/services';,}
  label: 'Services' ;},
  { href: '/products';,}
  label: 'Products' ;},
  { href: '/blog';,}
  label: 'Blog' ;},
  { href: '/about';,}
  label: 'About' ;},
  { href: '/contact';,}
  label: 'Contact' ;}
];
const EnhancedNavigation: React.FC = () => {;}
  { href: '/contact';,}
  label: 'Contact' ;}
];
const EnhancedNavigation: React.FC = () => {{ href: '/contact';,}
  label: 'Contact' ;}
];
const EnhancedNavigation: React.FC = () => {const mainNavLinks = [{ \"href\": '/';, \"label\": 'Home' },{ \"href\": '/services', \"label\": 'Services' },{ \"href\": '/products', \"label\": 'Products' },{ \"href\": '/blog', \"label\": 'Blog' },{ \"href\": '/about', \"label\": 'About' },{ \"href\": '/contact', \"label\": 'Contact' }
  { \"href\": '/contact', \"label\": 'Contact' }
  { \"href\": '/contact', \"label\": 'Contact' }
];
const \"EnhancedNavigation\": React.FC = () => {const [isOpen, setIsOpen] = useState(false)const [servicesOpen, setServicesOpen] = useState(false)const [solutionsOpen, setSolutionsOpen] = useState(false)return (<nav className=\"bg-white shadow-lg sticky top-0 z-50\" />;}
      {' '}
      <div className=\"container mx-auto px-4\" />;
        {' '}
        <div className=\"flex justify-between items-center py-4\" />;
          {' '}
          {}{' '}
          <Link href=\"/\" className=\"flex items-center space-x-2\" />;
            {' '}
            <div className=\"flex items-center space-x-2\" />;
              {' '}
              <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" />;
                {' '}
                <span className=\"text-white font-bold text-xl\" />Z</span>{' '}
              </div>{' '}
              <div className=\"text-xl font-bold text-gray-800\" />;
                Zion Tech Group;
              </div>{' '}
            </div>{' '}
          </Link>{' '}

          {}{' '}<div className=\"hidden lg:flex items-center space-x-8\" />;
          {}{' '}
          <div className="hidden lg:flex items-center space-x-8">
            {' '}
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
          <div className="hidden "lg": flex items-center space-x-8">
          <div className=\"hidden lg:flex items-center space-x-8\" />
            {' '}

            <Link;
              href=\"/\";
              className=\"text-gray-600 hover:text-blue-600 transition-colors\";
;
          <div className=\"hidden \"lg\": flex items-center space-x-8\" />;
            {' '}
            <Link;
              href=\"/\";
              className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\";
             />;
              Home;
            </Link>{' '}
            {}{' '}
            <div className=\"relative group\" />;
              {' '}
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
              <button;
;
                className=\"flex items-center text-gray-600 \"hover\": text-blue-600 transition-colors\";
                onMouseEnter={() = /> setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >;

              <button;
className=\"flex items-center text-gray-600 \"hover\": text-blue-600 transition-colors\"
                onMouseEnter={() = /> setServicesOpen(true)}

                onMouseLeave={() => setServicesOpen(false)}
              >
                {' '}
                Services <ChevronDown className=\"ml-1 w-4 h-4\" />{' '}
              </button>{' '}
              <div;
className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() = /> setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {' '}
                <Link
                  href="/services/ai-development"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  AI Development
                </Link>{' '}
                <Link
                  href="/services/cloud-services"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Cloud Services
                </Link>{' '}
                <Link
                  href="/services/web-development"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Web Development
                </Link>{' '}
                <Link
                  href="/services/mobile-development"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Mobile Development
                </Link>{' '}
                <Link
                  href="/services/blockchain-solutions"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Blockchain Solutions
                </Link>{' '}
                <Link
                  href="/services/iot-platforms"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  IoT Platforms
                </Link>{' '}
                <Link
                  href="/services/cybersecurity"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Cybersecurity
                <Link;
href=\"/services/ai-development\"
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\"
                 />
                  AI Development;
                </Link>{' '}
                <Link;
href=\"/services/cloud-services\"
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\"
                 />
                  Cloud Services;
                </Link>{' '}
                <Link;
href=\"/services/web-development\"
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\"
                 />
                  Web Development;
                </Link>{' '}
                <Link;
href=\"/services/mobile-development\"
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\"
                 />
                  Mobile Development;
                </Link>{' '}
                <Link;
href=\"/services/blockchain-solutions\"
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\"
                 />
                  Blockchain Solutions;
                </Link>{' '}
                <Link;
href=\"/services/iot-platforms\"
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\"
                 />
                  IoT Platforms;
                </Link>{' '}
                <Link;
href=\"/services/cybersecurity\"
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\"
                 />
                  Cybersecurity;

                </Link>{' '}
              </div>{' '}
            </div>{' '}
            {}{' '}

            <div className=\"relative group\" />
              {' '}
              <button
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors"
>>>>>>> origin/resolved-merge-conflicts
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >;
                {' '}'
                Solutions <ChevronDown className="ml-1 w-4 h-4" />{' '}'
              </button>{' '}'
              <div;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}`                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
<<<<<<< HEAD
              >
                {' '}
                <Link
                  href="/solutions/enterprise"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Enterprise Solutions
                </Link>{' '}
                <Link
                  href="/solutions/small-business"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Small Business
                </Link>{' '}
                <Link
                  href="/solutions/startups"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Startups
                </Link>{' '}
                <Link
                  href="/solutions/healthcare"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Healthcare
                </Link>{' '}
                <Link
                  href="/solutions/finance"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600"
                >
                  Finance
                </Link>{' '}
              </div>{' '}
            </div>{' '}
            <Link
              href="/products"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              className="text-gray-600 "hover": text-blue-600 transition-colors"
            >
              Products
            </Link>{' '}
            <Link
              href="/solutions"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              className="text-gray-600 "hover": text-blue-600 transition-colors"
            >
              Solutions
            </Link>{' '}
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              className="text-gray-600 "hover": text-blue-600 transition-colors"
            >
              About
            </Link>{' '}
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              className="text-gray-600 "hover": text-blue-600 transition-colors"
            >
              Blog
            </Link>{' '}
            <Link
              href="/careers"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              className="text-gray-600 "hover": text-blue-600 transition-colors"
            >
              Careers
            </Link>{' '}
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              className="text-gray-600 "hover": text-blue-600 transition-colors"
            >
              Contact
            </Link>{' '}
          </div>{' '}
          {}{' '}
          <div className="hidden lg:block">
            {' '}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block"
          <div className="hidden "lg": block">
=======
              >;
                {' '}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Link;
                  href="/solutions/enterprise";"
ursor/automate-test-improve-and-merge-code-646c;
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 "hover":text-blue-600";"
                >;
                  Enterprise Solutions;
                </Link>{' '}'
                <Link;
                  href="/solutions/small-business";"
ursor/automate-test-improve-and-merge-code-646c;
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 "hover":text-blue-600";"
                >;
                  Small Business;
                </Link>{' '}'
                <Link;
                  href="/solutions/startups";"
ursor/automate-test-improve-and-merge-code-646c;
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 "hover":text-blue-600";"
                >;
                  Startups;
                </Link>{' '}'
                <Link;
                  href="/solutions/healthcare";"
ursor/automate-test-improve-and-merge-code-646c;
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 "hover":text-blue-600";"
                >;
                  Healthcare;
                </Link>{' '}'
                <Link;
                  href="/solutions/finance";"
ursor/automate-test-improve-and-merge-code-646c;
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 "hover":text-blue-600";"
                >;
                  Finance;
<<<<<<< HEAD
                </Link>{' '}'
              </div>{' '}'
            </div>{' '}'
=======
                </Link>{' '}
              </div>{' '}
            </div>{' '}
>>>>>>> origin/resolved-merge-conflicts
            <Link;
              href="/products";"
ursor/automate-test-improve-and-merge-code-646c;
              className="text-gray-600 "hover": text-blue-600 transition-colors";"
            >;
              Products;
            </Link>{' '}'
            <Link;
              href="/solutions";"
ursor/automate-test-improve-and-merge-code-646c;
              className="text-gray-600 "hover": text-blue-600 transition-colors";"
            >;
              Solutions;
            </Link>{' '}'
            <Link;
              href="/about";"
ursor/automate-test-improve-and-merge-code-646c;
              className="text-gray-600 "hover": text-blue-600 transition-colors";"
            >;
              About;
            </Link>{' '}'
            <Link;
              href="/blog";"
ursor/automate-test-improve-and-merge-code-646c;
              className="text-gray-600 "hover": text-blue-600 transition-colors";"
            >;
              Blog;
            </Link>{' '}'
            <Link;
              href="/careers";"
ursor/automate-test-improve-and-merge-code-646c;
              className="text-gray-600 "hover": text-blue-600 transition-colors";"
            >;
              Careers;
            </Link>{' '}'
            <Link;
              href="/contact";"
ursor/automate-test-improve-and-merge-code-646c;
              className="text-gray-600 "hover": text-blue-600 transition-colors";"
            >;
              Contact;
            </Link>{' '}'
          </div>{' '}'
          {}{' '}<div className="hidden "lg":block">;"
            {' '}'
            <Link;
              href="/contact";"
              className="bg-blue-600 "hover":bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block";"
ursor/automate-test-improve-and-merge-code-646c;
          <div className="hidden "lg": block">;"
            {' '}'
            <Link;
              href="/contact";"
              className="bg-blue-600 "hover": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block";"
            >;
              Get Started;
<<<<<<< HEAD

            </Link>{' '}
          </div>{' '}
          {}{' '}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            className=""lg": hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {' '}
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}{' '}
          </button>{' '}
        </div>{' '}
        {}{' '}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
          <div className=""lg": hidden border-t border-gray-200 py-4">
            {' '}
            <div className="space-y-2">
              {' '}
              <Link
                href="/"
                className="block py-2 text-gray-600 hover:text-blue-600"
                className="block py-2 text-gray-600 "hover": text-blue-600"
              >
                Home
              </Link>{' '}
              <div className="py-2">
                {' '}
                <div className="text-gray-600 font-semibold mb-2">
                  Services
                </div>{' '}
                <div className=\"pl-4 space-y-2\" />
                  {' '}
                  <Link
                    href="/services/ai-development"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    AI Development
                  </Link>{' '}
                  <Link
                    href="/services/cloud-services"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Cloud Services
                  </Link>{' '}
                  <Link
                    href="/services/web-development"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Web Development
                  </Link>{' '}
                  <Link
                    href="/services/mobile-development"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Mobile Development
                  </Link>{' '}
                  <Link
                    href="/services/blockchain-solutions"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Blockchain Solutions
                  </Link>{' '}
                  <Link
                    href="/services/iot-platforms"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    IoT Platforms
                  </Link>{' '}
                  <Link
                    href="/services/cybersecurity"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Cybersecurity
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
              <div className="py-2">
                {' '}
                <div className="text-gray-600 font-semibold mb-2">
                  Solutions
                </div>{' '}
                <div className="pl-4 space-y-2">
                  {' '}
                  <Link
                    href="/solutions/enterprise"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Enterprise Solutions
                  </Link>{' '}
                  <Link
                    href="/solutions/small-business"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Small Business
                  </Link>{' '}
                  <Link
                    href="/solutions/startups"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
                  >
                    Startups
                  </Link>{' '}
                  <Link
                    href="/solutions/healthcare"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
>>>>>>> origin/resolved-merge-conflicts
                  >
                    Healthcare
<<<<<<< HEAD
                  </Link>{' '}
                  <Link
                    href="/solutions/finance"
                    className="block py-1 text-gray-500 hover:text-blue-600"
                    className="block py-1 text-gray-500 "hover": text-blue-600"
=======
                  </Link>{' '}'
                  <Link,
href="/solutions/finance""
                    className="block py-1 text-gray-500 "hover": text-blue-600""
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  >
                    Finance
<<<<<<< HEAD
                  </Link>{' '}'
                </div>{' '}'
              </div>{' '}'
              <Link,
href="/products""
                className="block py-2 text-gray-600 "hover": text-blue-600""
              >
                Products
              </Link>{' '}'
              <Link,
href="/about""
                className="block py-2 text-gray-600 "hover": text-blue-600""
              >
                About
              </Link>{' '}'
              <Link,
href="/blog""
                className="block py-2 text-gray-600 "hover": text-blue-600""
              >
                Blog
              </Link>{' '}'
              <Link,
href="/careers""
                className="block py-2 text-gray-600 "hover": text-blue-600""
              >
                Careers
              </Link>{' '}'
              <Link,
href="/contact""
                className="block py-2 text-gray-600 "hover": text-blue-600""
=======
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
              <Link
                href="/products"
                className="block py-2 text-gray-600 hover:text-blue-600"
                className="block py-2 text-gray-600 "hover": text-blue-600"
              >
                Products
              </Link>{' '}
              <Link
                href="/about"
                className="block py-2 text-gray-600 hover:text-blue-600"
                className="block py-2 text-gray-600 "hover": text-blue-600"
              >
                About
              </Link>{' '}
              <Link
                href="/blog"
                className="block py-2 text-gray-600 hover:text-blue-600"
                className="block py-2 text-gray-600 "hover": text-blue-600"
              >
                Blog
              </Link>{' '}
              <Link
                href="/careers"
                className="block py-2 text-gray-600 hover:text-blue-600"
                className="block py-2 text-gray-600 "hover": text-blue-600"
              >
                Careers
              </Link>{' '}
              <Link
                href="/contact"
                className="block py-2 text-gray-600 hover:text-blue-600"
                className="block py-2 text-gray-600 "hover": text-blue-600"
>>>>>>> origin/resolved-merge-conflicts
              >
                Contact
<<<<<<< HEAD
              </Link>{' '}
              <div className="pt-4">
                {' '}
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center"
                  className="bg-blue-600 "hover": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center"
=======
              </Link>{' '}'
              <div className="pt-4">"
                {' '}'
                <Link,
href="/contact""
                  className="bg-blue-600 "hover": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center""
>>>>>>> origin/cursor/delete-old-data-records-6bba
                >
                  Get Started
<<<<<<< HEAD
                </Link>{' '}'
              </div>{' '}'
            </div>{' '}'
=======
                  <Link;
href=\"/services/ai-development\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    AI Development;
                  </Link>{' '}
                  <Link;
href=\"/services/cloud-services\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Cloud Services;
                  </Link>{' '}
                  <Link;
href=\"/services/web-development\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Web Development;
                  </Link>{' '}
                  <Link;
href=\"/services/mobile-development\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Mobile Development;
                  </Link>{' '}
                  <Link;
href=\"/services/blockchain-solutions\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Blockchain Solutions;
                  </Link>{' '}
                  <Link;
href=\"/services/iot-platforms\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    IoT Platforms;
                  </Link>{' '}
                  <Link;
href=\"/services/cybersecurity\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Cybersecurity;
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
              <div className=\"py-2\" />
                {' '}
                <Link
                  href="/contact"
import React,{ useState } from 'react'; import Link from 'next/link'; import { Menu,X,ChevronDown } from 'lucide-react'; const mainNavLinks = [ { href: '/';,label: 'Home' ;},{ href: '/services';,label: 'Services' ;},{ href: '/products';,label: 'Products' ;},{ href: '/blog';,label: 'Blog' ;},{ href: '/about';,label: 'About' ;},{ href: '/contact';,label: 'Contact' ;},]; const EnhancedNavigation: React.FC = () => { const [isOpen;,setIsOpen] = useState(false); const [servicesOpen,setServicesOpen] = useState(false); const [solutionsOpen,setSolutionsOpen] = useState(false); return ( <nav className="bg-white shadow-lg sticky top-0 z-50"> {' '} <div className="container mx-auto px-4"> {' '} <div className="flex justify-between items-center py-4"> {' '} {}{' '} <Link href="/" className="flex items-center space-x-2"> {' '} <div className="flex items-center space-x-2"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-xl">Z</span>{' '} </div>{' '} <div className="text-xl font-bold text-gray-800"> {' '} Zion Tech Group{' '} </div>{' '} </div>{' '} </Link>{' '} {}{' '} <div className="hidden lg: flex items-center space-x-8"> {' ';} <Link href="/" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Home{' '} </Link>{' '} {}{' '} <div className="relative group"> {' '} <button className="flex items-center text-gray-600 hover: text-blue-600 transition-colors" onMouseEnter={() => setServicesOpen(true);} onMouseLeave={() => setServicesOpen(false)} > {' '} Services <ChevronDown className="ml-1 w-4 h-4" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {' '} <Link href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} AI Development{' '} </Link>{' '} <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Cloud Services{' '} </Link>{' '} <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Web Development{' '} </Link>{' '} <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Mobile Development{' '} </Link>{' '} <Link href="/services/blockchain-solutions" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Blockchain Solutions{' '} </Link>{' '} <Link href="/services/iot-platforms" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} IoT Platforms{' '} </Link>{' '} <Link href="/services/cybersecurity" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Cybersecurity{' '} </Link>{' '} </div>{' '} </div>{' '} {}{' '} <div className="relative group"> {' '} <button className="flex items-center text-gray-600 hover: text-blue-600 transition-colors" onMouseEnter={() => setSolutionsOpen(true);} onMouseLeave={() => setSolutionsOpen(false)} > {' '} Solutions <ChevronDown className="ml-1 w-4 h-4" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)} > {' '} <Link href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Enterprise Solutions{' '} </Link>{' '} <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Small Business{' '} </Link>{' '} <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Startups{' '} </Link>{' '} <Link href="/solutions/healthcare" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Healthcare{' '} </Link>{' '} <Link href="/solutions/finance" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Finance{' '} </Link>{' '} </div>{' '} </div>{' '} <Link href="/products" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Products{' '} </Link>{' '} <Link href="/solutions" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Solutions{' '} </Link>{' '} <Link href="/about" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} About{' '} </Link>{' '} <Link href="/blog" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Blog{' '} </Link>{' '} <Link href="/careers" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Careers{' '} </Link>{' '} <Link href="/contact" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Contact{' '} </Link>{' '} </div>{' '} {}{' '} <div className="hidden lg: block"> {' ';} <Link href="/contact" className="bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block" > {' ';} Get Started{' '} </Link>{' '} </div>{' '} {}{' '} <button className="lg: hidden text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(!isOpen);} > {' '} {isOpen ? ( <X className="w-6 h-6" /> ) : ( <Menu className="w-6 h-6" /> )}{' '} </button>{' '} </div>{' '} {}{' '} {isOpen && ( <div className="lg: hidden border-t border-gray-200 py-4"> {' ';} <div className="space-y-2"> {' '} <Link href="/" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Home{' '} </Link>{' '} <div className="py-2"> {' '} <div className="text-gray-600 font-semibold mb-2"> {' '} Services{' '} </div>{' '} <div className="pl-4 space-y-2"> {' '} <Link href="/services/ai-development" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} AI Development{' '} </Link>{' '} <Link href="/services/cloud-services" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Cloud Services{' '} </Link>{' '} <Link href="/services/web-development" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Web Development{' '} </Link>{' '} <Link href="/services/mobile-development" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Mobile Development{' '} </Link>{' '} <Link href="/services/blockchain-solutions" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Blockchain Solutions{' '} </Link>{' '} <Link href="/services/iot-platforms" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} IoT Platforms{' '} </Link>{' '} <Link href="/services/cybersecurity" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Cybersecurity{' '} </Link>{' '} </div>{' '} </div>{' '} <div className="py-2"> {' '} <div className="text-gray-600 font-semibold mb-2"> {' '} Solutions{' '} </div>{' '} <div className="pl-4 space-y-2"> {' '} <Link href="/solutions/enterprise" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Enterprise Solutions{' '} </Link>{' '} <Link href="/solutions/small-business" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Small Business{' '} </Link>{' '} <Link href="/solutions/startups" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Startups{' '} </Link>{' '} <Link href="/solutions/healthcare" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Healthcare{' '} </Link>{' '} <Link href="/solutions/finance" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Finance{' '} </Link>{' '} </div>{' '} </div>{' '} <Link href="/products" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Products{' '} </Link>{' '} <Link href="/about" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} About{' '} </Link>{' '} <Link href="/blog" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Blog{' '} </Link>{' '} <Link href="/careers" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Careers{' '} </Link>{' '} <Link href="/contact" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Contact{' '} </Link>{' '} <div className="pt-4"> {' '} <Link href="/contact" className="bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center" > {' ';} Get Started{' '} </Link>{' '} </div>{' '} </div>{' '} </div> )}{' '} </div>{' '} </nav> )}; export default EnhancedNavigation;
  { "href": '/contact', "label": 'Contact' },']
const "EnhancedNavigation": React.FC = () => {"
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  return ("
    <nav className="bg-white shadow-lg sticky top-0 z-50">"
</nav>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="flex justify-between items-center py-4">"
          <Link href="/" className="flex items-center space-x-2">"
"
            <div className="flex items-center space-x-2">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-xl">Z</span>{' '}
              </div>{' '}
              <div className="text-xl font-bold text-gray-800">"
          {' '}
          <div className="hidden lg:flex items-center space-x-8">"
</div>
            <Link;"
              href="/"""
              className="text-gray-600 hover:text-blue-600 transition-colors"""
          <div className="hidden "lg": flex items-center space-x-8">"

              className="text-gray-600 "hover": text-blue-600 transition-colors""
            >
            <div className="relative group">"
              <button;"
                className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors"")
                onMouseEnter={() => setServicesOpen(true)}
</button>"
                Services <ChevronDown className="ml-1 w-4 h-4" />{' '}

              </button>{' '}
              <div;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                <Link;
                  href="/services/ai-development"""
                  className="block px-4 py-2 text-gray-700 "hover": bg-blue-50 hover:text-blue-600""
                  href="/services/cloud-services"""
                  href="/services/web-development"""
                  href="/services/mobile-development"""
                  href="/services/blockchain-solutions"""
                  href="/services/iot-platforms"""
                  href="/services/cybersecurity"""
                className="flex items-center text-gray-600 "hover": text-blue-600 transition-colors""
                onMouseEnter={() => setSolutionsOpen(true)}
                Solutions <ChevronDown className="ml-1 w-4 h-4" />{' '}

              <div;`;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                  href="/solutions/enterprise"""
                  href="/solutions/small-business"""
                  href="/solutions/startups"""
                  href="/solutions/healthcare"""
                  href="/solutions/finance"""
              href="/products"""
              href="/solutions"""
              href="/about"""
              href="/blog"""
              href="/careers"""
              href="/contact"""
          <div className="hidden lg:block">"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block"""
          <div className="hidden "lg": block">"

              className="bg-blue-600 "hover": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block""
          <button;
            className=""lg": hidden text-gray-600 hover:text-gray-900""
            onClick={() => setIsOpen(!isOpen)}
              <X className="w-6 h-6" />"
              <Menu className="w-6 h-6" />"
          <div className=""lg": hidden border-t border-gray-200 py-4">"
            <div className="space-y-2">"
                className="block py-2 text-gray-600 "hover": text-blue-600""
              <div className="py-2">"
                <div className="text-gray-600 font-semibold mb-2">"
                <div className="pl-4 space-y-2">"
                    className="block py-1 text-gray-500 "hover": text-blue-600""
              <div className="pt-4">"
                  className="bg-blue-600 "hover": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center""
    </nav>`;
import React,{ useState } from 'react'; import Link from 'next/link'; import { Menu,X,ChevronDown } from 'lucide-react'; const mainNavLinks = [ { href: '/';,label: 'Home' ;},{ href: '/services';,label: 'Services' ;},{ href: '/products';,label: 'Products' ;},{ href: '/blog';,label: 'Blog' ;},{ href: '/about';,label: 'About' ;},{ href: '/contact';,label: 'Contact' ;},]; const EnhancedNavigation: React.FC = () => { const [isOpen;,setIsOpen] = useState(false); const [servicesOpen,setServicesOpen] = useState(false); const [solutionsOpen,setSolutionsOpen] = useState(false); return ( <nav className="bg-white shadow-lg sticky top-0 z-50"> {' '} <div className="container mx-auto px-4"> {' '} <div className="flex justify-between items-center py-4"> {' '} {}{' '} <Link href="/" className="flex items-center space-x-2"> {' '} <div className="flex items-center space-x-2"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-xl">Z</span>{' '} </div>{' '} <div className="text-xl font-bold text-gray-800"> {' '} Zion Tech Group{' '} </div>{' '} </div>{' '} {' '} {}{' '} <div className="hidden lg: flex items-center space-x-8"> {' ';} <Link href="/" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Home{' '} {' '} {}{' '} <div className="relative group"> {' '} <button className="flex items-center text-gray-600 hover: text-blue-600 transition-colors" onMouseEnter={() => setServicesOpen(true);} onMouseLeave={() => setServicesOpen(false)} > {' '} Services <ChevronDown className="ml-1 w-4 h-4" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {' '} <Link href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} AI Development{' '} {' '} <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Cloud Services{' '} {' '} <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Web Development{' '} {' '} <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Mobile Development{' '} {' '} <Link href="/services/blockchain-solutions" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Blockchain Solutions{' '} {' '} <Link href="/services/iot-platforms" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} IoT Platforms{' '} {' '} <Link href="/services/cybersecurity" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Cybersecurity{' '} {' '} </div>{' '} </div>{' '} {}{' '} <div className="relative group"> {' '} <button className="flex items-center text-gray-600 hover: text-blue-600 transition-colors" onMouseEnter={() => setSolutionsOpen(true);} onMouseLeave={() => setSolutionsOpen(false)} > {' '} Solutions <ChevronDown className="ml-1 w-4 h-4" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)} > {' '} <Link href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Enterprise Solutions{' '} {' '} <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Small Business{' '} {' '} <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Startups{' '} {' '} <Link href="/solutions/healthcare" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Healthcare{' '} {' '} <Link href="/solutions/finance" className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600" > {' ';} Finance{' '} {' '} </div>{' '} </div>{' '} <Link href="/products" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Products{' '} {' '} <Link href="/solutions" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Solutions{' '} {' '} <Link href="/about" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} About{' '} {' '} <Link href="/blog" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Blog{' '} {' '} <Link href="/careers" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Careers{' '} {' '} <Link href="/contact" className="text-gray-600 hover: text-blue-600 transition-colors" > {' ';} Contact{' '} {' '} </div>{' '} {}{' '} <div className="hidden lg: block"> {' ';} <Link href="/contact" className="bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block" > {' ';} Get Started{' '} {' '} </div>{' '} {}{' '} <button className="lg: hidden text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(!isOpen);} > {' '} {isOpen ? ( <X className="w-6 h-6" /> ) : ( <Menu className="w-6 h-6" /> )}{' '} </button>{' '} </div>{' '} {}{' '} {isOpen && ( <div className="lg: hidden border-t border-gray-200 py-4"> {' ';} <div className="space-y-2"> {' '} <Link href="/" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Home{' '} {' '} <div className="py-2"> {' '} <div className="text-gray-600 font-semibold mb-2"> {' '} Services{' '} </div>{' '} <div className="pl-4 space-y-2"> {' '} <Link href="/services/ai-development" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} AI Development{' '} {' '} <Link href="/services/cloud-services" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Cloud Services{' '} {' '} <Link href="/services/web-development" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Web Development{' '} {' '} <Link href="/services/mobile-development" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Mobile Development{' '} {' '} <Link href="/services/blockchain-solutions" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Blockchain Solutions{' '} {' '} <Link href="/services/iot-platforms" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} IoT Platforms{' '} {' '} <Link href="/services/cybersecurity" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Cybersecurity{' '} {' '} </div>{' '} </div>{' '} <div className="py-2"> {' '} <div className="text-gray-600 font-semibold mb-2"> {' '} Solutions{' '} </div>{' '} <div className="pl-4 space-y-2"> {' '} <Link href="/solutions/enterprise" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Enterprise Solutions{' '} {' '} <Link href="/solutions/small-business" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Small Business{' '} {' '} <Link href="/solutions/startups" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Startups{' '} {' '} <Link href="/solutions/healthcare" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Healthcare{' '} {' '} <Link href="/solutions/finance" className="block py-1 text-gray-500 hover: text-blue-600" > {' ';} Finance{' '} {' '} </div>{' '} </div>{' '} <Link href="/products" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Products{' '} {' '} <Link href="/about" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} About{' '} {' '} <Link href="/blog" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Blog{' '} {' '} <Link href="/careers" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Careers{' '} {' '} <Link href="/contact" className="block py-2 text-gray-600 hover: text-blue-600" > {' ';} Contact{' '} {' '} <div className="pt-4"> {' '} <Link href="/contact" className="bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center" > {' ';} Get Started{' '} {' '} </div>{' '} </div>{' '} </div> )}{' '} </div>{' '} </nav> )}; export default EnhancedNavigation;`;
pr-12325
                Services <ChevronDown className=\"ml-1 w-4 h-4\" />{' '}
              </button>{' '}
              <div;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() = /> setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >;
                {' '}
                <Link;
                  href=\"/services/ai-development\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  AI Development;
                </Link>{' '}
                <Link;
                  href=\"/services/cloud-services\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Cloud Services;
                </Link>{' '}
                <Link;
                  href=\"/services/web-development\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Web Development;
                </Link>{' '}
                <Link;
                  href=\"/services/mobile-development\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Mobile Development;
                </Link>{' '}
                <Link;
                  href=\"/services/blockchain-solutions\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Blockchain Solutions;
                </Link>{' '}
                <Link;
                  href=\"/services/iot-platforms\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  IoT Platforms;
                </Link>{' '}
                <Link;
                  href=\"/services/cybersecurity\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Cybersecurity;
                </Link>{' '}
              </div>{' '}
            </div>{' '}
            {}{' '}
            <div className=\"relative group\" />;
              {' '}
              <button;
;
                className=\"flex items-center text-gray-600 \"hover\": text-blue-600 transition-colors\";
                onMouseEnter={() = /> setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >;
                {' '}
                Solutions <ChevronDown className=\"ml-1 w-4 h-4\" />{' '}
              </button>{' '}
              <div;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() = /> setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >;
                {' '}
                <Link;
                  href=\"/solutions/enterprise\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Enterprise Solutions;
                </Link>{' '}
                <Link;
                  href=\"/solutions/small-business\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Small Business;
                </Link>{' '}
                <Link;
                  href=\"/solutions/startups\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Startups;
                </Link>{' '}
                <Link;
                  href=\"/solutions/healthcare\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Healthcare;
                </Link>{' '}
                <Link;
                  href=\"/solutions/finance\";
;
                  className=\"block px-4 py-2 text-gray-700 \"hover\": bg-blue-50 hover:text-blue-600\";
                 />;
                  Finance;
                </Link>{' '}
              </div>{' '}
            </div>{' '}
            <Link;
              href=\"/products\";
;
              className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\";
             />;
              Products;
            </Link>{' '}
            <Link;
              href=\"/solutions\";
;
              className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\";
             />;
              Solutions;
            </Link>{' '}
            <Link;
              href=\"/about\";
;
              className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\";
             />;
              About;
            </Link>{' '}
            <Link;
              href=\"/blog\";
;
              className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\";
             />;
              Blog;
            </Link>{' '}
            <Link;
              href=\"/careers\";
;
              className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\";
             />;
              Careers;
            </Link>{' '}
            <Link;
              href=\"/contact\";
;
              className=\"text-gray-600 \"hover\": text-blue-600 transition-colors\";
             />;
              Contact;
            </Link>{' '}
          </div>{' '}
          {}{' '}<div className=\"hidden lg:block\" />;
            {' '}
            <Link;
              href=\"/contact\";
              className=\"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block\";
;
          <div className=\"hidden \"lg\": block\" />;
            {' '}
            <Link;
              href=\"/contact\";
              className=\"bg-blue-600 \"hover\": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block\";
             />;
              Get Started;
            </Link>{' '}
          </div>{' '}
          {}{' '}
          <button;
;
            className=\"\"lg\": hidden text-gray-600 hover:text-gray-900\";
            onClick={() = /> setIsOpen(!isOpen)}
          >;
            {' '}
            {isOpen ? (<X className=\"w-6 h-6\" />;}
            ) : (<Menu className=\"w-6 h-6\" />;}
            )}{' '}
          </button>{' '}
        </div>{' '}
        {}{' '}
        {isOpen && (;}
          <div className=\"\"lg\": hidden border-t border-gray-200 py-4\" />;}
            {' '}
            <div className=\"space-y-2\" />;
              {' '}
              <Link;
                href=\"/\";
;
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\";
               />;
                Home;
              </Link>{' '}
              <div className=\"py-2\" />;
                {' '}
                <div className=\"text-gray-600 font-semibold mb-2\" />;
                  Services;
                </div>{' '}
                <div className=\"pl-4 space-y-2\" />;
                  {' '}
                  <Link;
                    href=\"/services/ai-development\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    AI Development;
                  </Link>{' '}
                  <Link;
                    href=\"/services/cloud-services\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Cloud Services;
                  </Link>{' '}
                  <Link;
                    href=\"/services/web-development\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Web Development;
                  </Link>{' '}
                  <Link;
                    href=\"/services/mobile-development\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Mobile Development;
                  </Link>{' '}
                  <Link;
                    href=\"/services/blockchain-solutions\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Blockchain Solutions;
                  </Link>{' '}
                  <Link;
                    href=\"/services/iot-platforms\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    IoT Platforms;
                  </Link>{' '}
                  <Link;
                    href=\"/services/cybersecurity\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Cybersecurity;
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
              <div className=\"py-2\" />;
                {' '}
                <div className=\"text-gray-600 font-semibold mb-2\" />;
                  Solutions;
                </div>{' '}
                <div className=\"pl-4 space-y-2\" />;
                  {' '}
                  <Link;
                    href=\"/solutions/enterprise\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Enterprise Solutions;
                  </Link>{' '}
                  <Link;
                    href=\"/solutions/small-business\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Small Business;
                  </Link>{' '}
                  <Link;
                    href=\"/solutions/startups\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Startups;
                  </Link>{' '}
                  <Link;
                    href=\"/solutions/healthcare\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Healthcare;
                  </Link>{' '}
                  <Link;
                    href=\"/solutions/finance\";
;
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\";
                   />;
                    Finance;
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
              <Link;
                href=\"/products\";
;
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\";
               />;
                Products;
              </Link>{' '}
              <Link;
                href=\"/about\";
;
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\";
               />;
                About;
              </Link>{' '}
              <Link;
                href=\"/blog\";
;
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\";
               />;
                Blog;
              </Link>{' '}
              <Link;
                href=\"/careers\";
;
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\";
               />;
                Careers;
              </Link>{' '}
              <Link;
                href=\"/contact\";
;
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\";
               />;
                Contact;
              </Link>{' '}
              <div className=\"pt-4\" />;
                {' '}
                <Link;
                  href=\"/contact\";
;
                  className=\"bg-blue-600 \"hover\": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center\";
                 />;
                  Get Started;
                </Link>{' '}
              </div>{' '}
            </div>{' '}
          </div>;
        )}{' '}
      </div>{' '}
    </nav>;
  )}export default EnhancedNavigation;import React,{ useState } from 'react'; import Link from 'next/link'; import { Menu,X,ChevronDown } from 'lucide-react'; const mainNavLinks = [ { href: '/';,}
  label: 'Home' ;},{ href: '/services';,}
  label: 'Services' ;},{ href: '/products';,}
  label: 'Products' ;},{ href: '/blog';,}
  label: 'Blog' ;},{ href: '/about';,}
  label: 'About' ;},{ href: '/contact';,}
  label: 'Contact' ;}]; const EnhancedNavigation: React.FC = () => { const [isOpen;,setIsOpen] = useState(false)const [servicesOpen,setServicesOpen] = useState(false)const [solutionsOpen,setSolutionsOpen] = useState(false)return ( <nav className=\"bg-white shadow-lg sticky top-0 z-50\" /> {' '} <div className=\"container mx-auto px-4\" /> {' '} <div className=\"flex justify-between items-center py-4\" /> {' '} {}{' '} <Link href=\"/\" className=\"flex items-center space-x-2\" /> {' '} <div className=\"flex items-center space-x-2\" /> {' '} <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" /> {' '} <span className=\"text-white font-bold text-xl\" />Z</span>{' '} </div>{' '} <div className=\"text-xl font-bold text-gray-800\" /> {' '} Zion Tech Group{' '} </div>{' '} </div>{' '} </Link>{' '} {}{' '} <div className=\"hidden lg: flex items-center space-x-8\" /> {' ';} <Link href=\"/\" className=\"text-gray-600 hover: text-blue-600 transition-colors\"  /> {' ';} Home{' '} </Link>{' '} {}{' '} <div className=\"relative group\" /> {' '} <button className=\"flex items-center text-gray-600 hover: text-blue-600 transition-colors\" onMouseEnter={() = /> setServicesOpen(true);} onMouseLeave={() => setServicesOpen(false)} > {' '} Services <ChevronDown className=\"ml-1 w-4 h-4\" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`} onMouseEnter={() = /> setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {' '} <Link href=\"/services/ai-development\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} AI Development{' '} </Link>{' '} <Link href=\"/services/cloud-services\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Cloud Services{' '} </Link>{' '} <Link href=\"/services/web-development\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Web Development{' '} </Link>{' '} <Link href=\"/services/mobile-development\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Mobile Development{' '} </Link>{' '} <Link href=\"/services/blockchain-solutions\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Blockchain Solutions{' '} </Link>{' '} <Link href=\"/services/iot-platforms\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} IoT Platforms{' '} </Link>{' '} <Link href=\"/services/cybersecurity\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Cybersecurity{' '} </Link>{' '} </div>{' '} </div>{' '} {}{' '} <div className=\"relative group\" /> {' '} <button className=\"flex items-center text-gray-600 hover: text-blue-600 transition-colors\" onMouseEnter={() = /> setSolutionsOpen(true);} onMouseLeave={() => setSolutionsOpen(false)} > {' '} Solutions <ChevronDown className=\"ml-1 w-4 h-4\" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`} onMouseEnter={() = /> setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)} > {' '} <Link href=\"/solutions/enterprise\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Enterprise Solutions{' '} </Link>{' '} <Link href=\"/solutions/small-business\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Small Business{' '} </Link>{' '} <Link href=\"/solutions/startups\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Startups{' '} </Link>{' '} <Link href=\"/solutions/healthcare\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Healthcare{' '} </Link>{' '} <Link href=\"/solutions/finance\" className=\"block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600\"  /> {' ';} Finance{' '} </Link>{' '} </div>{' '} </div>{' '} <Link href=\"/products\" className=\"text-gray-600 hover: text-blue-600 transition-colors\"  /> {' ';} Products{' '} </Link>{' '} <Link href=\"/solutions\" className=\"text-gray-600 hover: text-blue-600 transition-colors\"  /> {' ';} Solutions{' '} </Link>{' '} <Link href=\"/about\" className=\"text-gray-600 hover: text-blue-600 transition-colors\"  /> {' ';} About{' '} </Link>{' '} <Link href=\"/blog\" className=\"text-gray-600 hover: text-blue-600 transition-colors\"  /> {' ';} Blog{' '} </Link>{' '} <Link href=\"/careers\" className=\"text-gray-600 hover: text-blue-600 transition-colors\"  /> {' ';} Careers{' '} </Link>{' '} <Link href=\"/contact\" className=\"text-gray-600 hover: text-blue-600 transition-colors\"  /> {' ';} Contact{' '} </Link>{' '} </div>{' '} {}{' '} <div className=\"hidden lg: block\" /> {' ';} <Link href=\"/contact\" className=\"bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block\"  /> {' ';} Get Started{' '} </Link>{' '} </div>{' '} {}{' '} <button className=\"lg: hidden text-gray-600 hover:text-gray-900\" onClick={() = /> setIsOpen(!isOpen);} > {' '} {isOpen ? ( <X className=\"w-6 h-6\" /> ) : ( <Menu className=\"w-6 h-6\" /> )}{' '} </button>{' '} </div>{' '} {}{' '} {isOpen && ( <div className=\"lg: hidden border-t border-gray-200 py-4\" /> {' ';} <div className=\"space-y-2\" /> {' '} <Link href=\"/\" className=\"block py-2 text-gray-600 hover: text-blue-600\"  /> {' ';} Home{' '} </Link>{' '} <div className=\"py-2\" /> {' '} <div className=\"text-gray-600 font-semibold mb-2\" /> {' '} Services{' '} </div>{' '} <div className=\"pl-4 space-y-2\" /> {' '} <Link href=\"/services/ai-development\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} AI Development{' '} </Link>{' '} <Link href=\"/services/cloud-services\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Cloud Services{' '} </Link>{' '} <Link href=\"/services/web-development\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Web Development{' '} </Link>{' '} <Link href=\"/services/mobile-development\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Mobile Development{' '} </Link>{' '} <Link href=\"/services/blockchain-solutions\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Blockchain Solutions{' '} </Link>{' '} <Link href=\"/services/iot-platforms\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} IoT Platforms{' '} </Link>{' '} <Link href=\"/services/cybersecurity\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Cybersecurity{' '} </Link>{' '} </div>{' '} </div>{' '} <div className=\"py-2\" /> {' '} <div className=\"text-gray-600 font-semibold mb-2\" /> {' '} Solutions{' '} </div>{' '} <div className=\"pl-4 space-y-2\" /> {' '} <Link href=\"/solutions/enterprise\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Enterprise Solutions{' '} </Link>{' '} <Link href=\"/solutions/small-business\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Small Business{' '} </Link>{' '} <Link href=\"/solutions/startups\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Startups{' '} </Link>{' '} <Link href=\"/solutions/healthcare\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Healthcare{' '} </Link>{' '} <Link href=\"/solutions/finance\" className=\"block py-1 text-gray-500 hover: text-blue-600\"  /> {' ';} Finance{' '} </Link>{' '} </div>{' '} </div>{' '} <Link href=\"/products\" className=\"block py-2 text-gray-600 hover: text-blue-600\"  /> {' ';} Products{' '} </Link>{' '} <Link href=\"/about\" className=\"block py-2 text-gray-600 hover: text-blue-600\"  /> {' ';} About{' '} </Link>{' '} <Link href=\"/blog\" className=\"block py-2 text-gray-600 hover: text-blue-600\"  /> {' ';} Blog{' '} </Link>{' '} <Link href=\"/careers\" className=\"block py-2 text-gray-600 hover: text-blue-600\"  /> {' ';} Careers{' '} </Link>{' '} <Link href=\"/contact\" className=\"block py-2 text-gray-600 hover: text-blue-600\"  /> {' ';} Contact{' '} </Link>{' '} <div className=\"pt-4\" /> {' '} <Link href=\"/contact\" className=\"bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center\"  /> {' ';} Get Started{' '} </Link>{' '} </div>{' '} </div>{' '} </div> )}{' '} </div>{' '} </nav> )}export default EnhancedNavigation;;
                  <Link;
href=\"/solutions/enterprise\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Enterprise Solutions;
                  </Link>{' '}
                  <Link;
href=\"/solutions/small-business\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Small Business;
                  </Link>{' '}
                  <Link;
href=\"/solutions/startups\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Startups;
                  </Link>{' '}
                  <Link;
href=\"/solutions/healthcare\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Healthcare;
                  </Link>{' '}
                  <Link;
href=\"/solutions/finance\"
                    className=\"block py-1 text-gray-500 \"hover\": text-blue-600\"
                   />
                    Finance;
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
              <Link;
href=\"/products\"
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\"
               />
                Products;
              </Link>{' '}
              <Link;
href=\"/about\"
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\"
               />
                About;
              </Link>{' '}
              <Link;
href=\"/blog\"
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\"
               />
                Blog;
              </Link>{' '}
              <Link;
href=\"/careers\"
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\"
               />
                Careers;
              </Link>{' '}
              <Link;
href=\"/contact\"
                className=\"block py-2 text-gray-600 \"hover\": text-blue-600\"
               />
                Contact;
              </Link>{' '}
              <div className=\"pt-4\" />
                {' '}
                <Link;
href=\"/contact\"
                  className=\"bg-blue-600 \"hover\": bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center\"
                 />
                  Get Started;
                </Link>{' '}
              </div>{' '}
            </div>{' '}
>>>>>>> origin/resolved-merge-conflicts
          </div>
<<<<<<< HEAD
=======
        )}{' '}'
      </div>{' '}'
<<<<<<< HEAD
=======
import React, { useState } from 'react;
import Link from next/link';
>>>>>>> origin/cursor/delete-old-data-records-6bba

        )}{' '}
      </div>{' '}
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </nav>
  );
}
export default EnhancedNavigation;
import React,{ useState } from 'react'; import Link from 'next/link'; import { Menu,X,ChevronDown } from 'lucide-react'; const mainNavLinks = [ { href: '/',label: 'Home' },{ href: '/services',label: 'Services' },{ href: '/products',label: 'Products' },{ href: '/blog',label: 'Blog' },{ href: '/about',label: 'About' },{ href: '/contact',label: 'Contact' },]; const EnhancedNavigation: React.FC = () => { const [isOpen,setIsOpen] = useState(false); const [servicesOpen,setServicesOpen] = useState(false); const [solutionsOpen,setSolutionsOpen] = useState(false); return ( <nav className="bg-white shadow-lg sticky top-0 z-50"> {' '} <div className="container mx-auto px-4"> {' '} <div className="flex justify-between items-center py-4"> {' '} {}{' '} <Link href="/" className="flex items-center space-x-2"> {' '} <div className="flex items-center space-x-2"> {' '} <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> {' '} <span className="text-white font-bold text-xl">Z</span>{' '} </div>{' '} <div className="text-xl font-bold text-gray-800"> {' '} Zion Tech Group{' '} </div>{' '} </div>{' '} </Link>{' '} {}{' '} <div className="hidden lg:flex items-center space-x-8"> {' '} <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors" > {' '} Home{' '} </Link>{' '} {}{' '} <div className="relative group"> {' '} <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {' '} Services <ChevronDown className="ml-1 w-4 h-4" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} > {' '} <Link href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} AI Development{' '} </Link>{' '} <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Cloud Services{' '} </Link>{' '} <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Web Development{' '} </Link>{' '} <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Mobile Development{' '} </Link>{' '} <Link href="/services/blockchain-solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Blockchain Solutions{' '} </Link>{' '} <Link href="/services/iot-platforms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} IoT Platforms{' '} </Link>{' '} <Link href="/services/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Cybersecurity{' '} </Link>{' '} </div>{' '} </div>{' '} {}{' '} <div className="relative group"> {' '} <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)} > {' '} Solutions <ChevronDown className="ml-1 w-4 h-4" />{' '} </button>{' '} <div className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)} > {' '} <Link href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Enterprise Solutions{' '} </Link>{' '} <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Small Business{' '} </Link>{' '} <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Startups{' '} </Link>{' '} <Link href="/solutions/healthcare" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Healthcare{' '} </Link>{' '} <Link href="/solutions/finance" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" > {' '} Finance{' '} </Link>{' '} </div>{' '} </div>{' '} <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors" > {' '} Products{' '} </Link>{' '} <Link href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors" > {' '} Solutions{' '} </Link>{' '} <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors" > {' '} About{' '} </Link>{' '} <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors" > {' '} Blog{' '} </Link>{' '} <Link href="/careers" className="text-gray-600 hover:text-blue-600 transition-colors" > {' '} Careers{' '} </Link>{' '} <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" > {' '} Contact{' '} </Link>{' '} </div>{' '} {}{' '} <div className="hidden lg:block"> {' '} <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block" > {' '} Get Started{' '} </Link>{' '} </div>{' '} {}{' '} <button className="lg:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(!isOpen)} > {' '} {isOpen ? ( <X className="w-6 h-6" /> ) : ( <Menu className="w-6 h-6" /> )}{' '} </button>{' '} </div>{' '} {}{' '} {isOpen && ( <div className="lg:hidden border-t border-gray-200 py-4"> {' '} <div className="space-y-2"> {' '} <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600" > {' '} Home{' '} </Link>{' '} <div className="py-2"> {' '} <div className="text-gray-600 font-semibold mb-2"> {' '} Services{' '} </div>{' '} <div className="pl-4 space-y-2"> {' '} <Link href="/services/ai-development" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} AI Development{' '} </Link>{' '} <Link href="/services/cloud-services" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Cloud Services{' '} </Link>{' '} <Link href="/services/web-development" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Web Development{' '} </Link>{' '} <Link href="/services/mobile-development" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Mobile Development{' '} </Link>{' '} <Link href="/services/blockchain-solutions" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Blockchain Solutions{' '} </Link>{' '} <Link href="/services/iot-platforms" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} IoT Platforms{' '} </Link>{' '} <Link href="/services/cybersecurity" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Cybersecurity{' '} </Link>{' '} </div>{' '} </div>{' '} <div className="py-2"> {' '} <div className="text-gray-600 font-semibold mb-2"> {' '} Solutions{' '} </div>{' '} <div className="pl-4 space-y-2"> {' '} <Link href="/solutions/enterprise" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Enterprise Solutions{' '} </Link>{' '} <Link href="/solutions/small-business" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Small Business{' '} </Link>{' '} <Link href="/solutions/startups" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Startups{' '} </Link>{' '} <Link href="/solutions/healthcare" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Healthcare{' '} </Link>{' '} <Link href="/solutions/finance" className="block py-1 text-gray-500 hover:text-blue-600" > {' '} Finance{' '} </Link>{' '} </div>{' '} </div>{' '} <Link href="/products" className="block py-2 text-gray-600 hover:text-blue-600" > {' '} Products{' '} </Link>{' '} <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600" > {' '} About{' '} </Link>{' '} <Link href="/blog" className="block py-2 text-gray-600 hover:text-blue-600" > {' '} Blog{' '} </Link>{' '} <Link href="/careers" className="block py-2 text-gray-600 hover:text-blue-600" > {' '} Careers{' '} </Link>{' '} <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600" > {' '} Contact{' '} </Link>{' '} <div className="pt-4"> {' '} <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center" > {' '} Get Started{' '} </Link>{' '} </div>{' '} </div>{' '} </div> )}{' '} </div>{' '} </nav> )}; export default EnhancedNavigation;