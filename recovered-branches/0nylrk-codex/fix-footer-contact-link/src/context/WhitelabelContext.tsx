

  tenant: WhitelabelTenant | null
}

  }
  "isWhitelabel": false,
  "primaryColor": "#9b87f5", // Default Zion purple"
  "logoUrl": null,
  "brandName": "Zion AI Marketplace","
  "themePreset": "light","
  "landingPageCopy": {
    }
    "headline": "AI Talent Marketplace","
    "subtitle": "Find the best AI talent for your projects","
    "cta": "Get Started","
  },
  "tenant": null
};

    headline: 'AI Talent Marketplace',
    subtitle: 'Find the best AI talent for your projects',
    cta: 'Get Started'},
  tenant: null},



export const useWhitelabel = (): WhitelabelContextType => {;








interface WhitelabelProviderProps {;
  children: ReactNode;
}

export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant();







