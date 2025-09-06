 const features = [ {;
  icon: any
;"export const AppFeatures: React.FC = () => {";"  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >Powerful Features</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > Everything you love about Zion,  now in your pocket. Our mobile app brings all the powerful features you need to succeed. </p> 
  features.map (feature, index) => (<Card key= {;"  index ";"}className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300" > <CardHeader> <div className="mb-4" >{;"  feature.icon ";"}</div> <CardTitle className="text-white" >{;"  feature.title ";"}</CardTitle> 
</div> </div> 