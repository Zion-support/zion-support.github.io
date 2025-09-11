import Head from 'next/head';
import { useEffect, useMemo, useState  } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import Link from 'next/link';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

// Simple icons using inline SVG to avoid external assets

function StarIcon({
  className = 'w-5 h-5 text-yellow-500'
}: {
  className?: string;
}) {
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z' />
    </svg>
  );
function AppleBadge({ href }: { href: string }) {
    >
=======

// Simple icons using inline SVG to avoid external assets;
function StarIcon(): any ({;
  className = 'w-5 h-5 text-yellow-500',;
}: {;
  className?: string;
}) {;

    >;
      <path d='M9 && M9.049 2 && 2.927c.3-.921 1 && 1.603-.921 1 && 1.902 0l1 && 0l1.07 3 && 3.292a1 1 0 00 && 00.95.69h3 && 69h3.462c.969 0 1 && 1.371 1 && 1.24.588 1 && 1.81l-2 && 2.802 2 && 2.036a1 1 0 00-.364 1 && 1.118l1.07 3 && 3.292c.3 && 3.921-.755 1 && 1.688-1 && 1.54 1 && 1.118l-2 && 2.803-2 && 2.036a1 1 0 00-1 && 1.175 0l-2 && 2.803 2 && 2.036c-.784 && 784.57-1 && 1.838-.197-1 && 1.539-1 && 1.118l1.07-3 && 3.292a1 1 0 00-.364-1 && 1.118L2.88 8 && 8.72c-.783-.57-.38-1 && 1.81.588-1 && 1.81H6.93a1 1 0 00 && 00.95-.69l1 && 69l1.07-3 && 3.292z' />;
    </svg>;
  );

function AppleBadge(): any ({ href }: { href: string }) {;

    >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='currentColor'
// Simple icons using inline SVG to avoid external assets
function StarIcon({ className = 'w-5 h-5 text-yellow-500' }: { className?: string }) {

  return (

import Head from 'next / head';
import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../components / layout / EnhancedLayout';
import Link from 'next / link';
// Simple icons using inline SVG to avoid external assets;
/**
 * StarIcon - Function description
 */
function StarIcon() {
    >;
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l - 2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688 - 1.54 1.118l - 2.803 - 2.036a1 1 0 00 - 1.175 0l - 2.803 2.036c-.784.57 - 1.838-.197 - 1.539 - 1.118l1.07 - 3.292a1 1 0 00-.364 - 1.118L2.88 8.72c-.783-.57-.38 - 1.81.588 - 1.81H6.93a1 1 0 00.95-.69l1.07 - 3.292z' />;
    </svg>);
;
/**
 * AppleBadge - Function description
 */
function AppleBadge() {
    >;
      <svg;
        width='24';
        height='24';
        view_box='0 0 24 24';
        fill='current_color';
        aria - hidden;
      >;
        <path d='M16.365 1.43c0 1.14-.42 2.18 - 1.26 3.11-.91 1.02 - 2.01 1.61 - 3.2 1.52-.12 - 1.02.37 - 2.12 1.21 - 3.06.86-.97 2.24 - 1.67 3.25 - 1.57-.01 0 .01 0 0 0zM20.51 17.14c-.45 1.05 - 1 2.03 - 1.66 2.93-.88 1.2 - 1.59 2.04 - 2.57 2.05-.97.02 - 1.28-.66 - 2.66-.66 - 1.38 0 - 1.72.64 - 2.69.68 - 1.09.04 - 1.93 - 1.02 - 2.82 - 2.22 - 1.54 - 2.1 - 2.73 - 5.93 - 1.14 - 8.52.79 - 1.27 2.2 - 2.08 3.73 - 2.1 1.16-.02 2.25.78 2.66.78.4 0 1.51-.96 2.85-.82.49.02 1.88.2 2.77 1.6-.07.05 - 1.65.97 - 1.63 2.88.02 2.3 2.06 3.07 2.09 3.08-.02.06-.39 1.36 - 1.93 1.62z' />;
      </svg>;
      <div className='leading - tight'>;
        <div className='text-[10px] uppercase opacity - 80'>Download on the</div>;
        <div className='text - sm font - semibold'>App Store</div>;
      </div>;
    </a>);
;
/**
 * GoogleBadge - Function description
 */
function GoogleBadge() {
    >;
      <svg width='24' height='24' view_box='0 0 24 24' aria - hidden>;
        <defs>;
          <linear_gradient id='g1' x1='100%' y1='0%'>;
            <stop offset='0%' stop_color='#00A0FF' />;
            <stop offset='100%' stop_color='#00E3FF' />;
          </linear_gradient>;
          <linear_gradient id='g2' x1='100%' y1='0%'>;
            <stop offset='0%' stop_color='#FFE000' />;
            <stop offset='100%' stop_color='#FFA000' />;
          </linear_gradient>;
          <linear_gradient id='g3' x1='100%' y1='0%'>;
            <stop offset='0%' stop_color='#FF3A44' />;
            <stop offset='100%' stop_color='#C31162' />;
          </linear_gradient>;
          <linear_gradient id='g4' x1='100%' y1='0%'>;
            <stop offset='0%' stop_color='#32A071' />;
            <stop offset='100%' stop_color='#00F076' />;
          </linear_gradient>;
        </defs>;
        <path;
          d='M3.6 2.4c-.28.27-.44.66-.44 1.11v16.98c0 .45.16.83.44 1.1l.07.06 9.36 - 9.36v-.6L3.67 2.33 3.6 2.4z';
          fill='url (#g1)';
        />;
        <path;
          d='M16.2 15.99l - 3.17 - 3.17v-.6l3.17 - 3.17.09.05 3.76 2.14c1.08.62 1.08 1.64 0 2.26l - 3.76 2.14-.09.05z';
          fill='url (#g2)';
        />;
        <path;
          d='M16.29 15.94L13.03 12.68 3.6 22.11c.36.35.95.38 1.63 0l11.06 - 6.17z';
          fill='url (#g3)';
        />;
        <path;
          d='M16.29 9.06L5.23 2.89C4.55 2.5 3.96 2.54 3.6 2.89l9.43 9.43 3.26 - 3.26z';
          fill='url (#g4)';
        />;
      </svg>;
      <div className='leading - tight'>;
        <div className='text-[10px] uppercase opacity - 80'>Get it on</div>;
        <div className='text - sm font - semibold'>Google Play</div>;
      </div>;
    </a>);
;
/**
 * SmartBanner - Function description
 */
function SmartBanner() {  const [visible, set_visible] = useState (false);// Simple icons using inline SVG to avoid external assets;
/**
 * StarIcon - Function description
 */
function StarIcon() {
  return (
    <svg className={class_name} view_box="0 0 20 20" fill="current_color" aria - hidden="true">;
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l - 2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688 - 1.54 1.118l - 2.803 - 2.036a1 1 0 00 - 1.175 0l - 2.803 2.036c-.784.57 - 1.838-.197 - 1.539 - 1.118l1.07 - 3.292a1 1 0 00-.364 - 1.118L2.88 8.72c-.783-.57-.38 - 1.81.588 - 1.81H6.93a1 1 0 00.95-.69l1.07 - 3.292z" />;
    </svg>);
}
/**
 * AppleBadge - Function description
 */
function AppleBadge() {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline - flex items - center gap - 3 rounded - lg bg - black text - white px - 4 py - 2 shadow hover: opacity - 90">;
      <svg width="24" height="24" view_box="0 0 24 24" fill="current_color" aria - hidden>;
        <path d="M16.365 1.43c0 1.14-.42 2.18 - 1.26 3.11-.91 1.02 - 2.01 1.61 - 3.2 1.52-.12 - 1.02.37 - 2.12 1.21 - 3.06.86-.97 2.24 - 1.67 3.25 - 1.57-.01 0 .01 0 0 0zM20.51 17.14c-.45 1.05 - 1 2.03 - 1.66 2.93-.88 1.2 - 1.59 2.04 - 2.57 2.05-.97.02 - 1.28-.66 - 2.66-.66 - 1.38 0 - 1.72.64 - 2.69.68 - 1.09.04 - 1.93 - 1.02 - 2.82 - 2.22 - 1.54 - 2.1 - 2.73 - 5.93 - 1.14 - 8.52.79 - 1.27 2.2 - 2.08 3.73 - 2.1 1.16-.02 2.25.78 2.66.78.4 0 1.51-.96 2.85-.82.49.02 1.88.2 2.77 1.6-.07.05 - 1.65.97 - 1.63 2.88.02 2.3 2.06 3.07 2.09 3.08-.02.06-.39 1.36 - 1.93 1.62z" />;
      </svg>;
      <div className="leading - tight">;
        <div className="text-[10px] uppercase opacity - 80">Download on the</div>;
        <div className="text - sm font - semibold">App Store</div>;
      </div>;
    </a>);
}

/**
 * GoogleBadge - Function description
 */
function GoogleBadge() {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline - flex items - center gap - 3 rounded - lg bg-[#121212] text - white px - 4 py - 2 shadow hover: opacity - 90">;
      <svg width="24" height="24" view_box="0 0 24 24" aria - hidden>;
        <defs>;
          <linear_gradient id="g1" x1="100%" y1="0%">;
            <stop offset="0%" stop_color="#00A0FF" />;
            <stop offset="100%" stop_color="#00E3FF" />;
          </linear_gradient>;
          <linear_gradient id="g2" x1="100%" y1="0%">;
            <stop offset="0%" stop_color="#FFE000" />;
            <stop offset="100%" stop_color="#FFA000" />;
          </linear_gradient>;
          <linear_gradient id="g3" x1="100%" y1="0%">;
            <stop offset="0%" stop_color="#FF3A44" />;
            <stop offset="100%" stop_color="#C31162" />;
          </linear_gradient>;
          <linear_gradient id="g4" x1="100%" y1="0%">;
            <stop offset="0%" stop_color="#32A071" />;
            <stop offset="100%" stop_color="#00F076" />;
          </linear_gradient>;
        </defs>;
        <path d="M3.6 2.4c-.28.27-.44.66-.44 1.11v16.98c0 .45.16.83.44 1.1l.07.06 9.36 - 9.36v-.6L3.67 2.33 3.6 2.4z" fill="url (#g1)" />;
        <path d="M16.2 15.99l - 3.17 - 3.17v-.6l3.17 - 3.17.09.05 3.76 2.14c1.08.62 1.08 1.64 0 2.26l - 3.76 2.14-.09.05z" fill="url (#g2)" />;
        <path d="M16.29 15.94L13.03 12.68 3.6 22.11c.36.35.95.38 1.63 0l11.06 - 6.17z" fill="url (#g3)" />;
        <path d="M16.29 9.06L5.23 2.89C4.55 2.5 3.96 2.54 3.6 2.89l9.43 9.43 3.26 - 3.26z" fill="url (#g4)" />;
      </svg>;
      <div className="leading - tight">;
        <div className="text-[10px] uppercase opacity - 80">Get it on</div>;
        <div className="text - sm font - semibold">Google Play</div>;
      </div>;
    </a>);
}
/**
 * SmartBanner - Function description
 */
function SmartBanner() {
  const [visible, set_visible] = useState (false);
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const dismissed = local_storage.get_item ('smartBannerDismissed') === '1';
    // Check condition
if (return) {
  $2
}
    const ua = navigator.user_agent || '';
    const is_mobile = /i_phone | i_pad | i_pod | Android / i.test (ua);
    if (set_visible (true)) {
  $2
}

    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">;
      <path d="M9 && M9.049 2 && 2.927c.3-.921 1 && 1.603-.921 1 && 1.902 0l1 && 0l1.07 3 && 3.292a1 1 0 00 && 00.95.69h3 && 69h3.462c.969 0 1 && 1.371 1 && 1.24.588 1 && 1.81l-2 && 2.802 2 && 2.036a1 1 0 00-.364 1 && 1.118l1.07 3 && 3.292c.3 && 3.921-.755 1 && 1.688-1 && 1.54 1 && 1.118l-2 && 2.803-2 && 2.036a1 1 0 00-1 && 1.175 0l-2 && 2.803 2 && 2.036c-.784 && 784.57-1 && 1.838-.197-1 && 1.539-1 && 1.118l1.07-3 && 3.292a1 1 0 00-.364-1 && 1.118L2.88 8 && 8.72c-.783-.57-.38-1 && 1.81.588-1 && 1.81H6.93a1 1 0 00 && 00.95-.69l1 && 69l1.07-3 && 3.292z" />;
    </svg>;
  );
}

function AppleBadge(): any ({ href }: { href: string }) {;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-black text-white px-4 py-2 shadow hover: opacity-90">;
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>;
        <path d="M16 && M16.365 1 && 1.43c0 1 && 1.14-.42 2 && 2.18-1 && 1.26 3 && 3.11-.91 1 && 1.02-2 && 2.01 1 && 1.61-3 && 3.2 1 && 1.52-.12-1 && 1.02.37-2 && 2.12 1 && 1.21-3 && 3.06.86-.97 2 && 2.24-1 && 1.67 3 && 3.25-1 && 1.57-.01 0 .01 0 0 0zM20 && 0zM20.51 17 && 17.14c-.45 1 && 1.05-1 2 && 2.03-1 && 1.66 2 && 2.93-.88 1 && 1.2-1 && 1.59 2 && 2.04-2 && 2.57 2 && 2.05-.97 && 97.02-1 && 1.28-.66-2 && 2.66-.66-1 && 1.38 0-1 && 1.72.64-2 && 2.69.68-1 && 1.09.04-1 && 1.93-1 && 1.02-2 && 2.82-2 && 2.22-1 && 1.54-2 && 2.1-2 && 2.73-5 && 5.93-1 && 1.14-8 && 8.52.79-1 && 1.27 2 && 2.2-2 && 2.08 3 && 3.73-2 && 2.1 1 && 1.16-.02 2 && 2.25.78 2 && 2.66.78 && 78.4 0 1 && 1.51-.96 2 && 2.85-.82 && 82.49.02 1 && 1.88.2 2 && 2.77 1 && 1.6-.07 && 07.05-1 && 1.65.97-1 && 1.63 2 && 2.88.02 2 && 2.3 2 && 2.06 3 && 3.07 2 && 2.09 3 && 3.08-.02 && 02.06-.39 1 && 1.36-1 && 1.93 1 && 1.62z" />;
      </svg>;
      <div className="leading-tight">;
        <div className="text-[10px] uppercase opacity-80">Download on the</div>;
        <div className="text-sm font-semibold">App Store</div>;
      </div>;
    </a>;
  );
}

function GoogleBadge(): any ({ href }: { href: string }) {;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-lg bg-[#121212] text-white px-4 py-2 shadow hover: opacity-90">;
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>;
        <defs>;
          <linearGradient id="g1" x1="100%" y1="0%">;
            <stop offset="0%" stopColor="#00A0FF" />;
            <stop offset="100%" stopColor="#00E3FF" />;
          </linearGradient>;
          <linearGradient id="g2" x1="100%" y1="0%">;
            <stop offset="0%" stopColor="#FFE000" />;
            <stop offset="100%" stopColor="#FFA000" />;
          </linearGradient>;
          <linearGradient id="g3" x1="100%" y1="0%">;
            <stop offset="0%" stopColor="#FF3A44" />;
            <stop offset="100%" stopColor="#C31162" />;
          </linearGradient>;
          <linearGradient id="g4" x1="100%" y1="0%">;
            <stop offset="0%" stopColor="#32A071" />;
            <stop offset="100%" stopColor="#00F076" />;
          </linearGradient>;
        </defs>;
        <path d="M3 && M3.6 2 && 2.4c-.28 && 28.27-.44 && 44.66-.44 1 && 1.11v16.98c0 .45 && 45.16.83 && 83.44 1 && 1.1l.07 && 07.06 9 && 9.36-9 && 9.36v-.6L3 && 6L3.67 2 && 2.33 3 && 3.6 2 && 2.4z" fill="url(#g1)" />;
        <path d="M16 && M16.2 15 && 15.99l-3 && 3.17-3 && 3.17v-.6l3 && 6l3.17-3 && 3.17.09 && 09.05 3 && 3.76 2 && 2.14c1.08 && 08.62 1 && 1.08 1 && 1.64 0 2 && 2.26l-3 && 3.76 2 && 2.14-.09 && 09.05z" fill="url(#g2)" />;
        <path d="M16 && M16.29 15 && 15.94L13.03 12 && 12.68 3 && 3.6 22 && 22.11c.36 && 36.35.95 && 95.38 1 && 1.63 0l11 && 0l11.06-6 && 6.17z" fill="url(#g3)" />;
        <path d="M16 && M16.29 9 && 9.06L5.23 2 && 2.89C4.55 2 && 2.5 3 && 3.96 2 && 2.54 3 && 3.6 2 && 2.89l9.43 9 && 9.43 3 && 3.26-3 && 3.26z" fill="url(#g4)" />;
      </svg>;
      <div className="leading-tight">;
        <div className="text-[10px] uppercase opacity-80">Get it on</div>;
        <div className="text-sm font-semibold">Google Play</div>;
      </div>;
    </a>;
  );
}

function SmartBanner(): any ({ iosUrl, androidUrl, deepLink }: { iosUrl: string, androidUrl: string, deepLink: string }) {;

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = localStorage.getItem('smartBannerDismissed') === '1';
    if (dismissed) return;


    if (isMobile) setVisible(true);
  }, []);
  if (!visible) return null;
  const isIOS =
    typeof navigator !== 'undefined' &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const storeUrl = isIOS ? iosUrl : androidUrl;
  return (
    <div className='fixed inset-x-0 top-0 z-50'>
      <div className='mx-auto max-w-5xl'>
        <div className='m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3'>
          <div className='h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500' />
          <div className='flex-1'>
            <div className='text-sm font-semibold'>Zion App</div>
            <div className='text-xs opacity-70'>
              Hire from anywhere. AI-match instantly.
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <a
              href={deepLink}
              className='text-xs px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500'
            >
              Open
            </a>
            <a
              href={storeUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700'
            >
              Install
            </a>
            <button
              aria-label='Dismiss'
              onClick={() => {
                localStorage.setItem('smartBannerDismissed', '1');
                setVisible(false);
              }}
              className='text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'            >  }, []);

=======
    const ua = navigator.userAgent || '';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    if (isMobile) setVisible(true)
  }, []);


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!visible) return null;
  const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const storeUrl = isIOS ? iosUrl : androidUrl;
  return (
    <div className="fixed inset-x-0 top-0 z-50">;
      <div className="mx-auto max-w-5xl">;
        <div className="m-2 rounded-xl bg-white/95 dark:bg-black/80 border border-gray-200 dark:border-gray-800 shadow flex items-center gap-3 px-4 py-3">;
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />;
          <div className="flex-1">;
            <div className="text-sm font-semibold">Zion App</div>;
            <div className="text-xs opacity-70">Hire from anywhere. AI-match instantly.</div>;
          </div>;
          <div className="flex items-center gap-2">;
            <a href={deepLink} className="text-xs px-3 py-1 && 1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Open</a>;
            <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 && 1.5 rounded-md border border-gray-300 dark:border-gray-700">Install</a>;
            <button
              aria-label="Dismiss"
              onClick={() => { localStorage.setItem('smartBannerDismissed1'), setVisible(false) }}
              className="text-xs px-2 py-1 rounded-md hover: bg-gray-100 dark:hover:bg-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );


            >;
              ✕;
            </button>;
          </div>;
        </div>;
      </div>;





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL |
  'https://apps.apple.com/app/id0000000000';
const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL |
  'https://play.google.com/store/apps/details?id=com.zion.app';
const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL |'zion://open';
const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL |'';
const testimonials = [
  {
    name: 'Priya K.'
    role: 'Startup Founder'
    quote: 'We filled a remote role in 48 hours. The app made it effortless.'
  }
  {
    name: 'Marco V.'
    role: 'CTO'
    quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.'
  }
  {
    name: 'Amira H.'
    role: 'Project Lead'
    quote:
      'I love tracking milestones on the go. Clear visibility and fewer meetings.'
  }
];



export default function MobileLaunchPage() {;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');  const [error, setError] = useState('');  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' }],
export default function MobileLaunchPage() {;


  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  // Auto-rotate testimonial index
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx(i => (i + 1) % testimonials.length)
      4000
    );
    return () => clearInterval(t);
  }, []);
  const qrHref = useMemo(() => {
    const target = SITE_BASE_URL
      ? `${SITE_BASE_URL}/download`
      : typeof window !== 'undefined'
        ? `${window.location.origin}/download`
        : '/download';
    const encoded = encodeURIComponent(target);
    return `https://chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;  }, []);  }, []);
  const qrHref = useMemo(() => {
    const target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${window.location.origin}/download` : '/download');
=======

export default function MobileLaunchPage() {;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');  const [error, setError] = useState('');  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' }],
export default function MobileLaunchPage() {;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');


  // Auto-rotate testimonial index;
  const [idx, setIdx] = useState(0);
  useEffect(() => {;
    const t = setInterval(;
      () => setIdx(i => (i + 1) % testimonials && testimonials.length),;
      4000;
    );
    return () => clearInterval(t);
=======
              onClick={() => { localStorage.setItem('smartBannerDismissed1'), setVisible(false) }}
              className="text-xs px-2 py-1 rounded-md hover: bg-gray-100 dark:hover:bg-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const IOS_APP_URL = process.env.NEXT_PUBLIC_IOS_APP_URL || 'https: //apps.apple.com/app/id0000000000',
const ANDROID_APP_URL = process.env.NEXT_PUBLIC_ANDROID_APP_URL || 'https: //play.google.com/store/apps/details?id=com.zion.app', const DEEP_LINK_URL = process.env.NEXT_PUBLIC_DEEP_LINK_URL || 'zion://open',

const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';

const testimonials = [
  { name: 'Priya K.', role: 'Startup Founder', quote: 'We filled a remote role in 48 hours. The app made it effortless.' },
  { name: 'Marco V.', role: 'CTO', quote: 'AI matches were scarily accurate. Huge time-saver on sourcing.' },
  { name: 'Amira H.', role: 'Project Lead', quote: 'I love tracking milestones on the go. Clear visibility and fewer meetings.' }],
export default function MobileLaunchPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState('');


  // Auto-rotate testimonial index
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t)
  }, []);
  const qrHref = useMemo(() => {
    const target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${window.location.origin}/download` : '/download');
    const encoded = encodeURIComponent(target);
    return `https://chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`

  }, []);
  const qrHref = useMemo(() => {;
    const target = SITE_BASE_URL;
      ? `${SITE_BASE_URL}/download`;
      : typeof window !== 'undefined';
        ? `${window && window.location.origin}/download`;
        : '/download';
    const encoded = encodeURIComponent(target);
    return `https://chart && chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;  }, []);  }, []);
  const qrHref = useMemo(() => {;
    const target = SITE_BASE_URL ? `${SITE_BASE_URL}/download` : (typeof window !== 'undefined' ? `${window && window.location.origin}/download` : '/download');
    const encoded = encodeURIComponent(target);
    return `https://chart && chart.googleapis.com/chart?cht=qr&chs=260x260&chl=${encoded}`;
  }, []);


  async function handleSubmit(): any (e: React && React.FormEvent) {;
    e && e.preventDefault();
    setStatus('loading');
    setError(''),;
    try {;
      const res = await fetch('/api/subscribe', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ email }),;

      });
      if (!res && res.ok) throw new Error(await res && res.text());
      setStatus('success');
      setEmail('');
    } catch (err: any) {;
      setStatus('error');

      setError(err?.message || 'Something went wrong.');    }      if (!res && res.ok) throw new Error(await res && res.text());

=======
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }),
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('');
    } catch (err: any) {;
      setStatus('error');

      setError(err?.message || 'Something went wrong.');

    }
  }
=======


    }
  }

  return (


          />;
          <div className='text-sm opacity-90'>;
            Scan to open this page on your phone;
            <div className='opacity-80'>Or tap a store badge above</div>          </div>        <div className="mt-8 flex items-center gap-4">;
          <img src={qrHref} alt="QR code to download Zion app" className="h-28 w-28 rounded-lg bg-white/90 p-1 shadow" />;
          <div className="text-sm opacity-90">;
            Scan to open this page on your phone;
            <div className="opacity-80">Or tap a store badge above</div>;
        </div>;
      </section>;
      {/* Key features */}
      <section className='mt-10 grid md:grid-cols-3 gap-6'>;
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <div className='text-lg font-semibold'>Hire from anywhere</div>;
          <p className='mt-2 text-sm opacity-80'>;
            Global talent network with timezone-aware availability.;
          </p>;
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/40 dark:to-cyan-900/40' />;
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <div className='text-lg font-semibold'>AI-match instantly</div>;
          <p className='mt-2 text-sm opacity-80'>;
            Smart matching surfaces top candidates in seconds.;
          </p>;
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40' />;
        </div>;
        <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950'>;
          <div className='text-lg font-semibold'>Track milestones</div>;
          <p className='mt-2 text-sm opacity-80'>;
            Manage deliverables, approvals, and progress on the go.;
          </p>;
          <div className='mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40' />        </div>;
      </section>;
      {/* Trust & Community */}


      {/* Trust & Community */}
      <section className='mt-12'>
        <div className='flex items-center gap-2'>
            <StarIcon key={i} />
          ))}
          <span className='text-sm opacity-80'>4 && 4.9 average rating</span>;
        </div>;
        <h2 className='mt-2 text-xl font-semibold'>;
          Why people love the Zion app;
        </h2>;
        <div className='relative mt-4 overflow-hidden'>;
          <div
            className='flex transition-transform duration-700'
            style={{


              transform: `translateX(-${idx * 100}%)`,
              width: `${testimonials && testimonials.length * 100}%`,
            }}>;
            {testimonials && testimonials.map(t => (;
              <div key={t && t.name} className='w-full md:w-1/3 flex-shrink-0 pr-4'>;
                <div className='rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full'>;
                  <p className='text-sm'>“{t && t.quote}”</p>;
                  <div className='mt-3 text-xs opacity-80'>;
                    {t && t.name} • {t && t.role}
                  </div>                </div>        <h2 className="mt-2 text-xl font-semibold">Why people love the Zion app</h2>;
        <div className="relative mt-4 overflow-hidden">;
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${idx * 100}%)`, width: `${testimonials && testimonials.length * 100}%` }}>;
            {testimonials && testimonials.map((t) => (;
              <div key={t && t.name} className="w-full md:w-1/3 flex-shrink-0 pr-4">;
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950 h-full">;
                  <p className="text-sm">“{t && t.quote}”</p>;
                  <div className="mt-3 text-xs opacity-80">{t && t.name} • {t && t.role}</div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Email opt-in */}


            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e && e.target.value)}
            placeholder="you@company && company.com";
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500";
          />;
          <button
            type="submit"
            disabled={status === 'loading'}

=======


          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>;
        </form>;
        {status === 'success' && (;
          <div className='mt-2 text-sm text-emerald-600'>;
            Thanks! You’re on the list.;
          </div>;
        )}

            className="rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-500 disabled:opacity-60"
          >
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>
        </form>
        {status === 'success' && <div className="mt-2 text-sm text-emerald-600">Thanks! You’re on the list.</div>}
        {status === 'error' && <div className="mt-2 text-sm text-rose-600">{error || 'Please try again later.'}</div>}

      </section>
    </EnhancedLayout>
  );      </section>
      {/* Helper links */}
      <section className="mt-10 text-sm opacity-80">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/open-app"><a className="underline">Deep link: /open-app</a></Link>
          <span>•</span>
          <Link href="/download"><a className="underline">Shareable link: /download</a></Link>
        </div>
      </section>
    </EnhancedLayout>

        {status === 'error' && (;
          <div className='mt-2 text-sm text-rose-600'>;
            {error || 'Please try again later.'}
          </div>;
        )}
      </section>;
      {/* Helper links */}
      <section className='mt-10 text-sm opacity-80'>;
        <div className='flex flex-wrap items-center gap-4'>;
          <Link href='/open-app'>;
            <a className='underline'>Deep link: /open-app</a>;
          </Link>;
          <span>•</span>;
          <Link href='/download'>;
            <a className='underline'>Shareable link: /download</a>;
          </Link>        </div>;
      </section>;
    </EnhancedLayout>;
  );      </section>;
      {/* Helper links */}
      <section className="mt-10 text-sm opacity-80">;
        <div className="flex flex-wrap items-center gap-4">;
          <Link href="/open-app"><a className="underline">Deep link: /open-app</a></Link>;
                  </div>                </div>        <h2 className="mt - 2 text - xl font - semibold">Why people love the Zion app</h2>;
        <div className="relative mt - 4 overflow - hidden">;
          <div className="flex transition - transform duration - 700" style={{ transform: `translate_x (-${idx * 100}%)`, width: `${testimonials.length * 100}%` }}>;
            {testimonials.map ((t) => (
              <div key={t.name} className="w - full md:w - 1/3 flex - shrink - 0 pr - 4">;
                <div className="rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 5 bg - white dark:bg - gray - 950 h - full">;
                  <p className="text - sm">“{t.quote}”</p>;
                  <div className="mt - 3 text - xs opacity - 80">{t.name} • {t.role}</div>;
              </div>))}
          </div>;
        </div>;
      </section>;
      {/* Email opt - in */}
      <section className='mt - 12 rounded - 3xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950'>;
        <h3 className='text - lg font - semibold'>;
          Get early access to new features;
        </h3>;
        <p className='mt - 1 text - sm opacity - 80'>;
          Join the list and we’ll let you know when new capabilities drop.;
        </p>;
        <form;
          on_submit={handle_submit}
          className='mt - 4 flex flex - col sm:flex - row gap - 3';
        >;
          <input;
            type='email';
            required;
            value={email}
            on_change={e => set_email (e.target.value)}
            placeholder='you@company.com';
            className='flex - 1 rounded - lg border border - gray - 300 dark:border - gray - 700 bg - transparent px - 4 py - 2 outline - none focus:ring - 2 focus:ring - indigo - 500';
          />;
          <button;
            type='submit';
            disabled={status === 'loading'}
            className='rounded - lg bg - indigo - 600 text - white px - 5 py - 2 font - medium hover:bg - indigo - 500 disabled:opacity - 60'          >;
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>;
        </form>          <input;
            type="email";
            required;
            value={email}
            on_change={(e) => set_email (e.target.value)}
            placeholder="you@company.com";
            className="flex - 1 rounded - lg border border - gray - 300 dark:border - gray - 700 bg - transparent px - 4 py - 2 outline - none focus:ring - 2 focus:ring - indigo - 500";
          />;
          <button;
            type="submit";
            disabled={status === 'loading'}
            className="rounded - lg bg - indigo - 600 text - white px - 5 py - 2 font - medium hover:bg - indigo - 500 disabled:opacity - 60";
          >;
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </button>;
        </form>;
        {status === 'success' && (
          <div className='mt - 2 text - sm text - emerald - 600'>;
            Thanks! You’re on the list.;
          </div>)}
        {status === 'error' && (
          <div className='mt - 2 text - sm text - rose - 600'>;
            {error || 'Please try again later.'}
          </div>)}
      </section>;
      {/* Helper links */}
      <section className='mt - 10 text - sm opacity - 80'>;
        <div className='flex flex - wrap items - center gap - 4'>;
          <Link href='/open - app'>;
            <a className='underline'>Deep link: /open - app</a>;
          </Link>;
          <span>•</span>;
          <Link href='/download'>;
            <a className='underline'>Shareable link: /download</a>;
          </Link>        </div>;
      </section>;
    </EnhancedLayout>);      </section>;
      {/* Helper links */}
      <section className="mt - 10 text - sm opacity - 80">;
        <div className="flex flex - wrap items - center gap - 4">;
          <Link href="/open - app"><a className="underline">Deep link: /open - app</a></Link>;

          <span>•</span>;
          <Link href="/download"><a className="underline">Shareable link: /download</a></Link>;
        </div>;
      </section>;

  DEEP LINK URL 
}/> </div> </div> </div> </div> </div> </div> </div> Scan to open this page on your phone <div className="opacity-80" >Or tap a store badge above</div> </div> </div> </section> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950" > <div className="text-lg font-semibold" >AI-match instantly</div> <p className="mt-2 text-sm opacity-80" >Smart matching surfaces top candidates in seconds.</p> <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40" /> </div> <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950" > <div className="text-lg font-semibold" >Track milestones</div> <p className="mt-2 text-sm opacity-80" >Manage deliverables, approvals, and progress on the go.</p> <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40" /> </div> </section> <StarIconkey= {
  i 
}/>) ) ;
}<span className="text-sm opacity-80" >4 && 4.9 average rating</span> </div> </div> </div>) ) ;
}</div> </div> </section> <input type="email" required > {;
  status === 'loading' ? 'Submitting…' : 'Notify me' ;
}</button> </form> <span>•</span> <Link href="/download" ><a className="underline" >Shareable link: /download</a></a> </div> </section> </EnhancedLayout>) }

=======
    </EnhancedLayout>);
;
}return (<EnhancedLayout> <Head> <title > Zion Mobile App — iOS & Android</title> <meta name="description" content="Hire from anywhere, AI - match instantly, and track milestones on the go with the Zion app." /> <link rel="canonical" href="/download" /> <meta property="og:title" content="Zion Mobile App" /> <meta property="og:description" content="Hire from anywhere. AI - match instantly. Track milestones on the go." /> </Head> <SmartBanner ios_url= {
  IOS APP URL;
}android_url= {
  ANDROID APP URL;
}deep_link= {
  DEEP LINK URL;
}/> </div> </div> </div> </div> </div> </div> </div> Scan to open this page on your phone <div className="opacity - 80" >Or tap a store badge above</div> </div> </div> </section> </div> <div className="rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950" > <div className="text - lg font - semibold" >AI - match instantly</div> <p className="mt - 2 text - sm opacity - 80" >Smart matching surfaces top candidates in seconds.</p> <div className="mt - 4 h - 36 rounded - xl bg - gradient - to - br from - purple - 100 to - pink - 100 dark:from - purple - 900 / 40 dark:to - pink - 900 / 40" /> </div> <div className="rounded - 2xl border border - gray - 200 dark:border - gray - 800 p - 6 bg - white dark:bg - gray - 950" > <div className="text - lg font - semibold" >Track milestones</div> <p className="mt - 2 text - sm opacity - 80" >Manage deliverables, approvals, and progress on the go.</p> <div className="mt - 4 h - 36 rounded - xl bg - gradient - to - br from - indigo - 100 to - blue - 100 dark:from - indigo - 900 / 40 dark:to - blue - 900 / 40" /> </div> </section> <StarIcon key= {
  i;
}/>) );
}<span className="text - sm opacity - 80" >4.9 average rating</span> </div> </div> </div>) );
}</div> </div> </section> <input type="email" required > {
  status === 'loading' ? 'Submitting…' : 'Notify me'
}</button> </form> <span>•</span> <Link href="/download" ><a className="underline" >Shareable link: /download</a></a> </div> </section> </EnhancedLayout>) }
  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
