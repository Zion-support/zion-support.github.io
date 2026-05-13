import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Video Generation & Editing | Zion Tech Group',
  description: 'Create professional videos from text prompts, scripts, or storyboards — with voiceover, B-roll, transitions, and brand styling in minutes.',
  alternates: { canonical: 'ai-services/ai-video-generation' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Video Generation & Editing',
        category: 'AI Media & Video',
        description: 'Create professional videos from text prompts, scripts, or storyboards — with voiceover, B-roll, transitions, and brand styling in minutes.',
        iconEmoji: '🎬',
        features: [
          {
            "title": "Text-to-Video Engine",
            "description": "Generate professional videos from text prompts with scene understanding, automatic shot selection, and cinematic transitions."
          },
          {
            "title": "AI Voiceover & Subtitles",
            "description": "Natural-sounding voiceover in 50+ languages with auto-synced subtitles and customizable fonts."
          },
          {
            "title": "Brand Kit Integration",
            "description": "Apply your brand colors, logos, fonts, and templates automatically to all generated videos."
          },
          {
            "title": "Video Editing Suite",
            "description": "Full editing timeline with AI-assisted cuts, color grading, motion graphics, and audio mixing."
          },
          {
            "title": "Multi-Format Export",
            "description": "Export for YouTube, TikTok, Instagram Reels, LinkedIn, and custom resolutions in one click."
          },
          {
            "title": "Template Marketplace",
            "description": "Access 500+ professionally designed video templates for ads, tutorials, presentations, and social content."
          }
        ],
        useCases: [
          {
            "title": "Marketing Video Production",
            "description": "Produce ad campaigns, product demos, and brand videos at 10x the speed of traditional production.",
            "icon": "📢"
          },
          {
            "title": "Training & E-Learning",
            "description": "Convert documentation, SOPs, and lesson plans into engaging video training with minimal effort.",
            "icon": "🎓"
          },
          {
            "title": "Social Media Content Engine",
            "description": "Maintain consistent video output across all platforms with AI-generated shorts, reels, and stories.",
            "icon": "📱"
          }
        ],
        benefits: ["Reduce video production time by 90%", "Eliminate need for video editors for routine content", "50+ languages supported", "Multi-platform export", "Access to 500+ templates", "Consistent brand presentation"],
        ctaLabel: 'Get Started with AI Video Generation & Editing',
        pricing: [
          { tier: 'Starter', price: '$59', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$199', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
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
