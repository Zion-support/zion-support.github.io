

          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}

              className='group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20'            >
              <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110'>
                {link.icon}
              </div>
              <h3 className='text-white font-medium mb-1'>{link.title}</h3>
              <p className='text-zion-slate-light text-xs mb-2'>
                {link.description}
              </p>
              <div className='flex items-center text-zion-cyan text-xs mt-auto'>
                <span>{t('general.explore')}</span>
                <ArrowRight className='ml-1 h-3 w-3 transition-transform group-hover:translate-x-1' />
              </div>
            </Link>
import React, { useState } from 'react'
import { motion  } from 'framer-motion'
export default function Page() {"
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },"
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },"
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1
              className='group bg - zion - blue relative border border - zion - blue - light hover:border - zion - purple / 50 rounded - xl p - 4 transition - all duration - 300 flex flex - col items - center text - center hover:shadow - md hover:bg - zion - blue - light / 20'            >;
              <div className='bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 3 transition - transform group - hover:scale - 110'>;
                {link.icon}
              </div>;
              <h3 className='text - white font - medium mb - 1'>{link.title}</h3>;
              <p className='text - zion - slate - light text - xs mb - 2'>;
                {link.description}
              </p>;
              <div className='flex items - center text - zion - cyan text - xs mt - auto'>;
                <span>{t ('general.explore')}</span>;
                <ArrowRight className='ml - 1 h - 3 w - 3 transition - transform group - hover:translate - x-1' />;
              </div>;
            </Link>;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default /**
 * Page - Function description
 */
function Page() {";
    { name: "Consulting", count: 6, color: "from - yellow - 500 to - orange - 500" }, ";
    { name: "Innovation", count: 10, color: "from - green - 500 to - teal - 500" }, ";
    { name: "Business", count: 14, color: "from - indigo - 500 to - purple - 500" }      scale: 1,
      transition: {
        duration: 0.5, ";
        ease: "ease_out"}}}
  const hover_variants = {
  hover: {
      coordinate_y: -8,      scale: 1.02,
      transition: {
        duration: 0.3, "  ease: "ease_out";


              className="group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20"
            >
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                {link.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{link.title}</h3>
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>
              <div className="flex items-center text-zion-cyan text-xs mt-auto">
                <span>{t('general.explore')}</span>
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>


