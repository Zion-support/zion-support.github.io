

    setTimeout(() => {;
const orgSize = organizationSizes[formData.organizationSize as keyof typeof organizationSizes],;
const industry = industries[formData.industry as keyof typeof industries],;
const budget = budgetLevels[formData.budget as keyof typeof budgetLevels],

      setIsCalculating(false)}, 2000)},;
const generateRecommendations = (score: number, data: any) => {;
return recommendations},;
const createImplementationRoadmap = (level: string, data: any) => {;
const roadmaps = {
      'Early Stage': [

            {results ? (
              <div className="space-y-6">,

                {/* Overall Score */}
                <div className="text-center">,
                  <div className={`text-4xl font-bold ${getScoreColor(results.overallScore)} mb-2`}>,

                    {results.overallScore}/100,
                  
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getReadinessColor(results.readinessLevel)}`}>,

                    {results.readinessLevel}

                {/* Investment Analysis */}
                <div className="bg-gray-50 rounded-lg p-6">,
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Analysis
                  <div className="space-y-2">,
                    <div className="flex justify-between">,
                      <span className="text-gray-600">Estimated Investment: 
                      <span className="font-semibold">{formatCurrency(results.estimatedInvestment)}
                    
                    <div className="flex justify-between">,
                      <span className="text-gray-600">Expected ROI: 
                      <span className="font-semibold text-green-600">{results.expectedROI}%
                    
                    <div className="flex justify-between">,
                      <span className="text-gray-600">Timeline: 
                      <span className="font-semibold">{results.timeline} months

                {/* Recommendations */}
                <div className="bg-blue-50 rounded-lg p-6">,
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Recommendations
                  <ul className="space-y-2">,

                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">,
                        <span className="text-blue-500 mr-2">•
                        <span className="text-gray-700">{rec}
                      </li>))}

                {/* Implementation Roadmap */}
                <div className="bg-green-50 rounded-lg p-6">,
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Roadmap
                  <div className="space-y-4">,

                    {results.implementationRoadmap.map((phase, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4">,
                        <h4 className="font-semibold text-gray-900">{phase.phase}
                        <p className="text-sm text-gray-600 mb-2">Duration: {phase.duration}
                        <ul className="space-y-1">,

                          {phase.keyActivities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-700 flex items-start">,
                              <span className="text-green-500 mr-2">•
                              {activity}
                            </li>))}
                        
                      </div>))}

                {/* Next Steps */}
                <div className="bg-purple-50 rounded-lg p-6">,
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps
                  <div className="space-y-3">,
                    <Link,
href="/contact",
                      className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover: bg-purple-700 transition-colors">,
                      Schedule Quantum AI Consultation,
                    
                    <Link,
href="/resources/quantum-ai-implementation-guide",
                      className="block w-full border border-purple-600 text-purple-600 text-center py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors">,
                      Download Implementation Guide,

              </div>) : (
              <div className="text-center py-12">,
                <div className="text-gray-400 mb-4">,
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,

                <p className="text-gray-600">,
                  Complete the assessment to see your quantum AI readiness analysis.,
                
              </div>)}

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">,
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quantum AI Readiness Levels
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            <div className="text-center p-4 bg-red-50 rounded-lg">,
              <h3 className="font-semibold text-gray-900 mb-2">Early Stage
              <div className="text-2xl font-bold text-red-600 mb-1">0-39
              <div className="text-sm text-gray-600">Focus on foundation building
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">,
              <h3 className="font-semibold text-gray-900 mb-2">Developing
              <div className="text-2xl font-bold text-yellow-600 mb-1">40-59
              <div className="text-sm text-gray-600">Build capabilities and awareness
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">,
              <h3 className="font-semibold text-gray-900 mb-2">Near Ready
              <div className="text-2xl font-bold text-blue-600 mb-1">60-79
              <div className="text-sm text-gray-600">Prepare for pilot implementation
            
            <div className="text-center p-4 bg-green-50 rounded-lg">,
              <h3 className="font-semibold text-gray-900 mb-2">Quantum Ready
              <div className="text-2xl font-bold text-green-600 mb-1">80-100
              <div className="text-sm text-gray-600">Ready for full implementation

    </div>),

