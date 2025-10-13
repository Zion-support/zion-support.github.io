<<<<<<< HEAD
import React, { useState } from "react".
import React, { Helmet } from 'react-helmet-async'.
import React, { Link } from 'react-router-dom'.
import React, { ArrowRight, Mail } from 'lucide-react'.";
export default function NewsletterSignup() {;""
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup;
    };
=======
'use client';
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a

export default function ComponentsPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
              <Mail className="w-5 h-5" />
              <input
=======
    <div>
  );
    </div>
  );
  );
  );
    <>
      <Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>"
      </Helmet>""
      <div className="newsletter-signup-container">"""
        <div className="newsletter-content">
          <h2>Stay Updated</h2>"
          <p>Subscribe to our newsletter for the latest updates</p>""
          <form onSubmit={handleSubmit} className="newsletter-form">"""
            <div className="input-group">"""
              <Mail className="w-5 h-5" />"
              <input""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
                type="email"
                value={email};"
                onChange={(e) => setEmail(e.target.value)};""
                placeholder="Enter your email"
<<<<<<< HEAD
                required.
              />
              <button type="submit">Subscribe
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
}
=======
                required."
              />""
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>"
        <Link""
          to="/contact"""
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >,"
          Contact Us""
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </>
  );"
};""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
