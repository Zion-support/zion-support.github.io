import React, { useState } from 'react';
  (e) => setClientProfile(prev => ({ ...prev,
  industry: e.target.value 

"
}))} className="w-full p-3 border border-zion-slate-light rounded-md">"
              <option value="">Select Industry</option>
              {industries.map(industry => (<option key={industry} value={industry}>{industry}</option>) ) }
            </select>
          </div>

          <div>"
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Company Size</label>
            <select value={clientProfile.companySize} onChange = {

  (e) => setClientProfile(prev => ({ ...prev,
  companySize: e.target.value 

"
}))} className="w-full p-3 border border-zion-slate-light rounded-md">"
              <option value="">Select Company Size</option>
              {companySizes.map(size => (<option key={size} value={size}>{size}</option>) ) }
            </select>
          </div>

          <div>"
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Budget Range</label>
            <select value={clientProfile.budget} onChange = {

  (e) => setClientProfile(prev => ({ ...prev,
  budget: e.target.value 

"
}))} className="w-full p-3 border border-zion-slate-light rounded-md">"
              <option value="">Select Budget Range</option>
              {budgets.map(budget => (<option key={budget} value={budget}>{budget}</option>) ) }
            </select>
          </div>

          <div>"
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Implementation Timeline</label>
            <select value={clientProfile.timeline} onChange = {

  (e) => setClientProfile(prev => ({ ...prev,
  timeline: e.target.value 

"
}))} className="w-full p-3 border border-zion-slate-light rounded-md">"
              <option value="">Select Timeline</option>
              {timelines.map(timeline => (<option key={timeline} value={timeline}>{timeline}</option>) ) }
            </select>
          </div>

          <div>"
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Technology Maturity Level</label>
            <select value={clientProfile.technologyMaturity} onChange = {

  (e) => setClientProfile(prev => ({ ...prev,
  technologyMaturity: e.target.value 

"
}))} className="w-full p-3 border border-zion-slate-light rounded-md">"
              <option value="">Select Technology Maturity</option>
              {technologyMaturityLevels.map(level => (<option key={level} value={level}>{level}</option>) ) }
            </select>
          </div>
        </div>
"
        <div className="mt-6">"
          <label className="block text-sm font-medium text-zion-slate-dark mb-2">Primary Business Goals</label>"
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">"
            {primaryGoals.map(goal => (<label key={goal} className="flex items-center gap-2 cursor-pointer">"
                <input type="checkbox" checked={clientProfile.primaryGoals.includes(goal)} onChange = {

  (e) => {

                if(e.target.checked) {

                    setClientProfile(prev => ({ ...prev, primaryGoals: [...prev.primaryGoals,
  goal] 

}) ) ;
                }
                else {

                    setClientProfile(prev => ({ ...prev, primaryGoals: prev.primaryGoals.filter(g => g !== goal) }))}"
            }} className="rounded text-zion-cyan"/>"
                <span className="text-sm text-zion-slate-light">{goal}</span>
              </label>))}
          </div>
        </div>
"
        <div className="mt-6">"
          <label className="block text-sm font-medium text-zion-slate-dark mb-2">Current Challenges</label>"
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">"
            {challenges.map(challenge => (<label key={challenge} className="flex items-center gap-2 cursor-pointer">"
                <input type="checkbox" checked={clientProfile.challenges.includes(challenge)} onChange = {

  (e) => {

                if(e.target.checked) {

                    setClientProfile(prev => ({ ...prev, challenges: [...prev.challenges,
  challenge] 

}) ) ;
                }
                else {

                    setClientProfile(prev => ({ ...prev, challenges: prev.challenges.filter(c => c !== challenge) }))}"
            }} className="rounded text-zion-cyan"/>"
                <span className="text-sm text-zion-slate-light">{challenge}</span>
              </label>))}
          </div>
        </div>
"
        <div className="mt-8 text-center">"
          <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-lg px-8 py-4" onClick={generateRecommendations} disabled={!isFormComplete() || isAnalyzing}>
            {isAnalyzing ? (<>"
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analyzing Your Profile...
              </>) : (<>"
                <Brain className="w-5 h-5 mr-2"/>
                Get AI Recommendations
              </>) }
          </Button>
        </div>
      </motion.div>

      {/* Recommendations Results */}
      {showResults && (<motion.div initial = {

  { opacity: 0,
  y: 20

}} animate = {

  { opacity: 1,
  y: 0

}} transition={{ delay: 0.2 }}>"
          <h2 className="text-2xl font-bold text-zion-blue-dark mb-6 text-center">
            Your Personalized Service Recommendations
          </h2>
"
          <div className="space-y-6">
            {recommendations.map((rec, index) => (<motion.div key={rec.service.id} initial = {

  { opacity: 0,
  x: -20

}} animate = {

  { opacity: 1,
  x: 0

}} transition={{ delay: 0.1 * index }}>"
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>"
                    <div className="flex items-start justify-between">"
                      <div className="flex-1">"
                        <CardTitle className="text-xl text-zion-blue-dark mb-2">
                          {rec.service.title}
                        </CardTitle>"
                        <p className="text-zion-slate-light mb-3">
                          {rec.service.description}
                        </p>
"
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={getPriorityColor(rec.priority)}>
                            Priority: {rec.priority}
                          </Badge>
                          <Badge className={getComplexityColor(rec.implementationComplexity) }>
                            Complexity: {rec.implementationComplexity}
                          </Badge>"
                          <Badge className="bg-zion-cyan/10 text-zion-cyan">
                            Match Score: {rec.matchScore}%
                          </Badge>
                        </div>
                      </div>
"
                      <div className="text-right ml-4">"
                        <div className="text-2xl font-bold text-zion-cyan mb-1">
                          {rec.service.price}
                        </div>"
                        <div className="text-sm text-zion-slate-light">
                          {rec.service.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>"
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>"
                        <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">"
                          <Lightbulb className="w-4 h-4 text-zion-purple"/>
                          Why This Service Matches
                        </h4>"
                        <ul className="space-y-2">"
                          {rec.reasoning.map((reason, idx) => (<li key={idx} className="text-sm text-zion-slate-light flex items-start gap-2">"
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"/>
                              {reason}
                            </li>) ) }
                        </ul>
                      </div>

                      <div>"
                        <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">"
                          <BarChart3 className="w-4 h-4 text-zion-cyan"/>
                          Implementation Details
                        </h4>"
                        <div className="space-y-3">"
                          <div className="flex justify-between">"
                            <span className="text-sm text-zion-slate-light">Expected ROI:</span>"
                            <span className="text-sm font-medium text-zion-slate-dark">{rec.expectedROI}</span>
                          </div>"
                          <div className="flex justify-between">"
                            <span className="text-sm text-zion-slate-light">Time to Value:</span>"
                            <span className="text-sm font-medium text-zion-slate-dark">{rec.timeToValue}</span>
                          </div>"
                          <div className="flex justify-between">"
                            <span className="text-sm text-zion-slate-light">Category:</span>"
                            <Badge variant="outline" className="text-xs">
                              {rec.service.category.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
"
                        <div className="mt-4">"
                          <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark" onClick = {

  () => window.open(rec.service.link,_blank')

}>
                            Learn More"
                            <ArrowRight className="w-4 h-4 ml-2"/>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>) ) }
          </div>

          {/* CTA Section */}
          <motion.div initial = {

  { opacity: 0,
  y: 20

}} animate = {

  { opacity: 1,
  y: 0

"
}} transition={{ delay: 0.4 }} className="mt-12 text-center">"
            <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">"
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>"
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Our expert team is ready to help you implement the perfect solution
                for your business needs.Contact us today for a personalized consultation.</p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <Button className="bg-white text-zion-purple hover:bg-zion-slate-light" onClick = {

  () => window.open('mailto:kleber@ziontechgroup.com?subject=Service Recommendation Consultation',_blank')

}>"
                  <Users className="w-5 h-5 mr-2"/>
                  Get Expert Consultation
                </Button>"
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple" onClick = {

  () => window.open('tel:+13024640950',_blank')

}>"
                  <Zap className="w-5 h-5 mr-2"/>
                  Call Now
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>)}
    </div>)};
export default AdvancedServiceRecommendation;
}}}}}}}}}'"`