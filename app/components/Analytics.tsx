'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (..._args: any[]) => void
  }
}

const Analytics: React.FC = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!GA_TRACKING_ID) return

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [GA_TRACKING_ID])

  if (!GA_TRACKING_ID) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

export default Analytics