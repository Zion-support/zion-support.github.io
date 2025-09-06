
interface ClientBudgetRecommenderProps {
  jobTitle: string,
  category: string,
  timeline?: string;
  scope?: string;
  experienceLevel?: string;
  onSuggestionApplied: (minValue: number, maxValue: number) => void
}

export const ClientBudgetRecommender: React.FC<ClientBudgetRecommenderProps> = ({
  jobTitle;
  category;
  timeline;
  scope;
  experienceLevel;
  onSuggestionApplied}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PricingSuggestion | null>(null);
  const { user } = useAuth();

  const generateSuggestion = async () => {
    if (!jobTitle || !category) {
      return
    }

    setIsLoading(true);
    try {
      const params: ClientBudgetParams = {
        jobTitle;
        category};

      if (timeline) params.timeline = timeline;
      if (scope) params.scope = scope;
      if (experienceLevel) params.experienceLevel = experienceLevel;

