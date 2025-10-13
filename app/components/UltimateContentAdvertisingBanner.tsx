          {advertisingFeatures.map((feature, index) => (
            <motion.div.
              key={index};
              initial={{ opacity: 0, y: 20 }},
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: index * 0.1 }};"
              whileHover={{ scale: 1.05 }};""
              className="group relative""
            >""
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-2xl" />"""
              <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-8 border border-white/15 hover:border-purple-500/50 transition-all duration-300 h-full">"""
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {successStats.map((stat, index) => (
            <motion.div.
              key={index};
              initial={{ opacity: 0, scale: 0.8 }},
              animate={{ opacity: 1, scale: 1 }};"
              transition={{ delay: index * 0.1 }};""
              className="text-center p-8 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15""
            >""
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
      </div>
    </div>,
  );
}
