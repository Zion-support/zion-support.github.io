import { useEffect } from 'react'

export function useSEO(title: string, description: string, keywords: string) {
export const useSEO = (title: string, description: string, keywords: string) => {
export const useSEO = (title: string, description: string, keywords?: string) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const metaDescription = document.querySelector('meta[name="description"]')
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords)
      }
      
      if (metaKeywords) {
      if (metaKeywords && keywords) {
        metaKeywords.setAttribute('content', keywords)
      }
      
      document.title = title
    }
  }, [title, description, keywords])
}