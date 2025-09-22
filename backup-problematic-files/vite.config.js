
});
import { defineConfig } from "vite;
import react from "@vitejs/plugin-react";
;
export default defineConfig({,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  plugins: [react()],
  server: {,
    port: 3000,
    host: true;
  },
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
