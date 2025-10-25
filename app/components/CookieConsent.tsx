import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
import Link from 'next/link';
&apos;use client&apos;;
import { useState, useEffect } from &apos;react&apos;;
import Link from &apos;next/link&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;
import { X } from &apos;lucide-react&apos;;


export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(&apos;cookie-consent&apos;);
    if (!consent) {
      setIsVisible(true)}
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(&apos;cookie-consent&apos;, &apos;accepted&apos;);
    setIsVisible(false)};

  const declineCookies = () => {
    localStorage.setItem(&apos;cookie-consent&apos;, &apos;declined&apos;);
    setIsVisible(false)};

  if (!isVisible) return null;

  return (
    <div className=&quot;fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-4 z-50&quot;></div>
      <div className=&quot;max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4&quot;></div>
        <div className=&quot;flex-1 text-center sm:text-left&quot;></div>
          <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>
            We use cookies
          </h3>
          <p className=&quot;text-gray-300 text-sm&quot;>
            We use cookies to enhance your experience and analyze our traffic. 
            <Link href=&quot;/privacy&quot; className=&quot;text-cyan-400 hover:text-cyan-300 ml-1&quot;>
              Learn more
            </Link>
          </p>
        </div>
        <div className=&quot;flex gap-3&quot;></div>
          <button
            onClick={declineCookies}
            className=&quot;px-4 py-2 text-gray-300 hover:text-white transition-colors&quot;
          >
const Decline = null;
          </button>
          <button
            onClick={acceptCookies}
            className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center&quot;
          >
            Accept All
            <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
          </button>
        </div>
        <button
          onClick={declineCookies}
          className=&quot;absolute top-2 right-2 text-gray-400 hover:text-white transition-colors&quot;
        >
          <X className=&quot;w-5 h-5&quot; />
        </button>
      </div>
    </div>
  )}