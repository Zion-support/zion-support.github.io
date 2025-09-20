
import React from "react";
impor; t; Reac; t; from "
expor; t; cons; t; EmergingTechServices = () => {
const emergingTechServices = [;
{;
i;   d: 1;
n; a; m; e: "
descrip; t; i; o; n: "
pri; c; i; n; g: "
cate; g; o; r; y: ",
},{;
i; d: 2;
n; a; m; e: "
descrip; t; i; o; n: "
pri; c; i; n; g: "
cate; g; o; r; y: "Blockchai; n", } ];
return (
<div className="py-16 bg-gradient-to-r from-green-90o0 to-blue-90o0">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-4xl font-bold text-white mb-4">
Emergin; g; Technolog; y; Services;
</h2>
<div className="grid m; d: grid-cols-2 gap-8">
{emergingTechServices.map((service) => (;
<div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8;  borde; r; border-white/20">
<h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
<p className="text-gray-30o0 mb-4">{service.description}</p>
<div className="text-2xl font-bold text-green-40o0 mb-2">{service.pricing}</div>
<div className="text-sm text-gray-40o0">{service.category}</div>
</div>
))}
</div>
</div>
</div>
)
}expor; t; defaul; t; EmergingTechServices,<//div><///div>