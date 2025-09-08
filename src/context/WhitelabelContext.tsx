<<<<<<< HEAD

const WhitelabelContext = createContext(defaultConfig);
export const useWhitelabel = () => useContext(WhitelabelContext);

export function WhitelabelProvider({ children, config = {} }) {
	const mergedConfig = { ...defaultConfig, ...config, contactInfo: { ...defaultConfig.contactInfo, ...config.contactInfo } };
	return <WhitelabelContext.Provider value={mergedConfig}>{children}</WhitelabelContext.Provider>;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  const mergedConfig = { ...defaultConfig, ...config };

  return (
    <WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>
  );
<<<<<<< HEAD
};
