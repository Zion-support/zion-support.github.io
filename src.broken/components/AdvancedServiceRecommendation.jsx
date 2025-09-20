export default AdvancedServiceRecommendation;
import { Badge } from './ui / badge';
export default function Page() {
 from './ui/badge';

        // Budget compatibility'
        const servicePrice = parseInt(service.price.replace(/[^0-9]/g,));
        if(profile.budget === 'Under $50K' && servicePrice < 50)
            score += 20;
        else if(profile.budget === '$50K-$200K' && servicePrice >= 50 && servicePrice < 200)
            score += 20;
        else if(profile.budget === '$200K-$500K' && servicePrice >= 200 && servicePrice < 500)
            score += 20;
        else if(profile.budget === '$500K-$1M' && servicePrice >= 500 && servicePrice < 1000)
            score += 20;
        else if(profile.budget === '$1M+' && servicePrice >= 1000)
            score += 20;
        // Timeline compatibility'
        const serviceDuration = parseInt(service.duration.split('-')[0]);
        if(profile.timeline === 'Immediate (0-3 months)' && serviceDuration <= 3)
            score += 15;
        else if(profile.timeline === 'Short-term (3-6 months)' && serviceDuration <= 6)
            score += 15;
        else if(profile.timeline === 'Medium-term (6-12 months)' && serviceDuration <= 12)
            score += 15;
        else if(profile.timeline === 'Long-term (12+ months)' && serviceDuration > 12)
            score += 15;
        // Technology maturity alignment'
        if(profile.technologyMaturity === 'Innovation Leader' && service.category === 'quantum')
            score += 20;
        else if(profile.technologyMaturity === 'Advanced' && ['ai',blockchain'].includes(service.category))
            score += 20;
        else if(profile.technologyMaturity === 'Mature' && ['iot',edge-computing'].includes(service.category))
            score += 20;
        else if(profile.technologyMaturity === 'Growing' && ['cloud-services',web-development'].includes(service.category))
            score += 20;
        else if(profile.technologyMaturity === 'Early Adopter' && ['basic-services',consulting'].includes(service.category))
            score += 20;
        // Goal alignment
        const goalMatches = profile.primaryGoals.filter(goal => service.benefits.some ( (benefit) => benefit.toLowerCase () .includes(goal.toLowerCase () ) ) ) .length;
        score += (goalMatches / profile.primaryGoals.length) * 20;
        return Math.min(100, score) };
    const generateRecommendations = () => {
        setIsAnalyzing(true) ;
        // Simulate analysis time
        setTimeout(() => {
            const recs = mockServices.map(service => {

                const matchScore = calculateMatchScore(service, clientProfile);
                let priority;
                if(matchScore >= 80)
                    priority = 'High';
                else if(matchScore >= 60)
                    priority = 'Medium';
                else'
                    priority = 'Low';
                let complexity;
                if(service.category === 'quantum' || service.category === 'ai')
                    complexity = 'Complex';
                else if(service.category === 'blockchain' || service.category === 'iot')
                    complexity = 'Moderate';
                else'
                    complexity = 'Simple';
                const reasoning = [`High match with ${clientProfile.industry} industry requirements`,`
                    `Budget alignment with ${clientProfile.budget} range`,`
                    `Timeline compatibility with ${clientProfile.timeline} expectations`,`
                    `Technology maturity level appropriate for ${clientProfile.technologyMaturity}`
                ];
                const expectedROI = matchScore >= 80 ? 'High ROI expected' :'
                    matchScore >= 60 ? 'Moderate ROI expected' : 'ROI to be evaluated';
                const timeToValue = complexity === 'Simple' ? '2-4 months' :'
                    complexity === 'Moderate' ? '4-8 months' : '8-12 months';
                return {

                    service,
                    matchScore,
                    reasoning,
                    priority,
                    implementationComplexity: complexity,
                    expectedROI,
                    timeToValue
                }}) .sort((a, b) => b.matchScore - a.matchScore) ;
            setRecommendations(recs) ;
            setIsAnalyzing(false) ;
            setShowResults(true) }, 2000) };
    const getPriorityColor = (priority) => {

        switch(priority) {

            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800'}
    };
    const getComplexityColor = (complexity) => {

        switch(complexity) {

            case 'Complex': return 'bg-red-100 text-red-800';
            case 'Moderate': return 'bg-yellow-100 text-yellow-800';
            case 'Simple': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800'}
    };
    const isFormComplete = () => {
        return clientProfile.industry && clientProfile.compSize && clientProfile.budget &&
            clientProfile.timeline && clientProfile.technologyMaturity &&
            clientProfile.primaryGoals.length > 0 && clientProfile.challenges.length > 0};"
    return (<div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div initial = {

  { opacity: 0,
  y: 20

}} animate = {

  { opacity: 1,
  y: 0

"
}} className="text-center mb-8">"
        <h1 className="text-4xl font-bold text-zion-blue-dark mb-4">
          AI-Powered Service Recommendation Engine
        </h1>"
        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
          Get personalized service recommendations based on your industry, goals, and requirements.Our AI analyzes your profile to suggest the perfect solutions for your business.</p>
      </motion.div>

      {/* Client Profile Form */}
      <motion.div initial = {

  { opacity: 0,
  y: 20

}} animate = {

  { opacity: 1,
  y: 0

"
}} transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-lg p-6 mb-8">"
        <h2 className="text-2xl font-bold text-zion-blue-dark mb-6 flex items-center gap-2">"
          <Brain className="w-6 h-6 text-zion-cyan"/>
          Tell Us About Your Business
        </h2>
"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>"
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Industry</label>
            <select value={clientProfile.industry} onChange = {

        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Industry</label>
            <select value={clientProfile.industry} onChange = { (e) => setClientProfile(prev => ({ ...prev,
  industry: e.target.value
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Company Size</label>
            <select value={clientProfile.companySize} onChange = { (e) => setClientProfile(prev => ({ ...prev,
  companySize: e.target.value
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Budget Range</label>
            <select value={clientProfile.budget} onChange = { (e) => setClientProfile(prev => ({ ...prev,
  budget: e.target.value
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Implementation Timeline</label>
            <select value={clientProfile.timeline} onChange = { (e) => setClientProfile(prev => ({ ...prev,
  timeline: e.target.value
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Technology Maturity Level</label>
            <select value={clientProfile.technologyMaturity} onChange = { (e) => setClientProfile(prev => ({ ...prev,
  technologyMaturity: e.target.value
                    setClientProfile(prev => ({ ...prev, primaryGoals: [...prev.primaryGoals,
  goal]
                    setClientProfile(prev => ({ ...prev, challenges: [...prev.challenges,
  challenge]
