import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
import Link from "next/link";

function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === "" || envVar === "undefined") {
    return fallback;
  }
  return envVar;
}

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}