import React, { createContext, useContext, ReactNode } from 'react'

interface WhitelabelConfig {
  brandName: string
  logo: string
  primaryColor: string
  contactInfo: {
    email: string
    phone: string
    address: string
  }
}

interface WhitelabelContextType {
  config: WhitelabelConfig
  updateConfig: (config: Partial<WhitelabelConfig>) => void
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined)

interface WhitelabelProviderProps {
  children: ReactNode
  initialConfig?: Partial<WhitelabelConfig>
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ 
  children, 
  initialConfig = {} 
}) => {
  const defaultConfig: WhitelabelConfig = {
    brandName: 'Zion',
    logo: '/logo.svg',
    primaryColor: '#000000',
    contactInfo: {
      email: 'contact@zion.app',
      phone: '+1 (555) 123-4567',
      address: '123 Main St, City, State 12345'
    },
    ...initialConfig
  }

  const [config, setConfig] = React.useState<WhitelabelConfig>(defaultConfig)

  const updateConfig = (newConfig: Partial<WhitelabelConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }))
  }

  return (
    <WhitelabelContext.Provider value={{ config, updateConfig }}>
      {children}
    </WhitelabelContext.Provider>
  )
}

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext)
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }
  return context
}