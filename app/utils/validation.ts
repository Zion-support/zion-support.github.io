export const validation = {
  email: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },
  
  phone: (phone: string) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  },
  
  required: (value: any) => {
    return value !== null && value !== undefined && value !== ''
  },
  
  minLength: (value: string, min: number) => {
    return value.length >= min
  },
  
  maxLength: (value: string, max: number) => {
    return value.length <= max
  }
}