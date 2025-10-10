'use client';
import React from 'react';
import React, { memo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {;
  X,;
  Menu,;
  Home,;
  Users,;
  Settings,;
  Brain,;
  Cloud,;
  Shield,;
  Code,;
  BarChart,;
  ChevronDown,;
  ChevronRight,;
  Phone,;
  Mail,;
  MapPin,;
  Clock;}
} from 'lucide-react';
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {;) => {
  return (
    $3
  );
};
      newExpanded.delete(section);}
    } else {;
      newExpanded.add(section);}
    }
    setExpandedSections(newExpanded);
  };
      {/* Mobile Menu Button */}
      <button;
        onClick={() => setIsOpen(true)}
      {/* Sidebar Overlay */}
      {isOpen && (;
        <div;
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden";}
          onClick={() => setIsOpen(false)}
        />;
      )}
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6"></div>;
            <nav className="space-y-2 px-4">;
              {navigationSections.map((section, sectionIndex) => (;}
                <div key={sectionIndex} className="space-y-1"></div>;
                  <button;
                    onClick={() => section.key && toggleSection(section.key)}
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${;
                            location.pathname === item.path;
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30';
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50';}
                          }`}
                        >;
                          <item.icon className="w-4 h-4 flex-shrink-0" />;
                          <span>{item.name}</span>;
                        </Link>;
                      ))}
                    </div>;
                  )}
                </div>;
              ))}
