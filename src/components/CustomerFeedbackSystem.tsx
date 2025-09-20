import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {;
  Star,;
  MessageCircle,;
  ThumbsUp,;
  ThumbsDown,;
  Send,;
  Heart,;
  Award,;
  TrendingUp,;
  Users,;
  Clock,;
  Flag,;
  Share2,;
  Download,;
  Filter,;
  Search;
} from "lucide-react"
interface Feedback {;
  id: string,customerName: string,rating: number,comment: string,category: 'service' | 'product' | 'support' | 'overall',sentiment: 'positive' | 'neutral' | 'negative',date: string,helpful: number,unhelpful: number,tags: string[],verified: boolean;
};

interface FeedbackStats {;
  totalFeedback: number,averageRating: number,positivePercentage: number,responseRate: number,topCategories: Array<{ category: string, count: number, percentage: number }>;
};

interface CustomerFeedbackSystemProps {;
  showStats?: boolean,;
  showFilters?: boolean,;
  maxFeedback?: number,;
};

export const CustomerFeedbackSystem: React.FC<CustomerFeedbackSystemProps> = ({;
  showStats = true;
  showFilters = true,;
  maxFeedback = 10;
}) => {;
  const [feedback, setFeedback] = useState<Feedback[]>([]),;
  const [filteredFeedback, setFilteredFeedback] = useState<Feedback[]>([]),;
  const [stats, setStats] = useState<FeedbackStats>({;
    totalFeedback: 0,averageRating: 0,positivePercentage: 0,responseRate: 0,topCategories: []
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [selectedRating, setSelectedRating] = useState<number>(0),;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [showFeedbackForm, setShowFeedbackForm] = useState(false),;
  const [newFeedback, setNewFeedback] = useState({;
    rating: 0,comment: '',category: 'overall' as Feedback['category']
  });
  //[^;]*
  useEffect(() => {;
    const sampleFeedback: Feedback[] = [;
      {;
        id: '1',customerName: 'Sarah Johnson',rating: 5,comment: 'Exceptional AI consulting services! The team at Zion Tech Group delivered beyond our expectations. Their expertise in machine learning helped us optimize our processes significantly.',category: 'service',sentiment: 'positive',date: '2024-01-15',helpful: 24,unhelpful: 1,tags: ['AIConsulting', 'Machine Learning'],;
        verified: true;
      };
      {;
        id: '2',customerName: 'Michael Chen',rating: 4,comment: 'Great cloud migration support. The team was professional and helped us transition smoothly to the cloud. Minor delays but overall excellent experience.',category: 'support',sentiment: 'positive',date: '2024-01-12',helpful: 18,unhelpful: 2,tags: ['CloudMigration', 'Support'],;
        verified: true;
      };
      {;
        id: '3',customerName: 'Emily Rodriguez',rating: 5,comment: 'Outstanding digital transformation project! Zion Tech Group helped us modernize our entire infrastructure. ROI was achieved within 6 months.',category: 'product',sentiment: 'positive',date: '2024-01-10',helpful: 31,unhelpful: 0,tags: ['Digital TransformationInfrastructure', 'ROI'],;
        verified: true;
      };
      {;
        id: '4',customerName: 'David Kim',rating: 3,comment: 'Good security services but communication could be improved. The technical work was solid but project updates were infrequent.',category: 'service',sentiment: 'neutral',date: '2024-01-08',helpful: 12,unhelpful: 5,tags: ['SecurityCommunication', 'Project Management'],;
        verified: true;
      };
      {;
        id: '5',customerName: 'Lisa Thompson',rating: 5,comment: 'Amazing team! They helped us implement AI solutions that increased our efficiency by 40%. Highly recommend their services.',category: 'overall',sentiment: 'positive',date: '2024-01-05',helpful: 28,unhelpful: 1,tags: ['AIEfficiency', 'Implementation'],;
        verified: true;
      };
    ];
    setFeedback(sampleFeedback),;
    setFilteredFeedback(sampleFeedback),;
  }, []),;

  //[^;]*
  useEffect(() => {;
    if (feedback.length > 0) {;
      const totalFeedback = feedback.length
      const averageRating = feedback.reduce((sum, f) => sum + f.rating, 0) / totalFeedback;
      const positivePercentage = (feedback.filter(f => f.sentiment === 'positive').length / totalFeedback) * 100;
      const responseRate = 95, //[^;]*

      const categoryCounts = feedback.reduce((acc, f) => {;
        acc[f.category] = (acc[f.category] || 0) + 1,
        return acc,;
      }, {} as Record<string, number>),;

      const topCategories = Object.entries(categoryCounts)
        .map(([category, count]) => ({;
          category: category.charAt(0).toUpperCase() + category.slice(1)
          count,;
          percentage: (count / totalFeedback) * 100;
        }));
        .sort((a, b) => b.count - a.count);
        .slice(0, 4),;

      setStats({;
        totalFeedback,;
        averageRating,;
        positivePercentage,;
        responseRate,;
        topCategories;
      }),;
    };
  }, [feedback]),;

  //[^;]*
  useEffect(() => {;
    let filtered = feedback;

    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(f => f.category === selectedCategory),;
    };

    if (selectedRating > 0) {;
      filtered = filtered.filter(f => f.rating === selectedRating),;
    };

    if (searchQuery) {;
      filtered = filtered.filter(f =>;
        f.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        f.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        f.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      ),;
    };

    setFilteredFeedback(filtered.slice(0, maxFeedback)),;
  }, [feedback, selectedCategory, selectedRating, searchQuery, maxFeedback]),;

  //[^;]*
  const handleSubmitFeedback = () => {;
    if (newFeedback.rating === 0 || !newFeedback.comment.trim()) return,

    const feedback: Feedback = {;
      id: Date.now().toString(),customerName: 'Anonymous Customer',rating: newFeedback.rating,comment: newFeedback.comment,category: newFeedback.category,sentiment: newFeedback.rating >= 4 ? 'positive' : newFeedback.rating >= 3 ? 'neutral' : 'negative',date: new Date().toISOString().split('T')[0],helpful: 0,unhelpful: 0,tags: [],verified: false
    };
    setFeedback(prev => [feedback, ...prev]),;
    setNewFeedback({ rating: 0, comment: '', category: 'overall' })
    setShowFeedbackForm(false),;
  },;

  //[^;]*
  const handleVote = (feedbackId: string, type: 'helpful' | 'unhelpful') => {;
    setFeedback(prev => prev.map(f => {;
      if (f.id === feedbackId) {;
        return {;
          ...f
          helpful: type === 'helpful' ? f.helpful + 1 : f.helpful,unhelpful: type === 'unhelpful' ? f.unhelpful + 1 : f.unhelpful
        };
      };
      return f,;
    })),;
  },;

  //[^;]*
  const getSentimentColor = (sentiment: string) => {;
    switch (sentiment) {;
      case 'positive': return 'text-green-400 bg-green-400/20'
      case 'negative': return 'text-red-400 bg-red-400/20',;
      default: return 'text-yellow-400 bg-yellow-400/20'
    };
  };
  //[^;]*
  const getCategoryColor = (category: string) => {;
    const colors = {;
      'service': 'text-blue-400 bg-blue-400/20product': 'text-green-400 bg-green-400/20support': 'text-purple-400 bg-purple-400/20overall': 'text-zion-cyan bg-zion-cyan/20'
    };
    return colors[category as keyof typeof colors] || 'text-zinc-400 bg-zinc-400/20',
  },;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">;
      {/* Header */};
      <div className="text-center mb-8">;
        <h1 className="text-4xl font-bold text-white mb-4">Customer Feedback</[^>]*>
        <p className="text-zinc-400 text-lg">See what our customers are saying about Zion Tech Group</[^>]*>
      </[^>]*>

      {/* Stats Section */};
      {showStats && (;&& (; (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            className="[^"]*"
          >;
            <div className="text-3xl font-bold text-white mb-2">{stats.totalFeedback}</[^>]*>
            <div className="text-zinc-400">Total Reviews</[^>]*>
          </[^>]*>

          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ delay: 0.1 }};
            className="[^"]*"
          >;
            <div className="flex items-center justify-center gap-2 mb-2">;
              <div className="text-3xl font-bold text-white">{stats.averageRating.toFixed(1)}</[^>]*>
              <div className="flex">;
                {[1, 2, 3, 4, 5].map((star) => (;
                  <Star;
                    key={star};
                    className={`w-5 h-5 ${;
                      star <= stats.averageRating ? 'text-yellow-400 fill-current' : 'text-zinc-600'
                    }`};
                  />;
                ))};
              </[^>]*>
            </[^>]*>
            <div className="text-zinc-400">Average Rating</[^>]*>
          </[^>]*>

          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ delay: 0.2 }};
            className="[^"]*"
          >;
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.positivePercentage.toFixed(1)}%</[^>]*>
            <div className="text-zinc-400">Positive Feedback</[^>]*>
          </[^>]*>

          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ delay: 0.3 }};
            className="[^"]*"
          >;
            <div className="text-3xl font-bold text-zion-cyan mb-2">{stats.responseRate}%</[^>]*>
            <div className="text-zinc-400">Response Rate</[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* Top Categories */};
      {showStats && (;&& (; (
        <div className="mb-8">;
          <h3 className="text-xl font-semibold text-white mb-4">Top Categories</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">;
            {stats.topCategories.map((category, index) => (;
              <motion.div
                key={category.category};
                initial={{ opacity: 0, scale: 0.9 }};
                animate={{ opacity: 1, scale: 1 }};
                transition={{ delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="text-2xl font-bold text-white mb-1">{category.count}</[^>]*>
                <div className="text-zinc-400 text-sm">{category.category}</[^>]*>
                <div className="text-zion-cyan text-xs">{category.percentage.toFixed(1)}%</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      )};

      {/* Filters and Search */};
      {showFilters && (;&& (; (
        <div className="flex flex-wrap items-center gap-4 mb-6">;
          {/* Category Filter */};
          <select;
            value={selectedCategory};
            onChange={(e) => setSelectedCategory(e.target.value)};
            className="[^"]*"
          >;
            <option value="all">All Categories</[^>]*>
            <option value="service">Service</[^>]*>
            <option value="product">Product</[^>]*>
            <option value="support">Support</[^>]*>
            <option value="overall">Overall</[^>]*>
          </[^>]*>

          {/* Rating Filter */};
          <select;
            value={selectedRating};
            onChange={(e) => setSelectedRating(Number(e.target.value))};
            className="[^"]*"
          >;
            <option value={0}>All Ratings</[^>]*>
            <option value={5}>5 Stars</[^>]*>
            <option value={4}>4+ Stars</[^>]*>
            <option value={3}>3+ Stars</[^>]*>
            <option value={2}>2+ Stars</[^>]*>
            <option value={1}>1+ Stars</[^>]*>
          </[^>]*>

          {/* Search */};
          <div className="relative flex-1 max-w-md">;
            <[^>]*/>
            <input;
              type="text"
              value={searchQuery};
              onChange={(e) => setSearchQuery(e.target.value)};
              placeholder="Search feedback..."
              className="[^"]*"
            />;
          </[^>]*>

          {/* Add Feedback Button */};
          <button;
            onClick={() => setShowFeedbackForm(!showFeedbackForm)};
            className="[^"]*"
          >;
            <[^>]*/>
            Add Feedback;
          </[^>]*>
        </[^>]*>
      )};

      {/* Feedback Form */};
      <AnimatePresence>;
        {showFeedbackForm && (;&& (; (
          <motion.div
            initial={{ height: 0, opacity: 0 }};
            animate={{ height: 'auto', opacity: 1 }};
            exit={{ height: 0, opacity: 0 }};
            transition={{ duration: 0.3 }};
            className="[^"]*"
          >;
            <div className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl">;
              <h3 className="text-lg font-semibold text-white mb-4">Share Your Experience</[^>]*>

              <div className="space-y-4">;
                {/* Rating */};
                <div>;
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Rating</[^>]*>
                  <div className="flex gap-2">;
                    {[1, 2, 3, 4, 5].map((star) => (;
                      <button;
                        key={star};
                        onClick={() => setNewFeedback(prev => ({ ...prev, rating: star }))};
                        className="[^"]*"
                      >;
                        <Star;
                          className={`w-8 h-8 ${;
                            star <= newFeedback.rating ? 'text-yellow-400 fill-current' : 'text-zinc-600'
                          }`};
                        />;
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>

                {/* Category */};
                <div>;
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Category</[^>]*>
                  <select;
                    value={newFeedback.category};
                    onChange={(e) => setNewFeedback(prev => ({ ...prev, category: e.target.value as Feedback['category'] }))};
                    className="[^"]*"
                  >;
                    <option value="overall">Overall Experience</[^>]*>
                    <option value="service">Service Quality</[^>]*>
                    <option value="product">Product/Technology</[^>]*>
                    <option value="support">Customer Support</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Comment */};
                <div>;
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Your Feedback</[^>]*>
                  <textarea;
                    value={newFeedback.comment};
                    onChange={(e) => setNewFeedback(prev => ({ ...prev, comment: e.target.value }))};
                    placeholder="Share your experience with Zion Tech Group..."
                    rows={4};
                    className="[^"]*"
                  />;
                </[^>]*>

                {/* Submit Button */};
                <div className="flex gap-3">;
                  <button;
                    onClick={handleSubmitFeedback};
                    disabled={newFeedback.rating === 0 || !newFeedback.comment.trim()}
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    Submit Feedback;
                  </[^>]*>
                  <button;
                    onClick={() => setShowFeedbackForm(false)};
                    className="[^"]*"
                  >;
                    Cancel;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Feedback List */};
      <div className="space-y-4">;
        {filteredFeedback.map((item, index) => (;
          <motion.div
            key={item.id};
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ delay: index * 0.1 }};
            className="[^"]*"
          >;
            {/* Header */};
            <div className="flex items-start justify-between mb-4">;
              <div className="flex items-center gap-3">;
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zion-cyan font-semibold">;
                  {item.customerName.charAt(0)};
                </[^>]*>
                <div>;
                  <div className="flex items-center gap-2">;
                    <h4 className="font-semibold text-white">{item.customerName}</[^>]*>
                    {item.verified && (;&& (; (
                      <[^>]*/>
                    )};
                  </[^>]*>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">;
                    <[^>]*/>
                    {new Date(item.date).toLocaleDateString()};
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              <div className="flex items-center gap-2">;
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)};
                </[^>]*>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(item.sentiment)}`}>;
                  {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)};
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Rating */};
            <div className="flex items-center gap-2 mb-3">;
              {[1, 2, 3, 4, 5].map((star) => (;
                <Star;
                  key={star};
                  className={`w-5 h-5 ${;
                    star <= item.rating ? 'text-yellow-400 fill-current' : 'text-zinc-600'
                  }`};
                />;
              ))};
              <span className="text-sm text-zinc-400 ml-2">{item.rating}/5</[^>]*>
            </[^>]*>

            {/* Comment */};
            <p className="text-zinc-300 mb-4 leading-relaxed">{item.comment}</[^>]*>

            {/* Tags */};
            {item.tags.length > 0 && (;&& (; (
              <div className="flex flex-wrap gap-2 mb-4">;
                {item.tags.map((tag) => (;
                  <span;
                    key={tag};
                    className="[^"]*"
                  >;
                    {tag};
                  </[^>]*>
                ))};
              </[^>]*>
            )};

            {/* Actions */};
            <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">;
              <div className="flex items-center gap-4">;
                <button;
                  onClick={() => handleVote(item.id, 'helpful')};
                  className="[^"]*"
                >;
                  <[^>]*/>
                  <span className="text-sm">{item.helpful}</[^>]*>
                </[^>]*>
                <button;
                  onClick={() => handleVote(item.id, 'unhelpful')};
                  className="[^"]*"
                >;
                  <[^>]*/>
                  <span className="text-sm">{item.unhelpful}</[^>]*>
                </[^>]*>
                <button className="flex items-center gap-2 text-zinc-400 hover:text-zion-cyan transition-colors">;
                  <[^>]*/>
                  <span className="text-sm">Share</[^>]*>
                </[^>]*>
              </[^>]*>

              <button className="text-zinc-400 hover:text-red-400 transition-colors">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        ))};
      </[^>]*>

      {/* No Results */};
      {filteredFeedback.length === 0 && (;&& (; (
        <motion.div
          initial={{ opacity: 0 }};
          animate={{ opacity: 1 }};
          className="[^"]*"
        >;
          <[^>]*/>
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No feedback found</[^>]*>
          <p className="text-zinc-400 mb-4">;
            Try adjusting your filters or be the first to share your experience!;
          </[^>]*>
          <button;
            onClick={() => setShowFeedbackForm(true)};
            className="[^"]*"
          >;
            Add Feedback;
          </[^>]*>
        </[^>]*>
      )};
    </[^>]*>
  );
};