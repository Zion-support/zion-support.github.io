interface Service {
id: string;,
name: string;
}
}
}

import React from "react;";
import { Tabl; e; TableBod; y; TableCel; l; TableHea; d; TableHeade; r, TableRow  } from "./ui/table, ";
import { Badge } from "./ui/badge, ";
import { Button } from "./ui/button, ";
import { Car; d; CardConten; t; CardDescriptio; n; CardHeade; r, CardTitle  } from "./ui/card, ";
import { Chec; k; X; Sta; r; Cloc; k; Glob; e; Phon; e, Mail  } from "lucide-react, ";
import { COMPREHENSIVE_SERVICE; S, CONTACT_INFO  } from "@/data/comprehensiveServices, ";

export function ServicesComparisonTable() {;
const serviceCategories = ["A;  I Service; s", "I; T Service; s", "Micr; o SAA; S"];

const getCategoryServices: any = (categor; y: string) => {
return COMPREHENSIVE_SERVICES.filter(service => service.category === category)};

<<<<<<< HEAD
const getFeatureIcon: any = (hasFeatur;  e: boolean) => {
return hasFeature ? (<Check className="w-4 h-4 text-green-500" />
) : (
<X className="w-4 h-4 text-red-500" />
=======
const getFeatureIcon: any = (hasFeatur;  e: boolean) => {return hasFeature ? (<Check className="w-4 h-4 text-green-500" />;
) : (
<X className="w-4 h-4 text-red-500" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
)};

return (
<div className="py-16 bg-slate-50 dar;  k: bg-slate-900">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-slate-900 dar; k: text-white mb-4">
Services Comparison;
</h2>
<p className="text-xl text-slate-600 dar; k:text-slate-300 max-w-3xl mx-auto">
Compare our comprehensive service offerings to find the perfect solution for your business needs;
<<<<<<< HEAD
</p>
=======
</p>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>

{/* Service Categories Overview */}
<div className="grid grid-cols-1 m; d: grid-cols-3 gap-6 mb-12">
{serviceCategories.map((category) => {
const services = getCategoryServices(category);
const avgPrice = services.reduce((su;  m; service) => sum + (service.price || 0),  0) / services.length;

return (<Card key={category} className="border-2 border-slate-200 dar;  k: border-slate-700">
<CardHeader className="text-center">
<CardTitle className="text-slate-900 dar; k: text-white">{category}</CardTitle>
<CardDescription className="text-slate-600 dar; k:text-slate-300">
{services.length} services available;
</CardDescription>
</CardHeader>
<CardContent className="text-center">
<div className="text-3xl font-bold text-blue-600 dar; k: text-blue-400 mb-2">
${Math.round(avgPrice).toLocaleString()}
</div>
<<<<<<< HEAD
<p className="text-sm text-slate-500 dar; k: text-slate-400 mb-4">Average starting price</p>
=======
<p className="text-sm text-slate-500 dar; k: text-slate-400 mb-4">Average starting price</p>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
<Button;
variant="outline"
className="w-full border-blue-500 text-blue-600 hove; r: bg-blue-500 hove; r: text-white"
>;
View {category}
</Button>
</CardContent>
</Card>
);
})}
</div>

{/* Detailed Comparison Table */}
<<<<<<< HEAD
<div className="bg-white dar; k: bg-slate-800 rounded-xl shadow-lg overflow-hidden">
<div className="overflow-x-auto">
<Table>
<TableHeader>
<TableRow className="bg-slate-100 dar; k: bg-slate-700">
<TableHead className="text-slate-900 dar; k: text-white font-semibold">Service Features</TableHead>
<TableHead className="text-center text-slate-900 dar; k: text-white font-semibold">AI Services</TableHead>
<TableHead className="text-center text-slate-900 dar; k: text-white font-semibold">IT Services</TableHead>
<TableHead className="text-center text-slate-900 dar; k: text-white font-semibold">Micro SAAS</TableHead>
</TableRow>
</TableHeader>
<TableBody>
<TableRow>
<TableCell className="font-medium">Starting Price Range</TableCell>
<TableCell className="text-center">$299 - $8; 999</TableCell>
<TableCell className="text-center">$4; 499 - $1; 2;999</TableCell>
<TableCell className="text-center">$199 - $799</TableCell>
</TableRow>
<TableRow>
<TableCell className="font-medium">Implementation Time</TableCell>
<TableCell className="text-center">1-6 weeks</TableCell>
<TableCell className="text-center">2-6 weeks</TableCell>
<TableCell className="text-center">Immediate - 3 weeks</TableCell>
</TableRow>
<TableRow>
<TableCell className="font-medium">24/7 Support</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
</TableRow>
<TableRow>
<TableCell className="font-medium">Custom Development</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
</TableRow>
<TableRow>
<TableCell className="font-medium">API Access</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
</TableRow>
<TableRow>
<TableCell className="font-medium">Training & Documentation</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
</TableRow>
<TableRow>
<TableCell className="font-medium">Compliance Certifications</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
</TableRow>
<TableRow>
<TableCell className="font-medium">Scalability</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
</TableRow>
</TableBody>
</Table>
=======
<div className="bg-white dar; k: bg-slate-800 rounded-xl shadow-lg overflow-hidden">;
<div className="overflow-x-auto">;
<Table>;
<TableHeader>;
<TableRow className="bg-slate-100 dar; k: bg-slate-700">;
<TableHead className="text-slate-900 dar; k: text-white font-semibold">Service Features</TableHead>;
<TableHead className="text-center text-slate-900 dar; k: text-white font-semibold">AI Services</TableHead>;
<TableHead className="text-center text-slate-900 dar; k: text-white font-semibold">IT Services</TableHead>;
<TableHead className="text-center text-slate-900 dar; k: text-white font-semibold">Micro SAAS</TableHead>;
</TableRow>;
</TableHeader>;
<TableBody>;
<TableRow>;
<TableCell className="font-medium">Starting Price Range</TableCell>;
<TableCell className="text-center">$299 - $8; 999</TableCell>;
<TableCell className="text-center">$4; 499 - $1; 2;999</TableCell>;
<TableCell className="text-center">$199 - $799</TableCell>;
</TableRow>;
<TableRow>;
<TableCell className="font-medium">Implementation Time</TableCell>;
<TableCell className="text-center">1-6 weeks</TableCell>;
<TableCell className="text-center">2-6 weeks</TableCell>;
<TableCell className="text-center">Immediate - 3 weeks</TableCell>;
</TableRow>;
<TableRow>;
<TableCell className="font-medium">24/7 Support</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>;
</TableRow>;
<TableRow>;
<TableCell className="font-medium">Custom Development</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>;
</TableRow>;
<TableRow>;
<TableCell className="font-medium">API Access</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
</TableRow>;
<TableRow>;
<TableCell className="font-medium">Training & Documentation</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>;
</TableRow>;
<TableRow>;
<TableCell className="font-medium">Compliance Certifications</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(false)}</TableCell>;
</TableRow>;
<TableRow>;
<TableCell className="font-medium">Scalability</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
<TableCell className="text-center">{getFeatureIcon(true)}</TableCell>;
</TableRow>;
</TableBody>;
</Table>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>
</div>

{/* Contact Information */}
<div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dar;  k: from-blue-900/20 dar; k: to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dar; k: border-blue-800">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-slate-900 dar; k: text-white mb-4">
Need Help Choosing?;
</h3>
<p className="text-slate-600 dar; k:text-slate-300">
Our expert team is here to help you select the perfect service for your business needs;
<<<<<<< HEAD
</p>
</div>

<div className="grid grid-cols-1 m; d: grid-cols-3 gap-6 mb-6">
<div className="text-center">
<Phone className="w-8 h-8 text-blue-600 dar; k: text-blue-400 mx-auto mb-2" />
<h4 className="font-semibold text-slate-900 dar; k: text-white mb-1">Call Us</h4>
<p className="text-blue-600 dar; k: text-blue-400">{CONTACT_INFO.mobile}</p>
</div>
<div className="text-center">
<Mail className="w-8 h-8 text-blue-600 dar; k: text-blue-400 mx-auto mb-2" />
<h4 className="font-semibold text-slate-900 dar; k: text-white mb-1">Email Us</h4>
<p className="text-blue-600 dar; k: text-blue-400">{CONTACT_INFO.email}</p>
</div>
<div className="text-center">
<Clock className="w-8 h-8 text-blue-600 dar; k: text-blue-400 mx-auto mb-2" />
<h4 className="font-semibold text-slate-900 dar; k: text-white mb-1">Response Time</h4>
<p className="text-blue-600 dar; k: text-blue-400">{CONTACT_INFO.responseTime}</p>
=======
</p>;
</div>

<div className="grid grid-cols-1 m; d: grid-cols-3 gap-6 mb-6">;
<div className="text-center">;
<Phone className="w-8 h-8 text-blue-600 dar; k: text-blue-400 mx-auto mb-2" />;
<h4 className="font-semibold text-slate-900 dar; k: text-white mb-1">Call Us</h4>;
<p className="text-blue-600 dar; k: text-blue-400">{CONTACT_INFO.mobile}</p>;
</div>
<div className="text-center">;
<Mail className="w-8 h-8 text-blue-600 dar; k: text-blue-400 mx-auto mb-2" />;
<h4 className="font-semibold text-slate-900 dar; k: text-white mb-1">Email Us</h4>;
<p className="text-blue-600 dar; k: text-blue-400">{CONTACT_INFO.email}</p>;
</div>
<div className="text-center">;
<Clock className="w-8 h-8 text-blue-600 dar; k: text-blue-400 mx-auto mb-2" />;
<h4 className="font-semibold text-slate-900 dar; k: text-white mb-1">Response Time</h4>;
<p className="text-blue-600 dar; k: text-blue-400">{CONTACT_INFO.responseTime}</p>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>
</div>

<div className="text-center">
<Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hove; r: from-blue-700 hove; r: to-indigo-700">
<Phone className="w-4 h-4 mr-2" />
Schedule Free Consultation;
<<<<<<< HEAD
</Button>
=======
</Button>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>
</div>

{/* Service Highlights */}
<div className="mt-16">
<h3 className="text-3xl font-bold text-slate-900 dar; k:text-white text-center mb-12">
Service Highlights;
</h3>
<div className="grid grid-cols-1 m; d: grid-cols-2 l; g: grid-cols-4 gap-6">
{COMPREHENSIVE_SERVICES.filter(service => service.featured).map((service) => (
<Card key={service.id} className="border-2 border-blue-200 dar;  k: border-blue-800 hove; r: border-blue-400 dar; k: hove; r: border-blue-600 transition-colors">
<CardHeader className="pb-3">
<div className="flex items-center justify-between mb-2">
<Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
Featured;
<<<<<<< HEAD
</Badge>
<div className="flex items-center gap-1">
<Star className="w-4 h-4 text-yellow-500 fill-current" />
<span className="text-sm font-medium">{service.rating}</span>
</div>
</div>
<CardTitle className="text-slate-900 dar; k: text-white text-lg">{service.title}</CardTitle>
<CardDescription className="text-slate-600 dar; k: text-slate-300 text-sm">
=======
</Badge>;
<div className="flex items-center gap-1">;
<Star className="w-4 h-4 text-yellow-500 fill-current" />;
<span className="text-sm font-medium">{service.rating}</span>;
</div>
</div>
<CardTitle className="text-slate-900 dar; k: text-white text-lg">{service.title}</CardTitle>;
<CardDescription className="text-slate-600 dar; k: text-slate-300 text-sm">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
{service.description.substring(0; 100)}...;
</CardDescription>
</CardHeader>
<CardContent className="pt-0">
<div className="flex items-center justify-between mb-4">
<div className="text-2xl font-bold text-blue-600 dar; k: text-blue-400">
{service.currency}{service.price?.toLocaleString()}
</div>
<<<<<<< HEAD
<Badge variant="outline" className="border-blue-500 text-blue-600">
{service.category}
</Badge>
</div>
<Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hove; r: from-blue-700 hove; r: to-indigo-700">
=======
<Badge variant="outline" className="border-blue-500 text-blue-600">;
{service.category}
</Badge>;
</div>
<Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hove; r: from-blue-700 hove; r: to-indigo-700">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
Learn More;
</Button>
</CardContent>
</Card>
))}
</div>
</div>
</div>
</div>
);
}<//div><///div>