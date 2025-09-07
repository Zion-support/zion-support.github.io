const features = [ {
  setIsAnalyzing (true)
//Simulate code analysis setTimeout ( () => {
  setAnalysisResults ({
  language: 'JavaScript', qualityScore: 85, issues: [ {
  type: 'warning', message: 'Consider using const instead of let for variables that are not reassigned', line: 5, severity: 'medium' 
}
{
  type: 'info', message: 'Function is quite long (25 lines) . Consider breaking it into smaller functions', line: 12, severity: 'low' 
}
{
  type: 'error', message: 'Missing semicolon at end of statement', line: 18, severity: 'high' 
}]
metrics: {
  complexity: 'Medium', maintainability: 'Good', testCoverage: '85%', securityScore: '92%' 
}
recommendations: [ 'Use const for immutable variables to improve code clarityBreak down large functions into smaller, more focused functionsAdd proper error handling for better robustnessConsider adding JSDoc comments for better documentation' ] 
})
setIsAnalyzing (false) 
}, 3000) 
}
return (<> <Head> <title>Code Quality Checker - Zion Tech Group | Professional Code Analysis & Improvement Tool</title> <meta name="description" content="Analyze and improve your code quality with our comprehensive checker. Support for multiple languages, security scanning, and detailed improvement recommendations." /> <meta property="og:title" content="Code Quality Checker - Zion Tech Group" /> <meta property="og:description" content="Professional code quality analysis tool with multi-language support and security scanning." /> <meta name="twitter:card" content="summary large image" /> </Head> <div className="relative z-10 container-cursor text-center" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6" > <Code className="w-4 h-4 mr-2" /> Professional Code Analysis </div> <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg" > Code Quality Checker </h1> <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12" > Analyze and improve your code quality with our comprehensive checker. Support for multiple programming languages
security scanning, and detailed improvement recommendations. Write better, safer, and more maintainable code. </p> > {
  isAnalyzing ? (<> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" /> Analyzing Code... </>) : (<> <Play className="w-5 h-5 mr-2" /> Analyze Code Quality </>) 
}</Button> </div> <div className="flex flex-col sm:flex-row gap-6 justify-center" > <Button href="#pricing" variant="outline" size="lg" className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl" > View Pricing </Button> <Button href="/contact" variant="outline" size="lg" className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl" > Schedule Demo </Button> </div> </div> </section> Powerful Analysis Features </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Our code quality checker provides comprehensive analysis and improvement suggestions for better code. </p> </div> </div> <div className= {
  `absolute -inset-2 bg-gradient-to-r from-transparent via-$ {
  feature.gradient 
}to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm` 
}/> </div> </p> </div> </div> </Card>) ) 
}</div> </div> </section> Multi-Language Support </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > We support a wide range of programming languages with language-specific analysis rules and best practices. </p> </div> </li>) ) 
}</ul> </Card>) ) 
}</div> </div> </section> Code Quality Analysis Results </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Here's a sample code quality analysis. Get comprehensive insights for your own code. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8" > {
  /* Quality Score */ 
}/> </svg> </div> <p className="text-gray-400" >Good code quality with room for improvement</p> </Card>) : issue.type === 'warning'? (<AlertTriangle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />) : (<CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />) 
}<div> </div> </div> </div>) ) 
}</div> </Card> </div> </div> </Card> </div> </div>) ) 
}</div> </Card> </div> </section>) 
}Simple Pricing </h2> <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed" > Choose the code quality analysis plan that best fits your development needs. </p> </div> <Card key= {
  index 
}className= {
  `card-hover border-gradient-teal $ {
  plan.popular ? 'ring-2 ring-teal-500 scale-105': '' 
}` 
}style= {
  {
  animationDelay: `$ {
  index * 0.1 
}s` 
}
