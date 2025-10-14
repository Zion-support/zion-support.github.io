export const advanced Analytics = {
  track Page View: (page: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
      })
    }

  },
  track Event: (event Name: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', event Name, parameters)
    }

  },
  track Conversion: (conversion Id: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: conversion Id,
        value: value,
        currency: currency
      })
    }

  },
  set User Properties: (properties: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        custom_map: properties
      })
    }

  }

}
