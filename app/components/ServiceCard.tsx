'use client'
import React from 'react'
price?: string
popular?: boolean
onSelect?: () =>void
class Nam e?: string}constServiceCard:React.FC<ServiceCardProp s>= ({title,
description,
features,
price,
popular= false,
onSelect,
<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
)}
</div>
)
}
export default ServiceCard
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
=======
className= ''}) => {return(<divclassName={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/1 0 transition-all duration-300group ${class Name} ${popular ? 'border-purple-400shado w-2 xl shado w-purple-50 0/2 5' :''}`}>{popular &&(<divclassName="flexitems-centergap-2mb-4"><divclassName="w-2 h-2bg-purple-400rounded-full"></di><spanclassName="text-purple-400text-smfont-semibold">MostPopular</spa></di>)}<divclassName="mb-4"><spanclassName="text-xl font-bold text-white mb-2 group-hover:text-purple-400transition-colors"></className="text-xl font-bold text-white mb-2 group-hover:text-purple-400transition-colors">{title}</h><pclassName="text-gray-300text-sm">{description}</p></di><divclassName="space-y-2mb-6">{features.map((featureindex)=>(<divkey={index}className="flexitems-centergap-2"><CheckCircleclassName="w-4 h-4 text-green-400flex-shrink-0" /><spanclassName="text-gray-300text-sm">{feature}</spa></di>))}</di>{price &&(<divclassName="mb-6"><divclassName="text-3 xlfont-boldtext-whitemb-1">{price}</di><divclassName="text-gray-400text-sm">permonth</di></di>)}
{onSelect &&(<onClick={onSelect}className="w-full bg-gradient-to-r from-purple-50 0 to-blue-500text-white py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-all duration-300flex items-center justify-centergap-2group"></
onClick={onSelect}className="w-full bg-gradient-to-r from-purple-50 0 to-blue-500text-white py-3 rounded-lg font-semiboldhover:from-purple-600 hover:to-blue-600transition-all duration-300flex items-center justify-centergap-2group">GetStarted<ArrowRightclassName="w-4 h-4group-hover:translate-x-1transition-transform" /></butto>)}</di>)
}
export defaultServiceCard</ServiceCardProp>
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
