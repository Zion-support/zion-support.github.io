import React, { useState } from 'react';
export default IndustrySolutions;
import { Search, Zap, CreditCard, Truck, Phone, Mail, MapPin, Building, Factory, Store, Home, GraduationCap, Stethoscope const IndustrySolutions = () => {}
  return <div>Component</div>;
};
';
'';
''';
    const [searchTerm, setSearchTerm] = useState('');''';
    const [selectedIndustry, setSelectedIndustry] = useState('all');''';
    const [selectedSolutionType, setSelectedSolutionType] = useState('all');''';
    // Industry-specific solutions data'''';
    const industries = ['all',Healthcare',Finance',Manufacturing',Retail',Education',Logistics',Real Estate',Energy',Cybersecurity',Legal',Media',Transportation'];''';
    const solutionTypes = ['all',Digital Health',FinTech',Industry 4.0',Digital Commerce',EdTech',Supply Chain',PropTech',Energy Tech',Security',LegalTech',MediaTech',Mobility'];
    const filteredSolutions = industrySolutions.filter(solution => {}
';
'';
''';
        const matchesSolutionType = selectedSolutionType === 'all' || solution.solutionType === selectedSolutionType;
        return matchesSearch && matchesIndustry && matchesSolutionType}) ;
    const formatPrice = (price, model) => {}
        switch (model) {}
';
            case 'monthly': any;
                return `$${price.toLocaleString()}/month`;'`;
            case 'hourly':``;
                return `$${price}/hour`;'`;
            case 'project-based':``;
                return `$${price.toLocaleString()}`;`;
            default:``;
                return `$${price.toLocaleString()}`}
    }
    const getIndustryColor = (score) => {}
        if (score >= 95)';
            return 'text-green-500';
        if (score >= 90)';
            return 'text-blue-500';
        if (score >= 85)';
            return 'text-yellow-500';';
        return 'text-orange-500'}
    const getIndustryIcon = (industry) => {}
        switch (industry) {}
';
            case 'Healthcare': return <Stethoscope className="w-6 h-6"/>;'"'";
            case 'Finance': return <CreditCard className="w-6 h-6"/>;'"'";
            case 'Manufacturing': return <Factory className="w-6 h-6"/>;'"'";
            case 'Retail': return <Store className="w-6 h-6"/>;'"'";
            case 'Education': return <GraduationCap className="w-6 h-6"/>;'"'";
            case 'Logistics': return <Truck className="w-6 h-6"/>;'"'";
            case 'Real Estate': return <Home className="w-6 h-6"/>;'"'";
            case 'Energy': return <Zap className="w-6 h-6"/>;"";
            default: return <Building className="w-6 h-6"/>}"};"";
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">"";
      <div className="container mx-auto px-4 py-8">";
        {/* Header */}"";
        <div className="text-center mb-12">"";
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 bg-clip-text text-transparent mb-4">;
            Industry Solutions";
          </h1>"";
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">';
            Specialized technology solutions designed for your industry's unique challenges and compliance requirements;
          </p>;
        </div>;
";
        {/* Search and Filters */}"";
        <div className="mb-8 space-y-4">"";
          <div className="relative">"";
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>"";
            <input type="text" placeholder="Search industry solutions..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>;
          </div>";
"";
          <div className="flex flex-wrap gap-4">"";
            <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">"";
              {industries.map(industry => (<option key={industry} value={industry} className="bg-gray-800 text-white">';
                  {industry === 'all' ? 'All Industries' : industry}
                </option>) ) }
            </select>";
"";
            <select value={selectedSolutionType} onChange={(e) => setSelectedSolutionType(e.target.value)} className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">"";
              {solutionTypes.map(type => (<option key={type} value={type} className="bg-gray-800 text-white">';
                  {type === 'all' ? 'All Solution Types' : type}
                </option>) ) }
            </select>;
          </div>;
        </div>;
";
        {/* Solutions Grid */}"";
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"";
          {filteredSolutions.map((solution) => (<div key={solution.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">"";
              <div className="flex items-start justify-between mb-4">"";
                <div className="flex items-center gap-3 mb-2">"";
                  <div className="text-blue-400">;
                    {getIndustryIcon(solution.industry)}
                  </div>";
                  <div>"";
                    <h3 className="text-xl font-semibold text-white">{solution.name}</h3>""`;
                    <div className="flex items-center gap-2">``;
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getIndustryColor(solution.industryScore)} bg-opacity-20 bg-current`}>;
                        Industry Score: {solution.industryScore}";
                      </span>"";
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">;
                        {solution.industry}
                      </span>;
                    </div>;
                  </div>;
                </div>;
              </div>";
"";
              <p className="text-gray-300 mb-4">{solution.description}</p>";
"";
              <div className="mb-4">"";
                <div className="text-2xl font-bold text-white mb-2">;
                  {formatPrice(solution.price, solution.pricingModel)}'";
                </div>'"'";
                <div className="text-sm text-gray-400">{solution.pricingModel.replace('-')}</div>;
              </div>";
"";
              <div className="mb-4">"";
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>"";
                <div className="flex flex-wrap gap-2">"";
                  {solution.features.slice(0, 3).map((feature, index) => (<span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">;
                      {feature}
                    </span>) ) }
                </div>;
              </div>";
"";
              <div className="mb-4">"";
                <h4 className="text-sm font-semibold text-white mb-2">Compliance:</h4>"";
                <div className="flex flex-wrap gap-2">"";
                  {solution.compliance.slice(0, 3).map((compliance, index) => (<span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">;
                      {compliance}
                    </span>) ) }
                </div>;
              </div>";
"";
              <div className="border-t border-gray-600 pt-4">"";
                <div className="flex items-center justify-between text-sm text-gray-400">";
                  <span>Contact us for industry expertise</span>"";
                  <a href={solution.contactInfo.website} className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">;
                    Learn More →;
                  </a>;
                </div>;
              </div>;
            </div>) ) }
        </div>;
";
        {/* Contact Information */}"";
        <div className="mt-16 text-center">"";
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">"";
            <h2 className="text-2xl font-bold text-white mb-4">Need Industry-Specific Solutions?</h2>"";
            <p className="text-gray-300 mb-6">';
              Our team has deep expertise in your industry's unique challenges and compliance requirements";
            </p>"";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">";
              <div>"";
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2"/>"";
                <p className="text-white font-semibold">Phone</p>"";
                <p className="text-gray-300">{industrySolutions[0].contactInfo.phone}</p>;
              </div>";
              <div>"";
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2"/>"";
                <p className="text-white font-semibold">Email</p>"";
                <p className="text-gray-300">{industrySolutions[0].contactInfo.email}</p>;
              </div>";
              <div>"";
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2"/>"";
                <p className="text-white font-semibold">Address</p>"";
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>)}
export default IndustrySolutions}}}}}}}}}}}}}}}}

export { IndustrySolutions }
export { IndustrySolutions }
export { IndustrySolutions }
export { IndustrySolutions }
export { IndustrySolutions }