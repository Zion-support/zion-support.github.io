
<<<<<<< HEAD

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-gray-100 min-h-screen">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/ai-services" className="text-blue-600 hover:underline">AI Services</a></li>
          <li><a href="/it-services" className="text-blue-600 hover:underline">IT Services</a></li>
          <li><a href="/5g-solutions" className="text-blue-600 hover:underline">5G Solutions</a></li>
          <li><a href="/micro-saas-solutions" className="text-blue-600 hover:underline">Micro SaaS</a></li>
        </ul>
      </div>
    </aside>
  );
}
=======

import {},
      X,
      ChevronDown,
      ChevronRight,
      Home,
      Users,
      Settings,
      Cloud,
      Code,
      Star,
      ArrowRight,


interface SidebarProps {},
      isOpen: boolean,
      onClose: () => void
    },


      setExpandedSections(prev => {},)
      const  newSet = new Set(prev)
      if (newSet.has(section)) {},
      newSet.delete(section)
      } else {},
      newSet.add(section)
      },
      return newSet
    })

                      )};
                    </div>
                  </>
                ))};

              </div>
            )}
          </div>

          {/* Contact Info */}
          <div  className ="border-t border-white/10 pt-6"></div>"
            <h4  className ="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Info</h4>"
            <div  className ="space-y-3"></div>"
              {contactInfo.map((info, index) => ()}
                <div  key ={index} className="flex items-center space-x-3 text-sm text-gray-300"></div>"
                  <div  className ="w-5 h-5 text-cyan-400">{info.icon}</div>"
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div  className ="mt-6"></div>"
            <>
              to="/consultation""
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/25 group""
              onClick={onClose}
            ></>
              <span>Get Started</span>
              <ArrowRight: className ="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />"
            </>

import React from 'react';;";
import { X, ChevronDown, ChevronRight } from 'lucide-react';";


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void,
}

interface SidebarProps {}
  isOpen: boolean}
  onClose: () => void;}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {


  if (!isOpen) return null;
  return (

            onClick={onClose};

          ></>
            Contact
          </>
        </nav>
      </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
