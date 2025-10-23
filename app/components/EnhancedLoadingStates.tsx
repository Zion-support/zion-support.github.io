'use client'
import React from 'react'
sm: 'w-4 h-4',
md: 'w-8 h-8',
lg: 'w-12h-1 2'}
return(<divclassName="flex flex-colitems-centerjustify-centerp-8"><Loader2className={`${sizeClasses[size]} animate-spin text-blue-500`} />{text &&(<pclassName="mt-2text-smtext-gray-500">{text}</p>)}</di>)
}
=======
export constPageLoader: React.FC= () =>(<divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900flexitems-centerjustify-center"><divclassName="text-center"><divclassName="w-1 6 h-16bg-gradient-to-r from-blue-500to-purple-600rounded-2 xl flex items-center justify-center mb-4mx-autoanimate-pulse"><BrainclassName="w-8h-8text-white" /></di><h2className="text-xl font-semiboldtext-whitemb-2">ZionTechGroup</h><pclassName="text-gray-300">Loadingamazingcontent...</p></di></di>)
export constServiceCardSkeleton: React.FC= () =>(<divclassName="bg-white/5 backdrop-blur-sm rounded-2 xlp-8animate-pulse"><divclassName="w-16h-16bg-gray-600rounded-2xlmb-6"></di><divclassName="h-6bg-gray-600roundedmb-4"></di><divclassName="h-4bg-gray-600roundedmb-4"></di><divclassName="space-y-2"><divclassName="h-3 bg-gray-600rounded"></di><divclassName="h-3 bg-gray-600rounded"></di><divclassName="h-3bg-gray-600roundedw-3/4"></di></di></di>)
export constStatsSkeleton: React.FC= () =>(<divclassName="grid grid-cols-2md:grid-cols-4gap-8">{Array.from({length:4}).map((_index) =>(<divkey={index}className="text-centeranimate-pulse"><divclassName="h-8bg-gray-600roundedmb-2"></di><divclassName="h-4 bg-gray-600roundedw-3/4mx-auto"></di></di>))}</di>)
export constContentSkeleton: React.FC= () =>(<divclassName="space-y-6animate-pulse"><divclassName="h-8bg-gray-600roundedw-3/4"></di><divclassName="space-y-2"><divclassName="h-4 bg-gray-600rounded"></di><divclassName="h-4 bg-gray-600rounded"></di><divclassName="h-4bg-gray-600roundedw-2/3"></di></di></di>
)
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
