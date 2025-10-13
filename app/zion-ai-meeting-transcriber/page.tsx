import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

export default function ZionAIMeetingTranscriber() {
  const features = [
    "Real-time meeting transcription with 99.5% accuracy",
    "Multi-language support (100+ languages)",
    "Speaker identification and diarization",
    "Automatic action item extraction",
    "Meeting summary generation",
    "Integration with Zoom, Teams, Google Meet",
    "Custom vocabulary and industry terms",
    "Timestamp and chapter markers",
    "Searchable transcript database",
    "Export to multiple formats (PDF, Word, SRT)",
    "AI-powered insights and analytics",
    "Secure cloud storage and backup"
  ];

  const benefits = [
    "Save 2+ hours per meeting on note-taking",
    "Never miss important details again",
    "Improve meeting productivity by 60%",
    "Create searchable knowledge base",
    "Generate actionable follow-ups automatically",
    "Ensure compliance with meeting records"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$19",
      period: "month",
      description: "Perfect for small teams",
      features: ["Up to 10 hours/month", "Basic transcription", "Email support", "1 user", "Standard accuracy"],
      popular: false;
    },
    {
      name: "Professional",
      price: "$49",
      period: "month",
      description: "Ideal for growing businesses",
      features: ["Up to 50 hours/month", "Advanced AI features", "Priority support", "5 users", "Speaker identification", "Action items"],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "For large organizations",
      features: ["Unlimited hours", "Custom integrations", "Dedicated support", "Unlimited users", "Advanced analytics", "White-labeling"],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Meeting Transcriber has revolutionized our team meetings. We never miss important details and our productivity has increased dramatically.",
      rating: 5;
    },
    {
      name: "Michael Rodriguez",
      company: "Consulting Firm",
      role: "Partner",
      content: "The speaker identification feature is incredible. It's like having a professional secretary in every meeting.",
      rating: 5;
    },
    {
      name: "Emily Johnson",
      company: "Marketing Agency",
      role: "Director",
      content: "The automatic action item extraction saves us hours of follow-up work. Highly recommended!",
      rating: 5;
    }
  ];

}

}