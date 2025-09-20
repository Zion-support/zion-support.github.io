export function FeaturedListingsSection() {
  return ("
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <div className="max-w-7xl mx-auto px-6">
        <motion.div "
          className="text-center mb-16"
          initial = {

  { opacity: 0,
  y: 20

}}
          whileInView = {

  { opacity: 1,
  y: 0

}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Services
          </h2>"
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide
          </p>
        </motion.div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}"
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >"
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}"
                  className="w-full h-48 object-cover"
                />"
                <div className="absolute top-3 left-3">"
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {listing.category}
                  </span>
                </div>
"
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.image}
                </div>
"
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"

                    Learn More →
                  </Link>
                </div>
              </div>
"
              <div className="px-6 pb-6">
                <Link
                  to={service.link}"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center block group-hover:shadow-lg"

                  Get Started
                </Link>
              </div>;
            </motion.div>) ) }
        </div>

        <motion.div "
          className="mt-16 text-center"
          initial = {

  { opacity: 0,
  y: 20

}}
          whileInView = {

  { opacity: 1,
  y: 0

}}
          viewport={{ once: true }}
          transition = {

  { duration: 0.6,
  delay: 0.4

}}
        >
          <Link "
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
          >
            <Link href="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
