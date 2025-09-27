import React, { useEffect  } from 'react';
import type { AppProps  } from 'next/app';
import { HelmetProvider  } from "react-helmet-async";
import Head from 'next/head';
import dynamic from 'next/dynamic';
ursor/check-fix-push-and-merge-to-main-2926
import '../styles/animations.css';
import '../src/styles/accessibility.css';
import '../src/styles/improvements.css';
export default function App({ Component, pageProps  }: AppProps) {
  // Register service worker for performance optimization
  useEffect(() => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('/sw.js')
  .then((registration) => {
  console.log('SW registered: ', registration);  })
  .catch((registrationError) => {
  console.log('SW registration failed: ', registrationError);  });  });  }  }, []);
  return (
ursor/check-fix-push-and-merge-to-main-2926