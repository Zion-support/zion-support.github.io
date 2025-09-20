interface Service {
<div className="flex items-center justify-between">;
<div className="flex items-center space-x-2">;
<Zap className="w-4 h-4 text-zion-cyan" />;
<span className="text-sm text-zion-slate-light">AI Score:</span>;
<span className="text-zion-cyan font-bold">{service.aiScore}%</span>;
</div>;
<div className="flex items-center space-x-1">;
<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
<span className="text-sm text-white">{service.rating}</span>;
<div className="flex items-center justify-between">;
<div>;
<span className="text-xl font-bold text-white">{service.currency}{service.price}</span>;
<span className="text-zion-slate-light text-sm ml-1">/mo</span>;
</div>;
<Badge variant="outline" className="border-zion-purple/30 text-zion-purple">;
{service.subcategory}
</Badge>;
<div className="text-center mb-16">;
<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-2 mb-6">;
<Zap className="w-5 h-5 text-zion-cyan" />;
<span className="text-zion-cyan font-medium">Featured Services</span>;
</div>;
<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">;
</p>;
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">;
<div className="text-center">;
<div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">;
<TrendingUp className="w-8 h-8 text-white" />;
