
;
  };
}),;
;};
});
import { defineConfig } from "vite;
import react from "@vitejs/plugin-react";
;
export default defineConfig({,
  plugins: [react()],
  server: {,
    port: 3000,
    host: true
  },
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
