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
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </footer>
  );
}