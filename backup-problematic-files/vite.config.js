<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
=======

;
  };
}),;
;};
});
import { defineConfig } from "vite;
import react from "@vitejs/plugin-react";
;
export default defineConfig({,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  plugins: [react()],
  server: {,
    port: 3000,
    host: true
  },
<<<<<<< HEAD
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
=======
  build: {,
    outDir: dist",
    sourcemap: true,
    minify: "terser,
    rollupOptions: {,
      output: {,
        manualChunks: {,
          vendor: ["react", react-dom"],
          ui: ["framer-motion, "lucide-react"],
          router: [react-router-dom"]
        };
      };
    },
    terserOptions: {,
      compress: {,
        drop_console: true,
        drop_debugger: true
      };
    };
  },
  optimizeDeps: {,
    include: ["react, "react-dom", framer-motion", "lucide-react"]
  };
}),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
