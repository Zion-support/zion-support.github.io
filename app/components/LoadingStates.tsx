'use client'
import React from 'react'
=======
import {Loader2} from 'lucide-react'
export constPageLoader: React.FC= () =>{return(<divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900flexitems-centerjustify-center"><divclassName="text-center"><divclassName="w-16h-16bg-gradient-to-r from-cyan-400to-purple-400rounded-full flex items-center justify-centermx-automb-4"><Loader2className="w-8 h-8 text-slate-900animate-spin" /></di><h2className="text-xl font-semiboldtext-whitemb-2">Loading...</h><pclassName="text-gray-300">Please wait while we loadthepage</p></di></di>)}
export constComponentLoader: React.FC= () => {return(<divclassName="flex items-centerjustify-centerp-8"><divclassName="flex items-center space-x-2text-cyan-400"><Loader2className="w-5h-5animate-spin" /><spa n>Loadingcomponent...</spa></di></di>)}
export constServiceCardSkeleton: React.FC= () => {return(<divclassName="bg-slate-80 0/50backdrop-blur-sm border border-slate-700rounded-xlp-6animate-pulse"><divclassName="w-12h-1 2bg-slate-700rounded-lgmb-4"></di><divclassName="h-6 bg-slate-700roundedmb-3w-3/4"></di><divclassName="h-4bg-slate-700roundedmb-2"></di><divclassName="h-4 bg-slate-700roundedw-5/6mb-4"></di><divclassName="h-8 bg-slate-700roundedw-1/2mx-auto"></di></di>)}
export constContentSkeleton: React.FC= () => {return(<divclassName="bg-slate-80 0/50backdrop-blur-sm border border-slate-700rounded-xlp-8animate-pulse"><divclassName="h-8 bg-slate-700roundedmb-4w-1/2"></di><divclassName="h-4bg-slate-700roundedmb-2"></di><divclassName="h-4bg-slate-700roundedmb-2"></di><divclassName="h-4bg-slate-700roundedw-3/4"></di></di>)}
export constLoadingSpinner: React.FC= () =>(<divclassName="flex items-centerjustify-centerp-8"><divclassName="w-8 h-8 border-4 border-cyan-400border-t-transparentrounded-fullanimate-spin"></di></di>
)
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
