import { SEO } from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function Cookies() {;
return (;
    <>
title="Cookie Policy - Zion Tech Group";
description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience.";
keywords="cookie policy, cookies, privacy, Zion Tech Group, data collection"
      />
      
}
        {/* Hero Section */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
className="max-w-7xl mx-auto text-center relative z-10";
initial={{ opacity: 0}}, y: 30 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ duration: 0.8}}}
          >
className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6";
initial={{ opacity: 0}}, y: 30 }}
              animate={{ opacity: 1}}, y: 0 }}
              transition={{ duration: 0.8}}, delay: 0.2 }}
            >;
                {" "}Policy
            
className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed";
initial={{ opacity: 0}}, y: 30 }}
              animate={{ opacity: 1}}, y: 0 }}
              transition={{ duration: 0.8}}, delay: 0.4 }}
            >;
Learn about how we use cookies and similar technologies to enhance your browsing experience;
and provide personalized services on our website.
            
className="text-sm text-gray-400";
initial={{ opacity: 0}}, y: 30 }}
              animate={{ opacity: 1}}, y: 0 }}
              transition={{ duration: 0.8}}, delay: 0.6 }}
            >;
Last updated: January 2025

        {/* What Are Cookies */}
className="text-center mb-16";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">;
What Are Cookies?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
Cookies are small text files that are stored on your device when you visit our website
            
className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >
                <h3 className="text-2xl font-bold text-white mb-6">Understanding Cookies</h3>
                  <p>;
Cookies are small text files that websites place on your device to remember your preferences,;
analyze how you use the site, and provide personalized content. They help make your browsing;
experience more convenient and relevant.
                  <p>;
When you visit our website, we may use cookies to understand how you interact with our content,;
remember your preferences, and provide you with a better user experience.
                  <p>;
Cookies can be either "session cookies" (which are deleted when you close your browser) or 
                    "persistent cookies" (which remain on your device for a set period of time).
              
                <div className="text-8xl mb-4">🍪</div>
                <p className="text-gray-400 text-sm">Cookies help us provide a better experience</p>

        {/* Types of Cookies */}
className="text-center mb-16";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">;
Types of Cookies We Use
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We use different types of cookies for various purposes to enhance your experience
            
className="grid grid-cols-1 md:grid-cols-2 gap-8";
variants={staggerContainer}
              initial="initial";
whileInView="animate";
viewport={{ once: true}}}
            >
              {cookieTypes.map((type), index) => (
key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15";
variants={fadeInUp}
                  whileHover={{ scale: 1.02}}}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                  
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Examples:</h4>
                      {type.examples.map((example), exampleIndex) => (
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {example}
                      ))}
                  
                    <span className="font-medium">Duration:</span> {type.duration}
              ))}

        {/* Cookie Management */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Managing Your Cookies</h2>
                  <h3 className="text-2xl font-bold text-white mb-4">Browser Settings</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed mb-6">;
You can control and manage cookies through your browser settings. Most browsers allow you to:
                    <li>• View and delete existing cookies</li>
                    <li>• Block cookies from specific sites</li>
                    <li>• Block all third-party cookies</li>
                    <li>• Clear all cookies when you close your browser</li>
                  <p className="text-zion-slate-light">;
Check your browser's help section for specific instructions on managing cookies.
title="Cookie Policy | Zion Tech Group";
description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience";
keywords="cookie policy, cookies, tracking, privacy, Zion Tech Group cookies";
canonical="https://ziontechgroup.com/cookies"
      />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
Cookie Policy
              <p className="text-xl text-zion-slate-light">;
Last updated: December 15, 2024

                <p className="text-zion-slate-light mb-6">;
This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar;
technologies when you visit our website. This policy should be read together with our Privacy Policy,;
which explains how we use your personal information.

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
What Are Cookies?
                <p className="text-zion-slate-light mb-6">;
Cookies are small text files that are stored on your device (computer, tablet, or mobile phone);
when you visit a website. They help websites remember information about your visit, such as your;
preferred language and other settings, which can make your next visit easier and the site more useful to you.

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
How We Use Cookies
                <p className="text-zion-slate-light mb-4">;
We use cookies for several purposes, including:
                  <li>Essential cookies that are necessary for the website to function properly</li>
                  <li>Analytics cookies that help us understand how visitors interact with our website</li>
                  <li>Functionality cookies that remember your preferences and settings</li>
                  <li>Marketing cookies that help us deliver relevant content and advertisements</li>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
Types of Cookies We Use
                
                <h3 className="text-xl font-bold text-white mb-3 mt-6">Essential Cookies</h3>
                <p className="text-zion-slate-light mb-4">;
These cookies are essential for the website to function and cannot be switched off in our systems.;
They are usually only set in response to actions made by you which amount to a request for services,;
such as setting your privacy preferences, logging in, or filling in forms.

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Analytics Cookies</h3>
                <p className="text-zion-slate-light mb-4">;
These cookies allow us to count visits and traffic sources so we can measure and improve the;
performance of our site. They help us to know which pages are the most and least popular and;
see how visitors move around the site.

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Functionality Cookies</h3>
                <p className="text-zion-slate-light mb-4">;
These cookies enable the website to provide enhanced functionality and personalization.;
They may be set by us or by third-party providers whose services we have added to our pages.

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Marketing Cookies</h3>
                <p className="text-zion-slate-light mb-6">;
These cookies may be set through our site by our advertising partners. They may be used by;
those companies to build a profile of your interests and show you relevant advertisements on other sites.

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
Third-Party Cookies
                <p className="text-zion-slate-light mb-6">;
In addition to our own cookies, we may also use various third-party cookies to report usage;
statistics of the website, deliver advertisements on and through the website, and so on.;
These third-party cookies are not under our control and are subject to the third party's privacy policy.

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
Managing Your Cookie Preferences
                <p className="text-zion-slate-light mb-4">;
You can control and/or delete cookies as you wish. You can delete all cookies that are already;
on your computer and you can set most browsers to prevent them from being placed. However,;
if you do this, you may have to manually adjust some preferences every time you visit a site.
                <p className="text-zion-slate-light mb-6">;
Most web browsers allow you to manage cookies through their settings preferences. To learn more;
about how to manage cookies, visit the help section of your browser.

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
Specific Cookie Information
                <p className="text-zion-slate-light mb-4">;
Below is a list of the main cookies we use and their purposes:
                
                  <h4 className="text-lg font-semibold text-white mb-3">Essential Cookies</h4>
                    <li><strong>session_id:</strong> Maintains your session while using our website</li>
                    <li><strong>csrf_token:</strong> Protects against cross-site request forgery attacks</li>
                    <li><strong>preferences:</strong> Stores your basic website preferences</li>

                  <h4 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h4>
                    <li><strong>_ga:</strong> Google Analytics cookie for tracking website usage</li>
                    <li><strong>_gid:</strong> Google Analytics cookie for tracking user sessions</li>
                    <li><strong>_gat:</strong> Google Analytics cookie for controlling request rate</li>

                  <h4 className="text-lg font-semibold text-white mb-3">Functionality Cookies</h4>
                    <li><strong>theme:</strong> Remembers your preferred color theme</li>
                    <li><strong>language:</strong> Stores your preferred language setting</li>
                    <li><strong>notifications:</strong> Remembers your notification preferences</li>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
Updates to This Policy
                <p className="text-zion-slate-light mb-6">;
We may update this Cookie Policy from time to time to reflect changes in our practices or;
for other operational, legal, or regulatory reasons. We will notify you of any material;
changes by posting the new Cookie Policy on this page and updating the "Last updated" date.

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">;
Contact Us
                <p className="text-zion-slate-light mb-6">;
If you have any questions about our use of cookies, please contact us at:
                    <strong>Email:</strong> kleber@ziontechgroup.com
                    <strong>Phone:</strong> +1 (302) 464-0950
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
          </div>;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie;, Shield, Settings, Eye, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield;, Lock, Eye, CheckCircle } from 'lucide-react';
export default function Cookies() {;
return (;
}
        {/* Header */}
initial={{ opacity: 0}}, y: 20 }}
          animate={{ opacity: 1}}, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-300">;
Learn how we use cookies and similar technologies to enhance your experience.

        {/* Last Updated */}
initial={{ opacity: 0}}, y: 20 }}
          animate={{ opacity: 1}}, y: 0 }}
          transition={{ delay: 0.1}}}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8"
        >
            <span className="font-semibold">Last Updated:</span>
          <p className="text-white">December 2024</p>

        {/* Content Sections */}
          {/* What Are Cookies */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ delay: 0.2}}}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />;
What Are Cookies?
              <p>;
Cookies are small text files that are stored on your device when you visit a website.;
They help websites remember information about your visit, such as your preferred language;
and other settings.
              <p>;
Cookies can make your next visit easier and the site more useful to you. They help us;
provide you with a better experience by understanding how you use our website.

          {/* How We Use Cookies */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ delay: 0.3}}}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
              <Eye className="w-6 h-6 mr-3 text-cyan-400" />;
How We Use Cookies
              <p>We use cookies for several purposes:</p>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Security Cookies:</strong> Help protect against fraud and maintain security</li>

          {/* Types of Cookies We Use */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ delay: 0.4}}}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />;
Types of Cookies We Use
                <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                <p>;
These cookies are temporary and are deleted when you close your browser. They help;
maintain your session and remember your preferences during your visit.
                <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                <p>;
These cookies remain on your device for a set period or until you delete them.;
They help us remember your preferences for future visits.
                <h3 className="text-lg font-semibold text-white mb-2">Third-Party Cookies</h3>
                <p>;
These cookies are set by third-party services we use, such as analytics providers;
and social media platforms.

          {/* Specific Cookies */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ delay: 0.5}}}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
              <Lock className="w-6 h-6 mr-3 text-cyan-400" />;
Specific Cookies We Use
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                  <p className="text-sm">These cookies are necessary for the website to function and cannot be switched off.</p>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                  <p className="text-sm">Help us understand how visitors interact with our website.</p>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Preference Cookies</h3>
                  <p className="text-sm">Allow the website to remember choices you make.</p>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Marketing Cookies</h3>
                  <p className="text-sm">Used to track visitors across websites for marketing purposes.</p>

          {/* Managing Cookies */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ delay: 0.5}}}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />;
Managing Your Cookie Preferences
              <p>;
You can control and manage cookies through your browser settings. Most browsers allow you to:
                <li>View all cookies stored on your device</li>
                <li>Delete specific cookies or all cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Set preferences for different types of cookies</li>
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.

          {/* Contact Information */}
initial={{ opacity: 0}}, y: 20 }}
            animate={{ opacity: 1}}, y: 0 }}
            transition={{ delay: 0.6}}}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">;
If you have any questions about our cookie policy or how we use cookies,;
please don't hesitate to contact us.
            <$2 />;
to="/contact";
className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">;
Managing Your Cookie Preferences
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
You have control over how cookies are used on our website
            
className="grid grid-cols-1 lg:grid-cols-3 gap-8";
variants={staggerContainer}
              initial="initial";
whileInView="animate";
viewport={{ once: true}}}
            >
              {cookieManagement.map((item), index) => (
key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300";
variants={fadeInUp}
                  whileHover={{ scale: 1.02}}}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-blue-400 text-sm font-medium">{item.action}</div>
              ))}

              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-6">;
Cookies are small text files that are placed on your device when you visit our website.;
They help us provide you with a better experience and understand how you use our platform.

              <h3 className="text-xl font-bold text-white mb-4">How We Use Cookies</h3>
              <p className="text-zion-slate-light mb-6">;
We use cookies for several purposes, including:
                <li>• Essential cookies for basic website functionality</li>
                <li>• Performance cookies to analyze site usage</li>
                <li>• Functionality cookies to remember your preferences</li>
                <li>• Marketing cookies to provide relevant content</li>

              <h3 className="text-xl font-bold text-white mb-4">Managing Your Cookie Preferences</h3>
              <p className="text-zion-slate-light mb-6">;
You can control and manage cookies through your browser settings. However,;
disabling certain cookies may affect the functionality of our website.

              <h3 className="text-xl font-bold text-white mb-4">Updates to This Policy</h3>
              <p className="text-zion-slate-light">;
We may update this Cookie Policy from time to time. Please check back;
periodically for any changes.
    </>;
import React from 'react';;
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
export default function Cookies() {;
return (;
title="Cookie Policy - Zion Tech Group";
description="Learn about how Zion Tech Group uses cookies and similar technologies on our website";
keywords="cookie policy, cookies, privacy, data collection, Zion Tech Group";
canonical="https://ziontechgroup.com/cookies"
      />

}
        {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">;
Cookie Policy
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
This policy explains how Zion Tech Group uses cookies and similar technologies;
to enhance your browsing experience and provide personalized services.
          <p className="text-sm text-gray-400 mt-4">;
Last updated: January 15, 2025

        {/* What Are Cookies */}
          <h2 className="text-3xl font-bold text-white mb-8">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">;
Cookies are small text files that are stored on your device (computer, tablet, or mobile);
when you visit our website. They help us remember your preferences, analyze how you use;
our site, and provide you with a better, more personalized experience.
            <p className="text-gray-300 leading-relaxed">;
Cookies do not contain any personal information that can identify you individually,;
but they may contain information about your device and how you interact with our website.

        {/* Types of Cookies We Use */}
          <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
              <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">;
These cookies are necessary for the website to function properly. They enable basic;
functions like page navigation, access to secure areas, and form submissions.
                <li>• Session management</li>
                <li>• Security features</li>
                <li>• Basic functionality</li>

              <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">;
These cookies help us understand how visitors interact with our website by collecting;
and reporting information anonymously.
                <li>• Website usage statistics</li>
                <li>• Performance monitoring</li>
                <li>• User behavior analysis</li>

              <h3 className="text-xl font-bold text-white mb-3">Preference Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">;
These cookies remember your choices and preferences to provide you with a more;
personalized experience on our website.
                <li>• Language preferences</li>
                <li>• Theme settings</li>
                <li>• Customized content</li>

              <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">;
These cookies are used to track visitors across websites to display relevant;
advertisements and measure the effectiveness of marketing campaigns.
                <li>• Targeted advertising</li>
                <li>• Campaign effectiveness</li>
                <li>• Cross-site tracking</li>

        {/* How We Use Cookies */}
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Cookies</h2>
                <h3 className="text-xl font-bold text-white mb-4">Website Functionality</h3>
                  <li>• Remember your login status and preferences</li>
                  <li>• Enable secure transactions and form submissions</li>
                  <li>• Provide personalized content and recommendations</li>
                  <li>• Optimize website performance and user experience</li>
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Improvement</h3>
                  <li>• Analyze website traffic and user behavior</li>
                  <li>• Identify and fix technical issues</li>
                  <li>• Improve website design and functionality</li>
                  <li>• Measure the effectiveness of our content</li>

        {/* Third-Party Cookies */}
          <h2 className="text-3xl font-bold text-white mb-8">Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-6">;
Some cookies on our website are set by third-party services that we use to enhance;
functionality and provide additional features. These services may include:
                <h4 className="text-white font-semibold mb-2">Analytics Services</h4>
                <p className="text-gray-300 text-sm">Google Analytics, Mixpanel</p>
                <h4 className="text-white font-semibold mb-2">Marketing Tools</h4>
                <p className="text-gray-300 text-sm">Facebook Pixel, Google Ads</p>
                <h4 className="text-white font-semibold mb-2">Customer Support</h4>
                <p className="text-gray-300 text-sm">Intercom, Zendesk</p>

        {/* Managing Cookies */}
          <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 leading-relaxed mb-4">;
You can control and manage cookies through your browser settings. Most browsers;
allow you to view, delete, and block cookies from specific websites.
                <p className="text-gray-300 leading-relaxed">;
Please note that blocking certain cookies may affect the functionality of our;
website and your user experience.
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 leading-relaxed mb-4">;
When you first visit our website, you'll see a cookie consent banner that;
allows you to accept or decline non-essential cookies.
                <p className="text-gray-300 leading-relaxed">;
You can change your preferences at any time by clicking the cookie settings;
link in the footer of our website.

        {/* Updates to Policy */}
          <h2 className="text-3xl font-bold text-white mb-8">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">;
We may update this Cookie Policy from time to time to reflect changes in our;
practices or for other operational, legal, or regulatory reasons.
            <p className="text-gray-300 leading-relaxed">;
We will notify you of any material changes by posting the new policy on our;
website and updating the "Last updated" date at the top of this page.

        {/* Contact Information */}
className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}}
            >;
Questions About Cookies?
className="text-xl text-gray-300 mb-8 leading-relaxed";
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}, delay: 0.2 }}
            >;
If you have any questions about our use of cookies or would like to manage your preferences,;
please don't hesitate to contact us.
initial={{ opacity: 0}}, y: 30 }}
              whileInView={{ opacity: 1}}, y: 0 }}
              viewport={{ once: true}}}
              transition={{ duration: 0.8}}, delay: 0.4 }}
            >
              <$2 />;
href="mailto: privacy@ziontechgroup.com";
className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >;
Contact Privacy Team
    </div>;
import React from 'react';;
import { SEO} from '@/components/SEO';
import { Card;, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield;, CircleDot, Settings, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Cookies() {;
const cookieTypes = [;
    {
}
title: 'Essential Cookies'},;,
icon: Shield,;,
description: 'These cookies are necessary for the website to function properly.',;,
examples: ['Authentication cookies', 'Security cookies', 'Session management'],;,
necessary: true
    },
    {
title: 'Performance Cookies',;,
icon: Settings,;,
description: 'These cookies help us understand how visitors interact with our website.',;,
examples: ['Analytics cookies', 'Performance monitoring', 'Error tracking'],;,
necessary: false
    },
    {
title: 'Functional Cookies',;,
icon: Eye,;,
description: 'These cookies enable enhanced functionality and personalization.',;,
examples: ['Language preferences', 'User settings', 'Feature preferences'],;,
necessary: false
    },
    {
title: 'Marketing Cookies',;,
icon: CircleDot,;,
description: 'These cookies are used to deliver relevant advertisements.',;,
examples: ['Advertising cookies', 'Social media cookies', 'Tracking cookies'],;,
necessary: false
    }
  ];
const cookieTable = [;
    {
name: 'session_id',;,
purpose: 'Maintains your session while using the website',;,
duration: 'Session',;,
type: 'Essential'
    },
    {
name: 'auth_token',;,
purpose: 'Keeps you logged in securely',;,
duration: '30 days',;,
type: 'Essential'
    },
    {
name: '_ga',;,
purpose: 'Google Analytics - tracks website usage',;,
duration: '2 years',;,
type: 'Performance'
    },
    {
name: '_fbp',;,
purpose: 'Facebook Pixel - tracks conversions',;,
duration: '3 months',;,
type: 'Marketing'
    },
    {
name: 'language',;,
purpose: 'Remembers your language preference',;,
duration: '1 year',;,
type: 'Functional'
    }
  ];
return (;
title="Cookie Policy | Zion Tech Group";
description="Learn about how Zion Tech Group uses cookies and similar technologies to improve your experience on our website.";
keywords="cookie policy, privacy, data protection, Zion Tech Group";
canonical="https://ziontechgroup.com/cookies"
      />

        {/* Header */}
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies;
to recognize you when you visit our website and how we use them to improve your experience.
          <p className="text-zion-slate-light mt-4">;
Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

        {/* What are Cookies Section */}
              <CircleDot className="h-6 w-6 mr-2 text-zion-cyan" />;
What Are Cookies?
            <p className="text-zion-slate-light">;
Cookies are small text files that are placed on your computer or mobile device when you visit a website.;
They are widely used to make websites work more efficiently and provide useful information to website owners.
            <p className="text-zion-slate-light">;
Cookies do not contain any information that personally identifies you, but personal information that we;
store about you may be linked to the information stored in and obtained from cookies.

        {/* Cookie Types */}
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Types of Cookies We Use</h2>
            {cookieTypes.map((type) => {};
const IconComponent = type.icon;;
return (;
}
                      <CardTitle className="text-white text-lg">{type.title}</CardTitle>
                      {type.necessary && (
                        <span className="px-2 py-1 bg-zion-purple text-white text-xs rounded-full">;
                      )}
                      {type.description}
                      {type.examples.map((example), index) => (
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {example}
                      ))}
              )
            })}

        {/* Cookie Table */}
            <CardTitle className="text-white text-2xl">Specific Cookies We Use</CardTitle>
            <CardDescription className="text-zion-slate-light">;
Below is a list of the specific cookies we use and their purposes.
                    <th className="text-left py-3 px-4 text-white font-semibold">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Duration</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Type</th>
                  {cookieTable.map((cookie), index) => (
                      <td className="py-3 px-4 text-zion-cyan font-mono">{cookie.name}</td>
                      <td className="py-3 px-4 text-zion-slate-light">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-zion-slate-light">{cookie.duration}</td>
                        < className={`px-2 py-1 rounded-full text-xs ${$2 />};
cookie.type === 'Essential' 
                            ? 'bg-zion-purple text-white' 
                            : 'bg-zion-blue-light text-zion-slate-light'}`}>
                          {cookie.type}
                  ))}

        {/* Managing Cookies */}
              <Settings className="h-6 w-6 mr-2 text-zion-cyan" />;
Managing Your Cookie Preferences
            <p className="text-zion-slate-light">;
You can control and manage cookies in various ways. Please note that removing or blocking cookies;
can impact your user experience and parts of our website may no longer be fully accessible.
                <h4 className="text-white font-semibold mb-2">Browser Settings</h4>
                <p className="text-zion-slate-light text-sm">;
Most browsers allow you to refuse to accept cookies and to delete cookies.;
The methods for doing so vary from browser to browser.
                <h4 className="text-white font-semibold mb-2">Cookie Consent</h4>
                <p className="text-zion-slate-light text-sm">;
When you first visit our website, you'll see a cookie consent banner where;
you can choose which types of cookies to accept.

        {/* Third-Party Cookies */}
              <Lock className="h-6 w-6 mr-2 text-zion-cyan" />;
Third-Party Cookies
            <p className="text-zion-slate-light">;
In addition to our own cookies, we may also use various third-party cookies to report usage;
statistics of the website, deliver advertisements on and through the website, and so on.
            <p className="text-zion-slate-light">;
These third-party cookies are not under our control and are subject to the third party's;
privacy policy. We recommend that you review the privacy policies of these third parties.

        {/* Contact Information */}
            <CardTitle className="text-white text-2xl">Questions About Cookies?</CardTitle>
            <CardDescription className="text-zion-slate-light">;
If you have any questions about our use of cookies, please contact us.
              <$2 />;
to="/contact";
className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
              >;
Contact Us
              <$2 />;
href="mailto:privacy@ziontechgroup.com";
className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
              >;
Email Privacy Team
            <p className="text-center text-zion-slate-light mt-4">;
You can also read our full <Link to="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</Link> for more information.
  )
}
export default Cookies</$1></div></div></div></div></div></div></p></p></p></p></p></p></p></p></p></p></section>