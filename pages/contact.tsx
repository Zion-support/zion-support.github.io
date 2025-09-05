import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">

                <p className="text-gray-600">+1 302 464 0950</p>
              </motion.div>

              <motion.div

                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div

                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>

              <motion.div

                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>

                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                    />
                  </div>
                  
                  <div>

                    />
                  </div>
                  
                  <div>

              </div>
            </motion.div>
          </div>
        </section>
      </div>

  );
}