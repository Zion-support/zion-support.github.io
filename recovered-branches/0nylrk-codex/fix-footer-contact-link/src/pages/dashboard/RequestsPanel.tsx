
  const {





  return (
    <ProtectedRoute>
      <div>


        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader


import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function RequestsPanel() { return null; }
  const { user } = useAuth(),;'
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
  const {;




    <ProtectedRoute>;










        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}









