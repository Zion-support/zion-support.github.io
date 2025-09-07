setIsValidating (true)
setValidationResults ([])
setValidationResults (results)
setIsValidating (false) 
}
typos.includes (domain) )
const getStatusIcon = (status: string) => {
  switch (status) {
  case 'valid': 
}
}
switch (status) {
  case 'valid': return 'text-green-400'
case 'suspicious': return 'text-yellow-400'
case 'disposable': return 'text-orange-400'
case 'invalid': return 'text-red-400'
default: Email Validation & Verification </div> </div> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" > Email Validator </h1> </p> </div> </section> Validate Your Emails </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Our advanced validation engine checks multiple factors to ensure email quality and deliverability. </p> </div> Email Input </h3> <div className="flex items-center space-x-2" > <label className="text-sm text-gray-300" >Bulk Mode</label> <input /> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" > Email Addresses (One per line) </label> <textarea value= {
  emails 
}rows= {
  8 
}className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" /> </div>) : (<div> <label className="block text-sm font-medium text-gray-300 mb-2" > Email Address </label> <input type="email" value= {
  emails 
}onChange= {
  (e) => setEmails (e.target.value) 
}placeholder="Enter email address to validate" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
}<div className="flex space-x-3" > <Button > {
  isValidating ? (<> <RefreshCw className="w-5 h-5 mr-2 animate-spin" /> Validating... </>) : (<> <CheckCircle className="w-5 h-5 mr-2" /> Validate Emails </>) 
}</Button> {
  validationResults.length > 0 && (<Button onClick= {
  clearResults 
}variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700" > Clear </Button>) 
}</div> <div className="text-sm text-gray-400" > <p>• Validates email format and syntax</p> <p>• Checks for disposable email domains</p> <p>• Detects common typos and mistakes</p> <p>• Provides deliverability score</p> </div> </div> </Card> Validation Results </h3> {
  validationResults.length > 0 && (<Button onClick= {
  copyResults 
}variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700" > <Copy className="w-4 h-4 mr-2" /> Copy Results </Button>) 
}</div> <div> <span className="text-gray-400" >Total:</span> <span className="ml-2 text-white font-medium" > {
  stats.total 
}</span> </div> <div> </span> </div> </div> </div>) 
}<div key= {
  index 
}className= {
  `p-4 rounded-lg border $ {
  result.status === 'valid' ? 'border-green-500/30 bg-green-500/10' : result.status === 'suspicious' ? 'border-yellow-500/30 bg-yellow-500/10' : result.status === 'disposable' ? 'border-orange-500/30 bg-orange-500/10' : 'border-red-500/30 bg-red-500/10' 
}` 
}> </span> </div> <span className= {
  `text-sm font-medium $ {
  getScoreColor (result.score) 
}` 
}> Score: {
  result.score 
}</span> </div> </li>) ) 
}</ul> </div>) 
}⚠️ Disposable email domain detected </div>) 
}💡 Possible typo detected in domain </div>) 
}</div>) ) 
}</div>) : (<div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center" > <div className="text-6xl mb-4" >📧</div> <p className="text-gray-400" > Validation results will appear here. Enter an email address and click validate to get started. </p> </div>) 
}</Card> </div> </div> </section> Advanced Email Validation Features </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Comprehensive email validation with real-time checking and intelligent analysis. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🔍</div> <h3 className="text-xl font-bold text-white mb-4" >Syntax Validation</h3> <p className="text-gray-400" > Checks email format, length, and RFC compliance standards for maximum accuracy. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🛡️</div> <h3 className="text-xl font-bold text-white mb-4" >Disposable Detection</h3> <p className="text-gray-400" > Identifies temporary and disposable email addresses to prevent fraud and abuse. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >💡</div> <h3 className="text-xl font-bold text-white mb-4" >Typo Detection</h3> <p className="text-gray-400" > Smart algorithms detect common typos in popular email domains like Gmail and Yahoo. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📊</div> <h3 className="text-xl font-bold text-white mb-4" >Deliverability Score</h3> <p className="text-gray-400" > Get a comprehensive score indicating the likelihood of successful email delivery. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >⚡</div> <h3 className="text-xl font-bold text-white mb-4" >Bulk Validation</h3> <p className="text-gray-400" > Validate thousands of email addresses simultaneously with our high-performance engine. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🌍</div> <h3 className="text-xl font-bold text-white mb-4" >Global Coverage</h3> <p className="text-gray-400" > Supports all international email formats and domain types worldwide. </p> </Card> </div> </div> </section> Perfect For Every Use Case </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > From user registration to email marketing, our validation service ensures quality and deliverability. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8" > <Card className="p-8 bg-gray-800 border border-gray-700" > <div className="text-4xl mb-4" >👥</div> <h3 className="text-2xl font-bold text-white mb-4" >User Registration</h3> <p className="text-gray-400 mb-6" > Ensure only valid email addresses are used during user signup, reducing bounce rates and improving user experience. </p> <ul className="space-y-2 text-gray-300" > <li>• Prevent fake accounts and spam</li> <li>• Improve user onboarding success</li> <li>• Reduce support tickets</li> </ul> </Card> <Card className="p-8 bg-gray-800 border border-gray-700" > <div className="text-4xl mb-4" >📧</div> <h3 className="text-2xl font-bold text-white mb-4" >Email Marketing</h3> <p className="text-gray-400 mb-6" > Clean your email lists before campaigns to maximize deliverability and improve engagement metrics. </p> <ul className="space-y-2 text-gray-300" > <li>• Higher open and click rates</li> <li>• Better sender reputation</li> <li>• Reduced bounce rates</li> </ul> </Card> <Card className="p-8 bg-gray-800 border border-gray-700" > <div className="text-4xl mb-4" >🛒</div> <h3 className="text-2xl font-bold text-white mb-4" >E-commerce</h3> <p className="text-gray-400 mb-6" > Validate customer emails during checkout to ensure order confirmations and updates reach customers. </p> <ul className="space-y-2 text-gray-300" > <li>• Improve customer communication</li> <li>• Reduce order abandonment</li> <li>• Better customer support</li> </ul> </Card> <Card className="p-8 bg-gray-800 border border-gray-700" > <div className="text-4xl mb-4" >🏢</div> <h3 className="text-2xl font-bold text-white mb-4" >Business Applications</h3> <p className="text-gray-400 mb-6" > Integrate email validation into your business processes for data quality and compliance. </p> <ul className="space-y-2 text-gray-300" > <li>• Data quality assurance</li> <li>• Compliance requirements</li> <li>• Operational efficiency</li> </ul> </Card> </div> </div> </section> <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600"> <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> text-xl text-blue-100 mb-8"> Join thousands of businesses who trust our email validation service to improve deliverability and user experience. </p> <div className=" flex flex-col sm:flex-row gap-4 justify-center"> <Button href=" /contact"size=" lg"className=" bg-white text-blue-600 hover:bg-gray-100"> Get Started Today <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /pricing"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-blue-600" > View Pricing </Button> </div> </div> </section> </>) 
}