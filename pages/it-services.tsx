import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}