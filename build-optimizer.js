<<<<<<< HEAD
#!/usr/bin/env node
import { execSync } from "child_process";

console.log("🔨 Running build optimizer...");

function optimizeBuild() {
  try {
    console.log("Installing dependencies...");
    execSync("npm install", { stdio: "inherit" });

    console.log("Running build...");
    execSync("npm run build", { stdio: "inherit" });

    console.log("✅ Build completed successfully");
  } catch (error) {
=======
#!/usr/bin/env node;
import { execSync } from "child_process";
"
console.log("🔨 Running build optimizer...");

function optimizeBuild() {}
  try {"
    console.log("Installing dependencies...");"
    execSync("npm install", { stdio: "inherit" });
"
    console.log("Running build...");"
    execSync("npm run build", { stdio: "inherit" });
"
    console.log("✅ Build completed successfully");
  } catch (error) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    console.log(`❌ Build failed: ${error.message}`);
  }
}

optimizeBuild();
"`