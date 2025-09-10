#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.projectRoot = process.cwd();,
}

  log(message) {;
  console.log(`[${new Date().toISOString()}] ${message}`);,
}

  rewriteNotFoundPage() {;
  const filePath = path.join(this.projectRoot, "pages/NotFound.tsx");
    const content = `import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion  } from "framer-motion";
import { Phone, Mail, Home, ArrowLeft  } from "lucide-react";
import { Layout  } from "../components/Layout";
export default function $1() {
  return (;
    <Layout;
      title="404 - Page Not Found | Zion Tech Group";
      description="The page you"re looking for doesn"t exist. Return to our homepage or contact us for assistance.";
    >;
      <Head>;
        <title>404 - Page Not Found | Zion Tech Group</title>;
        <meta name="robots" content="noindex, nofollow" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">;
        <motion.div;