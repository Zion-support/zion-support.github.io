import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Presentation & Pitch Deck Maker | Zion Tech Group',
  description: 'Generate polished presentations, pitch decks, and reports from outlines or documents with data visualization and speaker notes.',
  alternates: { canonical: 'ai-services/ai-presentation-maker' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Presentation & Pitch Deck Maker',
        category: 'AI Productivity',
        description: 'Generate polished presentations, pitch decks, and reports from outlines or documents with data visualization and speaker notes.',
        iconEmoji: '📊',
        features: [
          {
            "title": "Document-to-Slide Conversion",
            "description": "Upload any document, report, or outline and AI transforms it into a structured, visually appealing presentation."
          },
          {
            "title": "Smart Data Visualization",
            "description": "Auto-generate charts, graphs, and infographics from embedded data with professional design templates."
          },
          {
            "title": "Speaker Notes & Scripting",
            "description": "AI-generated speaker notes for each slide with timing cues, key talking points, and Q&A preparation."
          },
          {
            "title": "Brand-Consistent Templates",
            "description": "Apply your corporate brand guidelines — colors, fonts, logos, and spacing — automatically across all slides."
          },
          {
            "title": "Multi-Format Export",
            "description": "Export to PowerPoint, Google Slides, PDF, or embed in web pages with interactive animations."
          },
          {
            "title": "Real-Time Collaboration",
            "description": "Co-edit presentations with team members, leave comments, and track revision history in real-time."
          }
        ],
        useCases: [
          {
            "title": "Investor Pitch Decks",
            "description": "Create investor-ready pitch decks with compelling narratives, financial visualizations, and market data integration.",
            "icon": "💰"
          },
          {
            "title": "Sales Presentations",
            "description": "Generate customized sales decks for each prospect with relevant case studies, pricing, and ROI projections.",
            "icon": "📈"
          },
          {
            "title": "Training & Onboarding Materials",
            "description": "Convert policies, SOPs, and training content into engaging slide decks with quizzes and speaker notes.",
            "icon": "🎓"
          }
        ],
        benefits: ["Create presentations 10x faster", "Professional design without designers", "Data-driven visualizations", "Brand consistency across teams", "Speaker notes and scripting included", "Multi-format export options"],
        ctaLabel: 'Get Started with AI Presentation & Pitch Deck Maker',
        pricing: [
          { tier: 'Starter', price: '$39', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$129', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited usage', 'Dedicated support engineer', 'Custom configuration', 'SSO & advanced security', '99.99% SLA guarantee', 'On-premise deployment option'], popular: false },
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown DE 19709',
        },
      }}
    />
  );
}
