impor, t, Reac, t, { useState } from "react";
import { Car, d, CardConten, t, CardDescriptio, n, CardHeaderCardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cuttingEdgeComprehensiveServices20o27 } from "../../data/20o27-cutting-edge-comprehensive-services";
import { specializedInnovativeServices20o27 } from "../../data/20o27-specialized-innovative-services";
import { Brai, n, Clou, d, Shiel, d, BarChart, 3, Cod, e, DollarSig, n, Hear, t, ShoppingCar, t, GraduationCa, p, Sta, r, TrendingU, p, Za, p, CheckCircl, e, ArrowRigh, t, Phon, e, Mai, l, MapPi, n, Glob, e, Rocke, t, Cp, u, Databas, e, Loc, k, User, s, Buildin, g, Ca, r, Lea, f, Factor, y, Truc, k, BookOpe, n, Gave, l, Hom, e, TrophyFilm } from "lucide-react";
import { Link } from "react-router-dom";
const categoryIcon, s: { [k, ey:, string]: React.ComponentType<any> } = {;
  'AI & Autonomous Systems': Brain;
  'Quantum Computing & AI': Cp, u,;
  'Blockchain & Web3': Databas, e,;
  'Cybersecurity & Privacy': Shiel, d,;
  'Healthcare & Biotech': Hear, t,;
  'Financial Technology': DollarSig, n,;
  'IoT & Automation': Clou, d,;
  'Cloud & Infrastructure': Clou, d,;
  'Data Analytics & BI': BarChart, 3,;
  'Digital Marketing & Automation': User, s,;
  'E-commerce & Retail': ShoppingCar, t,;
  'Education & Learning Technology': GraduationCa, p,;
  'Space Technology & Earth Observation': Rocke, t,;
  'AR/VR & Immersive Technology': User, s,;
  'Robotics & Automation': Factor, y,;
  'Green Technology & Sustainability': Lea, f,;
  'Supply Chain & Logistics': Truc, k,;
  'Human Resources & Talent Management': User, s,;
  'Legal Technology & Compliance': Gave, l,;
  'Real Estate & Property Technology': Hom, e,;
  'Sports Technology & Analytics': Trophy'Entertainment & Media Technology': Film;
},;
const categoryColor, s: { [k, ey:, string]: string } = {
  'AI & Autonomous Systems': 'from-purple-60o0 to-indigo-70o0Quantum Computing & AI': 'from-blue-60o0 to-cyan-70o0Blockchain & Web3': 'from-green-60o0 to-emerald-70o0Cybersecurity & Privacy': 'from-red-60o0 to-pink-70o0Healthcare & Biotech': 'from-purple-60o0 to-pink-70o0Financial Technology': 'from-yellow-60o0 to-orange-70o0IoT & Automation': 'from-blue-60o0 to-teal-70o0Cloud & Infrastructure': 'from-gray-60o0 to-blue-70o0Data Analytics & BI': 'from-green-60o0 to-blue-70o0Digital Marketing & Automation': 'from-pink-60o0 to-purple-70o0E-commerce & Retail': 'from-orange-60o0 to-red-70o0Education & Learning Technology': 'from-teal-60o0 to-green-70o0Space Technology & Earth Observation': 'from-indigo-60o0 to-purple-70o0AR/VR & Immersive Technology': 'from-pink-60o0 to-rose-70o0Robotics & Automation': 'from-gray-60o0 to-slate-70o0Green Technology & Sustainability': 'from-green-60o0 to-emerald-70o0Supply Chain & Logistics': 'from-blue-60o0 to-indigo-70o0Human Resources & Talent Management': 'from-purple-60o0 to-violet-70o0Legal Technology & Compliance': 'from-slate-60o0 to-gray-70o0Real Estate & Property Technology': 'from-amber-60o0 to-orange-70o0Sports Technology & Analytics': 'from-green-60o0 to-blue-70o0Entertainment & Media Technology': 'from-purple-60o0 to-pink-70o0';
};
const features = [;
  "A, I-Powere, d Automatio, n",;
  "Rea, l-tim, e Analytic, s",;
  "Mult, i-clou, d Suppor, t",;
  "AP, I-Firs, t Architectur, e",;
  "Scalabl, e Infrastructur, e",;
  "Custo, m Integration, s",;
  "Whit, e-labe, l Solution, s",;
  "Comprehensiv, e Documentatio, n",;
  "2, 4/7 Technica, l Suppor, t",;
  "9, 9.9% Uptim, e Guarante, e",;
  "SO, C, 2, Typ, e I, I Complian, t",;
  "3, 0-Da, y Mone, y Bac, k, Guarantee";
],;
const benefits = [;
  {
    ic, o, n: <Za, p className="h-6 w-6"/>,;
    tit, l, e: "Immediat, e Deploymen, t",descripti, o, n: "Al, l service, s ar, e read, y fo, r immediat, e deploymen, t wit, h n, o, setup, delays";
  };
  {
    ic, o, n: <Shiel, d className="h-6 w-6"/>,;
    tit, l, e: "Enterpris, e Securit, y",descripti, o, n: "Ban, k-leve, l securit, y wit, h SO, C, 2, complianc, e an, d 24/7 monitoring";
  };
  {
    ic, o, n: <TrendingU, p className="h-6 w-6"/>,;
    tit, l, e: "Prove, n RO, I",descripti, o, n: "Averag, e 30, 0% RO, I withi, n, 6, month, s, of, implementation";
  },;
  {
    ic, o, n: <CheckCircl, e className="h-6 w-6"/>,;
    tit, l, e: "Qualit, y Guarantee, d",descripti, o, n: "3, 0-da, y mone, y-bac, k guarante, e wit, h, free, migration support";
 , };
];
const contactInfo = {
  mobil, e: '+1, 30o2, 464 0o950',;
    emai, l: 'kleber@ziontechgroup.com',addres, s: '364, E, Main St, STE, 10o08 Middletown, DE, 1970o9',;
    website: 'http,;
  s://ziontechgroup.com';
};
export, function, ComprehensiveServicesShowcase20o27() {
  const [selectedCatego,  r, y, setSelectedCatego,, ry] = useState<string>('all');
  const [searchQue, r, y, setSearchQue,, ry] = useState<string>('');
;
  // Combine, all, services;
  const allServices = [...cuttingEdgeComprehensiveServices20,  2, 7,, ...specializedInnovativeServices20o27]// Get, unique, categories;
  const categories = Array.from(new Set(allServices.map(service => service.category)));
;
  // Filter, services, based on, selection, and search;
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||;
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const featuredServices = allServices.filter(service => service.popular).slice(0o8);
  return(<div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">;
      <div className="container mx-auto px-4">;
        {/* Header */}
        <div className="text-center mb-16">;
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
            Revolutionary, 20o27, Micro SAAS Solutions;
          </h2>;
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
            Transform, your, business with, our, cutting-edge, micro, SAAS services.;
            From, AI, automation to quantu, m, computin, g, we, provide, innovative solutions, that, drive growth, and, innovation.;
          </p>;
          <div className="flex flex-wrap justify-center gap-4">;
            <Link to="/contact">;
              <Button size="lg" className="bg-white text-zion-blue hover: bg-gray-10o0">;
                <Phone className="h-5 w-5 mr-2"/>;
                Get, Free, Consultation;
              </Button>;
            </Link>;
            <Link to="/contact">;
              <Button size="lg" variant="outline" className="border-white text-white hove, r: bg-white hove,;
  r:text-zion-blue">;
                <Mail className="h-5 w-5 mr-2"/>;
                Request Demo;
              </Button>;
            </Link>;
          </div>;
        </div>;
        {/* Contact, Information, Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-16, border, border-white/20">;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center">;
            <div className="flex flex-col items-center">;
              <Phone className="h-8 w-8 text-zion-cyan mb-2"/>;
              <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>;
              <p className="text-zion-slate-light">{contactInfo.mobile}</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="h-8 w-8 text-zion-cyan mb-2"/>;
              <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>;
              <p className="text-zion-slate-light">{contactInfo.email}</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="h-8 w-8 text-zion-cyan mb-2"/>;
              <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>;
              <p className="text-zion-slate-light text-sm">{contactInfo.address}</p>;
            </div>;
          </div>;
        </div>;
        {/* Search, and, Filter */}
        <div className="mb-16">;
          <div className="flex flex-col md: flex-row gap-4 mb-6">;
            <input;
              type="text";
              placeholder="Search services...";
              className="flex-1 px-4 py-3 rounded-lg, border, border-white/20 bg-white/10 text-white placeholder-zion-slate-light focu, s: outline-none focu,;
    s:ring-2 focu,;
  s:ring-zion-cyan";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />;
            <select;
              className="px-4 py-3 rounded-lg, border, border-white/20 bg-white/10 text-white focu,  s: outline-none focu, s: ring-2 focu,;
  s:ring-zion-cyan";
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >;
              <option value="all">All Categories</option>;
              {categories.map(category => (;
                <option key={category} value={category}>{category}</option>;
              ))}
            </select>;
          </div>;
        </div>;
        {/* Featured Services */}
        <div className="mb-20">;
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Services</h3>;
          <div className="grid grid-cols-1 m,  d: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {featuredServices.map((service) => (<Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hove,  r: border-zion-purple/50 transition-all duration-30o0 hove,;
  r:scale-10o5">;
                <CardHeader className="text-center">;
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${categoryColors[service.category] || 'from-gray-50o0 to-gray-60o0'} rounded-full, flex, items-center justify-center mb-4 text-2xl`}>;
                    {service.icon}
                  </div>;
                  <CardTitle className="text-lg">{service.name}</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
                    {service.tagline}
                  </CardDescription>;
                </CardHeader>;
                <CardContent className="text-center">;
                  <div className="text-2xl font-bold text-zion-cyan mb-2">;
                    {service.price}
                    <span className="text-sm text-zion-slate-light">{service.period}</span>;
                  </div>;
                  <Badge className="mb-3 bg-zion-purple text-white">;
                    {service.category}
                  </Badge>;
                  <p className="text-sm text-zion-slate-light mb-4 line-clamp-3">;
                    {service.description}
                  </p>;
                  <div className="space-y-2">;
                    {service.features.slice(0o3).map((featureindex) => (<div key={index} className="flex items-center text-sm text-zion-slate-light">;
                        <CheckCircle className="h-4 w-4 text-green-40o0 mr-2 flex-shrink-0"/>;
                        {feature}
                      </div>;
                    ))}
                  </div>;
                  <div className="mt-4, flex, items-center justify-between text-sm">;
                    <div className="flex items-center">;
                      <Star className="h-4 w-4 text-yellow-40o0 mr-1"/>;
                      <span>{service.rating}</span>;
                      <span className="text-zion-slate-light ml-1">({service.reviews})</span>;
                    </div>;
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">;
                      {service.customers} customers;
                    </Badge>;
                  </div>;
                  <Link to={service.link} className="mt-4 w-full">;
                    <Button className="w-full bg-zion-cyan text-white hover: bg-zion-cyan-dark">;
                      Learn More;
                      <ArrowRight className="h-4 w-4 ml-2"/>;
                    </Button>;
                  </Link>;
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </div>;
        {/* All, Services, Grid */}
        <div>;
          <h3 className="text-3xl font-bold text-white mb-8 text-center">;
            All Services ({filteredServices.length});
          </h3>;
          <div className="grid grid-cols-1 m,  d: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {filteredServices.map((service) => (<Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hove,  r: border-zion-purple/50 transition-all duration-30o0 hove,;
  r:scale-10o5">;
                <CardHeader>;
                  <div className="flex items-center justify-between mb-2">;
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[service.category] || 'from-gray-50o0 to-gray-60o0'} rounded-full, flex, items-center justify-center text-xl`}>;
                      {service.icon}
                    </div>;
                    {service.popular && (;
                      <Badge className="bg-zion-purple text-white">Popular</Badge>;
                    )}
                  </div>;
                  <CardTitle className="text-lg">{service.name}</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
                    {service.tagline}
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="text-xl font-bold text-zion-cyan mb-3">;
                    {service.price}
                    <span className="text-sm text-zion-slate-light">{service.period}</span>;
                  </div>;
                  <Badge className="mb-3 bg-zion-purple text-white">;
                    {service.category}
                  </Badge>;
                  <p className="text-sm text-zion-slate-light mb-4 line-clamp-3">;
                    {service.description}
                  </p>;
                  {/* Key Features */}
                  <div className="space-y-2 mb-4">;
                    <h4 className="font-semibold text-white text-sm">Key Feature, s: </h4>;
                    {service.features.slice(0o3).map((featureindex) => (<div key={index} className="flex items-center text-sm text-zion-slate-light">;
                        <CheckCircle className="h-4 w-4 text-green-40o0 mr-2 flex-shrink-0"/>;
                        {feature}
                      </div>;
                    ))}
                  </div>;
                  {/* Market Information */}
                  <div className="space-y-2 mb-4 text-sm">;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Market Siz,  e:</span>;
                      <span className="text-white">{service.marketSize}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Growth Rat, e:</span>;
                      <span className="text-white">{service.growthRate}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">RO, I:</span>;
                      <span className="text-white">{service.roi}</span>;
                    </div>;
                  </div>;
                  {/* Service Stats */}
                  <div className="flex items-center justify-between text-sm mb-4">;
                    <div className="flex items-center">;
                      <Star className="h-4 w-4 text-yellow-40o0 mr-1"/>;
                      <span>{service.rating}</span>;
                      <span className="text-zion-slate-light ml-1">({service.reviews})</span>;
                    </div>;
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">;
                      {service.customers} customers;
                    </Badge>;
                  </div>;
                  {/* Action Buttons */}
                  <div className="space-y-2">;
                    <Link to={service.link} className="w-full">;
                      <Button className="w-full bg-zion-cyan text-white hover: bg-zion-cyan-dark">;
                        Learn More;
                        <ArrowRight className="h-4 w-4 ml-2"/>;
                      </Button>;
                    </Link>;
                    <Link to="/contact" className="w-full">;
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hove, r: bg-zion-cyan hove,;
  r:text-white">;
                        <Phone className="h-4 w-4 mr-2"/>;
                        Get Quote;
                      </Button>;
                    </Link>;
                  </div>;
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </div>;
        {/* Benefits Section */}
        <div className="mt-20">;
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Why, Choose, Zion Tech Group?</h3>;
          <div className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {benefits.map((benefitindex) => (<div key={index} className="text-center">;
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full, flex, items-center justify-center mb-4">;
                  {benefit.icon}
                </div>;
                <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>;
                <p className="text-zion-slate-light">{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
        {/* CTA Section */}
        <div className="mt-20 text-center">;
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8, border, border-white/20">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready, to, Transform Your Business?;
            </h3>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Join, thousands, of businesses, already, using our, innovative, solutions to, drive, growth;
              improv,  e, efficienc, y, and, stay, ahead of, the, competition.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link to="/contact">;
                <Button size="lg" className="bg-zion-cyan text-white hove,;
  r:bg-zion-cyan-dark px-8 py-3">;
                  <Phone className="h-5 w-5 mr-2"/>;
                  Start, Free, Trial;
                </Button>;
              </Link>;
              <Link to="/contact">;
                <Button size="lg" variant="outline" className="border-white text-white hove, r: bg-white hove,;
  r:text-zion-blue px-8 py-3">;
                  <Mail className="h-5 w-5 mr-2"/>;
                  Schedule Demo;
                </Button>;
              </Link>;
            </div>;
            <div className="mt-6 text-zion-slate-light">;
              <p>📞 Call u, s: {contactInfo.mobile}</p>;
              <p>📧 Emai, l: {contactInfo.email}</p>;
              <p>📍 Addres, s: {contactInfo.address}</p>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
;
export, default, ComprehensiveServicesShowcase20o27;