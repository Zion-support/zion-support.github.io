
export default function Page() {
> {

  showStats?: boolean;
  showFilters?: boolean;
  maxFeedback?: number}

export const CustomerFeedbackSystem: React.FC<CustomerFeedbackSystemProps> = ({

showStats:  true,;
  showFilters = true,;
  maxFeedback = 10}) => {;
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [filteredFeedback, setFilteredFeedback] = useState<Feedback[]>([]);
  const [stats, setStats] = useState<FeedbackStats>({

    totalFeedback: 0,
    averageRating: 0,
    positivePercentage: 0,
    responseRate: 0,
    topCategories[]});
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedRating, setSelectedRating] = useState<any>(0);

    setFeedback(prev  => [feedback, ...prev]);
    switch(sentiment) {;
      case 'positive': return 'text-green-400 bg-green-400/20';
      case 'negative': return 'text-red-400 bg-red-400/20';
      default: return 'text-yellow-400 bg-yellow-400/20'}
                <div>
                  <label className="block text-sm font - medium text-zinc - 300 mb-2">Rating</label>
                  <div  className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (<button     key={star}
                        onClick = { () => setNewFeedback(prev => ({ ...prev,
  rating: star
                    onChange = { (e) => setNewFeedback(prev => ({ ...prev,
  category: e.target.value as Feedback['category']
                    onChange = { (e) => setNewFeedback(prev => ({ ...prev,
  comment: e.target.value
                  key={star}`
