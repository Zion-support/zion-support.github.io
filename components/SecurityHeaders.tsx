import Head from "next/head"
import React, { useEffect } from "react;
const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags;
    const addSecurityHeaders = () => {;
      const securityMetaTags = [;
        { name: "referrer",
    content: "strict-origin-when-cross-origin" },"        { name: "x-content-type-options",
    content: "nosniff" },"        { name: "x-frame-options",
    content: "DENY" },"        { name: "x-xss-protection",
    content: "1; mode=block" }, { name: "permissions-policy",
    content: "camera=(), microphone=(), geolocation=(), interest-cohort=()" }, { name: "content-security-policy",
    content: "default-src "self;
 script-src "self" "unsafe-inline" "unsafe-eval" https: //fonts.googleapis.com https://www.google-analytics.com; style-src "self" "unsafe-inline" https: //fonts.googleapis.com; font-src "self" https: //fonts.gstatic.com; img-src "self" data: https:; connect-src "self" https: //api.ziontechgroup.com; frame-ancestors "none;