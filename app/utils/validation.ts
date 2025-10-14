export const validation = {
  email: (email: string) => {
    const email Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return email Regex.test(email)
  },
  phone: (phone: string) => {
    const phone Regex = /^[+]?[1-9][\d]{0,15}$/
    return phone Regex.test(phone.replace(/\s/g, ''))
  },
  required: (value: unknown) => {
    return value !== null && value !== undefined && value !== '';
  required: (value: any) => {
  required: (value: unknown) => {
    return value !== null && value !== undefined && value !== ''
  },
  min Length: (value: string, min: number) => {
    return value.length >= min
  },
  max Length: (value: string, max: number) => {
    return value.length <= max
  },
  url: (url: string) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }
}
}}