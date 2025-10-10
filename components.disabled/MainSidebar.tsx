impor,
  t: React { useState } from 'react.ts'';' impor,
  t: Link from 'next/link.ts'',' impor,
  t: toggleSection = (sectio)
  f: ',/, ico,
  f: '/partners,'' '} ico,
  e:,' Careers} ' '/request-quote', ico,
  n: Quote, colo,
  t:, Middletown, DE 19709} http,
  s: //www.linkedin.com/company/zion-tech-group/, ico,
  n: Linkedin, colo,
  r: '} text-blue-400; ' 'text-gray-400' },' ' ]' const renderNavSection = (titl)
  e: anyanyanyanyanyanyanyanyanyanyanyanyanystring, items[]) sectionKe,
  y: string) => ('' <div key={sectionKey} className='mb-6> <button' onClick={() => toggleSection(sectionKey)}' className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300,
  x: items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`) isActive(item.href)} ' {renderNavSection('Resources,' ') navigation.resources} 'resources'' ')}, {/* Comp Section */}, {renderNavSection(' ' 'Comp') navigation.company}' 'company')}' ' </div>'{/* Footer */}' <div className='p-4 border-t border-zion-blue-light> {/* Contact Info */} <div className='mb-4 space-y-2> {contactInfo.map((contact} index) => (' <a) key={index} href={contact.href}' target={contact.href.startsWith('' 'http') ?}' '_blank': '_self} ' rel={contact.href.startsWith('http)' ') ? 'noopener noreferrer}' ': '} className='flex items-center gap-2 text-xs text-zion-slate-light,
  hover: bg-white/10 rounded-lg transition-all duration-200 ${social.color}`} aria-label={social.name}` >`' <social.icon className='w-4 h-4' /> </a>' ))} </div> {/* Copyright */}' <div className='text-xs text-zion-slate-light text-center> © {new Date().getFullYear()} Zion Tech Group" </div> </div> </div> </>)} '"`
