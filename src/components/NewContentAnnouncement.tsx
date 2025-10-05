import React from 'react';
import { Link  } from 'react-router-dom';
const, NewContentAnnouncemen, t: React.FC = () => { 
  return (
    <div, classNam, e = 'bg-gradient-to-r, fro, m-purple-700, vi, a-pink-600to-red-600, tex, t-whitepy-3'>
      <div, classNam, e='containermx-autopx-6'>
        <div, classNam, e='flex, item, s-center, justif, y-center, ga, p-4, fle, x-wrap'>
          <div, classNam, e='flex, item, s-center, ga, p-2'>
            <Sparkles, classNam, e='w-5 h-5, animat, e-pulse' />
            <span, classNam, e='font-bold, tex, t-lg'>
              🔥 OCTOBER, 202, 5: MASSIVE, CONTENT, DROP!
            </span>
            <Sparkles, classNam, e='w-5 h-5, animat, e-pulse' />
          </div>
          <span, classNam, e='text-pink-100'>
            10, Breakthrough, Articles + 8, Revolutionary, Services
          </span>
          <Linkto='/blog'
            className='bg-white, tex, t-purple-700px-4py-1.5, rounde, d-full, fon, t-semibold, hove, r:bg-pink-50, transitio, n-colors, flex, items-center, ga, p-1, tex, t-sm'
          >
            Explore, No, w
            <ArrowRight, classNam, e='w-4 h-4' />
          </Link>
        </div>
      </div>
    </div > );
 };
export, default, NewContentAnnouncement;
