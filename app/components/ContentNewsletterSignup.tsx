import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
'use client'

interface ContentNewsletterSignupProps {}
title?: string;
subtitle?: string;
placeholder?: string;
buttonText?: string;
features?: Array<{}
icon: React.ComponentType<{ className?: string }>
text: string;
}>
onSubscribe?: (email: string) => void;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps /> = ({}
const title = "Stay Updated with Our Latest Insights",
subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
placeholder = "Enter your email address",
buttonText = "Subscribe",
features = [
{ icon: Star, text: "Exclusive content" },
{ icon: Users, text: "Industry insights" },
{ icon: Globe, text: "Global updates" },
{ icon: Zap, text: "Early access" }
],;
onSubscribe;
}) => {}
const [email, setEmail] = useState('')
const [isSubmitting, setIsSubmitting] = useState(false)
const [isSubscribed, setIsSubscribed] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {}
e.preventDefault();
if (!email) return;
setIsSubmitting(true)
try {}
// Simulate API call;
await new Promise(resolve => setTimeout(resolve, 1000))
if (onSubscribe) {}
onSubscribe(email)
}
setIsSubscribed(true)
setEmail('')
} catch (error) {}
console.error('Subscription error: ', error)
} finally {}
setIsSubmitting(false)
}
}

if (isSubscribed) {}
return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
<CheckCircle className="w-5h-5ml-2" /></CheckCircle>;
</div>
<h2 className="w-5h-5ml-2" />Thank You for Subscribing!;
</h2>
<p className="w-5h-5ml-2">You'll receive our latest insights and updates soon.;
</p>
<button;
onClick="{()" =  />setIsSubscribed(false)}
className="text-blue-400hover:text-blue-300 transition-colors";
>
Subscribe another email;
</button>
</div>
</div>
)
