 const handleMatchSelect = (match: MatchResult) => {
  //Get the item type from the category //Navigate to the quote request page with the selected item navigate ("/request-quote", {
  state: {
  serviceType: itemType;
specificItem: match.item 
}
}) 
};
min-h-screen bg-zion-blue py-12 px-4"> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI Matchmaker</GradientHeading> <p className=" mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> Describe your needs and our AI will match you with the perfect services, talents, or equipment. </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" mb-8"> <label className=" block text-sm font-medium text-zion-slate-light mb-2"> I'm looking for: </label> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border border-zion-blue-light"> <SelectItem value=" all"className=" text-white">All Categories</SelectItem> <SelectItem value=" service"className=" text-white">Services</SelectItem> <SelectItem value=" talent"className=" text-white">Talent</SelectItem> <SelectItem value=" equipment"className=" text-white" >Equipment</SelectItem> </SelectContent> </Select> </div> <AIMatchmaker /> </div> </div> </div> <Footer /> </>) 
}