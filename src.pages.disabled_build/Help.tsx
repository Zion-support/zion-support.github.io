import React from "react"
;,"});,"})


export default function Help() {return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">"
      <SEO title="Help - Zion Tech Group" description="Professional Help services by Zion Tech Group"   />"
      <div className="container mx-auto px-4 py-20">"
        <h1 className="text-4xl font-bold text-white mb-8">Help</h1>"
        <p className="text-gray-300 text-lg">
          Professional Help services to help your business grow.
        </p>
      </div>
  )


}"react"framer - motion",../components/SEO";""""""
  Search, MessageCircle, Phone, Mail, Clock, BookOpen, Video, FileText, Users, ChevronDown;
  ChevronUp, HelpCircle, CheckCircle, ArrowRight"
} from "lucide-react";"
  ChevronUp, HelpCircle, CheckCircle, ArrowRight;", ";"
} from "lucide-react";"""
  Search, MessageCircle, Phone, Mail, Clock;
  BookOpen, Video, FileText, Users, ChevronDown;
  ChevronUp, HelpCircle, CheckCircle, ArrowRight} from "lucide-react;
"
export default function Help() {"
  const [searchQuery, setSearchQuery] = useState(")


  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)


  const faqs = []

  const helpCategories = []

  const contactMethods = []
  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)}
  return (;
    ;
    <>;
      <SEO ;";
        title="Help Center - Zion Tech Group | Support & Documentation";";
        description="Get help with Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team for assistance.";";
        keywords="help, support, documentation, FAQ, customer service, Zion Tech Group">;
     />;
      ;";
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* comment */}";
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;";
          <div className="container mx-auto px-4">;
            <motion.div;";
              initial = "{{" opacity: 0, y: 20 }}";
              animate="{{" opacity: 1, y: 0 }}";
              transition="{{" duration: 0.8 }}";
              className="text-center max-w-4xl mx-auto">;
            >;";
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                Help Center,
              </h1>,";
              <p className = "text-xl text-gray-300 mb-8">
                Find answers to your questions, access documentation, and get support from our expert team;
              </p>;
              ;
              {/* comment */}";
              <div className="max-w-2xl mx-auto">;";
                <div className="relative">;";
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"   />;
                  <input;";
                    type="text";";
                    placeholder="Search for help articles, guides, or FAQs...";";
                    value = "{searchQuery}"";
                    onChange="{(e)" => setSearchQuery(e.target.value)}";
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                 />;
                </div>,;
            </motion.div>,,;
          </div>,;
        </section>,;