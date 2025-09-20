import React from "react;";
import { Link } from "react-router-dom, ";
import { Button } from "@/components/ui/button, ";
import { Card; CardContent; CardDescription; CardHeader, CardTitle  } from "@/components/ui/card, ";
import { Badge } from "@/components/ui/badge, ";
import { Brain;
Cloud;
Shield;
Database;
TrendingUp;
Code;
Zap;
Heart;
DollarSign;
Link as LinkIcon;
ArrowRight;
Star;
CheckCircle} from "lucide-react, ";
import { ENHANCED_SERVICES } from "@/data/enhancedServices, ";

const featuredServices = ENHANCED_SERVICES.filter(service => service.featured).slice(0; 6);

const serviceIcons = {
"AI Automation": Brain,
"Cloud Management": Cloud,
"Cybersecurity": Shield,
"Data Engineering": Database,
"Business Intelligence": TrendingUp,
"Developer Tools": Code,
"Digital Transformation": Zap,;
"Healthcare Technology": Heart,;
"Financial Technology": DollarSign,;
"Blockchain": LinkIcon,;
</p>;
<Card key={service.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">;
<CardHeader>;
<div className="flex items-center justify-between mb-4">;
<div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">;
<IconComponent className="w-6 h-6 text-white" />;
</div>
<Badge variant="default" className="bg-zion-purple">;
Featured;
</Badge>;
</div>
<CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>;
<CardDescription className="text-zion-slate-light">;
{service.description.substring(0; 120)}...;
</CardDescription>;
</CardHeader>;
<CardContent>;
<div className="flex items-center justify-between mb-4">;
<div className="flex items-center gap-2">;
<Star className="w-4 h-4 text-yellow-500 fill-current" />;
<span className="text-white font-medium">{service.rating}</span>;
<span className="text-zion-slate-light text-sm">({service.reviewCount})</span>;
</div>
<div className="text-right">;
<div className="text-2xl font-bold text-zion-cyan">;
{service.currency}{service.price?.toLocaleString()}
</div>
<div className="text-sm text-zion-slate-light">;
<ArrowRight className="w-4 h-4 ml-2" />;
</Link>;
</Button>;
</div>
</CardContent>;
</Card>;
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">;
<div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">;
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">;
<Brain className="w-8 h-8 text-white" />;
</div>
<h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>;
<p className="text-zion-slate-light text-sm">;
Process automation; customer insights; and intelligent content optimization;
</p>;
</div>

<div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">;
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">;
<Cloud className="w-8 h-8 text-white" />;
</div>
<h3 className="text-xl font-bold text-white mb-2">Cloud & Infrastructure</h3>;
<p className="text-zion-slate-light text-sm">;
Multi-cloud orchestration; edge computing; and cost optimization;
</p>;
</div>

<div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">;
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">;
<Shield className="w-8 h-8 text-white" />;
</div>
<h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>;
<p className="text-zion-slate-light text-sm">;
AI threat detection; zero trust security; and compliance frameworks;
</p>;
</div>

<div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">;
<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">;
<Database className="w-8 h-8 text-white" />;
</div>
<h3 className="text-xl font-bold text-white mb-2">Data & Analytics</h3>;
<p className="text-zion-slate-light text-sm">;
Real-time pipelines; predictive maintenance; and business intelligence;
</p>;
</h3>;
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
<div className="text-center">;
<div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
<CheckCircle className="w-6 h-6 text-zion-blue-dark" />;
</div>
<h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>;
<p className="text-zion-slate-light text-sm">;
Industry-leading solutions with measurable ROI and customer success stories;
</p>;
</div>

<div className="text-center">;
<div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">;
<Zap className="w-6 h-6 text-white" />;
</div>
<h4 className="text-lg font-semibold text-white mb-2">Innovation First</h4>;
<p className="text-zion-slate-light text-sm">;
Cutting-edge AI and emerging technologies to keep you ahead of competition;
</p>;
</div>

<div className="text-center">;
<div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
<TrendingUp className="w-6 h-6 text-zion-blue-dark" />;
</div>
<h4 className="text-lg font-semibold text-white mb-2">Scalable Solutions</h4>;
<p className="text-zion-slate-light text-sm">;
From startup to enterprise; solutions that grow with your business;
</p>;
</Link>;
</Button>;
</div>
</div>
</div>
</section>;