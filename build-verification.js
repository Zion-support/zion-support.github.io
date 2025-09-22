
"use strict";

console.log("🔍 Starting build verification...");

function tryRequire(name) {
  try {
    return { ok: true, mod: require(name) };
  } catch (err) {
    return { ok: false, error: err };
  }
}

console.log("📦 Testing component imports (best-effort)...");

const react = tryRequire("react");
if (react.ok) {
  const React = react.mod;
  console.log("✅ React import", React && React.version ? React.version : "unknown");
} else {
  console.warn("⚠️ React not installed:", react.error && react.error.message ? react.error.message : react.error);
}

const framer = tryRequire("framer-motion");
if (framer.ok) {
  const { motion } = framer.mod;
  console.log("✅ Framer Motion import", typeof motion);
} else {
  console.warn("⚠️ framer-motion not installed:", framer.error && framer.error.message ? framer.error.message : framer.error);
}

const lucide = tryRequire("lucide-react");
if (lucide.ok) {
  const { ArrowRight, CheckCircle, Brain, Cloud, Shield, Zap } = lucide.mod;
  console.log("✅ Lucide React import", {
    ArrowRight: typeof ArrowRight,
    CheckCircle: typeof CheckCircle,
    Brain: typeof Brain,
    Cloud: typeof Cloud,
    Shield: typeof Shield,
    Zap: typeof Zap,
  });
} else {
  console.warn("⚠️ lucide-react not installed:", lucide.error && lucide.error.message ? lucide.error.message : lucide.error);
}

console.log("🏁 Build verification complete (non-fatal if deps missing)");
