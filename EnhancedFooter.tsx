import React from "react";
import { Link } from "react-router-dom";

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

