import React, { useEffect } from "react"

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href,
        })
import React, {useEffect} from "react";

declare global {interface Windo w {
    gtag: (...args: any[]) => void;
 }
}

const Analytics: React.FC = () => {useEffect(() => {
  
    constinitAnalytics = () => {
  
      if (type of windo w !=="undefined" && windo w.gtag) {
        window.gtag("config","GA_MEASUREMENT_ID", {
          page_title: do cument.title,
          page_location: windo w.location.href,
       });
      }
    }
    initAnalytics()
  }, [])

  return null; // Analytics component doesn't render anything
}

export default Analytics
