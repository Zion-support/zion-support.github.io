});

  plugins: [react()],
  server: {,
    port: 3000,
<<<<<<< HEAD
    host: true;
=======
<<<<<<< HEAD
    host: true;
=======
    host: true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

    rollupOptions: {,
      output: {,
        manualChunks: {,
          vendor: ["react", react-dom"],
          ui: ["framer-motion, "lucide-react"],
          router: [react-router-dom"]
        }
};
    },
    terserOptions: {,
      compress: {,
        drop_console: true,
        drop_debugger: true
      }
};
  },
  optimizeDeps: {,
    include: ["react, "react-dom", framer-motion", "lucide-react"]
  };
        manualChunks: {,"
          vendor: ["react", react-dom"],""
          ui: ["framer-motion, "lucide-react"],""
          router: [react-router-dom"]"
    terserOptions: {,
      compress: {,
        drop_console: true,
        drop_debugger: true;
  optimizeDeps: {,"
    include: ["react, "react-dom", framer-motion", "lucide-react"]"
pr-12325
}),