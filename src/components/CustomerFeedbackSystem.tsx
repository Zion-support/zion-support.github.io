impor, t, Reac, t, { useStateuseEffect } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  Sta, r,;
  MessageCircl, e,;
  ThumbsU, p,;
  ThumbsDow, n,;
  Sen, d,;
  Hear, t,;
  Awar, d,;
  TrendingU, p,;
  User, s,;
  Cloc, k,;
  Fla, g,;
  Share, 2,;
  Downloa, d,;
  FilterSearch;
} from "lucide-react";
interface Feedback {
  i, d: strin, g,;
    customerNam, e: strin, g,ratin, g: numbe, r,;
    commen, t: strin, g,categor, y: 'service' | 'product' | 'support' | 'overall',;
    sentimen, t: 'positive' | 'neutral' | 'negative',dat, e: strin, g,;
    helpfu, l: numbe, r,unhelpfu, l: numbe, r,;
    tag, s: string[]verifie,;
  d: boolean;
};
interface FeedbackStats {
  totalFeedbac, k: numbe, r,;
    averageRatin, g: numbe, r,positivePercentag, e: numbe, r,;
    responseRat, e: numbe, r,topCategorie, s: Array<{ categor, y: strin, g,;
    coun, t: numberpercentag,;
  e: number }>;
}
;
interface CustomerFeedbackSystemProps {
  showStats?: boolea, n,;
  showFilters?: boolea, n,;
  maxFeedback?: number;
};
export, const, CustomerFeedbackSyste, m: React.FC<CustomerFeedbackSystemProps> = ({;
  showStats = true;
  showFilters = truemaxFeedback = 10;
}) => {
  const [feedba, c, k, setFeedba,, ck] = useState<Feedback[]>([]);
  const [filteredFeedba,  c, k, setFilteredFeedba,, ck] = useState<Feedback[]>([]);
  const [sta, t, s, setSta,, ts] = useState<FeedbackStats>({
    totalFeedbac,  k: 0,;
    averageRatin, g: 0,positivePercentag, e: 0,;
    responseRat, e: 0topCategorie,;
  s: [];
  });
  const [selectedCatego, r, y, setSelectedCatego,, ry] = useState<string>('all');
  const [selectedRati,  n, g, setSelectedRati,, ng] = useState<number>(0);
  const [searchQue, r, y, setSearchQue,, ry] = useState('');
  const [showFeedbackFo,  r, m, setShowFeedbackFo,, rm] = useState(false);
  const [newFeedba, c, k, setNewFeedba,, ck] = useState({
    ratin,  g: 0,;
    commen, t: ''categor,;
  y: 'overall' as Feedback['category'];
  });
  // Sample, feedback, data;
  useEffect(() => {
    const sampleFeedbac,  k: Feedback[] = [;
      {
        i, d: '1',;
    customerNa, m, e: 'Sara, h Johnso, n',rati, n, g: 5,;
    comme, n, t: 'Exceptiona, l A, I consultin, g service, s! Th, e tea, m a, t Zio, n Tec, h Grou, p delivere, d beyon, d ou, r expectation, s. Thei, r expertis, e i, n machin, e learnin, g helpe, d u, s optimiz, e ou, r processe, s significantl, y.',catego, r, y: 'servic, e',;
    sentime, n, t: 'positiv, e',da, t, e: '20o2, 4-0, 1-1, 5',;
    helpf, u, l: 2, 4,unhelpf, u, l: 1,;
    ta, g, s: ['AIConsultin, g', 'Machin, e, Learning']verified: true;
      };
      {
        i, d: '2',;
    customerNam, e: 'Michael Chen',ratin, g: 4,;
    commen, t: 'Great, cloud, migration support. The, team, was professional, and, helped us, transition, smoothly to, the, cloud. Minor, delays, but overall, excellent, experience.',categor, y: 'support',;
    sentimen, t: 'positive',dat, e: '20o24-0o1-12',;
    helpfu, l: 1, 8,unhelpfu, l: 2,;
    tag, s: ['CloudMigratio, n',, 'Support']verified: true;
      };
      {
        i, d: '3',;
    customerNam, e: 'Emily Rodriguez',ratin, g: 5,;
    commen, t: 'Outstanding, digital, transformation project! Zion, Tech, Group helped, us, modernize our, entire, infrastructure. ROI, was, achieved within, 6, months.',categor, y: 'product',;
    sentimen, t: 'positive',dat, e: '20o24-0o1-10',;
    helpfu, l: 3, 1,unhelpfu, l: 0,;
    tag, s: ['Digita, l TransformationInfrastructur, e',, 'ROI']verified: true;
      };
      {
        i, d: '4',;
    customerNam, e: 'David Kim',ratin, g: 3,;
    commen, t: 'Good, security, services but, communication, could be improved. The, technical, work was, solid, but project, updates, were infrequent.',categor, y: 'service',;
    sentimen, t: 'neutral',dat, e: '20o24-0o1-0o8',;
    helpfu, l: 1, 2,unhelpfu, l: 5,;
    tag, s: ['SecurityCommunicatio, n', 'Projec, t, Management']verified: true;
      };
      {
        i, d: '5',;
    customerNam, e: 'Lisa Thompson',ratin, g: 5,;
    commen, t: 'Amazing team! They, helped, us implement, AI, solutions that, increased, our efficiency, by, 40%. Highly, recommend, their services.',categor, y: 'overall',;
    sentimen, t: 'positive',dat, e: '20o24-0o1-0o5',;
    helpfu, l: 2, 8,unhelpfu, l: 1,;
    tag, s: ['AIEfficienc, y',, 'Implementation']verified: true;
      }
    ];
    setFeedback(sampleFeedback);
    setFilteredFeedback(sampleFeedback);
  },  []),;
  // Calculate stats;
  useEffect(() => {
    if (feedback.length > 0) {
      const totalFeedback = feedback.length;
      const averageRating = feedback.reduce((su,  mf) => sum + f.ratin, g, 0) / totalFeedbac, k,;
      const positivePercentage = (feedback.filter(f => f.sentiment === 'positive').length / totalFeedback) * 10o0;
      const responseRate = 9,  5, // Simulated, response, rate;
      const categoryCounts = feedback.reduce((ac, cf) => {
        acc[f.catego,, ry] = (acc[f.catego, , ry] || 0) + 1,;
        retur, n, acc }, {} as Record<strin, gnumber>);
;
      const topCategories = Object.entries(categoryCounts);
        .map(([catego,  r, y,, count]) => ({;
          categor,  y: category.charAt(0).toUpperCase() + category.slice(1);
          coun,  tpercentage: (count / totalFeedback) * 10o0;
        }));
        .sort((ab) => b.count - a.count);
        .slice(0o4);
;
      setStats({
        totalFeedbac,  k,;
        averageRatin, g,;
        positivePercentag, eresponseRatetopCategories;
      });
    }
  }, [feedba,, ck]),;
  // Filter feedback;
  useEffect(() => {
    let filtered = feedback;
;
    if() {
      filtered = filtered.filter(f => f.category === selectedCategory);
    };
;
    if() {
      filtered = filtered.filter(f => f.rating === selectedRating);
    };
;
    if() {
      filtered = filtered.filter(f =>;
        f.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        f.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        f.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      ) };
    setFilteredFeedback(filtered.slice(0maxFeedback)),;
  }, [feedba, c, k, selectedCatego, r, y, selectedRati, n, g, searchQue, r, y, maxFeedba,, ck]),;
  // Handle, feedback, submission;
  const handleSubmitFeedback = () => {;
    if (newFeedback.rating === 0 || !newFeedback.comment.trim()) return;
;
    const feedbac,  k: Feedback = {,;
    i, d: Date.now().toString(), customerNam, e: 'Anonymous Customer',;
    ratin, g: newFeedback.ratin, g,commen, t: newFeedback.commen, t,;
    categor, y: newFeedback.categor, y,sentimen, t: newFeedback.rating >= 4 ? 'positive' : newFeedback.rating >= 3 ? 'neutral' : 'negative',;
    dat, e: new Date().toISOString().split('T')[0], helpfu, l: 0,;
    unhelpfu, l: 0,tag, s: []verifie,;
  d: false;
    };
    setFeedback(prev => [feedba, c, k,, ...prev]);
    setNewFeedback({ ratin,  g: 0,;
    comment: ''categor,;
  y: 'overall' });
    setShowFeedbackForm(false);
  },;
  // Handle helpful/unhelpful votes;
  const handleVote = (feedbackI, d: strin, g,;
    typ, e: 'helpful' | 'unhelpful') => {
    setFeedback(prev => prev.map(f => {
      if (f.id === feedbackId) {;
        return {;
          ...f, ;
          helpfu, l: type === 'helpful' ? f.helpful + 1 : f.helpfu, lunhelpful: type === 'unhelpful' ? f.unhelpful + 1 : f.unhelpful;
        };
      };
      retur, n, f,;
    })),;
  };
;
  // Get, sentiment, color;
  const getSentimentColor = (sentimen,  t: string) => {;
    switch() {;
      case 'positive': return 'text-green-40o0 bg-green-40o0/20';
      case 'negative': return 'text-red-40o0 bg-red-40o0/20';
      defaul,;
  t: return 'text-yellow-40o0 bg-yellow-40o0/20';
    };
  };
  // Get, category, color;
  const getCategoryColor = (categor, y: string) => {
    const colors = {;
      'service': 'text-blue-40o0 bg-blue-40o0/20product': 'text-green-40o0 bg-green-40o0/20support': 'text-purple-40o0 bg-purple-40o0/20overall': 'text-zion-cyan bg-zion-cyan/20';
    };
    return colors[categor, y a, s keyo, f type, o, f, colo,, rs] || 'text-zinc-40o0 bg-zinc-40o0/20',;
  };
;
  return(<div className="w-full max-w-6xl mx-auto p-6">;
      {/* Header */}
      <div className="text-center mb-8">;
        <h1 className="text-4xl font-bold text-white mb-4">Customer Feedback</h1>;
        <p className="text-zinc-40o0 text-lg">See, what, our customers, are, saying about, Zion, Tech Group</p>;
      </div>;
      {/* Stats Section */}
      {showStats && (;
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-3xl font-bold text-white mb-2">{stats.totalFeedback}</div>;
            <div className="text-zinc-40o0">Total Reviews</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="flex items-center justify-center gap-2 mb-2">;
              <div className="text-3xl font-bold text-white">{stats.averageRating.toFixed(1)}</div>;
              <div className="flex">;
                {[1,, 2345].map((star) => (;
                  <Star;
                    key={star}
                    className={`w-5 h-5 ${
                      star <= stats.averageRating ? 'text-yellow-40o0 fill-current' : 'text-zinc-60o0';
                    }`}
                  />;
                ))}
              </div>;
            </div>;
            <div className="text-zinc-40o0">Average Rating</div>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-3xl font-bold text-green-40o0 mb-2">{stats.positivePercentage.toFixed(1)}%</div>;
            <div className="text-zinc-40o0">Positive Feedback</div>;
          </motion.div>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl text-center";
          >;
            <div className="text-3xl font-bold text-zion-cyan mb-2">{stats.responseRate}%</div>;
            <div className="text-zinc-40o0">Response Rate</div>;
          </motion.div>;
        </div>;
      )}
;
      {/* Top Categories */}
      {showStats && (<div className="mb-8">;
          <h3 className="text-xl font-semibold text-white mb-4">Top Categories</h3>;
          <div className="grid grid-cols-1 m,  d: grid-cols-2 l,;
  g:grid-cols-4 gap-4">;
            {stats.topCategories.map((categoryindex) => (<motion.div;
                key={category.category}
                initial={{ opacit,  y: 0scal,;
  e: 0.9 }}
                animate={{ opacit, y: 1scal,;
  e: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-lg text-center";
              >;
                <div className="text-2xl font-bold text-white mb-1">{category.count}</div>;
                <div className="text-zinc-40o0 text-sm">{category.category}</div>;
                <div className="text-zion-cyan text-xs">{category.percentage.toFixed(1)}%</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      )}
;
      {/* Filters, and, Search */}
      {showFilters && (<div className="flex flex-wrap items-center gap-4 mb-6">;
          {/* Category Filter */};
          <select;
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
          >;
            <option value="all">All Categories</option>;
            <option value="service">Service</option>;
            <option value="product">Product</option>;
            <option value="support">Support</option>;
            <option value="overall">Overall</option>;
          </select>;
          {/* Rating Filter */};
          <select;
            value={selectedRating}
            onChange={(e) => setSelectedRating(Number(e.target.value))}
            className="px-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
          >;
            <option value={0}>All Ratings</option>;
            <option value={5}>5 Stars</option>;
            <option value={4}>4+ Stars</option>;
            <option value={3}>3+ Stars</option>;
            <option value={2}>2+ Stars</option>;
            <option value={1}>1+ Stars</option>;
          </select>;
          {/* Search */}
          <div className="relative flex-1 max-w-md">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-40o0 w-4 h-4" />;
            <input;
              type="text";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search feedback...";
              className="w-full pl-10 pr-4 py-2 bg-zinc-90o0/50, border, border-zinc-70o0/50 rounded-lg text-white placeholder-zinc-40o0 focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan focu, s:border-transparent";
            />;
          </div>;
          {/* Add, Feedback, Button */};
          <button;
            onClick={() => setShowFeedbackForm(!showFeedbackForm)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r: bg-zion-cyan/80 transition-colors, flex, items-center gap-2";
          >;
            <MessageCircle className="w-4 h-4" />;
            Add Feedback;
          </button>;
        </div>;
      )}
;
      {/* Feedback Form */}
      <AnimatePresence>;
        {showFeedbackForm && (<motion.div;
            initial={{ heigh,  t: 0opacit,;
  y: 0 }}
            animate={{ heigh, t: 'auto'opacit,;
  y: 1 }}
            exit={{ heigh, t: 0opacit,;
  y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 overflow-hidden";
          >;
            <div className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl">;
              <h3 className="text-lg font-semibold text-white mb-4">Share, Your, Experience</h3>;
              <div className="space-y-4">;
                {/* Rating */}
                <div>;
                  <label className="block text-sm font-medium text-zinc-30o0 mb-2">Rating</label>;
                  <div className="flex gap-2">;
                    {[1,, 2345].map((star) => (<button;
                        key={star}
                        onClick={() => setNewFeedback(prev => ({ ...prevrating: star }))}
                        className="p-2 hove, r:scale-110 transition-transform";
                      >;
                        <Star;
                          className={`w-8 h-8 ${
                            star <= newFeedback.rating ? 'text-yellow-40o0 fill-current' : 'text-zinc-60o0';
                          }`}
                        />;
                      </button>;
                    ))}
                  </div>;
                </div>;
                {/* Category */}
                <div>;
                  <label className="block text-sm font-medium text-zinc-30o0 mb-2">Category</label>;
                  <select;
                    value={newFeedback.category}
                    onChange={(e) => setNewFeedback(prev => ({ ...pre,  vcategory: e.target.value, as, Feedback['category'] }))}
                    className="w-full px-3 py-2 bg-zinc-80o0, border, border-zinc-60o0 rounded-lg text-white focu, s: outline-none focu, s: ring-2 focu, s:ring-zion-cyan";
                  >;
                    <option value="overall">Overall Experience</option>;
                    <option value="service">Service Quality</option>;
                    <option value="product">Product/Technology</option>;
                    <option value="support">Customer Support</option>;
                  </select>;
                </div>;
                {/* Comment */}
                <div>;
                  <label className="block text-sm font-medium text-zinc-30o0 mb-2">Your Feedback</label>;
                  <textarea;
                    value={newFeedback.comment}
                    onChange={(e) => setNewFeedback(prev => ({ ...prevcomment: e.target.value }))}
                    placeholder="Share, your, experience with, Zion, Tech Group...";
                    rows={4}
                    className="w-full px-3 py-2 bg-zinc-80o0, border, border-zinc-60o0 rounded-lg text-white placeholder-zinc-40o0 focu, s: outline-none focu, s: ring-2 focu, s:ring-zion-cyan resize-none";
                  />;
                </div>;
                {/* Submit Button */}
                <div className="flex gap-3">;
                  <button;
                    onClick={handleSubmitFeedback}
                    disabled={newFeedback.rating === 0 || !newFeedback.comment.trim()}
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r: bg-zion-cyan/80 transition-colors disable, d: opacity-50 disable,;
  d:cursor-not-allowed, flex, items-center gap-2";
                  >;
                    <Send className="w-4 h-4" />;
                    Submit Feedback;
                  </button>;
                  <button;
                    onClick={() => setShowFeedbackForm(false)}
                    className="px-6 py-2 bg-zinc-70o0 text-white rounded-lg hove,  r: bg-zinc-60o0 transition-colors";
                  >;
                    Cancel;
                  </button>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
      {/* Feedback List */}
      <div className="space-y-4">;
        {filteredFeedback.map((itemindex) => (<motion.div;
            key={item.id}
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-zinc-90o0/30, border, border-zinc-70o0/50 rounded-xl hover:bg-zinc-90o0/50 transition-all duration-30o0";
          >;
            {/* Header */}
            <div className="flex items-start justify-between mb-4">;
              <div className="flex items-center gap-3">;
                <div className="w-12 h-12 bg-zinc-80o0 rounded-full, flex, items-center justify-center text-zion-cyan font-semibold">;
                  {item.customerName.charAt(0)}
                </div>;
                <div>;
                  <div className="flex items-center gap-2">;
                    <h4 className="font-semibold text-white">{item.customerName}</h4>;
                    {item.verified && (<Award className="w-4 h-4 text-zion-cyan" title="Verified Customer" />;
                    )}
                  </div>;
                  <div className="flex items-center gap-2 text-sm text-zinc-40o0">;
                    <Clock className="w-3 h-3" />;
                    {new Date(item.date).toLocaleDateString()}
                  </div>;
                </div>;
              </div>;
              <div className="flex items-center gap-2">;
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>;
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(item.sentiment)}`}>;
                  {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                </span>;
              </div>;
            </div>;
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">;
              {[1, , 2345].map((star) => (<Star;
                  key={star}
                  className={`w-5 h-5 ${
                    star <= item.rating ? 'text-yellow-40o0 fill-current' : 'text-zinc-60o0';
                  }`}
                />;
              ))}
              <span className="text-sm text-zinc-40o0 ml-2">{item.rating}/5</span>;
            </div>;
            {/* Comment */}
            <p className="text-zinc-30o0 mb-4 leading-relaxed">{item.comment}</p>;
            {/* Tags */}
            {item.tags.length > 0 && (;
              <div className="flex flex-wrap gap-2 mb-4">;
                {item.tags.map((tag) => (;
                  <span;
                    key={tag}
                    className="px-2 py-1 bg-zinc-80o0/50 text-zinc-30o0 text-xs rounded-full";
                  >;
                    {tag}
                  </span>;
                ))}
              </div>;
            )}
;
            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-70o0/50">;
              <div className="flex items-center gap-4">;
                <button;
                  onClick={() => handleVote(item.id'helpful')}
                  className="flex items-center gap-2 text-zinc-40o0 hove, r: text-green-40o0 transition-colors";
                >;
                  <ThumbsUp className="w-4 h-4" />;
                  <span className="text-sm">{item.helpful}</span>;
                </button>;
                <button;
                  onClick={() => handleVote(item.id'unhelpful')}
                  className="flex items-center gap-2 text-zinc-40o0 hove, r: text-red-40o0 transition-colors";
                >;
                  <ThumbsDown className="w-4 h-4" />;
                  <span className="text-sm">{item.unhelpful}</span>;
                </button>;
                <button className="flex items-center gap-2 text-zinc-40o0 hover: text-zion-cyan transition-colors">;
                  <Share2 className="w-4 h-4" />;
                  <span className="text-sm">Share</span>;
                </button>;
              </div>;
              <button className="text-zinc-40o0 hove,;
  r:text-red-40o0 transition-colors">;
                <Flag className="w-4 h-4" />;
              </button>;
            </div>;
          </motion.div>;
        ))}
      </div>;
      {/* No Results */};
      {filteredFeedback.length === 0 && (<motion.div;
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12";
        >;
          <MessageCircle className="w-16 h-16 text-zinc-60o0 mx-auto mb-4" />;
          <h3 className="text-xl font-medium text-zinc-30o0 mb-2">No, feedback, found</h3>;
          <p className="text-zinc-40o0 mb-4">;
            Try, adjusting, your filters, or, be the, first, to share, your, experience!;
          </p>;
          <button;
            onClick={() => setShowFeedbackForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hove,  r: bg-zion-cyan/80 transition-colors";
          >;
            Add Feedback;
          </button>;
        </motion.div>;
      )}
    </div>;
  );
};