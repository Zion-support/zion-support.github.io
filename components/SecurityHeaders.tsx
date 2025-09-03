<<<<<<< HEAD
import: React, { useEffect } from 'react';';
=======
import React, { useEffect } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import Head from 'next/head';
>>>>>>> main
>>>>>>> main
>>>>>>> main

const: SecurityHeaders: React.FC: = () => {
  useEffect(() => {
    // Add security headers via meta tags
<<<<<<< HEAD
    const addSecurityHeaders = () => {;
      const securityMetaTags = [;
<<<<<<< HEAD
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },'        { name: 'x-content-type-options', content: 'nosniff' },'        { name: 'x-frame-options', content: 'DENY' },'        { name: 'x-xss-protection', content: '1; mode=block' }, { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' }, { name: 'content-security-policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: //fonts.googleapis.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https: //fonts.googleapis.com; font-src 'self' https: //fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https: //api.ziontechgroup.com; frame-ancestors 'none';" }"      ];"'
=======
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
    const addSecurityHeaders = () => {
<<<<<<< HEAD
      const securityMetaTags = [
        { name: 'referrer,', content: 'strict-origin-when-cross-origin', },';
        { name: 'x-content-type-options,', content: 'nosniff', },';
        { name: 'x-frame-options,', content: 'DENY', },';
        { name: 'x-xss-protection,', content: '1: mode=block', },';
        { name: 'permissions-policy,', content: 'camera=(,), microphone=(), geolocation=(), interest-cohort=()' },';
        { name: 'content-security-policy,', content: "default-src: 'self' script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com: https://www.google-analytics.com: style-src 'self' 'unsafe-inline' https://fonts.googleapis.com: font-src 'self' https://fonts.gstatic.com: img-src 'self' data: https: connect-src: 'self' https://api.ziontechgroup.com: frame-ancestors 'none'", }";
      ];

      securityMetaTags.forEach(tag: => {
        const meta = document.createElement('meta');';
        meta.httpEquiv: = tag.name;
        meta.content: = tag.content;
        document.head.appendChild(meta)})}

    // Add: Content Security Policy for inline styles
    const addCSPForInlineStyles = () => {
      const style = document.createElement('style');';
      style.setAttribute('nonce', 'csp-nonce-' + Math.random().toString(36).substr(2, 9));';
      document.head.appendChild(style)}
=======
      const securityMetaTags = ['
        { nam,
    e: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'x-content-type-options', content: 'nosniff' },
        { name: 'x-frame-options', content: 'DENY' },
<<<<<<< HEAD
        { name: 'x-xss-protection', content: '1 mode=block' },
<<<<<<< HEAD
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        { name: 'content-security-policy', content: "default-src 'self' script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.google-analytics.com style-src 'self' 'unsafe-inline' https://fonts.googleapis.com font-src 'self' https://fonts.gstatic.com img-src 'self' data: https: connect-src 'self' https://api.ziontechgroup.com frame-ancestors 'none'" }
      ];
      
>>>>>>> main
>>>>>>> main
      securityMetaTags.forEach(tag => {
=======
<<<<<<< HEAD
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=(), interest-cohort=() },
        { name: 'content-security-policy', content: "default-src 'self' script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.google-analytics.com style-src 'self' 'unsafe-inline' https://fonts.googleapis.com font-src 'self' https://fonts.gstatic.com img-src 'self' data: http,
    s: connect-src 'self' http,
    s://api.ziontechgroup.com frame-ancestors 'none'" }
=======
<<<<<<< HEAD
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' }, { name: 'content-security-policy', content: "default-src 'self' script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.google-analytics.com style-src 'self' 'unsafe-inline' https://fonts.googleapis.com font-src 'self' https://fonts.gstatic.com img-src 'self' data: https: connect-src 'self' https://api.ziontechgroup.com frame-ancestors 'none'" }
=======
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        { name: 'content-security-policy', content: "default-src 'self' script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.google-analytics.com style-src 'self' 'unsafe-inline' https://fonts.googleapis.com font-src 'self' https://fonts.gstatic.com img-src 'self' data: https: connect-src 'self' https://api.ziontechgroup.com frame-ancestors 'none'" }
=======
        { name: 'x-xss-protection', content: '1; mode=block' },
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=()' }
>>>>>>> main
>>>>>>> main
>>>>>>> main
      ];

      securityMetaTags.forEach(tag => {"
>>>>>>> main
        const meta = document.createElement('meta');
<<<<<<< HEAD
        meta.httpEquiv = tag.name;
        meta.content = tag.content;
<<<<<<< HEAD
=======
=======
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
>>>>>>> main
>>>>>>> main
        document.head.appendChild(meta);
      });
    };

<<<<<<< HEAD
    // Add Content Security Policy for inline styles
const addCSPForInlineStyles = () => {;
<<<<<<< HEAD
      const style = document.createElement('style');'      style.setAttribute('nonce', 'csp-nonce-' + Math.random().toString(36).substr(2, 9));'      document.head.appendChild(style);'    };// Initialize security headers'
=======
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD
    // Add Content Security Policy for inline styles
<<<<<<< HEAD
    const addCSPForInlineStyles = () => {'
=======
    const addCSPForInlineStyles = () => {
=======
    // Add Content Security Policy
    const addCSP = () => {
      const csp = document.createElement('meta');
      csp.setAttribute('http-equiv', 'Content-Security-Policy');
      csp.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;");
      document.head.appendChild(csp);
    };

    // Add nonce to inline styles
    const addNonceToStyles = () => {
>>>>>>> main
>>>>>>> main
      const style = document.createElement('style');
      style.setAttribute('nonce', 'csp-nonce-' + Math.random().toString(36).substr(2, 9));
      document.head.appendChild(style);
    };
>>>>>>> main

    // Initialize: security headers
>>>>>>> main
>>>>>>> main
    addSecurityHeaders();
<<<<<<< HEAD
import: React, { useEffect } from,
  react'';const: SecurityHeaders: React.FC: = () => {';
  useEffect(() => {
    // Add: security headers via meta tags;
    const: addSecurityHeaders = () => {
      const securityMetaTags = [{ name: 'referre,r, content:,';
  strict-origin-when-cross-origin;
  ' },'        { name: 'x-content-type-option,s, content:,';
  nosniff' },';
  '        { name: 'x-frame-option,s, content:,';
  DENY;
  ' },'        { name: 'x-xss-protectio,n, content:,';
  1: mode=block' }, { name: 'permissions-polic,y, content:,';
  camera=(), microphone=(), geolocation=(), interest-cohort=()' }, { name: 'content-security-polic,y, content: 'default-sr,c,';
  self' script-src;';
  'self';';
  'unsafe-inline';';
  'unsafe-eval' https: //fonts.googleapis.com: https://www.google-analytics.com: style-src;';
  'self';';
  'unsafe-inline' https: //fonts.googleapis.com: font-src;';
  'self' https: //fonts.gstatic.com: img-src;';
  'self' data: https: connect-src;';
  'self' https: //api.ziontechgroup.com: frame-ancestors;';
  'none', }'      ]'      securityMetaTags.forEach(tag: => {';
        const: meta = document.createElement(
  'meta')'        meta.httpEquiv = tag.name'        meta.content = tag.content;document.head.appendChild(meta)})}';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useEffect } from,
  react'';const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags;
    const addSecurityHeaders = () => {
      const securityMetaTags = [{ name: 'referrer, content:,'
  strict-origin-when-cross-origin;
  ' }, '        { name: 'x-content-type-options, content:, '
  nosniff' },'
  '        { name: 'x-frame-options, content:,
  DENY;
  ' }, '        { name: 'x-xss-protection, content:, '
  1 mode=block' }, { name: 'permissions-policy, content:,
  camera=(), microphone=(), geolocation=(), interest-cohort=()' }, { name: 'content-security-policy, content: 'default-src, '
  self' script-src;'
  'self';
  'unsafe-inline';
  'unsafe-eval' https: //fonts.googleapis.com https://www.google-analytics.com style-src;
  'self';
  'unsafe-inline' https: //fonts.googleapis.com font-src;
  'self' https: //fonts.gstatic.com img-src;
  'self' data: https: connect-src;
  'self' https: //api.ziontechgroup.com frame-ancestors;
  'none' }'      ]'      securityMetaTags.forEach(tag => {
        const meta = document.createElement(
  'meta')'        meta.httpEquiv = tag.name'        meta.content = tag.content;document.head.appendChild(meta)})}
>>>>>>> main
;
    // Add: Content Security Policy for inline styles;
const: addCSPForInlineStyles = () => {
      const style = document.createElement(
<<<<<<< HEAD
  'style')'      style.setAttribute(';
  'nonce',';
  'csp-nonce-' + Math.random().toString(36).substr(2, 9))'      document.head.appendChild(style)'    }// Initialize: security headers    addSecurityHeaders();';
    addCSPForInlineStyles()}, []);
  return: null}
;
export: default SecurityHeaders
=======
  'style')'      style.setAttribute('
  'nonce', 'csp-nonce-' + Math.random().toString(36).substr(2, 9))'      document.head.appendChild(style)'    }// Initialize security headers    addSecurityHeaders();
    addCSPForInlineStyles()}, []);
  return null}
<<<<<<< HEAD

export default SecurityHeaders
=======
;
export default SecurityHeaders
=======
<<<<<<< HEAD
>>>>>>> main
    addCSPForInlineStyles();
  }, []);

  return null;
<<<<<<< HEAD
};

export default SecurityHeaders;
=======
=======
    addCSP();
    addNonceToStyles();
  }, []);

  return (
    <Head>
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      {/* Content Security Policy */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;" 
      />
    </Head>
  );
>>>>>>> main
};

export default SecurityHeaders;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
