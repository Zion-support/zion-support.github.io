        staggerChildren: 0.1,
        staggerChildren: 0.15,
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-zion-blue/5 rounded-full blur-2xl"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-zion-cyan/5 rounded-full blur-2xl"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Access to
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Navigate our comprehensive platform with ease. From AI-powered talent matching 
            to specialized tech services, everything is just a click away.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
        {/* Additional Quick Actions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
        {/* Enhanced bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple hover:bg-zion-purple hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Get Support
            </Link>
