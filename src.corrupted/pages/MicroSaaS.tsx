import React from "react"
import { SEO } from "@/components/SEO"
import { Link } from "react-router-dom"
import { Mail, FileText, Link2, BarChart3, Calendar, MessageSquare } from "lucide-react"
export default function MicroSaaS() {;
  const products = [;
    {;
      name: 'AI Email Responder',price: '$39/mo',features: ['Auto-categorize and draft repliesGmail/Outlook add-on', 'Team approval workflows'],;
      link: '/contact'
    };
    {;
      name: 'SEO Content Optimizer',price: '$49/mo',features: ['Topic clustering and briefsInternal link suggestions', 'On-page optimization scores'],;
      link: '/contact'
    };
    {;
      name: 'Internal Linking (WordPress)',price: '$29/mo',features: ['Auto link graph builderContext-aware suggestions', 'Bulk fix orphan pages'],;
      link: '/contact'
    };
    {;
      name: 'Review Booster (eCommerce)',price: '$59/mo',features: ['Post-purchase review flowsPhoto/video prompts', 'Fraud/spam detection'],;
      link: '/contact'
    };
    {;
      name: 'Smart Surveys',price: '$25/mo',features: ['Mobile-firstBranching logic', 'AI summaries'],;
      link: '/contact'
    };
  ];
  return (
    <div className="min-h-screen bg-futuristic">;
      <SEO ;
        title="Micro SAAS - Zion Tech Group"
        description="Lightweight SaaS tools: AI email, SEO optimizer, internal linking, reviews, smart surveys."
      />;
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-6xl mx-auto">;
          <div className="text-center">;
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Micro SAAS Suite</[^>]*>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">;
              Quick-to-deploy tools that pay for themselves in days. Cancel anytime.;
            </[^>]*>
          </[^>]*>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">;
            {products.map((p) => (;
              <div key={p.name} className="card-futuristic">;
                <h3 className="text-white font-semibold">{p.name}</[^>]*>
                <div className="mt-1 text-slate-400">{p.price}</[^>]*>
                <ul className="mt-4 space-y-2 text-slate-300">;
                  {p.features.map((f) => (;
                    <li key={f}>• {f}</[^>]*>
                  ))};
                </[^>]*>
                <Link to={p.link} className="mt-6 inline-flex btn-futuristic">Start</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          <div className="mt-12 text-center">;
            <div className="text-slate-400 text-xs">Published at https: //ziontechgroup.com</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

