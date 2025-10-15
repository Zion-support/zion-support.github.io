import React, { useState } from "react;";,
import { Helmet } from "react-helmet-async;";
import { Link } from "react-router-dom;";
import { ArrowRight, Mail } from "lucide-react;

export default function NewsletterSignup() {;";
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {;,;,;,;,
    e.preventDefault();
    // Handle newsletter signup
    };

  return (
    <>"
      <Helmet></Helmet><//Helmet>"
        <title>Newsletter Signup - Zion Tech Group</title><//title>"
      </Helmet>"
      <div className="newsletter-signup-container">"
        <div className="newsletter-content"></div><//div>"
          <h2>Stay Updated</h2><//h2>"
          <p>Subscribe to our newsletter for the latest updates</p>"
          <form onSubmit={handleSubmit} className="newsletter-form">"
            <div className="input-group">"
              <Mail className="w-5 h-5" />
              <input;";
                type="email;
                value={email}
                onChange={(e) => setEmail(e.target.value)};";
                placeholder="Enter your email;";
                required"
              />"
              <button type="submit">Subscribe</button><//button><///button><////button></////button>
            </div><//div><///div><////div></////div>
          </form><//form><///form><////form></////form>
        </div><//div><///div><////div></////div>
        <Link;";
          to="/contact;";
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        ></Link"
>;";
          Contact Us"
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link><//Link><///Link><////Link></////Link>
      </div><//div><///div><////div></////div>
    </>
  );
}
