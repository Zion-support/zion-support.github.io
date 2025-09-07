          </motion.div>
        </div>
      </section>
      <section id="contact" className="py-16 px-4 bg-black/20">"
</section>"
        <div className="max-w-4xl mx-auto text-center">"
          <motion.h2,"
className="text-3xl md:text-4xl font-bold text-white mb-8""
            initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
</motion>
          </motion.h2>
          <motion.div,"
className="grid md:grid-cols-3 gap-8""
            transition={_{ duration: 0.6, delay: 0.2}}
</motion>"
            <div className="text-center">"
</div>"
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
"
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>""
              <p className="text-cyan-400 text-lg">{contactInfo.mobile}</p>"
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>""
              <p className="text-cyan-400 text-lg">{contactInfo.email}</p>"
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>""
              <p className="text-cyan-400 text-lg">{contactInfo.address}</p>"
      <section id="services" className="py-20 px-4">"
        <div className="max-w-7xl mx-auto">"
className="text-4xl md:text-5xl font-bold text-white text-center mb-16""
          
className="space-y-20""
            variants={staggerContainer}"
            initial="initial"""
            whileInView="animate""