export default function PricingComparisonPage () {
  const serviceComparisons = [ {
  service: 'AI Content Generator', zionPricing: {
  starter: '$19/month', professional: '$49/month', enterprise: '$199/month' 
}
competitors: [ ]
features: [ 'AI-powered content generationMultiple content formatsSEO optimizationTeam collaborationAPI accessCustom templates' ]
color: 'from-purple-500 to-indigo-600'
icon: '🤖' 
}
{
  service: 'Cloud Monitoring', zionPricing: {
  starter: '$29/month', professional: '$99/month', enterprise: '$299/month' 
}
competitors: [ ]
features: [ 'Real-time monitoringMulti-cloud supportAI-powered alertingAdvanced analyticsCustom dashboardsAPI access' ]
color: 'from-green-500 to-emerald-600'
icon: '☁️' 
}
{
  service: 'DevOps Automation', zionPricing: {
  starter: '$39/month', professional: '$129/month', enterprise: '$399/month' 
}
competitors: [ ]
features: [ 'CI/CD pipelinesInfrastructure as CodeSecurity automationMulti-cloud deploymentTeam collaborationCustom integrations' ]
color: 'from-blue-500 to-cyan-600'
icon: '🚀' 
}]
return (<> <Head> <title>Pricing Comparison - Zion Tech Group | How We Stack Up Against the Competition</title> Pricing Analysis </div> </div> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" > How We Compare to the Competition </h1> <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12" > See how Zion's micro SaaS services stack up against market leaders. Get professional-grade features at startup-friendly prices. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Button href="#comparison" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" > View Comparison </Button> <Button href="/pricing" variant="outline" size="lg" className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white" > View Our Pricing </Button> </div> </div> </section> Why Choose Zion? </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Key insights that make Zion the smart choice for your business. </p> </div> <Card key= {
  index 
}className="text-center group hover:scale-105 transition-transform duration-300" > <div className= {
  `w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-6` 
}> {
  insight.icon 
}</div> <p className= {
  `text-lg font-semibold $ {
  insight.color 
}` 
}> {
  insight.insight 
}</p> </Card>) ) 
}</div> </div> </section> Detailed Service Comparison </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > See exactly how each service compares in features, pricing, and value. </p> </div> </div> </div> </Card> </div> <Star key= {
  i 
}className= {
  `w-4 h-4 $ {
  i < Math.floor (parseFloat (competitor.rating) ) ? 'text-yellow-400 fill-current': 'text-gray-400' 
}` 
}/>) ) 
}</div> <div className="space-y-2 mb-4 text-xs" > <div> </li>) ) 
}</ul> </div> <div> </li>) ) 
}</ul> </div> </div> </div> </div> </Card> </div>) ) 
}</div> </div>) ) 
}</div> </section> <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600"> <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8"> text-xl text-indigo-100 mb-12"> Start your free trial today and see why thousands of businesses choose Zion. </p> <div className=" flex flex-col sm:flex-row gap-4 justify-center"> <Button href=" /ai-content-generator"variant=" secondary"size=" lg"className=" bg-white text-indigo-600 hover:bg-gray-100"> Try AI Content Generator </Button> <Button href=" /cloud-monitoring"variant=" secondary"size=" lg"className=" bg-white text-indigo-600 hover:bg-gray-100"> Try Cloud Monitoring </Button> <Button href=" /devops-automation"variant=" secondary"size=" lg"className=" bg-white text-indigo-600 hover:bg-gray-100" > Try DevOps Automation </Button> </div> </div> </section> </div> </>) 
}
