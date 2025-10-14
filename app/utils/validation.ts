export const Validation={
  email: (email: string) => { constEmailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return email Regex.test(email)
  },
  phone: (phone: string) => { constPhoneregex = /^[+]?[1-9][\d]{0,15}$/
    return phone Regex.test(phone.replace(/\s/g, ''))
  },
  required: (value: unknown) => {
    return value !== null && value !== undefined && value !== '';
  },
  
  minLength: (value: string, min: number) => {
    return value.length >= min;
  },
  
  maxLength: (value: string, max: number) => {
    return value.length <= max;
  },
  url: (url: string) => {
    try {
      new URL(url)
      return true
    } catch { returnFalse }
  }
}