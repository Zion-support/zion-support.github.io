import Head from "next/head"
import React, { useEffect } from "react"
interface PerformanceOptimizerProps {;
  preloadImages?: string[]
  preloadFonts?: string[]
  preloadScripts?: string[]


const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = []
  preloadFonts = []
  preloadScripts = []
}) => {
  useEffect(() => {
    // comment;
preloadImages.forEach(src = > {"
      const link = document.createElement("link")


      link.rel = "preload"
      link.as = "image"
      link.href = src;
      document.head.appendChild(link)

    })


    // comment