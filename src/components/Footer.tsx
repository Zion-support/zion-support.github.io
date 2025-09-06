import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';
import { FeedbackWidget } from './feedback/FeedbackWidget';

function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === '' || envVar === '#' || envVar === '/') {
    return fallback;
  }
  return envVar;
}

const TWITTER_URL = resolveUrl(process.env.NEXT_PUBLIC_TWITTER_URL, 'https://twitter.com/ziontechgroup');
const LINKEDIN_URL = resolveUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL, 'https://linkedin.com/company/ziontechgroup');
const FACEBOOK_URL = resolveUrl(process.env.NEXT_PUBLIC_FACEBOOK_URL, 'https://facebook.com/ziontechgroup');
const INSTAGRAM_URL = resolveUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL, 'https://instagram.com/ziontechgroup');
const GITHUB_URL = resolveUrl(process.env.NEXT_PUBLIC_GITHUB_URL, 'https://github.com/ziontechgroup');

export function Footer() {
  return (
    <footer className='bg-card border-t border-primary/20 pt-12 pb-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>Z</span>
              </div>
              <span className='text-xl font-bold text-foreground'>Zion Tech Group</span>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Empowering businesses with cutting-edge technology solutions and innovative AI services.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a
                href={TWITTER_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
              >
                <Twitter className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Twitter</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
              >
                <Linkedin className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>LinkedIn</span>
              </a>
              <a
                href={FACEBOOK_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
              >
                <Facebook className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
              >
                <Instagram className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Instagram</span>
              </a>
              <a
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/80 hover:text-primary transition-colors'
              >
                <Github className='h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>GitHub</span>
              </a>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/services' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href='/services' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  Micro SaaS Products
                </Link>
              </li>
              <li>
                <Link href='/services' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  IT Services
                </Link>
              </li>
              <li>
                <Link href='/services' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/about' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  Contact
                </Link>
              </li>
              <li>
                <Link href='/pricing' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href='/blog' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>Newsletter</h3>
            <p className='text-muted-foreground text-sm'>
              Stay updated with our latest news and offers.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        <div className='border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-muted-foreground text-sm'>
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className='flex space-x-6 mt-4 sm:mt-0'>
            <Link href='/privacy' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='text-muted-foreground hover:text-primary transition-colors text-sm'>
              Terms of Service
            </Link>
          </div>
        </div>

        <div className='mt-6 flex justify-center'>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm'
          >
            <ChevronUp className='h-4 w-4' />
            <span>Back to top</span>
          </button>
        </div>

        <FeedbackWidget />
      </div>
    </footer>
  );
}