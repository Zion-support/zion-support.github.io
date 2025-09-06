
}
}/> </div> </div> {
  /* Step Content */ 
}<div className="text-center mb-6"> <h3 className="text-xl font-semibold text-white mb-3"> {
  currentStepData.title 
}</h3> <p className="text-zinc-300 leading-relaxed"> {
  currentStepData.description 
}</p> </div> {
  /* Navigation Buttons */ 
}<div className="flex justify-between items-center"> <button onClick= {
  handlePrevious 
}disabled= {
  currentStep === 0 
}className="px-4 py-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors" > Previous </button> <button onClick= {
  handleNext 
}className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors" > {
  currentStep === walkthroughSteps.length - 1 ? "Complete" : "Next" 
}</button> </div> </div> </div> {
  /* Highlight Target Element */ 
}{
  currentStepData.target && (<div className="fixed z-30 pointer-events-none" style= {
  {

