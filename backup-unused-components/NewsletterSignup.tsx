import React from 'react';
import React, { useState } from "react"react-helmet-async";
import { Link } from ";
import { ArrowRight, Mail } from "lucide-react"");
  const handleSubmit = (e: React.FormEvent) =>
    e.preventDefault();
    // Handle newsletter signup;
;
  return (
    <>
      <Helmet></Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
      </Helmet>
      <div className="newsletter-content"></div>
          <h2>Stay Updated</h2>
//     <>
//       <Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
//       </Helmet>
      <div className="newsletter-content">
<h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest updates</p>
          <form onSubmit=" className="newsletter-form"></div>
              <Mail className="w-5 h-5"
                value={email}
                onChange="{(e)"email">
  value={email}>
  onChange=" => setEmail(e.target.value)}
                placeholder="Enter your email"submit">Subscribe</button>
  </div>
          </form>
  </div>
        <Link;
          to="
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
        </Link>
  </div>
    </>
//                 required
//               />
              <button type="submit"/contact"
          className="w-5 h-5 ml-2" />
</Link>
</div>
//     </>
  );

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NewsletterSignup({ className = '', children }: NewsletterSignupProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
