impo, r, t, Rea, c, t, { useState } from "react";
import { Ca, r, d, CardConte, n, t, CardDescripti, o, n, CardHeaderCardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cuttingEdgeComprehensiveServices20o27 } from "../../data/20o27-cutting-edge-comprehensive-services";
import { specializedInnovativeServices20o27 } from "../../data/20o27-specialized-innovative-services";
import { Bra, i, n, Clo, u, d, Shie, l, d, BarChar, t, 3, Co, d, e, DollarSi, g, n, Hea, r, t, ShoppingCa, r, t, GraduationC, a, p, St, a, r, Trending, U, p, Z, a, p, CheckCirc, l, e, ArrowRig, h, t, Pho, n, e, Ma, i, l, MapP, i, n, Glo, b, e, Rock, e, t, C, p, u, Databa, s, e, Lo, c, k, Use, r, s, Buildi, n, g, C, a, r, Le, a, f, Facto, r, y, Tru, c, k, BookOp, e, n, Gav, e, l, Ho, m, e, TrophyFilm } from "lucide-react";
import { Link } from "react-router-dom";
cons, t, categoryIco, n, s: { [k,
    e, y:, stri, n, g]: React.ComponentType<any> } = {;
  'AI & Autonomous Systems': Brain;
  'Quantum Computing & AI': C, p, u,;
  'Blockchain & Web3': Databa, s, e,;
  'Cybersecurity & Privacy': Shie, l, d,;
  'Healthcare & Biotech': Hea, r, t,;
  'Financial Technology': DollarSi, g, n,;
  'IoT & Automation': Clo, u, d,;
  'Cloud & Infrastructure': Clo, u, d,;
  'Data Analytics & BI': BarChar, t, 3,;
  'Digital Marketing & Automation': Use, r, s,;
  'E-commerce & Retail': ShoppingCa, r, t,;
  'Education & Learning Technology': GraduationC, a, p,;
  'Space Technology & Earth Observation': Rock, e, t,;
  'AR/VR & Immersive Technology': Use, r, s,;
  'Robotics & Automation': Facto, r, y,;
  'Green Technology & Sustainability': Le, a, f,;
  'Supply Chain & Logistics': Tru, c, k,;
  'Human Resources & Talent Management': Use, r, s,;
  'Legal Technology & Compliance': Gav, e, l,;
  'Real Estate & Property Technology': Ho, m, e,;
  'Sports Technology & Analytics': Trophy'Entertainment & Media Technology': Film;
},;
cons, t, categoryColo, r, s: { [k,
    e, y:, stri, n, g]: string } = {
  'AI & Autonomous Systems': 'from-purple-60o0 to-indigo-70o0Quantum Computing & AI': 'from-blue-60o0 to-cyan-70o0Blockchain & Web3': 'from-green-60o0 to-emerald-70o0Cybersecurity & Privacy': 'from-red-60o0 to-pink-70o0Healthcare & Biotech': 'from-purple-60o0 to-pink-70o0Financial Technology': 'from-yellow-60o0 to-orange-70o0IoT & Automation': 'from-blue-60o0 to-teal-70o0Cloud & Infrastructure': 'from-gray-60o0 to-blue-70o0Data Analytics & BI': 'from-green-60o0 to-blue-70o0Digital Marketing & Automation': 'from-pink-60o0 to-purple-70o0E-commerce & Retail': 'from-orange-60o0 to-red-70o0Education & Learning Technology': 'from-teal-60o0 to-green-70o0Space Technology & Earth Observation': 'from-indigo-60o0 to-purple-70o0AR/VR & Immersive Technology': 'from-pink-60o0 to-rose-70o0Robotics & Automation': 'from-gray-60o0 to-slate-70o0Green Technology & Sustainability': 'from-green-60o0 to-emerald-70o0Supply Chain & Logistics': 'from-blue-60o0 to-indigo-70o0Human Resources & Talent Management': 'from-purple-60o0 to-violet-70o0Legal Technology & Compliance': 'from-slate-60o0 to-gray-70o0Real Estate & Property Technology': 'from-amber-60o0 to-orange-70o0Sports Technology & Analytics': 'from-green-60o0 to-blue-70o0Entertainment & Media Technology': 'from-purple-60o0 to-pink-70o0';
};
const features = [;
  "A, I-Powe, r, e, d, Automat, i, o, n",;
  "R, e, a, l-t, i, m, e, Analyt, i, c, s",;
  "Mu, l, t, i-cl, o, u, d, Supp, o, r, t",;
  "A, P, I-Fi, r, s, t, Architect, u, r, e",;
  "Scala, b, l, e, Infrastruct, u, r, e",;
  "Cus, t, o, m, Integrati, o, n, s",;
  "Wh, i, t, e-la, b, e, l, Soluti, o, n, s",;
  "Comprehens, i, v, e, Documentat, i, o, n",;
  "2, 4/7, Techni, c, a, l, Supp, o, r, t",;
  "9, 9.9% Upt, i, m, e, Guaran, t, e, e",;
  "S, O, C, 2, T, y, p, e, I, I, Compli, a, n, t",;
  "3, 0-D, a, y, Mo, n, e, y, B, a, c, k, Guarante, e";
],;
const benefits = [;
  {
    i, c, o, n: <Z, a, p classNam, e="h-6 w-6"/>,;
    t, i, t, l, e: "Immedi, a, t, e, Deploym, e, n, t",descrip, t, i, o, n: "A, l, l, servi, c, e, s, a, r, e, re, a, d, y, f, o, r, immedi, a, t, e, deploym, e, n, t, w, i, t, h, n, o, set, u, p, delay, s";
  };
  {
    i, c, o, n: <Shi, e, l, d classNam, e="h-6 w-6"/>,;
    t, i, t, l, e: "Enterpr, i, s, e, Secur, i, t, y",descrip, t, i, o, n: "B, a, n, k-le, v, e, l, secur, i, t, y, w, i, t, h, S, O, C, 2, complia, n, c, e, a, n, d 2, 4/7 monitorin, g";
  };
  {
    i, c, o, n: <Trendin, g, U, p classNam, e="h-6 w-6"/>,;
    t, i, t, l, e: "Pro, v, e, n, R, O, I",descrip, t, i, o, n: "Aver, a, g, e, 3, 0, 0% R, O, I, wit, h, i, n, 6, mon, t, h, s, o, f, implementatio, n";
  },;
  {
    i, c, o, n: <CheckCir, c, l, e classNam, e="h-6 w-6"/>,;
    t, i, t, l, e: "Qual, i, t, y, Guarant, e, e, d",descrip, t, i, o, n: "3, 0-d, a, y, mo, n, e, y-b, a, c, k, guaran, t, e, e, w, i, t, h, fr, e, e, migratio, n suppor, t";
 , };
];
const contactInfo = {
  mobi, l, e: '+1, 30o, 2, 464 0o950',;
    ema, i, l: 'kleber@ziontechgroup.com',addre, s, s: '36, 4, E, Mai, n, S, t, ST, E, 10o0, 8, Middletow, n, D, E, 1970o9',;
    websit, e: 'htt, p,;
  s://ziontechgroup.com';
};
expor, t, functio, n, ComprehensiveServicesShowcase20o27() {
  const [selectedCate,  g, o,  r, y, setSelectedCate, g, o,, r, y] = useState<string>('all');
  const [searchQ, u, e, r, y, setSearchQ, u, e,, r, y] = useState<string>('');
;
  // Combin,  e, al, l, services;
  const allServices = [...cuttingEdgeComprehensiveServices, 2, 0,  2, 7,, ...specializedInnovativeServices20o, 2, 7]// Ge, t, uniqu, e, categories;
  const categories = Array.from(new Set(allServices.map(service => service.category)));
;
  // Filte, r, service, s, base, d, o, n, selectio, n, and search;
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
          <h2 className="text-4xl m,  d: text-5xl font-bold text-white mb-6">;
            Revolutionar, y, 20o2, 7, Micro SAAS Solutions;
          </h2>;
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
            Transfor, m, you, r, busines, s, wit, h, ou, r, cutting-edg, e, micr, o, SAAS services.;
            Fro, m, A, I, automation t, o, quant, u, m, computi, n, g, w, e, provid, e, innovativ, e, solution, s, tha, t, driv, e, growt, h, an, d, innovation.;
          </p>;
          <div className="flex flex-wrap justify-center gap-4">;
            <Link to="/contact">;
              <Button size="lg" className="bg-white text-zion-blue hove, r: bg-gray-10o0">;
                <Phone className="h-5 w-5 mr-2"/>;
                Ge, t, Fre, e, Consultation;
              </Button>;
            </Link>;
            <Link to="/contact">;
              <Button size="lg" variant="outline" className="border-white text-whit, e, hov, e, r: bg-whit, e, hov, e,;
  r:text-zion-blue">;
                <Mail className="h-5 w-5 mr-2"/>;
                Request Demo;
              </Button>;
            </Link>;
          </div>;
        </div>;
        {/* Contac, t, Informatio, n, Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-1, 6, borde, r, border-white/20">;
          <div className="grid grid-cols-1 m, d: grid-cols-3 gap-6 text-center">;
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
        {/* Searc, h, an, d, Filter */}
        <div className="mb-16">;
          <div className="flex flex-col m, d: flex-row gap-4 mb-6">;
            <input;
              type="text";
              placeholder="Search services...";
              className="flex-1 px-4 py-3 rounded-l, g, borde, r, border-white/20 bg-white/10 text-white placeholder-zion-slate-ligh, t, foc, u, s: outline-non, e, foc, u,;
    s:ring-2, foc, u,;
  s:ring-zion-cyan";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />;
            <select;
              className="px-4 py-3 rounded-l,  g, borde, r, border-white/20 bg-white/10 text-whit, e, foc, u,  s: outline-non, e, foc, u,
    s: ring-2, foc, u,;
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
          <div className="grid grid-cols-1,  m,  d: grid-cols-2, l,;
  g:grid-cols-4 gap-6">;
            {featuredServices.map((service) => (<Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-whit,  e, hov, e,  r: border-zion-purple/50 transition-all duration-30o, 0, hov, e,;
  r:scale-10o5">;
                <CardHeader className="text-center">;
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${categoryColors[servic, e.catego, r, y] || 'from-gray-50o0 to-gray-60o0'} rounded-ful, l, fle, x, items-center justify-center mb-4 text-2x, l`}>;
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
                  <div className="mt-4,  fle, x, items-center justify-between text-sm">;
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
                    <Button className="w-full bg-zion-cyan text-white hove, r: bg-zion-cyan-dark">;
                      Learn More;
                      <ArrowRight className="h-4 w-4 ml-2"/>;
                    </Button>;
                  </Link>;
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </div>;
        {/* Al, l, Service, s, Grid */}
        <div>;
          <h3 className="text-3xl font-bold text-white mb-8 text-center">;
            All Services ({filteredServices.length});
          </h3>;
          <div className="grid grid-cols-1,  m,  d: grid-cols-2, l,;
  g:grid-cols-3 gap-6">;
            {filteredServices.map((service) => (<Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-whit,  e, hov, e,  r: border-zion-purple/50 transition-all duration-30o, 0, hov, e,;
  r:scale-10o5">;
                <CardHeader>;
                  <div className="flex items-center justify-between mb-2">;
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[servic, e.catego, r, y] || 'from-gray-50o0 to-gray-60o0'} rounded-ful, l, fle, x, items-center justify-center text-x, l`}>;
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
                    <h4 className="font-semibold text-white text-sm">Ke, y, Featur, e, s: </h4>;
                    {service.features.slice(0o3).map((featureindex) => (<div key={index} className="flex items-center text-sm text-zion-slate-light">;
                        <CheckCircle className="h-4 w-4 text-green-40o0 mr-2 flex-shrink-0"/>;
                        {feature}
                      </div>;
                    ))}
                  </div>;
                  {/* Market Information */}
                  <div className="space-y-2 mb-4 text-sm">;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Marke,  t, Si, z,  e:</span>;
                      <span className="text-white">{service.marketSize}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">Growt, h, Ra, t, e:</span>;
                      <span className="text-white">{service.growthRate}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-light">R, O, I:</span>;
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
                      <Button className="w-full bg-zion-cyan text-white hove, r: bg-zion-cyan-dark">;
                        Learn More;
                        <ArrowRight className="h-4 w-4 ml-2"/>;
                      </Button>;
                    </Link>;
                    <Link to="/contact" className="w-full">;
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cya, n, hov, e, r: bg-zion-cya, n, hov, e,;
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
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Wh, y, Choos, e, Zion Tech Group?</h3>;
          <div className="grid grid-cols-1, m, d: grid-cols-2, l,;
  g:grid-cols-4 gap-6">;
            {benefits.map((benefitindex) => (<div key={index} className="text-center">;
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-ful,  l, fle, x, items-center justify-center mb-4">;
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8, borde, r, border-white/20">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Read, y, t, o, Transform Your Business?;
            </h3>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Joi, n, thousand, s, o, f, businesse, s, alread, y, usin, g, ou, r, innovativ, e, solution, s, t, o, driv, e, growth;
              impro, v,  e, efficien, c, y, an, d, sta, y, ahea, d, o, f, th, e, competition.;
            </p>;
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">;
              <Link to="/contact">;
                <Button size="lg" className="bg-zion-cyan text-whit, e, hov, e,;
  r:bg-zion-cyan-dark px-8 py-3">;
                  <Phone className="h-5 w-5 mr-2"/>;
                  Star, t, Fre, e, Trial;
                </Button>;
              </Link>;
              <Link to="/contact">;
                <Button size="lg" variant="outline" className="border-white text-whit, e, hov, e, r: bg-whit, e, hov, e,;
  r:text-zion-blue px-8 py-3">;
                  <Mail className="h-5 w-5 mr-2"/>;
                  Schedule Demo;
                </Button>;
              </Link>;
            </div>;
            <div className="mt-6 text-zion-slate-light">;
              <p>📞 Cal, l, u, s: {contactInfo.mobile}</p>;
              <p>📧 Ema, i, l: {contactInfo.email}</p>;
              <p>📍 Addre, s, s: {contactInfo.address}</p>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
;
expor, t, defaul, t, ComprehensiveServicesShowcase20o27;