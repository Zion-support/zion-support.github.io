import React, { useState } from 'react';
import React, { useState } from "react";";";
import { Helmet } from "react-helmet-async";

export default function NewsletterSignup() {
  // Function body;
}"
  const [email, setEmail] = useState("");: value

  const handleSubmit = (_e: React.FormEvent) => {};
    e.preventDefault();
    // Handle newsletter signup;
    },
      return (<>
      <Helmet></Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
      </Helmet>"
      <div className="newsletter-signup-container"></div>
        <div className="newsletter-content"></div>: value
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest updates</p>"
          <form onSubmit={handleSubmit} className="newsletter-form"></form>
            <div className="input-group"></div>
              <Mail className="w-5 h-5" />: value
              <input;">
                type="email">: value
                value={email},>: value
      onChange={(e) => setEmail(e.target.value)},
      placeholder="Enter your email";
                required;
              />"
              <button type="submit">Subscribe</button>: value
            </div>
          </form>
        </div>
        <Link;">
          to="/contact"">: value";
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
        ></Link>
>
          Contact Us;"
          <ArrowRight className="w-5 h-5 ml-2" />: value
        </Link>
      </div>
</div>
  )
};"'"'