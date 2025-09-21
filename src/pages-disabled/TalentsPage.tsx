import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { ArrowUp, Filter, SortAsc, Users, TrendingUp, Star, Verified, MapPin } from 'lucide-react',
export default function TalentsPage() {
  const router = useRouter();
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);, []);

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Find Top Talent
        </h1>
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan" />
              <input
                type="text"
                placeholder="Filter by skills..."
                className="pl-10 pr-4 py-2 bg-zion-blue-dark border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
              />
            </div>
            <button className="px-4 py-2 bg-zion-cyan text-zion-blue rounded-lg hover:bg-zion-cyan/80 transition-colors">
              <SortAsc className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-cyan/20">
                <div className="h-4 bg-zion-cyan/20 rounded animate-pulse mb-4"></div>
                <div className="h-3 bg-zion-cyan/20 rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-zion-cyan/20 rounded animate-pulse w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zion-cyan/80 text-lg">No talents found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}