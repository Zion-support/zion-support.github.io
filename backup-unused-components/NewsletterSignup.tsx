<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
export default function NewsletterSignup() 
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => 
    e.preventDefault();
    // Handle newsletter signup;
;
  return (
<<<<<<< HEAD
    <>
      <Helmet></Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
      </Helmet>
      <div className="newsletter-signup-container"></div>
        <div className="newsletter-content"></div>
          <h2>Stay Updated</h2>
=======
//     <>
//       <Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
//       </Helmet>
      <div className="newsletter-signup-container">
        <div className="newsletter-content">
<h2>Stay Updated</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          <p>Subscribe to our newsletter for the latest updates</p>
          <form onSubmit="{handleSubmit}" className="newsletter-form"></form>
            <div className="input-group"></div>
              <Mail className="w-5 h-5" />
<<<<<<< HEAD
<<<<<<< HEAD
              <input;
=======
//               <input
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                type="email"
                value={email}
                onChange="{(e)" => setEmail(e.target.value)}
=======
              <input>
  type="email">
  value={email}>
  onChange="{(e)" => setEmail(e.target.value)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                placeholder="Enter your email"
<<<<<<< HEAD
                required;
              />
              <button type="submit">Subscribe</button>
  </div>
          </form>
<<<<<<< HEAD
  </div>
        <Link;
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
=======
        </div>
        <Link>
  to="/contact">
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        >
          Contact Us;
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
  </div>
    </>
=======
//                 required
//               />
              <button type="submit">Subscribe</button>
</div>
          </form>
</div>
//         <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
//         >
//           Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
</Link>
</div>
//     </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

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
}