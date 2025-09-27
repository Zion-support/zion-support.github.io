import React from 'react';
import {Link } from 'react-router-dom';

 {return (<footer  className ="bg-gray-900te  x  t-white">
      <div  className ="container  mx-auto  px-4, p  y-12">
        <div  className ="gridmd:grid-cols-4g  a  p-8">          {/* Company  Info */}
          <div  className ="space-y-4">
            <div  className ="flex  items-center  space-x-2">
              <div  className ="w-8, h-8, bg-gradient-to-r  from-purple-6, 0, 0, to-pink-6, 0, 0, rounded-lg  flex  items-centerjustify-center">
                <span  className ="text-white  font-boldtext-lg">Z</span>

export const Footer: React.FC = () => {return (<footer className ="bg-gray-900te  x  t-white">
      <div className ="container  mx-auto  px-4, p  y-12">
        <div className ="gridmd:grid-cols-4g  a  p-8">          {/* Company  Info */}
          <div className ="space-y-4">
            <div className ="flex  items-center  space-x-2">
              <div className ="w-8, h-8, bg-gradient-to-r  from-purple-600, to-pink-600, rounded-lg  flex items-centerjustify-center">
                <span className ="text-white  font-boldtext-lg">Z</span>

              </div>
              <span  className ="text-xlfont-bold">Zion  Tech  Group</span>
            </div>
            <p  className = "text-gray-400">
              Leading  the  future  of  technology  with  AIblockchainand  innovative  solutions.
            </p>

              <a  href ="#" className="text-gray-400, hover:text-whitetransition-colors" aria-label="Twitter">
                <svg  className ="w-6h-6" fill="currentColor" viewBox="0, 0, 24, 24">
                  <path  d ="M23.9, 5, 3, 4.57a  1, 0, 10, 0, 01-2.8, 2, 5.7, 7, 5, 4.9, 5, 8, 4.9, 5, 8, 0, 0, 0, 2.1, 6, 3-2.72, 3, c-.9, 5, 1.5, 5, 5-2.0, 0, 5.9, 5, 9-3.1, 2, 7, 1.184, a  4.92, 4.92, 0, 00-8.3, 8, 4, 4.482, C  7.69, 8.0, 9, 5, 4.0, 6, 7, 6.13, 1.64, 3.162, a  4.8, 2, 2, 4.8, 2, 2, 0, 00-.6, 6, 6, 2.475, c  0, 1.71.87, 3.2, 1, 3, 2.1, 8, 8, 4.096, a  4.90, 4, 4.90, 4, 0, 01-2.2, 2, 8-.61, 6, v.06, a  4.9, 2, 3, 4.9, 2, 3, 0, 0, 0, 3.9, 4, 6, 4.8, 2, 7, 4.9, 9, 6, 4.9, 9, 6, 0, 01-2.2, 1, 2.0, 8, 5, 4.9, 3, 6, 4.9, 3, 6, 0, 0, 0, 4.6, 0, 4, 3.4, 1, 7, 9.8, 6, 7, 9.8, 6, 7, 0, 01-6.1, 0, 2, 2.10, 5, c-.39, 0-.7, 7, 9-.0, 2, 3-1.17-.067a  1, 3.9, 9, 5, 13.9, 9, 5, 0, 0, 0, 7.5, 5, 7, 2.209, c  9.0, 5, 3, 0, 13.9, 9, 8-7.4, 9, 6, 13.9, 9, 8-13.9, 8, 5, 0-.21, 0-.42-.0, 1, 5-.63, A  9.9, 3, 5, 9.9, 3, 5, 0, 00, 2, 4, 4.5, 9, z"/>
                </svg>
              </a>
              <a  href ="#" className="text-gray-400, hover:text-whitetransition-colors" aria-label="LinkedIn">
                <svg  className ="w-6h-6" fill="currentColor" viewBox="0, 0, 24, 24">
                  <path  d ="M20.4, 4, 7, 20.45, 2, h-3.55, 4, v-5.569, c  0-1.3, 2, 8-.0, 2, 7-3.0, 3, 7-1.8, 5, 2-3.0, 3, 7-1.8, 5, 3, 0-2.1, 3, 6, 1.4, 4, 5-2.1, 3, 6, 2.939, v  5.667, H  9.351V9  h  3.414, v  1.56, 1, h.04, 6, c.4, 7, 7-.9, 1.6, 3, 7-1.85, 3.37-1.85, 3.6, 0, 1, 0, 4.2, 6, 7, 2.37, 4.2, 6, 7, 5.455, v  6.286z  M  5.3, 3, 7, 7.43, 3, c-1.1, 4, 4, 0-2.0, 6, 3-.9, 2, 6-2.0, 6, 3-2.0, 6, 5, 0-1.1, 3, 8.92-2.0, 6, 3, 2.0, 6, 3-2.0, 6, 3, 1.14, 0, 2.0, 6, 4.9, 2, 5, 2.0, 6, 4, 2.0, 6, 3, 0, 1.1, 3, 9-.9, 2, 5, 2.0, 6, 5-2.0, 6, 4, 2.065z  m  1.7, 8, 2, 13.019, H  3.555V9  h  3.564v  1, 1.452zM  2, 2.2, 2, 5, 0, H  1.77, 1, C.7, 9, 2, 0, 0 .7, 7, 4, 0, 1.729v  2, 0.542, C  0, 23.2, 2, 7.7, 9, 2, 24, 1.7, 7, 1, 24h  2, 0.451C  2, 3.2, 24, 24, 23.2, 2, 7, 24, 22.271, V  1.729C  2, 4 .7, 7, 4, 23.2, 0, 22.2, 2, 2, 0h.00, 3, z"/>
                </svg>
              </a>
              <a  href ="#" className="text-gray-400, hover:text-whitetransition-colors" aria-label="GitHub">
                <svg  className ="w-6h-6" fill="currentColor" viewBox="0, 0, 24, 24">
                  <path  d ="M12  0c-6.6, 2, 6, 0-12, 5.3, 7, 3-12, 12, 0, 5.3, 0, 2, 3.4, 3, 8, 9.8, 8.2, 0, 7, 11.3, 8, 7.5, 9, 9.1, 1, 1.7, 9, 3-.2, 6, 1.7, 9, 3-.57, 7, v-2.23, 4, c-3.3, 3, 8.7, 2, 6-4.0, 3, 3-1.4, 1, 6-4.0, 3, 3-1.4, 1, 6-.5, 4, 6-1.3, 8, 7-1.3, 3, 3-1.7, 5, 6-1.3, 3, 3-1.7, 5, 6-1.0, 8, 9-.7, 4, 5.0, 8, 3-.7, 2, 9.0, 8, 3-.7, 2, 9, 1.2, 0, 5.0, 8, 4, 1.8, 3, 9, 1.2, 3, 7, 1.8, 3, 9, 1.2, 3, 7, 1.07, 1.8, 3, 4, 2.8, 0, 7, 1.3, 0, 4, 3.4, 9, 2.9, 9, 7.1, 0, 7-.7, 7, 5.4, 1, 8-1.3, 0, 5.7, 6, 2-1.6, 0, 4-2.6, 6, 5-.3, 0, 5-5.4, 6, 7-1.3, 3, 4-5.4, 6, 7-5.9, 3, 1, 0-1.3, 1, 1.4, 6, 9-2.3, 8, 1, 1.2, 3, 6-3.2, 2, 1-.1, 2, 4-.3, 0, 3-.5, 3, 5-1.5, 2, 4.1, 1, 7-3.1, 7, 6, 0, 0, 1.0, 0, 8-.3, 2, 2, 3.3, 0, 1, 1.23.9, 5, 7-.2, 6, 6, 1.9, 8, 3-.3, 9, 9, 3.0, 0, 3-.4, 0, 4, 1.02.0, 0, 5, 2.0, 4, 7.1, 3, 8, 3.0, 0, 6.4, 0, 4, 2.2, 9, 1-1.5, 5, 2, 3.2, 9, 7-1.23, 3.2, 9, 7-1.23.6, 5, 3, 1.6, 5, 3.2, 4, 2, 2.8, 7, 4.1, 1, 8, 3.1, 7, 6.77.84, 1.2, 3, 5, 1.9, 1, 1, 1.2, 3, 5, 3.2, 2, 1, 0, 4.6, 0, 9-2.8, 0, 7, 5.6, 2, 4-5.4, 7, 9, 5.9, 2, 1.43.3, 7, 2.8, 2, 3, 1.1, 0, 2.8, 2, 3, 2.222, v  3.293, c  0 .3, 1, 9.1, 9, 2.6, 9, 4.8, 0, 1.5, 7, 6, 4.7, 6, 5-1.5, 8, 9, 8.1, 9, 9-6.0, 8, 6, 8.1, 9, 9-11.3, 8, 6, 0-6.6, 2, 7-5.3, 7, 3-12-12-1, 2, z"/>                </svg>

            <div className ="flex  space-x-4">
              <a href ="#" className="text-gray-400, hover:text-whitetransition-colors" aria-label="Twitter">
                <svg className ="w-6h-6" fill="currentColor" viewBox="0, 0 24, 24">
                  <path d ="M23.953, 4.57a  1010 0, 01-2.825.775, 4.958, 4.958, 0 002.163-2.72, 3, c-.951.555-2.005.959-3.127, 1.184, a  4.92, 4.92, 0 00-8.384, 4.482, C  7.69, 8.095, 4.067, 6.13, 1.64, 3.162, a  4.822, 4.822, 0 00-.666, 2.475, c  0, 1.71.87, 3.213, 2.188, 4.096, a  4.9044.9040 01-2.228-.61, 6, v.06, a  4.923, 4.923, 0 003.946, 4.827, 4.996, 4.996, 0 01-2.212.085, 4.936, 4.936, 0 004.604, 3.417, 9.867, 9.867, 0 01-6.102, 2.10, 5, c-.39, 0-.779-.023-1.17-.067a  1, 3.995, 13.995, 0 007.557, 2.209, c  9.053, 0 13.998-7.496, 13.998-13.985, 0-.21, 0-.42-.015-.63, A  9.935, 9.935, 0 0024, 4.5, 9, z"/>
                </svg>
              </a>
              <a href ="#" className="text-gray-400, hove r:text-whitetransition-colors" aria-label="LinkedIn">
                <svg className ="w-6h-6" fill="currentColor" viewBox="0, 0 24, 24">
                  <path d ="M20.447, 20.45, 2, h-3.55, 4, v-5.569, c  0-1.328-.027-3.037-1.852-3.037-1.853, 0-2.136, 1.445-2.136, 2.939, v  5.667, H  9.351V9  h  3.414, v  1.56, 1, h.04, 6, c.477-.9, 1.637-1.85, 3.37-1.85, 3.601, 0 4.267, 2.37, 4.267, 5.455, v  6.286z  M  5.337, 7.43, 3, c-1.144, 0-2.063-.926-2.063-2.065, 0-1.138.92-2.063, 2.063-2.063, 1.14, 0 2.064.925, 2.064, 2.063, 0 1.139-.925, 2.065-2.064, 2.065z  m  1.782, 13.019, H  3.555V9  h  3.564v  1, 1.452zM  2, 2.225, 0, H  1.77, 1, C.792, 0 0 .774, 0 1.729v  2, 0.542, C  0, 23.227.792, 24 1.771, 24h  2, 0.451C  2, 3.2, 24 24, 23.227, 24 22.271, V  1.729C  2, 4 .774, 23.2, 0 22.222, 0h.00, 3, z"/>
                </svg>
              </a>
              <a href ="#" className="text-gray-400, hove r:text-whitetransition-colors" aria-label="GitHub">
                <svg className ="w-6h-6" fill="currentColor" viewBox="0, 0 24, 24">
                  <path d ="M12  0c-6.626, 0-12, 5.373-12, 12 0, 5.302, 3.438, 9.8, 8.207, 11.387.599.111.793-.261.793-.57, 7, v-2.23, 4, c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729, 1.205.084, 1.839, 1.237, 1.839, 1.237, 1.07, 1.834, 2.807, 1.304, 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931, 0-1.311.469-2.381, 1.236-3.221-.124-.303-.535-1.524.117-3.176, 0 0, 1.008-.322, 3.301, 1.23.957-.266, 1.983-.399, 3.003-.404, 1.02.005, 2.047.138, 3.006.404, 2.291-1.552, 3.297-1.23, 3.297-1.23.653, 1.653.242, 2.874.118, 3.176.77.84, 1.235, 1.911, 1.235, 3.221, 0 4.609-2.807, 5.624-5.479, 5.921.43.372.823, 1.102.823, 2.222, v  3.293, c  0 .319.192.694.801.576, 4.765-1.589, 8.199-6.086, 8.199-11.386, 0-6.627-5.373-12-12-1, 2, z"/>                </svg>

              </a>
            </div>
          </div>

          {/* Quick  Links */}
          <div  className ="space-y-4">
            <h3  className ="text-lgfont-semibold" id="quick-links">Quick  Links</h3>
            <ul  className ="space-y-2">
              <li>
                <Link  to ="/" className="text-gray-400, hover:text-whitetransition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link  to ="/blog" className="text-gray-400, hover:text-whitetransition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link  to ="/contact" className="text-gray-400, hover:text-whitetransition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div  className ="space-y-4">
            <h3  className ="text-lgfont-semibold" id="services">Services</h3>
            <ul  className ="space-y-2">
              <li>
                <a  href ="#" className="text-gray-400, hover:text-whitetransition-colors">
                  AI  Solutions
                </a>
              </li>
              <li>
                <a  href ="#" className="text-gray-400, hover:text-whitetransition-colors">
                  Blockchain
                </a>
              </li>
              <li>
                <a  href ="#" className="text-gray-400, hover:text-whitetransition-colors">
                  Cloud  Services
                </a>
              </li>
              <li>
                <a  href ="#" className="text-gray-400, hover:text-whitetransition-colors">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          {/* Contact  Info */}

            <h3  className ="text-lgfont-semibold" id="contact">Contact</h3>
            <div  className ="space-y-2">
              <p  className ="text-gray-400">Email: info@ziontechgroup.com</p>
              <p  className ="text-gray-400">Phon  e: +1 (5, 5, 5) 1, 2, 3-45, 6, 7</p>
              <p className="text-gray-400">Addres  s: 1, 2, 3 Tech Street  Innovation City</p>            </div>

          <div className ="space-y-4">
            <h3 className ="text-lgfont-semibold" id="contact">Contact</h3>
            <div className ="space-y-2">
              <p className ="text-gray-400">Email: info@ziontechgroup.com</p>
              <p className ="text-gray-400">Phon  e: +1 (555) 123-4567</p>
              <p className="text-gray-400">Addres  s: 123 Tech Street  Innovation City</p>            </div>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 te  x  t-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )};

export default Footer;