import React, { useState } from &apos;react&apos;';
import { motion } from &apos;framer-motion&apos;';
import { Brain, CheckCircle, ArrowRight, Zap, Users, Lightbulb, BarChart3 } from &apos;lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from &apos;./ui/card&apos;';&apos;';
import { Button } from &apos;./ui/button&apos;';&apos;';
import { Badge } from &apos;./ui/badge';&apos;&apos;
const AdvancedServiceRecommendation = () => {}
    const;const;const [clientProfile, setClientProfile] = useState({}
';
&apos;';
&apos;&apos;';
        industry: &apos;&apos;,&apos;&apos;';
        compSize: &apos;&apos;,&apos;&apos;';
        budget: &apos;&apos;,&apos;&apos;';
        timeline: &apos;&apos;,&apos;&apos;';
        technologyMaturity: &apos;&apos;,
        primaryGoals[],
        challenges[]})&apos;&apos;
    const [recommendations, setRecommendations] = useState([])';&apos;&apos;
    const [isAnalyzing, setIsAnalyzing] = useState(false)';&apos;&apos;
    const [showResults, setShowResults] = useState(false)';';&apos;&apos;
    const industries = [&apos;&apos;'';
        &apos;Technology&apos;,Healthcare&apos;,Financial Services&apos;,Manufacturing&apos;,Retail&apos;,Education&apos;,Government&apos;,Energy&apos;,Transportation&apos;,Media&apos;&apos;';
    ]';';&apos;&apos;
    const compSizes = [&apos;&apos;'';
        &apos;Startup (1-50 employees),Small Business (51-200 employees),Medium Business (201-1000 employees),Enterprise (1000+ employees)&apos;';
    ]';';&apos;&apos;
    const budgets = [&apos;&apos;'';
        &apos;Under $50K&apos;,$50K-$200K&apos;,$200K-$500K&apos;,$500K-$1M&apos;,$1M+&apos;&apos;';
    ]';';&apos;&apos;
    const technologyMaturityLevels = [&apos;&apos;'';
        &apos;Early Adopter&apos;,Growing&apos;,Mature&apos;,Advanced&apos;,Innovation Leader&apos;&apos;';
    ]';';&apos;&apos;
    const primaryGoals = [&apos;&apos;'';
        &apos;Cost Reduction&apos;,Revenue Growth&apos;,Operational Efficiency&apos;,Digital Transformation&apos;,Innovation&apos;,Competitive Advantage&apos;,Customer Experience&apos;,Risk Management&apos;,Sustainability&apos;&apos;';
    ]';';&apos;&apos;
    const challenges = [&apos;&apos;'&apos;
        &apos;Legacy Systems&apos;,Data Security&apos;,Scalability Issues&apos;,Talent Shortage&apos;,Regulatory Compliance&apos;,Integration Complexity&apos;,Performance Issues&apos;,Cost Management&apos;,Technology Debt';
    ];&apos;&apos;
    const mockServices = []{}
';
&apos;';
&apos;&apos;';
            id: &apos;ai-crm-platform&apos;,'&apos;';
            title: &apos;AI-Powered CRM Platform&apos;,'&apos;';
            description: &apos;Advanced customer relationship management platform with AI-driven insights and automation.&apos;,'&apos;';
            category: &apos;ai&apos;,'&apos;';
            price: &apos;$25,000/month&apos;,'&apos;';
            duration: &apos;6-12 months&apos;,'&apos;';
            tags[&apos;AI&apos;,CRM&apos;,Automation&apos;,Analytics&apos;],';';
            features[&apos;AI-powered insights&apos;,Automated workflows&apos;,Predictive analytics&apos;],';';
            benefits[&apos;Improved customer retention&apos;,Increased sales efficiency&apos;,Better decision making&apos;],';';
            technology[&apos;AI/ML&apos;,Cloud Computing&apos;,Big Data&apos;,Automation&apos;],';';
            targetAudience[&apos;Enterprise&apos;,Financial Services&apos;,Healthcare&apos;,Technology Companies&apos;],';';
            image: &apos;/images/services/ai-crm.jpg&apos;,'&apos;';
            link: &apos;http,s://ziontechgroup.com/services/ai-crm-platform&apos;,'&apos;';
            contactInfo: &apos;+1 302 464 0950&apos;,'&apos;';
            email: &apos;kleber@ziontechgroup.com&apos;},
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;quantum-computing-service&apos;,'&apos;';
            title: &apos;Quantum Computing as a Service&apos;,'&apos;';
            description: &apos;Enterprise-grade quantum computing platform for complex computational problems.&apos;,'&apos;';
            category: &apos;quantum&apos;,'&apos;';
            price: &apos;$150,000/month&apos;,'&apos;';
            duration: &apos;12-18 months&apos;,'&apos;';
            tags[&apos;Quantum Computing&apos;,Research&apos;,Optimization&apos;],';';
            features[&apos;Quantum processors access&apos;,Algorithm development&apos;,Research support&apos;],';';
            benefits[&apos;Solve intractable problems&apos;,Research acceleration&apos;,Competitive advantage&apos;],';';
            technology[&apos;Quantum Computing&apos;,Quantum Algorithms&apos;,Research Tools&apos;],';';
            targetAudience[&apos;Research Institutions&apos;,Pharmaceutical Companies&apos;,Financial Services&apos;],';';
            image: &apos;/images/services/quantum-computing.jpg&apos;,'&apos;';
            link: &apos;http,s://ziontechgroup.com/services/quantum-computing-service&apos;,'&apos;';
            contactInfo: &apos;+1 302 464 0950&apos;,'&apos;';
            email: &apos;kleber@ziontechgroup.com&apos;},
        {}
';
&apos;';
&apos;&apos;';
            id: &apos;blockchain-supply-chain&apos;,'&apos;';
            title: &apos;Blockchain Supply Chain Solution&apos;,'&apos;';
            description: &apos;Transparent and secure supply chain management using blockchain technology.&apos;,'&apos;';
            category: &apos;blockchain&apos;,'&apos;';
            price: &apos;$75,000/month&apos;,'&apos;';
            duration: &apos;8-14 months&apos;,'&apos;';
            tags[&apos;Blockchain&apos;,Supply Chain&apos;,Transparency&apos;],';';
            features[&apos;End-to-end tracking&apos;,Smart contracts&apos;,Transparency&apos;],';';
            benefits[&apos;Enhanced transparency&apos;,Reduced fraud&apos;,Improved efficiency&apos;],';';
            technology[&apos;Blockchain&apos;,Smart Contracts&apos;,IoT&apos;,Cloud Computing&apos;],';';
            targetAudience[&apos;Manufacturing&apos;,Retail&apos;,Logistics&apos;,Food & Beverage&apos;],';';
            image: &apos;/images/services/blockchain-supply-chain.jpg&apos;,'&apos;';
            link: &apos;http,s://ziontechgroup.com/services/blockchain-supply-chain&apos;,'&apos;';
            contactInfo: &apos;+1 302 464 0950&apos;,'&apos;';
            email: &apos;kleber@ziontechgroup.com&apos;}
    ];&apos;&apos;
    const calculateMatchScore = (service, profile) => {}
        let score = 0;
        // Industry match;
        if(service.targetAudience?.some((audience) => audience.toLowerCase().includes(profile.industry.toLowerCase()))) {}
            score += 25}';
        // Budget compatibility';&apos;&apos;
        const servicePrice = parseInt(service.price.replace(/[^0-9]/g,))&apos;
        if (profile.budget === &apos;Under $50K&apos; && servicePrice&apos; <;< 50);
            score += 20';
        else if (profile.budget === &apos;$50K-$200K&apos; && servicePrice >= 50 && servicePrice&apos;&apos; < 200);
            score += 20';
        else if (profile.budget === &apos;$200K-$500K&apos; && servicePrice >= 200 && servicePrice&apos;&apos; < 500);
            score += 20';
        else if (profile.budget === &apos;$500K-$1M&apos; && servicePrice >= 500 && servicePrice&apos;&apos; < 1000);
            score += 20';
        else if (profile.budget === &apos;$1M+&apos; && servicePrice >= 1000);
            score += 20';
        // Timeline compatibility&apos;';&apos;&apos;
        const serviceDuration = parseInt(service.duration.split(&apos;-&apos;)[0])&apos;
        if (profile.timeline === &apos;Immediate (0-3 months)&apos; && serviceDuration&apos;&apos; <;<= 3);
            score += 15';
        else if (profile.timeline === &apos;Short-term (3-6 months)&apos; && serviceDuration&apos;&apos; <= 6);
            score += 15';
        else if (profile.timeline === &apos;Medium-term (6-12 months)&apos; && serviceDuration&apos;&apos; <= 12);
            score += 15';
        else if (profile.timeline === &apos;Long-term (12+ months)&apos; && serviceDuration > 12);
            score += 15';
        // Technology maturity alignment&apos;';
        if (profile.technologyMaturity === &apos;Innovation Leader&apos; && service.category === &apos;quantum&apos;);
            score += 20';
        else if (profile.technologyMaturity === &apos;Advanced&apos; && [&apos;ai&apos;,blockchain&apos;].includes(service.category));
            score += 20';
        else if (profile.technologyMaturity === &apos;Mature&apos; && [&apos;iot&apos;,edge-computing&apos;].includes(service.category));
            score += 20';
        else if (profile.technologyMaturity === &apos;Growing&apos; && [&apos;cloud-services&apos;,web-development&apos;].includes(service.category));
            score += 20';
        else if (profile.technologyMaturity === &apos;Early Adopter&apos; && [&apos;basic-services&apos;,consulting&apos;].includes(service.category));
            score += 20;
        // Goal alignment;&apos;&apos;
        const goalMatches = profile.primaryGoals.filter(goal => service.benefits.some ( (benefit) => benefit.toLowerCase () .includes(goal.toLowerCase () ) ) ) .length;
        score += (goalMatches / profile.primaryGoals.length) * 20;
        return Math.min(100, score) }
    const generateRecommendations = () => {}
        setIsAnalyzing(true) ;
        // Simulate analysis time;
        setTimeout(() => {}
            const recs = mockServices.map(service => {}
                const;const;const matchScore = calculateMatchScore(service, clientProfile);
                let priority;
                if (matchScore >= 80)';
                    priority = &apos;High';
                else if (matchScore >= 60)';
                    priority = &apos;Medium';
                else&apos;';
                    priority = &apos;Low';
                let complexity';
                if (service.category === &apos;quantum&apos; || service.category === &apos;ai&apos;)';
                    complexity = &apos;Complex';
                else if (service.category === &apos;blockchain&apos; || service.category === &apos;iot&apos;)';
                    complexity = &apos;Moderate';
                else&apos;';
                    complexity = &apos;Simple';&apos;&apos;
                const reasoning = [];
                    `High match with ${clientProfile.industry} industry requirements`,``;
                    `Budget alignment with ${clientProfile.budget} range`,``;
                    `Timeline compatibility with ${clientProfile.timeline} expectations`,``;
                    `Technology maturity level appropriate for ${clientProfile.technologyMaturity}`;
                ]';&apos;&apos;
                const expectedROI = matchScore >= 80 ? &apos;High ROI expected&apos; :&apos;';
                    matchScore >= 60 ? &apos;Moderate ROI expected&apos; : &apos;ROI to be evaluated';&apos;&apos;
                const timeToValue = complexity === &apos;Simple&apos; ? &apos;2-4 months&apos; :&apos;';
                    complexity === &apos;Moderate&apos; ? &apos;4-8 months&apos; : &apos;8-12 months';
                return {}
                    service,
                    matchScore,
                    reasoning,
                    priority,
                    implementationComplexity: complexity,
                    expectedROI,
                    timeToValue}}) .sort((a, b) => b.matchScore - a.matchScore) ;
            setRecommendations(recs) ;
            setIsAnalyzing(false) ;
            setShowResults(true) }, 2000) }&apos;&apos;
    const getPriorityColor = (priority) => {}
        switch (priority) {}
';
&apos;';
&apos;&apos;';
            case &apos;High&apos;: return &apos;bg-red-100 text-red-800&apos;';
            case &apos;Medium&apos;: return &apos;bg-yellow-100 text-yellow-800&apos;';
            case &apos;Low&apos;: return &apos;bg-green-100 text-green-800&apos;';
            default: return &apos;bg-gray-100 text-gray-800&apos;}
    }&apos;&apos;
    const getComplexityColor = (complexity) => {}
        switch (complexity) {}
';
&apos;';
&apos;&apos;';
            case &apos;Complex&apos;: return &apos;bg-red-100 text-red-800&apos;';
            case &apos;Moderate&apos;: return &apos;bg-yellow-100 text-yellow-800&apos;';
            case &apos;Simple&apos;: return &apos;bg-green-100 text-green-800&apos;';
            default: return &apos;bg-gray-100 text-gray-800&apos;}
    }&apos;&apos;
    const isFormComplete = () => {}
        return clientProfile.industry && clientProfile.compSize && clientProfile.budget &&;
            clientProfile.timeline && clientProfile.technologyMaturity &&'&apos;';
            clientProfile.primaryGoals.length > 0 && clientProfile.challenges.length > 0}';&apos;&apos;
    return (&apos;&apos;<div className=&apos;max-w-7xl mx-auto p-6&apos;>
      {/* Header */}&apos;
      <motion.div initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;text-center mb-8&apos;>'&apos;&apos;'&apos;&apos;
        <h1 className=&apos;text-4xl font-bold text-zion-blue-dark mb-4&apos;>
          AI-Powered Service Recommendation Engine&apos;&apos;'&apos;&apos;
        </h1>&apos;&apos;'&apos;&apos;'
        <p className=&apos;text-xl text-zion-slate-light max-w-3xl mx-auto&apos;>
          Get personalized service recommendations based on your industry, goals, and requirements.Our AI analyzes your profile to suggest the perfect solutions for your business.&apos;</p>
      </motion.div>
      {/* Client Profile Form */}
      <motion.div initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0 &apos;&apos;';
&apos;&apos;'&apos;}} transition={{ delay: 0.1 }} className=&apos;bg-white rounded-lg shadow-lg p-6 mb-8&apos;>'&apos;&apos;'&apos;&apos;
        <h2 className=&apos;text-2xl font-bold text-zion-blue-dark mb-6 flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
          <Brain className=&apos;w-6 h-6 text-zion-cyan&apos;/>
          Tell Us About Your Business&apos;
        </h2>&apos;&apos;';
        &apos;&apos;'&apos;&apos;'
        <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-6&apos;>'&apos;&apos;''
          <div>&apos;&apos;'&apos;&apos;'
            <label className=&apos;block text-sm font-medium text-zion-slate-dark mb-2&apos;>Industry&apos;</label>
            <select value={clientProfile.industry} onChange = {}
  (e) => setClientProfile(prev => ({ ...prev,
  industry: e.target.value &apos;&apos;';
&apos;&apos;'&apos;}))} className=&apos;w-full p-3 border border-zion-slate-light rounded-md&apos;>'&apos;&apos;'&apos;&apos;
              <option value=&apos;&apos;>Select Industry&apos;&apos;</option>
              {industries.map(industry => (}<option key={industry} value={industry}>{industry}</option>) ) }
            </select>
          </div>
          &apos;&apos;'&apos;&apos;
          <div>&apos;&apos;'&apos;&apos;'
            <label className=&apos;block text-sm font-medium text-zion-slate-dark mb-2&apos;>Comp Size&apos;</label>
            <select value={clientProfile.compSize} onChange = {}
  (e) => setClientProfile(prev => ({ ...prev,
  compSize: e.target.value &apos;&apos;';
&apos;&apos;'&apos;}))} className=&apos;w-full p-3 border border-zion-slate-light rounded-md&apos;>'&apos;&apos;'&apos;&apos;
              <option value=&apos;&apos;>Select Comp Size&apos;&apos;</option>
              {compSizes.map(size => (}<option key={size} value={size}>{size}</option>) ) }
            </select>
          </div>
          &apos;&apos;'&apos;&apos;
          <div>&apos;&apos;'&apos;&apos;'
            <label className=&apos;block text-sm font-medium text-zion-slate-dark mb-2&apos;>Budget Range&apos;</label>
            <select value={clientProfile.budget} onChange = {}
  (e) => setClientProfile(prev => ({ ...prev,
  budget: e.target.value &apos;&apos;';
&apos;&apos;'&apos;}))} className=&apos;w-full p-3 border border-zion-slate-light rounded-md&apos;>'&apos;&apos;'&apos;&apos;
              <option value=&apos;&apos;>Select Budget Range&apos;&apos;</option>
              {budgets.map(budget => (}<option key={budget} value={budget}>{budget}</option>) ) }
            </select>
          </div>
          &apos;&apos;'&apos;&apos;
          <div>&apos;&apos;'&apos;&apos;'
            <label className=&apos;block text-sm font-medium text-zion-slate-dark mb-2&apos;>Implementation Timeline&apos;</label>
            <select value={clientProfile.timeline} onChange = {}
  (e) => setClientProfile(prev => ({ ...prev,
  timeline: e.target.value &apos;&apos;';
&apos;&apos;'&apos;}))} className=&apos;w-full p-3 border border-zion-slate-light rounded-md&apos;>'&apos;&apos;'&apos;&apos;
              <option value=&apos;&apos;>Select Timeline&apos;&apos;</option>
              {timelines.map(timeline => (}<option key={timeline} value={timeline}>{timeline}</option>) ) }
            </select>
          </div>
          &apos;&apos;'&apos;&apos;
          <div>&apos;&apos;'&apos;&apos;'
            <label className=&apos;block text-sm font-medium text-zion-slate-dark mb-2&apos;>Technology Maturity Level&apos;</label>
            <select value={clientProfile.technologyMaturity} onChange = {}
  (e) => setClientProfile(prev => ({ ...prev,
  technologyMaturity: e.target.value &apos;&apos;';
&apos;&apos;'&apos;}))} className=&apos;w-full p-3 border border-zion-slate-light rounded-md&apos;>'&apos;&apos;'&apos;&apos;
              <option value=&apos;&apos;>Select Technology Maturity&apos;&apos;</option>
              {technologyMaturityLevels.map(level => (}<option key={level} value={level}>{level}</option>) ) }
            </select>
          </div>
        </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;mt-6&apos;>'&apos;&apos;'&apos;&apos;
          <label className=&apos;block text-sm font-medium text-zion-slate-dark mb-2&apos;>Primary Business Goals&apos;</label>&apos;&apos;'&apos;&apos;'
          <div className=&apos;grid grid-cols-2 md:grid-cols-3 gap-2&apos;>'&apos;&apos;'{primaryGoals.map(goal => (&apos;}&apos;<label key={goal} className=&apos;flex items-center gap-2 cursor-pointer&apos;>'&apos;&apos;'&apos;&apos;
                <input type=&apos;checkbox&apos; checked={clientProfile.primaryGoals.includes(goal)} onChange = {}
  (e) => {}
                if(e.target.checked) {}
                    setClientProfile(prev => ({ ...prev, primaryGoals[...prev.primaryGoals,
  goal] }) ) }
                else {}
&apos;&apos;';
                    setClientProfile(prev => ({ ...prev, primaryGoals: prev.primaryGoals.filter(g => g !== goal) }))}&apos;&apos;'&apos;}} className=&apos;rounded text-zion-cyan&apos;/>&apos;&apos;'&apos;&apos;'
                <span className=&apos;text-sm text-zion-slate-light&apos;>{goal}&apos;</span>
              </label>))}
          </div>
        </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;mt-6&apos;>'&apos;&apos;'&apos;&apos;
          <label className=&apos;block text-sm font-medium text-zion-slate-dark mb-2&apos;>Current Challenges&apos;</label>&apos;&apos;'&apos;&apos;'
          <div className=&apos;grid grid-cols-2 md:grid-cols-3 gap-2&apos;>'&apos;&apos;'{challenges.map(challenge => (&apos;}&apos;<label key={challenge} className=&apos;flex items-center gap-2 cursor-pointer&apos;>'&apos;&apos;'&apos;&apos;
                <input type=&apos;checkbox&apos; checked={clientProfile.challenges.includes(challenge)} onChange = {}
  (e) => {}
                if(e.target.checked) {}
                    setClientProfile(prev => ({ ...prev, challenges[...prev.challenges,
  challenge] }) ) }
                else {}
&apos;&apos;';
                    setClientProfile(prev => ({ ...prev, challenges: prev.challenges.filter(c => c !== challenge) }))}&apos;&apos;'&apos;}} className=&apos;rounded text-zion-cyan&apos;/>&apos;&apos;'&apos;&apos;'
                <span className=&apos;text-sm text-zion-slate-light&apos;>{challenge}&apos;</span>
              </label>))}
          </div>
        </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;mt-8 text-center&apos;>'&apos;&apos;'&apos;&apos;
          <Button className=&apos;bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hove,r:to-zion-purple-dark text-lg px-8 py-4&apos; onClick={generateRecommendations} disabled={!isFormComplete() || isAnalyzing}>&apos;&apos;'{isAnalyzing ? (&apos;}&apos;<>&apos;&apos;'&apos;&apos;'
                <div className=&apos;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&apos;>&apos;'</div>
                Analyzing Your Profile...&apos;&apos;'&apos;&apos;
              </>) : (<>&apos;&apos;'&apos;&apos;'
                <Brain className=&apos;w-5 h-5 mr-2&apos;/>
                Get AI Recommendations&apos;
              </>) }
          </Button>
        </div>
      </motion.div>
      {/* Recommendations Results */}
      {showResults && (}<motion.div initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0';&apos;}} transition={{ delay: 0.2 }}>&apos;&apos;'&apos;&apos;'
          <h2 className=&apos;text-2xl font-bold text-zion-blue-dark mb-6 text-center&apos;>
            Your Personalized Service Recommendations&apos;
          </h2>&apos;&apos;';
          &apos;&apos;'&apos;&apos;'
          <div className=&apos;space-y-6&apos;>
            {recommendations.map((rec, index) => (&apos;}<motion.div key={rec.service.id} initial = {}
  { opacity: 0,
  x: -20}} animate = {}
  { opacity: 1,
  x: 0';&apos;}} transition={{ delay: 0.1 * index }}>&apos;&apos;'&apos;&apos;'
                <Card className=&apos;hover:shadow-lg transition-shadow&apos;>'&apos;&apos;''
                  <CardHeader>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;flex items-start justify-between&apos;>'&apos;&apos;'&apos;&apos;
                      <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
                        <CardTitle className=&apos;text-xl text-zion-blue-dark mb-2&apos;>
                          {rec.service.title}&apos;&apos;'&apos;&apos;
                        </CardTitle>&apos;&apos;'&apos;&apos;'
                        <p className=&apos;text-zion-slate-light mb-3&apos;>
                          {rec.service.description}&apos;
                        </p>&apos;&apos;';
                        &apos;&apos;'&apos;&apos;'
                        <div className=&apos;flex flex-wrap gap-2 mb-4&apos;>&apos;'
                          <Badge className={getPriorityColor(rec.priority)}>
                            Priority: {rec.priority}
                          </Badge>
                          <Badge className={getComplexityColor (rec.implementationComplexity) }>
                            Complexity: {rec.implementationComplexity}&apos;&apos;'&apos;&apos;
                          </Badge>&apos;&apos;'&apos;&apos;'
                          <Badge className=&apos;bg-zion-cyan/10 text-zion-cyan&apos;>
                            Match Score: {rec.matchScore}%&apos;
                          </Badge>
                        </div>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;text-right ml-4&apos;>'&apos;&apos;'&apos;&apos;
                        <div className=&apos;text-2xl font-bold text-zion-cyan mb-1&apos;>
                          {rec.service.price}&apos;&apos;'&apos;&apos;
                        </div>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;text-sm text-zion-slate-light&apos;>
                          {rec.service.duration}&apos;
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  &apos;&apos;'&apos;&apos;
                  <CardContent>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;grid grid-cols-1 lg:grid-cols-2 gap-6&apos;>'&apos;&apos;''
                      <div>&apos;&apos;'&apos;&apos;'
                        <h4 className=&apos;font-semibold text-zion-slate-dark mb-3 flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                          <Lightbulb className=&apos;w-4 h-4 text-zion-purple&apos;/>
                          Why This Service Matches&apos;&apos;'&apos;&apos;
                        </h4>&apos;&apos;'&apos;&apos;'
                        <ul className=&apos;space-y-2&apos;>'&apos;&apos;'{rec.reasoning.map((reason, idx) => (&apos;}&apos;<li key={idx} className=&apos;text-sm text-zion-slate-light flex items-start gap-2&apos;>'&apos;&apos;'&apos;&apos;
                              <CheckCircle className=&apos;w-4 h-4 text-green-500 mt-0.5 flex-shrink-0&apos;/>
                              {reason}&apos;
                            </li>) ) }
                        </ul>
                      </div>
                      &apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <h4 className=&apos;font-semibold text-zion-slate-dark mb-3 flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                          <BarChart3 className=&apos;w-4 h-4 text-zion-cyan&apos;/>
                          Implementation Details&apos;&apos;'&apos;&apos;
                        </h4>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;space-y-3&apos;>'&apos;&apos;'&apos;&apos;
                          <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                            <span className=&apos;text-sm text-zion-slate-light&apos;>Expected ROI:&apos;</span>&apos;&apos;'&apos;&apos;'
                            <span className=&apos;text-sm font-medium text-zion-slate-dark&apos;>{rec.expectedROI}&apos;</span>&apos;&apos;'&apos;&apos;
                          </div>&apos;&apos;'&apos;&apos;'
                          <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                            <span className=&apos;text-sm text-zion-slate-light&apos;>Time to Value:&apos;</span>&apos;&apos;'&apos;&apos;'
                            <span className=&apos;text-sm font-medium text-zion-slate-dark&apos;>{rec.timeToValue}&apos;</span>&apos;&apos;'&apos;&apos;
                          </div>&apos;&apos;'&apos;&apos;'
                          <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                            <span className=&apos;text-sm text-zion-slate-light&apos;>Category:&apos;</span>&apos;&apos;'&apos;&apos;'
                            <Badge variant=&apos;outline&apos; className=&apos;text-xs&apos;>
                              {rec.service.category.toUpperCase()}&apos;
                            </Badge>
                          </div>
                        </div>&apos;&apos;';
                        &apos;&apos;'&apos;&apos;'
                        <div className=&apos;mt-4&apos;>'&apos;&apos;'&apos;&apos;
                          <Button className=&apos;w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hove,r:to-zion-purple-dark&apos; onClick = {}
';
  () => window.open(rec.service.link,_blank&apos;)}>&apos;&apos;';
                            Learn More&apos;&apos;'&apos;&apos;'
                            <ArrowRight className=&apos;w-4 h-4 ml-2&apos;/>&apos;
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>) ) }
          </div>
          {/* CTA Section */}
          <motion.div initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0 &apos;&apos;';
&apos;&apos;'&apos;}} transition={{ delay: 0.4 }} className=&apos;mt-12 text-center&apos;>'&apos;&apos;'&apos;&apos;
            <div className=&apos;bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white&apos;>'&apos;&apos;'&apos;&apos;
              <h3 className=&apos;text-3xl font-bold mb-4&apos;>Ready to Get Started?&apos;</h3>&apos;&apos;'&apos;&apos;'
              <p className=&apos;text-xl mb-6 max-w-2xl mx-auto&apos;>
                Our expert team is ready to help you implement the perfect solution;
                for your business needs. Contact us today for a personalized consultation.&apos;&apos;'&apos;&apos;
              </p>&apos;&apos;'&apos;&apos;'
              <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>'&apos;&apos;'&apos;&apos;
                <Button className=&apos;bg-white text-zion-purple hove,r:bg-zion-slate-light&apos; onClick = {}
';
  () => window.open(&apos;mailto:kleber@ziontechgroup.com?subject=Service Recommendation Consultation&apos;,_blank&apos;);
&apos;&apos;'}>&apos;&apos;'&apos;&apos;'
                  <Users className=&apos;w-5 h-5 mr-2&apos;/>
                  Get Expert Consultation&apos;&apos;'&apos;&apos;
                </Button>&apos;&apos;'&apos;&apos;'
                <Button variant=&apos;outline&apos; className=&apos;border-white text-white hover:bg-white hove,r:text-zion-purple&apos; onClick = {}
';
  () => window.open(&apos;tel:+13024640950&apos;,_blank&apos;);
&apos;&apos;'}>&apos;&apos;'&apos;&apos;'
                  <Zap className=&apos;w-5 h-5 mr-2&quot;/>
                  Call Now&quot;
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>)}
    </div>)}
export default AdvancedServiceRecommendation;
export { AdvancedServiceRecommendation }
;
export { AdvancedServiceRecommendation }
;
export { AdvancedServiceRecommendation }
;
export { AdvancedServiceRecommendation }

export { AdvancedServiceRecommendation }