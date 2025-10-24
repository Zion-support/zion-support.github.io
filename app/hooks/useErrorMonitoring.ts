import { useEffect } from 'react'
export const useErrorMonitoring = ($2: any) => ,{
  useEffect(() => {
    const handleError = ($2: any) => ,{
      console.error('Error caught: ', error)
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])
}
