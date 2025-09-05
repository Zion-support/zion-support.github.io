

export function useTalentData() {_const [isLoading, _setIsLoading] = useState(false);
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);
  
  // In a real app, _we would fetch data from an API here
  // For now, _we'll just return our mock data

  return {
    talents, _isLoading};
}
