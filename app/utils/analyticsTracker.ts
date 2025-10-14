export const analytics Tracker = {
  track Page View: (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: page
      })
    }

  },
  track Click: (element: string, location: string) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        element: element,
        location: location
      })
    }

  },
  track Form Submit: (form Name: string, success: boolean) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'form_submit', {
        form_name: form Name,
        success: success
      })
    }

  },
  track Conversion: (conversion Id: string, value?: number) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'conversion', {
        conversion_id: conversion Id,
        value: value
      })
    }

  }

}
