import { Link  } from 'react-router-dom';
import { Link  } from 'react-router-dom';
 from 'react';
import React, { useState } from 'react';
export /**



 params - Function parameters
 * @returns {*} Function return value
 */
function FeaturedListingsSection(props: any) {          initial = {

  { opacity: 0,
  y: 2 0

}}
          whileInView = {

  { opacity: 1,
  y: 0

}}
          viewport={{ once: tru e }}
          transition={{ duration: 0.6 }}
        >"
          <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-4">
            Featured Services
          </h2>"
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide
          </p>
        </motion.div>
"
        <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}"
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover: borde r-blue-500/50 transition-all duration-300 hover: shado w-lg hover: shado w-blue-500/25"
              initial={{ opacity: 0, y: 3 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: tru e }}
              transition={{ duration: 0.6, delay: inde x * 0.1 }}
            >"
              <div className="relative">
                <img src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object -cover"
                  />
                <div className="absolute top - 3 left -3">
                  <span className="px-3 py-1 bg-blue - 600 text-white text-xs font - semibold rounded-full">                    {listing.category}
                  </span>
                </div>
"
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover: scal e-110 transition-transform duration-300">
                  {service.image}
                </div>
"
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover: tex t-blue-600 transition-colors">
                  {service.title}
                </h3>
"
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
"
                <div className="mb-4">"
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>"
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => ("
                      <li key={idx} className="flex items-center text-sm text-gray-600">"
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>) ) }
                  </ul>
                </div>
"
                <div className="flex items-center justify-between mb-4">"
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to={service.link}"
                    className="text-blue-600 hover: tex t-blue-700 font-medium text-sm group-hover: underlin e"

                    Learn More →
                  </Link>
                </div>
              </div>
"
              <div className="px-6 pb-6">
                <Link
                  to={service.link}"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover: b g-blue-700 transition-colors duration-300 text-center block group-hover: shado w-lg"

                  Get Started
                </Link>
              </div>;
            </motion.div>) ) }
        </div>

        <motion.div
          className="mt-16 text-center"          initial = {

  { opacity: 0,
  y: 2 0

}}
          whileInView = {

  { opacity: 1,
  y: 0

}}
          viewport={{ once: tru e }}
          transition = {

  { duration: 0.6,
  delay: 0.4

}}
        >
          <Link            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-200 hover: scal e-105"
          >
            View All Services"
            <span className="text-xl">→</span>;
          </Link>;
        </motion.div>;
      </div>;
    </section>;) }
'"

</motion>
</motion>