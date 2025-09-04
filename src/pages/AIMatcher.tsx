import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

// Mock AI Matchmaker component - in real app this would be a separate component
function AIMatchmaker({ serviceType, onMatchSelect }: { serviceType: string; onMatchSelect: (match: any) => void }) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock match result
    const mockMatch = {
      item: {
        id: '1',
        title: 'AI Development Service',
        description: 'Custom AI solution development',
        category: serviceType || 'service',
        price: '$5000+'
      }
    };
    
    onMatchSelect(mockMatch);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Describe what you need:
          </label>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., I need a web developer for an e-commerce site..."
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'AI is thinking...' : 'Find Matches'}
        </button>
      </form>
    </div>
  );
}

export default function AIMatcherPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleMatchSelect = (match: any) => {
    let itemType = "service";
    const category = match.item.category.toLowerCase();
    
    if (category.includes("talent") || category === "engineering" || 
        category === "data science" || category === "development") {
      itemType = "talent";
    } else if (category.includes("equipment") || category === "hardware") {
      itemType = "equipment";
    }
    
    toast({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`,
    });
    
    // Navigate to the quote request page with the selected item
    navigate("/request-quote", {
      state: { 
        serviceType: itemType,
        specificItem: match.item
      }
    });
  };

  return (
    <>
      <div className="min-h-screen bg-blue-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">AI Matchmaker</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <label className="block text-sm font-medium text-white mb-2">
                I'm looking for:
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-blue-800 border border-blue-600 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-blue-800 border border-blue-600">
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>
                  <SelectItem value="service" className="text-white">Services</SelectItem>
                  <SelectItem value="talent" className="text-white">Talent</SelectItem>
                  <SelectItem value="equipment" className="text-white">Equipment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <AIMatchmaker 
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
}
