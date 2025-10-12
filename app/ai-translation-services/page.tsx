import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Globe, Zap, Shield, Users, CheckCircle, ArrowRight, BarChart3, Brain, FileText, Mic } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AITranslationServicesPage;
const AITranslationServicesPage: React.FC = () => {
const features = [
{
icon: <Globe className="w-5h-5ml-2" />,
title: '100+ Languages',
description: 'Support for over 100 languages with native-level accuracy and cultural context.';
},
{
icon: <Zap className="w-5h-5ml-2" />,
title: 'Real-time Translation',
description: 'Instant translation for live conversations, meetings, and customer support.';
},
{
icon: <Brain className="w-5h-5ml-2" />,
title: 'AI-Powered Context',
description: 'Advanced AI understands context, tone, and cultural nuances for accurate translations.';
},
{
icon: <FileText className="w-5h-5ml-2" />,
title: 'Document Translation',
description: 'Translate documents, websites, and content while preserving formatting and structure.';
},
{
icon: <Mic className="w-5h-5ml-2" />,
title: 'Voice Translation',
description: 'Convert speech to text and translate in real-time with natural voice synthesis.';
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: 'Enterprise Security',
description: 'Bank-level security with end-to-end encryption for sensitive business communications.';
}
];

const useCases = [
{
title: 'Global Customer Support',
description: 'Provide support in any language with instant translation and cultural adaptation.',
icon: <div>
