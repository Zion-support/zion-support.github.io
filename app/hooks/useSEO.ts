import { useEffect } from &apos;react&apos;

export const useSEO = (title: string, description: string, keywords: string) => {
export const useSEO = (title: string, description: string, keywords?: string) => {
  useEffect(() => {
    if (typeof document !== &apos;undefined&apos;) {
      const metaDescription = document.querySelector(&apos;meta[name="description"]&apos;)
      const metaKeywords = document.querySelector(&apos;meta[name="keywords"]&apos;)
      
      if (metaDescription) {
        metaDescription.setAttribute(&apos;content&apos;, description)
      }
      if (metaKeywords) {
        metaKeywords.setAttribute(&apos;content&apos;, keywords)
      }
      
      if (metaKeywords) {
      if (metaKeywords && keywords) {
        metaKeywords.setAttribute(&apos;content&apos;, keywords)
      }
      
      document.title = title
    }
  }, [title, description, keywords])
}
}}