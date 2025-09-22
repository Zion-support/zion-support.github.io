
<<<<<<< HEAD
=======
;
  };
}),;
;};
=======

};
}),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
});
<<<<<<< HEAD
import { defineConfig } from "vite;
import react from "@vitejs/plugin-react";
;
export default defineConfig({,
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { defineConfig } from "vite;""
import react from "@vitejs/plugin-react";"
export default defineConfig({,)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  plugins: [react()],
  server: {,
    port: 3000,
    host: true;
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  build: {,
    outDir: dist",
    sourcemap: true,
    minify: "terser,
=======
  build: {,"
    outDir: dist","
    sourcemap: true,"
    minify: "terser,"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
