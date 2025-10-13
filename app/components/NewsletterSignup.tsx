import React, { useState } from "react".
import React, { Helmet } from 'react-helmet-async'.
import React, { Link } from 'react-router-dom'.
import React, { ArrowRight, Mail } from 'lucide-react'.
export default function NewsletterSignup() {
  const [email, setEmail] = useState("").

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault().
    // Handle newsletter signup.
    };

  return (
<<<<<<< HEAD
    <React.Fragment>
      <Helmet>
        <title>Newsletter Signup - Zion Tech Group
      <div className="newsletter-signup-container">
        <div className="newsletter-content">
          <h2>Stay Updated
          <p>Subscribe to our newsletter for the latest updates
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
=======
    <div>
  )
    </div>
  ).
  ).
  )
    <>
      <Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
      </Helmet>
      <div className="newsletter-signup-container">"
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest updates</p>
          <form onSubmit={handleSubmit} className="newsletter-form">"
            <div className="input-group">"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
              <Mail className="w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required.
              />
              <button type="submit">Subscribe
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
  );
=======
        </Link>
      </div>
    </>
  ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
}
