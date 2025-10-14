];
;
const company = [

  ];
;
const legal = [

                  </Link>
                </li>

  ))};

            </ul>
          </div>

          <div></div>

                  </Link>
                </li>
              ))
            </ul>

          </div>

          <div></div>

                  </Link>
                </li>
              ))
            </ul>
          </div>
        </div>

            </div>
          </div>
        </div>

          { /* Copyright */ }
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"></div>
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        { /* Bottom Section */ }"
        <div className="mt-12 pt-8 border-t border-slate-700/50"></div>"
          <div className="flex flex-col md:flex-row justify-between items-center"></div>"
            <div className="text-gray-400 text-sm"></div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            { /* Legal Links */ }"
            <div className="flex space-x-6 mt-4 md:mt-0"></div>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={ link.href }"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"

                >
                  { link.name }
                </Link>)
              ))
            </div>"
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"></div>""
          <p className="text-gray-400 text-sm">"
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>"
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0"></div>"
            <span>Made with</span>"
            <HeartIcon className="w-4 h-4 text-red-500" />"
            <span>for innovation</span>"
          <div className="flex space-x-6 text-gray-400 text-sm"></div>""
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>""
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>"
          </div>

        { /* Copyright */ }"
        <div className="border-t border-gray-800 mt-8 pt-8 text-center"></div>"
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved. Made with{ ' ' }"
            <HeartIcon className="w-4 h-4 inline text-red-500" /> for our clients.

          </p>

        </div>
      </div>
    </footer>

  );
};
"
