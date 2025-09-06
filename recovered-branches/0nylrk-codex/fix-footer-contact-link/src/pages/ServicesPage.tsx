 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Sample service listings const SERVICE LISTINGS: ProductListing[] = [ aiScore: 94;
rating: 4.8;
reviewCount: 85 
}];
//Filter options specific to services export default function ServicesPage () {
  return (<AppLayout> <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light" > <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4" > <h2 className="text-white text-lg font-medium" >Featured Services</h2> <div className="flex flex-wrap gap-2" > <Link to="/it-onsite-services" > <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > <Globe className="h-4 w-4 mr-2" /> Global IT Onsite Services </Button> </Link> <Link to="/request-quote" > <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Request a Quote </Button> </Link> </div> </div> </div> <DynamicListingPage listings= {
  SERVICE LISTINGS 
}categoryFilters= {
  SERVICE FILTERS 
}initialPrice= {
  {
  min: 3000, max: 10000 
}
}/> <TrustedBySection /> </AppLayout>) 
}