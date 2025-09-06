{quickLinks.map((link, index) => (
            <Link
import React from 'react';
import Link from 'next / link';
import { use_translation } from 'react - i18next';
import { cn } from '@/lib / utils';
import {
  ArrowRight,
  Search,
  Users,
  Briefcase,
  Settings,
  MessageSquare,
  Smartphone,
} from 'lucide-react';
interface QuickAccessProps {
  class_name?: string;
  style?: React.CSSProperties;
export /**
 * QuickAccess - Function description
 */
function QuickAccess() {
  const { t } = use_translation ();
  const quick_links = [;
    {
      title: t ('home.tool_ai_matcher'),
      description: t ('home.tool_ai_matcher_desc'),
      icon: <Search className='h - 6 w - 6 text - zion - cyan' />,
      link: '/marketplace',
    },
    {
      title: t ('home.tool_talent'),
      description: t ('home.tool_talent_desc'),
      icon: <Users className='h - 6 w - 6 text - zion - purple' />,
      link: '/talent',
    },
    {
      title: t ('home.tool_services'),
      description: t ('home.tool_services_desc'),
      icon: <Briefcase className='h - 6 w - 6 text - zion - cyan' />,
      link: '/services',
    },
    {
      title: t ('home.tool_equipment'),
      description: t ('home.tool_equipment_desc'),
      icon: <Settings className='h - 6 w - 6 text - zion - purple' />,
      link: '/equipment',
    },
    {
      title: t ('nav.community'),
      description: t ('home.tool_chat_desc'),
      icon: <MessageSquare className='h - 6 w - 6 text - zion - cyan' />,
      link: '/community',
    },
    {
      title: t ('home.tool_mobile_app', 'Mobile App'),
      description: t ('home.tool_mobile_app_desc', 'Zion on the go'),
      icon: <Smartphone className='h - 6 w - 6 text - zion - purple' />,
      link: '/mobile - launch',
    },
  ];
  return (
    <section className={cn ('py - 12 bg - zion - blue - dark', class_name)} style={style}>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 8'>;
          <h2 className='text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 2'>;
            {t ('home.quick_access_title', 'Quick Access')}
          </h2>;
          <p className='text - zion - slate - light text - lg'>;
            {t (
              'home.quick_access_subtitle',
              'Jump directly to our most popular features')}
          </p>;
        </div>;
        <div className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 max - w-6xl mx - auto'>;
          {quick_links.map ((link, index) => (
            <Link;
              key={index}
              href={link.link}



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


import { motion  } from 'framer-motion';
export default function Page() {";
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },";
    { name: "Innovation", count: 10, color: "from-green-500 to-teal-500" },";
    { name: "Business", count: 14, color: "from-indigo-500 to-purple-500" };      scale: 1,




                  to={link && link.path}`
                  className={`inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${link && link.color} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25`}>;
                  Explore {link && link.title}";
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />                </Link>;
              </motion && motion.div>;
            </motion && motion.div>;


export default QuickAccess;
;






  { opacity: 0,
  scale: 0.8;
}}
                      whileInView = {
  { opacity: 1,
  scale: 1;
}}
                      transition = {
  { duration: 0.4,
  delay: 0.2 + idx * 0.1;
}}
                      viewport={{ once: true }}";
                      className="text - center">";
                      <div className="text - lg font - bold text - zion - cyan">{value}</div>";
                      <div className="text - xs text - gray - 500 capitalize">{key}</div>;
                    </motion.div>))}
                </div>;
              </div>;
              {/* CTA */}
              <motion.div;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}";
                className="mt - auto">;
                <Link;
                  to={link.path}`;
                  className={`inline - flex items - center justify - center w - full px - 4 py - 3 bg - gradient - to - r ${link.color} text - white font - semibold rounded - lg transition - all duration - 300 hover:shadow - lg hover:shadow - zion - cyan / 25`}
                >;
                  Explore {link.title}";
                  <ChevronRight className="w - 4 h - 4 ml - 2 group - hover:translate - x-1 transition - transform"  />                </Link>;
              </motion.div>;
            </motion.div>))}
        </div>;
      </div>;
    </section>);
export default QuickAccess }
export default QuickAccess;