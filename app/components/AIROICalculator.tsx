import { TrendingUp, DollarSign, Zap, Calculator } from 'lucide-react';
import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Zap } from 'lucide-react';




export default function AIROICalculator() {
  const [annualRevenue, setAnnualRevenue] = useState(1000000);
  const [currentEfficiency, setCurrentEfficiency] = useState(70);
  const [aiImplementationCost, setAiImplementationCost] = useState(100000);

  const efficiencyGain = 95 - currentEfficiency;
  const potentialSavings = (annualRevenue * efficiencyGain) / 100;
  const roi = ((potentialSavings - aiImplementationCost) / aiImplementationCost) * 100;
  const paybackPeriod = aiImplementationCost / (potentialSavings / 12);

  return (
    <div>
      <div>
        <div>
          <Calculator />
        </div>
        <h3>AI ROI Calculator</h3>
        <p>Calculate your potential return on investment with AI transformation</p>
      </div>

      <div>
        <div>
          <label>
            Annual Revenue ($)
          </label>
          <input
            type="number"
            value={annualRevenue}
            onChange={(e) => setAnnualRevenue(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label>
            Current Efficiency (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={currentEfficiency}
            onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label>
            AI Implementation Cost ($)
          </label>
          <input
            type="number"
            value={aiImplementationCost}
            onChange={(e) => setAiImplementationCost(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <TrendingUp />
            </div>
            <h4>Potential ROI</h4>
          </div>
          <div>
            {roi > 0 ? `+${roi.toFixed(0)}%` : `${roi.toFixed(0)}%`}
          </div>
          <p>
            {roi > 0 ? 'Excellent investment opportunity' : 'Consider optimizing parameters'}
          </p>
        </div>

        <div>
          <div>
            <div>
              <DollarSign />
            </div>
            <h4>Annual Savings</h4>
          </div>
          <div>
            ${(potentialSavings / 1000000).toFixed(1)}M
          </div>
          <p>
            Based on {efficiencyGain}% efficiency gain
          </p>
        </div>

        <div>
          <div>
            <div>
              <Zap />
            </div>
            <h4>Payback Period</h4>
          </div>
          <div>
            {paybackPeriod.toFixed(1)} months
          </div>
          <p>
            Time to recover investment
          </p>
        </div>
      </div>

      <div>
        <h4>Key Assumptions</h4>
        <ul>
          <li>• AI systems can achieve up to 95% operational efficiency</li>
          <li>• Efficiency gains translate directly to cost savings</li>
          <li>• Implementation costs are one-time investments</li>
          <li>• Results may vary based on industry and implementation quality</li>
        </ul>
      </div>
    </div>
  );
}