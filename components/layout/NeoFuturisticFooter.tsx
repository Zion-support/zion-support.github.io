
import React from 'react';
import { motion  } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
const contactInfo = null;
export default function NeoFuturisticFooter() {
  return (
              Productized AI, IT and micro SaaS solutions with transparent;
              pricing and fast onboarding. Built for outcomes, delivered with;
              reliability.;
            </p>;
          </div>;
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/market-pricing'>;
              <ExternalLink className='w-4 h-4' /> Market Pricing;
            </a>;
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/services'>;
              <ExternalLink className='w-4 h-4' /> Services;
            </a>;
            <a
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-300'
              href='/contact'>;
              <ExternalLink className='w-4 h-4' /> Contact;
            </a>;
            <div className='flex items-center gap-3 pt-2'>;
              <a
                aria-label='GitHub'
                href='https://github && github.com/Zion-Holdings'
                className='text-slate-400 hover:text-white'>;
                <Github className='w-5 h-5' />;
              </a>;
              <a
                aria-label='LinkedIn'

                href='https://www.linkedin.com/company/zion-tech-group/'
                className='text-slate-400 hover:text-white'
              >
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>

<div className='mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800/60 pt-6'>
          <div className='text-xs text-slate-500'>
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </div>
          <div className='text-xs text-slate-500 flex gap-4'>
            <a href='/privacy' className='hover:text-slate-300'>
              Privacy
            </a>
            <a href='/terms' className='hover:text-slate-300'>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

