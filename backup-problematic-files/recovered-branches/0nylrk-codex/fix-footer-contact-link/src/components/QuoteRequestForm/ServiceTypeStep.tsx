import { useState } from "react"
import { QuoteFormData, ListingItem, ServiceType } from "@/types/
import { Input } from "@/components/ui/
import { Card } from "@/components/ui/
import { ListingScoreCard } from "@/components/
  { id:"service-1", title:"AI Development", category:"Services", image: any
  { id:"service-2", title:"Cloud Migration", category:"Services", image: any
  { id:"talent-1", title:"AI Engineer", category:"Talents", image: any
  { id:"talent-2", title:"Data Scientist", category:"Talents", image: any
  { id:"equipment-1", title:"Workstation", category:"Equipment", image: any
  { id:"equipment-2", title:"Server Rack", category:"Equipment", image: any
return (<div className="space-y-6"> <div> <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3> <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> <Card > <h4 className="font-medium text-white">Services</h4> <p className="text-sm text-zion-slate-light">AI solutions, consulting, development</p> </Card> <Card > <h4 className="font-medium text-white">Talent</h4> <p className="text-sm text-zion-slate-light">AI specialists, developers, consultants</p> </Card> <Card > <h4 className="font-medium text-white">Equipment
</h3> <div className="relative"> 
className="pl-10 bg-zion-blue border border-zion-blue-light focus: any