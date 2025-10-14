import { useEffect } from 'react'

export const useSEO = (title: string, description: string, keywords?: string) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const metaDescription = document.querySelector('meta[name="description"]')
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }

      if (metaKeywords && keywords) {
        metaKeywords.setAttribute('content', keywords)
      
      document.title = title
  }, [title, description, keywords])